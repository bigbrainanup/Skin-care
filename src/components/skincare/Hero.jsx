import React from 'react';

export const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex flex-col items-center justify-between pt-6 pb-12 overflow-hidden">
      {/* Background Image Setup */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/skincare/hero_face.png')" }}
      >
        {/* Subtle overlay for text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Top Navigation */}
      <nav className="w-full max-w-7xl mx-auto px-6 z-10 flex items-center justify-between text-white">
        <div className="text-xl tracking-widest font-semibold uppercase">Skincare.</div>
        <div className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-wide">
          <a href="#shop" className="hover:opacity-75 transition-opacity">Shop</a>
          <a href="#about" className="hover:opacity-75 transition-opacity">About</a>
          <a href="#philosophy" className="hover:opacity-75 transition-opacity">Philosophy</a>
          <a href="#journal" className="hover:opacity-75 transition-opacity">Journal</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="hover:opacity-75 transition-opacity uppercase text-sm">Cart (0)</button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="z-10 text-center text-white mt-12 flex-1 flex flex-col items-center justify-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-balance leading-tight mb-6">
          <span className="block font-serif italic mb-2">True to Oneself</span>
          <span className="block">kind to Nature</span>
        </h1>
      </div>

      {/* Bottom Floating Bar */}
      <a href="#features-carousel" className="z-10 w-full max-w-sm mx-auto bg-white/90 backdrop-blur-md rounded-full px-6 py-3 flex items-center justify-between text-neutral-800 shadow-xl cursor-pointer hover:bg-white transition-colors duration-300">
        <span className="text-sm font-medium uppercase tracking-wider">Discover Collection</span>
        <div className="w-8 h-8 rounded-full bg-neutral-900 flex items-center justify-center text-white">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </a>
    </section>
  );
};
