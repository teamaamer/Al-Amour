'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Download, 
  Shield, 
  Award, 
  Headphones,
  Menu
} from 'lucide-react';

const PremiumHero = () => {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-navy">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/heroalamour.png"
          alt="Al-Amour Background"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-transparent to-navy/80" />
      </div>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-50 px-6 lg:px-12 py-6"
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 lg:w-20 lg:h-20 relative">
              <Image
                src="/logo.png"
                alt="Al-Amour Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden md:block">
              <div className="text-white font-bold text-xl lg:text-2xl tracking-tight">
                AL-AMOUR
              </div>
              <div className="text-blue-400 text-xs lg:text-sm tracking-widest">
                GENERAL TRADING CO.
              </div>
            </div>
          </div>

          {/* Center Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors font-medium">
              {t('home')}
            </a>
            <a href="#products" className="text-white/80 hover:text-blue-400 transition-colors font-medium">
              {t('products')}
            </a>
            <a href="#catalogs" className="text-white/80 hover:text-blue-400 transition-colors font-medium">
              {t('catalogs')}
            </a>
            <a href="#about" className="text-white/80 hover:text-blue-400 transition-colors font-medium">
              {t('about')}
            </a>
            <a href="#contact" className="text-white/80 hover:text-blue-400 transition-colors font-medium">
              {t('contact')}
            </a>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
            >
              <span className="text-white text-sm font-medium">
                {language === 'en' ? 'AR' : 'EN'}
              </span>
              <span className="text-white/60 text-sm">|</span>
              <span className="text-white/60 text-sm">
                {language === 'en' ? 'EN' : 'AR'}
              </span>
            </button>

            {/* Menu Button */}
            <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all">
              <Menu className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Main Hero Content */}
      <div className="relative z-10 h-[calc(100vh-100px)] max-w-[1600px] mx-auto px-6 lg:px-12" dir="ltr">
        <div className="h-full flex items-center">
          {/* Left-Aligned Content - Always on Left for Both Languages */}
          <div className="flex flex-col justify-center space-y-8 max-w-3xl" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-blue-400 text-sm lg:text-base font-semibold tracking-widest">
                {t('since1999')}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-2"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1]">
                {t('heroMainTitle')}
              </h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-[1.1]">
                {t('heroSubTitle')}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-gray-300 text-base lg:text-lg leading-relaxed max-w-2xl"
            >
              {t('heroDescription2')}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70 transition-all"
              >
                {t('exploreProducts')}
              </motion.a>
              <motion.a
                href="#catalogs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-all flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                {t('downloadCatalogs')}
              </motion.a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-white/80 text-sm font-medium">{t('trustedQuality')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-white/80 text-sm font-medium">{t('premiumProducts')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Headphones className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-white/80 text-sm font-medium">{t('technicalSupport')}</span>
              </div>
            </motion.div>

              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="flex flex-wrap gap-3 pt-2"
              >
                <a
                  href="#products"
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {t('products')}
                </a>
                <a
                  href="#catalogs"
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {t('catalogs')}
                </a>
                <a
                  href="#contact"
                  className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium hover:bg-white/20 transition-colors"
                >
                  {t('contact')}
                </a>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumHero;
