import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from "@tanstack/react-query";

import { CreateSocialMediaDto } from "@/common/dto/social-media/create-social-media.dto";
import { UpdateSocialMediaDto } from "@/common/dto/social-media/update-social-media.dto";
import { BulkdOrderDto } from "@/common/dto/social-media/bulk-order.dto";
import { SocialMediaResponseDto } from "@/common/dto/social-media/social-media-response.dto";

import { getApiClient } from "@/common/libs/http/api-client";
import { API_ENDPOINTS } from "@/common/libs/http/endpoints";

const apiClient = getApiClient();

// QUERY KEYS
export const socialMediaKeys = {
  all: ["socialMedia"] as const,
  lists: () => [...socialMediaKeys.all, "list"] as const,
  list: (includeInactive: boolean) =>
    [...socialMediaKeys.lists(), { includeInactive }] as const,
  details: () => [...socialMediaKeys.all, "detail"] as const,
  detail: (id: string) => [...socialMediaKeys.details(), id] as const,
};

// API CALLS
export const socialMediaApi = {
  getAll: async (
    includeInactive = false
  ): Promise<SocialMediaResponseDto[]> => {
    return apiClient.get<SocialMediaResponseDto[]>(
      API_ENDPOINTS.socialMedia.base,
      { includeInactive: includeInactive.toString() }
    );
  },

  getById: async (id: string): Promise<SocialMediaResponseDto> => {
    return apiClient.get<SocialMediaResponseDto>(
      API_ENDPOINTS.socialMedia.byId(id)
    );
  },

  create: async (
    data: CreateSocialMediaDto
  ): Promise<SocialMediaResponseDto> => {
    return apiClient.post<SocialMediaResponseDto>(
      API_ENDPOINTS.socialMedia.base,
      data
    );
  },

  update: async (
    id: string,
    data: UpdateSocialMediaDto
  ): Promise<SocialMediaResponseDto> => {
    return apiClient.patch<SocialMediaResponseDto>(
      API_ENDPOINTS.socialMedia.byId(id),
      data
    );
  },

  delete: async (id: string): Promise<SocialMediaResponseDto> => {
    return apiClient.delete<SocialMediaResponseDto>(
      API_ENDPOINTS.socialMedia.byId(id)
    );
  },

  toggleActive: async (id: string): Promise<SocialMediaResponseDto> => {
    return apiClient.patch<SocialMediaResponseDto>(
      API_ENDPOINTS.socialMedia.toggle(id)
    );
  },

  updateBulkOrder: async (
    data: BulkdOrderDto
  ): Promise<SocialMediaResponseDto[]> => {
    return apiClient.patch<SocialMediaResponseDto[]>(
      API_ENDPOINTS.socialMedia.bulkOrder,
      data
    );
  },
};

// HOOKS

/**
 * Hook para obtener lista de redes sociales
 */
export function useSocialMediaList(
  includeInactive = false,
  options?: Omit<
    UseQueryOptions<SocialMediaResponseDto[], Error>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery({
    queryKey: socialMediaKeys.list(includeInactive),
    queryFn: () => socialMediaApi.getAll(includeInactive),
    staleTime: 0,
    gcTime: 5 * 60 * 1000,
    ...options,
  });
}

/**
 * Hook para obtener una red social por Id
 */
export function useSocialMedia(
  id: string,
  options?: Omit<
    UseQueryOptions<SocialMediaResponseDto>,
    "queryKey" | "queryFn"
  >
) {
  return useQuery({
    queryKey: socialMediaKeys.detail(id),
    queryFn: () => socialMediaApi.getById(id),
    enabled: !!id,
    staleTime: 0,
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

      const previousList = queryClient.getQueryData<SocialMediaResponseDto[]>(
        socialMediaKeys.list(true)
      );

      if (previousList) {
        const optimisticItem: SocialMediaResponseDto = {
          id: "temp-" + Date.now(),
          label: newData.label,
          icon: newData.icon,
          href: newData.href,
          order: previousList.length,
          status: newData.status ?? "default",
          isActive: newData.isActive ?? true,
          openInNewTab: newData.openInNewTab ?? true,
          color: newData.color,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };

        queryClient.setQueryData<SocialMediaResponseDto[]>(
          socialMediaKeys.list(true),
          [...previousList, optimisticItem]
        );
      }
      return { previousList };
    },
    onError: (error, variables, context) => {
      if (context?.previousList) {
        queryClient.setQueryData(
          socialMediaKeys.list(true),
          context.previousList
        );
      }
      console.error(`Error al crear red social`, error);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: socialMediaKeys.lists() });
    },
  });
}

