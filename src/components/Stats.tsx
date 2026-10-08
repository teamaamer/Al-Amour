'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  index: number;
}

const StatCard = ({ value, label, suffix = '', index }: StatCardProps) => {
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
      className="text-center px-4 py-2"
    >
      <p className="text-xs uppercase tracking-wider text-steel mb-1 whitespace-pre-line leading-tight">
        {label}
      </p>
      <motion.div className="text-3xl md:text-4xl font-extrabold text-midnight tracking-tighter">
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

const Stats = () => {
  const { t } = useLanguage();
  
  const stats = [
    { value: 25, label: t('yearsExperience'), suffix: '+' },
    { value: 3, label: t('premiumBrands'), suffix: '' },
    { value: 500, label: t('productsLabel'), suffix: '+' },
    { value: 600, label: t('satisfiedClients'), suffix: '+' },
    { value: 100, label: t('qualityAssured'), suffix: '%' },
  ];

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
