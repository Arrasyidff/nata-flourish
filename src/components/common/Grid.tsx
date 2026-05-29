import { cn } from "@/lib/utils";

type GridProps = {
  children: React.ReactNode;
  className?: string;
  cols?: number;
};

export default function Grid({ children, className, cols = 3 }: GridProps) {
  const colsMap: Record<number, string> = {
    1: "grid-cols-1",
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  };

  return (
    <div className={cn("grid gap-grid-gap", colsMap[cols] ?? colsMap[3], className)}>
      {children}
    </div>
  );
}
