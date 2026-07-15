"use client";

import { useState } from "react";

const links = [
  { name: "Projects", href: "#projects" },
  { name: "Home Lab", href: "#home-lab" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
      >
        <span className="text-xl">{isOpen ? "×" : "☰"}</span>
      </button>

      {isOpen && (
        <div className="absolute inset-x-0 top-20 border-b border-slate-800 bg-slate-950 px-6 py-5 shadow-2xl">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}