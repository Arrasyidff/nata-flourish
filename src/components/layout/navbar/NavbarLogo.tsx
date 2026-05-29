import Link from "next/link";
import { company } from "@/data/company";

export default function NavbarLogo() {
  return (
    <Link href="/" className="flex flex-col leading-none">
      <span className="font-heading text-logo font-medium uppercase tracking-widest text-green-darker">
        {company.name}
      </span>
      <span className="font-sans text-tagline font-medium uppercase text-green-darker">
        {company.tagline}
      </span>
    </Link>
  );
}
