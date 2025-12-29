import { toast } from "sonner";

interface ToastMessage {
  title: string;
  description: string;
}

interface ToastOptions {
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export function showSuccessToast(message: ToastMessage, options?: ToastOptions) {
  toast.success(message.title, {
    description: message.description,
    duration: options?.duration ?? 3000,
    action: options?.action,
  });
}

export function showErrorToast(message: ToastMessage, error?: Error | unknown, options?: ToastOptions) {
  const description = error instanceof Error ? `${message.description}: ${error.message}` : message.description;

  toast.error(message.title, {
    description,
    duration: options?.duration ?? 4000,
    action: options?.action,
  });
}

export function showInfoToast(message: ToastMessage, options?: ToastOptions) {
  toast.info(message.title, {
    description: message.description,
    duration: options?.duration ?? 3000,
    action: options?.action,
  });
}

export function showWarningToast(message: ToastMessage, options?: ToastOptions) {
  toast.warning(message.title, {
    description: message.description,
    duration: options?.duration ?? 3500,
    action: options?.action,
  });
}

export function showLoadingToast<T>(
  promise: Promise<T>,
  messages: { loading: ToastMessage; success: ToastMessage; error: ToastMessage }
) {
  return toast.promise(promise, {
    loading: messages.loading.description,
    success: messages.success.description,
    error: (err) => `${messages.error.description}: ${err?.message || "Error desconocido"}`,
  });
}
