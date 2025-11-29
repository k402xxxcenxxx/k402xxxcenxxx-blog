'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type navItem = {
  href: string;
  label: string;
};

interface NavbarProps {
  sectionNavItems?: navItem[];
}

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/works', label: 'Works' },
]


export function Navbar({ sectionNavItems }: NavbarProps) {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-black/40 backdrop-blur border-b border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        {/* Logo */}
        <Link href="/" className="text-sm md:text-base font-semibold tracking-[0.3em] uppercase">
          k402xxxcenxxx
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm font-medium">
          {navItems.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href) && !item.href.includes('#');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-white ${
                  isActive ? 'text-white' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <nav className="hidden md:flex items-center gap-6 text-xs md:text-sm font-medium">
          {sectionNavItems?.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname.startsWith(item.href) && !item.href.includes('#');

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition hover:text-white ${
                  isActive ? 'text-white' : 'text-gray-300'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <nav className="md:hidden flex items-center gap-3 text-xs">
          <Link href="/blog" className="text-gray-300 hover:text-white">
            Blog
          </Link>
          <Link href="/works" className="text-gray-300 hover:text-white">
            Works
          </Link>
        </nav>
      </div>
    </header>
  );
}
