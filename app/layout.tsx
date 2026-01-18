import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gopikrishna Sarvepalli - Corporate Trainer & Business Coach",
  description: "Transforming Potential into Performance. 29 Years of Excellence | 44,000+ Lives Transformed | Expert Corporate Trainer & Business Coach",
  keywords: ["corporate training", "business coach", "OD consultant", "leadership training", "personal development"],
  authors: [{ name: "Beyondx Informatics Analytics Pvt. Ltd." }],
  openGraph: {
    title: "Gopikrishna Sarvepalli - Corporate Trainer & Business Coach",
    description: "Transforming Potential into Performance. 29 Years of Excellence | 44,000+ Lives Transformed",
    type: "website",
    locale: "en_US",
    siteName: "Gopikrishna Sarvepalli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gopikrishna Sarvepalli - Corporate Trainer & Business Coach",
    description: "Transforming Potential into Performance. 29 Years of Excellence | 44,000+ Lives Transformed",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}











