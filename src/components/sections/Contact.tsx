import React from "react";
import { Phone } from "lucide-react";
// @ts-ignore
import { WhatsAppWidget } from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

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
            <div
              style={{
                position: "fixed", // Fixes the widget relative to the viewport
                bottom: "20px", // 20px from the bottom
                right: "20px", // 20px from the right
                zIndex: 9999, // Ensures it's on top of other elements
              }}
            >
              <WhatsAppWidget
                phoneNumber="212609759798"
                companyName="Abschlepp Deinst"
                message="Salama Abschlepp Deinst at your service! How can we help you?"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
