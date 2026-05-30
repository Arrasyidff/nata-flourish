import { company } from "@/data/company";

export default function FooterContact() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body-2 font-medium uppercase text-green-light">
        Hubungi Kami
      </p>
      <ul className="flex flex-col gap-2">
        <li className="text-body-2 font-normal text-green-light-active">
          WhatsApp: {company.whatsapp}
        </li>
        <li className="text-body-2 font-normal text-green-light-active">
          Instagram: {company.instagram}
        </li>
        <li className="text-body-2 font-normal text-green-light-active leading-relaxed">
          {company.address}
        </li>
      </ul>
    </div>
  );
}
