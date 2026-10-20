'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu, X, LayoutDashboard, Image as ImageIcon, Briefcase, Mail, Star,
  Phone, FileText, Info, UserCircle, CalendarHeart, ClipboardList, BookOpen, Palette,
} from 'lucide-react';
import SignOutButton from '@/components/admin/SignOutButton';

// Defined here (not passed as a server->client prop) because lucide-react
// icon components can't cross the server/client boundary as props.
// Appointments is intentionally omitted — dormant feature, kept in code
// but hidden from navigation (see the implementation plan, section E).
const menuItems = [
  { name: 'Dashboard', icon: LayoutDashboard, href: '/admin' },
  { name: 'Enquiries', icon: Mail, href: '/admin/enquiries' },
  { name: 'Services', icon: Briefcase, href: '/admin/services' },
  { name: 'Events', icon: CalendarHeart, href: '/admin/events' },
  { name: 'Blog', icon: BookOpen, href: '/admin/blog' },
  { name: 'Surveys', icon: ClipboardList, href: '/admin/surveys' },
  { name: 'Testimonials', icon: Star, href: '/admin/reviews' },
  { name: 'Therapist Profile', icon: UserCircle, href: '/admin/profile' },
  { name: 'Content', icon: FileText, href: '/admin/content' },
  { name: 'Carousel', icon: ImageIcon, href: '/admin/carousel' },
  { name: 'About Us', icon: Info, href: '/admin/about' },
  { name: 'Contact Info', icon: Phone, href: '/admin/contact-info' },
  { name: 'Legal Pages', icon: FileText, href: '/admin/legal-pages' },
  { name: 'Appearance', icon: Palette, href: '/admin/appearance' },
];

export default function AdminSidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const Nav = () => (
    <nav className="flex-grow p-4 space-y-1 overflow-y-auto">
      {menuItems.map((item) => {
        const active = item.href === '/admin' ? pathname === '/admin' : pathname.startsWith(item.href);
        return (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
              active ? 'bg-white/15 text-cream' : 'text-cream/80 hover:bg-white/10'
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden flex items-center justify-between bg-sage-800 text-cream px-4 py-3">
        <span className="font-serif tracking-wide">Manaswellness Admin</span>
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="p-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <aside className="md:hidden bg-sage-800 text-cream flex flex-col">
          <Nav />
          <div className="p-4 border-t border-white/10">
            <SignOutButton />
          </div>
        </aside>
      )}

      {/* Desktop sidebar */}
      <aside className="w-64 bg-sage-800 text-cream hidden md:flex flex-col shrink-0">
        <div className="p-6 border-b border-white/10">
          <h1 className="text-xl font-serif tracking-wide">Admin Panel</h1>
          <p className="text-[10px] text-cream/50 tracking-widest uppercase mt-1">Manaswellness</p>
        </div>
        <Nav />
        <div className="p-4 border-t border-white/10">
          <SignOutButton />
        </div>
      </aside>
    </>
  );
}
