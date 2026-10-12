'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Pause, Play, Quote, Volume2, VolumeX } from 'lucide-react';

// Each milestone is drawn as a paint swatch chip, getting deeper in tone as the company grows
const SWATCHES = [
  { year: '1999', code: 'AM-99', bg: 'bg-sky', text: 'text-midnight' },
  { year: '2015', code: 'AM-15', bg: 'bg-cyan', text: 'text-midnight' },
  { year: '2016', code: 'AM-16', bg: 'bg-deep', text: 'text-white' },
  { year: null, code: 'AM-NOW', bg: 'bg-midnight', text: 'text-cyan' },
];

const About = () => {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLDivElement | null>(null);
  const playerRef = useRef<HTMLVideoElement | null>(null);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = () => {
    const v = playerRef.current;
    if (!v) return;
    if (v.paused) v.play().catch(() => {});
    else v.pause();
  };

  const toggleMute = () => {
    const v = playerRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    // Unmuting a paused video should also start it, so the sound is heard
    if (!v.muted && v.paused) v.play().catch(() => {});
  };
  const shouldLoadVideo = useInView(videoRef, { once: true, margin: '200px 0px' });

  const milestones = SWATCHES.map((s, i) => ({
    ...s,
    year: s.year ?? t('aboutM4Year'),
    title: t(`aboutM${i + 1}Title`),
    text: t(`aboutM${i + 1}Text`),
  }));

  const lists = [
    { title: t('aboutOfferTitle'), items: t('aboutOffer').split('|') },
    { title: t('aboutServeTitle'), items: t('aboutServe').split('|') },
  ];

  const rise = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-60px' },
    transition: { duration: 0.6, delay },
  });

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 md:py-28">
      {/* Oversized founding year as a watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 start-[-1%] select-none text-[9rem] font-black leading-none tracking-tighter text-transparent [-webkit-text-stroke:1.5px_rgb(var(--color-steel-gray-rgb)/0.25)] md:text-[16rem]"
      >
        1999
      </span>

      <div className="relative mx-auto max-w-[1280px] px-6">
        {/* ── Statement ── */}
        <div className="mb-14 grid gap-8 lg:mb-20 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <motion.div {...rise()}>
            <p className="mb-5 flex items-center gap-3 text-sm font-semibold text-midnight lg:text-base">
              <span className="h-0.5 w-10 shrink-0 bg-cyan" />
              {t('aboutUs')}
            </p>
            <h2 className="text-4xl font-black leading-[1.15] text-midnight md:text-5xl lg:text-6xl">
              {t('aboutTaglineStart')}{' '}
              <span className="relative inline-block text-cyan">
                {t('aboutTaglineHighlight')}
                {/* Brush-stroke underline */}
                <svg aria-hidden="true" viewBox="0 0 300 16" preserveAspectRatio="none" className="absolute -bottom-2 start-0 h-3 w-full text-sky/60">
                  <path d="M3 11 C 60 3, 140 3, 297 9" stroke="currentColor" strokeWidth="6" strokeLinecap="round" fill="none" />
                </svg>
              </span>
            </h2>
          </motion.div>

          <motion.p {...rise(0.1)} className="text-lg leading-relaxed text-steel md:text-xl md:leading-relaxed">
            {t('aboutIntro')}
          </motion.p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(280px,380px)_1fr] lg:gap-14">
          {/* ── Video ── */}
          <motion.div {...rise()} ref={videoRef} className="relative h-[460px] md:h-[560px] lg:h-full lg:min-h-[640px]">
            {/* Offset cyan panel echoing the product and founder cards */}
            <div className="absolute inset-0 translate-y-4 rounded-[28px] bg-cyan ltr:translate-x-4 rtl:-translate-x-4" />

            <div className="relative h-full overflow-hidden rounded-[28px] bg-midnight shadow-[0_24px_55px_rgba(8,15,31,0.35)]">
              {shouldLoadVideo ? (
                <video
                  ref={playerRef}
                  src="/aboutus.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster="/heroam2.png"
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  onClick={togglePlay}
                  className="h-full w-full cursor-pointer object-cover"
                />
              ) : (
                <div className="h-full w-full bg-gradient-to-br from-deep to-midnight" />
              )}

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight/85 via-transparent to-midnight/30" />

              <span className="absolute start-5 top-5 rounded-full bg-white/95 px-4 py-1.5 text-sm font-black text-midnight">
                {t('aboutSince')}
              </span>

              {shouldLoadVideo && (
                <div className="absolute end-5 top-5 flex gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={playing ? t('videoPause') : t('videoPlay')}
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-midnight shadow-lg transition-transform hover:scale-105"
                  >
                    {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-px" />}
                  </button>
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={muted ? t('videoUnmute') : t('videoMute')}
                    className={`flex h-10 w-10 items-center justify-center rounded-full shadow-lg transition-transform hover:scale-105 ${
                      muted ? 'bg-cyan text-midnight' : 'bg-white/95 text-midnight'
                    }`}
                  >
                    {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </button>
                </div>
              )}
              <span className="absolute bottom-5 start-5 end-5 flex items-center gap-2 text-sm font-semibold text-white">
                <MapPin className="h-4 w-4 shrink-0 text-cyan" />
                {t('aboutLocation')}
              </span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-10">
            {/* ── Journey as a paint fan deck ── */}
            <div>
              <motion.h3 {...rise()} className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-steel">
                {t('aboutJourney')}
              </motion.h3>

              <ol className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-3">
                {milestones.map((m, i) => (
                  <motion.li
                    key={m.code}
                    initial={reduceMotion ? false : { opacity: 0, y: 40, rotate: 0 }}
                    whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -2 : 2 }}
                    whileHover={reduceMotion ? undefined : { y: -10, rotate: 0, zIndex: 10 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.55, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
                    className="relative flex flex-col overflow-hidden rounded-2xl border border-steel/20 bg-white shadow-[0_14px_30px_rgba(8,15,31,0.12)]"
                  >
                    <div className={`flex aspect-[4/3] flex-col justify-between p-4 ${m.bg} ${m.text}`}>
                      <span className="text-[10px] font-bold tracking-[0.2em] opacity-70" dir="ltr">
                        {m.code}
                      </span>
                      <span className="text-3xl font-black leading-none md:text-4xl">{m.year}</span>
                    </div>
                    <div className="flex flex-1 flex-col gap-1 p-4">
                      <p className="font-bold leading-snug text-midnight">{m.title}</p>
                      <p className="text-sm leading-relaxed text-steel">{m.text}</p>
                    </div>
                    {/* Punch hole, like a real swatch chip */}
                    <span aria-hidden="true" className="absolute end-3 top-3 h-2.5 w-2.5 rounded-full bg-white/70 ring-1 ring-black/10" />
                  </motion.li>
                ))}
              </ol>
            </div>

            {/* ── What we supply / who we serve ── */}
            <div className="grid gap-6 sm:grid-cols-2">
              {lists.map((list, li) => (
                <motion.div key={list.title} {...rise(li * 0.08)}>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-steel">{list.title}</h3>
                  <ul className="flex flex-wrap gap-2">
                    {list.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-steel/30 px-4 py-2 text-sm font-semibold text-midnight transition-colors hover:border-cyan hover:bg-cyan/10"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* ── Belief ── */}
            <motion.blockquote {...rise()} className="relative overflow-hidden rounded-[28px] bg-midnight p-7 text-white md:p-9">
              <Quote aria-hidden="true" className="absolute -bottom-8 end-4 h-28 w-28 text-cyan/15" strokeWidth={1.5} />
              <p className="relative mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan">{t('aboutBeliefTitle')}</p>
              <p className="relative text-lg leading-relaxed text-white/85 md:text-xl md:leading-relaxed">{t('aboutBelief')}</p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
