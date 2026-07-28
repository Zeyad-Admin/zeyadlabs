import CaseStudies from "@/components/home/CaseStudies";
import Certifications from "@/components/home/Certifications";
import Contact from "@/components/home/Contact";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import HomeLab from "@/components/home/HomeLab";
import TechnologyStrip from "@/components/home/Technology/Strip";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <TechnologyStrip />
      <CaseStudies />
      <Experience />
      <Certifications />
      <HomeLab />
      <Contact />
      <Footer />
    </main>
  );
}