import Image from "next/image";
import { cn } from "@/lib/utils";

// Real brand mark — public/brand/logo.png (mandala + wordmark baked into
// one square asset). The baked-in text is illegible at icon size, so it's
// shown as a small badge alongside a separately-set, legible wordmark.
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src="/brand/logo.svg"
        alt="Manaswellness"
        width={500}
        height={500}
        priority
        className="h-16 w-16 rounded-lg object-cover shrink-0"
      />
      <span className="font-serif text-xl font-medium text-ink tracking-wide">
        Manaswellness
      </span>
    </span>
  );
}
