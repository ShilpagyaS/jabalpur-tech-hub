import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandsCarousel from "@/components/BrandsCarousel";
import StatsCounter from "@/components/StatsCounter";
import SolutionModules from "@/components/SolutionModules";
import ProductCategories from "@/components/ProductCategories";
import DealsBanner from "@/components/DealsBanner";
import PCConfigurator from "@/components/PCConfigurator";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import StoreContact from "@/components/StoreContact";
import Footer from "@/components/Footer";
import StickyContact from "@/components/StickyContact";
import SocialFloat from "@/components/SocialFloat";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <BrandsCarousel />
      <StatsCounter />
      <SolutionModules />
      <ProductCategories />
      <DealsBanner />
      <PCConfigurator />
      <WhyChooseUs />
      <Testimonials />
      <StoreContact />
      <Footer />
      <StickyContact />
    </div>
  );
};

export default Index;
