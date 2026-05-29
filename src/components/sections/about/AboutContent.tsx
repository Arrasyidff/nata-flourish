import SectionHeader from "@/components/common/SectionHeader";

export default function AboutContent() {
  return (
    <div className="flex flex-col gap-4">
      <SectionHeader
        badge="Tentang Kami"
        title="Cerita di Balik Nata Flourish"
        align="left"
      />
      <p className="text-body-1 text-foreground/70">
        {/* Deskripsi tentang perusahaan */}
      </p>
    </div>
  );
}
