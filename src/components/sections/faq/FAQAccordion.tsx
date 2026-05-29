"use client";

import { useState } from "react";
import { faqItems } from "./faq.data";
import { cn } from "@/lib/utils";

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  if (faqItems.length === 0) return null;

  return (
    <div className="flex flex-col divide-y divide-green-light-active">
      {faqItems.map((item, i) => (
        <div key={i} className="py-4">
          <button
            className="flex w-full items-center justify-between text-left gap-4"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-heading text-h6 text-green-darker">{item.question}</span>
            <span className={cn("transition-transform text-green-normal", open === i && "rotate-180")}>
              ▾
            </span>
          </button>
          {open === i && (
            <p className="mt-3 text-body-1 text-foreground/70">{item.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}
