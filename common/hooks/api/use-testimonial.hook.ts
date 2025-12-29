import { useMutation, useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";

import { CreateTestimonialDto } from "@/common/dto/testimonial/create-testimonial.dto";
import { UpdateTestimonialDto } from "@/common/dto/testimonial/update-testimonial.dto";
import { TestimonialResponseDto } from "@/common/dto/testimonial/testimonial-response.dto";

import { getApiClient } from "@/common/libs/http/api-client";
import { API_ENDPOINTS } from "@/common/libs/http/endpoints";
import { TOAST_MESSAGES } from "@/common/constants/toast-message.constants";
import { showErrorToast, showSuccessToast } from "@/common/helpers/toast.helper";

const apiClient = getApiClient();

// QUERY KEYS
export const testimonialKeys = {
  all: ["testimonials"] as const,
  lists: () => [...testimonialKeys.all, "list"] as const,
  list: (includeInactive: boolean) => [...testimonialKeys.lists(), { includeInactive }] as const,
  byRating: (minRating: number) => [...testimonialKeys.all, "rating", minRating] as const,
  details: () => [...testimonialKeys.all, "detail"] as const,
  detail: (id: string) => [...testimonialKeys.details(), id] as const,
};

// API CALLS
export const testimonialApi = {
  getAll: async (includeInactive = false): Promise<TestimonialResponseDto[]> => {
    return apiClient.get<TestimonialResponseDto[]>(API_ENDPOINTS.testimonal.base, {
      includeInactive: includeInactive.toString(),
    });
  },

  getByRating: async (minRating: number): Promise<TestimonialResponseDto[]> => {
    return apiClient.get<TestimonialResponseDto[]>(API_ENDPOINTS.testimonal.base, { minRating: minRating.toString() });
  },

  getById: async (id: string): Promise<TestimonialResponseDto> => {
    return apiClient.get<TestimonialResponseDto>(API_ENDPOINTS.testimonal.byId(id));
  },

  create: async (data: CreateTestimonialDto): Promise<TestimonialResponseDto> => {
    return apiClient.post<TestimonialResponseDto>(API_ENDPOINTS.testimonal.base, data);
  },

  update: async (id: string, data: UpdateTestimonialDto): Promise<TestimonialResponseDto> => {
    return apiClient.put<TestimonialResponseDto>(API_ENDPOINTS.testimonal.byId(id), data);
  },

  delete: async (id: string): Promise<TestimonialResponseDto> => {
    return apiClient.delete<TestimonialResponseDto>(API_ENDPOINTS.testimonal.byId(id));
  },

  toggleActive: async (id: string): Promise<TestimonialResponseDto> => {
    return apiClient.patch<TestimonialResponseDto>(API_ENDPOINTS.testimonal.toggle(id));
  },
};

// HOOKS

/**
 * Hook para obtener lista de testimonios
 */
export function useTestimonialList(
  includeInactive = false,
  options?: Omit<UseQueryOptions<TestimonialResponseDto[], Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: testimonialKeys.list(includeInactive),
    queryFn: () => testimonialApi.getAll(includeInactive),
    staleTime: 30 * 1000, // 30 segundos
    gcTime: 5 * 60 * 1000, // 5 minutos
    ...options,
  });
}

/**
 * Hook para obtener testimonios por calificación mínima
 */
export function useTestimonialsByRating(
  minRating: number,
  options?: Omit<UseQueryOptions<TestimonialResponseDto[], Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: testimonialKeys.byRating(minRating),
    queryFn: () => testimonialApi.getByRating(minRating),
    enabled: minRating >= 1 && minRating <= 5,
    staleTime: 30 * 1000,
    gcTime: 5 * 60 * 1000,
    ...options,
  });
}

/**
 * Hook para obtener un testimonio por Id
 */
export function useTestimonial(
  id: string,
  options?: Omit<UseQueryOptions<TestimonialResponseDto>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: testimonialKeys.detail(id),
    queryFn: () => testimonialApi.getById(id),
    enabled: !!id,
    staleTime: 30 * 1000, // 30 segundos
    ...options,
  });
}

