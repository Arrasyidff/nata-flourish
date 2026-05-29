import { cn } from "@/lib/utils";

type LoadingProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
};

export default function Loading({ className, size = "md" }: LoadingProps) {
  const sizeMap = { sm: "h-4 w-4", md: "h-8 w-8", lg: "h-12 w-12" };

  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div
        className={cn(
          "animate-spin rounded-full border-2 border-green-light border-t-green-normal",
          sizeMap[size]
        )}
      />
    </div>
  );
}
