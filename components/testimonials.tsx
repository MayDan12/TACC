"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Church Member",
      content:
        "TACC has changed my spiritual life. The welcoming community and powerful preaching have drawn me closer to God than ever before.",
      image: "/woman-portrait.png",
    },
    {
      name: "Michael Chen",
      role: "Young Adult",
      content:
        "Finding purpose and belonging was easy here. The youth program and mentorship have shaped my faith journey significantly.",
      image: "/thoughtful-man-portrait.png",
    },
    {
      name: "Maria Rodriguez",
      role: "Long-time Member",
      content:
        "The apostolic teaching and emphasis on prayer has strengthened my family. We've grown so much spiritually together.",
      image: "/smiling-woman-portrait.png",
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
    <section className="py-20 font-serif bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            Testimonies of Faith
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from members of our TACC family about how God has transformed
            their lives
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-muted/50 rounded-xl p-8 shadow-md border border-border hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground italic leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
