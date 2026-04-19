import React from 'react';
import { Microscope, ShieldCheck, ArrowRight } from 'lucide-react';

export const Transparency = () => {
  return (
    <section className="relative w-full overflow-hidden" id="about">
      {/* Background Split */}
      <div className="absolute top-0 left-0 w-full h-[65%] lg:h-[55%] bg-[#f7f6f5] -z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-[35%] lg:h-[45%] bg-white -z-20"></div>

      <div className="max-w-[1400px] mx-auto px-6 py-20 relative z-10 w-full flex flex-col">
        
        {/* TOP SECTION: Headers */}
        <div className="w-full flex justify-between items-start relative mt-10">
          
          {/* Left Side Labels (Hidden on mobile) */}
          <div className="absolute left-0 top-0 hidden lg:flex flex-col gap-16 z-20">
             <div className="px-6 py-1.5 border border-neutral-300 rounded-full flex items-center justify-center bg-transparent w-max">
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500">ETHICS</span>
             </div>
             <div className="flex items-center gap-4 cursor-pointer group">
                <div className="w-12 h-12 bg-[#2d2d2d] rounded-full flex items-center justify-center text-white group-hover:bg-neutral-600 transition-colors">
                   <ArrowRight className="w-4 h-4 -rotate-45" strokeWidth={2} />
                </div>
                <span className="text-[10px] uppercase tracking-[0.15em] font-semibold text-neutral-800 w-24 leading-snug">
                   OUR<br/>PHILOSOPHY
                </span>
             </div>
          </div>

          {/* Center Giant Headers */}
          <div className="w-full flex flex-col items-center">
             <h2 className="text-[12vw] md:text-[145px] leading-[0.85] font-black text-[#2f2f2f] tracking-tighter uppercase whitespace-nowrap">
                RADICAL
             </h2>
             <h2 className="text-[12vw] md:text-[145px] leading-[0.85] font-black text-[#2f2f2f] tracking-tighter uppercase whitespace-nowrap">
                TRANSPARENCY.
             </h2>
             <div className="w-full flex justify-end xl:pr-10 mt-6 lg:mt-2">
                <span className="text-[10vw] md:text-[120px] font-serif italic text-[#2f2f2f] tracking-tight leading-[0.8]">
                   HIDE<br className="md:hidden" /> NOTHING.
                </span>
             </div>
          </div>
        </div>

        {/* MIDDLE SECTION: Text Blocks Right */}
        <div className="w-full flex justify-end mt-16 md:mt-24 lg:pr-16 relative z-40">
          <div className="flex flex-col max-w-[450px] gap-12">
            
            <div className="flex gap-6 items-start">
              <div className="mt-1 text-neutral-800">
                 <Microscope className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
              </div>
              <div className="flex-1 flex gap-8 bg-transparent">
                <h4 className="text-sm font-semibold text-neutral-800 leading-snug w-[120px] drop-shadow-md">100% Transparent Formulas</h4>
                <p className="text-[11px] text-neutral-600 leading-relaxed font-semibold drop-shadow-md">
                  We formulate to the highest standards of efficacy and safety - using only proven, verified ingredients in bio-compatible bases; and free from over 1500 questionable ingredients.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="mt-1 text-neutral-800">
                 <ShieldCheck className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
              </div>
              <div className="flex-1 flex gap-8 bg-transparent">
                <h4 className="text-sm font-semibold text-neutral-800 leading-snug w-[120px] drop-shadow-md">Only Verified Ingredients</h4>
                <p className="text-[11px] text-neutral-600 leading-relaxed font-semibold drop-shadow-md">
                  Skin care packed with anti oxidants, skin replenishing and skin restoring agents, instable pH levels that don't promise miracles but deliver real results.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* MIDDLE SECTION: Swatches Absolute */}
        <div className="absolute top-[25%] left-1/2 lg:left-[35%] -translate-x-1/2 w-[350px] md:w-[480px] lg:w-[550px] z-50 pointer-events-none drop-shadow-2xl">
            <img src="/skincare/transparency_smears.png" alt="Smear" className="w-full h-full object-contain -rotate-[15deg] mix-blend-multiply" />
        </div>

        {/* BOTTOM SECTION: Two Columns */}
        <div className="w-full flex flex-col lg:flex-row mt-32 md:mt-48 relative z-10">
          
          {/* Left: Dropper and Quality Text */}
          <div className="w-full lg:w-5/12 flex flex-col justify-end pb-12 lg:pb-24 pt-32 lg:pt-0">
              <div className="mb-8 w-[220px] mix-blend-multiply">
                  <img src="/skincare/transparency_dropper.png" alt="Dropper" className="w-full h-auto object-contain rounded-lg" />
              </div>
              <div className="inline-block border border-neutral-300 rounded-full px-5 py-1.5 mb-6 self-start bg-transparent">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-neutral-500">Quality</span>
              </div>
              <h3 className="text-[28px] md:text-3xl font-medium text-[#2d2d2d] leading-[1.2] mb-4 max-w-sm">
                  Only proven Ingredients,<br/>quality over quantity<br/>always!
              </h3>
              <p className="text-neutral-500 text-[11px] font-medium leading-[1.8] max-w-[280px]">
                  Its about what we don't put in. Squeaky clean formulas with over 1500 Negative Ingredients.
              </p>
          </div>

          {/* Right: Exciting Offers */}
          <div className="w-full lg:w-7/12 relative flex flex-col pt-16 px-8 md:px-16 lg:px-20 min-h-[500px] lg:h-[750px] z-0 overflow-hidden mt-12 lg:mt-0 lg:-mb-20">
              {/* Absolute background extending to right edge */}
              <div className="absolute top-0 bottom-0 left-0 w-[100vw] bg-[#ece7e1] -z-10"></div>
              
              {/* Title block */}
              <div className="flex flex-row justify-between items-start mb-6">
                 <div>
                    <h3 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tighter text-[#2d2d2d] leading-[1.1]">EXCITING</h3>
                    <h3 className="text-4xl md:text-5xl lg:text-[54px] font-bold tracking-tighter text-[#2d2d2d] leading-[1.1] flex flex-wrap items-baseline gap-3">
                       OFFERS <span className="font-serif italic font-normal text-3xl md:text-4xl tracking-tight text-neutral-600">awaits</span>
                    </h3>
                 </div>
                 <div className="flex flex-col items-center gap-2 pt-2 cursor-pointer group">
                    <button className="w-12 h-12 md:w-14 md:h-14 bg-[#2d2d2d] rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-105">
                       <ArrowRight className="w-5 h-5 -rotate-45" strokeWidth={1.5} />
                    </button>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#2d2d2d] border-b border-[#2d2d2d] mt-1">Shop Now</span>
                 </div>
              </div>
              <p className="text-[11px] font-medium text-neutral-500 mb-8 max-w-[240px] leading-relaxed">
                 Shop now to get a chance to win 2 extra products.<br/>Grab the offer before it ends.
              </p>

              {/* Product Image taking rest of available space */}
              <div className="w-full flex-1 relative flex justify-center items-end mt-auto">
                 <div className="w-[120%] h-full flex justify-center">
                   <img src="/skincare/transparency_offers.png" alt="Offers" className="w-[90%] md:w-[130%] h-auto object-contain object-bottom translate-y-4 lg:translate-y-16 mix-blend-multiply hover:scale-105 transition-transform duration-700 origin-bottom" />
                 </div>
              </div>
          </div>

        </div>

      </div>
    </section>
  );
};
