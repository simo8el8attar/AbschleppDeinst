import React from "react";
import { Menu, X } from "lucide-react";
import NavLink from "./NavLink";

interface MobileNavProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileNav({ isOpen, onToggle }: MobileNavProps) {
  return (
    <div className="md:hidden">
      <button
        onClick={onToggle}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4 space-y-4 animate-fadeIn">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/gallery">Gallery</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink href="tel:+212609759798" variant="button">
            Call Now
          </NavLink>
        </div>
      )}
    </div>
  );
}
