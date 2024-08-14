import { IconosRedes } from "../IconosRedes";

export function RedesSection() {
  return (
    <div className="md:flex flex-row gap-3 items-center">
      <p className="uppercase mb-3 md:mr-8 font-semibold text-xl text-center text-slate-200">
        Redes Sociales
      </p>
      <IconosRedes />
    </div>
  );
}
