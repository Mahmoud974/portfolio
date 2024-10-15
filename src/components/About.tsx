import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Button } from "./ui/button";
import NumberTicker from "./ui/number-ticker";
import WordRotate from "./ui/word-rotate";

export default function About() {
  return (
    <section className="text-left flex-col  space-y-13 ">
      <div className="flex text-center mx-auto font-bold justify-center">
        <WordRotate
          className="text-9xl uppercase font-[800] text-white dark:text-white"
          words={["ABOUT"]}
        />
        <WordRotate
          className="text-9xl ml-2  uppercase font-[800] text-[#04F7A4] dark:text-white"
          words={["ME"]}
        />
      </div>

      <div className="max-w-4xl ">
        <p className="w-3/3 mt-4 text-3xl  text-left text-white ">
          Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
          odit auting fugit sed thisnquia consequuntur magni dolores eos
          designer heresm qui ratione 💪
        </p>
        <Button className="mx-auto my-6 bg-[#04F7A4]   px-12 py-6  rounded-none ">
          <p className="text-xl text-black mr-2"> Télécharger CV</p>{" "}
          <AiOutlineDownload className="text-xl text-black" />
        </Button>
      </div>
      <ul className="flex justify-start space-x-16 ">
        <li className="flex flex-col text-7xl">
          <div className="flex text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={20} className="text-white font-bold ml-2 " />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2">
              <p>PROJECTS</p>
              <p>COMPLETER</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col text-7xl">
          <div className="flex text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={91} className="text-white font-bold ml-2 " />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2">
              <p>HAPPY</p>
              <p>CUSTOMERS</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col text-7xl">
          <div className="flex text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={53} className="text-white font-bold ml-2 " />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2">
              <p>AWARDS</p>
              <p>WON</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
