"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Award, CheckCircle2, Download } from "lucide-react";

const certificates = [
  {
    id: 1,
    title: "Certified Professional Trainer",
    organization: "National HRD Network",
    year: "2018",
    description: "Advanced certification in corporate training methodologies and adult learning principles.",
    image: "/certificates/cert1.jpg",
  },
  {
    id: 2,
    title: "Master Life Coach Certification",
    organization: "International Coaching Federation",
    year: "2016",
    description: "Elite certification for transformational coaching and personal development.",
    image: "/certificates/cert2.jpg",
  },
  {
    id: 3,
    title: "Leadership Excellence Award",
    organization: "SHRM India",
    year: "2020",
    description: "Recognition for outstanding contribution to leadership development in corporate India.",
    image: "/certificates/cert3.jpg",
  },
  {
    id: 4,
    title: "Sales Training Specialist",
    organization: "Sales Management Association",
    year: "2017",
    description: "Specialized certification in consultative selling and business development.",
    image: "/certificates/cert4.jpg",
  },
  {
    id: 5,
    title: "Communication Skills Expert",
    organization: "Toastmasters International",
    year: "2015",
    description: "Advanced recognition in public speaking and interpersonal communication.",
    image: "/certificates/cert5.jpg",
  },
  {
    id: 6,
    title: "Organizational Development Certificate",
    organization: "ISTD",
    year: "2019",
    description: "Expertise in organizational culture transformation and change management.",
    image: "/certificates/cert6.jpg",
  },
];

export default function Certificates() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6">
            <Award className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Certifications & Recognitions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Backed by prestigious certifications and industry recognition
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 z-10 bg-green-500 text-white rounded-full p-1.5 shadow-lg">
                  <CheckCircle2 className="w-5 h-5" />
                </div>

                {/* Certificate Image Placeholder */}
                <div className="relative h-56 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <Award className="w-24 h-24 text-primary/20" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="text-xs font-semibold mb-1">{cert.year}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-serif font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 font-medium">
                    {cert.organization}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {cert.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <span className="text-white font-semibold">Click to View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      <Dialog open={!!selectedCert} onOpenChange={() => setSelectedCert(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <DialogTitle className="text-2xl mb-2">{selectedCert?.title}</DialogTitle>
                <DialogDescription className="text-base">
                  {selectedCert?.organization} • {selectedCert?.year}
                </DialogDescription>
              </div>
              <div className="bg-green-500 text-white rounded-full p-2">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>
          </DialogHeader>

          {/* Certificate Image */}
          <div className="relative h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl flex items-center justify-center">
            <Award className="w-32 h-32 text-primary/20" />
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mt-4">
            {selectedCert?.description}
          </p>

          {/* Action Button */}
          <button className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all">
            <Download className="w-5 h-5" />
            Download Certificate
          </button>
        </DialogContent>
      </Dialog>
    </section>
  );
}

