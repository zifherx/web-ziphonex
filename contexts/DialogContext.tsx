"use client";

import { createContext, ReactNode, useCallback, useContext, useState } from "react";

// Tipos para el contexto
type DialogType = "edit" | "delete" | "view" | "custom";

interface DialogState<T = any> {
  type: DialogType;
  open: boolean;
  data: T | null;
  isProcessing: boolean;
}

interface DialogContextValue {
  // Estado de dialogos
  dialogs: Record<string, DialogState>;
  // Acciones
  openDialog: <T>(key: string, type: DialogType, data?: T) => void;
  closeDialog: (key: string) => void;
  setProcessing: (key: string, isProcessing: boolean) => void;
  getDialogState: <T>(key: string) => DialogState<T> | undefined;
}

const DialogContext = createContext<DialogContextValue | undefined>(undefined);

export function useDialog() {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog debe ser usado dentro de DialogProvider");
  }
  return context;
}

interface DialogProviderProps {
  children: ReactNode;
}

export function DialogProvider({ children }: DialogProviderProps) {
  const [dialogs, setDialogs] = useState<Record<string, DialogState>>({});

  const openDialog = useCallback(<T,>(key: string, type: DialogType, data?: T) => {
    setDialogs((prev) => ({
      ...prev,
      [key]: {
        type,
        open: true,
        data: data || null,
        isProcessing: false,
      },
    }));
  }, []);

  const closeDialog = useCallback((key: string) => {
    setDialogs((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        open: false,
        data: null,
        isProcessing: false,
      },
    }));
  }, []);

  const setProcessing = useCallback((key: string, isProcessing: boolean) => {
    setDialogs((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        isProcessing,
      },
    }));
  }, []);

  const getDialogState = useCallback(
    <T,>(key: string): DialogState<T> | undefined => {
      return dialogs[key] as DialogState<T> | undefined;
    },
    [dialogs]
  );

  return (
    <DialogContext.Provider
      value={{
        dialogs,
        openDialog,
        closeDialog,
        setProcessing,
        getDialogState,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}
