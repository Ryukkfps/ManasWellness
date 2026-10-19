'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Logo } from '@/components/brand/Logo';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/blog', label: 'Blog' },
  { href: '/reviews', label: 'Testimonials' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <Link href="/" onClick={() => setMobileOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted hover:text-sage-700 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center rounded-full bg-sage-700 text-cream px-6 py-2.5 text-sm font-semibold hover:bg-sage-800 transition-colors"
        >
          Get in Touch
        </Link>

        <button
          type="button"
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden border-t border-line bg-cream px-6 py-6 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="py-3 text-base font-medium text-ink border-b border-line/60 last:border-b-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-sage-700 text-cream px-6 py-3 text-sm font-semibold"
          >
            Get in Touch
          </Link>
        </nav>
      )}
    </header>
  );
}
