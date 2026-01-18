import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Programs from "@/components/Programs";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";

export const metadata: Metadata = {
  title: "Training Programs & Workshops | Gopikrishna Sarvepalli",
  description: "Explore our comprehensive corporate training programs, leadership workshops, and personal development sessions designed to elevate individuals and organizations.",
};

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Programs />
      </main>
      <Footer />
    </>
  );
}

