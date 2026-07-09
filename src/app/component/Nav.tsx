"use client"
import React, { useEffect, useState } from 'react'
import { Phone, Menu, X } from "lucide-react";
import Link from 'next/link';

function Nav() {
  const [isScroll, setIsScroll] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Us", href: "#about" },
    { label: "Cancer Types", href: "#cancer-types" },
    { label: "Doctors", href: "#doctors" },
    { label: "Treatment", href: "#treatment" },
    { label: "Patient Stories", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScroll ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center h-[64px]">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1B8C5C] to-[#31B8AC] rounded-full flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[#1a2547] text-lg font-bold tracking-tight">
                Cancer<span className="text-[#1B8C5C]">Care</span>
              </span>
              <span className="text-[9px] text-gray-500 tracking-[0.15em] uppercase">
                Expertise / Empathy / Hope
              </span>
            </div>
          </Link>

          {/* NAV LINKS - Desktop */}
          <ul className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[13px] font-medium text-gray-700 hover:text-[#1B8C5C] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#1B8C5C] after:transition-all hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA BUTTON */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+919986764471"
              className="flex items-center gap-2 bg-[#1a2547] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#243156] shadow-sm transition-all"
            >
              <Phone size={15} />
              Call Now
              <span className="hidden xl:inline">+91 99867 64471</span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium text-gray-700 py-2 border-b border-gray-50 hover:text-[#1B8C5C]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+919986764471"
                className="flex items-center justify-center gap-2 bg-[#1B8C5C] text-white px-5 py-3 rounded-full text-sm font-semibold mt-3"
              >
                <Phone size={15} />
                Call Now +91 99867 64471
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* SPACER */}
      <div className="h-[64px]" />
    </>
  )
}

export default Nav
