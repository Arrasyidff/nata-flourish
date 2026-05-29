import { cn } from "@/lib/utils";
import SectionBadge from "./SectionBadge";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export default function SectionHeader({
  badge,
  title,
  description,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {badge && <SectionBadge>{badge}</SectionBadge>}
      <h2 className="font-heading text-h2 text-green-darker">{title}</h2>
      {description && (
        <p className="text-body-1 text-foreground/70 max-w-2xl">{description}</p>
      )}
    </div>
  );
}
