import { RedesSection } from "../RedesSection";
import { Separator } from "../ui/separator";

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="bg-baseColor text-white p-3 md:py-6">
        <div className="w-full max-w-screen-xl mx-auto flex justify-center md:justify-end">
          <RedesSection />
        </div>
      </div>
      <div className="w-full max-w-screen-xl mx-auto p-3 md:py-8">
        <div className="flex justify-between gap-8 mx-5 text-white">
          <div className="">Menu</div>
        </div>
        <Separator className="h-px bg-white sm:bg-[#393A3F] my-3 rounded-xl"></Separator>
        <div className="md:flex md:justify-between items-center text-white">
          <p className="text-center text-sm">&copy; 2023 Ziphonex Tech</p>
          <p className="text-center text-sm">Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  );
}
