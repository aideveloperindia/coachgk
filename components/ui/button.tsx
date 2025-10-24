import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300",
        accent: "bg-gradient-to-r from-accent to-secondary text-white hover:from-accent/90 hover:to-secondary/90 hover:scale-105 shadow-lg hover:shadow-xl transition-all duration-300",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white hover:scale-105 transition-all duration-300",
        ghost: "hover:bg-accent/10 hover:text-accent",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 rounded-lg px-4",
        lg: "h-14 rounded-2xl px-10",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }








