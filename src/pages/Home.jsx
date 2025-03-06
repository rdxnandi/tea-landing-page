import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";

function Home() {
  return (
    <div className="bg-green-50 min-h-screen relative">
      <HeroSection />
      <AboutSection />
      <Products />
      <Testimonials />
      <BackToTopButton />
      <Footer />
    </div>
  );
}

export default Home;
