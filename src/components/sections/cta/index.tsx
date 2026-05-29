import CTAButtons from "./CTAButtons";

export default function CTA() {
  return (
    <section className="bg-green-darker py-section px-10">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center gap-8">
        <h2 className="font-heading text-h2 text-green-light">
          Siap Untuk Memulai?
        </h2>
        <p className="text-body-1 text-green-light-active max-w-xl">
          {/* Sub-teks CTA */}
        </p>
        <CTAButtons />
      </div>
    </section>
  );
}
