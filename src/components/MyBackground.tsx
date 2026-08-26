"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  GraduationCap,
  Briefcase,
  Globe,
  Github,
  MoveUpRight,
} from "lucide-react";

import { education } from "@/app/db/education";
import { experience } from "@/app/db/experience";

import SectionHeading from "./SectionHeading";

type ExternalLinkProps = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
};

function ExternalLink({
  href,
  className,
  children,
  ...props
}: ExternalLinkProps) {
  if (!href) return null;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </Link>
  );
}

function EducationBlock({
  filterOrg,
  logo,
}: {
  filterOrg: string;
  logo?: {
    src: string;
    alt: string;
    className: string;
  };
}) {
  const items = education.filter(
    (item) => item.organization === filterOrg
  );

  return (
    <section className="w-full">
      {logo && (
        <div className="flex w-full justify-center min-[425px]:justify-start">
          <Image
            className={logo.className}
            src={logo.src}
            alt={logo.alt}
            width={1000}
            height={1000}
            priority
          />
        </div>
      )}

      <ul
        className="mt-4 flex flex-col gap-5 sm:gap-6"
        role="list"
      >
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex flex-col text-center min-[425px]:text-left">
              {/* Titre */}
              <div className="flex flex-wrap items-center justify-center gap-2 min-[425px]:justify-start">
                <h3
                  className="
                    max-w-full
                    text-lg
                    font-medium
                    leading-relaxed
                    text-white

                    sm:text-xl
                    md:text-2xl
                  "
                >
                  {item.title}
                </h3>

                {item.link && (
                  <ExternalLink
                    href={item.link}
                    className="
                      inline-flex
                      shrink-0
                      items-center
                      justify-center
                      text-[#04F7A4]
                      transition-transform
                      hover:-translate-y-0.5
                      hover:translate-x-0.5
                    "
                    aria-label={`Voir ${item.title}`}
                  >
                    <MoveUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </ExternalLink>
                )}
              </div>

              {/* Description */}
              {item.description && item.description.length > 0 && (
                <ul
                  className="
                    mt-4
                    space-y-2
                    text-sm
                    leading-7
                    text-gray-400

                    sm:text-base
                    md:max-w-[85%]
                    md:text-lg
                  "
                >
                  {item.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const CARD_CLASS =
  "mx-auto w-full max-w-5xl overflow-hidden rounded-2xl bg-[#0a1714] ring-1 ring-emerald-900/30 shadow-lg transition-shadow hover:shadow-emerald-600/20";

const BTN_CLASS =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#04F7A4] px-4 py-2.5 text-sm font-semibold text-emerald-950 transition hover:brightness-95 active:translate-y-px";

const SCROLL_CLASS =
  "max-h-36 overflow-y-auto rounded-lg pr-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-emerald-700 hover:scrollbar-thumb-emerald-500 sm:max-h-40";

export default function MyBackground() {
  const [showEducation, setShowEducation] = useState(true);

  const currentExperiences = useMemo(
    () => experience.slice(0, 3),
    []
  );

  const tabClass = (active: boolean) =>
    `
      flex
      min-h-11
      flex-1
      items-center
      justify-center
      gap-2
      rounded-xl
      px-3
      py-2.5
      text-sm
      font-medium
      transition-all
      duration-300

      sm:text-base
       

      ${
        active
          ? "bg-[#04F7A4] text-black shadow-md"
          : "bg-white/[0.03] text-gray-400 hover:bg-white/5 hover:text-white"
      }
    `;

  return (
    <div
      className="flex w-full flex-col"
      aria-labelledby="background-heading"
    >
      <SectionHeading
        number="03"
        label="parcours"
        title="Parcours & Certifications"
      />

      {/* Tabs */}
      <div className="mt-6 flex w-full items-center gap-2 sm:gap-4">
        <button
          type="button"
          onClick={() => setShowEducation(true)}
          className={tabClass(showEducation)}
          aria-pressed={showEducation}
        >
          <GraduationCap className="h-4 w-4 shrink-0" />
          <span>Formations</span>
        </button>

        <span className="hidden h-5 w-px shrink-0 bg-white/10 sm:block" />

        <button
          type="button"
          onClick={() => setShowEducation(false)}
          className={tabClass(!showEducation)}
          aria-pressed={!showEducation}
        >
          <Briefcase className="h-4 w-4 shrink-0" />
          <span>Expériences</span>
        </button>
      </div>

      {/* Formations */}
      {showEducation && (
        <div className="mt-6 space-y-10 sm:mt-8 sm:space-y-12">
          <EducationBlock filterOrg="K8S" />

          <EducationBlock
            filterOrg="Amazon Web Services (AWS)"
            logo={{
              src: "/images/awslogo.webp",
              alt: "Logo AWS",
              className:
                "h-auto w-24 object-contain sm:w-28 md:w-32",
            }}
          />

          <EducationBlock
            filterOrg="OpenClassrooms"
            logo={{
              src: "/images/ocs.webp",
              alt: "Logo OpenClassrooms",
              className:
                "h-auto w-52 max-w-full object-contain sm:w-64 md:w-72",
            }}
          />
        </div>
      )}

      {/* Expériences */}
      {!showEducation && (
        <ul className="mt-6 space-y-6 sm:mt-10 sm:space-y-8">
          {currentExperiences.map((item) => (
            <li key={item.id} className={CARD_CLASS}>
              <article className="flex flex-col md:flex-row">
                {/* Image */}
                {item.link ? (
                  <ExternalLink
                    href={item.link}
                    className="block shrink-0 overflow-hidden md:w-2/5"
                    aria-label={`Voir ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={800}
                      className="
                        h-48
                        w-full
                        object-cover
                        transition-transform
                        duration-300
                        hover:scale-[1.02]

                        sm:h-56
                        md:h-full
                        md:min-h-full
                      "
                    />
                  </ExternalLink>
                ) : (
                  <div className="shrink-0 overflow-hidden md:w-2/5">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={1200}
                      height={800}
                      className="
                        h-48
                        w-full
                        object-cover

                        sm:h-56
                        md:h-full
                        md:min-h-full
                      "
                    />
                  </div>
                )}

                {/* Contenu */}
                <div
                  className="
                    flex
                    min-w-0
                    flex-col
                    gap-4
                    p-4

                    sm:p-5
                    md:w-3/5
                    md:p-6
                  "
                >
                  <h3 className="text-lg font-bold text-white sm:text-xl md:text-2xl">
                    {item.title}
                  </h3>

                  {/* Organisations / tags */}
                  <ul className="flex flex-wrap gap-2">
                    {item.organization.map(
                      (tag: string, i: number) => (
                        <li
                          key={i}
                          className="
                            rounded-full
                            bg-emerald-950/70
                            px-3
                            py-1
                            text-xs
                            text-[#04F7A4]

                            md:text-sm
                          "
                        >
                          {tag}
                        </li>
                      )
                    )}
                  </ul>

                  {/* Description scrollable */}
                  <div className={SCROLL_CLASS}>
                    <ul className="list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-neutral-200 md:text-base">
                      {item.description.map(
                        (line: string, i: number) => (
                          <li
                            key={i}
                            className="marker:text-[#04F7A4]"
                          >
                            {line}
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Boutons */}
                  <div className="mt-1 flex flex-wrap gap-3">
                    <ExternalLink
                      href={item.link}
                      className={`${BTN_CLASS} flex-1 sm:flex-none`}
                      aria-label="Voir le site"
                    >
                      <Globe className="h-4 w-4" />
                      <span>Voir le site</span>
                    </ExternalLink>

                    <ExternalLink
                      href={item.github}
                      className="
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
                        transition

                        hover:border-[#04F7A4]/40
                        hover:bg-[#04F7A4]/10
                        hover:text-[#04F7A4]

                        sm:flex-none
                      "
                      aria-label="Voir GitHub"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </ExternalLink>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}