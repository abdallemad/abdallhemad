import { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "cursor-pointer transition-all ease-in-out duration-300 rounded-full",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border border-primary text-primary ",
        secondary: "",
        link: "",
      },
      size: {
        default:
          "px-4 py-2 font-semibold text-sm",
        sm: "",
        lg: "px-6 py-3 text-lg font-semibold",
        icon: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>) {

  const [hovered, setHovered] = useState(false);

  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {props.children}

    </button>
  )
}

export { Button, buttonVariants }
