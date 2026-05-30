import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import FAQAccordion from "./FAQAccordion";

export default function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="mx-auto max-w-3xl flex flex-col gap-6">
        <SectionHeader title="Pertanyaan yang Sering Diajukan" />
        <FAQAccordion />
      </div>
    </SectionWrapper>
  );
}
