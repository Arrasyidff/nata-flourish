import Image from "next/image";

export default function HeroImage() {
  return (
    <div className="relative w-full overflow-hidden rounded-card">
      <Image
        src="/images/hero/hero.webp"
        alt="Furnitur custom Nata Flourish"
        width={1200}
        height={407}
        className="w-full h-auto object-cover"
        priority
      />
    </div>
  );
}
