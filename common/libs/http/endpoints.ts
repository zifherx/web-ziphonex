export const API_ENDPOINTS = {
  socialMedia: {
    base: "/social-media",
    byId: (id: string) => `/social-media/${id}`,
    toggle: (id: string) => `/social-media/${id}`,
    bulkOrder: `/social-media`,
  },
} as const;
