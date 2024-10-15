import { portfolios, Portfolio } from "@/app/db/portfolio";
import React from "react";
import Image from "next/image";
export default function MySkills() {
  return (
    <>
      <p className="text-3xl font-bold text-center mt-6">PROJECTS</p>
      <div className="h-2 mt-2 w-20 bg-[#04F7A4] mx-auto left-8 relative"></div>
      <div>
        <ul className="mt-12   ">
          {portfolios.map((item: Portfolio, index: number) => (
            <li
              key={index}
              className="mx-auto flex items-center gap-6 justify-center"
            >
              <div>
                <Image
                  className=" object-cover mb-12   "
                  src={`/images/portfolio.webp`}
                  alt="basket empty"
                  width={1000}
                  height={1000}
                  priority
                />
              </div>
              <div className="">
                <p className="text-2xl">{item.title}</p>
                <p className="w-3/3">{item.description}</p>
                <ul className="flex gap-3  ">
                  {item.tags.map((tag: string, index: number) => (
                    <li
                      key={index}
                      className="bg-emerald-950 mt-3 mb-10 text-[#04F7A4] rounded-full px-3 py-1 "
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
