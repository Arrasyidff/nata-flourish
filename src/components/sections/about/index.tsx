import AboutContent from "./AboutContent";
import AboutImage from "./AboutImage";
import AboutValues from "./AboutValues";
import SectionWrapper from "@/components/common/SectionWrapper";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AboutImage />
        <div className="flex flex-col gap-10">
          <AboutContent />
          <AboutValues />
        </div>
      </div>
    </SectionWrapper>
  );
}
