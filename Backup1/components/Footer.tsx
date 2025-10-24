"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Linkedin, url: "https://linkedin.com", label: "LinkedIn" },
  { icon: Youtube, url: "https://youtube.com", label: "YouTube" },
  { icon: Instagram, url: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, url: "https://facebook.com", label: "Facebook" },
];

export default function Footer() {
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowWhatsApp(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/919666722233"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-colors group"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: showWhatsApp ? 1 : 0, opacity: showWhatsApp ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle className="w-8 h-8 text-white" />
        
        {/* Pulse Animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        
        {/* Tooltip */}
        <span className="absolute right-20 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary to-primary/95 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        {/* Top Border */}
        <div className="h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />

        <div className="container-custom section-padding relative z-10">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-serif font-bold mb-4">
                Gopikrishna Sarvepalli
              </h3>
              <p className="text-white/80 mb-6 leading-relaxed">
                Transforming lives and organizations through powerful training programs and coaching for over 29 years.
              </p>
              <div className="space-y-3">
                <a href="tel:+919666722233" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <Phone className="w-5 h-5" />
                  +91 96667 22233
                </a>
                <a href="mailto:contact@gopikrishna.in" className="flex items-center gap-3 text-white/80 hover:text-accent transition-colors">
                  <Mail className="w-5 h-5" />
                  contact@gopikrishna.in
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  { label: "About", href: "#about" },
                  { label: "Programs", href: "#programs" },
                  { label: "Clients", href: "#clients" },
                  { label: "Certificates", href: "#certificates" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-accent transition-colors inline-block hover:translate-x-1 duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
              <ul className="space-y-2 text-white/80">
                <li>Personal Effectiveness</li>
                <li>Leadership & Teamwork</li>
                <li>Sales Training</li>
                <li>Communication Skills</li>
                <li>Motivational Programs</li>
                <li>Organizational Development</li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mb-8" />

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Quote */}
            <div className="text-center md:text-left">
              <p className="text-accent font-serif text-lg italic mb-2">
                "Your Success is Our Mission"
              </p>
              <p className="text-white/60 text-sm">
                © 2025 Beyondx Informatics Analytics Pvt. Ltd. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Developer Credit */}
          <div className="mt-8 text-center">
            <p className="text-white/40 text-xs">
              Designed & Developed by Beyondx Informatics Analytics Pvt. Ltd.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

