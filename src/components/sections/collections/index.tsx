import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import CollectionGrid from "./CollectionGrid";

export default function Collections() {
  return (
    <SectionWrapper id="collections">
      <div className="flex flex-col gap-12">
        <SectionHeader
          title="Our Collections"
          description="Everything you need to furnish your space — made to order, built to last."
        />
        <CollectionGrid />
      </div>
    </SectionWrapper>
  );
}
