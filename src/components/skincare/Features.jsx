import React from 'react';

export const Features = () => {
  return (
    <section className="w-full bg-[#fbfaf8] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        {/* Header */}
        <div className="w-full mb-16 flex justify-between items-start">
          <h2 className="text-3xl md:text-5xl font-light max-w-lg text-neutral-900 leading-tight">
            CLEAN, CONSCIOUS,<br />
            <span className="font-semibold tracking-tight">PERFORMANCE</span><br />
            <span className="italic font-serif">skincare.</span>
          </h2>
        </div>

        {/* Hero Illustration Container */}
        <div className="relative w-full max-w-4xl flex justify-center items-center py-12 min-h-[580px]">

          {/* Center Organic Shape — animations preserved */}
          <div className="relative w-[320px] h-[420px] md:w-[420px] md:h-[520px]">
            <div className="absolute inset-0 bg-[#e8dad0] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] overflow-hidden shadow-2xl transition-all duration-700 hover:rounded-[30%_60%_70%_40%/50%_60%_30%_60%] z-0">
              <img
                src="/skincare/feature_smile.png"
                alt="Happy glowing woman"
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity mix-blend-multiply"
              />
            </div>
            <div className="absolute -bottom-16 -left-12 md:-bottom-24 md:-left-20 w-[140px] md:w-[180px] z-10 animate-float drop-shadow-2xl">
              <img src="/skincare/orange_peel.png" alt="Orange Peel" className="w-full h-auto object-contain" />
            </div>
            <div className="absolute top-[28%] -right-10 md:-right-14 w-[80px] md:w-[110px] z-10 animate-float drop-shadow-2xl" style={{ animationDelay: '1s' }}>
              <img src="/skincare/green_leaf.png" alt="Green Leaf" className="w-full h-auto object-contain" />
            </div>
          </div>

          {/* Card 1 - Radical Transparency — upper left */}
          <div className="absolute left-0 top-[8%] bg-white shadow-lg rounded-3xl p-5 w-48 text-left">
            <svg className="mb-3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-800 mb-1">Radical Transparency</p>
            <p className="text-xs text-neutral-500 leading-snug">No black boxes, nothing to hide, we disclose our full formulas, so you will never have to guess what's in it.</p>
          </div>

          {/* Card 2 - Clean Beyond Reproach — lower left */}
          <div className="absolute left-0 bottom-[18%] bg-white shadow-lg rounded-3xl p-5 w-48 text-left">
            <svg className="mb-3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5">
              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/>
            </svg>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-800 mb-1">Clean, Beyond Reproach</p>
            <p className="text-xs text-neutral-500 leading-snug">Truly clean with only verified ingredients; free from over 1800 questionable ingredients.</p>
          </div>

          {/* Card 3 - Conscious & Responsible — upper right */}
          <div className="absolute right-0 top-[30%] bg-white shadow-lg rounded-3xl p-5 w-48 text-left">
            <svg className="mb-3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l7.78 7.78 7.78-7.78a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-800 mb-1">Conscious & Responsible</p>
            <p className="text-xs text-neutral-500 leading-snug">Peta Certified Vegan and Cruelty Free. Made sustainably.</p>
          </div>

          {/* Card 4 - Potent & Multi Tasking — lower right */}
          <div className="absolute right-0 bottom-[8%] bg-white shadow-lg rounded-3xl p-5 w-48 text-left">
            <svg className="mb-3" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#aaa" strokeWidth="1.5">
              <path d="M9 3h6m-5 6-4 12h12L14 9"/><path d="M3 3h18"/>
            </svg>
            <p className="text-[11px] font-semibold uppercase tracking-widest text-neutral-800 mb-1">Potent & Multi Tasking</p>
            <p className="text-xs text-neutral-500 leading-snug">Expert formulated for real, visible results.</p>
          </div>

          {/* Bottom Right Text */}
          <div className="absolute right-6 md:right-20 bottom-4 flex flex-col items-end">
            <span className="uppercase text-sm tracking-[0.2em] font-light text-neutral-500"></span>
            <span className="font-serif italic text-3xl text-neutral-900"></span>
            <div className="w-10 h-[1px] bg-neutral-800 mt-2"></div>
          </div>

        </div>
      </div>
    </section>
  );
};