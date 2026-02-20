import React from "react";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import Footer from "./_components/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#09090B] font-sans text-white selection:bg-[#7C3AED] selection:text-white">
      {/* Navigation Bar */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
