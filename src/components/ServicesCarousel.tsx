'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const ServicesCarousel = () => {
  const services = [
    {
      title: 'Wood Paints',
      description: 'Premium quality wood finishing solutions for furniture, carpentry, and woodworking professionals.',
      gradient: 'from-primary to-accent-cyan',
    },
    {
      title: 'Car Paints',
      description: 'Professional automotive paint products for workshops and car refinishing specialists.',
      gradient: 'from-navy to-primary',
    },
    {
      title: 'Furniture Finishing',
      description: 'Complete range of furniture finishing products including varnishes, stains, and protective coatings.',
      gradient: 'from-accent-cyan to-primary-light',
    },
    {
      title: 'Carpenter Supplies',
      description: 'Essential supplies and materials for professional carpenters and woodworking businesses.',
      gradient: 'from-primary-dark to-navy',
    },
    {
      title: 'Color Mixing Solutions',
      description: 'Advanced color mixing technology and custom paint matching services for precise color requirements.',
      gradient: 'from-primary to-navy-light',
    },
  ];

  // Triple for seamless loop
  const allServices = [...services, ...services, ...services];
  const cardWidth = 250;
  const gap = 24;
  const totalWidth = services.length * (cardWidth + gap);

  return (
    <section dir="ltr" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 mb-12">
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6 text-center">
          Our Services
        </h2>
        <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
          Comprehensive paint and finishing solutions for professionals and businesses across Palestine
        </p>
      </div>

      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Carousel */}
        <motion.div
          dir="ltr"
          className="flex gap-6 px-6"
          animate={{
            x: [-totalWidth, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
          whileHover={{ animationPlayState: 'paused' }}
        >
          {allServices.map((service, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-[250px] h-[320px] rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer"
              whileHover={{
                y: -8,
                scale: 1.03,
                boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient}`} />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/90 text-sm line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Floating Arrow Button */}
              <motion.div
                className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-black/80 group-hover:bg-primary flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1, rotate: 12 }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight className="text-white" size={20} />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
