"use client";

import type React from "react";
import { useState } from "react";
import { easeOut, motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Church } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Main Location",
      content: "4544 Dufferin St, North York, ON M3H 5X2 (Room 201)",
      color: "from-blue-500 to-blue-600",
      description: "Visit us for Sunday service",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 647-806-2658",
      color: "from-amber-500 to-amber-600",
      description: "Mon-Fri, 9AM-5PM",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@taclawnacanada.com",
      color: "from-purple-500 to-purple-600",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Clock,
      title: "Service Times",
      content: "Sundays 10:00 AM",
      color: "from-green-500 to-green-600",
      description: "Wednesday Prayer 7:00 PM",
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
      id="contact"
      className="py-20 md:py-32 bg-linear-to-b from-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-2 gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-serif md:text-5xl font-bold mb-3 text-balance bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                We&apos;d Love to Connect With You
              </h2>
              <p className="text-lg font-serif text-muted-foreground mb-4 leading-relaxed">
                Whether you have questions, want to visit us, or need prayer,
                our church family is here for you. Reach out and let&apos;s
                start a conversation about your spiritual journey.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-3"
              variants={containerVariants}
            >
              {contactInfo.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="group flex gap-2 p-4 rounded-2xl bg-background border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 cursor-pointer"
                    variants={itemVariants}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div
                      className={`shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-linear-to-br ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold font-serif mb-1 text-foreground group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-foreground font-medium mb-1">
                        {item.content}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Additional Info */}
            <motion.div
              className="mt-12 p-8 rounded-2xl bg-linear-to-br from-primary/5 to-primary/10 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-start gap-4">
                <div className="shrink-0 flex items-center justify-center h-12 w-12 rounded-xl bg-primary/20 text-primary">
                  <Church className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-serif text-lg mb-2 text-foreground">
                    First Time Visiting?
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We recommend arriving 15 minutes early to find parking and
                    get settled. Our welcome team will be happy to assist you
                    and your family.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <motion.h3
              className="text-2xl font-serif font-bold mb-2 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Send Us a Message
            </motion.h3>
            <motion.p
              className="text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We&apos;ll get back to you as soon as possible
            </motion.p>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold mb-3 text-foreground"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                  placeholder="Your full name"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-3 text-foreground"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                  placeholder="your@email.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-3 text-foreground"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background"
                  placeholder="(123) 456-7890"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold mb-3 text-foreground"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 bg-background resize-none"
                  placeholder="How can we help you today?"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-linear-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-xl hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
