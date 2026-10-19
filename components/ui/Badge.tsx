import { cn } from "@/lib/utils";

type Tone = "mist" | "sand" | "sage" | "sageFilled" | "clay" | "neutral";

const toneClasses: Record<Tone, string> = {
  mist: "bg-mist text-[#3e6a85]",
  sand: "bg-sand text-clay-700",
  sage: "bg-sage-100 text-sage-700",
  sageFilled: "bg-sage-700 text-cream",
  clay: "bg-[#f0e6e4] text-[#a65450]",
  neutral: "bg-gray-100 text-gray-600",
};

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: Tone;
}

export function Badge({ tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-4 py-1.5 text-[13px] font-semibold",
        toneClasses[tone],
        className
      )}
      {...props}
    />
  );
}
