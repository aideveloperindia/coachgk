import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";

export const metadata: Metadata = {
  title: "Certifications & Recognitions | Gopikrishna Sarvepalli",
  description: "View our prestigious certifications and industry recognitions that validate our expertise in corporate training and life coaching.",
};

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Certificates />
      </main>
      <Footer />
    </>
  );
}

