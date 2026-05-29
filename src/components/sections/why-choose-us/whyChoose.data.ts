export type WhyChooseItem = {
  id: string;
  title: string;
  description: string;
  variant: "darker" | "dark" | "normal" | "light";
  textPosition: "bottom-left" | "bottom-right";
};

export const whyChooseItems: WhyChooseItem[] = [
  {
    id: "local",
    title: "Paham Kebutuhan Lokal",
    description:
      "Kami berbasis di Bali dan mengerti apa yang cocok untuk ruang hospitality di sini — dari iklim hingga selera desain.",
    variant: "darker",
    textPosition: "bottom-right",
  },
  {
    id: "custom",
    title: "Dibuat Sesuai Kebutuhan Anda",
    description:
      "Setiap pesanan disesuaikan dengan ruang, gaya, dan budget Anda. Kami bisa datang langsung ke lokasi untuk memastikan semuanya tepat.",
    variant: "normal",
    textPosition: "bottom-right",
  },
  {
    id: "weather",
    title: "Tahan Cuaca Bali",
    description:
      "Kami menggunakan bahan yang tahan terhadap panas, kelembapan, dan pemakaian sehari-hari — supaya furnitur Anda tetap awet lebih lama.",
    variant: "dark",
    textPosition: "bottom-left",
  },
  {
    id: "easy",
    title: "Mudah Diajak Kerja Sama",
    description:
      "Dari konsultasi pertama hingga pengiriman, kami menjaga prosesnya tetap simpel dan selalu siap dihubungi.",
    variant: "light",
    textPosition: "bottom-left",
  },
];
