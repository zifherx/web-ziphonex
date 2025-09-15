import { FC } from "react";
import Link from "next/link";

import { NavigationMenuLink } from "../ui/navigation-menu";

import { ListItemProps } from "@/common/interfaces";

export const ListItem: FC<ListItemProps> = ({
  title,
  children,
  href,
  ...props
}) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
