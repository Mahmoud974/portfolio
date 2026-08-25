"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

import { portfolios } from "@/app/db/portfolio";

const ITEMS_PER_PAGE = 3;

const CARD_CLASS =
  "w-full overflow-hidden rounded-2xl bg-[#0a1714] shadow-lg ring-1 ring-emerald-900/30 transition-shadow hover:shadow-emerald-600/20";

const TAG_CLASS =
  "rounded-full bg-emerald-950/70 px-3 py-1 text-xs text-[#04F7A4] md:text-sm";

const BTN_CLASS =
  "inline-flex items-center justify-center rounded-xl bg-[#04F7A4] px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:brightness-95 active:translate-y-px";

const SCROLL_CLASS =
  "max-h-36 overflow-y-auto rounded-lg pr-2 transition-all scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-700 hover:scrollbar-thumb-emerald-500 md:max-h-40";

export default function ProjectList() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(portfolios.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentItems = portfolios.slice(startIndex, endIndex);

  return (
    <div className="mx-auto w-full max-w-5xl">
    
      {/* Liste des projets */}
      <ul className="space-y-6 sm:space-y-8 mt-9">
        {currentItems.map((item) => (
          <li key={item.id} className={CARD_CLASS}>
            <article className="flex flex-col md:flex-row">
              {/* Aperçu */}
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block shrink-0 overflow-hidden md:w-2/5"
                aria-label={`Voir le projet ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={`Aperçu du projet ${item.title}`}
                  width={1200}
                  height={800}
                  className="h-48 w-full object-cover transition-transform duration-300 hover:scale-[1.02] sm:h-56 md:h-full md:min-h-full"
                />
              </Link>

              {/* Contenu */}
              <div className="flex min-w-0 flex-col gap-3 p-4 sm:gap-4 sm:p-5 md:w-3/5 md:p-6">
                <h3 className="text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl">
                  {item.title}
                </h3>

                {/* Tags */}
                <ul
                  className="flex flex-wrap gap-1.5"
                  aria-label={`Technologies utilisées pour ${item.title}`}
                >
                  {item.tags.map((tag) => (
                    <li key={`${item.id}-${tag}`} className={TAG_CLASS}>
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Description */}
                <div className={SCROLL_CLASS}>
                  <ul className="list-disc space-y-1 pl-5 text-sm leading-relaxed text-neutral-300 md:text-base">
                    {item.description.map((line, index) => (
                      <li key={`${item.id}-description-${index}`}>{line}</li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div className="mt-auto flex flex-wrap gap-2 pt-1">
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={BTN_CLASS}
                      aria-label={`Voir le projet ${item.title}`}
                      title="Voir le projet"
                    >
                      <Globe className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}

                  {item.github && (
                    <Link
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={BTN_CLASS}
                      aria-label={`Voir le code source de ${item.title}`}
                      title="Voir le code source"
                    >
                      <Github className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav
          className="mb-4 mt-8 flex flex-wrap justify-center gap-2 sm:mb-8 sm:mt-10"
          aria-label="Pagination des projets"
        >
          {Array.from({ length: totalPages }, (_, index) => {
            const isActive = index === currentPage;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                className={`h-9 min-w-9 cursor-pointer rounded-full px-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-emerald-950 text-[#04F7A4] ring-1 ring-emerald-700"
                    : "bg-[#153c31] text-emerald-100 hover:bg-[#1a4a3c]"
                }`}
                aria-current={isActive ? "page" : undefined}
                aria-label={`Afficher la page ${index + 1}`}
              >
                {index + 1}
              </button>
            );
          })}
        </nav>
      )}
    </div>
  );
}