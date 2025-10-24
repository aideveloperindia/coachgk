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
        
        {/* Quick Stats Section */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
          <div className="container-custom">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="text-5xl font-heading font-bold text-primary mb-2">29+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </motion.div>
              <motion.div
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-5xl font-heading font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-600">Organizations Served</div>
              </motion.div>
              <motion.div
                className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-5xl font-heading font-bold text-primary mb-2">44,000+</div>
                <div className="text-gray-600">Lives Transformed</div>
              </motion.div>
            </div>
          </div>
        </section>

        <Testimonials />
        <FreeGuide />
      </main>
      <Footer />
    </>
  );
}

