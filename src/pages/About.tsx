import React from 'react';
import { Shield, Clock, Users, Award } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and insured for your peace of mind'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock service for emergencies'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Highly trained and experienced professionals'
    },
    {
      icon: Award,
      title: 'Quality Service',
      description: 'Committed to excellence in every job'
    }
  ];

  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About TowPro Services</h1>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6">
            Since 1995, TowPro Services has been providing reliable and professional towing services
            to our community. We take pride in our commitment to excellence and customer satisfaction.
          </p>
          <p className="text-lg text-gray-700">
            Our team of certified professionals is available 24/7 to assist you with any towing needs,
            from emergency roadside assistance to long-distance towing services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <Icon className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-100 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-700 text-center max-w-2xl mx-auto">
            To provide fast, reliable, and professional towing services while ensuring
            complete customer satisfaction and safety in every situation.
          </p>
        </div>
      </div>
    </div>
  );
}