"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        
        setCount(Math.floor(progress * end));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              About Mr. Gopikrishna Sarvepalli
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-accent mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
            />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                <Image
                  src="/main photo.png"
                  alt="Mr. Gopikrishna Sarvepalli"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              {/* Decorative Element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                With <strong className="text-primary">29 years of experience</strong> in corporate training and personal development, 
                Mr. Gopikrishna Sarvepalli has dedicated his life to unlocking human potential and driving organizational excellence.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                A certified trainer and motivational coach, he specializes in{" "}
                <strong className="text-primary">Leadership Development, Communication Skills, Sales Training,</strong>{" "}
                and <strong className="text-primary">Personal Effectiveness</strong>. His dynamic approach combines 
                practical tools with inspirational insights to create lasting transformation.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Having worked with leading organizations across India, including Hindustan Shipyard, 
                Vizag Steel Plant, and Hetero Pharma, Mr. Sarvepalli brings real-world expertise that 
                resonates with both corporate teams and individuals seeking personal growth.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl text-center border border-accent/20">
                  <div className="text-3xl font-bold font-serif text-primary mb-1">
                    <Counter end={29} />+
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Years of Excellence</div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl text-center border border-accent/20">
                  <div className="text-3xl font-bold font-serif text-primary mb-1">
                    <Counter end={44} />k+
                  </div>
                  <div className="text-xs text-gray-600 font-medium">People Trained</div>
                </div>
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-6 rounded-xl text-center border border-accent/20">
                  <div className="text-3xl font-bold font-serif text-primary mb-1">
                    <Counter end={450} />+
                  </div>
                  <div className="text-xs text-gray-600 font-medium">Programs Conducted</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

