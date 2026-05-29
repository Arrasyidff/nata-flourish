import { company } from "@/data/company";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-tagline uppercase tracking-widest text-green-normal font-medium">
          Info Kontak
        </p>
        <p className="font-heading text-h4 text-green-darker">{company.name}</p>
      </div>

      {company.address && (
        <div className="flex flex-col gap-1">
          <p className="text-body-2 font-medium text-green-darker">Alamat</p>
          <p className="text-body-1 text-foreground/70">{company.address}</p>
        </div>
      )}

      <div className="flex flex-col gap-3">
        {company.whatsapp && (
          <a
            href={`https://wa.me/${company.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-body-1 text-green-normal hover:text-green-dark transition-colors"
          >
            <WhatsAppIcon size={20} />
            {company.whatsapp}
          </a>
        )}
        {company.instagram && (
          <a
            href={`https://instagram.com/${company.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-body-1 text-green-normal hover:text-green-dark transition-colors"
          >
            <InstagramIcon size={20} />
            @{company.instagram}
          </a>
        )}
      </div>
    </div>
  );
}
