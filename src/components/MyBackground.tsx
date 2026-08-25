"use client";

import { education } from "@/app/db/education";
import { experience } from "@/app/db/experience";
import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Briefcase, Globe, Github, MoveUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
 

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

function EducationBlock({
  filterOrg,
  logo,
}: {
  filterOrg: string;
  logo?: { src: string; alt: string; className: string };
}) {
  const items = education.filter((item) => item.organization === filterOrg);

  return (
    <>
      {logo && (
        <Image
          className={logo.className}
          src={logo.src}
          alt={logo.alt}
          width={1000}
          height={1000}
          priority
        />
      )}
      <ul className="gap-4 sm:gap-5 flex flex-col mt-3" role="list">
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col text-center md:text-left">
              <h3 className="text-lg sm:text-xl md:text-2xl my-2 flex flex-wrap items-center justify-center md:justify-start gap-2">
                {item.title}
                {item.link ? (
                  <ExternalLink href={item.link} className="text-[#04F7A4]">
                    <MoveUpRight className="w-6 h-6 sm:w-8 sm:h-8" />
                  </ExternalLink>
                ) : null}
              </h3>
              <ul>
                {item.description?.map((desc, idx) => (
                  <li
                    key={idx}
                    className="text-sm sm:text-base md:text-lg text-gray-400 md:max-w-[85%] leading-relaxed"
                  >
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

const CARD_CLASS =
  "mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-[#0a1714] ring-1 ring-emerald-900/30 shadow-lg hover:shadow-emerald-600/20 transition-shadow";

const BTN_CLASS =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-[#04F7A4] px-4 py-2 text-sm font-semibold text-emerald-950 hover:brightness-95 active:translate-y-px transition";

export default function MyBackground() {
  const [showEducation, setShowEducation] = useState(true);
  const currentExperiences = useMemo(() => experience.slice(0, 3), []);

  const tabClass = (active: boolean) =>
    `flex items-center justify-center gap-2 w-full py-3 rounded-xl lg:rounded-full font-medium transition-all duration-300 ${
      active
        ? "bg-[#04F7A4] text-black shadow-md"
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`;

  return (
    <div className="flex flex-col" aria-labelledby="background-heading">
   <SectionHeading number="03"
  label="parcours"
  title="Parcours & Certifications" />

<div className="mt-6 flex items-center gap-5">
  <button
    type="button"
    onClick={() => setShowEducation(true)}
    className={tabClass(showEducation)}
    aria-pressed={showEducation}
  >
    <GraduationCap className="h-4 w-4" />
    <span>Formations</span>
  </button>

  <span className="h-4 w-px bg-white/10" />

  <button
    type="button"
    onClick={() => setShowEducation(false)}
    className={tabClass(!showEducation)}
    aria-pressed={!showEducation}
  >
    <Briefcase className="h-4 w-4" />
    <span>Expériences</span>
  </button>
</div>

      {showEducation && (
        <div className="mt-4 sm:mt-6 space-y-6">
          <EducationBlock filterOrg="K8S" />
          <EducationBlock
            filterOrg="Amazon Web Services (AWS)"
            logo={{
              src: "/images/awslogo.webp",
              alt: "Logo AWS",
              className: "object-cover w-20 sm:w-24 h-auto mt-4",
            }}
          />
          <EducationBlock
            filterOrg="OpenClassrooms"
            logo={{
              src: "/images/ocs.webp",
              alt: "Logo OpenClassrooms",
              className: "object-cover w-48 sm:w-64 h-auto mt-4 max-w-full",
            }}
          />
        </div>
      )}

      {!showEducation && (
        <ul className="mt-6 sm:mt-10 space-y-6 sm:space-y-8">
          {currentExperiences.map((item) => (
            <li key={item.id} className={CARD_CLASS}>
              <div className="flex flex-col md:flex-row">
                {item.link ? (
                  <ExternalLink href={item.link} className="block md:w-2/5 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={800}
                      className="h-48 sm:h-56 w-full object-cover md:min-h-full md:h-full"
                    />
                  </ExternalLink>
                ) : (
                  <div className="md:w-2/5 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={800}
                      className="h-48 sm:h-56 w-full object-cover md:min-h-full md:h-full"
                    />
                  </div>
                )}

                <div className="md:w-3/5 p-4 sm:p-5 md:p-6 flex flex-col gap-3 sm:gap-4 min-w-0">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{item.title}</h3>

                  <ul className="flex flex-wrap gap-1.5">
                    {item.organization.map((tag: string, i: number) => (
                      <li
                        key={i}
                        className="rounded-full bg-emerald-950/70 text-[#04F7A4] px-3 py-1 text-xs md:text-sm"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="max-h-36 md:max-h-40 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-emerald-700 scrollbar-track-transparent rounded-lg">
                    <ul className="list-disc pl-5 text-sm md:text-base leading-relaxed text-neutral-200 space-y-1">
                      {item.description.map((line: string, i: number) => (
                        <li key={i}>{line}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <ExternalLink href={item.link} className={BTN_CLASS} aria-label="Site">
                      <Globe className="w-4 h-4" />
                    </ExternalLink>
                    <ExternalLink href={item.github} className={BTN_CLASS} aria-label="GitHub">
                      <Github className="w-4 h-4" />
                    </ExternalLink>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
