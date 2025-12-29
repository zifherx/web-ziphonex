import { useMutation, useQuery, useQueryClient, UseQueryOptions } from "@tanstack/react-query";

import { CreateSocialMediaDto } from "@/common/dto/social-media/create-social-media.dto";
import { UpdateSocialMediaDto } from "@/common/dto/social-media/update-social-media.dto";
import { SocialMediaResponseDto } from "@/common/dto/social-media/social-media-response.dto";

import { getApiClient } from "@/common/libs/http/api-client";
import { API_ENDPOINTS } from "@/common/libs/http/endpoints";
import { showErrorToast, showSuccessToast } from "@/common/helpers/toast.helper";
import { TOAST_MESSAGES } from "@/common/constants/toast-message.constants";

const apiClient = getApiClient();

// QUERY KEYS
export const socialMediaKeys = {
  all: ["socialMedia"] as const,
  lists: () => [...socialMediaKeys.all, "list"] as const,
  list: (includeInactive: boolean) => [...socialMediaKeys.lists(), { includeInactive }] as const,
  details: () => [...socialMediaKeys.all, "detail"] as const,
  detail: (id: string) => [...socialMediaKeys.details(), id] as const,
};

// API CALLS
export const socialMediaApi = {
  getAll: async (includeInactive = false): Promise<SocialMediaResponseDto[]> => {
    return apiClient.get<SocialMediaResponseDto[]>(API_ENDPOINTS.socialMedia.base, {
      includeInactive: includeInactive.toString(),
    });
  },

  getById: async (id: string): Promise<SocialMediaResponseDto> => {
    return apiClient.get<SocialMediaResponseDto>(API_ENDPOINTS.socialMedia.byId(id));
  },

  create: async (data: CreateSocialMediaDto): Promise<SocialMediaResponseDto> => {
    return apiClient.post<SocialMediaResponseDto>(API_ENDPOINTS.socialMedia.base, data);
  },

  update: async (id: string, data: UpdateSocialMediaDto): Promise<SocialMediaResponseDto> => {
    return apiClient.put<SocialMediaResponseDto>(API_ENDPOINTS.socialMedia.byId(id), data);
  },

  delete: async (id: string): Promise<SocialMediaResponseDto> => {
    return apiClient.delete<SocialMediaResponseDto>(API_ENDPOINTS.socialMedia.byId(id));
  },

  toggleActive: async (id: string): Promise<SocialMediaResponseDto> => {
    return apiClient.patch<SocialMediaResponseDto>(API_ENDPOINTS.socialMedia.toggle(id));
  },
};

// HOOKS

/**
 * Hook para obtener lista de redes sociales
 */
export function useSocialMediaList(
  includeInactive = false,
  options?: Omit<UseQueryOptions<SocialMediaResponseDto[], Error>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: socialMediaKeys.list(includeInactive),
    queryFn: () => socialMediaApi.getAll(includeInactive),
    // enabled: true,
    staleTime: 30 * 1000,
    gcTime: 5 * 60 * 1000,
    ...options,
  });
}

/**
 * Hook para obtener una red social por Id
 */
export function useSocialMedia(
  id: string,
  options?: Omit<UseQueryOptions<SocialMediaResponseDto>, "queryKey" | "queryFn">
) {
  return useQuery({
    queryKey: socialMediaKeys.detail(id),
    queryFn: () => socialMediaApi.getById(id),
    enabled: !!id,
    staleTime: 30 * 1000,
    ...options,
  });
}

/**
 * Hook para crear red social
 */
export function useCreateSocialMedia() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: CreateSocialMediaDto) => socialMediaApi.create(data),

    onMutate: async (newData) => {
      await queryClient.cancelQueries({ queryKey: socialMediaKeys.lists() });

      const previousListAll = queryClient.getQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(true));
      const previousListActive = queryClient.getQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(false));

      if (previousListAll) {
        const optimisticItem: SocialMediaResponseDto = {
          id: "temp-" + Date.now(),
          label: newData.label,
          icon: newData.icon,
          href: newData.href,
          order: previousListAll.length,
          status: newData.status ?? "draft",
          isActive: newData.isActive ?? true,
          openInNewTab: newData.openInNewTab ?? true,
          color: newData.color,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        queryClient.setQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(true), [
          ...previousListAll,
          optimisticItem,
        ]);

        if (optimisticItem.isActive && previousListActive) {
          queryClient.setQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(false), [
            ...previousListActive,
            optimisticItem,
          ]);
        }
      }

      return { previousListAll, previousListActive };
    },
    onError: (error, variables, context) => {
      if (context?.previousListAll) {
        queryClient.setQueryData(socialMediaKeys.list(true), context.previousListAll);
      }
      if (context?.previousListActive) {
        queryClient.setQueryData(socialMediaKeys.list(false), context.previousListActive);
      }

      showErrorToast(TOAST_MESSAGES.SOCIAL_MEDIA.CREATE_ERROR, error);
      console.error(`Error al crear red social`, error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: socialMediaKeys.lists() });
      showSuccessToast(TOAST_MESSAGES.SOCIAL_MEDIA.CREATE_SUCCESS);
    },
  });
}

