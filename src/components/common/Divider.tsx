import { cn } from "@/lib/utils";

type DividerProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export default function Divider({ className, orientation = "horizontal" }: DividerProps) {
  return (
    <div
      className={cn(
        "bg-border",
        orientation === "horizontal" ? "h-px w-full" : "w-px self-stretch",
        className
      )}
    />
  );
}
