'use client';

import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = () => {
  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
      {/* Ripple effect */}
      <motion.div
        className="absolute inset-0 bg-[#25D366] rounded-full"
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
        className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:shadow-[0_0_30px_rgba(37,211,102,0.6)] transition-all"
        aria-label="Contact us on WhatsApp"
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-50" />
        
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
          <MessageCircle className="text-white" size={28} />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default WhatsAppFloat;
