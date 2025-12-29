export const TOAST_MESSAGES = {
  // Social Media
  SOCIAL_MEDIA: {
    CREATE_SUCCESS: {
      title: "✅ Red social creada",
      description: "La red social se ha creado exitosamente",
    },
    CREATE_ERROR: {
      title: "❌ Error al crear",
      description: "No se puede crear la red social",
    },
    UPDATE_SUCCESS: {
      title: "✅ Red social actualizada",
      description: "La red social se ha actualizado exitosamente",
    },
    UPDATE_ERROR: {
      title: "❌ Error al actualizar",
      description: "No se puede actualizar la red social",
    },
    DELETE_SUCCESS: {
      title: "✅ Red social eliminada",
      description: "La red social se ha eliminado exitosamente",
    },
    DELETE_ERROR: {
      title: "❌ Error al eliminar",
      description: "No se puede eliminar la red social",
    },
    TOGGLE_SUCCESS: {
      title: "✅ Estado actualizado",
      description: "El estado de la red social se ha actualizado",
    },
    TOGGLE_ERROR: {
      title: "❌ Error al cambiar estado",
      description: "No se pudo cambiar el estado",
    },
    FETCH_ERROR: {
      title: "❌ Error al cargar",
      description: "No se pudieron cargar las redes sociales",
    },
    REFRESH_SUCCESS: {
      title: "✅ Actualizado",
      description: "Contenido actualizado correctamente",
    },
  },
  GENERAL: {
    LOADING: {
      title: "⌛ Procesando",
      description: "Por favor espere...",
    },
    NETWORK_ERROR: {
      title: "❌ Error de conexión",
      description: "Verifica tu conexión a internet",
    },
    UNEXPECTED_ERROR: {
      title: "❌ Error inesperado",
      description: "Algo salió mal, intenta nuevamente",
    },
    SUCCESS: {
      title: "✅ Éxito",
      description: "Operación completada exitosamente",
    },
  },
  TESTIMONIAL: {
    CREATE_SUCCESS: {
      title: "✅ Testimonio creado",
      description: "El testimonio se ha creado correctamente",
    },
    CREATE_ERROR: {
      title: "❌ Error al crear",
      description: "No se pudo crear el testimonio",
    },
    UPDATE_SUCCESS: {
      title: "✅ Testimonio actualizado",
      description: "El testimonio se ha actualizado correctamente",
    },
    UPDATE_ERROR: {
      title: "❌ Error al actualizar",
      description: "No se pudo actualizar el testimonio",
    },
    DELETE_SUCCESS: {
      title: "✅ Testimonio eliminado",
      description: "El testimonio se ha eliminado correctamente",
    },
    DELETE_ERROR: {
      title: "❌ Error al eliminar",
      description: "No se pudo eliminar el testimonio",
    },
    TOGGLE_SUCCESS: {
      title: "✅ Estado actualizado",
      description: "El estado del testimonio se ha actualizado correctamente",
    },
    TOGGLE_ERROR: {
      title: "❌ Error al cambiar estado",
      description: "No se pudo cambiar el estado del testimonio",
    },
    REFRESH_SUCCESS: {
      title: "✅ Actualizado",
      description: "Contenido actualizado correctamente",
    },
  },
} as const;

export type ToastMessageKey = keyof typeof TOAST_MESSAGES;
export type SocialMediaMessageKey = keyof typeof TOAST_MESSAGES.SOCIAL_MEDIA;
