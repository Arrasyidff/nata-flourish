"use client";

import { useState } from "react";
import { useScroll } from "./useScroll";

export function useNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScroll(20);

  return { mobileOpen, setMobileOpen, scrolled };
}
