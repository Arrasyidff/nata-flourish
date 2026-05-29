"use client";

import { useState } from "react";
import type { GalleryItem } from "@/types/gallery";

export function useGalleryStore() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  return { selectedItem, setSelectedItem };
}
