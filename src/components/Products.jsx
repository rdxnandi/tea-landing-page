import React from "react";

function Products() {
  return (
    <section className="py-20 bg-green-50 text-center">
      <h2 className="text-4xl font-semibold text-green-800">Our Bestsellers</h2>
      <div className="mt-10 flex justify-center gap-10 flex-wrap">
        <div className="bg-green-200 p-6 rounded-lg shadow-xl w-72 transform transition-all">
          <h3 className="text-2xl font-semibold">Green Tea</h3>
          <p className="text-gray-700 mt-3">
            Rich in antioxidants, a perfect way to start your day.
          </p>
        </div>
        <div className="bg-green-200 p-6 rounded-lg shadow-xl w-72 transform transition-all">
          <h3 className="text-2xl font-semibold">Black Tea</h3>
          <p className="text-gray-700 mt-3">
            Bold and flavorful, great for a refreshing break.
          </p>
        </div>
        <div className="bg-green-200 p-6 rounded-lg shadow-xl w-72 transform transition-all">
          <h3 className="text-2xl font-semibold">Herbal Tea</h3>
          <p className="text-gray-700 mt-3">
            A caffeine-free blend of herbs and flowers for relaxation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Products;
