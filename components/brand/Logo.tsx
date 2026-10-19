import { cn } from "@/lib/utils";

// Placeholder brand mark — an inline SVG wordmark with a simple leaf motif,
// so there's no binary logo asset to swap. The client can drop in a real
// logo file later via the Site Settings / Content admin page.
export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
        className="text-sage-700"
      >
        <path
          d="M14 25C14 25 5 20.5 5 12.5C5 7.8 8.8 4 13.5 4C13.5 4 14 4 14 4C14 4 14.5 4 14.5 4C19.2 4 23 7.8 23 12.5C23 20.5 14 25 14 25Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M14 25V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-xl font-medium text-ink tracking-wide">
        Manaswellness
      </span>
    </span>
  );
}
