"use client";

import React from "react";

const menuItems = [
  { label: "À propos", id: "about" },
  { label: "Projets", id: "projects" },
  { label: "Stacks", id: "skills" },
  { label: "Parcours", id: "background" },
  { label: "Contact", id: "contact" },
] as const;

export default function Menu() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav
        className="mx-auto flex max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8 py-3"
        aria-label="Navigation principale"
      >
        <a
          href="#about"
          className="shrink-0 text-sm sm:text-base font-extrabold tracking-wide text-white"
        >
          M. <span className="text-[#04F7A4]">MAHMOUD</span>
        </a>
        <div className="flex-1 h-px bg-gradient-to-r from-[#04F7A4]/40 to-transparent hidden sm:block" />
        <ul className="flex flex-1 sm:flex-none overflow-x-auto justify-end gap-2 pb-0.5 -mr-1">
          {menuItems.map((item) => (
            <li key={item.id} className="shrink-0">
              <a
                href={`#${item.id}`}
                className="block rounded-xl border border-white/10 bg-black px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-white/90 hover:text-white hover:border-[#04F7A4]/40 hover:bg-[#04F7A4]/10 transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
