"use client";

import { education } from "@/app/db/education";
import { experience } from "@/app/db/experience";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WordRotate from "./ui/word-rotate";
import { GraduationCap, Briefcase, Globe, Github } from "lucide-react";

type ExternalLinkProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

function ExternalLink({ href, className, children }: ExternalLinkProps) {
  if (!href) return null;
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </Link>
  );
}

export default function MyBackground() {
  const [showEducation, setShowEducation] = useState(true);
  const currentPage = 0;
  const itemsPerPage = 3;

  const currentExperiences = useMemo(() => {
    return experience.slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );
  }, [currentPage]);

  return (
    <section className="justify-center flex flex-col" aria-labelledby="background-heading">
      <div className="md:flex hidden text-center mx-auto font-bold justify-center -mt-6 -mb-16">
        <WordRotate
          className="text-[7.5rem] uppercase font-[800] text-white dark:text-white"
          words={["MON"]}
        />
        <WordRotate
          className="text-[7.5rem] ml-2 uppercase font-[800] text-[#04F7A4] dark:text-white"
          words={["PARCOURS"]}
        />
      </div>

      {/* COMMUTATEUR */}
      <div className="flex justify-center mt-12">
        <div className="flex items-center bg-[#0a1714] rounded-full p-1">
          <button
            onClick={() => setShowEducation(true)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all ${
              showEducation ? "bg-[#04F7A4] text-black" : "text-gray-400 hover:text-white"
            }`}
            type="button"
          >
            <GraduationCap className="w-5 h-5" />
            <span>Formations</span>
          </button>

          <button
            onClick={() => setShowEducation(false)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all ${
              !showEducation ? "bg-[#04F7A4] text-black" : "text-gray-400 hover:text-white"
            }`}
            type="button"
          >
            <Briefcase className="w-5 h-5" />
            <span>Expériences</span>
          </button>
        </div>
      </div>

      {/* SECTION ÉDUCATION */}
      {showEducation && (
        <>
          <ul className="gap-5 flex flex-col justify-center mt-3" role="list">
            {education
              .filter((item) => item.organization === "K8S")
              .map((item, index) => (
                <li key={index}>
                  <div className="flex flex-col md:text-left">
                    <h3 className="md:text-2xl text-lg my-2">{item.title}</h3>
                    <ul>
                      {item.description?.map((desc, idx) => (
                        <li key={idx} className="md:text-lg text-md text-gray-600 md:w-5/6">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>

          <Image
            className="object-cover w-24 h-auto mt-7"
            src="/images/awslogo.webp"
            alt="Logo AWS"
            width={1000}
            height={1000}
            priority
          />

          <ul className="gap-5 flex flex-col justify-center mt-3" role="list">
            {education
              .filter((item) => item.organization === "Amazon Web Services (AWS)")
              .map((item, index) => (
                <li key={index}>
                  <div className="flex flex-col md:text-left">
                    <h3 className="md:text-2xl text-lg my-2">
                      {item.title}{" "}
                      {item.link ? (
                        <ExternalLink href={item.link} className="text-[#04F7A4] text-4xl">
                          ↗
                        </ExternalLink>
                      ) : null}
                    </h3>

                    <ul>
                      {item.description?.map((desc, idx) => (
                        <li key={idx} className="md:text-lg text-md text-gray-600 md:w-5/6">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>

          <Image
            className="object-cover w-64 h-auto mt-7 -ml-1"
            src="/images/ocs.webp"
            alt="Logo OpenClassrooms"
            width={1000}
            height={1000}
            priority
          />

          <ul className="gap-5 flex flex-col justify-center mt-3" role="list">
            {education
              .filter((item) => item.organization === "OpenClassrooms")
              .map((item, index) => (
                <li key={index}>
                  <div className="flex flex-col md:text-left">
                    <h3 className="md:text-2xl text-lg my-2">{item.title}</h3>
                    <ul>
                      {item.description?.map((desc, idx) => (
                        <li key={idx} className="md:text-lg text-md text-gray-600 md:w-5/6">
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </>
      )}

      {/* SECTION EXPÉRIENCES */}
      {!showEducation && (
        <ul className="mt-10 space-y-8">
          {currentExperiences.map((item) => (
            <li
              key={item.id}
              className="mx-auto w-full h-auto max-w-5xl overflow-hidden rounded-2xl bg-[#0a1714] ring-1 ring-emerald-900/30 shadow-lg hover:shadow-emerald-600/20 transition-shadow"
            >
              <div className="md:flex">
                {/* Image cliquable seulement si link existe */}
                {item.link ? (
                  <ExternalLink href={item.link} className="block md:w-2/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={800}
                      priority
                      className="h-56 w-full object-cover md:h-full"
                    />
                  </ExternalLink>
                ) : (
                  <div className="block md:w-2/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={800}
                      priority
                      className="h-56 w-full object-cover md:h-full"
                    />
                  </div>
                )}

                {/* Contenu */}
                <div className="md:w-3/5 p-5 md:p-6 flex flex-col gap-4">
                  <h3 className="text-xl md:text-2xl font-bold">{item.title}</h3>

                  {/* Tags */}
                  <ul className="flex flex-wrap gap-1">
                    {item.organization.map((tag: string, i: number) => (
                      <li
                        key={i}
                        className="rounded-full bg-emerald-950/70 text-[#04F7A4] px-3 py-1 text-xs md:text-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Description */}
                  <div
                    className="max-h-36 md:max-h-40 overflow-y-auto pr-2 
                    scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-transparent
                    hover:scrollbar-thumb-emerald-500 transition-all rounded-lg"
                  >
                    <ul className="list-disc pl-5 text-sm md:text-base leading-relaxed text-neutral-200 space-y-1">
                      {item.description.map((line: string, i: number) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Boutons (rendus uniquement si liens existent) */}
                  <div className="flex gap-2 pt-2">
                    <ExternalLink
                      href={item.link}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#04F7A4] px-4 py-2 text-sm font-semibold text-emerald-950 hover:brightness-95 active:translate-y-[1px] transition"
                    >
                      <Globe />
                    </ExternalLink>

                    <ExternalLink
                      href={item.github}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#04F7A4] px-4 py-2 text-sm font-semibold text-emerald-950 hover:brightness-95 active:translate-y-[1px] transition"
                    >
                      <Github />
                    </ExternalLink>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
