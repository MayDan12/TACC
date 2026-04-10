"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-linear-to-b from-slate-900 via-slate-900 to-slate-900 text-primary-foreground sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            {/* oval div */}
            <div className="w-17 h-17 bg-accent rounded-3xl flex items-center justify-center">
              <Image src="/tacclogo.png" alt="TACC" width={40} height={40} />
            </div>
            <span className="font-bold text-xl">TACC</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#about" className="hover:text-accent transition-colors">
              About
            </Link>
            <Link
              href="#ministries"
              className="hover:text-accent transition-colors"
            >
              Ministries
            </Link>
            <Link
              href="#beliefs"
              className="hover:text-accent transition-colors"
            >
              Beliefs
            </Link>
            <Link
              href="#events"
              className="hover:text-accent transition-colors"
            >
              Events
            </Link>
            <Link
              href="#contact"
              className="hover:text-accent transition-colors font-semibold bg-accent text-primary px-3 py-1 rounded-lg"
            >
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
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link
              href="#about"
              className="block hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="#ministries"
              className="block hover:text-accent transition-colors"
            >
              Ministries
            </Link>
            <Link
              href="#beliefs"
              className="block hover:text-accent transition-colors"
            >
              Beliefs
            </Link>
            <Link
              href="#events"
              className="block hover:text-accent transition-colors"
            >
              Events
            </Link>
            <Link
              href="#contact"
              className="hover:text-accent transition-colors font-semibold bg-accent text-primary px-4 py-2 rounded-lg inline-block"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
