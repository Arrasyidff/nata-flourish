"use client";

import { useState } from "react";
import { categories } from "./collections.data";
import { cn } from "@/lib/utils";

export default function CollectionFilter() {
  const [active, setActive] = useState<string>("semua");
  const all = ["Semua", ...categories];

  return (
    <div className="flex items-center gap-3 flex-wrap">
      {all.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat.toLowerCase())}
          className={cn(
            "px-4 py-2 rounded-button border text-btn uppercase transition-colors",
            active === cat.toLowerCase()
              ? "bg-green-normal text-white border-green-normal"
              : "border-green-normal text-green-normal hover:bg-green-light"
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
