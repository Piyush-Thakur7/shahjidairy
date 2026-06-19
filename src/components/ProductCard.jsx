import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function ProductCard({ item, index }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: index * 0.05
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      className="group relative bg-[#FFFBEF] rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-brand-green/5 transition-all duration-500 flex flex-col justify-between"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Badge (e.g. 'Fresh Daily' or 'Popular') */}
      {item.badge && (
        <span className="absolute top-4 left-4 z-10 bg-accent-red text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-md animate-pulse">
          {item.badge}
        </span>
      )}

      {/* Image Container with Hover Zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-brand-green/5">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Details Container */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div>
          {/* Category */}
          <span className="text-xs font-bold tracking-widest text-brand-orange uppercase block mb-1">
            {item.category}
          </span>
          {/* Product Name */}
          <h3 className="text-xl font-bold font-heading text-brand-green mb-2 group-hover:text-accent-red transition-colors duration-300">
            {item.name}
          </h3>
          {/* Product Description */}
          <p className="text-charcoal/80 text-sm leading-relaxed mb-4 font-body line-clamp-2">
            {item.description}
          </p>
        </div>

        {/* Pricing & Call Action */}
        <div className="flex items-center justify-between pt-4 border-t border-brand-green/10 mt-auto">
          <div>
            <span className="text-xs text-charcoal/60 uppercase tracking-wide block">Price</span>
            <span className="text-lg font-extrabold text-brand-green font-heading">
              {item.price}
            </span>
          </div>

          <a
            href="tel:08979369874"
            className="flex items-center justify-center p-2.5 rounded-full bg-brand-green group-hover:bg-accent-red text-primary hover:scale-110 shadow transition-all duration-300"
            title="Order now by calling Shahji Dairy"
            aria-label={`Call to order ${item.name}`}
          >
            <Phone size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
