"use client";

import NavbarLogo from "./NavbarLogo";
import NavbarMenu from "./NavbarMenu";
import NavbarCTA from "./NavbarCTA";
import NavbarMobile from "./NavbarMobile";
import { useNavbar } from "@/hooks/useNavbar";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { mobileOpen, setMobileOpen, scrolled } = useNavbar();

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-white shadow-sm" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-10">
        <NavbarLogo />
        <NavbarMenu />
        <NavbarCTA />
        <NavbarMobile open={mobileOpen} onToggle={() => setMobileOpen((v) => !v)} />
      </div>
    </header>
  );
}
