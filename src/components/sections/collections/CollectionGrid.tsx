import { collections } from "./collections.data";
import CollectionCard from "./CollectionCard";
import EmptyState from "@/components/common/EmptyState";

export default function CollectionGrid() {
  if (collections.length === 0) return <EmptyState />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-grid-gap">
      {collections.map((item) => (
        <CollectionCard key={item.id} collection={item} />
      ))}
    </div>
  );
}
