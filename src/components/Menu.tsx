"use client";

import React, { useState } from "react";

const menuItems = [
  { label: "À propos", id: "about" },
  { label: "Projets", id: "projects" },
  { label: "Parcours", id: "background" },
  { label: "Contact", id: "contact" },
] as const;

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-md">
      <nav
        className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navigation principale"
      >
        <div className="flex items-center justify-between gap-3">
          <div className="hidden h-px flex-1 bg-gradient-to-r from-[#04F7A4]/40 to-transparent min-[1278px]:block" />

          {/* Desktop >= 1278px */}
          <ul className="hidden items-center gap-2 min-[1278px]:flex">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-xl border border-white/10 bg-black px-3 py-1.5 text-sm font-medium text-white/90 transition-colors hover:border-[#04F7A4]/40 hover:bg-[#04F7A4]/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Burger < 1278px */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="ml-auto flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-black text-white transition-colors hover:border-[#04F7A4]/40 hover:bg-[#04F7A4]/10 min-[1278px]:hidden"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative block h-5 w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-all duration-300 ${
                  isOpen ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition-all duration-300 ${
                  isOpen ? "top-2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile/tablette < 1278px */}
        <div
          id="mobile-menu"
          className={`overflow-hidden transition-all duration-300 min-[1278px]:hidden ${
            isOpen ? "mt-3 max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-black/95 p-3">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block w-full rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:border-[#04F7A4]/40 hover:bg-[#04F7A4]/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}