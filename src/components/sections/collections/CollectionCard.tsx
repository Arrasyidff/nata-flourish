import type { Collection } from "@/types/collection";
import Image from "next/image";

type CollectionCardProps = {
  collection: Collection;
};

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <div className="relative h-full rounded-card overflow-hidden group cursor-pointer">
      <Image
        src={collection.image}
        alt={collection.name}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 flex flex-col gap-2">
        <h3 className="font-heading text-h5 text-white font-bold">
          {collection.name}
        </h3>
        <p className="text-body-2 text-white/80 font-normal max-w-xs">
          {collection.description}
        </p>
      </div>
    </div>
  );
}
