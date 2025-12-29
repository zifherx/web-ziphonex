import { useEffect, useState } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

export function useFormDirtyState<T extends FieldValues>(form: UseFormReturn<T>) {
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    const subscription = form.watch(() => {
      setIsDirty(form.formState.isDirty);
    });

    return () => subscription.unsubscribe();
  }, [form]);

  return isDirty;
}
