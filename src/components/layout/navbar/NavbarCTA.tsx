import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NavbarCTA() {
  return (
    <div className="hidden md:flex">
      <Link href="#contact" className={buttonVariants({ variant: "filled" })}>
        Konsultasi Gratis
      </Link>
    </div>
  );
}
