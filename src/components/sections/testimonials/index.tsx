import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import TestimonialSlider from "./TestimonialSlider";

export default function Testimonials() {
  return (
    <SectionWrapper>
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        <SectionHeader badge="Testimoni" title="Apa Kata Pelanggan Kami" />
        <TestimonialSlider />
      </div>
    </SectionWrapper>
  );
}
