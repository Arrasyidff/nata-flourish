"use client";

import type { GalleryItem } from "@/types/gallery";
import Image from "next/image";

type GalleryModalProps = {
  item: GalleryItem | null;
  onClose: () => void;
};

export default function GalleryModal({ item, onClose }: GalleryModalProps) {
  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div className="relative max-w-2xl w-full aspect-square rounded-card overflow-hidden">
        <Image src={item.src} alt={item.alt} fill className="object-contain" />
      </div>
    </div>
  );
}
