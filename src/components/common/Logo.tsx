import Link from "next/link";
import { company } from "@/data/company";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
}

export default function Logo({ variant = "dark", className }: LogoProps) {
  return (
    <Link href="/" className={cn("flex flex-col leading-none", className)}>
      <span
        className={cn(
          "font-heading text-logo font-medium uppercase tracking-widest",
          variant === "dark" ? "text-green-darker" : "text-green-light"
        )}
      >
        {company.name}
      </span>
      <span
        className={cn(
          "font-sans text-tagline font-medium uppercase",
          variant === "dark" ? "text-green-darker" : "text-green-light-active"
        )}
      >
        {company.tagline}
      </span>
    </Link>
  );
}
