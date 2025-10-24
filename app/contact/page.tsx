import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch with Gopikrishna Sarvepalli",
  description: "Ready to transform your team or personal growth? Contact us today to discuss your training needs and book a session.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Contact />
      </main>
      <Footer />
    </>
  );
}

