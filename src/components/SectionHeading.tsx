import React from "react";

type SectionHeadingProps = {
  number: string;
  label: string;
  title: string;
};

export default function SectionHeading({
  number,
  label,
  title,
}: SectionHeadingProps) {
  return (
    <header className="w-full">
      <div className="flex items-center gap-4">
        <p className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-[#04F7A4] sm:text-base md:text-lg">
          {`// ${number} - ${label}`}
        </p>

        <div
          className="h-px flex-1 bg-white/10"
          aria-hidden="true"
        />
      </div>

      <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        {title}
      </h2>
    </header>
  );
}