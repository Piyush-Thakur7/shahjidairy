import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  const testimonials = [
    {
      name: 'Ramesh Kumar',
      role: 'Local Resident',
      quote: 'Shahji Dairy has been our trusted source for milk and paneer for years. The paneer is incredibly soft, and their sweet Rabdi is legendary in Sikandrabad! Highly recommended!',
      rating: 5,
      date: '2 weeks ago'
    },
    {
      name: 'Pooja Sharma',
      role: 'Home Maker',
      quote: 'If you want authentic, pure Desi Ghee, this is the place. I use their ghee for all festivals. We also dine at their restaurant frequently; their Chole Bhature cooked in ghee is out of this world.',
      rating: 4,
      date: '1 month ago'
    },
    {
      name: 'Amit Chaudhary',
      role: 'Food Blogger',
      quote: 'Excellent service and neat environment. Their Special Thali is value for money and extremely delicious. The quality of dairy ingredients they use in food is evident in every bite.',
      rating: 5,
      date: '3 weeks ago'
    },
    {
      name: 'Vikram Singh',
      role: 'Frequent Visitor',
      quote: 'A clean, well-managed restaurant and milk dairy. The Kesar Lassi is rich, thick, and not overly sweet. They maintain superb hygiene, which is very important to me.',
      rating: 4,
      date: '2 months ago'
    }
  ];

  const ratingBars = [
    { stars: 5, count: 412, percent: '78%' },
    { stars: 4, count: 85, percent: '16%' },
    { stars: 3, count: 20, percent: '4%' },
    { stars: 2, count: 8, percent: '1.5%' },
    { stars: 1, count: 5, percent: '0.5%' }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-[#FFF8E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-sm font-bold tracking-widest text-brand-orange uppercase block mb-2">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-green mb-4">
            Loved by Our Community
          </h2>
          <div className="h-1.5 w-24 bg-accent-red mx-auto rounded-full" />
        </div>

        {/* Rating Overview & Progress Bars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20 items-center bg-[#FFFBEF] p-8 sm:p-10 rounded-3xl border border-brand-green/5 shadow-md">
          {/* Rating Summary Left */}
          <div className="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            <h3 className="text-6xl sm:text-7xl font-black font-heading text-brand-green mb-2">4.0</h3>
            <div className="flex text-brand-orange mb-3">
              {[...Array(4)].map((_, i) => (
                <Star key={i} size={24} fill="currentColor" />
              ))}
              <Star size={24} className="opacity-30" />
            </div>
            <p className="text-sm text-charcoal/60 font-body">Based on 530 Google Reviews</p>
            <a
              href="https://google.com" // Google business search review link placeholder
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 text-sm font-bold text-accent-red hover:text-accent-red-light tracking-wider uppercase border-b-2 border-accent-red hover:border-accent-red-light pb-0.5 transition-colors"
            >
              Write a Google Review
            </a>
          </div>

          {/* Progress Bars Right */}
          <div className="lg:col-span-8 space-y-3.5">
            {ratingBars.map((bar) => (
              <div key={bar.stars} className="flex items-center text-sm font-body text-charcoal">
                <span className="w-10 text-right font-semibold">{bar.stars} ★</span>
                <div className="flex-grow h-3 bg-brand-green/5 rounded-full mx-4 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: bar.percent }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-brand-orange rounded-full"
                  />
                </div>
                <span className="w-12 text-left font-semibold text-charcoal/60">{bar.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              className="bg-[#FFFBEF] p-8 rounded-2xl border border-brand-green/5 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
            >
              <div>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-brand-green/10">
                  <Quote size={40} />
                </div>

                {/* Rating stars */}
                <div className="flex text-brand-orange mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                  {[...Array(5 - t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="opacity-30" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-charcoal/80 text-sm sm:text-base leading-relaxed font-body mb-6 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex justify-between items-center pt-4 border-t border-brand-green/5">
                <div>
                  <h4 className="font-heading font-bold text-brand-green text-base sm:text-lg">
                    {t.name}
                  </h4>
                  <p className="text-xs text-charcoal/50 font-body">
                    {t.role}
                  </p>
                </div>
                <span className="text-xs text-charcoal/40 font-body font-semibold">
                  {t.date}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
