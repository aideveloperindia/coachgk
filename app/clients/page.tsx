import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";

export const metadata: Metadata = {
  title: "Our Clients & Partners | Gopikrishna Sarvepalli",
  description: "Trusted by 500+ leading organizations across 15+ industry sectors. See who we've partnered with to deliver transformational training programs.",
};

export default function ClientsPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Clients />
      </main>
      <Footer />
    </>
  );
}

