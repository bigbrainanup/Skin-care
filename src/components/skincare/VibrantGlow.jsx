import React from 'react';

export const VibrantGlow = () => {
  return (
    <section className="w-full bg-[#fbfaf8] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-8 items-center justify-center">
        
        {/* Left Side: Products Info */}
        <div className="w-full md:w-1/2 flex flex-col justify-center pr-0 md:pr-12">
          
          <div className="flex items-center justify-between mb-10 w-full">
             <h2 className="text-4xl md:text-5xl font-serif italic text-neutral-900 tracking-wide">
                Vibrant<br />Glow
             </h2>
             <div className="w-12 h-12 rounded-full border border-neutral-900 text-neutral-900 flex items-center justify-center cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors">
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
               </svg>
             </div>
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-2 gap-4">
             {/* Card 1 */}
             <div className="bg-[#e4dfd9] p-6 rounded-2xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer h-72">
                <div className="w-full flex justify-end">
                   <span className="text-neutral-500 text-xs border border-neutral-300 px-2 py-1 rounded-full uppercase tracking-widest">Iconic</span>
                </div>
                <img src="/skincare/product_serum.png" alt="Serum" className="h-40 object-contain drop-shadow-2xl mix-blend-multiply opacity-80" />
             </div>
             
             {/* Card 2 */}
             <div className="bg-[#dcd7d1] p-6 rounded-2xl flex flex-col items-center hover:-translate-y-2 transition-transform duration-500 cursor-pointer h-72">
                <div className="w-full flex justify-end">
                   <span className="text-neutral-500 text-xs border border-neutral-300 px-2 py-1 rounded-full uppercase tracking-widest">Awarded</span>
                </div>
                <img src="/skincare/product_serum.png" alt="Cream" className="h-40 object-contain drop-shadow-2xl mix-blend-multiply opacity-90 filter hue-rotate-[-10deg]" />
             </div>
          </div>
          
          <p className="mt-8 text-neutral-500 text-sm max-w-sm tracking-wide">
             Achieve that coveted dewy radiance with our vibrant glow collection, packed with superfoods for the skin.
          </p>

        </div>

        {/* Right Side: Large Image */}
        <div className="w-full md:w-1/2 rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-xl h-[600px]">
          <img 
            src="/skincare/glowing_face.png" 
            alt="Glowing skin close up" 
            className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-1000 origin-center"
          />
        </div>

      </div>
    </section>
  );
};
