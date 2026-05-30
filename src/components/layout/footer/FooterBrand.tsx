import { company } from "@/data/company";
import Logo from "@/components/common/Logo";

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-5 max-w-112.5">
      <Logo variant="light" />
      <p className="text-body-2 font-normal text-green-light-active leading-relaxed">
        {company.description}
      </p>
    </div>
  );
}
