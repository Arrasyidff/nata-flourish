import Link from "next/link";

export default function HeroCTA() {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <Link
        href="#collections"
        className="inline-flex items-center justify-center min-w-[155px] px-4 py-[14px] rounded-button border border-green-darker text-green-darker text-btn font-medium uppercase hover:bg-green-light transition-colors"
      >
        See Our Collections
      </Link>
      <Link
        href="#contact"
        className="inline-flex items-center justify-center min-w-[155px] px-4 py-[14px] rounded-button border border-green-darker text-green-darker text-btn font-medium uppercase hover:bg-green-light transition-colors"
      >
        Get a Free Consultation
      </Link>
    </div>
  );
}
