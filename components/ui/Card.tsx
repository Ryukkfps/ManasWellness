import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgba(43,47,44,0.06)]",
        className
      )}
      {...props}
    />
  );
}
