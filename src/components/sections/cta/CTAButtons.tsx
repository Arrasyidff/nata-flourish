import Link from "next/link";

export default function CTAButtons() {
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      <Link
        href="#contact"
        className="inline-flex items-center justify-center min-w-[155px] px-4 py-[14px] rounded-button bg-white text-green-darker text-btn uppercase hover:bg-green-light transition-colors"
      >
        Hubungi Kami
      </Link>
      <Link
        href="#collections"
        className="inline-flex items-center justify-center min-w-[155px] px-4 py-[14px] rounded-button border border-white text-white text-btn uppercase hover:bg-green-dark transition-colors"
      >
        Lihat Koleksi
      </Link>
    </div>
  );
}
