import React from 'react';
import { Hero } from './components/skincare/Hero';
import { Features } from './components/skincare/Features';
import { ProductShowcase } from './components/skincare/ProductShowcase';
import { FeaturedCarousel } from './components/skincare/FeaturedCarousel';
import { VibrantGlow } from './components/skincare/VibrantGlow';
import { Transparency } from './components/skincare/Transparency';
import { JournalSocial } from './components/skincare/JournalSocial';
import { Footer } from './components/skincare/Footer';

function App() {
    return (
        <div className="min-h-screen font-sans text-neutral-900 overflow-x-hidden selection:bg-orange-100 selection:text-orange-900 bg-[#fbfaf8]">
            {/* The individual sections are stacked vertically to recreate the visual design */}
            <main>
                <Hero />
                <Features />
                <div id="shop"><ProductShowcase /></div>
                <FeaturedCarousel />
                <VibrantGlow />
                <div id="about"><Transparency /></div>
                <div id="journal"><JournalSocial /></div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
