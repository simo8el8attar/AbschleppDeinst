import React, { useState } from 'react';
import { Truck, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import MobileNav from './MobileNav';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Truck className="w-8 h-8 text-green-600" />
          <span className="text-2xl font-bold">Abschlepp Deinst Hamburg</span>
        </Link>
        
        <div className="hidden md:flex space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink href="tel:+212609759798" variant="button">
            <Phone className="w-5 h-5 mr-2" />
            Call Now
          </NavLink>
        </div>

        <MobileNav isOpen={isMenuOpen} onToggle={toggleMenu} />
      </nav>
    </header>
  );
}