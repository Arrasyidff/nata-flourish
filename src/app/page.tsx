import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Collections from "@/components/sections/collections";
import Gallery from "@/components/sections/gallery";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Collections />
      <Gallery />
    </main>
  );
}
