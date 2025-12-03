"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 py-10  overflow-hidden">
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
              Growing in Faith, Serving Our Community
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg font-serif md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto"
            >
              The Apostolic Church Canada (TACC) is a fellowship dedicated to
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
                href="#contact"
                className="px-6 py-2 bg-amber-500 text-slate-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors"
              >
                Get Involved
              </Link>
              <Link
                href="#about"
                className="px-6 py-2 border-2 border-amber-500 text-amber-400 font-semibold rounded-lg hover:bg-amber-500/10 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative w-full max-w-4xl h-96 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/diverse-diverse-community-worshipping-together-in-.jpg"
              alt="TACC Community"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
