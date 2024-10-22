import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

export default function Profile() {
  return (
    <div className="flex justify-end">
      {/* Section de profil avec `sticky` */}
      <section className="bg-[#0f0f0f] h-max px-8 py-16 rounded-2xl mt-16 overflow-visible sticky top-24">
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-[#04F7A4] rounded-full text-left"></div>
        <div className="flex flex-col items-center">
          <ul>
            <li className="text-5xl mb-4">
              <p className="font-[400] font-['Poppins']">MOUSSA</p>
              <p className="font-[800] font-['Poppins']">MAHMOUD</p>
            </li>
            <li className="w-56 text-xl mb-4">
              I’m a front-end developer, looking to work with you!
            </li>
            <li>
              <ul className="flex text-3xl space-x-4 mt-4">
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
    </div>
  );
}
