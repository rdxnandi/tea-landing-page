import React from "react";
import tea_leaves from "../assets/tea-leaves.jpg";

function AboutSection() {
  return (
    <section className="bg-white shadow-md rounded-xl mx-6 mt-10 flex justify-between items-center relative p-12">
      <div className="w-[500px] relative z-10">
        <img
          src={tea_leaves}
          alt=""
          className="rounded-lg shadow-lg transition-transform"
        />
      </div>
      <div className="text-left relative z-10">
        <h2 className="text-4xl font-semibold text-green-800 underline decoration-yellow-500">
          Experience the Essence of Tea
        </h2>
        <p className="mt-6 text-gray-600 max-w-2xl">
          Immerse yourself in the world of aromatic teas, carefully curated from
          the finest gardens. Our blends bring harmony to your senses, offering
          a perfect balance of taste and wellness.
        </p>
        <div className="flex items-center gap-4 mt-6">
          <div className="p-4 bg-green-100 rounded-full shadow-md">
            <span className="text-green-800 font-bold text-lg">100%</span>
            <p className="text-sm text-gray-700">Organic</p>
          </div>
          <div className="p-4 bg-green-100 rounded-full shadow-md">
            <span className="text-green-800 font-bold text-lg">
              Antioxidant
            </span>
            <p className="text-sm text-gray-700">Rich Benefits</p>
          </div>
        </div>
        <button className="mt-6 px-8 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg transform transition-all">
          Learn More
        </button>
      </div>
    </section>
  );
}

export default AboutSection;
