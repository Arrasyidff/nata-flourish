import { collections } from "./collections.data";
import CollectionCard from "./CollectionCard";

export default function CollectionGrid() {
  return (
    <div className="grid grid-cols-3 grid-rows-[460px_360px] gap-grid-gap">
      <div className="col-span-2">
        <CollectionCard collection={collections[0]} />
      </div>
      <div className="col-span-1">
        <CollectionCard collection={collections[1]} />
      </div>
      {collections.slice(2).map((item) => (
        <div key={item.id} className="col-span-1">
          <CollectionCard collection={item} />
        </div>
      ))}
    </div>
  );
}
