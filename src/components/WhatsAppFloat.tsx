'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const WhatsAppFloat = () => {
  const { t } = useLanguage();
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-[#25D366]"
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
        className="relative w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#1FBA5A] transition-colors"
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
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-8 w-8 text-white"
          >
            <path
              d="M20.2 11.5a8.2 8.2 0 0 1-12 7.3L3.5 20l1.2-4.4a8.2 8.2 0 1 1 15.5-4.1Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.7 7.4c-.2-.5-.5-.5-.8-.5h-.7c-.3 0-.6.1-.9.4-.3.4-1.1 1.1-1.1 2.7s1.1 3.1 1.3 3.4c.2.2 2.2 3.5 5.4 4.4 2.7.8 3.2.6 3.8.5.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.7-.4l-2.1-1c-.3-.1-.5-.2-.7.2-.2.3-.8 1-1 1.2-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7l.5-.6c.2-.2.3-.4.4-.6.1-.2 0-.5 0-.6L8.7 7.4Z"
              fill="currentColor"
            />
          </svg>
        </motion.div>
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;
