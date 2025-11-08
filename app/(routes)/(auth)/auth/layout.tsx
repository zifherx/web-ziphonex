import { LogoLogin } from "./signin/components/Logo-Login";

import { GENERAL_TYPE } from "@/common/types";

export default function AuthLayout({ children }: GENERAL_TYPE) {
  return (
    <div className="grid min-h-svh md:grid-cols-2 p-4">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <LogoLogin />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-primary to-secondary relative hidden lg:block rounded-xl overflow-hidden">
        <div className="flex h-full">
          <div className="bg-[url(/shapes/pattern-lines.svg)] w-full items-center justify-center">
            Imagen
          </div>
        </div>
      </div>
    </div>
  );
}
