import React from 'react';
import { Truck, Clock, MapPin } from 'lucide-react';
import ServiceCard from '../ServiceCard';

export default function Services() {
  const services = [
    {
      icon: Truck,
      title: "24/7 Towing",
      description: "Emergency towing services available around the clock"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "Fast and reliable service when you need it most"
    },
    {
      icon: MapPin,
      title: "Local & Long Distance",
      description: "Serving both local and long-distance towing needs"
    }
  ];

  return (
    <section id="services" className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}