"use client"

import Link from "next/link"
import React, { useEffect, useState } from "react"
import Image from "next/image"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const pages = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/team", label: "Team" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className={`w-full border-b bg-background/60 backdrop-blur transition-shadow ${scrolled ? 'shadow-lg' : ''} sticky top-0 z-50`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          {/* Logo on the left */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={90} height={20} />
              {/* <span className="text-lg font-semibold">ACMXPCCOER</span> */}
            </Link>
          </div>

          {/* Nav links on the right (desktop) */}
          <nav className="hidden sm:flex items-center space-x-25 ml-auto">
            {pages.map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  className=" font-medium transition-all duration-200 hover:text-primary hover:scale-120"
                >
                  {p.label}
                </Link>
            ))}
          </nav>

          {/* small mobile fallback */}
          <div className="sm:hidden ml-auto">
            <Link href="/" className="text-sm font-medium">
              Menu
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
