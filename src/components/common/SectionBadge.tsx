import { cn } from "@/lib/utils";

type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionBadge({ children, className }: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "inline-block text-tagline uppercase tracking-widest font-medium text-green-normal",
        className
      )}
    >
      {children}
    </span>
  );
}
