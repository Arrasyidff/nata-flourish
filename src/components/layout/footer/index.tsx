import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterProducts from "./FooterProducts";
import FooterContact from "./FooterSocial";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    // <footer className="bg-green-normal-active text-green-light">
    <footer className="bg-green-darker text-green-light">
      <div className="px-10 py-16 flex flex-col gap-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-10 md:gap-16">
          <FooterBrand />
          <FooterLinks />
          <FooterProducts />
          <FooterContact />
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
}