/**
 * Hook para actualizar red social
 */
export function useUpdateSocialMedia() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: UpdateSocialMediaDto }) =>
      socialMediaApi.update(id, data),

    onMutate: async ({ id, data }) => {
      await queryClient.cancelQueries({ queryKey: socialMediaKeys.lists() });

      const previousList = queryClient.getQueryData<SocialMediaResponseDto[]>(
        socialMediaKeys.list(true)
      );

      if (previousList) {
        queryClient.setQueryData<SocialMediaResponseDto[]>(
          socialMediaKeys.list(true),
          previousList.map((item) =>
            item.id === id
              ? { ...item, ...data, updatedAt: new Date().toISOString() }
              : item
          )
        );
      }
      return { previousList };
    },
    onError(error, variables, context) {
      if (context?.previousList) {
        queryClient.setQueryData(
          socialMediaKeys.list(true),
          context.previousList
        );
      }
      console.error(`Error al actualizar red social:`, error);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: socialMediaKeys.lists() }),
        queryClient.invalidateQueries({
          queryKey: socialMediaKeys.detail(data.id),
        });
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

      const previousList = queryClient.getQueryData<SocialMediaResponseDto[]>(
        socialMediaKeys.list(true)
      );

      if (previousList) {
        queryClient.setQueryData<SocialMediaResponseDto[]>(
          socialMediaKeys.list(true),
          previousList.filter((item) => item.id !== id)
        );
      }
      return { previousList };
    },

    onError: (error, variables, context) => {
      if (context?.previousList) {
        queryClient.setQueryData(
          socialMediaKeys.list(true),
          context.previousList
        );
      }
      console.error(`Error al eliminar red social:`, error);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: socialMediaKeys.lists() });
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

      const previousList = queryClient.getQueryData<SocialMediaResponseDto[]>(
        socialMediaKeys.list(true)
      );

      if (previousList) {
        queryClient.setQueryData<SocialMediaResponseDto[]>(
          socialMediaKeys.list(true),
          previousList.map((item) =>
            item.id === id ? { ...item, isActive: !item.isActive } : item
          )
        );
      }

      return { previousList };
    },

    onError: (error, variables, context) => {
      if (context?.previousList) {
        queryClient.setQueryData(
          socialMediaKeys.list(true),
          context.previousList
        );
      }
      console.error("Error al cambiar estado:", error);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: socialMediaKeys.lists() });
    },
  });
}

/**
 * Hook para actualizar orden masivo  (drag & drop)
 */
export function useUpdateBulkOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: BulkdOrderDto) => socialMediaApi.updateBulkOrder(data),

    onMutate: async (data) => {
      await queryClient.cancelQueries({ queryKey: socialMediaKeys.lists() });

      const previousList = queryClient.getQueryData<SocialMediaResponseDto[]>(
        socialMediaKeys.list(true)
      );

      // Optimistic reorder
      if (previousList) {
        const reorderedList = [...previousList];
        data.items.forEach(({ id, order }) => {
          const index = reorderedList.findIndex((item) => item.id === id);
          if (index !== -1) {
            reorderedList[index] = { ...reorderedList[index], order };
          }
        });

        reorderedList.sort((a, b) => a.order - b.order);

        queryClient.setQueryData<SocialMediaResponseDto[]>(
          socialMediaKeys.list(true),
          reorderedList
        );
      }

      return { previousList };
    },

    onError: (error, variables, context) => {
      if (context?.previousList) {
        queryClient.setQueryData(
          socialMediaKeys.list(true),
          context.previousList
        );
      }
      console.error("Error al actualizar orden:", error);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: socialMediaKeys.lists() });
    },
  });
}
