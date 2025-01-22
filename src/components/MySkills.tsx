import { portfolios, Portfolio } from "@/app/db/portfolio";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function MySkills() {
  const [currentPage, setCurrentPage] = useState(0); // Initialiser la page courante à 0
  const itemsPerPage = 3;

  // Calculer les items à afficher pour la page courante
  const currentItems = portfolios.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  // Calculer le nombre de pages
  const totalPages = Math.ceil(portfolios.length / itemsPerPage);

  return (
    <>
      <p className="text-3xl font-bold text-center mt-6">PROJECTS</p>
      <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto left-8 relative"></div>
      {/* Pagination controls */}
      <div className="flex justify-center gap-2 mt-6 mb-12">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index)}
            className={`px-4 py-2 rounded ${
              index === currentPage
                ? "bg-emerald-950 text-[#04F7A4]"
                : "bg-[#1c6d52]"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div>
        <ul className="md:mt-12 flex flex-col items-center">
          {currentItems.map((item: Portfolio, index: number) => (
            <li
              key={index}
              className="mx-auto  flex  md:flex-row flex-col items-center md:gap-6 mb-10 md:mb-0 md:mt-0 mt-12 justify-center"
            >
              <div>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="object-cover h-40 md:mb-12 mb-3"
                    src={item.image}
                    alt={item.title}
                    width={1000}
                    height={1000}
                    priority
                  />
                </Link>
              </div>
              <div className="flex md:flex-col flex-col-reverse">
                <p className="md:text-xl text-3xl font-bold">{item.title}</p>
                <p className="w-3/3 text-md">{item.description}</p>
                <ul className="flex flex-wrap  gap-3 lg:-mb-7 md:-mb-0">
                  {item.tags.map((tag: string, tagIndex: number) => (
                    <li
                      key={tagIndex}
                      className="bg-emerald-950  text-[#04F7A4] md:mt-3 l   rounded-full px-3 py-1 text-md"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
