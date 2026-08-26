"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

import { portfolios } from "@/app/db/portfolio";

const ITEMS_PER_PAGE = 3;

const CARD_CLASS =
  "w-full overflow-hidden rounded-[1.75rem] border border-emerald-900/30 bg-[#071713] shadow-lg transition-all duration-300 hover:border-emerald-700/40 hover:shadow-emerald-950/30";

const TAG_CLASS =
  "inline-flex items-center rounded-full border border-emerald-800/20 bg-emerald-950/70 px-3 py-1.5 text-xs font-medium text-[#04F7A4] sm:text-sm";

const BTN_CLASS =
  "group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-[#04F7A4]/20 bg-[#04F7A4] px-4 py-2.5 text-sm font-semibold text-[#05251c] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16f5ae] hover:shadow-[0_8px_30px_rgba(4,247,164,0.15)] active:translate-y-0";

/*
 * On garde volontairement le scroll.
 * Hauteur plus confortable selon la largeur d'écran.
 */
const SCROLL_CLASS =
  "max-h-36 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-800 hover:scrollbar-thumb-emerald-600 sm:max-h-40 lg:max-h-44 min-[1278px]:max-h-48";

export default function ProjectList() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(portfolios.length / ITEMS_PER_PAGE);

  const startIndex = currentPage * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentItems = portfolios.slice(startIndex, endIndex);

  return (
    <div className="mx-auto w-full max-w-6xl">
      {/* Projets */}
      <ul className="mt-8 space-y-6 sm:mt-10 sm:space-y-8">
        {currentItems.map((item) => (
          <li key={item.id} className={CARD_CLASS}>
          
            <article className="flex flex-col min-[1278px]:flex-row">
              {/* Image */}
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  relative
                  block
                  w-full
                  shrink-0
                  overflow-hidden

                  min-[1278px]:w-[43%]
                "
                aria-label={`Voir le projet ${item.title}`}
              >
                <Image
                  src={item.image}
                  alt={`Aperçu du projet ${item.title}`}
                  width={1200}
                  height={800}
                  className="
                    aspect-[16/9]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.025]

                    sm:aspect-[16/8]
                    min-[1278px]:h-full
                    min-[1278px]:min-h-[430px]
                    min-[1278px]:aspect-auto
                  "
                />
              </Link>

              {/* Contenu */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  p-5

                  sm:p-6
                  lg:p-7
                  min-[1278px]:p-8
                "
              >
                {/* Titre */}
                <h3
  className="
    text-[1.05rem]
    font-bold
    leading-[1.35]
    tracking-tight
    text-white

    min-[375px]:text-lg
    min-[425px]:text-xl
    sm:text-2xl
    lg:text-[1.7rem]
  "
>
  {item.title}
</h3>

                {/* Tags */}
                <ul
                  className="mt-4 flex flex-wrap gap-2"
                  aria-label={`Technologies utilisées pour ${item.title}`}
                >
                  {item.tags.map((tag) => (
                    <li key={`${item.id}-${tag}`} className={TAG_CLASS}>
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Description scrollable */}
                <div className={`mt-5 ${SCROLL_CLASS}`}>
                  <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-neutral-300 sm:text-[15px] lg:text-base">
                    {item.description.map((line, index) => (
                      <li
                        key={`${item.id}-description-${index}`}
                        className="pl-1 marker:text-[#04F7A4]"
                      >
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Actions */}
                <div
                  className="
                    mt-5
                    flex
                    flex-wrap
                    gap-3

                    min-[1278px]:mt-6
                  "
                >
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${BTN_CLASS} flex-1 sm:flex-none`}
                      aria-label={`Voir le projet ${item.title}`}
                    >
                      <ExternalLink
                        className="h-[18px] w-[18px] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />

                      <span>Voir le projet</span>
                    </Link>
                  )}

                  {item.github && (
                    <Link
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        inline-flex
                        min-h-11
                        flex-1
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-white
                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:border-[#04F7A4]/40
                        hover:bg-[#04F7A4]/10
                        hover:text-[#04F7A4]

                        active:translate-y-0
                        sm:flex-none
                      "
                      aria-label={`Voir le code source de ${item.title}`}
                    >
                      <Github
                        className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-105"
                        aria-hidden="true"
                      />

                      <span>Code source</span>
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
          className="mb-6 mt-8 flex flex-wrap items-center justify-center gap-2 sm:mb-10 sm:mt-10"
          aria-label="Pagination des projets"
        >
          {Array.from({ length: totalPages }, (_, index) => {
            const isActive = index === currentPage;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentPage(index)}
                className={`
                  flex
                  h-10
                  min-w-10
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-xl
                  border
                  px-3
                  text-sm
                  font-semibold
                  transition-all
                  duration-200

                  ${
                    isActive
                      ? "border-[#04F7A4]/40 bg-[#04F7A4] text-[#05251c] shadow-[0_5px_20px_rgba(4,247,164,0.12)]"
                      : "border-white/10 bg-white/[0.04] text-neutral-300 hover:border-[#04F7A4]/30 hover:bg-[#04F7A4]/10 hover:text-[#04F7A4]"
                  }
                `}
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