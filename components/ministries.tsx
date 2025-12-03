"use client";

import { motion } from "framer-motion";
import {
  Users,
  HeartHandshake,
  BookOpen,
  Church,
  Users2,
  MessageCircle,
} from "lucide-react";

export default function Ministries() {
  const ministries = [
    {
      title: "Sunday Worship",
      description:
        "Join us for uplifting worship services where we encounter God's presence together as a community.",
      icon: Church,
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Life Groups",
      description:
        "Small group gatherings for prayer, Bible study, and spiritual accountability throughout the week.",
      icon: Users2,
      color: "from-amber-500 to-amber-600",
    },
    {
      title: "Children & Youth",
      description:
        "Age-appropriate discipleship and mentorship programs for the next generation.",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      title: "Community Outreach",
      description:
        "Serving our neighborhoods through charitable initiatives and compassionate ministry.",
      icon: HeartHandshake,
      color: "from-red-500 to-red-600",
    },
    {
      title: "Prayer Ministry",
      description:
        "Intercession teams dedicated to praying for our church, nation, and world.",
      icon: BookOpen,
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Counseling & Discipleship",
      description:
        "One-on-one spiritual guidance and pastoral care for those seeking growth in Christ.",
      icon: MessageCircle,
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="ministries"
      className="py-20 font-serif bg-linear-to-b from-muted/30 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl  font-bold  text-balance bg-linesar-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Our Ministries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We offer a variety of ministries designed to help you grow
            spiritually and connect with our community.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {ministries.map((ministry, index) => {
            const IconComponent = ministry.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-border"
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                {/* linesar accent */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-linesar-to-br ${ministry.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />

                {/* Icon with linesar background */}
                <div
                  className={`relative mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linesar-to-br ${ministry.color} text-white shadow-lg`}
                >
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {ministry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {ministry.description}
                </p>

                {/* Hover arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div
                    className={`w-6 h-6 rounded-full bg-linesar-to-br ${ministry.color} flex items-center justify-center`}
                  >
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-muted-foreground mb-6">
            Interested in joining one of our ministries?
          </p>
          <button className="bg-linear-to-br from-primary to-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
            Get Involved Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
