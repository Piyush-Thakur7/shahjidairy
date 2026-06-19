import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Utensils, Star } from 'lucide-react';
import heroBg from '../assets/hero_bg.png';
import logoImg from '../assets/logo.png';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 200, damping: 15 }
    }
  };

  const handleScrollToMenu = (e) => {
    e.preventDefault();
    const element = document.querySelector('#menu');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-primary pt-16">
      {/* Background Image Container with Parallax & Gradient */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center select-none"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundAttachment: 'scroll', // fallbacks to scroll on touch devices
            transform: 'scale(1.05)',
          }}
        />
        {/* Multilayer gradient: dark forest green overlay + warm cream fading */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-green/95 via-brand-green/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-brand-green/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full text-primary">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-2xl text-left"
        >
          {/* Badge */}
          <motion.div variants={badgeVariants} className="inline-flex items-center space-x-2 bg-brand-orange/20 border border-brand-orange/40 backdrop-blur-md rounded-full px-4.5 py-1.5 mb-6 shadow-lg">
            <div className="flex text-brand-orange">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
              <Star size={14} className="opacity-50" />
            </div>
            <span className="text-sm font-semibold tracking-wider text-primary">
              4.0 Rating · 530 Google Reviews
            </span>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="flex items-center space-x-4 mb-4 mt-2">
            <div className="h-16 w-16 sm:h-20 sm:w-20 rounded-full overflow-hidden border-3 border-brand-orange shadow-xl bg-yellow-400 flex-shrink-0 flex items-center justify-center">
              <img src={logoImg} alt="Shahji Logo" className="h-full w-full object-cover" />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-tight tracking-tight">
              Shahji Dairy
            </h1>
          </motion.div>

          {/* Tagline / Accent Text */}
          <motion.p 
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-accent text-brand-orange-light tracking-wide mb-6"
          >
            "Pure Dairy, Authentic Taste — Straight from Sikandrabad"
          </motion.p>

          {/* Body Intro */}
          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg text-primary/80 leading-relaxed font-body max-w-lg mb-10"
          >
            Savor the creamy richness of our fresh farm-to-table milk products and indulge in traditional mouthwatering North Indian culinary heritage. Built on local trust and pure ingredients.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="tel:08979369874"
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-accent-red hover:bg-accent-red-light text-primary font-bold tracking-widest uppercase shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 shimmer-btn"
            >
              <Phone size={18} />
              <span>Call 08979369874</span>
            </a>

            <a
              href="#menu"
              onClick={handleScrollToMenu}
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-transparent hover:bg-primary/10 border-2 border-primary text-primary font-bold tracking-widest uppercase transition-all duration-300"
            >
              <Utensils size={18} />
              <span>View Our Menu</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom organic curve decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 w-full overflow-hidden z-20">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 w-full h-full text-primary">
          <path d="M0,32L120,48C240,64,480,96,720,96C960,96,1200,64,1320,48L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
}
