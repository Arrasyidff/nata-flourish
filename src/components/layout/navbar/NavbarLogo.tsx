import Link from "next/link";
import { company } from "@/data/company";

export default function NavbarLogo() {
  return (
    <Link href="/" className="font-heading text-logo uppercase tracking-widest text-green-darker">
      {company.name}
    </Link>
  );
}
