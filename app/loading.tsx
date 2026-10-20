import Image from "next/image";

// Shown by Next.js automatically while a route segment's server data is
// loading (our pages are force-dynamic with Prisma calls, so this covers
// navigations between pages).
export default function Loading() {
  return (
    <div className="loader-delayed flex flex-col items-center justify-center gap-4 min-h-[60vh] py-24">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-sage-100" />
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-sage-700 animate-spin" />
        <Image
          src="/brand/logo.svg"
          alt=""
          width={500}
          height={500}
          className="absolute inset-1.5 w-11 h-11 rounded-full object-cover"
        />
      </div>
      <p className="text-sm text-ink-muted tracking-wide">Loading…</p>
    </div>
  );
}
