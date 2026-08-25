"use client";

import { portfolios } from "@/app/db/portfolio";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Globe } from "lucide-react";

const CARD_CLASS =
  "mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-[#0a1714] ring-1 ring-emerald-900/30 shadow-lg hover:shadow-emerald-600/20 transition-shadow";

const TAG_CLASS =
  "rounded-full bg-emerald-950/70 text-[#04F7A4] px-3 py-1 text-xs md:text-sm";

const BTN_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#04F7A4] px-4 py-2 text-sm font-semibold text-emerald-950 hover:brightness-95 active:translate-y-px transition";

const SCROLL_CLASS =
  "max-h-36 md:max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-transparent hover:scrollbar-thumb-emerald-500 transition-all rounded-lg";

export default function ProjectList() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(portfolios.length / itemsPerPage);
  const currentItems = portfolios.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <ul className="space-y-6 sm:space-y-8">
        {currentItems.map((item) => (
          <li key={item.id} className={CARD_CLASS}>
            <div className="flex flex-col md:flex-row">
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block md:w-2/5 shrink-0"
              >
                <Image
                  src={item.image}
                  alt={`Aperçu du projet ${item.title}`}
                  width={1200}
                  height={800}
                  className="h-48 sm:h-56 w-full object-cover md:min-h-full md:h-full"
                />
              </Link>

              <div className="md:w-3/5 p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4 min-w-0">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{item.title}</h3>

                <ul className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag, i) => (
                    <li key={i} className={TAG_CLASS}>
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className={SCROLL_CLASS}>
                  <ul className="list-disc pl-5 text-sm md:text-base leading-relaxed text-neutral-200 space-y-1">
                    {item.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={BTN_CLASS}
                    aria-label={`Voir le projet ${item.title}`}
                  >
                    <Globe className="w-4 h-4" />
                  </Link>
                  <Link
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={BTN_CLASS}
                    aria-label={`Code source de ${item.title}`}
                  >
                    <Github className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <nav className="flex flex-wrap justify-center gap-2 mt-8 sm:mt-10 mb-4 sm:mb-8" aria-label="Pagination des projets">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setCurrentPage(i)}
            className={`h-9 min-w-9 px-3 rounded-full text-sm font-medium transition cursor-pointer ${
              i === currentPage
                ? "bg-emerald-950 text-[#04F7A4] ring-1 ring-emerald-700"
                : "bg-[#153c31] text-emerald-100 hover:bg-[#1a4a3c]"
            }`}
            aria-current={i === currentPage ? "page" : undefined}
            aria-label={`Page ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </nav>
    </>
  );
}
