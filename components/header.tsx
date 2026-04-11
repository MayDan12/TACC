"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const heroEl = document.getElementById("hero");

    if (!heroEl) {
      const handleScroll = () => setIsOverHero(window.scrollY < 80);
      handleScroll();
      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      ([entry]) => setIsOverHero(Boolean(entry?.isIntersecting)),
      { threshold: 0.01 },
    );

    observer.observe(heroEl);
    return () => observer.disconnect();
  }, []);

  const headerClassName = isOverHero
    ? "bg-white/70 text-slate-900 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60 shadow-sm"
    : "bg-white/70 text-slate-900 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200/60 shadow-sm";

  const linkClassName = isOverHero
    ? "hover:text-slate-900/90 transition-colors"
    : "hover:text-slate-900/90 transition-colors";

  const contactClassName = isOverHero
    ? "hover:text-accent transition-colors font-semibold bg-slate-900/90 text-white px-3 py-1 rounded-lg"
    : "hover:text-accent transition-colors font-semibold bg-slate-900/90 text-white px-3 py-1 rounded-lg";

  return (
    <header
      className={`${headerClassName} sticky top-0 z-50 transition-colors duration-300`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            {/* oval div */}
            {/* <div className="w-17 h-17 bg-accent rounded-3xl flex items-center justify-center"> */}
            <Image
              src="/taccblack.png"
              alt="The Apostolic Church Lawna Canada"
              width={140}
              height={140}
              priority
            />

            {/* <span className="font-bold text-xl">TACC</span> */}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className={linkClassName}>
              About
            </Link>
            <Link href="/doctrine" className={linkClassName}>
              Doctrine
            </Link>
            <Link href="#events" className={linkClassName}>
              Events
            </Link>
            <Link href="#contact" className={contactClassName}>
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden mt-4 space-y-4 pb-4 rounded-xl p-4 transition-colors duration-300 ${
              isOverHero
                ? "bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border border-white/10"
                : "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70 border border-slate-200/60"
            }`}
          >
            <Link href="#about" className={`block ${linkClassName}`}>
              About
            </Link>

            <Link href="/doctrine" className={`block ${linkClassName}`}>
              Doctrine
            </Link>
            <Link href="#events" className={`block ${linkClassName}`}>
              Events
            </Link>
            <Link
              href="#contact"
              className={`hover:text-accent transition-colors font-semibold px-4 py-2 rounded-lg inline-block ${
                isOverHero
                  ? "bg-accent text-primary"
                  : "bg-slate-900/90 text-white"
              }`}
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