/**
 * Hook para crear un testimonio
 */
export function useCreateTestimonial() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateTestimonialDto) => testimonialApi.create(data),

    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: testimonialKeys.lists() });

      const previousListAll = queryClient.getQueryData<TestimonialResponseDto[]>(testimonialKeys.list(true));
      const previousListActive = queryClient.getQueryData<TestimonialResponseDto[]>(testimonialKeys.list(false));

      if (previousListAll) {
        const optimisticItem: TestimonialResponseDto = {
          id: "temp-" + Date.now(),
          resena: newData.resena,
          rating: newData.rating,
          author: newData.author,
          status: newData.status ?? "draft",
          isActive: newData.isActive ?? true,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        queryClient.setQueryData<TestimonialResponseDto[]>(testimonialKeys.list(true), [
          ...previousListAll,
          optimisticItem,
        ]);

        if (optimisticItem.isActive && previousListActive) {
          queryClient.setQueryData<TestimonialResponseDto[]>(testimonialKeys.list(false), [
            ...previousListActive,
            optimisticItem,
          ]);
        }
      }

      return { previousListAll, previousListActive };
    },

    onError: (error, variables, context) => {
      if (context?.previousListAll) {
        queryClient.setQueryData(testimonialKeys.list(true), context.previousListAll);
      }
      if (context?.previousListActive) {
        queryClient.setQueryData(testimonialKeys.list(false), context.previousListActive);
      }

      showErrorToast(TOAST_MESSAGES.TESTIMONIAL.CREATE_ERROR, error);
      console.error(`Error al crear testimonio`, error);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: testimonialKeys.lists() });
      queryClient.invalidateQueries({ queryKey: testimonialKeys.all });
      showSuccessToast(TOAST_MESSAGES.TESTIMONIAL.CREATE_SUCCESS);
    },
  });
}

/**
 * Hook para actualizar testimonio
 */
export function useUpdateTestimonial() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateTestimonialDto }) => testimonialApi.update(id, data),

    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: testimonialKeys.lists() });

      const previousListAll = queryClient.getQueryData<TestimonialResponseDto[]>(testimonialKeys.list(true));
      const previousListActive = queryClient.getQueryData<TestimonialResponseDto[]>(testimonialKeys.list(false));

      if (previousListAll) {
        const updatedListAll = previousListAll.map((item) =>
          item.id === id ? { ...item, ...data, updatedAt: new Date().toISOString() } : item
        );

        queryClient.setQueryData<TestimonialResponseDto[]>(testimonialKeys.list(true), updatedListAll);
      }

      if (previousListActive) {
        const itemInList = previousListActive.find((item) => item.id === id);

        if (itemInList) {
          if (data.isActive === false) {
            queryClient.setQueryData<TestimonialResponseDto[]>(
              testimonialKeys.list(false),
              previousListActive.filter((item) => item.id !== id)
            );
          } else {
            queryClient.setQueryData<TestimonialResponseDto[]>(
              testimonialKeys.list(false),
              previousListActive.map((item) =>
                item.id === id ? { ...item, ...data, updatedAt: new Date().toISOString() } : item
              )
            );
          }
        } else {
          if (data.isActive === true && previousListAll) {
            const originalItem = previousListAll.find((item) => item.id === id);

            if (originalItem) {
              queryClient.setQueryData<TestimonialResponseDto[]>(testimonialKeys.list(false), [
                ...previousListActive,
                { ...originalItem, ...data, updatedAt: new Date().toISOString() },
              ]);
            }
          }
        }
      }

      return { previousListAll, previousListActive };
    },

    onError(error, variables, context) {
      if (context?.previousListAll) {
        queryClient.setQueryData(testimonialKeys.list(true), context.previousListAll);
      }

      if (context?.previousListActive) {
        queryClient.setQueryData(testimonialKeys.list(false), context.previousListActive);
      }

      showErrorToast(TOAST_MESSAGES.TESTIMONIAL.UPDATE_ERROR, error);
      console.error(`Error al actualizar testimonio: `, error);
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: testimonialKeys.lists() });
      queryClient.invalidateQueries({ queryKey: testimonialKeys.detail(data.id) });
      queryClient.invalidateQueries({ queryKey: testimonialKeys.all });
      showSuccessToast(TOAST_MESSAGES.TESTIMONIAL.UPDATE_SUCCESS);
    },
  });
}

