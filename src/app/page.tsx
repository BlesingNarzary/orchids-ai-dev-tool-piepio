"use client";

import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import Features from "@/components/sections/features";
import PricingSection from "@/components/sections/pricing";
import FAQSection from "@/components/sections/faq";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <Features />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
