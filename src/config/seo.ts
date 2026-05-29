import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
  title: {
    default: "Nata Flourish",
    template: "%s | Nata Flourish",
  },
  description: "Nata Flourish - Premium Collection",
  robots: {
    index: true,
    follow: true,
  },
};
