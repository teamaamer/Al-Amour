'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Hero = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  const { t } = useLanguage();

  // Parallax transforms
  const headlineY = useTransform(scrollY, [0, 300], [0, -200]);
  const headlineOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const logoY = useTransform(scrollY, [0, 400], [0, -600]);
  const logoX = useTransform(scrollY, [0, 400], [0, 300]);
  const logoScale = useTransform(scrollY, [0, 400], [1, 0.4]);
  const logoOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section
      ref={ref}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-navy"
    >
      {/* Background Image with Parallax */}
      <motion.div
        initial={{ scale: 1.6 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/70 to-primary/30 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1920&q=80"
          alt="Paint products background"
          fill
          className="object-cover brightness-90"
          priority
        />
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        />
      </motion.div>

      {/* Headline Content */}
      <motion.div
        style={{ y: headlineY, opacity: headlineOpacity }}
        className="relative z-10 flex items-center justify-center h-full px-6"
      >
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              ease: [0.44, 0, 0.56, 1],
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center max-w-5xl leading-tight mb-6"
          >
            {t('heroTitle')}
            <br />
            <span className="text-primary">{t('heroSubtitle')}</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: [0.44, 0, 0.56, 1],
            }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 max-w-3xl mx-auto shadow-2xl"
          >
            <p className="text-lg md:text-xl text-white leading-relaxed">
              {t('heroDescription')}
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: [0.44, 0, 0.56, 1],
            }}
            className="flex gap-4 justify-center mt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(1, 151, 215, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:bg-primary-dark transition-all"
            >
              {t('exploreProducts')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="backdrop-blur-xl bg-white/10 border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
            >
              {t('contactUs')}
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Large Decorative Logo/Banner at Bottom */}
      <motion.div
        style={{
          y: logoY,
          x: logoX,
          scale: logoScale,
          opacity: logoOpacity,
        }}
        initial={{
          scale: 2.5,
          rotate: -3,
          opacity: 0,
        }}
        animate={{
          scale: 1,
          rotate: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.8,
          delay: 0.6,
          ease: [0.44, 0, 0.56, 1],
        }}
        className="absolute bottom-20 left-[20%] z-20 pointer-events-none"
      >
        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-8xl md:text-9xl font-black text-white/10 tracking-tighter">
                AL-AMOUR
              </div>
              <div className="text-2xl md:text-4xl font-bold text-primary/80 tracking-wider mt-4">
                SINCE 1999
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white/60"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
