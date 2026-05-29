import type { GalleryItem as GalleryItemType } from "@/types/gallery";
import Image from "next/image";

type GalleryItemProps = {
  item: GalleryItemType;
};

export default function GalleryItem({ item }: GalleryItemProps) {
  return (
    <div className="relative aspect-square w-full rounded-card overflow-hidden bg-green-light cursor-pointer group">
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}
