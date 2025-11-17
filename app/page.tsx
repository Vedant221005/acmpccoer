import Blogs from "@/components/Blogs";
import Domain from "@/components/Domain";
import HomePage from "@/components/HomePage";
import React from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-black text-red-600 text-7xl">
      <ScrollReveal>
        <HomePage />
      </ScrollReveal>

      <ScrollReveal>
        <Domain />
      </ScrollReveal>

      <ScrollReveal>
        <Blogs />
      </ScrollReveal>
    </div>
  );
}
