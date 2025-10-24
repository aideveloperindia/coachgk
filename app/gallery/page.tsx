import { Metadata } from "next";
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";
import FooterNav from "@/components/FooterNav";

export const metadata: Metadata = {
  title: "Video Gallery | Watch Training Sessions in Action",
  description: "Experience the energy and transformation of live training sessions. Watch videos of Mr. Gopikrishna Sarvepalli in action.",
};

export default function GalleryPage() {
  return (
    <>
      <Header />
      <Breadcrumb />
      <main className="min-h-screen bg-white">
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

