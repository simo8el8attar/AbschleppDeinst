import React from 'react';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import ContactSection from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <ContactSection />
    </>
  );
}