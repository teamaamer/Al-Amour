'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

// No dedicated category pages yet — every category points to the catalogs section
const CATEGORY_HREF = '#catalogs';
const IMAGE_SIZES = '(max-width: 760px) 80vw, 380px';

const ServicesNew = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  const categories = [
    { id: 1, title: t('woodCoatings'), description: t('woodCoatingsDesc'), image: '/cats/wood-coatings.png' },
    { id: 2, title: t('carPaints'), description: t('carPaintsDesc'), image: '/cats/car-paints.png' },
    { id: 3, title: t('resinsGelcoats'), description: t('resinsGelcoatsDesc'), image: '/cats/resins-and-gelcoats.png' },
    { id: 4, title: t('toolingSystems'), description: t('toolingSystemsDesc'), image: '/cats/tooling.png' },
    { id: 5, title: t('colorMixing'), description: t('colorMixingDescShort'), image: '/cats/color-mixing.png' },
    { id: 6, title: t('carpenterSupplies'), description: t('carpenterSuppliesDescShort'), image: '/cats/carpenter.png' },
  ];

  const current = categories[active];
  const indexLabel = (i: number) => String(i + 1).padStart(2, '0');

  const handleClick = (i: number) => {
    if (i === active) {
      window.location.href = CATEGORY_HREF;
    } else {
      setActive(i);
    }
  };

  return (
    <section id="products" className="bg-navy text-white py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-6 mb-14">
          <h2 className="flex items-center gap-3 text-sm lg:text-base font-semibold text-[#6FD3F2]">
            <span className="w-10 h-0.5 bg-[#6FD3F2] shrink-0" />
            {t('productCategories')}
          </h2>
          <p className="text-lg lg:text-xl leading-relaxed text-[#C9CADB] max-w-[460px]">
            {t('productCategoriesDesc')}
          </p>
        </div>

        {/* Body */}
        <div className="flex flex-wrap items-center gap-[72px]">
          {/* Category list */}
          <ul className="flex-[999_1_520px] min-w-0 border-t border-white/[0.18]">
            {categories.map((category, i) => {
              const isActive = i === active;
              return (
                <li key={category.id} className="border-b border-white/[0.18]">
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    onClick={() => handleClick(i)}
                    className="w-full flex items-center gap-5 py-4 lg:py-5 text-start rounded-sm focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#6FD3F2] focus-visible:outline-offset-4"
                  >
                    <span className="w-9 shrink-0 text-sm font-semibold text-[#6FD3F2]">
                      {indexLabel(i)}
                    </span>
                    <span
                      className={`flex-1 min-w-0 font-bold text-2xl md:text-3xl lg:text-4xl leading-snug transition-[color,transform] [transition-duration:.3s,.45s] [transition-timing-function:ease,cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none ${
                        isActive
                          ? 'text-[#6FD3F2] ltr:translate-x-[18px] rtl:-translate-x-[18px]'
                          : 'text-[#8E8FAE]'
                      }`}
                    >
                      {category.title}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`w-11 h-11 shrink-0 rounded-full bg-[#6FD3F2] flex items-center justify-center transition-opacity duration-300 motion-reduce:transition-none ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <ArrowUpRight className="w-5 h-5 text-navy rtl:-scale-x-100" strokeWidth={2.5} />
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Preview stage */}
          <div className="relative flex-[1_1_340px] min-h-[420px] min-[761px]:min-h-[620px] flex items-center justify-center">
            {/* Blue back panel */}
            <div className="absolute w-[78%] max-w-[360px] aspect-[3/4] rounded-[10px] bg-[#1B9CC4] rotate-[5deg] translate-y-[3%] ltr:translate-x-[6%] rtl:-translate-x-[6%]" />

            {/* Polaroid card — keyed so the entrance animation replays on change */}
            <motion.div
              key={current.id}
              initial={reduceMotion ? false : { opacity: 0, rotate: 3, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, rotate: -3, y: 0, scale: 1 }}
              transition={{ duration: reduceMotion ? 0 : 0.55, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative w-[82%] max-w-[380px] bg-white text-navy rounded-[10px] p-3.5 shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
            >
              <div className="relative w-full aspect-[4/4.2] rounded-md overflow-hidden">
                <Image src={current.image} alt={current.title} fill sizes={IMAGE_SIZES} className="object-cover" />
                <span className="absolute top-2 start-3 text-5xl leading-none font-extrabold text-navy drop-shadow-[0_2px_10px_rgba(255,255,255,0.6)]">
                  {indexLabel(active)}
                </span>
              </div>

              <p className="mt-4 text-base leading-relaxed min-h-[52px]">{current.description}</p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <a
                  href={CATEGORY_HREF}
                  className="inline-flex items-center min-h-[46px] px-6 rounded-full bg-[#6FD3F2] hover:bg-white border-2 border-navy text-navy font-bold text-sm transition-colors motion-reduce:transition-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-[#6FD3F2] focus-visible:outline-offset-2"
                >
                  {t('exploreCategory')}
                </a>
              </div>
            </motion.div>

            {/* Preload every category image so switching is instant */}
            <div aria-hidden="true" className="absolute w-px h-px overflow-hidden opacity-0 pointer-events-none">
              {categories.map((category) => (
                <div key={category.id} className="relative w-[380px] h-[400px]">
                  <Image src={category.image} alt="" fill sizes={IMAGE_SIZES} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
