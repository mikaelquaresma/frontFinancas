import CtaSection from "./components/cta";
import FeaturesSection from "./components/features";
import FooterSection from "./components/rodape";
import HeroSection from "./components/hero";
import HowItWorks from "./components/how-it-works";
import PartnersSection from "./components/partners";
import PricingSection from "./components/pricing";
import TestimonialsSection from "./components/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <HowItWorks />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <FooterSection />
    </div>
  );
}