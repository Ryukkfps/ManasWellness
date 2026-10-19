import { cn } from "@/lib/utils";

export function Eyebrow({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "font-sans text-[13px] font-semibold tracking-[0.12em] uppercase text-sage-500",
        className
      )}
      {...props}
    />
  );
}

export function H1({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={cn("font-serif font-medium text-ink text-[clamp(2.25rem,4vw,3.25rem)] leading-tight", className)}
      {...props}
    />
  );
}

export function H2({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("font-serif font-medium text-ink text-[clamp(1.75rem,3vw,2.25rem)] leading-tight", className)}
      {...props}
    />
  );
}

export function H3({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={cn("font-serif font-medium text-ink text-xl", className)} {...props} />
  );
}
