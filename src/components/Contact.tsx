import React from "react";
import Title from "./Title";

export default function Contact() {
  return (
    <div className="mb-12">
      <div className="md:flex hidden">
        <Title>
          Contact <span className="text-[#04F7A4]">me</span>
        </Title>
      </div>
      <div>
        <h1 className="md:hidden mt-8 text-5xl uppercase font-[800] text-white dark:text-white">
          CONTACT ME
        </h1>
      </div>
      <p className="w-3/3 mt-4 md:text-3xl text-md   text-left text-white ">
        Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut odit
        auting fugit sed thisnquia consequuntur magni dolores eos designer
        heresm qui ratione 💪
      </p>
      <div className="  mx-auto w-full   font-[sans-serif]">
        <form className="mt-8 space-y-4 ">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-900 focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-900 focus:bg-transparent text-sm outline-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-900 focus:bg-transparent text-sm outline-blue-500"
          />
          <textarea
            placeholder="Message"
            rows={6}
            className="w-full rounded-md px-4  bg-gray-900 focus:bg-transparent text-sm pt-3 outline-blue-500"
          ></textarea>
          <button
            type="button"
            className="text-black bg-[#04F7A4] hover:bg-[#1c6d52] tracking-wide rounded-md text-sm px-4 py-3 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
