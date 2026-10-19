import { cn } from "@/lib/utils";

type Tone = "cream" | "sand" | "sage" | "white";

const toneClasses: Record<Tone, string> = {
  cream: "bg-cream",
  sand: "bg-sand",
  sage: "bg-sage-100",
  white: "bg-white",
};

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  tone?: Tone;
}

export function Section({ tone = "cream", className, children, ...props }: SectionProps) {
  return (
    <section className={cn(toneClasses[tone], "py-20 md:py-28", className)} {...props}>
      {children}
    </section>
  );
}

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("max-w-6xl mx-auto px-6 md:px-8", className)} {...props} />;
}
