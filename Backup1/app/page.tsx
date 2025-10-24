"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import BrandStory from "@/components/BrandStory";
import Programs from "@/components/Programs";
import Clients from "@/components/Clients";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import FreeGuide from "@/components/FreeGuide";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Initialize Google Analytics
  useEffect(() => {
    // Google Analytics script can be added here
    // Example: gtag('config', 'G-XXXXXXXXXX');
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Page Sections */}
      <Hero />
      <About />
      <BrandStory />
      <Programs />
      <Clients />
      <Certificates />
      <Testimonials />
      <Gallery />
      <FreeGuide />
      <Contact />
      <Footer />
    </main>
  );
}

