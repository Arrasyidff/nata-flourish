import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import CollectionGrid from "./CollectionGrid";

export default function Collections() {
  return (
    <SectionWrapper id="collections">
      <div className="flex flex-col gap-6">
        <SectionHeader
          title="Koleksi Kami"
          description="Semua yang Anda butuhkan untuk melengkapi ruangan — dibuat sesuai pesanan, dirancang tahan lama."
        />
        <CollectionGrid />
      </div>
    </SectionWrapper>
  );
}
