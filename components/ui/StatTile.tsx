import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export function StatTile({
  label,
  value,
  icon: Icon,
  href,
  className,
}: {
  label: string;
  value: number | string;
  icon?: LucideIcon;
  href?: string;
  className?: string;
}) {
  const content = (
    <div
      className={cn(
        "bg-white rounded-2xl p-5 shadow-[0_8px_30px_rgba(43,47,44,0.06)] flex items-center gap-4",
        href && "hover:shadow-md transition-shadow cursor-pointer",
        className
      )}
    >
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-sage-100 flex items-center justify-center shrink-0">
          <Icon className="w-5 h-5 text-sage-700" aria-hidden="true" />
        </div>
      )}
      <div>
        <div className="text-2xl font-semibold text-ink">{value}</div>
        <div className="text-xs text-ink-muted uppercase tracking-wide">{label}</div>
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
