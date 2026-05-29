export type SocialLink = {
  name: string;
  href: string;
  icon: "whatsapp" | "instagram" | "tiktok";
};

export const socialLinks: SocialLink[] = [
  { name: "WhatsApp", href: "", icon: "whatsapp" },
  { name: "Instagram", href: "", icon: "instagram" },
  { name: "TikTok", href: "", icon: "tiktok" },
];
