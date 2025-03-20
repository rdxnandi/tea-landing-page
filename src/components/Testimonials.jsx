import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const testimonials = [
  {
    id: 1,
    text: "This tea is amazing! The aroma and taste are just perfect.",
    name: "Sarah W.",
  },
  {
    id: 2,
    text: "Absolutely love the quality and freshness of this tea.",
    name: "James B.",
  },
  {
    id: 3,
    text: "Best tea I've ever had! Highly recommend.",
    name: "Emily R.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo(
      carouselRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
  }, [current]);

  return (
    <section className="relative w-full mx-auto overflow-hidden bg-white py-7">
      <h2 className="flex justify-center items-center lg:text-4xl text-[27px] font-semibold text-green-800 relative after:absolute after:-bottom-2 after:h-1 lg:after:w-[6%] after:w-[15%] after:bg-yellow-500 after:rounded-md my-10">
        Whats Our Customers Say
      </h2>
      <div className="flex items-center justify-center">
        <div ref={carouselRef} className="w-full px-6 text-center">
          <p className="text-[17px] font-semibold italic">
            "{testimonials[current].text}"
          </p>
          <p className="mt-2 text-gray-600">~ {testimonials[current].name}</p>
        </div>
      </div>
      <div className="flex justify-center mt-7 space-x-2">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === current ? "bg-green-900" : "bg-green-100"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
