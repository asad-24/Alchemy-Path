"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work-with-me", label: "Work With Me" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#F7F5F2]/95 backdrop-blur-sm border-b border-[#0B0B0B]/5">
      <div className="max-w-6xl mx-auto px-8 md:px-16 lg:px-20">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl md:text-3xl font-light tracking-tight hover:text-[#C6A86B] transition-colors">
            The Alchemy Path
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-12">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase hover:text-[#C6A86B] transition-colors font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`w-full h-px bg-[#0B0B0B] transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`w-full h-px bg-[#0B0B0B] transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-px bg-[#0B0B0B] transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-8 space-y-6 border-t border-[#0B0B0B]/5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm tracking-widest uppercase hover:text-[#C6A86B] transition-colors font-light"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
