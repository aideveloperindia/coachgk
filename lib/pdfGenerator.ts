import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

export interface PDFContent {
  title: string;
  subtitle?: string;
  sections: {
    title: string;
    content: string[];
  }[];
  footer?: string;
}

export class PDFGenerator {
  private static async createBackground(page: any, width: number, height: number, type: string = 'default') {
    // Create different backgrounds for different PDF types
    switch (type) {
      case 'leadership':
        // Leadership - Professional blue gradient
        page.drawRectangle({
          x: 0,
          y: 0,
          width: width,
          height: height,
          color: rgb(0.98, 0.99, 1.0), // Very light blue
        });
        
        // Subtle geometric patterns
        for (let i = 0; i < 8; i++) {
          page.drawLine({
            start: { x: 0, y: height - 80 - (i * 15) },
            end: { x: width, y: height - 80 - (i * 15) },
            thickness: 0.3,
            color: rgb(0.9, 0.95, 1.0),
          });
        }
        
        // Top right subtle accent
        page.drawCircle({
          x: width - 80,
          y: height - 80,
          radius: 40,
          color: rgb(0.9, 0.95, 1.0),
        });
        break;

      case 'time-management':
        // Time Management - Green productivity theme
        page.drawRectangle({
          x: 0,
          y: 0,
          width: width,
          height: height,
          color: rgb(0.98, 1.0, 0.98), // Very light green
        });
        
        // Clock-like patterns
        for (let i = 0; i < 12; i++) {
          const angle = (i * 30) * (Math.PI / 180);
          const x = width - 100 + Math.cos(angle) * 30;
          const y = height - 100 + Math.sin(angle) * 30;
          page.drawCircle({
            x: x,
            y: y,
            radius: 2,
            color: rgb(0.8, 0.9, 0.8),
          });
        }
        break;

      case 'goal-setting':
        // Goal Setting - Orange achievement theme
        page.drawRectangle({
          x: 0,
          y: 0,
          width: width,
          height: height,
          color: rgb(1.0, 0.98, 0.95), // Very light orange
        });
        
        // Mountain-like patterns for achievement
        for (let i = 0; i < 6; i++) {
          page.drawLine({
            start: { x: 50 + (i * 100), y: 100 },
            end: { x: 80 + (i * 100), y: 150 },
            thickness: 1,
            color: rgb(0.95, 0.9, 0.8),
          });
        }
        break;

      case 'stress-management':
        // Stress Management - Calming purple theme
        page.drawRectangle({
          x: 0,
          y: 0,
          width: width,
          height: height,
          color: rgb(0.98, 0.97, 1.0), // Very light purple
        });
        
        // Wave patterns for calmness
        for (let i = 0; i < 10; i++) {
          page.drawLine({
            start: { x: 0, y: 80 + (i * 20) },
            end: { x: width, y: 80 + (i * 20) },
            thickness: 0.5,
            color: rgb(0.9, 0.9, 0.95),
          });
        }
        break;

      default:
        // Default - Clean professional
        page.drawRectangle({
          x: 0,
          y: 0,
          width: width,
          height: height,
          color: rgb(1.0, 1.0, 1.0), // Pure white
        });
        
        // Minimal border
        page.drawRectangle({
          x: 20,
          y: 20,
          width: width - 40,
          height: height - 40,
          borderColor: rgb(0.9, 0.9, 0.9),
          borderWidth: 1,
        });
    }
  }

  private static async addHeader(page: any, title: string, width: number, height: number, subtitle?: string) {
    const timesRomanBoldFont = await page.doc.embedFont(StandardFonts.TimesRomanBold);
    const helveticaFont = await page.doc.embedFont(StandardFonts.Helvetica);

    // Main title with clean background
    page.drawRectangle({
      x: 40,
      y: height - 100,
      width: width - 80,
      height: 60,
      color: rgb(0.04, 0.15, 0.25),
    });

    page.drawText(title, {
      x: 50,
      y: height - 80,
      size: 24,
      font: timesRomanBoldFont,
      color: rgb(1, 1, 1),
    });

    if (subtitle) {
      page.drawText(subtitle, {
        x: 50,
        y: height - 110,
        size: 14,
        font: helveticaFont,
        color: rgb(0.83, 0.69, 0.22),
      });
    }
  }

