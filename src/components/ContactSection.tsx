'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Headphones, Mail, MessageCircle, Phone, ShoppingBag } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_EMAIL, SALES, SUPPORT, type ContactLine } from '@/lib/contact';

// One digit as a split-flap tile that flips down into place
const FlapDigit = ({ digit, delay }: { digit: string; delay: number }) => {
  const reduceMotion = useReducedMotion();
  return (
    <span className="relative inline-flex h-9 w-[22px] items-center justify-center overflow-hidden rounded-md bg-gradient-to-b from-[#1B2A44] to-[#0E1A2E] font-mono text-xl font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_4px_10px_rgba(0,0,0,0.35)] [perspective:200px] min-[380px]:w-6 sm:h-14 sm:w-10 sm:text-3xl">
      <motion.span
        initial={reduceMotion ? false : { rotateX: -90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay, ease: [0.3, 1.4, 0.5, 1] }}
        className="[transform-origin:50%_0%]"
      >
        {digit}
      </motion.span>
      {/* Hinge line across the middle of the flap */}
      <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-black/50" />
    </span>
  );
};

const FlapNumber = ({ line, startDelay }: { line: ContactLine; startDelay: number }) => {
  let n = 0;
  return (
    <span dir="ltr" className="flex items-center gap-1.5 sm:gap-3" aria-hidden="true">
      {line.groups.map((group) => (
        <span key={group + n} className="flex gap-0.5 sm:gap-1">
          {group.split('').map((d) => {
            const delay = startDelay + n++ * 0.05;
            return <FlapDigit key={n} digit={d} delay={delay} />;
          })}
        </span>
      ))}
    </span>
  );
};

const ContactSection = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  const lines = [
    { key: 'sales', line: SALES, icon: ShoppingBag, label: t('contactSales'), hint: t('contactSalesHint') },
    { key: 'support', line: SUPPORT, icon: Headphones, label: t('contactSupportLine'), hint: t('contactSupportHint') },
  ];

  const rise = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="contact" className="relative overflow-hidden bg-[#F4F6F9] py-20 text-midnight md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-40 start-[-10%] h-[420px] w-[420px] rounded-full bg-cyan/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)] lg:items-center lg:gap-16">
        {/* ── Message ── */}
        <motion.div {...rise()}>
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold lg:text-base">
            <span className="h-0.5 w-10 shrink-0 bg-cyan" />
            {t('contactUs')}
          </p>
          <h2 className="mb-5 text-4xl font-black leading-[1.15] md:text-5xl">
            {t('contactHeadingStart')} <span className="text-cyan">{t('contactHeadingHighlight')}</span>
          </h2>
          <p className="mb-8 max-w-xl text-lg leading-relaxed text-steel">{t('contactIntro')}</p>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group inline-flex items-center gap-3 rounded-full border border-steel/30 bg-white py-2 pe-5 ps-2 shadow-sm transition-colors hover:border-cyan"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan text-midnight">
              <Mail className="h-4 w-4" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] text-steel">{t('contactEmail')}</span>
              <span dir="ltr" className="font-bold text-midnight group-hover:text-cyan">
                {CONTACT_EMAIL}
              </span>
            </span>
          </a>
        </motion.div>

        {/* ── Phone lines ── */}
        <div className="grid gap-5">
          {lines.map(({ key, line, icon: Icon, label, hint }, i) => (
            <motion.div
              key={key}
              {...rise(0.1 + i * 0.1)}
              className="relative overflow-hidden rounded-3xl bg-midnight p-6 text-white shadow-[0_20px_45px_rgba(8,15,31,0.25)] md:p-7"
            >
              <div aria-hidden="true" className="pointer-events-none absolute -end-10 -top-10 h-40 w-40 rounded-full bg-cyan/15 blur-2xl" />

              <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="flex items-center gap-2 text-lg font-bold">
                      {label}
                      {/* Live dot */}
                      <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60 motion-reduce:animate-none" />
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#25D366]" />
                      </span>
                    </p>
                    <p className="text-sm text-white/55">{hint}</p>
                  </div>
                </div>

                <div className="flex shrink-0 gap-2">
                  <a
                    href={`tel:${line.tel}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-midnight transition-transform hover:-translate-y-0.5"
                  >
                    <Phone className="h-4 w-4" />
                    {t('contactCall')}
                  </a>
                  <a
                    href={`https://wa.me/${line.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-bold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t('contactWhatsApp')}
                  </a>
                </div>
              </div>

              <a href={`tel:${line.tel}`} className="relative mt-5 block w-fit" aria-label={`${label}: ${line.groups.join(' ')}`}>
                <FlapNumber line={line} startDelay={0.2 + i * 0.3} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
