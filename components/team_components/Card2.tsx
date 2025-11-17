"use client";

import { FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";

interface Card2Props {
  name: string;
  img: string;
  position: string;
  linkedin?: string;
  github?: string;
  gmail?: string;
}

const Card2 = ({
  name,
  img,
  position,
  linkedin,
  github,
  gmail,
}: Card2Props) => {
  return (
    <>
      <div className="relative h-56 text-white transition-transform transform rounded-sm w-36 md:w-64 md:h-80 group bg-sky-950">
        <div className="flex justify-center w-full rounded-t-sm h-2/3 md:h-3/4">
          <img
            src={img}
            alt={name}
            width={500}
            height={500}
            className="object-cover object-top w-full h-full m-auto transition-all duration-500 ease-out rounded-t-sm grayscale group-hover:grayscale-0"
          />
        </div>
        <div className="absolute bottom-0 flex flex-col items-center justify-center w-full px-2 text-center rounded-b-sm md:px-3 h-1/3 md:h-1/4">
          <div>
            <p className="text-sm font-medium md:text-lg">{name}</p>
            <p className="text-xs leading-tight">{position}</p>
          </div>
          <div className="flex mt-1 space-x-4">
            {linkedin && (
              <a href={linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin className="w-5 h-5 " />
              </a>
            )}
            {github && (
              <a href={github} target="_blank" rel="noreferrer">
                <FaGithub className="w-5 h-5" />
              </a>
            )}
            {gmail && (
              <a href={gmail} target="_blank" rel="noreferrer">
                <FaEnvelope className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card2;
