import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-2 gap-10">
        <AboutContent />
        <AboutImage />
      </div>
    </SectionWrapper>
  );
}
