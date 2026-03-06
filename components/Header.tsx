'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Wifi } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

const navLinks = [
  { href: '/', label: 'Sammenlign' },
  { href: '/fiber', label: 'Fiber' },
  { href: '/mobilt-bredbaand', label: 'Mobilt bredbånd' },
  { href: '/tv-og-bredbaand', label: 'TV + bredbånd' },
  { href: '/guide/bredbaand-uden-binding', label: 'Uden binding' },
  { href: '/guide/hastighed-forklaret', label: 'Hastighed' },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#1e40af' }}>
              <Wifi className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold" style={{ color: '#1e40af' }}>
              Bredbånd<span style={{ color: '#06b6d4' }}>Pilot</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  'px-3 py-2 rounded-md text-sm font-medium transition-colors',
                  pathname === link.href
                    ? 'text-white'
                    : 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
                )}
                style={pathname === link.href ? { backgroundColor: '#1e40af' } : {}}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        {open && (
          <nav className="md:hidden py-3 pb-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  'block px-4 py-2 text-sm font-medium rounded-md mb-1',
                  pathname === link.href
                    ? 'text-white'
                    : 'text-gray-600 hover:text-blue-800 hover:bg-blue-50'
                )}
                style={pathname === link.href ? { backgroundColor: '#1e40af' } : {}}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
