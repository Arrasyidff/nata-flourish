import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center min-w-[155px] px-6 py-3.5 rounded-button border text-btn font-medium uppercase tracking-wide transition-colors cursor-pointer disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        filled:
          "bg-green-normal-active border-green-normal-active text-white hover:bg-green-normal-hover hover:border-green-normal-hover",
        "outline-dark":
          "bg-transparent border-green-dark-active text-green-dark-active hover:bg-green-dark-active/10",
        "white-filled":
          "bg-white border-white text-green-dark-active hover:bg-green-light",
        "outline-white":
          "bg-transparent border-white text-white hover:bg-white/10",
      },
    },
    defaultVariants: {
      variant: "filled",
    },
  }
)

function Button({
  className,
  variant = "filled",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
