import Link from "next/link";

export default function NavbarCTA() {
  return (
    <div className="hidden md:flex">
      <Link
        href="#contact"
        className="inline-flex items-center justify-center min-w-38.75 px-4 py-3.5 rounded-button bg-green-normal text-btn uppercase text-white transition-colors hover:bg-green-normal-hover"
      >
        Konsultasi Gratis
      </Link>
    </div>
  );
}
