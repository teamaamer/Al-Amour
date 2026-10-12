'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Instagram, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { HELP_LINE } from '@/lib/contact';

// Question numbers from the translations (faq<n>Q / faq<n>A), in display order
const FAQ_IDS = [1, 2, 3, 4, 7];

// Optional Instagram post shown under an answer, keyed by question number (1-based)
const FAQ_MEDIA: Record<number, { image: string; instagram: string; captionKey: string; codes?: string; reel?: boolean }> = {
  1: {
    image: '/faq/ilva-pl720-tx70.webp',
    instagram: 'https://www.instagram.com/reel/DcdhQYclIPy/',
    captionKey: 'faq1Media',
    codes: 'ILVA PL720/X + TX70',
    reel: true,
  },
  2: {
    image: '/faq/ilva-tf25.webp',
    instagram: 'https://www.instagram.com/p/Dd6VZWolA_Q/',
    captionKey: 'faq2Media',
    codes: 'ILVA TF25',
  },
  3: {
    image: '/faq/erco-scratch.webp',
    instagram: 'https://www.instagram.com/p/DeMWKWLFKg_/',
    captionKey: 'faq3Media',
    codes: 'ERCO P24-10 / P49-10',
  },
  4: {
    image: '/faq/ilva-water-lacquer.webp',
    instagram: 'https://www.instagram.com/p/Dc8jiVKj_CS/',
    captionKey: 'faq4Media',
    codes: 'ILVA · 5% · 10% · 20%',
  },
  7: {
    image: '/faq/politek-t5230.webp',
    instagram: 'https://www.instagram.com/p/DdypIfDFF9I/',
    captionKey: 'faq7Media',
    codes: 'POLITEK T5230',
  },
};

const FAQ = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = FAQ_IDS.map((id) => ({
    question: t(`faq${id}Q`),
    answer: t(`faq${id}A`),
    media: FAQ_MEDIA[id],
  }));

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white border-t border-steel/40 py-16 md:py-20">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan" />
              <span className="text-sm font-semibold uppercase text-midnight ltr:tracking-widest lg:text-base">
                {t('faqLabel')}
              </span>
            </div>

            <h2             className="mb-5 text-4xl font-bold leading-tight text-midnight md:text-5xl">
              {t('faqTitle')}
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-steel">
              {t('faqDescription')}
            </p>

            <a
              href={`tel:${HELP_LINE.tel}`}
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-steel/40 bg-white px-5 py-4 transition-colors hover:border-cyan focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan text-midnight">
                <Phone className="h-5 w-5" />
              </span>
              <span className="text-start">
                <span className="block text-sm font-semibold text-midnight">{t('needHelp')}</span>
                <span className="block text-xs text-steel">{t('contactSupport')}</span>
                <span dir="ltr" className="mt-1 flex gap-1.5 text-base font-bold text-cyan">
                  <span>{HELP_LINE.code}</span>
                  <span>{HELP_LINE.number}</span>
                </span>
              </span>
            </a>
          </motion.div>

          {/* Accordion */}
          <div className="border-t border-steel/40">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-button-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div key={index} className="border-b border-steel/40">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group flex w-full items-start gap-4 py-6 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan md:gap-6"
                    >
                      <span                       className="mt-1 w-7 shrink-0 text-sm font-semibold tabular-nums text-midnight">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`flex-1 text-lg font-semibold leading-snug transition-colors duration-300 md:text-xl ${
                          isOpen ? 'text-midnight' : 'text-midnight group-hover:text-steel'
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? 'border-cyan bg-cyan text-midnight'
                            : 'border-steel/50 text-steel group-hover:border-cyan group-hover:text-midnight'
                        }`}
                      >
                        <span className="absolute h-[2px] w-3 rounded-full bg-current" />
                        <span
                          className={`absolute h-3 w-[2px] rounded-full bg-current transition-transform duration-300 motion-reduce:transition-none ${
                            isOpen ? 'rotate-90 scale-y-0' : 'rotate-0'
                          }`}
                        />
                      </span>
                    </button>
                  </h3>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 pe-12 ps-11 text-base leading-relaxed text-steel md:pe-14 md:ps-[3.25rem] md:text-lg">
                          {faq.answer}
                        </p>

                        {faq.media && (
                          <a
                            href={faq.media.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/media mb-6 me-0 ms-11 flex items-center gap-4 overflow-hidden rounded-2xl border border-steel/30 bg-[#F4F6F9] p-3 transition-colors hover:border-cyan md:me-14 md:ms-[3.25rem]"
                          >
                            <span className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-xl sm:w-28">
                              <Image
                                src={faq.media.image}
                                alt={t(faq.media.captionKey)}
                                fill
                                sizes="112px"
                                className="object-cover transition-transform duration-500 group-hover/media:scale-105"
                              />
                            </span>
                            <span className="flex min-w-0 flex-col gap-2">
                              {faq.media.codes && (
                                <span dir="ltr" className="w-fit font-mono text-xs font-bold text-cyan">
                                  {faq.media.codes}
                                </span>
                              )}
                              <span className="font-bold leading-snug text-midnight">{t(faq.media.captionKey)}</span>
                              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] px-4 py-2 text-sm font-bold text-white">
                                <Instagram className="h-4 w-4" />
                                {faq.media.reel ? t('faqViewReel') : t('faqViewPost')}
                              </span>
                            </span>
                          </a>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
