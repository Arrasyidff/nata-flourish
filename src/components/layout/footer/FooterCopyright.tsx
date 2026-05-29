import { company } from "@/data/company";

export default function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <p className="text-body-3 text-green-light-active border-t border-green-dark pt-8">
      &copy; {year} {company.name}. All rights reserved.
    </p>
  );
}
