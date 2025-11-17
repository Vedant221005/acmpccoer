"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

interface HeadcardProps {
  name: string;
  img: string;
  position: string;
  linkedin?: string;
  github?: string;
  gmail?: string;
}

const Headcard = ({
  name,
  img,
  position,
  linkedin,
  github,
  gmail,
}: HeadcardProps) => {
  return (
    <>
      <div className="relative w-40 overflow-hidden rounded-md shadow-lg md:w-72 md:h-96 h-52 group">
        <img
          src={img}
          alt={name}
          width={500}
          height={500}
          className="object-cover w-full h-full transition-all duration-500 ease-out grayscale group-hover:grayscale-0"
        />
        <div className="absolute bottom-0 flex flex-col justify-end w-full p-3 text-white md:p-4 h-1/2 bg-linear-to-t from-black/90 via-black/60 to-transparent">
          <div className="flex self-end mb-4 space-x-4 transition-all duration-500 ease-out transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="w-5 h-5 text-white transition delay-100 sm:w-6 sm:h-6" />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <FaGithub className="w-5 h-5 text-white transition delay-200 sm:w-6 sm:h-6" />
              </a>
            )}
            {gmail && (
              <a href={gmail} target="_blank" rel="noreferrer">
                <FaEnvelope className="w-5 h-5 text-white transition delay-300 sm:w-6 sm:h-6 hover:fill-white" />
              </a>
            )}
          </div>
          <p className="text-base font-semibold leading-tight md:text-xl">
            {name}
          </p>
          <p className="text-xs leading-tight md:text-base">{position}</p>
        </div>
      </div>
    </>
  );
};

export default Headcard;
