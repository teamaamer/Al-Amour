'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Award, Building2, Globe2, ShieldCheck, Sparkles } from 'lucide-react';
import 'plyr-react/plyr.css';

const Plyr = dynamic(() => import('plyr-react').then((mod) => mod.Plyr), {
  ssr: false,
});

const About = () => {
  const { t } = useLanguage();

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
    <section id="about" className="bg-gray-50 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold text-primary md:text-5xl lg:text-6xl"
        >
          {t('aboutUs')}
        </motion.h2>

        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 md:text-xl">
          {t('companyDescription')}
        </p>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(280px,360px)_1fr] lg:items-stretch lg:gap-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[320px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-lg md:h-[420px] lg:h-[560px]"
          >
            <div className="about-video-player h-full w-full overflow-hidden rounded-xl">
              <Plyr
                source={{
                  type: 'video',
                  sources: [{
                    src: '/aboutus.mp4',
                    type: 'video/mp4',
                  }],
                }}
                options={{
                  autoplay: true,
                  muted: true,
                  loop: { active: true },
                  controls: ['play-large', 'play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
                }}
              />
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
                className={`group rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm hover:shadow-xl hover:border-primary/20 transition-all duration-300 ${index === 4 ? 'md:col-span-2' : ''}`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <card.icon className="h-6 w-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold text-navy mb-2">
                      {card.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#2d2d2d] leading-relaxed">
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
