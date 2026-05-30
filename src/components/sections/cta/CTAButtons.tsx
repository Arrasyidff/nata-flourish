import Link from "next/link";

export default function CTAButtons() {
  return (
    <div className="flex items-center gap-4 flex-wrap justify-center">
      <Link
        href="#contact"
        className="inline-flex items-center justify-center min-w-38.75 px-6 py-3.5 rounded-button bg-white text-green-darker text-btn font-medium uppercase hover:bg-green-light transition-colors"
      >
        Hubungi Kami
      </Link>
      <Link
        href="#"
        className="inline-flex items-center justify-center min-w-38.75 px-6 py-3.5 rounded-button border border-white text-white text-btn font-medium uppercase hover:bg-white/10 transition-colors"
      >
        Download Katalog
      </Link>
    </div>
  );
}
