"use client";

import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const navLinks = [
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Gallery", href: "/gallery" },
  ];

  const socialLinks = [
    { Icon: FaInstagram, href: "https://www.instagram.com/pccoeracm/", label: "Instagram" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/pccoer-acm-student-chapter/?originalSubdomain=in", label: "LinkedIn" },
    { Icon: FaTwitter, href: "https://x.com/acmpccoer", label: "Twitter" },
  ];

  return (
    <footer className="relative bg-black text-white text-base">
      
      {/* Gradient Top Border */}
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(to right, #3b82f6 0%, #ef4444 33%, #eab308 66%, #22c55e 100%)",
        }}
      />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Left Section */}
          <div className="sm:col-span-2">
            <h2 className="text-xl font-semibold mb-2">ACM Student Chapter</h2>
            <p className="text-cyan-400 text-sm mb-6">PCCOE&R, Ravet</p>

            <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-8">
              Empowering students through collaboration, learning and innovation.
              Let’s build a better tech future — together.
            </p>

            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-cyan-500 hover:border-transparent transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-cyan-400 transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Pimpri Chinchwad College of Engineering & Research<br />
              Ravet, Pune<br />
              Maharashtra 412101
            </p>

            <a
              href="mailto:acm@pccoer.in"
              className="text-gray-300 text-sm hover:text-cyan-400 transition"
            >
              acm@pccoer.in
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-800 mt-12" />

        {/* Bottom Row */}
        <div className="flex flex-col sm:flex-row justify-center items-center mt-4 text-gray-500 text-sm">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} ACMxPCCOER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
