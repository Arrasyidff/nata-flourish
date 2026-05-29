"use client";

import { motion } from "framer-motion";

type ScaleInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export default function ScaleIn({ children, className, delay = 0, duration = 0.5 }: ScaleInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
