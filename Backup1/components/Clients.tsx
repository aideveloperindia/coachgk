"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2 } from "lucide-react";

const clients = [
  { name: "Hindustan Shipyard Limited", category: "Defense & Maritime" },
  { name: "Vizag Steel Plant (RINL)", category: "Steel & Manufacturing" },
  { name: "Hetero Pharma", category: "Pharmaceuticals" },
  { name: "Centurion University", category: "Education" },
  { name: "NTPC", category: "Power & Energy" },
  { name: "BHEL", category: "Engineering" },
  { name: "Indian Oil Corporation", category: "Oil & Gas" },
  { name: "Rashtriya Ispat Nigam", category: "Steel Industry" },
  { name: "Visakhapatnam Port Trust", category: "Ports & Logistics" },
  { name: "AP State Police", category: "Government" },
  { name: "Various Corporate Houses", category: "Multiple Sectors" },
  { name: "Educational Institutions", category: "Academia" },
];

export default function Clients() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="section-padding bg-white" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Trusted By Leading Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Partnering with India's premier organizations across diverse sectors
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="group"
            >
              <div className="relative h-40 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:border-accent hover:shadow-xl hover:-translate-y-1">
                {/* Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <Building2 className="w-6 h-6 text-primary group-hover:text-accent transition-colors" />
                </div>
                
                {/* Client Name */}
                <h3 className="text-sm font-semibold text-primary mb-1 group-hover:text-accent transition-colors">
                  {client.name}
                </h3>
                
                {/* Category */}
                <p className="text-xs text-gray-500">
                  {client.category}
                </p>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-primary to-primary/90 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">500+</div>
              <div className="text-white/90">Organizations Served</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">15+</div>
              <div className="text-white/90">Industry Sectors</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-serif mb-2">98%</div>
              <div className="text-white/90">Client Satisfaction</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

