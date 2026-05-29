import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import FAQAccordion from "./FAQAccordion";

export default function FAQ() {
  return (
    <SectionWrapper className="bg-green-light">
      <div className="mx-auto max-w-3xl flex flex-col gap-12">
        <SectionHeader badge="FAQ" title="Pertanyaan yang Sering Ditanyakan" />
        <FAQAccordion />
      </div>
    </SectionWrapper>
  );
}
