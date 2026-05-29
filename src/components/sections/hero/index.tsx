import HeroContent from "./HeroContent";
import HeroCTA from "./HeroCTA";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-10 pt-40">
      <div className="w-full flex flex-col items-center gap-6 text-center">
        <HeroContent />
        <HeroCTA />
        <HeroImage />
      </div>
    </section>
  );
}
