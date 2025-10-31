import { portfolios } from "@/app/db/portfolio";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Technos() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(portfolios.length / itemsPerPage);
  const currentItems = portfolios.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  return (
    <>
      <h2 className="text-3xl font-extrabold text-center mt-8 tracking-tight">
        PROJETS
      </h2>
      <div className="h-1.5 mt-3 w-24 bg-[#04F7A4] mx-auto rounded-full" />

      <ul className="mt-10 space-y-8">
        {currentItems.map((item) => (
          <li
            key={item.id}
            className="mx-auto w-full h-auto max-w-5xl overflow-hidden rounded-2xl bg-[#0a1714] ring-1 ring-emerald-900/30 shadow-lg hover:shadow-emerald-600/20 transition-shadow"
          >
            <div className="md:flex">
              {/* Image */}
              <Link
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block md:w-2/5"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={1200}
                  height={800}
                  priority
                  className="h-56 w-full object-cover md:h-full"
                />
              </Link>

              {/* Contenu */}
              <div className="md:w-3/5 p-5 md:p-6 flex flex-col gap-4">
                {/* Titre */}
                <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>

                {/* Tags */}
                <ul className="flex flex-wrap gap-1">
                  {item.tags.map((tag, i) => (
                    <li
                      key={i}
                      className="rounded-full bg-emerald-950/70 text-[#04F7A4] px-3 py-1 text-xs md:text-sm"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {/* Description avec scroll */}
                <div
                  className="
                    max-h-36 md:max-h-40 
                    overflow-y-auto pr-2 
                    scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-transparent
                    hover:scrollbar-thumb-emerald-500
                    transition-all
                    rounded-lg
                  "
                >
                  <ul className="list-disc pl-5 text-sm md:text-base leading-relaxed text-neutral-200 space-y-1">
                    {item.description.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                </div>

                {/* Bouton */}
                <div className="pt-2">
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#04F7A4] px-4 py-2 text-sm font-semibold text-emerald-950 hover:brightness-95 active:translate-y-[1px] transition"
                  >
                    Voir le projet
                    <span aria-hidden>↗</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-10 mb-12">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`h-9 min-w-9 px-3 rounded-full text-sm font-medium transition cursor-pointer
              ${
                i === currentPage
                  ? "bg-emerald-950 text-[#04F7A4] ring-1 ring-emerald-700"
                  : "bg-[#153c31] text-emerald-100 hover:bg-[#1a4a3c]"
              }`}
            aria-current={i === currentPage ? "page" : undefined}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </>
  );
}
