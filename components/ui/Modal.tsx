'use client';

import { cn } from "@/lib/utils";

export function Modal({
  open,
  onClose,
  title,
  children,
  maxWidth = "max-w-2xl",
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  maxWidth?: string;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className={cn("bg-white rounded-2xl shadow-xl w-full max-h-[90vh] overflow-y-auto", maxWidth)}>
        <div className="p-6 border-b border-line flex items-center justify-between">
          <h3 className="font-serif text-lg text-ink">{title}</h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="text-ink-muted hover:text-ink text-2xl leading-none"
          >
            &times;
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}
