"use client";

import { motion } from "framer-motion";

type SlideUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
};

export default function SlideUp({
  children,
  className,
  delay = 0,
  duration = 0.5,
  distance = 20,
}: SlideUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
