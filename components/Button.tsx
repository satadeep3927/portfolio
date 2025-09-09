import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-yellow-500 text-black shadow hover:bg-yellow-400 border-2 border-yellow-300 font-mono uppercase tracking-wider",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-500 border-2 border-red-400",
        outline:
          "border-2 border-yellow-500 bg-transparent text-yellow-500 shadow-sm hover:bg-yellow-500 hover:text-black font-mono uppercase tracking-wider",
        secondary:
          "bg-gray-800 text-yellow-500 shadow-sm hover:bg-gray-700 border-2 border-gray-600 font-mono",
        ghost: "text-yellow-500 hover:bg-yellow-500/10 hover:text-yellow-400",
        link: "text-yellow-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild: _asChild = false, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
