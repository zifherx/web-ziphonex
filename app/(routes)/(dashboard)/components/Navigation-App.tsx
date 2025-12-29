"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import { buildPath, formatSegment } from "@/common/utils/GlobalFunctions";

export function NavigationApp() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((segment) => segment !== "");

  const isRootPath = segments.length === 0;

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 ease-linear px-4 transition-[width, height] group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 w-full">
        <SidebarTrigger className="-ml-1" />

        <div className="h-4 border border-gray-400 mr-5" />

        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard" className="flex items-center gap-1.5 hover:text-foreground">
                  <Home className="h-4 w-4" />
                  {isRootPath && <span className="font-medium">Dashboard</span>}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            {!isRootPath &&
              segments.map((segment, index) => {
                const isLast = index === segments.length - 1;
                const path = buildPath(segments, index);
                const formattedSegment = formatSegment(segment);

                return (
                  <div key={segment + index} className="flex items-center gap-2">
                    <BreadcrumbSeparator />

                    <BreadcrumbItem>
                      {isLast ? (
                        <BreadcrumbPage className="font-medium text-base">{formattedSegment}</BreadcrumbPage>
                      ) : (
                        <BreadcrumbLink asChild>
                          <Link href={path} className="font-medium text-base hover:text-foreground transition-colors">
                            {formattedSegment}
                          </Link>
                        </BreadcrumbLink>
                      )}
                    </BreadcrumbItem>
                  </div>
                );
              })}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}
