import { socialLinks } from "@/data/socials";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TikTokIcon from "@/components/icons/TikTokIcon";

const iconMap = {
  whatsapp: WhatsAppIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
};

export default function FooterSocial() {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-body-2 uppercase tracking-widest font-medium text-green-light-hover">
        Ikuti Kami
      </p>
      <div className="flex items-center gap-4">
        {socialLinks.map((link) => {
          const Icon = iconMap[link.icon];
          return (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-green-light-active hover:text-green-light transition-colors"
            >
              <Icon size={20} />
            </a>
          );
        })}
      </div>
    </div>
  );
}
