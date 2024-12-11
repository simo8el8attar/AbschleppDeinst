import React from 'react';

const galleryImages = [
  'https://images.unsplash.com/photo-1566936737687-8f392a237b8b?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1589730823931-07da2a7bf09c?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1589730823931-07da2a7bf09c?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=600',
  'https://images.unsplash.com/photo-1566936737687-8f392a237b8b?auto=format&fit=crop&q=80&w=600'
];

export default function Gallery() {
  return (
    <div className="pt-20 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Fleet Gallery</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img
                src={image}
                alt={`Tow truck ${index + 1}`}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg font-semibold">View Image</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}