/**
 * Hook para eliminar testimonio
 */
export function useDeleteTestimonial() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => testimonialApi.delete(id),

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: testimonialKeys.lists() });

      const previousListAll = queryClient.getQueryData<TestimonialResponseDto[]>(testimonialKeys.list(true));
      const previousListActive = queryClient.getQueryData<TestimonialResponseDto[]>(testimonialKeys.list(false));

      if (previousListAll) {
        queryClient.setQueryData<TestimonialResponseDto[]>(
          testimonialKeys.list(true),
          previousListAll.filter((item) => item.id !== id)
        );
      }

      if (previousListActive) {
        queryClient.setQueryData<TestimonialResponseDto[]>(
          testimonialKeys.list(false),
          previousListActive.filter((item) => item.id !== id)
        );
      }
      return { previousListAll, previousListActive };
    },

    onError: (error, variables, context) => {
      if (context?.previousListAll) {
        queryClient.setQueryData(testimonialKeys.list(true), context.previousListAll);
      }
      if (context?.previousListActive) {
        queryClient.setQueryData(testimonialKeys.list(false), context.previousListActive);
      }

      showErrorToast(TOAST_MESSAGES.TESTIMONIAL.DELETE_ERROR, error);
      console.error(`Error al eliminar testimonio:`, error);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: testimonialKeys.lists() });
      queryClient.invalidateQueries({ queryKey: testimonialKeys.all });
      showSuccessToast(TOAST_MESSAGES.TESTIMONIAL.DELETE_SUCCESS);
    },
  });
}

/**
 * Hook para toggle activo/inactivo
 */
export function useToggleActiveTestimonial() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => testimonialApi.toggleActive(id),

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: testimonialKeys.lists() });

      const previousListAll = queryClient.getQueryData<TestimonialResponseDto[]>(testimonialKeys.list(true));
      const previousListActive = queryClient.getQueryData<TestimonialResponseDto[]>(testimonialKeys.list(false));

      const itemToToggle = previousListAll?.find((item) => item.id === id);

      if (previousListAll) {
        queryClient.setQueryData<TestimonialResponseDto[]>(
          testimonialKeys.list(true),
          previousListAll.map((item) => (item.id === id ? { ...item, isActive: !item.isActive } : item))
        );
      }

      if (previousListActive && itemToToggle) {
        if (itemToToggle.isActive) {
          queryClient.setQueryData<TestimonialResponseDto[]>(
            testimonialKeys.list(false),
            previousListActive.filter((item) => item.id !== id)
          );
        } else {
          queryClient.setQueryData<TestimonialResponseDto[]>(testimonialKeys.list(false), [
            ...previousListActive,
            { ...itemToToggle, isActive: true },
          ]);
        }
      }

      return { previousListAll, previousListActive };
    },

    onError: (error, variables, context) => {
      if (context?.previousListAll) {
        queryClient.setQueryData(testimonialKeys.list(true), context.previousListAll);
      }

      if (context?.previousListActive) {
        queryClient.setQueryData(testimonialKeys.list(false), context.previousListActive);
      }

      showErrorToast(TOAST_MESSAGES.TESTIMONIAL.TOGGLE_ERROR, error);
      console.error("Error al cambiar estado:", error);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: testimonialKeys.lists() });
      queryClient.invalidateQueries({ queryKey: testimonialKeys.all });
      showSuccessToast(TOAST_MESSAGES.TESTIMONIAL.TOGGLE_SUCCESS);
    },
  });
}
