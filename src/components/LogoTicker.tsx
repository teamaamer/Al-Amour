'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

// Intrinsic sizes of the source files. Height is scaled by aspect ratio so wide
// and square logos read at a similar visual weight.
const logos = [
  { name: 'ILVA', src: '/ilva.png', width: 290, height: 215, boost: 1.25 }, // file has extra padding
  { name: 'POLITEK', src: '/politek.png', width: 376, height: 134 },
  { name: 'ERCO', src: '/erco.webp', width: 768, height: 417 },
];

const REFERENCE_RATIO = 1.6;
const heightFactor = (w: number, h: number, boost = 1) => boost * Math.sqrt(REFERENCE_RATIO / (w / h));

// Each half must be wider than the widest screen so the loop never shows a gap
const REPEATS_PER_HALF = 6;

const LogoTicker = () => {
  const { t } = useLanguage();

  const half = Array.from({ length: REPEATS_PER_HALF }, () => logos).flat();

  const renderHalf = (copy: number) => (
    <ul
      aria-hidden={copy === 1 ? true : undefined}
      className={`flex shrink-0 items-center ${copy === 1 ? 'motion-reduce:hidden' : 'motion-reduce:flex-wrap motion-reduce:justify-center'}`}
    >
      {half.map((logo, index) => (
        <li
          key={`${copy}-${logo.name}-${index}`}
          // Hide repeats when motion is reduced so each logo shows once
          className={`flex shrink-0 items-center justify-center px-6 sm:px-9 lg:px-12 ${
            index >= logos.length ? 'motion-reduce:hidden' : ''
          }`}
        >
          <Image
            src={logo.src}
            alt={copy === 0 && index < logos.length ? logo.name : ''}
            width={logo.width}
            height={logo.height}
            sizes="200px"
            className="w-auto max-w-none object-contain brightness-0 invert opacity-80 transition-opacity duration-300 hover:opacity-100"
            style={{ height: `calc(var(--logo-h) * ${heightFactor(logo.width, logo.height, 'boost' in logo ? logo.boost : 1).toFixed(3)})` }}
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section className="bg-navy py-6 overflow-hidden">
      <div className="w-full">
        <p className="text-xs uppercase tracking-widest text-white/60 text-center mb-4">
          {t('trustedByLeadingBrands')}
        </p>

        <div
          dir="ltr"
          className="logo-marquee relative overflow-hidden py-4 [--logo-h:34px] sm:[--logo-h:42px] lg:[--logo-h:52px]"
        >
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-navy to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-navy to-transparent z-10 pointer-events-none" />

          {/* Two identical halves — translating the track by -50% loops seamlessly */}
          <div className="logo-marquee-track flex w-max">
            {renderHalf(0)}
            {renderHalf(1)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