/**
 * Hook para actualizar red social
 */
export function useUpdateSocialMedia() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateSocialMediaDto }) => socialMediaApi.update(id, data),

    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: socialMediaKeys.lists() });

      const previousListAll = queryClient.getQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(true));
      const previousListActive = queryClient.getQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(false));

      if (previousListAll) {
        const updatedListAll = previousListAll.map((item) =>
          item.id === id ? { ...item, ...data, updatedAt: new Date().toISOString() } : item
        );

        queryClient.setQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(true), updatedListAll);
      }

      if (previousListActive) {
        const itemInList = previousListActive.find((item) => item.id === id);

        if (itemInList) {
          if (data.isActive === false) {
            queryClient.setQueryData<SocialMediaResponseDto[]>(
              socialMediaKeys.list(false),
              previousListActive.filter((item) => item.id !== id)
            );
          } else {
            queryClient.setQueryData<SocialMediaResponseDto[]>(
              socialMediaKeys.list(false),
              previousListActive.map((item) =>
                item.id === id ? { ...item, ...data, updatedAt: new Date().toISOString() } : item
              )
            );
          }
        } else {
          if (data.isActive === true && previousListAll) {
            const originalItem = previousListAll.find((item) => item.id === id);

            if (originalItem) {
              queryClient.setQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(false), [
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
        queryClient.setQueryData(socialMediaKeys.list(true), context.previousListAll);
      }

      if (context?.previousListActive) {
        queryClient.setQueryData(socialMediaKeys.list(false), context.previousListActive);
      }

      showErrorToast(TOAST_MESSAGES.SOCIAL_MEDIA.UPDATE_ERROR, error);
      console.error(`Error al actualizar red social: `, error);
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: socialMediaKeys.lists() }),
        queryClient.invalidateQueries({ queryKey: socialMediaKeys.detail(data.id) });
      showSuccessToast(TOAST_MESSAGES.SOCIAL_MEDIA.UPDATE_SUCCESS);
    },
  });
}

/**
 * Hook para eliminar red social
 */
export function useDeleteSocialMedia() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => socialMediaApi.delete(id),

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: socialMediaKeys.lists() });

      const previousListAll = queryClient.getQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(true));
      const previousListActive = queryClient.getQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(false));

      if (previousListAll) {
        queryClient.setQueryData<SocialMediaResponseDto[]>(
          socialMediaKeys.list(true),
          previousListAll.filter((item) => item.id !== id)
        );
      }

      if (previousListActive) {
        queryClient.setQueryData<SocialMediaResponseDto[]>(
          socialMediaKeys.list(false),
          previousListActive.filter((item) => item.id !== id)
        );
      }
      return { previousListAll, previousListActive };
    },

    onError: (error, variables, context) => {
      if (context?.previousListAll) {
        queryClient.setQueryData(socialMediaKeys.list(true), context.previousListAll);
      }
      if (context?.previousListActive) {
        queryClient.setQueryData(socialMediaKeys.list(false), context.previousListActive);
      }

      showErrorToast(TOAST_MESSAGES.SOCIAL_MEDIA.DELETE_ERROR, error);
      console.error(`Error al eliminar red social:`, error);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: socialMediaKeys.lists() });
      showSuccessToast(TOAST_MESSAGES.SOCIAL_MEDIA.DELETE_SUCCESS);
    },
  });
}

/**
 * Hook para toggle activo/inactivo}
 */
export function useToggleActiveSocialMedia() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => socialMediaApi.toggleActive(id),

    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: socialMediaKeys.lists() });

      const previousListAll = queryClient.getQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(true));
      const previousListActive = queryClient.getQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(false));

      const itemToToggle = previousListAll?.find((item) => item.id === id);

      if (previousListAll) {
        queryClient.setQueryData<SocialMediaResponseDto[]>(
          socialMediaKeys.list(true),
          previousListAll.map((item) => (item.id === id ? { ...item, isActive: !item.isActive } : item))
        );
      }

      if (previousListActive && itemToToggle) {
        if (itemToToggle.isActive) {
          queryClient.setQueryData<SocialMediaResponseDto[]>(
            socialMediaKeys.list(false),
            previousListActive.filter((item) => item.id !== id)
          );
        } else {
          queryClient.setQueryData<SocialMediaResponseDto[]>(socialMediaKeys.list(false), [
            ...previousListActive,
            { ...itemToToggle, isActive: true },
          ]);
        }
      }

      return { previousListAll, previousListActive };
    },

    onError: (error, variables, context) => {
      if (context?.previousListAll) {
        queryClient.setQueryData(socialMediaKeys.list(true), context.previousListAll);
      }

      if (context?.previousListActive) {
        queryClient.setQueryData(socialMediaKeys.list(false), context.previousListActive);
      }

      showErrorToast(TOAST_MESSAGES.SOCIAL_MEDIA.TOGGLE_ERROR, error);
      console.error("Error al cambiar estado:", error);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: socialMediaKeys.lists() });
      showSuccessToast(TOAST_MESSAGES.SOCIAL_MEDIA.TOGGLE_SUCCESS);
    },
  });
}
