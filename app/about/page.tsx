import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import About from "@/components/About";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";

export const metadata: Metadata = {
  title: "About Mr. Gopikrishna Sarvepalli | Corporate Trainer & Life Coach",
  description: "Learn about Mr. Gopikrishna Sarvepalli's 29+ years of experience in corporate training, life coaching, and motivational speaking. Transforming lives since 1996.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <About />
      </main>
      <Footer />
    </>
  );
}

