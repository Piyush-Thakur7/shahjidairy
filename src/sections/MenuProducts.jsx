import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProductCard from '../components/ProductCard';

// Local images fallback
import dairyShowcase from '../assets/dairy_showcase.png';
import foodShowcase from '../assets/food_showcase.png';

export default function MenuProducts() {
  const [activeTab, setActiveTab] = useState('restaurant');

  const dairyProducts = [
    {
      name: 'Fresh Cow Milk',
      category: 'Pure Dairy',
      description: 'Raw, unpasteurized high-fat cow milk collected daily from local farms.',
      price: '₹65 / Litre',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400',
      badge: 'Best Seller'
    },
    {
      name: 'Premium Buffalo Milk',
      category: 'Pure Dairy',
      description: 'Rich, thick buffalo milk, perfect for home-made curd, sweets, and tea.',
      price: '₹75 / Litre',
      image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400',
      badge: 'Farm Fresh'
    },
    {
      name: 'Fresh Paneer (Cottage Cheese)',
      category: 'Homemade',
      description: 'Super soft, melt-in-the-mouth paneer made fresh every morning.',
      price: '₹360 / Kg',
      image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&q=80&w=400',
      badge: 'Fresh Daily'
    },
    {
      name: 'Pure Desi Ghee',
      category: 'Pure Dairy',
      description: 'Aromatic, granular Cow Ghee churned using traditional Bilona method.',
      price: '₹680 / Litre',
      image: 'https://images.unsplash.com/photo-1622484211148-7164999a416b?auto=format&fit=crop&q=80&w=400',
      badge: 'Traditional'
    },
    {
      name: 'Thick Curd (Dahi)',
      category: 'Homemade',
      description: 'Creamy, thick curd set naturally in clay pots for authentic taste.',
      price: '₹80 / Kg',
      image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400',
      badge: 'Probiotic'
    },
    {
      name: 'Fresh Khoya (Mawa)',
      category: 'Sweet Maker',
      description: 'Slow-condensed whole milk solids, essential for making Indian sweets.',
      price: '₹320 / Kg',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400',
      badge: 'Pure'
    }
  ];

  const restaurantMenu = [
    {
      name: 'Shahji Special Paneer Tikka',
      category: 'Starters',
      description: 'Clay-oven grilled paneer cubes marinated in yogurt, saffron and secret spices.',
      price: '₹220',
      image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=400',
      badge: 'Signature'
    },
    {
      name: 'Desi Ghee Chole Bhature',
      category: 'Main Course',
      description: 'Fluffy large bhature served with spicy chickpea curry, cooked in pure desi ghee.',
      price: '₹140',
      image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400',
      badge: 'Hot Seller'
    },
    {
      name: 'Shahji Special Veg Thali',
      category: 'Platter',
      description: 'Complete meal: Dal Makhani, Shahi Paneer, Raita, Jeera Rice, 2 Butter Roti & Sweet.',
      price: '₹260',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400',
      badge: 'Popular'
    },
    {
      name: 'Desi Ghee Dal Makhani',
      category: 'Main Course',
      description: 'Slow-cooked black lentils simmered overnight, enriched with fresh butter and cream.',
      price: '₹180',
      image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400',
      badge: 'Creamy'
    },
    {
      name: 'Traditional Sweet Rabdi',
      category: 'Desserts',
      description: 'Thickened sweetened milk layers, garnished with saffron, almonds, and pistachios.',
      price: '₹90 / Plate',
      image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400',
      badge: 'Legendary'
    },
    {
      name: 'Creamy Kesar Lassi',
      category: 'Beverages',
      description: 'Rich churned yogurt sweet drink, flavored with saffron threads and loaded with malai.',
      price: '₹70',
      image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=400',
      badge: 'Refreshing'
    }
  ];

  const currentItems = activeTab === 'restaurant' ? restaurantMenu : dairyProducts;

  return (
    <section id="menu" className="py-20 lg:py-28 bg-[#FFF8E7] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-sm font-bold tracking-widest text-brand-orange uppercase block mb-2">Our Offerings</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-green mb-4">
            Fresh Dairy & Culinary Delights
          </h2>
          <div className="h-1.5 w-24 bg-accent-red mx-auto rounded-full" />
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="relative bg-[#FFFBEF] border border-brand-green/10 p-1.5 rounded-full flex shadow-md">
            
            {/* Restaurant Tab Button */}
            <button
              onClick={() => setActiveTab('restaurant')}
              className={`relative px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base font-bold tracking-wider uppercase transition-colors duration-300 z-10 focus:outline-none ${
                activeTab === 'restaurant' ? 'text-primary' : 'text-brand-green'
              }`}
            >
              Restaurant Menu
              {activeTab === 'restaurant' && (
                <motion.span
                  layoutId="activeMenuTab"
                  className="absolute inset-0 bg-brand-green rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>

            {/* Dairy Tab Button */}
            <button
              onClick={() => setActiveTab('dairy')}
              className={`relative px-6 sm:px-10 py-3 rounded-full text-sm sm:text-base font-bold tracking-wider uppercase transition-colors duration-300 z-10 focus:outline-none ${
                activeTab === 'dairy' ? 'text-primary' : 'text-brand-green'
              }`}
            >
              Dairy Products
              {activeTab === 'dairy' && (
                <motion.span
                  layoutId="activeMenuTab"
                  className="absolute inset-0 bg-brand-green rounded-full -z-10"
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                />
              )}
            </button>

          </div>
        </div>

        {/* Items Grid */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {currentItems.map((item, index) => (
                <ProductCard key={item.name} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom Banner Info */}
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-charcoal/70 text-sm sm:text-base font-body mb-4">
            * We also take bulk orders for weddings, festivals, and parties.
          </p>
          <a
            href="tel:08979369874"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-primary font-bold tracking-wider uppercase shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
          >
            <span>Call for Bulk Orders</span>
          </a>
        </div>

      </div>
    </section>
  );
}