  private static async addSection(page: any, section: any, yPosition: number, width: number) {
    const timesRomanBoldFont = await page.doc.embedFont(StandardFonts.TimesRomanBold);
    const helveticaFont = await page.doc.embedFont(StandardFonts.Helvetica);

    // Section title with clean background for visibility
    page.drawRectangle({
      x: 40,
      y: yPosition - 20,
      width: width - 80,
      height: 25,
      color: rgb(0.83, 0.69, 0.22),
    });

    page.drawText(section.title, {
      x: 50,
      y: yPosition - 15,
      size: 14,
      font: timesRomanBoldFont,
      color: rgb(1, 1, 1),
    });

    let currentY = yPosition - 40;

    section.content.forEach((paragraph: string) => {
      const words = paragraph.split(' ');
      let line = '';
      const maxWidth = width - 100;

      words.forEach((word: string) => {
        const testLine = line + word + ' ';
        const textWidth = helveticaFont.widthOfTextAtSize(testLine, 11);
        
        if (textWidth > maxWidth && line !== '') {
          // Add subtle background for text visibility
          page.drawRectangle({
            x: 45,
            y: currentY - 2,
            width: textWidth + 10,
            height: 14,
            color: rgb(1, 1, 1),
          });
          
          page.drawText(line, {
            x: 50,
            y: currentY,
            size: 11,
            font: helveticaFont,
            color: rgb(0.1, 0.1, 0.1),
          });
          currentY -= 16;
          line = word + ' ';
        } else {
          line = testLine;
        }
      });

      if (line) {
        // Add subtle background for text visibility
        const textWidth = helveticaFont.widthOfTextAtSize(line, 11);
        page.drawRectangle({
          x: 45,
          y: currentY - 2,
          width: textWidth + 10,
          height: 14,
          color: rgb(1, 1, 1),
        });
        
        page.drawText(line, {
          x: 50,
          y: currentY,
          size: 11,
          font: helveticaFont,
          color: rgb(0.1, 0.1, 0.1),
        });
        currentY -= 16;
      }
      currentY -= 8;
    });

    return currentY;
  }

  static async generateLeadershipGuide(name: string): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();
    
    // Create first page
    const page1 = pdfDoc.addPage([600, 800]);
    const { width, height } = page1.getSize();

    // Add stunning background
    await this.createBackground(page1, width, height, 'leadership');

    // Add header
    await this.addHeader(page1, "Leadership Excellence Guide", width, height, `Prepared for: ${name}`);

    const sections1 = [
      {
        title: "1. The Foundation of Great Leadership",
        content: [
          "True leadership begins with self-awareness. Great leaders understand their strengths, acknowledge their weaknesses, and continuously work on personal development. They lead by example, demonstrating the values and behaviors they expect from their team.",
          "Key principles: Authenticity, Integrity, Vision, and the ability to inspire others to achieve more than they thought possible."
        ]
      },
      {
        title: "2. Building Trust and Credibility",
        content: [
          "Trust is the cornerstone of effective leadership. It's built through consistent actions, transparent communication, and genuine care for your team's success. Credibility comes from competence, character, and connection.",
          "Action steps: Keep your promises, admit mistakes, share credit, and always act in the best interest of your team."
        ]
      },
      {
        title: "3. Communication Mastery",
        content: [
          "Great leaders are exceptional communicators. They listen actively, speak clearly, and ensure their message resonates with their audience. Communication is not just about speaking; it's about being understood.",
          "Techniques: Active listening, clear messaging, emotional intelligence, and adapting your communication style to your audience."
        ]
      }
    ];

    let yPosition = height - 150;
    for (const section of sections1) {
      yPosition = await this.addSection(page1, section, yPosition, width);
    }

    // Add footer to first page
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    page1.drawText("© 2025 Gopikrishna Sarvepalli | Built by AI Developer India", {
      x: 50,
      y: 30,
      size: 10,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
    });

    // Create second page
    const page2 = pdfDoc.addPage([600, 800]);
    await this.createBackground(page2, width, height, 'leadership');

