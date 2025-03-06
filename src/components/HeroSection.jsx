import React from "react";
import tea_image from "../assets/tea-image.jpg";

function HeroSection() {
  return (
    <header className="bg-gradient-to-r from-green-700 to-green-900 text-white py-40 text-center flex flex-col items-center justify-center shadow-xl rounded-b-3xl relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-40">
        <img src={tea_image} alt="Tea" className="w-full h-full object-cover" />
      </div>
      <h1 className="text-6xl font-extrabold drop-shadow-lg animate-pulse">
        Discover the Finest Tea
      </h1>
      <p className="relative mt-4 text-lg drop-shadow-md max-w-xl animate-fade-in">
        Pure, organic, and refreshing
      </p>
      <button className="mt-6 px-10 py-4 bg-yellow-500 text-green-900 font-semibold rounded-full shadow-lg transition-transform transform">
        Shop Now
      </button>
    </header>
  );
}

export default HeroSection;
