"use client";

import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { CheckCircle2 } from "lucide-react";

import { Button } from "./ui/button";
import SectionHeading from "./SectionHeading";

const SKILLS = [
  <>
    Infrastructure as Code avec <strong>Terraform</strong>
  </>,
  <>
    Conception et automatisation de pipelines <strong>CI/CD</strong>
  </>,
  <>
    Conteneurisation et orchestration avec <strong>Docker</strong> et{" "}
    <strong>Kubernetes</strong>
  </>,
  <>
    Cloud computing et infrastructure avec <strong>AWS</strong>
  </>,
  <>
    Monitoring et observabilité avec <strong>CloudWatch</strong>,{" "}
    <strong>Prometheus</strong> et <strong>Grafana</strong>
  </>,
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="w-full   "
    >
      <div className="mx-auto w-full max-w-6xl  ">
        <SectionHeading number="01" label="à propos" title="À propos"  /> 

        <div className="  grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
          {/* Présentation */}
          <div className="mt-5 sm:mt-8">
            <p
              id="about-title"
              className="max-w-3xl text-lg leading-relaxed text-white/80 sm:text-xl md:text-2xl"
            >
              Ingénieur <strong className="text-white">DevOps</strong>, je
              conçois, automatise et maintiens des infrastructures cloud
              fiables, scalables et sécurisées.
            </p>

            <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/60 sm:text-lg">
              Certifié AWS Cloud Practitioner, je travaille avec{" "}
              <strong className="font-semibold text-white">AWS</strong>,{" "}
              <strong className="font-semibold text-white">Terraform</strong>,{" "}
              <strong className="font-semibold text-white">Docker</strong>,{" "}
              <strong className="font-semibold text-white">Kubernetes</strong>{" "}
              et des pipelines{" "}
              <strong className="font-semibold text-white">CI/CD</strong> afin
              d&apos;automatiser les déploiements et d&apos;améliorer la
              fiabilité des applications.
            </p>

            <div className="mt-8 ">
              <Button
                asChild
                className="
                   
                  bg-[#04F7A4]
                  px-7
                  py-6
                  text-sm
                  font-semibold
                  text-black
                  transition-colors
                  hover:bg-[#03d98f]
                  sm:px-9
                  rounded-xl
                "
              >
                <a href="/CV_Mahmoud.pdf" download>
                  Télécharger mon CV
                  <AiOutlineDownload
                    className="ml-2 text-lg"
                    aria-hidden="true"
                  />
                </a>
              </Button>
            </div>
          </div>

          {/* Compétences principales */}
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-white/35">
              {`// compétences principales`}
            </p>

            <ul className="space-y-4">
              {SKILLS.map((skill, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm leading-relaxed text-white/70 sm:text-base"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[#04F7A4]"
                    aria-hidden="true"
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}