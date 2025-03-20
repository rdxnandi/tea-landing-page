import React from "react";

function Footer() {
  return (
    <footer className="py-10 px-4 lg:px-0 bg-green-700 text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold">Tea Shop</h2>
          <p className="text-sm mt-2 font-semibold">
            Savor the best quality tea from around the world.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <div>
            <h3 className="font-semibold text-xl">About Us</h3>
            <ul className="text-sm mt-2 flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="font-semibold"
                  onClick={(e) => e.preventDefault()}
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold"
                  onClick={(e) => e.preventDefault()}
                >
                  Our Process
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold"
                  onClick={(e) => e.preventDefault()}
                >
                  Sustainability
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl">Support</h3>
            <ul className="text-sm mt-2 flex flex-col gap-2">
              <li>
                <a
                  href="#"
                  className="font-semibold"
                  onClick={(e) => e.preventDefault()}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold"
                  onClick={(e) => e.preventDefault()}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="font-semibold"
                  onClick={(e) => e.preventDefault()}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-center mt-6 text-sm">
        Copyright © 2025 <span className="underline">Tea Shop</span>. All Rights
        Reserved
      </p>
    </footer>
  );
}

export default Footer;
