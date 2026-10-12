'use client';

import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

// Intrinsic sizes of the source files. Height is scaled by aspect ratio so wide
// and square logos read at a similar visual weight.
const logos = [
  { name: 'ILVA', src: '/ilva.png', width: 136, height: 178 },
  { name: 'POLITEK', src: '/politek.png', width: 275, height: 119 },
  { name: 'ERCO', src: '/erco.webp', width: 768, height: 417 },
];

const REFERENCE_RATIO = 1.6;
const heightFactor = (w: number, h: number) => Math.sqrt(REFERENCE_RATIO / (w / h));

// Each half must be wider than the widest screen so the loop never shows a gap
const REPEATS_PER_HALF = 6;

// `embedded` drops the section background and puts the label beside the logos,
// for use inside the hero
const LogoTicker = ({ embedded = false }: { embedded?: boolean }) => {
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
          className={`flex shrink-0 items-center justify-center ${embedded ? 'px-2 sm:px-3' : 'px-6 sm:px-9 lg:px-12'} ${
            index >= logos.length ? 'motion-reduce:hidden' : ''
          }`}
        >
          {/* Embedded: full-colour logos on a white chip so dark brand colours stay legible on the hero */}
          <div
            className={
              embedded
                ? 'flex h-12 w-28 items-center justify-center rounded-xl bg-white px-3 py-1.5 shadow-sm sm:h-14 sm:w-32 lg:h-16 lg:w-40'
                : 'contents'
            }
          >
            <Image
              src={logo.src}
              alt={copy === 0 && index < logos.length ? logo.name : ''}
              width={logo.width}
              height={logo.height}
              sizes="200px"
              className={
                embedded
                  ? 'h-full w-auto max-w-full object-contain'
                  : 'w-auto max-w-none object-contain brightness-0 invert opacity-80 transition-opacity duration-300 hover:opacity-100'
              }
              style={embedded ? undefined : { height: `calc(var(--logo-h) * ${heightFactor(logo.width, logo.height).toFixed(3)})` }}
            />
          </div>
        </li>
      ))}
    </ul>
  );

  if (embedded) {
    return (
      // Right padding keeps the label clear of the fixed WhatsApp button in RTL
      <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-6 lg:pr-16">
        <p className="shrink-0 text-xs uppercase tracking-widest text-white/60">
          {t('trustedByLeadingBrands')}
        </p>

        {/* Edges fade via mask so it works over the photo background */}
        <div
          dir="ltr"
          className="logo-marquee relative w-full min-w-0 flex-1 overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        >
          <div className="logo-marquee-track flex w-max">
            {renderHalf(0)}
            {renderHalf(1)}
          </div>
        </div>
      </div>
    );
  }

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
