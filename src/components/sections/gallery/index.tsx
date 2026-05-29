import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <SectionWrapper id="gallery">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        <SectionHeader badge="Galeri" title="Galeri Kami" />
        <GalleryGrid />
      </div>
    </SectionWrapper>
  );
}
