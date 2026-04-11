"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Church,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Ministries", href: "#ministries" },
    { name: "Our Doctrine", href: "/doctrine" },
    { name: "Events", href: "#events" },
    { name: "Sermons", href: "#sermons" },
    { name: "Contact", href: "#contact" },
  ];

  const ministries = [
    { name: "Sunday Worship", href: "#" },
    { name: "Life Groups", href: "#" },
    { name: "Children & Youth", href: "#" },
    { name: "Community Outreach", href: "#" },
    { name: "Prayer Ministry", href: "#" },
    { name: "Discipleship", href: "#" },
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
    <footer className="bg-linear-to-br from-primary to-primary/90 text-primary-foreground pt-10 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Brand Section */}
          <motion.div className="lg:col-span-1" variants={itemVariants}>
            <div className="flex items-center gap-3 mb-3">
              {/* <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-xl backdrop-blur-sm border border-primary-foreground/20"> */}
              <Image
                src="/tacc.png"
                alt="TACC"
                width={130}
                height={130}
                priority
              />
              {/* </div> */}
              {/* <div>
                <p className="text-sm text-primary-foreground/70">
                  The Apostolic Church Canada
                </p>
              </div> */}
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              A vibrant community growing in faith, serving with love, and
              transforming lives through the power of the Gospel across Canada.
            </p>
            {/* <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:border-primary-foreground/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div> */}
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4 text-primary-foreground">
              Social Media
            </h4>
            <div className="grid grid-cols-4 w-3/4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="flex items-center justify-center w-10 h-10 bg-primary-foreground/10 rounded-lg backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/20 hover:border-primary-foreground/30 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-4 h-4" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-bold text-lg mb-4 text-primary-foreground">
              Visit Us
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-foreground/70 mt-0.5 lex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">
                    4544 Dufferin St,
                    <br />
                    North York,
                    <br />
                    ON M3H 5X2 (Room 201)
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-foreground/70 shrink-0" />
                <a
                  href="tel:+14165550123"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-300"
                >
                  +1 647-806-2658
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-foreground/70 shrink-0" />
                <a
                  href="mailto:info@taclawnacanada.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors duration-300"
                >
                  info@taclawnacanada.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Ministries */}
          <motion.div variants={itemVariants}>
            {/* Service Times */}
            <div className="mt-6 p-4 bg-primary-foreground/5 rounded-xl border border-primary-foreground/10">
              <h5 className="font-semibold text-lg mb-2 text-primary-foreground">
                Service Times
              </h5>
              <div className="space-y-1 text-sm text-primary-foreground/70">
                <div className="flex justify-between">
                  <span>Sunday Worship:</span>
                  <span>10:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Prayer Meeting:</span>
                  <span>Thurs 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Bible Study:</span>
                  <span>Fri 7:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-primary-foreground/20 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            {new Date().getFullYear()} The Apostolic Church Lawna Canada. All
            rights reserved.
          </p>
          {/* <div className="flex gap-6 text-xs">
            <Link
              href="/privacy"
              className="hover:text-primary-foreground transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary-foreground transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-primary-foreground transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
}
