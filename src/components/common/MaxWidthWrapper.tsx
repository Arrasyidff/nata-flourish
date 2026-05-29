import { cn } from "@/lib/utils";

type MaxWidthWrapperProps = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
};

export default function MaxWidthWrapper({ children, className, maxWidth = "max-w-7xl" }: MaxWidthWrapperProps) {
  return (
    <div className={cn("mx-auto w-full", maxWidth, className)}>
      {children}
    </div>
  );
}
