import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  HeroSection,
  ServicesSection,
  HowItWorksSection,
  WhoWeHelpSection,
  CTABanner,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <HowItWorksSection />
        <WhoWeHelpSection />
        <CTABanner />
      </main>
      <Footer />
    </div>
  );
}
