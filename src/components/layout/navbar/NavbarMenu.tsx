"use client";

import { navItems } from "@/data/navigation";

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (href === "/") {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  if (href.startsWith("#")) {
    e.preventDefault();
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function NavbarMenu() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleNavClick(e, item.href)}
          className="font-heading text-logo font-medium uppercase text-green-darker hover:text-green-normal transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
