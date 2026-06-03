"use client";

import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Button } from "./ui/button";
import NumberTicker from "./ui/number-ticker";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";

const SKILLS: React.ReactNode[] = [
  <>
    Infrastructure as Code avec <strong>Terraform</strong> et <strong>Ansible</strong>
  </>,
  <>
    Pipelines CI/CD avec <strong>GitLab CI</strong> et <strong>AWS Amplify</strong>
  </>,
  <>
    Monitoring et observabilité avec <strong>Grafana</strong>, <strong>Prometheus</strong>{" "}
    et <strong>CloudWatch</strong>
  </>,
  <>
    Architectures serverless sur <strong>AWS</strong> (Lambda, S3, DynamoDB, API Gateway)
  </>,
];

const STATS = [
  { value: 5, label: ["PROJETS", "AWS / DEVOPS"] },
  { value: 10, label: ["OUTILS", "DEVOPS"] },
  { value: 2, label: ["CERTIFICATIONS", "AWS"] },
] as const;

function StatItem({ value, lines }: { value: number; lines: readonly [string, string] }) {
  return (
    <li className="flex flex-col items-center md:items-start">
      <div className="flex items-center text-5xl sm:text-6xl md:text-7xl">
        <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#04F7A4]">+</span>
        <NumberTicker value={value} className="text-white font-bold ml-1 sm:ml-2" />
      </div>
      <div className="flex items-start mt-1">
        <div className="bg-[#04F7A4] w-6 sm:w-8 h-1 mt-2 sm:mt-3 shrink-0" />
        <div className="text-lg sm:text-2xl md:text-3xl ml-2 text-left">
          <p>{lines[0]}</p>
          <p>{lines[1]}</p>
        </div>
      </div>
    </li>
  );
}

export default function About() {
  return (
    <section className="text-center flex flex-col items-center space-y-8 sm:space-y-10 px-2 sm:px-4">
      <SectionHeading
        primary="QUI SUIS-"
        accent="JE ?"
        mobilePrimary="ABOUT"
        mobileAccent="ME"
      />

      <div className="w-full max-w-4xl flex flex-col items-center">
        <p className="mt-2 text-base sm:text-lg md:text-2xl lg:text-3xl text-center md:text-left text-white leading-relaxed">
          Passionné par l{"'"}automatisation et le cloud, je suis{" "}
          <strong>Ingénieur DevOps</strong> certifié <strong>AWS</strong>. Je
          conçois des pipelines <strong>CI/CD</strong>, orchestre des conteneurs
          avec <strong>Kubernetes</strong> et supervise les infras avec{" "}
          <strong>Grafana</strong> et <strong>Prometheus</strong> — pour que les
          équipes livrent vite et sans stress.
        </p>

        <ul className="mt-6 w-full grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-white/90">
          {SKILLS.map((text, index) => (
            <li
              key={index}
              className="flex items-start gap-3 justify-center sm:justify-start text-center sm:text-left"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 text-[#04F7A4] shrink-0" />
              <span className="leading-relaxed text-sm sm:text-base">{text}</span>
            </li>
          ))}
        </ul>

        <div className="flex justify-center w-full mt-4">
          <Button
            asChild
            className="my-4 sm:my-6 bg-[#04F7A4] text-black px-8 sm:px-12 py-5 sm:py-6 rounded-none hover:bg-[#03d98f] transition-colors"
          >
            <a href="/CV_Mahmoud.pdf" download>
              Télécharger CV
              <AiOutlineDownload className="ml-2 text-xl" />
            </a>
          </Button>
        </div>
      </div>

      <ul className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-8 md:gap-12 justify-center items-center w-full max-w-3xl md:max-w-none pt-2">
        {STATS.map((stat) => (
          <StatItem key={stat.label[0]} value={stat.value} lines={stat.label} />
        ))}
      </ul>
    </section>
  );
}
