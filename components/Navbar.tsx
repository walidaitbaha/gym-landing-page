"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-yellow-500/20">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-black text-yellow-400 tracking-wider">
          FIT<span className="text-white">ZONE</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-300 font-medium">
          <li><a href="#about" className="hover:text-yellow-400 transition-colors">About</a></li>
          <li><a href="#services" className="hover:text-yellow-400 transition-colors">Programs</a></li>
          <li><a href="#pricing" className="hover:text-yellow-400 transition-colors">Pricing</a></li>
          <li><a href="#testimonials" className="hover:text-yellow-400 transition-colors">Reviews</a></li>
          <li><a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a></li>
        </ul>

        
         <a  href="#contact"
          className="hidden md:block bg-yellow-400 text-black font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition-colors"
        >
          Join Now
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-6 flex flex-col gap-4">
          <a href="#about" className="text-gray-300 hover:text-yellow-400">About</a>
          <a href="#services" className="text-gray-300 hover:text-yellow-400">Programs</a>
          <a href="#pricing" className="text-gray-300 hover:text-yellow-400">Pricing</a>
          <a href="#testimonials" className="text-gray-300 hover:text-yellow-400">Reviews</a>
          <a href="#contact" className="text-gray-300 hover:text-yellow-400">Contact</a>
          <a href="#contact" className="bg-yellow-400 text-black font-bold px-6 py-2 rounded-full text-center">
            Join Now
          </a>
        </div>
      )}
    </nav>
  );
}