'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const FAQ_COUNT = 8;

const FAQ = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    question: t(`faq${i + 1}Q`),
    answer: t(`faq${i + 1}A`),
  }));

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="bg-white border-t border-gray-100 py-16 md:py-20">
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
              <span className="h-px w-10 bg-primary" />
              <span className="text-sm font-semibold uppercase text-primary ltr:tracking-widest lg:text-base">
                {t('faqLabel')}
              </span>
            </div>

            <h2 className="mb-5 text-4xl font-bold leading-tight text-navy md:text-5xl">
              {t('faqTitle')}
            </h2>

            <p className="max-w-md text-lg leading-relaxed text-gray-600">
              {t('faqDescription')}
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-5 py-4 transition-colors hover:border-primary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                <MessageCircle className="h-5 w-5" />
              </span>
              <span className="text-start">
                <span className="block text-sm font-semibold text-navy">{t('needHelp')}</span>
                <span className="block text-xs text-gray-600">{t('contactSupport')}</span>
              </span>
            </a>
          </motion.div>

          {/* Accordion */}
          <div className="border-t border-gray-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const buttonId = `faq-button-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div key={index} className="border-b border-gray-200">
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggle(index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="group flex w-full items-start gap-4 py-6 text-start focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:gap-6"
                    >
                      <span className="mt-1 w-7 shrink-0 text-sm font-semibold tabular-nums text-primary">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span
                        className={`flex-1 text-lg font-semibold leading-snug transition-colors duration-300 md:text-xl ${
                          isOpen ? 'text-primary' : 'text-navy group-hover:text-primary'
                        }`}
                      >
                        {faq.question}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`relative mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                          isOpen
                            ? 'border-primary bg-primary text-white'
                            : 'border-gray-200 text-navy group-hover:border-primary group-hover:text-primary'
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
                        <p className="pb-6 pe-12 ps-11 text-base leading-relaxed text-gray-600 md:pe-14 md:ps-[3.25rem] md:text-lg">
                          {faq.answer}
                        </p>
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
