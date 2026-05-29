import type { Collection } from "@/types/collection";
import Image from "next/image";

type CollectionCardProps = {
  collection: Collection;
};

export default function CollectionCard({ collection }: CollectionCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-card overflow-hidden bg-white">
      <div className="relative aspect-square w-full bg-green-light">
        {collection.image && (
          <Image src={collection.image} alt={collection.name} fill className="object-cover" />
        )}
      </div>
      <div className="p-4 flex flex-col gap-2">
        <p className="text-body-3 uppercase tracking-widest text-green-normal">
          {collection.category}
        </p>
        <h3 className="font-heading text-h6 text-green-darker">{collection.name}</h3>
        <p className="text-body-2 text-foreground/70">{collection.description}</p>
      </div>
    </div>
  );
}