    const sections2 = [
      {
        title: "4. Decision-Making Excellence",
        content: [
          "Leaders make decisions that impact many people. Develop a systematic approach to decision-making that considers multiple perspectives, weighs risks and benefits, and aligns with your organization's values.",
          "Framework: Gather information, consult stakeholders, consider alternatives, make the decision, communicate it clearly, and learn from the outcomes."
        ]
      },
      {
        title: "5. Developing Your Team",
        content: [
          "The best leaders focus on developing others. They identify potential, provide opportunities for growth, and create an environment where people can thrive.",
          "Key strategies: Mentorship, delegation, feedback, and recognition."
        ]
      },
      {
        title: "6. Leading Through Change",
        content: [
          "Change is the only constant in leadership. Great leaders navigate uncertainty with confidence, communicate change effectively, and help their teams adapt and grow.",
          "Strategies: Clear communication, emotional support, celebrating small wins, and maintaining team morale during transitions."
        ]
      }
    ];

    yPosition = height - 50;
    for (const section of sections2) {
      yPosition = await this.addSection(page2, section, yPosition, width);
    }

    // Add footer to second page
    page2.drawText("© 2025 Gopikrishna Sarvepalli | Built by AI Developer India", {
      x: 50,
      y: 30,
      size: 10,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
    });

