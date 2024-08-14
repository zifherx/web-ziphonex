import Link from "next/link";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { botones_Redes_Sociales } from "./Iconos.data";

export function IconosRedes() {
  return (
    <div className="grid grid-cols-5 gap-x-3">
      {botones_Redes_Sociales.map(({ id, href, icon: Icon, name }) => (
        <TooltipProvider key={id}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="rounded-full bg-slate-200 w-fit p-2 flex justify-center hover:bg-white">
                <Link href={href}>
                  <Icon
                    className="w-5 h-5 md:w-6 md:h-6"
                    strokeWidth={2}
                    color="#4364CB"
                  />
                </Link>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p className="font-semibold text-baseColor">Ir a {name}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
}
