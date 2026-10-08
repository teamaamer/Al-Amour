'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import {
  Download,
  Menu,
  Shield,
  Award,
  Headphones,
  X,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function PremiumHero() {
  const { language, setLanguage, t } = useLanguage();
  const isRTL = language === 'ar';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: t('home'), href: '#home' },
    { label: t('products'), href: '#products' },
    { label: t('technologies'), href: '#catalogs' },
    { label: t('about'), href: '#about' },
    { label: t('contact'), href: '#contact' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-midnight lg:h-screen"
    >
      {/* =========================================================
          FULL SCREEN BACKGROUND IMAGE
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/heroam2.png"
            alt="Al-Amour facility"
            fill
            priority
            className="object-cover"
            style={{
              objectPosition: 'center center',
            }}
            sizes="100vw"
          />
        </div>

        {/* =====================================================
            TILTED FLOATING CARD
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            rotate: isRTL ? 7 : -7,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            y: 0,
            rotate: isRTL ? 7 : -7,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: 'easeOut',
          }}
          whileHover={{
            rotate: isRTL ? 4 : -4,
            scale: 1.03,
          }}
          className={`pointer-events-auto absolute bottom-[8%] z-10 hidden w-[300px] overflow-visible transition-[left,right] duration-700 md:w-[360px] md:block lg:w-[420px] ${
            isRTL ? 'left-[4%]' : 'right-[4%]'
          }`}
        >
          {/* ===================================================
              ANIMATED BLUE GLOW
          =================================================== */}
          <motion.div
            className="absolute -inset-[3px] rounded-3xl"
            style={{
              background:
                'linear-gradient(90deg, #20BDF2, #42C8F5, #20BDF2)',
              backgroundSize: '300% 100%',
              filter: 'blur(3px)',
              opacity: 0.35,
            }}
            animate={{
              backgroundPosition: [
                '0% 50%',
                '100% 50%',
                '0% 50%',
              ],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* ===================================================
              CARD
          =================================================== */}
          <div className="relative overflow-hidden rounded-3xl border border-sky/50 bg-deep/90 backdrop-blur-md">

            {/* MOVING LIGHT */}
            <motion.div
              className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(66,200,245,0.18), transparent)',
                transform: 'skewX(-20deg)',
              }}
              animate={{
                x: ['0%', '400%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                repeatDelay: 1,
              }}
            />

            {/* IMAGE */}
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/heroam2.png"
                alt="Al-Amour"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 420px, 360px"
              />

              {/* IMAGE SHINE */}
              <motion.div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    'linear-gradient(110deg, transparent 25%, rgba(66,200,245,0.12) 50%, transparent 75%)',
                  backgroundSize: '200% 100%',
                }}
                animate={{
                  backgroundPosition: [
                    '200% 0',
                    '-100% 0',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'linear',
                  repeatDelay: 1,
                }}
              />

              {/* BOTTOM GRADIENT */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-midnight/95 via-midnight/45 to-transparent" />

              {/* CARD TEXT */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-5 ${
                  isRTL ? 'text-right' : 'text-left'
                }`}
                dir={isRTL ? 'rtl' : 'ltr'}
              >
                <motion.div
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-[10px] font-semibold tracking-[0.25em] text-sky"
                >
                  AL-AMOUR
                </motion.div>

                <div className="mt-1 text-base font-bold tracking-wide text-white">
                  PREMIUM MATERIALS
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}
      <motion.nav
        initial={{
          y: -40,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
        }}
        className="relative z-50 px-5 py-5 md:px-10 lg:px-14"
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="mx-auto flex max-w-[1680px] items-center justify-between">

          {/* LOGO */}
          <div className="flex items-center gap-3">
            <div className="relative h-11 w-11 shrink-0 lg:h-14 lg:w-14">
              <Image
                src="/logo.png"
                alt="Al-Amour"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="hidden leading-none sm:block">
              <div className="text-[15px] font-bold tracking-[0.16em] text-white md:text-[17px]">
                AL-AMOUR
              </div>

              <div               className="mt-1 text-[8px] tracking-[0.22em] text-sky md:text-[9px]">
                .GENERAL TRADING CO.
              </div>
            </div>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden items-center gap-8 xl:flex">
            {menuItems.map((item, i) => (
              <a
                key={item.href + item.label}
                href={item.href}
                className={`text-[13px] font-medium transition-colors hover:text-white ${
                  i === 0
                    ? 'text-white'
                    : 'text-white/80'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-2.5">

            {/* LANGUAGE SWITCHER */}
            <button
              type="button"
              onClick={() =>
                setLanguage(isRTL ? 'en' : 'ar')
              }
              aria-label="Switch language"
              className="flex items-center overflow-hidden rounded-full text-[11px] font-bold tracking-wide"
              style={{
                border:
                  '1px solid rgba(66,200,245,0.45)',
                background:
                  'rgba(17,29,48,0.88)',
              }}
            >
              <span
                className="px-2.5 py-2"
                style={{
                  color: isRTL
                    ? '#FFFFFF'
                    : 'rgba(255,255,255,0.4)',
                  background: isRTL
                    ? 'rgba(32,189,242,0.22)'
                    : 'transparent',
                }}
              >
                AR
              </span>

              <span className="text-white/25">
                |
              </span>

              <span
                className="px-2.5 py-2"
                style={{
                  color: !isRTL
                    ? '#FFFFFF'
                    : 'rgba(255,255,255,0.4)',
                  background: !isRTL
                    ? 'rgba(32,189,242,0.22)'
                    : 'transparent',
                }}
              >
                EN
              </span>
            </button>

            {/* MENU BUTTON */}
            <button
              type="button"
              onClick={() =>
                setIsMenuOpen((v) => !v)
              }
              aria-label={
                isMenuOpen
                  ? 'Close menu'
                  : 'Open menu'
              }
              className="flex h-9 w-9 items-center justify-center text-white/85 hover:text-white"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* =========================================================
          MOBILE MENU
      ========================================================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="absolute inset-x-4 top-[76px] z-40 mx-auto max-w-md rounded-2xl border border-steel bg-midnight/95 p-3 backdrop-blur-xl"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {menuItems.map((item) => (
              <a
                key={item.href + item.label}
                href={item.href}
                onClick={() =>
                  setIsMenuOpen(false)
                }
                className="block rounded-xl px-4 py-3 text-sm text-white/85 hover:bg-white/5"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}
      <div
        className="relative z-20 mx-auto flex min-h-[calc(100vh-84px)] max-w-[1680px] items-center px-5 py-12 md:px-10 lg:px-14 lg:py-0"
        dir="ltr"
      >
        <div
          className="relative z-20 flex w-full"
          dir={isRTL ? 'rtl' : 'ltr'}
        >
          <div className="flex max-w-[620px] flex-col gap-5 lg:gap-6">

            {/* TITLE */}
            <motion.div
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >
              <h1
                className="font-black leading-[1.12] text-white"
                style={{
                  fontSize:
                    'clamp(2.4rem, 5vw, 4.6rem)',
                  textShadow:
                    '0 4px 28px rgba(8,15,31,0.75)',
                }}
              >
                {t('heroTitleLine1')}
              </h1>

              <h1
                className="font-black leading-[1.12]"
                style={{
                  fontSize:
                    'clamp(2.4rem, 5vw, 4.6rem)',
                  color: '#42C8F5',
                }}
              >
                {t('heroTitleHighlight')}
              </h1>
            </motion.div>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.35,
              }}
              className="max-w-[500px] text-[14px] leading-[1.9] text-white/75 md:text-[15px]"
            >
              {t('premiumHeroDescription')}
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.5,
              }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="#products"
                className="rounded-full px-7 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
                style={{
                  background:
                    'linear-gradient(135deg, #20BDF2 0%, #42C8F5 100%)',
                  color: '#080F1F',
                  boxShadow:
                    '0 4px 14px rgba(8,15,31,0.35)',
                }}
              >
                {t('exploreProducts')}
              </a>

              <a
                href="#catalogs"
                className="flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold text-white/90 transition-all hover:border-sky/60"
                style={{
                  borderColor:
                    'rgba(181,190,204,0.3)',
                  background:
                    'rgba(17,29,48,0.5)',
                  backdropFilter: 'blur(8px)',
                }}
              >
                <Download className="h-3.5 w-3.5 text-white/80" />
                {t('downloadCatalogs')}
              </a>
            </motion.div>

            {/* TRUST BADGES */}
            <motion.div
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="flex flex-wrap items-center gap-x-5 gap-y-3"
            >
              {(
                [
                  [
                    Shield,
                    t('trustedQuality'),
                  ],
                  [
                    Award,
                    t('premiumProductsBadge'),
                  ],
                  [
                    Headphones,
                    t('technicalSupport'),
                  ],
                ] as const
              ).map(([Icon, label]) => (
                <div
                  key={label}
                  className="flex items-center gap-2"
                >
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                    style={{
                      background:
                        'rgba(32,189,242,0.16)',
                      backdropFilter:
                        'blur(8px)',
                    }}
                  >
                    <Icon
                      className="h-3.5 w-3.5 text-sky"
                      strokeWidth={2}
                    />
                  </div>

                  <span className="text-[12px] font-medium text-white/80">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* QUICK LINKS */}
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {(
                [
                  [
                    t('home'),
                    '#home',
                  ],
                  [
                    t('products'),
                    '#products',
                  ],
                  [
                    t('catalogs'),
                    '#catalogs',
                  ],
                  [
                    t('contact'),
                    '#contact',
                  ],
                ] as const
              ).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full px-3.5 py-1.5 text-[11px] font-medium text-white/60 transition-colors hover:text-white/90"
                  style={{
                    background:
                      'rgba(17,29,48,0.6)',
                    border:
                      '1px solid rgba(181,190,204,0.18)',
                    backdropFilter:
                      'blur(8px)',
                  }}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}