import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Collections from "@/components/sections/collections";
import Gallery from "@/components/sections/gallery";
import WhyChooseUs from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Collections />
      <Gallery />
      <WhyChooseUs />
    </main>
  );
}
