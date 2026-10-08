'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WhatsAppFloat = () => {
  const { t } = useLanguage();
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-cyan rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeOut',
        }}
      />
      
      <motion.a
        href="https://wa.me/970XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          delay: 1,
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative w-14 h-14 md:w-16 md:h-16 bg-cyan rounded-full flex items-center justify-center shadow-lg hover:bg-sky transition-colors"
        aria-label={t('whatsappLabel')}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative z-10"
        >
          <MessageCircle className="text-midnight" size={28} />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;
