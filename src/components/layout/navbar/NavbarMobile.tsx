"use client";

import Link from "next/link";
import { navItems } from "@/data/navigation";

type NavbarMobileProps = {
  open: boolean;
  onToggle: () => void;
};

export default function NavbarMobile({ open, onToggle }: NavbarMobileProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        aria-label="Toggle menu"
        className="flex flex-col gap-1.5 p-2"
      >
        <span className="block h-0.5 w-6 bg-green-darker transition-all" />
        <span className="block h-0.5 w-6 bg-green-darker transition-all" />
        <span className="block h-0.5 w-6 bg-green-darker transition-all" />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-16 bg-white shadow-md px-10 py-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onToggle}
              className="text-body-1 text-green-darker hover:text-green-normal transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
