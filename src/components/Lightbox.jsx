import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ images, currentIndex, setCurrentIndex, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (currentIndex === null) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-primary/80 hover:text-primary bg-brand-green/20 hover:bg-brand-green/80 p-3 rounded-full transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          aria-label="Close Lightbox"
        >
          <X size={24} />
        </button>

        {/* Previous Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrev();
          }}
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 text-primary/80 hover:text-primary bg-brand-green/20 hover:bg-brand-green/80 p-3 rounded-full transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Image Content Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="relative max-w-4xl max-h-[80vh] flex flex-col items-center select-none"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].caption || 'Gallery Image'}
            className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border-2 border-brand-green/30"
          />
          {images[currentIndex].caption && (
            <div className="mt-4 bg-brand-green/90 px-6 py-2 rounded-full shadow-lg border border-brand-orange/30 max-w-sm sm:max-w-md text-center">
              <span className="text-primary font-heading font-semibold text-sm sm:text-base">
                {images[currentIndex].caption}
              </span>
            </div>
          )}
        </motion.div>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 text-primary/80 hover:text-primary bg-brand-green/20 hover:bg-brand-green/80 p-3 rounded-full transition-all duration-300 z-50 focus:outline-none focus:ring-2 focus:ring-brand-orange"
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </button>

        {/* Counter Overlay */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-primary/60 font-body text-sm select-none">
          {currentIndex + 1} / {images.length}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
