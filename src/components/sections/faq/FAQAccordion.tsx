"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "./faq.data";
import { cn } from "@/lib/utils";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  if (faqItems.length === 0) return null;

  return (
    <div className="flex flex-col divide-y divide-green-light-active">
      {faqItems.map((item, i) => (
        <div key={i}>
          <button
            className="flex w-full items-center justify-between text-left gap-4 py-6"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-heading text-h6 font-bold text-green-darker">
              {item.question}
            </span>
            <ChevronDown
              size={20}
              className={cn(
                "shrink-0 text-green-normal transition-transform duration-300",
                open === i && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              open === i ? "max-h-96 pb-6" : "max-h-0"
            )}
          >
            <p className="text-body-1 font-normal text-green-darker">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
