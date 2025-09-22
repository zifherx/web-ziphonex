import { Suspense } from "react";
import { CotizarView } from "./components/Cotizar-View";

export default function CotizarPage() {
  return (
    <div>
      <Suspense fallback={<>Cargando...</>}>
        <CotizarView />
      </Suspense>
    </div>
  );
}
