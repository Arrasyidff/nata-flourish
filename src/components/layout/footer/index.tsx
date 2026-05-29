import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <footer className="bg-green-darker text-green-light">
      <div className="mx-auto max-w-7xl px-10 py-16 flex flex-col gap-12">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <FooterLinks />
          <FooterSocial />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}
