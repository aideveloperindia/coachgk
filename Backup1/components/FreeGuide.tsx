"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, CheckCircle2, Gift } from "lucide-react";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export default function FreeGuide() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const generatePDF = async (name: string) => {
    try {
      const pdfDoc = await PDFDocument.create();
      const page = pdfDoc.addPage([600, 800]);
      const { width, height } = page.getSize();
      
      const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);
      const timesRomanBoldFont = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
      const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

      // Title
      page.drawText('Life Lessons Guide', {
        x: 50,
        y: height - 80,
        size: 32,
        font: timesRomanBoldFont,
        color: rgb(0.04, 0.15, 0.25), // Primary color
      });

      // Personalized greeting
      page.drawText(`Prepared for: ${name}`, {
        x: 50,
        y: height - 120,
        size: 16,
        font: helveticaFont,
        color: rgb(0.83, 0.69, 0.22), // Accent color
      });

      // Content
      const content = [
        { title: '1. The Power of Clarity', text: 'Success begins with clear goals. Define what you want, why you want it, and create a roadmap to achieve it.' },
        { title: '2. Consistency Over Intensity', text: 'Small, consistent actions compound over time. Daily progress beats sporadic bursts of effort.' },
        { title: '3. Communication is Connection', text: 'Master the art of listening first. True communication builds bridges and transforms relationships.' },
        { title: '4. Embrace Continuous Learning', text: 'Growth never stops. Commit to learning something new every day, no matter how small.' },
        { title: '5. Leadership Starts Within', text: 'Lead yourself before leading others. Self-discipline and integrity are the foundations of leadership.' },
        { title: '6. Resilience is Your Superpower', text: 'Challenges are opportunities in disguise. Build mental toughness through adversity.' },
        { title: '7. Value Relationships', text: 'Your network is your net worth. Invest in genuine, meaningful relationships.' },
        { title: '8. Take Action Now', text: 'The perfect time never comes. Start where you are with what you have.' },
      ];

      let yPosition = height - 180;

      content.forEach((item, index) => {
        // Title
        page.drawText(item.title, {
          x: 50,
          y: yPosition,
          size: 14,
          font: timesRomanBoldFont,
          color: rgb(0.04, 0.15, 0.25),
        });

        yPosition -= 25;

        // Text (wrapped)
        const words = item.text.split(' ');
        let line = '';
        const maxWidth = 500;

        words.forEach((word) => {
          const testLine = line + word + ' ';
          const textWidth = helveticaFont.widthOfTextAtSize(testLine, 11);
          
          if (textWidth > maxWidth && line !== '') {
            page.drawText(line, {
              x: 50,
              y: yPosition,
              size: 11,
              font: helveticaFont,
              color: rgb(0.3, 0.3, 0.3),
            });
            yPosition -= 18;
            line = word + ' ';
          } else {
            line = testLine;
          }
        });

        if (line) {
          page.drawText(line, {
            x: 50,
            y: yPosition,
            size: 11,
            font: helveticaFont,
            color: rgb(0.3, 0.3, 0.3),
          });
        }

        yPosition -= 35;
      });

      // Footer
      page.drawText('© 2025 Gopikrishna Sarvepalli | Beyondx Informatics Analytics Pvt. Ltd.', {
        x: 50,
        y: 50,
        size: 10,
        font: helveticaFont,
        color: rgb(0.5, 0.5, 0.5),
      });

      page.drawText('Contact: +91 96667 22233 | www.gopikrishna.in', {
        x: 50,
        y: 35,
        size: 10,
        font: helveticaFont,
        color: rgb(0.5, 0.5, 0.5),
      });

      const pdfBytes = await pdfDoc.save();
      return pdfBytes;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw error;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save lead to database
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          source: 'Free Guide',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        console.error('Failed to save lead');
      }

      // Generate and download PDF
      const pdfBytes = await generatePDF(formData.name);
      const blob = new Blob([pdfBytes as BlobPart], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Life-Lessons-Guide-${formData.name.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setIsSuccess(true);
      setFormData({ name: "", email: "" });

      // Optional: Redirect to WhatsApp
      setTimeout(() => {
        window.open(`https://wa.me/919666722233?text=Hi, I just downloaded the Life Lessons Guide!`, "_blank");
      }, 1000);

    } catch (error) {
      console.error('Error:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="free-guide" className="section-padding bg-gradient-to-br from-accent/5 via-white to-primary/5 relative overflow-hidden" ref={ref}>
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-6">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
              Get Your Free Life Lessons Guide
            </h2>
            <p className="text-xl text-gray-600">
              Personalized insights to accelerate your personal and professional growth
            </p>
            <motion.div
              className="w-24 h-1 bg-accent mx-auto mt-6 rounded-full"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">
                What You'll Discover:
              </h3>

              {[
                'The Power of Clarity in Goal Setting',
                'Building Unshakeable Consistency',
                'Mastering Effective Communication',
                'Developing True Leadership from Within',
                'Cultivating Resilience & Mental Strength',
                'Creating Meaningful Relationships',
                'Taking Decisive Action Today',
              ].map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {!isSuccess ? (
                <div className="bg-white rounded-2xl p-8 shadow-2xl border-2 border-accent/20">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="guide-name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="guide-name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="guide-email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email (Optional)
                      </label>
                      <input
                        type="email"
                        id="guide-email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-accent focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="accent"
                      size="lg"
                      className="w-full group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Generating Your Guide..."
                      ) : (
                        <>
                          Download Free Guide
                          <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-gray-500 text-center">
                      Your personalized PDF will download instantly. No spam, ever.
                    </p>
                  </form>
                </div>
              ) : (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-green-50 rounded-2xl p-8 text-center border-2 border-green-200"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-green-800 mb-2">
                    Success!
                  </h3>
                  <p className="text-green-700 mb-4">
                    Your personalized Life Lessons Guide is downloading now.
                  </p>
                  <p className="text-sm text-gray-600">
                    We're redirecting you to WhatsApp to stay connected...
                  </p>
                  <Button
                    variant="outline"
                    className="mt-6"
                    onClick={() => setIsSuccess(false)}
                  >
                    Download Another Copy
                  </Button>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

