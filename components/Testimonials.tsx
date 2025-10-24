"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    position: "HR Head, Vizag Steel Plant",
    company: "RINL",
    rating: 5,
    text: "An inspiring trainer who energizes teams to reach higher performance levels. His leadership workshops have transformed our management approach.",
    image: "RK",
  },
  {
    id: 2,
    name: "Priya Sharma",
    position: "Learning & Development Manager",
    company: "Hetero Pharma",
    rating: 5,
    text: "Mr. Sarvepalli's training programs are exceptional. The practical tools and motivational approach have significantly improved our team's effectiveness.",
    image: "PS",
  },
  {
    id: 3,
    name: "Commander Anil Verma",
    position: "Training Head",
    company: "Hindustan Shipyard",
    rating: 5,
    text: "Outstanding expertise in leadership development. His ability to connect with diverse audiences and deliver impactful sessions is remarkable.",
    image: "AV",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    position: "Vice Principal",
    company: "Centurion University",
    rating: 5,
    text: "A master communicator who brings clarity and inspiration to every session. Our faculty and students have benefited immensely from his programs.",
    image: "SR",
  },
  {
    id: 5,
    name: "Vikram Singh",
    position: "Sales Head",
    company: "Corporate Sector",
    rating: 5,
    text: "The sales training program was game-changing. Practical strategies, real-world examples, and motivational energy that drove immediate results.",
    image: "VS",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-white relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Quote className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from leaders who've experienced transformation
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-gray-100"
            >
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed italic">
                "{currentTestimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {currentTestimonial.image}
                </div>
                <div className="text-left">
                  <div className="font-bold text-primary text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {currentTestimonial.position}
                  </div>
                  <div className="text-accent text-sm font-medium">
                    {currentTestimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-8"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 bg-white border-2 border-primary rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-lg hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

