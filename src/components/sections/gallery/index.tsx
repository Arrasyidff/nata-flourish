import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import GalleryGrid from "./GalleryGrid";

export default function Gallery() {
  return (
    <SectionWrapper id="gallery">
      <div className="flex flex-col gap-12">
        <SectionHeader
          title="Lihat Hasilnya Langsung"
          description="Begini tampilan produk kami ketika sudah terpasang — di villa, area lounge, dan tepi pantai di Bali."
        />
        <GalleryGrid />
      </div>
    </SectionWrapper>
  );
}
