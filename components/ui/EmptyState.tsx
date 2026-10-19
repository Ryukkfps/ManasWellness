import type { LucideIcon } from "lucide-react";

export function EmptyState({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description?: string;
}) {
  return (
    <div className="text-center py-16 px-6 text-ink-muted">
      <Icon className="w-10 h-10 mx-auto mb-4 text-sage-500" aria-hidden="true" />
      <p className="font-medium text-ink">{title}</p>
      {description && <p className="text-sm mt-1">{description}</p>}
    </div>
  );
}
