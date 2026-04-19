import React from 'react';

export const JournalSocial = () => {
   return (
      <section className="w-full bg-white flex flex-col pt-20 lg:pt-24">

         {/* Top Half: Journal & Info */}
         <div className="w-full bg-[#1c1c1c] pt-20 pb-24">
            <div className="w-full max-w-[1400px] mx-auto px-6 flex flex-col lg:flex-row gap-12 lg:gap-16">

               {/* Left Side: Featured Card */}
               <div className="w-full lg:w-[48%] flex flex-col bg-white overflow-hidden">
                  <div className="relative w-full h-[300px] md:h-[450px] lg:h-[500px]">
                     <img src="/skincare/journal_featured.png" alt="Featured" className="w-full h-full object-cover" />
                     <div className="absolute top-6 left-6 z-10 bg-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full text-neutral-800">Featured</div>
                  </div>

                  <div className="p-8 md:p-10 flex flex-col flex-1 text-black bg-white">
                     <h3 className="text-xl md:text-2xl font-medium mb-4 text-[#2d2d2d] leading-snug">Beauty Secrets from Around the World: Rituals and Ingredients You Need to Try</h3>
                     <p className="text-[11px] md:text-xs text-neutral-500 mb-10 leading-relaxed font-medium">Drawing from our rich ayurvedic legacy of over 30 years and embracing dermal science, we aim to create transparent skincare that is incredibly effective, safe and without harming the environment or the planet.</p>
                     <div className="mt-auto flex justify-between items-center text-[10px] uppercase font-bold tracking-widest text-[#2d2d2d]">
                        <span>8 Feb 2025</span>
                        <button className="border-b border-[#2d2d2d] pb-0.5">Read more</button>
                     </div>
                  </div>
               </div>

               {/* Right Side: Journal Header & Small articles */}
               <div className="w-full lg:w-[52%] flex flex-col mt-4 lg:mt-0 xl:px-8">

                  {/* Header */}
                  <div className="text-center mb-12 flex flex-col items-center">
                     <h2 className="text-6xl md:text-7xl font-light italic font-serif text-white leading-none">clean</h2>
                     <h2 className="text-4xl md:text-5xl font-bold tracking-widest text-white mt-1 uppercase">Journal</h2>
                     <p className="text-[11px] font-medium text-neutral-400 mt-4 max-w-[280px]">Healty tips on skincare, regimen and overall a better lifestyle.</p>
                  </div>

                  {/* Small Cards */}
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">

                     {/* Small Card 1 */}
                     <div className="w-full flex flex-col bg-white">
                        <div className="w-full h-[180px] md:h-[220px]">
                           <img src="/skincare/journal_small_left.png" alt="Article" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="p-6 flex flex-col flex-1 text-black bg-white">
                           <h4 className="text-xs font-semibold mb-6 text-[#2d2d2d] leading-relaxed">Your Skincare and Makeup Routine Impacts Your Well-Being</h4>
                           <div className="mt-auto flex justify-between items-center text-[9px] uppercase font-bold tracking-widest text-[#2d2d2d]">
                              <span>20 Dec 2024</span>
                              <button className="border-b border-[#2d2d2d] pb-0.5">Read more</button>
                           </div>
                        </div>
                     </div>

                     {/* Small Card 2 */}
                     <div className="w-full flex flex-col bg-white">
                        <div className="w-full h-[180px] md:h-[220px]">
                           <img src="/skincare/journal_small_right.png" alt="Article" className="w-full h-full object-cover object-center" />
                        </div>
                        <div className="p-6 flex flex-col flex-1 text-black bg-white">
                           <h4 className="text-xs font-semibold mb-6 text-[#2d2d2d] leading-relaxed">How to Make Your Routine More Eco-Friendly</h4>
                           <div className="mt-auto flex justify-between items-center text-[9px] uppercase font-bold tracking-widest text-[#2d2d2d]">
                              <span>25 Jan 2025</span>
                              <button className="border-b border-[#2d2d2d] pb-0.5">Read more</button>
                           </div>
                        </div>
                     </div>

                  </div>

                  {/* See All Button */}
                  <div className="flex flex-col items-center mt-12 cursor-pointer group">
                     <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center group-hover:bg-neutral-200 transition-colors">
                        <svg className="w-5 h-5 text-[#2d2d2d]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M7 17L17 7" /></svg>
                     </div>
                     <span className="text-[10px] uppercase font-bold tracking-widest text-white mt-4 border-b border-transparent group-hover:border-white transition-all pb-0.5">See All</span>
                  </div>

               </div>

            </div>
         </div>

         {/* Bottom Half: Connect With Us Grid */}
         <div className="w-full bg-white flex flex-col items-center pt-24 md:pt-32">

            {/* Title: CONNECT WITH US */}
            <h2 className="text-5xl md:text-6xl lg:text-[75px] font-bold tracking-tighter text-[#2a2a2a] leading-[0.9] text-center z-20 relative">
                CONNECT<br/>WITH US
            </h2>

            <div className="relative w-full max-w-[1100px] mt-[-2rem] md:mt-[-3.5rem] flex justify-center mx-auto px-4 md:px-8">

               {/* Center Image */}
               <div className="w-[85%] md:w-[65%] max-w-[650px] relative z-10">
                  <img src="/skincare/connect_center.png" className="w-full h-auto object-cover block" alt="Center Face" />

                  {/* Text: on instag ram */}
                  <div className="absolute left-1/2 -translate-x-1/2 -bottom-24 md:-bottom-36 text-center w-[150%] z-30 pointer-events-none">
                      <h3 className="text-6xl md:text-[6rem] lg:text-[110px] font-light italic font-serif text-[#2a2a2a] leading-[0.8] tracking-tighter mix-blend-multiply">
                          <span className="inline-block transform -translate-x-6 md:-translate-x-10">on</span><br/>
                          <span className="inline-block">instag</span><br/>
                          <span className="inline-block transform translate-x-4 md:translate-x-8">ram</span>
                      </h3>
                  </div>
               </div>

               {/* Left Image + Text */}
               <div className="absolute left-2 md:left-4 top-[15%] md:top-[18%] w-[25%] md:w-[18%] z-20">
                  <img src="/skincare/connect_left.png" className="w-full h-auto object-cover shadow-sm" alt="Left Massage" />
                  <p className="text-[7px] md:text-[9px] text-[#6a6a6a] font-medium mt-3 md:mt-5 leading-[1.6] max-w-[120px] md:max-w-[140px]">
                     Get the latest news about skincare tips and new products.
                  </p>
               </div>

               {/* Right Image */}
               <div className="absolute right-2 md:right-4 bottom-[-10%] md:bottom-[-5%] w-[32%] md:w-[22%] z-20">
                  <img src="/skincare/connect_right.png" className="w-full h-auto object-cover shadow-md" alt="Right Glowing Faces" />
               </div>

            </div>

            {/* Instagram Button */}
            <div className="mt-36 md:mt-48 mb-20 md:mb-28 z-40 relative shadow-sm hover:shadow-md transition-shadow rounded-full">
               <button className="flex items-center gap-6 md:gap-12 border border-[#eaeaea] rounded-full pl-8 md:pl-10 pr-1.5 md:pr-1.5 py-1.5 md:py-1.5 bg-white">
                  <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-[#2a2a2a]">Instagram</span>
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-[#3a3a3a] rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-black transition-colors">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="1.5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="1.5"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2" strokeLinecap="round"></line>
                     </svg>
                  </div>
               </button>
            </div>

            {/* Banner Image */}
            <div className="w-full border-t border-[#f2f2f2]">
               <img src="/skincare/connect_banner.png" className="w-full h-auto object-cover object-center max-h-[700px]" alt="Products Banner" />
            </div>

         </div>

      </section>
   );
};
