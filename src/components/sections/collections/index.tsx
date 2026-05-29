import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import CollectionFilter from "./CollectionFilter";
import CollectionGrid from "./CollectionGrid";

export default function Collections() {
  return (
    <SectionWrapper id="collections" className="bg-green-light">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        <SectionHeader badge="Koleksi" title="Koleksi Kami" />
        <CollectionFilter />
        <CollectionGrid />
      </div>
    </SectionWrapper>
  );
}
