import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="flex gap-grid-gap">
      <div className="relative flex-1 overflow-hidden rounded-card">
        <Image
          src="/images/about_us/artisan_craft.webp"
          alt="Pengrajin Nata Flourish sedang bekerja"
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative flex-1 overflow-hidden rounded-card">
        <Image
          src="/images/about_us/workshop.webp"
          alt="Workshop Nata Flourish"
          width={600}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
