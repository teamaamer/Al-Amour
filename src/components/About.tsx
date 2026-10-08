'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Award, Building2, Globe2, ShieldCheck, Sparkles } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLDivElement | null>(null);
  const shouldLoadVideo = useInView(videoRef, { once: true, margin: '200px 0px' });

  const aboutCards = [
    {
      title: t('aboutFeature1Title'),
      description: t('aboutText1'),
      icon: ShieldCheck,
    },
    {
      title: t('aboutFeature2Title'),
      description: t('aboutText2'),
      icon: Sparkles,
    },
    {
      title: t('aboutFeature3Title'),
      description: t('aboutText3'),
      icon: Globe2,
    },
    {
      title: t('aboutFeature4Title'),
      description: t('aboutText4'),
      icon: Award,
    },
    {
      title: t('aboutFeature5Title'),
      description: t('aboutText5'),
      icon: Building2,
    },
  ];
  
  return (
    <section id="about" className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold text-midnight md:text-5xl lg:text-6xl"
        >
          {t('aboutUs')}
        </motion.h2>

        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-steel md:text-xl">
          {t('companyDescription')}
        </p>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(280px,360px)_1fr] lg:items-stretch lg:gap-10">
          <motion.div
            ref={videoRef}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[320px] overflow-hidden rounded-2xl border border-steel bg-deep p-2 shadow-lg md:h-[420px] lg:h-[560px]"
          >
            <div className="h-full w-full overflow-hidden rounded-xl">
              {shouldLoadVideo ? (
                <video
                  src="/aboutus.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/heroam.png"
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-deep to-midnight text-sm font-semibold uppercase tracking-[0.25em] text-cool">
                  Loading media
                </div>
              )}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {aboutCards.map((card, index) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`group rounded-2xl border border-steel/40 bg-white p-6 md:p-7 shadow-sm hover:shadow-xl hover:border-cyan/60 transition-all duration-300 ${index === 4 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan text-midnight group-hover:bg-sky transition-colors duration-300">
                    <card.icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-midnight mb-2">
                      {card.title}
                    </h3>
                    <p className="text-base md:text-lg text-steel leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
