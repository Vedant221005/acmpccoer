"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  path: string;
  color: string;
}

const navItems: NavItem[] = [
  { name: "ABOUT US", path: "/about", color: "blue" },
  // { name: "UPCOMING EVENT", path: "/upcomingevent", color: "green"},
  { name: "EVENTS", path: "/events", color: "green" },
  { name: "TEAM", path: "/team", color: "blue" },
  { name: "GALLERY", path: "/gallery", color: "green" },
];

const colorMap: Record<string, string> = {
  blue: "hover:bg-blue-500",
  red: "hover:bg-red-500",
  green: "hover:bg-green-500",
  yellow: "hover:bg-yellow-500",
};

const activeColorMap: Record<string, string> = {
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
};

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="fixed w-screen flex justify-between items-center p-3 px-4 sm:px-4 bg-black dark:bg-gray-900 z-50 border-b border-gray-200 dark:border-gray-700 h-20 overflow-hidden">
      <Link href="/" className="flex items-center flex-shrink-0">
        <Image
          src="/logo2.png"
          alt="ACMXPCCOER Logo"
          width={100}
          height={90}
          className=""
        />
        <div className="flex flex-col align-left justify-center">
          <h1 className="ml-2 text-xl lg:text-2xl text-white dark:text-white leading-6">
            <span className="block sm:hidden text-xl font-bold">ACMxPCCOER</span>
            <span className="hidden sm:block">ACMxPCCOER</span>
          </h1>
          <h2 className="hidden sm:block ml-2 text-md lg:text-md text-blue-500 leading-4">
            Pimpri Chinchwad College of Engineering & Research
          </h2>
        </div>
      </Link>

      <div className="flex-grow flex justify-end mr-2">
        <nav className="hidden h-12 lg:flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-full">
          <ul className="flex px-2 flex-wrap items-center gap-2 text-white dark:text-white text-sm lg:text-base">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className={`px-3.5 py-1.5 rounded-full transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? `${activeColorMap[item.color]} text-white`
                    : `text-white dark:text-white ${
                        colorMap[item.color]
                      } hover:text-white`
                }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="lg:hidden ml-auto pr-4 flex justify-end items-center">
        <button
          className="flex flex-col justify-between w-6 h-5 focus:outline-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block h-0.5 w-full bg-black dark:bg-white rounded"></span>
          <span className="block h-0.5 w-full bg-black dark:bg-white rounded"></span>
          <span className="block h-0.5 w-full bg-black dark:bg-white rounded"></span>
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-black/50 lg:hidden z-40 transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black shadow-2xl lg:hidden z-50
    transform transition-transform duration-300 ease-in-out border-l border-gray-700
    ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <span className="font-mono text-white">.</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-red-500 transition-colors cursor-pointer"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col space-y-3 p-10 text-white">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              ref={(el) => {
                if (el && menuOpen) {
                  gsap.fromTo(
                    el,
                    { opacity: 0, x: 50 },
                    {
                      opacity: 1,
                      x: 0,
                      delay: index * 0.08,
                      duration: 0.4,
                      ease: "power3.out",
                    }
                  );
                }
              }}
            >
              <Link
                href={item.path}
                className={`block px-4 py-3 rounded-full text-center text-white border border-gray-600 hover:border-transparent ${
                  colorMap[item.color]
                } hover:text-white transition-all duration-300 ease-in-out cursor-pointer`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;