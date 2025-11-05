import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#programs', label: 'Programs' },
    { href: '#impact', label: 'Impact' },
    { href: '#get-involved', label: 'Get Involved' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-bold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-indigo-600 to-violet-500 text-white">
              <Heart className="h-5 w-5" />
            </span>
            <span className="text-lg">ShikshaSahay</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="#get-involved"
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-indigo-600 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Donate
            </a>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#get-involved"
                className="rounded-md bg-gradient-to-r from-indigo-600 to-violet-500 px-3 py-2 text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                Donate
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
