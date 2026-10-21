// Re-mounts on every navigation (unlike layout.tsx), so this is the hook
// point for a per-page-load enter animation. Reuses the fadeInUp keyframes
// already defined in globals.css. The hero carousel has its own staggered
// text animation (see HeroCarousel.tsx) — stacking this wrapper's fade on
// top of that doubled up the motion, so HeroCarousel's own animation was
// removed in favor of just this one.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="animate-fadeInUp">{children}</div>;
}
