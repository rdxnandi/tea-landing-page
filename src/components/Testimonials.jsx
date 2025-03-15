import React from "react";

function Testimonials() {
  return (
    <section className="py-20 px-8 bg-white text-center">
      <h2 className="flex items-center justify-center lg:text-4xl text-[26px] font-semibold text-green-800 relative mb-8 after:absolute after:bg-yellow-500 after:-bottom-2 after:h-1 lg:after:w-[5%] after:w-[15%] after:rounded-md">
        What Our Customers Say
      </h2>
      <p className="mt-4 text-gray-600 italic">
        "The best tea I've ever had! Absolutely delightful." - Emily R.
      </p>
    </section>
  );
}

export default Testimonials;
