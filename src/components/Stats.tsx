'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  index: number;
  embedded?: boolean;
}

const StatCard = ({ value, label, suffix = '', index, embedded = false }: StatCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const duration = 2500; // 2.5 seconds

      const animateValue = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(easeOut * value);
        
        setDisplayValue(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animateValue);
        } else {
          setDisplayValue(value);
        }
      };

      requestAnimationFrame(animateValue);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.44, 0, 0.56, 1],
      }}
      // Embedded: bottom-align so single-line labels don't lift their number
      className={embedded ? 'flex h-full flex-col justify-end text-center px-1 py-1 md:px-2' : 'text-center px-4 py-2'}
    >
      <p className={`uppercase tracking-wider mb-1 whitespace-pre-line leading-tight ${embedded ? 'text-[10px] md:text-xs text-white/60' : 'text-xs text-steel'}`}>
        {label}
      </p>
      <motion.div
        className={`font-extrabold tracking-tighter ${
          embedded ? 'text-xl md:text-3xl text-white' : 'text-3xl md:text-4xl text-midnight'
        }`}
      >
        <motion.span
          key={displayValue}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {displayValue}
          {suffix}
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

// `embedded` renders just the counters, styled for the dark hero background
const Stats = ({ embedded = false }: { embedded?: boolean }) => {
  const { t } = useLanguage();
  
  const stats = [
    { value: 25, label: t('yearsExperience'), suffix: '+' },
    { value: 3, label: t('premiumBrands'), suffix: '' },
    { value: 500, label: t('productsLabel'), suffix: '+' },
    { value: 600, label: t('satisfiedClients'), suffix: '+' },
    { value: 100, label: t('qualityAssured'), suffix: '%' },
  ];

  if (embedded) {
    return (
      <div className="grid grid-cols-5 divide-x divide-white/15 rtl:divide-x-reverse">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            value={stat.value}
            label={stat.label}
            suffix={stat.suffix}
            index={index}
            embedded
          />
        ))}
      </div>
    );
  }

  return (
    <section className="bg-white py-4 md:py-6">
      <div className="w-full px-6 lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-widest text-midnight text-center mb-3"
        >
          {t('performanceSnapshot')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 md:gap-0 md:divide-x md:divide-steel/30 rtl:md:divide-x-reverse">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
