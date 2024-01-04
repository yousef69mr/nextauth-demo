"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

const NavbarMainRoutes = () => {
  const pathname = usePathname();

  const routes = [
    {
      label: "Server",
      path: "/server",
      isActive: pathname === "/server",
    },
    {
      label: "Client",
      path: "/client",
      isActive: pathname === "/client",
    },
    {
      label: "Admin",
      path: "/admin",
      isActive: pathname === "/admin",
    },
    {
      label: "Settings",
      path: "/settings",
      isActive: pathname === "/settings",
    },
  ];
  return (
    <div className="flex gap-x-2">
      {routes.map((route) => (
        <Button
          asChild
          key={route.label}
          variant={route.isActive ? "default" : "ghost"}
        >
          <Link href={route.path}>{route.label}</Link>
        </Button>
      ))}
    </div>
  );
};

export default NavbarMainRoutes;
