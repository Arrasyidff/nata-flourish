import Link from "next/link";
import { navItems } from "@/data/navigation";

export default function NavbarMenu() {
  return (
    <nav className="hidden md:flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="font-heading text-logo text-green-darker hover:text-green-normal transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
