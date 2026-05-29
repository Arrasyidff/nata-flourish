import { cn } from "@/lib/utils";

type FlexProps = {
  children: React.ReactNode;
  className?: string;
  direction?: "row" | "col";
  align?: "start" | "center" | "end";
  justify?: "start" | "center" | "end" | "between";
  gap?: number;
};

export default function Flex({
  children,
  className,
  direction = "row",
  align = "center",
  justify = "start",
  gap = 4,
}: FlexProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "col" && "flex-col",
        `items-${align}`,
        `justify-${justify}`,
        `gap-${gap}`,
        className
      )}
    >
      {children}
    </div>
  );
}
