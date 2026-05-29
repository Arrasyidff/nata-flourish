import SectionWrapper from "@/components/common/SectionWrapper";
import SectionHeader from "@/components/common/SectionHeader";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        <SectionHeader badge="Kontak" title="Hubungi Kami" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </SectionWrapper>
  );
}
