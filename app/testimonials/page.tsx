import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";

export const metadata: Metadata = {
  title: "Client Testimonials & Success Stories | Gopikrishna Sarvepalli",
  description: "Read real stories from leaders who've experienced transformation through our training programs. Over 1000+ testimonials with 4.9/5 average rating.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}