    return await pdfDoc.save();
  }

  static async generateTimeManagementGuide(name: string): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    await this.createBackground(page, width, height, 'time-management');
    await this.addHeader(page, "Time Management Masterclass", width, height, `Prepared for: ${name}`);

    const content: PDFContent = {
      title: "Time Management Masterclass",
      sections: [
        {
          title: "1. The Time Audit: Know Where Your Time Goes",
          content: [
            "Before you can manage your time better, you need to understand how you're currently spending it. Track your activities for one week to identify time wasters and productivity patterns.",
            "Tools: Time tracking apps, activity logs, and honest self-reflection about your daily routines."
          ]
        },
        {
          title: "2. The Priority Matrix: Focus on What Matters",
          content: [
            "Use the Eisenhower Matrix to categorize tasks: Urgent & Important, Important but Not Urgent, Urgent but Not Important, and Neither Urgent nor Important.",
            "Focus 80% of your time on Important but Not Urgent tasks to prevent crises and build long-term success."
          ]
        },
        {
          title: "3. The Power of Deep Work",
          content: [
            "Deep work is the ability to focus without distraction on cognitively demanding tasks. Schedule 2-4 hour blocks for your most important work when you're at your peak energy.",
            "Techniques: Time blocking, eliminating distractions, creating a focused environment, and protecting your deep work time."
          ]
        },
        {
          title: "4. The 2-Minute Rule",
          content: [
            "If a task takes less than 2 minutes, do it immediately. This prevents small tasks from accumulating and cluttering your mental space.",
            "Implementation: Process emails immediately, make quick phone calls, and handle administrative tasks as they come up."
          ]
        },
        {
          title: "5. Batch Processing for Efficiency",
          content: [
            "Group similar tasks together and handle them in dedicated time blocks. This reduces context switching and increases efficiency.",
            "Examples: Batch all phone calls, process all emails at once, schedule all meetings on specific days."
          ]
        }
      ]
    };

    let yPosition = height - 150;
    for (const section of content.sections) {
      yPosition = await this.addSection(page, section, yPosition, width);
    }

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    page.drawText("© 2025 Gopikrishna Sarvepalli | Built by AI Developer India", {
      x: 50,
      y: 30,
      size: 10,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
    });

    return await pdfDoc.save();
  }

  static async generateGoalSettingGuide(name: string): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    await this.createBackground(page, width, height, 'goal-setting');
    await this.addHeader(page, "Goal Setting Framework", width, height, `Prepared for: ${name}`);

    const content: PDFContent = {
      title: "Goal Setting Framework",
      sections: [
        {
          title: "1. The SMART Goals Framework",
          content: [
            "Specific: Define exactly what you want to achieve. Vague goals lead to vague results.",
            "Measurable: Include numbers, dates, and other quantifiable metrics to track progress.",
            "Achievable: Set challenging but realistic goals that stretch your capabilities.",
            "Relevant: Ensure your goals align with your values and long-term vision.",
            "Time-bound: Set clear deadlines to create urgency and accountability."
          ]
        },
        {
          title: "2. The Vision-Goals-Actions Hierarchy",
          content: [
            "Start with your long-term vision (5-10 years), break it into medium-term goals (1-3 years), then create short-term goals (3-12 months), and finally daily actions.",
            "This creates a clear roadmap from your big dreams to your daily activities, ensuring every action moves you toward your vision."
          ]
        },
        {
          title: "3. The 80/20 Principle in Goal Setting",
          content: [
            "Focus on the 20% of activities that will produce 80% of your results. Identify which goals will have the greatest impact on your overall success.",
            "Regularly review and prioritize your goals, eliminating or postponing those that don't contribute significantly to your vision."
          ]
        },
        {
          title: "4. Overcoming Goal-Setting Obstacles",
          content: [
            "Common obstacles: Fear of failure, perfectionism, lack of clarity, and overwhelming goals.",
            "Solutions: Start small, celebrate progress, break large goals into smaller steps, and focus on progress over perfection."
          ]
        },
        {
          title: "5. Goal Review and Adjustment",
          content: [
            "Review your goals weekly, monthly, and quarterly. Life changes, and your goals should adapt accordingly.",
            "Track your progress, celebrate wins, learn from setbacks, and adjust your approach as needed to stay on course."
          ]
        }
      ]
    };

    let yPosition = height - 150;
    for (const section of content.sections) {
      yPosition = await this.addSection(page, section, yPosition, width);
    }

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    page.drawText("© 2025 Gopikrishna Sarvepalli | Built by AI Developer India", {
      x: 50,
      y: 30,
      size: 10,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
    });

    return await pdfDoc.save();
  }

  static async generateStressManagementGuide(name: string): Promise<Uint8Array> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    await this.createBackground(page, width, height, 'stress-management');
    await this.addHeader(page, "Stress Management Toolkit", width, height, `Prepared for: ${name}`);

    const content: PDFContent = {
      title: "Stress Management Toolkit",
      sections: [
        {
          title: "1. Understanding Stress: The Good, The Bad, and The Ugly",
          content: [
            "Not all stress is bad. Eustress (positive stress) can motivate and energize you. Distress (negative stress) becomes harmful when it's chronic or overwhelming.",
            "Recognize your stress triggers, physical symptoms, and emotional responses to develop effective coping strategies."
          ]
        },
        {
          title: "2. The 4-7-8 Breathing Technique",
          content: [
            "This simple breathing exercise can quickly reduce stress and anxiety: Inhale for 4 counts, hold for 7 counts, exhale for 8 counts.",
            "Practice this technique daily, especially during stressful moments, to train your nervous system to respond calmly to stress."
          ]
        },
        {
          title: "3. The Power of Physical Activity",
          content: [
            "Exercise is one of the most effective stress relievers. It releases endorphins, improves mood, and provides a healthy outlet for stress.",
            "Find activities you enjoy: walking, yoga, dancing, swimming, or any form of movement that brings you joy and relaxation."
          ]
        },
        {
          title: "4. Mindfulness and Meditation",
          content: [
            "Mindfulness helps you stay present and reduces worry about the future or regret about the past. Start with just 5-10 minutes daily.",
            "Techniques: Body scan meditation, mindful breathing, walking meditation, and gratitude practices."
          ]
        },
        {
          title: "5. Building Your Support System",
          content: [
            "Strong relationships are crucial for stress management. Surround yourself with people who support and encourage you.",
            "Don't hesitate to seek professional help when needed. Sometimes, talking to a counselor or therapist can provide valuable perspective and coping strategies."
          ]
        }
      ]
    };

    let yPosition = height - 150;
    for (const section of content.sections) {
      yPosition = await this.addSection(page, section, yPosition, width);
    }

    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
    page.drawText("© 2025 Gopikrishna Sarvepalli | Built by AI Developer India", {
      x: 50,
      y: 30,
      size: 10,
      font: helveticaFont,
      color: rgb(0.5, 0.5, 0.5),
    });

    return await pdfDoc.save();
  }
}
