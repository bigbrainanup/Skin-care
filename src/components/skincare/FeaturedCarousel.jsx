import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Revitalizing Night Repair Pump",
    price: "₹1,499",
    image: "/skincare/carousel_1.png",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Vitamin C Radiance Serum",
    price: "₹1,299",
    image: "/skincare/carousel_2.png",
    tag: "New Arrival"
  },
  {
    id: 3,
    name: "Deep Hydration Cream",
    price: "₹1,899",
    image: "/skincare/carousel_3.png",
    tag: "Trending"
  },
  {
    id: 4,
    name: "Balancing Essence Water",
    price: "₹999",
    image: "/skincare/carousel_4.png",
    tag: "Essential"
  }
];

export const FeaturedCarousel = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section id="features-carousel" className="w-full bg-[#fbfaf8] py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-neutral-500 mb-2">Curated Selection</h2>
            <h3 className="text-4xl md:text-6xl font-light tracking-tight text-neutral-900">
              Featured <span className="font-serif italic">favorites</span>
            </h3>
          </div>
          <div className="flex space-x-4 mt-8 md:mt-0">
            <button 
              onClick={scrollLeft}
              className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-14 h-14 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-600 hover:bg-neutral-900 hover:text-white transition-all duration-300 hover:scale-105"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={carouselRef}
          className="flex overflow-x-auto gap-6 md:gap-8 pb-12 pt-4 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:-mx-12 md:px-12"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {products.map((product) => (
            <div 
              key={product.id} 
              className="min-w-[280px] md:min-w-[340px] snap-center flex-shrink-0 group cursor-pointer"
            >
              <div className="relative bg-[#f2ede6] rounded-3xl overflow-hidden aspect-[4/5] mb-6 shadow-sm transition-all duration-500 group-hover:shadow-2xl translate-y-0 group-hover:-translate-y-2">
                <div className="absolute top-5 left-5 z-10">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.15em] text-neutral-800 font-semibold shadow-sm">
                    {product.tag}
                  </span>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] origin-center"
                />
                
                {/* Reveal overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 via-neutral-900/0 to-neutral-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Add to cart / Quick view button */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 bg-white text-neutral-900 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-neutral-900 hover:text-white w-[80%] text-center">
                  Quick View
                </div>
              </div>
              
              <div className="text-center px-4">
                <h4 className="text-lg font-medium text-neutral-900 mb-2">{product.name}</h4>
                <p className="text-neutral-500 font-serif italic text-lg">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
