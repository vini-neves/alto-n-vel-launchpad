import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoursesSection from "@/components/CoursesSection";
import AphSection from "@/components/AphSection";
import BombeiroMirimSection from "@/components/BombeiroMirimSection";
import GraduacaoSection from "@/components/GraduacaoSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CoursesSection />
      <AphSection />
      <BombeiroMirimSection />
      <GraduacaoSection />
      <Footer />
    </div>
  );
};

export default Index;
