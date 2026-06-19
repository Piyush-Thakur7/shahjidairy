import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section highlight logic
      const sections = navLinks.map(link => document.querySelector(link.href));
      const scrollPosition = window.scrollY + 120; // offset for sticky header

      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(navLinks[i].href.substring(1));
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.offsetTop - 80; // offset header height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-green/95 shadow-lg backdrop-blur-md py-3 text-primary'
          : 'bg-transparent py-5 text-brand-green'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('#home');
            }}
            className="flex items-center space-x-3 group"
          >
            <div className="h-11 w-11 rounded-full overflow-hidden border-2 border-brand-orange shadow-md bg-yellow-400 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <img src={logoImg} alt="Shahji Dairy Logo" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col">
              <span className={`text-xl sm:text-2xl font-heading font-extrabold tracking-tight leading-none transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-brand-green'}`}>
                Shahji Dairy
              </span>
              <span className={`text-[10px] tracking-widest font-accent mt-0.5 ${scrolled ? 'text-brand-orange-light' : 'text-brand-orange'}`}>
                Restaurant & Milk Supplier
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => {
              const linkId = link.href.substring(1);
              const isActive = activeSection === linkId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={`relative text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                    scrolled
                      ? isActive ? 'text-brand-orange-light font-semibold' : 'text-primary/80 hover:text-primary'
                      : isActive ? 'text-brand-orange font-semibold' : 'text-brand-green/80 hover:text-brand-green'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeUnderline"
                      className={`absolute left-0 right-0 bottom-[-6px] h-[2px] rounded ${scrolled ? 'bg-brand-orange-light' : 'bg-brand-orange'}`}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Call CTA and Menu Toggler */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:08979369874"
              className="hidden sm:flex items-center space-x-2 px-5 py-2.5 rounded-full bg-accent-red hover:bg-accent-red-light text-primary text-sm font-semibold tracking-wider uppercase shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300 shimmer-btn"
            >
              <Phone size={16} />
              <span>Call Now</span>
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors focus:outline-none ${scrolled ? 'text-primary hover:bg-brand-green-light' : 'text-brand-green hover:bg-brand-green/10'}`}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-brand-green border-t border-brand-green-light text-primary shadow-2xl overflow-y-auto max-h-[calc(100vh-80px)]"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => {
                const linkId = link.href.substring(1);
                const isActive = activeSection === linkId;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`block px-4 py-3 rounded-lg text-base font-semibold tracking-wide uppercase transition-all ${
                      isActive
                        ? 'bg-brand-orange text-brand-green font-bold shadow-md'
                        : 'hover:bg-brand-green-light/40 hover:pl-6 text-primary/90'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-4 border-t border-brand-green-light flex flex-col items-center">
                <a
                  href="tel:08979369874"
                  className="w-full flex justify-center items-center space-x-2 py-3 rounded-xl bg-accent-red hover:bg-accent-red-light text-primary text-base font-bold tracking-widest uppercase shadow-md transition-all duration-300"
                >
                  <Phone size={18} />
                  <span>08979369874</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
