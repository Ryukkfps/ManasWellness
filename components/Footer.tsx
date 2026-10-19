'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/brand/Logo';

interface LegalPage {
  id: string;
  title: string;
  slug: string;
}

const QUICK_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/events', label: 'Events' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const [legalPages, setLegalPages] = useState<LegalPage[]>([]);

  useEffect(() => {
    async function fetchLegalPages() {
      try {
        const response = await fetch('/api/legal-pages');
        if (response.ok) {
          const data = await response.json();
          setLegalPages(data);
        }
      } catch (error) {
        console.error('Error fetching legal pages:', error);
      }
    }
    fetchLegalPages();
  }, []);

  return (
    <footer className="bg-sand border-t border-line">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="text-sm text-ink-muted leading-relaxed max-w-sm">
            A calm, confidential space for individual and couples counselling, and community wellness events.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-ink text-xs uppercase tracking-widest mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-ink-muted">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-sage-700 transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-ink text-xs uppercase tracking-widest mb-4">A note on crisis support</h4>
          <p className="text-sm text-ink-muted leading-relaxed">
            This website is not for emergencies. If you are in crisis, please contact Tele-MANAS (14416) or KIRAN
            (1800-599-0019).
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 py-6 border-t border-line flex flex-col items-center gap-3">
        <p className="text-xs text-ink-muted uppercase tracking-[0.15em] text-center">
          © {new Date().getFullYear()} Manaswellness. All Rights Reserved.
        </p>
        {legalPages.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalPages.map((page) => (
              <Link
                key={page.id}
                href={`/${page.slug}`}
                className="text-[11px] text-ink-muted uppercase tracking-widest hover:text-sage-700 transition-colors"
              >
                {page.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
