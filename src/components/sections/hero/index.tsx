import HeroContent from "./HeroContent";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-[40px] pt-40 pb-20">
      <div className="w-full flex flex-col items-center gap-6 text-center">
        <HeroContent />
        <HeroCTA />
      </div>
    </section>
  );
}
