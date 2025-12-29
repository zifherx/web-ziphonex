export const API_ENDPOINTS = {
  socialMedia: {
    base: "/social-media",
    byId: (id: string) => `/social-media/${id}`,
    toggle: (id: string) => `/social-media/${id}`,
    bulkOrder: `/social-media`,
  },
  testimonal: {
    base: "/testimonials",
    byId: (id: string) => `/testimonials/${id}`,
    toggle: (id: string) => `/testimonials/${id}`,
    publish: (id: string) => `/testimonials/${id}/publish`,
    archive: (id: string) => `/testimonials/${id}/archive`,
  },
} as const;
