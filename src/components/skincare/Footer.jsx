import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#111111] text-white pt-24 pb-10 flex flex-col relative overflow-hidden">
      
      {/* Decorative top pink boxes strip */}
      <div className="absolute top-0 left-0 w-full h-40 bg-[#e4c2c2] flex gap-4 overflow-hidden">
         {/* Top down view boxes/bottles placeholders */}
         <div className="w-64 h-full bg-[#dbaaaa] border-r border-[#c29696]/20 relative object-contain mix-blend-multiply flex items-center justify-center">
            <span className="text-white/30 tracking-widest uppercase text-xs rotate-90">Cartons</span>
         </div>
         <div className="w-80 h-full bg-[#cc9b9b] border-r border-[#b08585]/20 flex items-center justify-center">
            <span className="text-white/30 tracking-widest uppercase text-xs -rotate-90">Essentials</span>
         </div>
         <div className="flex-1 bg-[#d6a5a5] border-[#b08585]/20 flex items-center justify-center overflow-hidden">
            <img src="/skincare/product_serum.png" className="h-[200px] object-contain drop-shadow-2xl mix-blend-multiply opacity-50 blur-[1px]" alt="Background serum"/>
         </div>
      </div>

      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col items-center mt-32 z-10 relative">

        {/* Text Input Block */}
        <div className="flex flex-col items-center text-center mt-12 mb-20 max-w-sm w-full">
           <h2 className="text-3xl font-light mb-8">
              HEAR MORE<br />
              <span className="font-serif italic font-medium">FROM US</span>
           </h2>
           <div className="flex w-full items-center border-b border-neutral-700 pb-2">
              <input 
                type="email" 
                placeholder="email address" 
                className="bg-transparent outline-none flex-1 text-sm tracking-wider text-neutral-300 placeholder:text-neutral-600 uppercase"
              />
              <button className="text-neutral-500 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </button>
           </div>
        </div>

        {/* Links Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-t border-neutral-800 pt-16 uppercase text-xs tracking-widest text-neutral-500 font-medium">
           <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-white transition-colors">Shop All</a>
              <a href="#" className="hover:text-white transition-colors">Bestsellers</a>
              <a href="#" className="hover:text-white transition-colors">Sets & Kits</a>
           </div>
           <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-white transition-colors">Our Story</a>
              <a href="#" className="hover:text-white transition-colors">Ingredients</a>
              <a href="#" className="hover:text-white transition-colors">Sustainability</a>
           </div>
           <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-white transition-colors">Visit Us</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
              <a href="#" className="hover:text-white transition-colors">FAQ</a>
           </div>
           <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-white transition-colors">Shipping</a>
              <a href="#" className="hover:text-white transition-colors">Returns</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
           </div>
        </div>

        {/* Bottom Logo & Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-neutral-600 text-xs gap-4">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 border border-neutral-700 rounded-full flex items-center justify-center">
                 <span className="font-serif italic font-medium">S.</span>
              </div>
              <span className="tracking-widest uppercase">Skincare</span>
           </div>
           <span>© 2026 Skincare Co. All rights reserved.</span>
        </div>

      </div>

    </footer>
  );
};
