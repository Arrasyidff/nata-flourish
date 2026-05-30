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

export default function FooterLinks() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body-2 font-medium uppercase text-green-light">
        Tautan Cepat
      </p>
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-body-2 font-normal text-green-light-active hover:text-green-light transition-colors"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
