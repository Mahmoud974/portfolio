import React from "react";

type SectionHeadingProps = {
  primary: string;
  accent?: string;
  mobilePrimary?: string;
  mobileAccent?: string;
  className?: string;
  id?: string;
};

export default function SectionHeading({
  primary,
  accent = "",
  mobilePrimary,
  mobileAccent,
  className = "",
  id,
}: SectionHeadingProps) {
  const mobileMain = mobilePrimary ?? primary;
  const mobileHighlight = mobileAccent ?? accent;

  return (
    <h2
      id={id}
      className={`flex flex-wrap justify-center gap-x-2 text-center mx-auto font-extrabold uppercase mb-6 lg:mb-12 text-4xl sm:text-5xl lg:text-7xl xl:text-[7.5rem] leading-none ${className}`}
    >
      <span className="text-white md:hidden">{mobileMain}</span>
      <span className="text-[#04F7A4] md:hidden">{mobileHighlight}</span>
      <span className="hidden md:inline text-white">{primary}</span>
      {accent ? (
        <span className="hidden md:inline text-[#04F7A4]">{accent}</span>
      ) : null}
    </h2>
  );
}
