import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SolutionModules from "@/components/SolutionModules";
import ProductCategories from "@/components/ProductCategories";
import PCConfigurator from "@/components/PCConfigurator";
import WhyChooseUs from "@/components/WhyChooseUs";
import StoreContact from "@/components/StoreContact";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SolutionModules />
      <ProductCategories />
      <PCConfigurator />
      <WhyChooseUs />
      <StoreContact />
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Index;
