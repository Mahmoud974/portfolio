import React from "react";

type SectionHeadingProps = {
  primary: string;
  accent: string;
  mobilePrimary?: string;
  mobileAccent?: string;
  className?: string;
};

export default function SectionHeading({
  primary,
  accent,
  mobilePrimary,
  mobileAccent,
  className = "",
}: SectionHeadingProps) {
  const mobileMain = mobilePrimary ?? primary;
  const mobileHighlight = mobileAccent ?? accent;

  return (
    <>
      <div
        className={`hidden md:flex flex-wrap justify-center gap-x-2 text-center mx-auto font-extrabold uppercase -mt-8 lg:-mt-12 mb-6 lg:mb-12 ${className}`}
      >
        <span className="text-5xl lg:text-7xl xl:text-[7.5rem] leading-none text-white">
          {primary}
        </span>
        <span className="text-5xl lg:text-7xl xl:text-[7.5rem] leading-none text-[#04F7A4]">
          {accent}
        </span>
      </div>
      <h2 className="md:hidden mt-6 mb-6 text-4xl sm:text-5xl uppercase font-extrabold text-center text-white">
        {mobileMain}{" "}
        <span className="text-[#04F7A4]">{mobileHighlight}</span>
      </h2>
    </>
  );
}
