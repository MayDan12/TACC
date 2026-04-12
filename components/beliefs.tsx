"use client";

import { easeOut, motion } from "framer-motion";
import { BookOpen, Cross, Zap, Droplets } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Beliefs() {
  const beliefs = [
    {
      title: "God's Word",
      description:
        "We believe the Bible is God's authoritative and infallible Word that guides our faith and practice.",
      icon: BookOpen,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Rule of Belief",
      description:
        "We affirm that Jesus Christ is Lord and Savior, and salvation comes through faith in Him alone.",
      icon: Cross,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Code of Conducts",
      description:
        "We believe in the power and presence of the Holy Spirit to transform lives and empower believers.",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Tenets",
      description:
        "We practice believer's baptism and communion as acts of obedience and remembrance of Christ's work.",
      icon: Droplets,
      color: "from-green-500 to-green-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: easeOut },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section
      id="beliefs"
      className="py-6 lg:py-10 font-serif bg-linear-to-br from-background via-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Image Section */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-linear-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-2 bg-linear-to-tr from-primary/5 to-accent/5 rounded-2xl transform -rotate-2"></div>

              {/* Main image */}
              <Image
                src="/bible-prayer-spiritual-faith.jpg"
                alt="Our Core Beliefs and Foundation"
                width={500}
                height={500}
                className="relative rounded-2xl shadow-2xl w-full object-cover lg:aspect-square"
              />

              {/* Floating badge */}
              {/* <motion.div
                className="absolute -bottom-6 -right-6 bg-linear-to-br from-primary to-primary/90 text-primary-foreground px-6 py-4 rounded-2xl shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-serif font-bold">2000+</div>
                  <div className="text-sm font-serif opacity-90">
                    Years of Truth
                  </div>
                </div>
              </motion.div> */}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div className="order-1 lg:order-2" variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-serif md:text-3xl lg:text-4xl font-bold mb-3 text-balance bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Our Doctrine
              </h2>
              <p className="text-lg font-serif text-muted-foreground mb-8 leading-relaxed max-w-lg">
                Grounded in biblical truth, we stand on the timeless principles
                that have guided believers for generations.
              </p>
            </motion.div>

            <motion.div className="space-y-2" variants={containerVariants}>
              {beliefs.map((belief, index) => {
                const IconComponent = belief.icon;
                return (
                  <motion.div
                    key={index}
                    className="group flex gap-6 p-6 rounded-2xl hover:bg-muted/50 transition-all duration-300 cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ x: 8 }}
                  >
                    {/* Icon */}
                    <div
                      className={`shrink-0 flex items-center justify-center h-14 w-14 rounded-xl bg-linear-to-br ${belief.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {belief.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {belief.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <motion.button
                className="px-8 py-4 bg-linear-to-r font-serif from-primary to-primary/90 text-primary-foreground font-semibold rounded-full hover:shadow-lg transition-all duration-300 "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/doctrine"
                  className="flex items-center gap-2 justify-center"
                >
                  <BookOpen className="w-5 h-5" />
                  Read Our Full Doctrine
                </Link>
              </motion.button>
              <motion.button
                className="px-8 py-4 border font-serif border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ask Questions
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
