"use client";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

interface FacultyCardProps {
  name: string;
  img: string;
  position: string;
  linkedin?: string;
  github?: string;
  gmail?: string;
}

const FacultyCard = ({
  name,
  img,
  position,
  linkedin,
  github,
  gmail,
}: FacultyCardProps) => {
  return (
    <div className="flex items-center rounded-lg">
      <div className="w-48 overflow-hidden h-44 rounded-xl bg-sky-950 md:w-80 md:h-72">
        <img
          src={img}
          alt="Faculty Image"
          width={500}
          height={500}
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      <div className="flex flex-col justify-center w-40 h-40 py-6 pl-3 text-white md:pl-6 md:h-56 bg-sky-900 rounded-r-xl md:w-52">
        <h1 className="text-lg font-bold leading-tight md:text-xl">
          {name}
        </h1>
        <h2 className="mt-1 text-sm font-medium md:text-base">
          {position}
        </h2>
        <div className="flex items-center justify-start mt-4 space-x-4 md:mt-6">
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="w-6 h-6 text-white transition delay-100" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <FaGithub className="w-6 h-6 text-white transition delay-200" />
            </a>
          )}
          {gmail && (
            <a href={gmail} target="_blank" rel="noreferrer">
              <FaEnvelope className="w-6 h-6 text-white transition delay-300 hover:fill-white" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default FacultyCard;
