import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline";
}

export function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono uppercase tracking-wider",
        {
          "border-yellow-500/30 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20":
            variant === "default",
          "border-gray-600 bg-gray-800 text-gray-300 hover:bg-gray-700":
            variant === "secondary",
          "border-red-500/30 bg-red-500/10 text-red-500 hover:bg-red-500/20":
            variant === "destructive",
          "border-yellow-500 text-yellow-500 bg-transparent hover:bg-yellow-500/10":
            variant === "outline",
        },
        className,
      )}
      {...props}
    />
  );
}
