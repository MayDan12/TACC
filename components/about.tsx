"use client";

import { easeOut, motion } from "framer-motion";
import Image from "next/image";
import { BookOpen, Users, Heart, Target, Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { VisitDialog } from "./visit-sunday";

export default function About() {
  const features = [
    {
      icon: BookOpen,
      title: "Bible-Based Teaching",
      description:
        "Grounded in apostolic doctrine and Scripture for spiritual growth",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Users,
      title: "Community Focused",
      description: "Building strong families and Christ-centered relationships",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: Heart,
      title: "Spirit-Led Worship",
      description:
        "Encountering God's presence in authentic, transformative worship",
      color: "from-purple-500 to-purple-600",
    },
    {
      icon: Target,
      title: "Mission Driven",
      description:
        "Reaching our nation with the love and truth of Jesus Christ",
      color: "from-green-500 to-green-600",
    },
  ];

  const stats = [
    { number: "50+", label: "Years Serving" },
    { number: "1000+", label: "Members" },
    { number: "15+", label: "Ministries" },
    { number: "25+", label: "Nations Reached" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
      id="about"
      className="py-6 lg:py-10 mt-10 bg-linear-to-br from-background via-background to-muted/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Content Section */}
          <motion.div className="order-2 lg:order-1" variants={itemVariants}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-serif  font-bold mb-3 text-balance bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                The Apostolic Church Lawna Canada
              </h2>
              <p className="text-lg font-serif text-muted-foreground mb-4 leading-relaxed">
                Founded on the principles of apostolic faith and biblical truth,
                The Church is committed to creating a welcoming community where
                people can encounter Christ, grow spiritually, and live out
                their God-given purpose.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              className="grid sm:grid-cols-2 gap-2 mb-4"
              variants={containerVariants}
            >
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="group flex gap-4 p-4 font-serif rounded-2xl hover:bg-muted/50 transition-all duration-300 cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div
                      className={`shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-br ${feature.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Stats */}
            {/* <motion.div
              className="grid font-serif grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 rounded-2xl bg-muted/30 hover:bg-muted/50 transition-colors duration-300"
                  variants={itemVariants}
                >
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div> */}

            {/* Call to Action */}
            <motion.div
              className="flex flex-col font-serif sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* I want to use a dialog here */}
              {/* <motion.button
                className="px-8 py-4 bg-linear-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2 justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              > */}
              <VisitDialog />
              {/* </motion.button> */}
              {/* can i make this link to map location of the church (4544 Dufferin St, North York, ON M3H 5X2 (Room 201))? */}
              <motion.button
                className="px-8 py-4 border border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="https://www.google.com/maps/search/?api=1&query=4544+Dufferin+St,+North+York,+ON+M3H+5X2"
                  target="_blank"
                  className="flex items-center gap-2 justify-center"
                >
                  <MapPin className="w-5 h-5" />
                  Get Directions
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="relative order-1 lg:order-2"
            variants={imageVariants}
          >
            <div className="relative">
              {/* Decorative background elements */}
              <div className="absolute -inset-4 bg-linear-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl transform rotate-3"></div>
              <div className="absolute -inset-2 bg-linear-to-tr from-primary/5 to-accent/5 rounded-2xl transform -rotate-2"></div>

              {/* Main image */}
              <Image
                src="/abouttacc.jpg"
                alt="TACC Community Worship and Fellowship"
                className="relative rounded-2xl shadow-2xl w-full object-cover "
                width={600}
                height={600}
              />

              {/* Floating testimonial card */}
              {/* <motion.div
                className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm border border-border rounded-2xl p-6 shadow-lg max-w-xs"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-linear-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      James Roberts
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Member since 2015
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "A church that truly feels like family. The teaching has
                  transformed our lives."
                </p>
              </motion.div> */}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
