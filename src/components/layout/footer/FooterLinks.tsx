import Link from "next/link";
import { navItems } from "@/data/navigation";

export default function FooterLinks() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body-2 uppercase tracking-widest font-medium text-green-light-hover">
        Navigasi
      </p>
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-body-2 text-green-light-active hover:text-green-light transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
