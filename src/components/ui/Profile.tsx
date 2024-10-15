import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Profile() {
  return (
    <section className="bg-[#0f0f0f] h-max px-8 py-16 rounded-2xl relative overflow-visible mt-12">
      <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-red-900 rounded-full text-left"></div>{" "}
      <div className="flex flex-col items-center">
        <ul className="">
          <li className="text-5xl mb-4">
            <p className="font-[400] font-['Poppins']">MOUSSA</p>
            <p className="font-[800] font-['Poppins']">MAHMOUD</p>
          </li>
          <li className="w-56 text-xl mb-4">
            I’m a front-end developer, looking to work with you!
          </li>
          <li>
            <ul className="flex  text-3xl space-x-4 mt-4">
              <li>
                <FaLinkedin />
              </li>
              <li>
                <FaFacebook />
              </li>
              <li>
                <BsGithub />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
