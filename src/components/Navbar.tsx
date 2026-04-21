'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Instagram, Facebook, Twitter, Mail, Languages } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const socialLinks = [
    { icon: MessageCircle, href: 'https://wa.me/970XXXXXXXX', label: 'WhatsApp' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Mail, href: 'mailto:info@alamour.ps', label: 'Email' },
  ];

  const menuItems = [
    { label: t('home'), href: '#home' },
    { label: t('about'), href: '#about' },
    { label: t('products'), href: '#products' },
    { label: t('catalogs'), href: '#catalogs' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md"
      >
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-28 lg:h-32">
            {/* Left - Social Icons */}
            <div className="hidden lg:flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-navy hover:text-primary transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>

            {/* Center - Logo */}
            <motion.a
              href="#home"
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src="/logo.png"
                alt="Al-Amour Company"
                width={250}
                height={125}
                className="h-28 md:h-32 w-auto"
                priority
              />
            </motion.a>

            <div className="flex items-center gap-3">
              {/* Modern Language Switcher */}
              <motion.div
                className="relative flex items-center bg-gradient-to-r from-primary to-accent-cyan rounded-full p-1"
                whileHover={{ scale: 1.05 }}
              >
                <motion.button
                  onClick={() => setLanguage('ar')}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                    language === 'ar'
                      ? 'bg-white text-primary shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  عربي
                </motion.button>
                <motion.button
                  onClick={() => setLanguage('en')}
                  className={`px-4 py-2 rounded-full font-bold text-sm transition-all ${
                    language === 'en'
                      ? 'bg-white text-primary shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  EN
                </motion.button>
              </motion.div>

              {/* Right - Burger Menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-12 h-12 flex flex-col items-center justify-center gap-2.5 z-50"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: isMenuOpen ? 45 : 0,
                  y: isMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-1 bg-navy rounded-full"
              />
              <motion.span
                animate={{
                  opacity: isMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-1 bg-navy rounded-full"
              />
              <motion.span
                animate={{
                  rotate: isMenuOpen ? -45 : 0,
                  y: isMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-1 bg-navy rounded-full"
              />
            </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-navy/95 backdrop-blur-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {menuItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: [0.44, 0, 0.56, 1],
                  }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl lg:text-6xl font-bold text-white hover:text-primary transition-colors duration-300"
                >
                  {item.label}
                </motion.a>
              ))}

              {/* Social Icons in Mobile Menu */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{
                  duration: 0.5,
                  delay: menuItems.length * 0.1,
                }}
                className="flex items-center gap-6 mt-8"
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-primary transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={24} />
                  </a>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
