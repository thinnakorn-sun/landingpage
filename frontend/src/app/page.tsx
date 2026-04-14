"use client";

import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import BrandSection from "@/components/sections/BrandSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhatWeCreateSection from "@/components/sections/WhatWeCreateSection";
import GallerySection from "@/components/sections/GallerySection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import Footer from "@/components/layout/Footer";
import FloatButton from "@/components/common/FloatButton";

export default function Home() {
  return (
    <main className="relative bg-white">
      <Navbar />
      <HeroSection />
      <BrandSection />
      <ServicesSection />
      <WhatWeCreateSection />
      <GallerySection />
      <MarqueeSection />
      <Footer />
      <FloatButton />
    </main>
  );
}
