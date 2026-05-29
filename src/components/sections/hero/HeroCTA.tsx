import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="#collections"
        className="inline-flex items-center justify-center min-w-[155px] px-4 py-[14px] rounded-button bg-green-normal text-white text-btn uppercase hover:bg-green-normal-hover transition-colors"
      >
        Lihat Koleksi
      </Link>
      <Link
        href="#contact"
        className="inline-flex items-center justify-center min-w-[155px] px-4 py-[14px] rounded-button border border-green-normal text-green-normal text-btn uppercase hover:bg-green-light transition-colors"
      >
        Hubungi Kami
      </Link>
    </div>
  );
}
