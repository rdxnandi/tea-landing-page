import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function Contact() {
  return (
    <section className="py-12 text-center flex items-center flex-col">
      <h2 className="text-3xl font-bold">Contact Us</h2>
      <p className="mt-4">Get in touch for inquiries and collaborations.</p>
      <div className="mt-6 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center w-[250px]">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white">
            <Mail size={16} />
          </div>
          <p className="mt-2 text-gray-500">info@teashop.com</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center w-[250px]">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white">
            <Phone size={16} />
          </div>
          <p className="mt-2 text-gray-500">+1 234 567 890</p>
        </div>
        <div className="p-4 bg-white shadow-lg rounded-lg flex flex-col items-center w-[250px]">
          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white">
            <MapPin size={16} />
          </div>
          <p className="mt-2 text-gray-500">123 Tea Shop, Green City</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
