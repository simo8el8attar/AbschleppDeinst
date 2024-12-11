import React from "react";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa"; // Importing WhatsApp logo
import Carousel from "../Carousel";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/212609759798"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
    >
      <FaWhatsapp className="w-5 h-5" />
      <span>WhatsApp</span>
    </a>
  );
};

export default function Hero() {
  return (
    <section className="relative pt-16">
      <Carousel />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 space-y-4">
        <h1 className="text-5xl font-bold mb-4 shadow-text">
          24/7 Towing Services
        </h1>
        <p className="text-xl mb-8 shadow-text">
          Professional & Reliable Assistance
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="tel:+1234567890"
            className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors inline-flex items-center space-x-2"
          >
            <Phone className="w-5 h-5" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </section>
  );
}
