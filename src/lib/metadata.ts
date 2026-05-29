import type { Metadata } from "next";

export function createMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: "Nata Flourish",
    description: "Nata Flourish - Premium Collection",
    ...overrides,
  };
}
