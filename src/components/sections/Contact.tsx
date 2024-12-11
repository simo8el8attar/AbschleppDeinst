import React from 'react';
import { Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl mb-8">
            Need assistance? We're available 24/7 to help you.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a
              href="tel:+1234567890"
              className="bg-green-600 text-white px-8 py-3 rounded-full text-lg hover:bg-green-700 transition-colors inline-flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              (212) 609759798
            </a>
            <a
              href="mailto:info@towpro.com"
              className="text-white hover:text-green-400 transition-colors"
            >
              info@towpro.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}