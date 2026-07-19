"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Collections", href: "#" },
  { name: "About", href: "#" },
  { name: "Quality", href: "#" },
  { name: "Inside 2D3D", href: "#" },
  { name: "FAQ", href: "#" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          <span className="text-blue-600">2D</span>3D
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#"
            className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            Shop on Faire
          </Link>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-200 bg-white lg:hidden">
          <nav className="flex flex-col p-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="py-4 text-gray-700"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#"
              className="mt-4 rounded-xl bg-blue-600 px-5 py-4 text-center font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Shop on Faire
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}