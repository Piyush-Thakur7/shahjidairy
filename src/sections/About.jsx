import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Milk, Users, Star, Award } from 'lucide-react';
import interiorImg from '../assets/interior.png';

function CountUp({ to, duration = 1.5, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(to, 10);
      if (start === end) return;

      let totalMiliseconds = duration * 1000;
      let incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const imgVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  const statItems = [
    {
      icon: <Milk className="text-brand-orange" size={28} />,
      title: 'Daily Supply',
      count: '1200',
      suffix: '+ Litres',
      desc: 'Pure fresh milk & dairy products distributed daily.'
    },
    {
      icon: <Users className="text-brand-orange" size={28} />,
      title: 'Happy Clients',
      count: '530',
      suffix: '+ Reviews',
      desc: 'Trusted by families in Sikandrabad for authentic taste.'
    },
    {
      icon: <Star className="text-brand-orange" size={28} />,
      title: 'Google Rating',
      count: '4',
      suffix: '.0 ★',
      desc: 'Consistency in excellence and customer satisfaction.'
    },
    {
      icon: <Award className="text-brand-orange" size={28} />,
      title: 'Years Heritage',
      count: '15',
      suffix: '+ Years',
      desc: 'Serving pure milk, creamy paneer, and rich dishes.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFCEF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-sm font-bold tracking-widest text-brand-orange uppercase block mb-2">Our Heritage</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-brand-green mb-4">
            Serving Purity & Tradition since 2011
          </h2>
          <div className="h-1.5 w-24 bg-accent-red mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Image Side with Decorative Elements */}
          <motion.div
            variants={imgVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            {/* Background color block ornament */}
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 border-2 border-brand-orange/30 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-brand-green/10 rounded-2xl -z-10" />
            
            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFF8E7]">
              <img
                src={interiorImg}
                alt="Cozy interior of Shahji Dairy restaurant"
                className="w-full h-[350px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Visual Callout Badge */}
            <div className="absolute -bottom-6 left-6 sm:left-12 bg-brand-green text-primary p-5 rounded-2xl shadow-xl flex items-center space-x-4 border border-brand-orange/30">
              <span className="text-4xl sm:text-5xl font-extrabold text-brand-orange font-heading">100%</span>
              <div className="text-left">
                <p className="text-sm font-bold tracking-wider uppercase text-primary">Pure & Fresh</p>
                <p className="text-xs text-primary/80">No preservatives added</p>
              </div>
            </div>
          </motion.div>

          {/* Text Story Side */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6 lg:pl-4"
          >
            <h3 className="text-2xl font-bold font-heading text-brand-green leading-snug">
              From our dairy pastures straight to your dining table.
            </h3>
            
            <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed font-body">
              For over a decade, **Shahji Dairy** has stood as a beacon of purity and quality in Sikandrabad. What started as a humble local milk supplier has evolved into a beloved community restaurant and premium dairy outlet.
            </p>
            
            <p className="text-charcoal/70 text-sm sm:text-base leading-relaxed font-body">
              We collect fresh milk daily from trusted local farms, ensuring that every drop of milk, dollop of ghee, block of paneer, and serving of curd carries unmatched freshness. Our restaurant takes this same purity into the kitchen, serving mouth-watering vegetarian meals prepared with our own high-quality dairy ingredients.
            </p>

            <div className="bg-brand-green/5 border-l-4 border-brand-orange p-5 rounded-r-xl">
              <p className="italic font-accent text-lg sm:text-xl text-brand-green leading-relaxed">
                "Our core philosophy is simple: never compromise on purity. What we serve to your family is what we serve to ours."
              </p>
              <p className="text-right text-xs font-bold text-brand-green uppercase tracking-widest mt-2">— Founder, Shahji Dairy</p>
            </div>
          </motion.div>
        </div>

        {/* Stats Section with Count-Up */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-24">
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-primary p-6 rounded-2xl shadow-md hover:shadow-lg border border-brand-green/5 text-center flex flex-col items-center hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 bg-brand-green/10 rounded-full mb-4">
                {stat.icon}
              </div>
              <h4 className="text-3xl font-black font-heading text-brand-green mb-1">
                <CountUp to={stat.count} suffix={stat.suffix} />
              </h4>
              <h5 className="text-sm font-bold uppercase tracking-wider text-brand-orange mb-2">
                {stat.title}
              </h5>
              <p className="text-xs text-charcoal/70 leading-relaxed font-body max-w-[200px]">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
