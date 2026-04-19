import React from 'react';

export const ProductShowcase = () => {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Heading */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
          <div>
            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-neutral-900">
              EXPLORE
            </h1>
            <h2 className="text-5xl md:text-6xl font-serif italic text-neutral-900 tracking-wide -mt-3">
              pure potency
            </h2>
          </div>

          {/* Optional Tag / Description Box (like in the image) */}
          
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Side: Large Image */}
          <div className="w-full md:w-1/2 rounded-bl-[100px] rounded-tr-[100px] overflow-hidden shadow-2xl h-[620px]">
            <img 
              src="/skincare/hero_face.png" 
              alt="Woman with skincare" 
              className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 origin-center"
            />
          </div>

          {/* Right Side: Products Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl md:text-5xl font-serif italic text-neutral-900 tracking-wide">
                Pure<br />Brilliance
              </h2>
              <div className="w-12 h-12 rounded-full bg-neutral-900 text-white flex items-center justify-center cursor-pointer hover:bg-neutral-800 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="bg-[#f2d8d8] p-6 rounded-3xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer h-80">
                <div className="w-full flex justify-end mb-4">
                  <span className="text-white text-xs border border-white/60 px-3 py-1 rounded-full uppercase tracking-widest">New</span>
                </div>
                <img 
                  src="/skincare/product_serum.png" 
                  alt="AHA Brightening Exfoliant Cleanser" 
                  className="h-44 object-contain drop-shadow-2xl mix-blend-multiply" 
                />
                <div className="mt-auto text-center">
                  <p className="font-medium text-sm">AHA BRIGHTENING EXFOLIANT<br />CLEANSER/FACE WASH</p>
                  <p className="text-xs text-neutral-500 mt-1">₹999</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#f0e4db] p-6 rounded-3xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer h-80">
                <div className="w-full flex justify-end mb-4">
                  <span className="text-neutral-500 text-xs border border-neutral-300 px-3 py-1 rounded-full uppercase tracking-widest">Bestseller</span>
                </div>
                <img 
                  src="/skincare/product_serum.png" 
                  alt="Bio Exfoliant Brightening Sleeping Mask" 
                  className="h-44 object-contain drop-shadow-2xl mix-blend-multiply filter hue-rotate-15" 
                />
                <div className="mt-auto text-center">
                  <p className="font-medium text-sm">BIO EXFOLIANT BRIGHTENING<br />SLEEPING MASK</p>
                  <p className="text-xs text-neutral-500 mt-1">₹899</p>
                </div>
              </div>
            </div>

            <p className="mt-10 text-neutral-500 text-sm max-w-sm tracking-wide">
              STAY GLOWING AND HEALTHY WITHOUT HAVING TO THINK ABOUT IT.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};