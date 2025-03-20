import React from "react";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import Products from "../components/Products";
import Testimonials from "../components/Testimonials";
import BackToTopButton from "../components/BackToTopButton";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-green-50 min-h-screen relative">
      <HeroSection />
      <AboutSection />
      <Products />
      <Testimonials />
      <BackToTopButton />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
