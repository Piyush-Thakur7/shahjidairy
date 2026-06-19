import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle } from 'lucide-react';

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function InstagramFeed() {
  const posts = [
    {
      src: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&q=80&w=400',
      likes: '342',
      comments: '24'
    },
    {
      src: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&q=80&w=400',
      likes: '489',
      comments: '36'
    },
    {
      src: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&q=80&w=400',
      likes: '298',
      comments: '18'
    },
    {
      src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400',
      likes: '512',
      comments: '44'
    },
    {
      src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=400',
      likes: '190',
      comments: '12'
    },
    {
      src: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=400',
      likes: '450',
      comments: '31'
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFBEF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Instagram className="text-brand-orange mx-auto mb-4 animate-bounce" size={40} />
          <span className="text-sm font-bold tracking-widest text-brand-orange uppercase block mb-2">Connect With Us</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-green mb-4">
            Follow @shahjidairyofficial
          </h2>
          <div className="h-1.5 w-24 bg-accent-red mx-auto rounded-full" />
          <p className="text-charcoal/70 text-sm sm:text-base font-body mt-4 max-w-md mx-auto">
            Get daily updates on dairy stock freshness, special kitchen lunch menus, and farm highlights.
          </p>
        </div>

        {/* Instagram Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={index}
              href="https://instagram.com/shahjidairyofficial"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl group shadow-sm"
            >
              {/* Photo */}
              <img
                src={post.src}
                alt="Instagram post thumbnail"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Hover Feed Overlay */}
              <div className="absolute inset-0 bg-brand-green/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-6 text-primary">
                <span className="flex items-center space-x-1.5 text-sm font-bold font-body">
                  <Heart size={16} fill="currentColor" />
                  <span>{post.likes}</span>
                </span>
                <span className="flex items-center space-x-1.5 text-sm font-bold font-body">
                  <MessageCircle size={16} fill="currentColor" />
                  <span>{post.comments}</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow CTA Button with glow wrapper */}
        <div className="text-center mt-12">
          <a
            href="https://instagram.com/shahjidairyofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3.5 rounded-full bg-brand-orange text-primary font-bold tracking-wider uppercase shadow-md hover:shadow-glow-orange transition-all duration-300 animate-glow-orange"
          >
            <Instagram size={18} />
            <span>Follow us on Instagram</span>
          </a>
        </div>

      </div>
    </section>
  );
}
