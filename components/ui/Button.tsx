import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "text";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center font-semibold transition-colors min-h-11 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary: "rounded-full bg-sage-700 text-cream hover:bg-sage-800 px-7 py-3.5",
  secondary:
    "rounded-full bg-transparent text-sage-700 border-[1.5px] border-sage-700 hover:bg-sage-100 px-7 py-3",
  text: "text-sage-700 hover:text-sage-800 border-b-[1.5px] border-sage-700 px-0 py-1",
};

const sizes: Record<Size, string> = {
  sm: "text-sm",
  md: "text-[15px]",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: Size;
}

export function ButtonLink({ href, variant = "primary", size = "md", className, ...props }: ButtonLinkProps) {
  return (
    <Link href={href} className={cn(base, variants[variant], sizes[size], className)} {...props} />
  );
}
