import { EstadisticasView } from "@/components/modules/secciones-sitio/estadisticas/Estadisticas-View";
import { DialogProvider } from "@/contexts/DialogContext";

export default function EstadisticasPage() {
  return (
    <DialogProvider>
      <EstadisticasView />
    </DialogProvider>
  );
}
