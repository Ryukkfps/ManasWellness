import { cn } from "@/lib/utils";

export function Field({
  label,
  htmlFor,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink">
        {label} {required && <span className="text-clay-700">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-xs text-ink-muted">{hint}</p>}
      {error && <p className="text-xs text-clay-700">{error}</p>}
    </div>
  );
}

const inputBase =
  "w-full px-4 py-3 rounded-xl border border-line bg-white text-ink placeholder-ink-muted focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent";

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(inputBase, props.className)} {...props} />;
}

export function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(inputBase, props.className)} {...props} />;
}

export function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(inputBase, props.className)} {...props} />;
}
