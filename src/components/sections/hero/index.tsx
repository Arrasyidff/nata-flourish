import HeroContent from "./HeroContent";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="flex items-center justify-center px-10 py-section">
      <div className="mx-auto w-full max-w-3xl flex flex-col items-center gap-8 text-center">
        <HeroContent />
        <HeroCTA />
      </div>
    </section>
  );
}
