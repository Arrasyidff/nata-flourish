import Link from "next/link";

export default function NavbarCTA() {
  return (
    <div className="hidden md:flex">
      <Link
        href="#contact"
        className="inline-flex items-center justify-center min-w-[155px] px-4 py-[14px] rounded-button border border-green-normal text-btn uppercase text-green-normal transition-colors hover:bg-green-normal hover:text-white"
      >
        Hubungi Kami
      </Link>
    </div>
  );
}
