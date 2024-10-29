import { portfolios, Portfolio } from "@/app/db/portfolio";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function MySkills() {
  return (
    <>
      <p className="text-3xl font-bold text-center mt-6">PROJECTS</p>
      <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto left-8 relative"></div>
      <div>
        <ul className="md:mt-12">
          {portfolios.map((item: Portfolio, index: number) => (
            <li
              key={index}
              className="mx-auto flex md:flex-row flex-col items-center md:gap-6 mb-10 md:mb-0 md:mt-0 mt-12 justify-center"
            >
              <div className="">
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    className="object-cover h-40 md:mb-12 mb-3"
                    src={item?.image}
                    alt="basket empty"
                    width={1000}
                    height={1000}
                    priority
                  />
                </Link>
              </div>
              <div className="flex md:flex-col flex-col-reverse">
                <p className="md:text-xl text-3xl font-bold">{item.title}</p>
                <p className="w-3/3 text-md">{item.description}</p>
                <ul className="flex gap-3 -mb-7 md:-mb-0">
                  {item.tags.map((tag: string, index: number) => (
                    <li
                      key={index}
                      className="bg-emerald-950 md:mt-3 mb-10 text-[#04F7A4] rounded-full px-3 py-1 text-md"
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
