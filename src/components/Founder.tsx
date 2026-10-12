'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, CalendarDays, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Founder = () => {
  const { t } = useLanguage();

  const facts = [
    { icon: MapPin, label: t('founderHometownLabel'), value: t('founderHometown') },
    { icon: CalendarDays, label: t('founderBornLabel'), value: '1972' },
    { icon: Building2, label: t('founderFoundedLabel'), value: '1999' },
  ];

  return (
    <section id="founder" className="relative overflow-hidden bg-midnight py-20 text-white md:py-28">
      {/* Soft brand glow */}
      <div className="pointer-events-none absolute -top-40 start-1/2 h-[480px] w-[480px] rounded-full bg-cyan/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[minmax(320px,440px)_1fr] lg:gap-20">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[380px] lg:max-w-none"
        >
          {/* Tilted cyan back panel, same motif as the product cards */}
          <div className="absolute inset-0 rotate-[5deg] translate-y-[3%] rounded-[14px] bg-cyan ltr:translate-x-[5%] rtl:-translate-x-[5%]" />

          <div className="relative rotate-[-2deg] rounded-[14px] bg-deep p-3 shadow-[0_24px_55px_rgba(8,15,31,0.6)]">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px]">
              <Image
                src="/founder.jpg"
                alt={t('founderName')}
                fill
                sizes="(min-width: 1024px) 440px, 380px"
                className="object-cover object-[center_20%]"
              />
            </div>
          </div>
        </motion.div>

        {/* Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold text-sky lg:text-base">
            <span className="h-0.5 w-10 shrink-0 bg-cyan" />
            {t('founderEyebrow')}
          </p>

          <h2 className="mb-3 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
            {t('founderName')}
          </h2>

          <p className="mb-8 text-lg font-medium text-cyan md:text-xl">
            {t('founderRole')}
          </p>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-white/75 md:text-xl md:leading-relaxed">
            {t('founderBio')}
          </p>

          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {facts.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex-col sm:items-start sm:gap-3 sm:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <dt className="mb-1 text-xs uppercase tracking-wider text-white/50">{label}</dt>
                  <dd className="text-lg font-bold text-white">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>
    </section>
  );
};

export default Founder;
