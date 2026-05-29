import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";
import HeroCTA from "./HeroCTA";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-10 pt-16">
      <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-grid-gap items-center">
        <div className="flex flex-col gap-8">
          <HeroContent />
          <HeroCTA />
          <HeroStats />
        </div>
        <HeroImage />
      </div>
    </section>
  );
}
