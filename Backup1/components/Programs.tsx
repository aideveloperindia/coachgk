"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  Users, 
  TrendingUp, 
  MessageSquare, 
  Zap, 
  Building2 
} from "lucide-react";

const programs = [
  {
    icon: Target,
    title: "Personal Effectiveness",
    description: "Master time management, goal setting, and productivity techniques to achieve peak performance in all areas of life.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Users,
    title: "Leadership & Teamwork",
    description: "Develop essential leadership skills, build high-performing teams, and create a culture of collaboration and excellence.",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: TrendingUp,
    title: "Sales & Business Development",
    description: "Enhance sales techniques, negotiation skills, and relationship building to drive revenue growth and business success.",
    color: "from-green-500 to-green-600",
  },
  {
    icon: MessageSquare,
    title: "Communication Skills",
    description: "Build confident communication, active listening, and persuasive presentation skills for impactful interactions.",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Motivational Programs",
    description: "Ignite passion, overcome obstacles, and cultivate a winning mindset through powerful motivational interventions.",
    color: "from-red-500 to-red-600",
  },
  {
    icon: Building2,
    title: "Organizational Development",
    description: "Transform organizational culture, enhance employee engagement, and drive sustainable business transformation.",
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function Programs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container-custom">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
            Training Programs & Workshops
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed to elevate individuals and organizations to new heights
          </p>
          <motion.div
            className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          />
        </motion.div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className="h-full group hover:border-accent/50 cursor-pointer relative overflow-hidden">
                  {/* Accent border on hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                       style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
                  
                  <CardHeader>
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${program.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors duration-300">
                      {program.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">
                      {program.description}
                    </p>
                  </CardContent>

                  {/* Hover Effect Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-gray-600 mb-4">Ready to transform your team?</p>
          <button
            onClick={() => window.open("https://wa.me/919666722233?text=Hello%20Sir,%20I%20would%20like%20to%20book%20a%20training%20program.", "_blank")}
            className="inline-flex items-center px-8 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 hover:scale-105 transition-all shadow-lg hover:shadow-2xl font-medium"
          >
            Discuss Custom Program
          </button>
        </motion.div>
      </div>
    </section>
  );
}

