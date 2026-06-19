import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import MenuProducts from './sections/MenuProducts';
import Gallery from './sections/Gallery';
import Reviews from './sections/Reviews';
import InstagramFeed from './sections/Instagram';
import ContactLocation from './sections/ContactLocation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-primary overflow-x-hidden">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Us section */}
      <About />

      {/* Tabbed Menu & Products section */}
      <MenuProducts />

      {/* Gallery Showcase section */}
      <Gallery />

      {/* Customer Reviews section */}
      <Reviews />

      {/* Instagram Feed mockup section */}
      <InstagramFeed />

      {/* Contact & Map Location section */}
      <ContactLocation />

      {/* Footer section */}
      <Footer />
    </div>
  );
}
