import { galleryItems } from "./gallery.data";
import GalleryItem from "./GalleryItem";
import EmptyState from "@/components/common/EmptyState";

export default function GalleryGrid() {
  if (galleryItems.length === 0) return <EmptyState />;

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-grid-gap">
      {galleryItems.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
