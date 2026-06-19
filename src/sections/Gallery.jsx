import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import Lightbox from '../components/Lightbox';

// Local images
import heroBg from '../assets/hero_bg.png';
import interiorImg from '../assets/interior.png';
import foodShowcase from '../assets/food_showcase.png';
import dairyShowcase from '../assets/dairy_showcase.png';

export default function Gallery() {
  const [photoIndex, setPhotoIndex] = useState(null);

  const galleryImages = [
    {
      src: foodShowcase,
      caption: 'Traditional North Indian Deluxe Thali'
    },
    {
      src: dairyShowcase,
      caption: 'Our Range of Freshly Made Dairy Products'
    },
    {
      src: interiorImg,
      caption: 'Cozy and Premium Dining Room Ambiance'
    },
    {
      src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=800',
      caption: 'Sizzling Tandoori Paneer Tikka Starters'
    },
    {
      src: heroBg,
      caption: 'Fresh Milk Sourced Daily from Local Farms'
    },
    {
      src: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=800',
      caption: 'Creamy Sweet Kesar Lassi topped with Malai'
    },
    {
      src: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=800',
      caption: 'Hot & Spiced Desi Ghee Chole Bhature'
    },
    {
      src: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=800',
      caption: 'Traditional Milk Sweets Prepared by Hand'
    },
    {
      src: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&q=80&w=800',
      caption: 'Farm-Churned Creamy Table Butter'
    }
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-[#FFFBEF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-sm font-bold tracking-widest text-brand-orange uppercase block mb-2">Visual Tour</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-green mb-4">
            Our Gallery & Ambiance
          </h2>
          <div className="h-1.5 w-24 bg-accent-red mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="relative overflow-hidden rounded-2xl shadow-md group cursor-pointer aspect-[4/3] bg-brand-green/5 border border-brand-green/5"
              onClick={() => setPhotoIndex(index)}
            >
              {/* Image */}
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 select-none"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-green/80 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 flex flex-col justify-center items-center p-6 text-center">
                <Maximize2 className="text-brand-orange mb-3 transform scale-75 group-hover:scale-100 transition-transform duration-300" size={28} />
                <span className="text-primary font-heading font-semibold text-lg max-w-[240px] transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {photoIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={photoIndex}
          setCurrentIndex={setPhotoIndex}
          onClose={() => setPhotoIndex(null)}
        />
      )}
    </section>
  );
}
