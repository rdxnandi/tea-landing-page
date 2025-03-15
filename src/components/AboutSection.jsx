import React from "react";
import tea_leaves from "../assets/tea-leaves.jpg";

function AboutSection() {
  return (
    <section className="bg-white shadow-md rounded-xl mx-6 mt-10 flex lg:flex-row flex-col justify-between items-center relative lg:p-12">
      <div className="lg:w-[500px] relative z-10">
        <img
          src={tea_leaves}
          alt="Tea Leaves"
          className="rounded-t-xl shadow-lg transition-transform"
        />
      </div>
      <div className="text-left relative z-10 p-10">
        <h2 className="lg:text-4xl text-3xl font-semibold text-green-800 underline decoration-yellow-500">
          Experience the Essence of Tea
        </h2>
        <p className="mt-6 text-gray-600 max-w-2xl text-justify">
          Immerse yourself in the world of aromatic teas, carefully curated from
          the finest gardens. Our blends bring harmony to your senses, offering
          a perfect balance of taste and wellness.
        </p>
        <div className="flex items-center gap-4 mt-6">
          <div className="lg:p-4 p-3 bg-green-100 rounded-full shadow-md">
            <span className="text-green-800 font-bold lg:text-lg text-[17px]">
              100%
            </span>
            <p className="text-sm text-gray-700">Organic</p>
          </div>
          <div className="lg:p-4 p-3 bg-green-100 rounded-full shadow-md">
            <span className="text-green-800 font-bold lg:text-lg text-[17px]">
              Antioxidant
            </span>
            <p className="text-sm text-gray-700">Rich Benefits</p>
          </div>
        </div>
        <button
          className="mt-6 px-8 py-3 bg-green-700 text-white font-semibold rounded-full shadow-lg transform transition-all cursor-pointer"
          onClick={(e) => e.preventDefault()}
        >
          Learn More
        </button>
      </div>
    </section>
  );
}

export default AboutSection;
