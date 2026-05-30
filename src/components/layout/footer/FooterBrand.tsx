import { company } from "@/data/company";

export default function FooterBrand() {
  return (
    <div className="flex flex-col gap-5 max-w-112.5">
      <div className="flex flex-col gap-1">
        <p className="font-heading font-medium uppercase text-body-2 tracking-wider text-green-light">
          {company.name}
        </p>
        <p className="text-body-3 font-normal text-green-light-active">
          {company.tagline}
        </p>
      </div>
      <p className="text-body-2 font-normal text-green-light-active leading-relaxed">
        {company.description}
      </p>
    </div>
  );
}
