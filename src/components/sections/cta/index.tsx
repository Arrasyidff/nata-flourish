import Image from "next/image";
import CTAButtons from "./CTAButtons";

export default function CTA() {
  return (
    <section className="pb-section">
      <div className="relative min-h-120 flex items-center overflow-hidden">
        <Image
          src="/images/cta/cta.webp"
          alt="Ruangan furnitur Nata Flourish"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-green-darker/65" />
        <div className="relative z-10 w-full px-10 flex flex-col items-center text-center gap-8">
          <h2 className="font-heading text-h2 font-bold text-white">
            Yuk, Wujudkan Ruangan Impian Anda
          </h2>
          <p className="text-body-1 font-normal text-white/90 w-[65%]">
            Punya villa, restoran, atau hotel yang butuh furnitur? Kami siap datang ke lokasi Anda, memahami kebutuhan Anda, dan memberikan penawaran yang sesuai budget. Santai saja — cukup mulai dengan obrolan singkat bersama kami.
          </p>
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
