'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

const LogoTicker = () => {
  const { t } = useLanguage();
  
  const logos = [
    { name: 'ILVA', src: '/ilva.png', width: 180, height: 90 },
    { name: 'POLITEK', src: '/politek.png', width: 200, height: 90 },
    { name: 'ERCO', src: '/erco.webp', width: 180, height: 90 },
  ];

  // Build two identical tracks so translating by -50% creates a seamless loop.
  const baseTrack = Array(8).fill(logos).flat();
  const marqueeLogos = [...baseTrack, ...baseTrack];

  return (
    <section className="bg-navy py-6 overflow-hidden">
      <div className="w-full">
        <p className="text-xs uppercase tracking-widest text-white/60 text-center mb-4">
          {t('trustedByLeadingBrands')}
        </p>

        <div dir="ltr" className="relative overflow-hidden">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

          {/* Continuous Logo Scroll */}
          <motion.div
            className="flex w-max items-center py-4"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'linear',
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="mr-16 flex min-w-[180px] flex-shrink-0 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
