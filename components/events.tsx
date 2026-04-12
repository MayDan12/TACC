"use client";

import { easeOut, motion } from "framer-motion";
import { Calendar, Clock, Users, HeartHandshake } from "lucide-react";
import Link from "next/link";

export default function Events() {
  const events = [
    {
      date: "Every Sunday",
      time: "10:00 AM - 12:00 PM",
      title: "Sunday Worship Service",
      description:
        "Join us for passionate worship and biblical teaching in our main sanctuary",
      icon: Calendar,
      color: "from-blue-500 to-blue-600",
    },
    {
      date: "Every Thursday",
      time: "7:00 PM - 8:00 PM",
      title: "Prayer Meeting",
      description:
        "Connect with other young believers in worship and community activities",
      icon: Users,
      color: "from-green-500 to-green-600",
    },
    {
      date: "Every Friday",
      time: "7:00 PM - 8:00 PM",
      title: "Bible Study",
      description:
        "Dive deeper into God's Word through group study and intercession",
      icon: Clock,
      color: "from-amber-500 to-amber-600",
    },

    {
      date: "Monthly",
      time: "1st Sunday of Every Month",
      title: "Communion Service",
      description:
        "Serve our neighbors and make a difference in our local community",
      icon: HeartHandshake,
      color: "from-red-500 to-red-600",
    },
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

  return (
    <section
      id="events"
      className="py-16 font-serif bg-linear-to-b from-background to-muted/30"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Events & Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Find a time that works for you to connect with our church community
            and grow in faith together
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {events.map((event, index) => {
            const IconComponent = event.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-background rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/20"
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
              >
                {/* linear accent line */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${event.color} rounded-t-2xl`}
                />

                <div className="flex gap-6 items-start">
                  {/* Icon with linear */}
                  <div
                    className={`flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-xl bg-linear-to-br ${event.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <div className="flex-1 min-w-0">
                    {/* Date and time */}
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {event.date}
                      </span>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {event.time}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {event.description}
                    </p>

                    {/* Hover action */}
                    <Link
                      href="https://us02web.zoom.us/j/9365400459?pwd=T1pOYkh6aFczUVFMSmtrVlBTek8rZz09"
                      className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300"
                    >
                      <span className="inline-flex items-center text-sm font-medium text-primary">
                        Join Service
                        <svg
                          className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        {/* <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto border border-border/50">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Can&apos;t Find What You&apos;re Looking For?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Check our full calendar for all upcoming events, special services,
              and community activities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-3 bg-linear-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Full Calendar
              </motion.button>
              <motion.button
                className="px-8 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary/5 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
