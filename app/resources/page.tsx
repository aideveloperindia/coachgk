"use client";

import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";
import { motion } from "framer-motion";
import { BookOpen, FileText, Video, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { PDFGenerator } from "@/lib/pdfGenerator";
import { useState } from "react";

export default function ResourcesPage() {
  const [downloading, setDownloading] = useState<string | null>(null);

  const handleDownload = async (type: string, name: string = "Reader") => {
    setDownloading(type);
    try {
      let pdfBytes: Uint8Array;
      
      switch (type) {
        case 'leadership':
          pdfBytes = await PDFGenerator.generateLeadershipGuide(name);
          break;
        case 'time-management':
          pdfBytes = await PDFGenerator.generateTimeManagementGuide(name);
          break;
        case 'goal-setting':
          pdfBytes = await PDFGenerator.generateGoalSettingGuide(name);
          break;
        case 'stress-management':
          pdfBytes = await PDFGenerator.generateStressManagementGuide(name);
          break;
        default:
          throw new Error('Invalid guide type');
      }

      const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${type.replace('-', '-')}-guide-${name.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setDownloading(null);
    }
  };

  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-primary via-slate-900 to-primary text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Resources & Insights
              </h1>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Free guides, articles, and resources to accelerate your personal and professional growth
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Resources */}
        <section className="section-padding bg-gradient-to-br from-slate-50 to-white">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Featured Resources
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Handpicked content to help you transform your potential into performance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: FileText,
                  title: "Leadership Excellence Guide",
                  description: "Master the art of leadership with proven strategies for building trust, inspiring teams, and driving results. Includes practical frameworks and real-world examples.",
                  type: "PDF Guide",
                  color: "from-blue-500 to-blue-600",
                  downloadType: "leadership",
                },
                {
                  icon: FileText,
                  title: "Time Management Masterclass",
                  description: "Transform your productivity with time-tested techniques for prioritization, focus, and efficiency. Learn to maximize your most valuable resource.",
                  type: "PDF Guide",
                  color: "from-purple-500 to-purple-600",
                  downloadType: "time-management",
                },
                {
                  icon: FileText,
                  title: "Goal Setting Framework",
                  description: "Achieve your dreams with a systematic approach to goal setting. From vision to action, this guide provides the roadmap to success.",
                  type: "PDF Guide",
                  color: "from-orange-500 to-orange-600",
                  downloadType: "goal-setting",
                },
                {
                  icon: FileText,
                  title: "Stress Management Toolkit",
                  description: "Build resilience and maintain well-being with practical tools for managing stress, building emotional strength, and thriving under pressure.",
                  type: "PDF Guide",
                  color: "from-teal-500 to-teal-600",
                  downloadType: "stress-management",
                },
                {
                  icon: Video,
                  title: "Communication Skills Training",
                  description: "Master the art of effective communication with our comprehensive video series covering active listening, clear messaging, and influence.",
                  type: "Video Course",
                  color: "from-red-500 to-red-600",
                  downloadType: "video",
                },
                {
                  icon: Video,
                  title: "Emotional Intelligence Mastery",
                  description: "Develop your EQ with practical exercises and real-world applications. Learn to understand, manage, and leverage emotions for success.",
                  type: "Video Series",
                  color: "from-green-500 to-green-600",
                  downloadType: "video",
                },
              ].map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <motion.div
                    key={resource.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                      <CardHeader>
                        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${resource.color} mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-sm text-accent font-semibold mb-2">{resource.type}</div>
                        <CardTitle className="font-heading group-hover:text-accent transition-colors">
                          {resource.title}
                        </CardTitle>
                        <CardDescription>{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                          onClick={() => {
                            if (resource.downloadType === 'video') {
                              window.open('https://wa.me/919666722233?text=Hi, I would like to access the video training series!', '_blank');
                            } else {
                              handleDownload(resource.downloadType);
                            }
                          }}
                          disabled={downloading === resource.downloadType}
                        >
                          <Download className="w-4 h-4 mr-2" />
                          {downloading === resource.downloadType ? "Generating..." : "Download Free"}
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Latest Articles */}
        <section className="section-padding">
          <div className="container-custom">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                Latest Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Expert perspectives on leadership, personal development, and professional growth
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  title: "The Power of Emotional Intelligence in Leadership",
                  excerpt: "Discover how emotional intelligence can transform your leadership style and create more engaged, productive teams. Learn the four key components of EI and practical strategies for development.",
                  date: "January 15, 2025",
                  readTime: "5 min read",
                  content: "In my 15 years of coaching leaders across industries, I've discovered one trait that separates exceptional leaders from the rest: emotional intelligence. It's not the technical skills, the strategic thinking, or even the charisma that makes the biggest difference. It's the ability to understand, manage, and leverage emotions - both your own and others'."
                },
                {
                  title: "Building Resilience in Uncertain Times",
                  excerpt: "Learn practical strategies to develop mental toughness and bounce back stronger from setbacks and challenges. Discover the three pillars of resilience and how to build them.",
                  date: "January 10, 2025",
                  readTime: "7 min read",
                  content: "In today's rapidly changing world, resilience isn't just a nice-to-have skill - it's essential for survival and success. As someone who has coached hundreds of professionals through challenging times, I've learned that resilience isn't about avoiding difficulties; it's about developing the mental toughness to navigate them effectively."
                },
                {
                  title: "Effective Communication: The Key to Success",
                  excerpt: "Master the art of clear, persuasive communication to influence others and achieve your professional goals. Learn the four levels of communication and how to master each one.",
                  date: "January 5, 2025",
                  readTime: "6 min read",
                  content: "In my years of coaching professionals, I've discovered that 80% of workplace problems stem from poor communication. The good news? Communication is a skill that can be learned, practiced, and mastered. And when you do, it transforms every aspect of your professional and personal life."
                },
                {
                  title: "From Good to Great: Elevating Your Performance",
                  excerpt: "Unlock your full potential with proven strategies used by top performers across industries. Discover the five pillars of greatness and how to build them systematically.",
                  date: "December 28, 2024",
                  readTime: "8 min read",
                  content: "What separates good performers from great ones? It's not just talent, luck, or even hard work. After coaching hundreds of professionals to breakthrough performance, I've discovered the key differentiators that transform good into great."
                },
                {
                  title: "The Science of Motivation: How to Stay Driven",
                  excerpt: "Learn the science behind motivation and how to maintain it even when you don't feel like it. Discover the motivation formula and practical strategies for staying motivated.",
                  date: "December 20, 2024",
                  readTime: "6 min read",
                  content: "Most people believe motivation is something that happens to you - a feeling that comes and goes. But after years of coaching professionals through challenging times, I've learned that motivation is a skill that can be developed and maintained, regardless of circumstances."
                },
                {
                  title: "The Art of Decision Making: How to Make Better Choices",
                  excerpt: "Master the art of decision making with a systematic framework that helps you make better choices faster. Learn to overcome common decision-making barriers and build confidence.",
                  date: "December 15, 2024",
                  readTime: "7 min read",
                  content: "In our fast-paced world, we make hundreds of decisions daily, from what to eat for breakfast to which strategic direction to pursue. The quality of these decisions determines the quality of our results. Yet most people have no systematic approach to decision-making, leading to analysis paralysis, poor choices, and missed opportunities."
                },
              ].map((article, index) => (
                <motion.div
                  key={article.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>
                      <CardTitle className="font-heading group-hover:text-accent transition-colors mb-3">
                        {article.title}
                      </CardTitle>
                      <CardDescription className="text-base">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button 
                        variant="ghost" 
                        className="group-hover:text-accent"
                        onClick={() => {
                          // For now, open WhatsApp for full article access
                          window.open('https://wa.me/919666722233?text=Hi, I would like to read the full article: ' + article.title, '_blank');
                        }}
                      >
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-br from-primary to-slate-900 text-white">
          <div className="container-custom text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
                Want More Personalized Guidance?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Get a customized life lessons guide tailored to your specific goals and challenges
              </p>
              <Button
                variant="accent"
                size="lg"
                className="group"
                onClick={() => window.location.href = "/#free-guide"}
              >
                Get Your Free Personalized Guide
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

