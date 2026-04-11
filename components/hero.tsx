"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type HeroImage = {
  src: string;
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
              src: "/diverse-diverse-community-worshipping-together-in-.jpg",
              alt: "The Apostolic Church Canada Community",
            },
            {
              src: "/church-worship-community-gathering.jpg",
              alt: "Church worship community gathering",
            },
            {
              src: "/bible-prayer-spiritual-faith.jpg",
              alt: "Bible prayer spiritual faith",
            },
          ],
    [images],
  );

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    if (autoplayMs <= 0) return;

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
      className="relative bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-10  overflow-hidden"
    >
      {/* Decorative background elements */}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6 px-4 py-2 bg-amber-500/20 text-amber-400 rounded-full"
            >
              <span className="text-sm font-serif font-semibold">
                Welcome to our community
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-serif md:text-5xl font-bold text-white mb-6 leading-tight"
            >
              One Fold, One Shepherd
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative my-8 w-full max-w-5xl h-110 rounded-xl overflow-hidden shadow-2xl mx-auto"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slides[activeIndex]?.src}
                  className="absolute inset-0"
                  initial={{ opacity: 0.0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0.0 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={slides[activeIndex]?.src ?? "/placeholder.svg"}
                    alt={slides[activeIndex]?.alt ?? "Hero image"}
                    fill
                    className="object-cover"
                    priority={activeIndex === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {canSlide && (
                <>
                  <button
                    type="button"
                    onClick={goPrev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white px-3 py-2 backdrop-blur hover:bg-black/50 transition-colors"
                  >
                    <span className="text-lg leading-none">‹</span>
                  </button>
                  <button
                    type="button"
                    onClick={goNext}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 text-white px-3 py-2 backdrop-blur hover:bg-black/50 transition-colors"
                  >
                    <span className="text-lg leading-none">›</span>
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full bg-black/30 px-3 py-2 backdrop-blur">
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

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg font-serif md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              The Apostolic Church Lawna Canada is a fellowship dedicated to
              spreading the Gospel, building disciples, and serving the kingdom
              of God with passion and purpose.
            </motion.p>

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
              {/* <Link
                href="#about"
                className="px-6 py-2 border-2 border-amber-500 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10 transition-colors"
              >
                Learn More
              </Link> */}
            </motion.div>
          </motion.div>

          {/* I want to make this a slider with multiple images */}
        </div>
      </div>
    </section>
  );
}
