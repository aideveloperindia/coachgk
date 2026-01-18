"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import FreeGuide from "@/components/FreeGuide";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import LogoModal from "@/components/LogoModal";

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
    <>
      <LogoModal />
      <Header />
      <main className="min-h-screen bg-white">
        {/* Scroll Progress Indicator */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-[100] origin-left"
          style={{ scaleX }}
        />

        {/* Page Sections */}
        <Hero />
        <BrandStory />
        <Testimonials />
        <FreeGuide />
      </main>
      <Footer />
    </>
  );
}

