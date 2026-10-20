// Re-mounts on every navigation (unlike layout.tsx), so this is the hook
// point for a per-page-load enter animation. Reuses the fadeInUp keyframes
// already defined in globals.css for the hero carousel.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-fadeInUp">{children}</div>;
}
