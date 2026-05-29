import Image from "next/image";
import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import WhyChooseCard from "./WhyChooseCard";
import { whyChooseItems } from "./whyChoose.data";

export default function WhyChooseUs() {
  const [card1, card2, card3, card4] = whyChooseItems;

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-12">
        <SectionHeader
          title="Mengapa Memilih Kami"
          description="Ini yang membuat pengalaman bekerja sama dengan Nata Flourish terasa mudah dan dapat diandalkan."
        />

        <div className="grid grid-cols-3 grid-rows-2 gap-5 h-150">
          {/* Left column — 2 cards stacked */}
          <div className="col-start-1 row-start-1">
            <WhyChooseCard item={card1} />
          </div>
          <div className="col-start-1 row-start-2">
            <WhyChooseCard item={card2} />
          </div>

          {/* Middle column — image spanning both rows */}
          <div className="col-start-2 row-span-2 relative rounded-card overflow-hidden">
            <Image
              src="/images/why_choose_us/image1.webp"
              alt="Interior Nata Flourish"
              fill
              className="object-cover"
            />
          </div>

          {/* Right column — 2 cards stacked */}
          <div className="col-start-3 row-start-1">
            <WhyChooseCard item={card3} />
          </div>
          <div className="col-start-3 row-start-2">
            <WhyChooseCard item={card4} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
