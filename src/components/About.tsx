import React from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { Button } from "./ui/button";
import NumberTicker from "./ui/number-ticker";
import WordRotate from "./ui/word-rotate";

export default function About() {
  return (
    <section className="text-center flex-col items-center space-y-13">
      <div className="md:flex hidden text-center mx-auto font-bold justify-center -mt-12 -mb-16">
        <WordRotate
          className="text-[11rem] uppercase font-[800] text-white dark:text-white"
          words={["ABOUT"]}
        />
        <WordRotate
          className="text-[11rem] ml-2 uppercase font-[800] text-[#04F7A4] dark:text-white"
          words={["ME"]}
        />
      </div>
      <div>
        <h1 className="md:hidden mt-8 text-6xl uppercase font-[800] text-white dark:text-white">
          ABOUT ME
        </h1>
      </div>

      <div className="max-w-4xl ">
        <p className="mt-4    md:text-3xl md:text-left text-white">
          Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
          odit auting fugit sed thisnquia consequuntur magni dolores eos
          designer heresm qui rationessss 💪
        </p>
        <Button className="my-6 bg-[#04F7A4] px-12 py-6  rounded-none">
          <p className="text-xl text-black mr-2">Télécharger CV</p>
          <AiOutlineDownload className="text-xl text-black" />
        </Button>
      </div>

      <ul className="flex md:flex-row flex-col md:justify-between space-y-14 md:space-y-0 md:space-x-16 justify-center items-center">
        <li className="flex flex-col items-center text-7xl">
          <div className="flex items-center text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={20} className="text-white font-bold ml-2" />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2 text-left">
              <p>PROJECTS</p>
              <p>COMPLETER</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col items-center text-7xl">
          <div className="flex items-center text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={100} className="text-white font-bold ml-2" />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2  text-left">
              <p>LIGNES DE</p>
              <p>CODE ÉCRITES</p>
            </div>
          </div>
        </li>
        <li className="flex flex-col items-center text-7xl">
          <div className="flex items-center text-8xl">
            <span className="text-5xl font-[900] text-[#04F7A4]">+</span>
            <NumberTicker value={7} className="text-white font-bold ml-2" />
          </div>
          <div className="flex items-start">
            <div className="bg-[#04F7A4] w-8 h-1 mt-3"></div>
            <div className="text-3xl ml-2  text-left">
              <p>CAFÉS</p>
              <p>PAR SEMAINE</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
}
