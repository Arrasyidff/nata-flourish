import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function HeroCTA() {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap pb-20">
      <Link href="#collections" className={buttonVariants({ variant: "outline-dark" })}>
        Lihat Koleksi Kami
      </Link>
      <Link href="#contact" className={buttonVariants({ variant: "outline-dark" })}>
        Konsultasi Gratis
      </Link>
    </div>
  );
}
