"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

// Corporate testimonials from business leaders
const testimonials = [
  {
    id: 1,
    name: "Anandam Dundi",
    position: "Managing Partner",
    company: "Shreya Infra Group",
    rating: 5,
    text: "Gopikrishna has a remarkable ability to understand the unique challenges faced by sales teams and leaders. His coaching style is both engaging and transformative, enabling individuals to unlock their full potential. He combines a wealth of knowledge with practical, actionable advice that leads to tangible results. Under his guidance, I have seen significant improvements in both sales performance and team dynamics.",
    image: "AD",
  },
  {
    id: 2,
    name: "Naga Sulapani K. V.",
    position: "Teacher, Coach and Consultant | Co-Founder",
    company: "ValueCOACH Consulting",
    rating: 5,
    text: "I had the pleasure of being worked and coached by Gopikrishna. I call him my brother and have known him for the last 18+ years during the period of my career transition. Not only did he provide invaluable business insights, but also offered the guidance and encouragement I needed to grow as a leader.\n\nGopikrishna helped me develop my communication and resilience in leadership positions I played so far, which has had a positive ripple effect throughout my entire business. Beyond his impressive business acumen, Gopikrishna Sarvepalli is a fantastic motivator and a pleasure to work with.\n\nI strongly recommend Gopi to anyone who is ready to take their professional development to the next level.",
    image: "NS",
  },
];

// Google Reviews - Real names only
const googleReviews = [
  {
    id: 1,
    name: "Joshybatla Varun",
    text: "Excellent, great trainer and my guru.",
  },
  {
    id: 2,
    name: "Karri Venkata Swamy Naidu",
    text: "Thank you for an inspiring session! Your words have motivated me to take action. Your enthusiasm is life-changing.",
  },
  {
    id: 3,
    name: "Umamahesh K",
    text: "Outstanding, mind-blowing, extraordinary performance Gopikrishna.",
  },
  {
    id: 4,
    name: "Sayaboyena Srinivasarao",
    text: "His speeches are very inspiring and helped me a lot in my professional career.",
  },
  {
    id: 5,
    name: "Leela Gattam",
    text: "There is magic in his speech.",
  },
  {
    id: 6,
    name: "Samaresh Pal",
    text: "Very good class environment and excellent interaction.",
  },
  {
    id: 7,
    name: "Dharma Rao",
    text: "The way of conveying the subject is easy to understand.",
  },
  {
    id: 8,
    name: "Jagan Mohan",
    text: "Took class on Success with Self-Discipline — very motivating teaching style.",
  },
  {
    id: 9,
    name: "Manas Kumar Sahoo",
    text: "Excellent trainer; I enjoyed his class in Vizag Steel Plant.",
  },
  {
    id: 10,
    name: "Satyanarayana Kadiyali",
    text: "Very professional trainer; course was extremely helpful.",
  },
  {
    id: 11,
    name: "Rajeev Netra A",
    text: "Awesome class; useful for personal and professional development.",
  },
  {
    id: 12,
    name: "Hari Babu",
    text: "Excellent session at RINL — learned so much.",
  },
  {
    id: 13,
    name: "Praveen Yenibera",
    text: "Highly recommend GKIE for practical advice and support.",
  },
  {
    id: 14,
    name: "Suresh Suni",
    text: "Excellent coach; very joyful person; learned about self-discipline.",
  },
  {
    id: 15,
    name: "Tharun Kumar Thirumareddy",
    text: "Nice motivational speech; great session.",
  },
  {
    id: 16,
    name: "Sai Ram",
    text: "Really awesome and interactive session; learned a lot.",
  },
  {
    id: 17,
    name: "Maheswara Rao",
    text: "Wonderful coach; great insights about life.",
  },
  {
    id: 18,
    name: "Mantesh Thirupathi",
    text: "Excellent training experience; very helpful to achieve targets.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  // Get initials from full name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

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
        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
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

      {/* Google Reviews Section */}
      <div className="container-custom mt-24">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
            <Star className="w-8 h-8 text-green-600 fill-green-600" />
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">
            Google Reviews
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-2">
            Verified 5-star reviews from participants
          </p>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
            <Star className="w-6 h-6 fill-green-600 text-green-600" />
            <span className="text-2xl font-bold text-gray-800 ml-2">246+ Reviews</span>
          </div>
          <motion.div
            className="w-24 h-1 bg-green-600 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.7, duration: 0.6 }}
          />
        </motion.div>

        {/* Google Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {googleReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.05, duration: 0.5 }}
              className="bg-gradient-to-br from-green-50 to-white rounded-xl p-6 border border-green-100 hover:shadow-lg transition-shadow"
            >
              {/* 5 Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-green-600 text-green-600" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-4 leading-relaxed italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {getInitials(review.name)}
                </div>
                <div className="text-sm font-semibold text-gray-800">
                  {review.name}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://share.google/Z5qTx7NLevt7fhD0M"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold text-lg rounded-xl hover:from-green-700 hover:to-green-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 z-50 relative"
            onClick={(e) => {
              e.preventDefault();
              window.open('https://share.google/Z5qTx7NLevt7fhD0M', '_blank');
            }}
          >
            View All Google Reviews
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

