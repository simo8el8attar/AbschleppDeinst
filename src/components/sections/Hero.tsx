import React from 'react';
import { Phone } from 'lucide-react';
import Carousel from '../Carousel';

export default function Hero() {
  return (
    <section className="relative pt-16">
      <Carousel />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10">
        <h1 className="text-5xl font-bold mb-4 shadow-text">24/7 Towing Services</h1>
        <p className="text-xl mb-8 shadow-text">Professional & Reliable Assistance</p>
        <a
          href="tel:+1234567890"
          className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors inline-flex items-center"
        >
          <Phone className="w-5 h-5 mr-2" />
          Call Now
        </a>
      </div>
    </section>
  );
}