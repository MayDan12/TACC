"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type HeroImage = {
  src: string; // desktop image
  mobileSrc?: string; // mobile (portrait)
  alt: string;
};

export default function Hero({
  images,
  autoplayMs = 6000,
}: {
  images?: HeroImage[];
  autoplayMs?: number;
}) {
  const slides = useMemo<HeroImage[]>(
    () =>
      images?.length
        ? images
        : [
            {
              src: "/weeklyservice.jpg",
              mobileSrc: "/mobilebanner.png",
              alt: "Weekly service",
            },
            {
              src: "/banner1.png",
              mobileSrc: "/mobilebanner.png",
              alt: "Bible prayer spiritual faith",
            },
          ],
    [images],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1 || autoplayMs <= 0) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, autoplayMs);

    return () => window.clearInterval(intervalId);
  }, [autoplayMs, slides.length]);

  const canSlide = slides.length > 1;

  const goPrev = () =>
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length);

  const goNext = () =>
    setActiveIndex((current) => (current + 1) % slides.length);

  return (
    <section
      id="hero"
      className="relative bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-10 overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-300 opacity-10 rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-300 opacity-10 rounded-full -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center w-full"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl font-serif sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              One Fold, One Shepherd
            </motion.h1>

            {/* Hero Slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative my-8 w-full max-w-5xl rounded-xl overflow-hidden shadow-2xl mx-auto aspect-[4/5] sm:aspect-[16/9] max-h-[70vh]"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slides[activeIndex]?.src}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  {/* 📱 Mobile Image */}
                  <Image
                    src={
                      slides[activeIndex]?.mobileSrc ||
                      slides[activeIndex]?.src ||
                      "/placeholder.svg"
                    }
                    alt={slides[activeIndex]?.alt ?? "Hero image"}
                    fill
                    className="md:hidden"
                    priority={activeIndex === 0}
                  />

                  {/* 💻 Desktop Image */}
                  <Image
                    src={slides[activeIndex]?.src ?? "/placeholder.svg"}
                    alt={slides[activeIndex]?.alt ?? "Hero image"}
                    fill
                    className="object-cover hidden md:block"
                    sizes="(min-width: 1024px) 1024px, (min-width: 640px) 640px, 100vw"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              {canSlide && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white h-10 w-10 sm:h-11 sm:w-11 backdrop-blur hover:bg-black/50 transition-colors flex items-center justify-center"
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next image"
                    className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white h-10 w-10 sm:h-11 sm:w-11 backdrop-blur hover:bg-black/50 transition-colors flex items-center justify-center"
                  >
                    ›
                  </button>

                  {/* Indicators */}
                  <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur">
                    {slides.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        aria-label={`Go to image ${idx + 1}`}
                        onClick={() => setActiveIndex(idx)}
                        className={`h-2 w-2 rounded-full transition-colors ${
                          idx === activeIndex ? "bg-white" : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex font-serif flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                href="https://us02web.zoom.us/j/9365400459?pwd=T1pOYkh6aFczUVFMSmtrVlBTek8rZz09"
                className="px-6 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
              >
                Join Our Online Service
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
