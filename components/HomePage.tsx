"use client";

import Image from "next/image";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col items-center justify-center">

      {/* Top Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50"></div>

      {/* MAIN SECTION */}
      <div className="min-h-screen w-full flex flex-col lg:flex-row justify-around gap-20 items-center px-4 py-8 md:py-20">

        {/* LEFT SECTION */}
        <div className="relative">

          {/* SHAPE CONTAINER */}
          <div className="relative w-[540px] h-auto">

            {/* SVG BORDER -- EXACT SHAPE IN YOUR IMAGE */}
            <svg
              width="540"
              height="340"
              viewBox="0 0 540 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 left-0 stroke-blue-500 stroke-[4px]"
            >
              <path
                d="
                  M50 20
                  H380
                  A20 20 0 0 1 400 40
                  V80
                  A20 20 0 0 0 420 100
                  H510
                  V270
                  A20 20 0 0 1 490 290
                  H220
                  A20 20 0 0 1 200 270
                  V250
                  A20 20 0 0 0 180 230
                  H30
                  V20
                  Z
                "
              />
            </svg>

            {/* TEXT INSIDE SHAPE */}
            <div className="relative pt-10 pl-12 pr-11 pb-6 max-w-[525px]">

              <h2 className="text-3xl font-bold text-white leading-snug">
                Connect. Learn. Build.
              </h2>

              <p className=" text-lg leading-relaxed text-white mt-6">
At ACM x PCCOE&R – explore the world of computing, innovate with purpose, and build what matters.
Through hands-on workshops, coding sessions, and tech talks,
we Learn, Lead, and Level Up.
              </p>

            </div>
          </div>

          {/* SOCIAL ICONS OUTSIDE (BOTTOM-LEFT) */}
          <div className="absolute -bottom-8 left-10 flex space-x-5">

            <a href="https://www.instagram.com/pccoeracm/" target="_blank">
              <FaInstagram className="size-8 text-gray-300 hover:text-pink-400 transition" />
            </a>

            <a href="https://www.linkedin.com/company/pccoer-acm-student-chapter/?originalSubdomain=in" target="_blank">
              <FaLinkedin className="size-8 text-gray-300 hover:text-blue-500 transition" />
            </a>

            <a href="https://x.com/acmpccoer" target="_blank">
              <FaTwitter className="size-8 text-gray-300 hover:text-gray-400 transition" />
            </a>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end p-4">
          <Image
            src="/assets/gdg_community2.webp"
            alt="GDG Community illustration"
            width={600}
            height={450}
            className="h-full w-auto md:min-h-[350px] mt-20 lg:mt-0 filter drop-shadow-xl"
          />
        </div>

      </div>
    </main>
  );
}
