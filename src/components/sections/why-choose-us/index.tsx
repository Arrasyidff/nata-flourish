import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import WhyChooseCard from "./WhyChooseCard";
import { whyChooseItems } from "./whyChoose.data";

export default function WhyChooseUs() {
  return (
    <SectionWrapper className="bg-green-light">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        <SectionHeader badge="Mengapa Kami" title="Kenapa Memilih Nata Flourish" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gap">
          {whyChooseItems.map((item) => (
            <WhyChooseCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
