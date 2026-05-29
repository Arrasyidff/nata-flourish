import { galleryItems } from "./gallery.data";
import GalleryItem from "./GalleryItem";

export default function GalleryGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {galleryItems.map((item) => (
        <GalleryItem key={item.id} item={item} />
      ))}
    </div>
  );
}
