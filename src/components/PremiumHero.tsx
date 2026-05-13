'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import Image from 'next/image';
import { Download, Menu, Shield, Award, Headphones } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const PARTICLES = [
  { id: 0, x: 55, y: 20, s: 1.5, d: 9,  dl: 0.0 },
  { id: 1, x: 72, y: 55, s: 2.0, d: 12, dl: 1.2 },
  { id: 2, x: 85, y: 35, s: 1.0, d: 10, dl: 2.4 },
  { id: 3, x: 63, y: 80, s: 1.5, d: 11, dl: 0.6 },
  { id: 4, x: 90, y: 65, s: 1.0, d: 13, dl: 1.8 },
  { id: 5, x: 78, y: 10, s: 1.5, d: 8,  dl: 3.0 },
  { id: 6, x: 68, y: 90, s: 1.0, d: 10, dl: 0.3 },
];

export default function PremiumHero() {
  const { language, setLanguage, t } = useLanguage();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spring = { stiffness: 35, damping: 22 };
  const sX = useSpring(mouseX, spring);
  const sY = useSpring(mouseY, spring);

  const bgX   = useTransform(sX, [-1, 1], [-18, 18]);
  const bgY   = useTransform(sY, [-1, 1], [-10, 10]);
  const cardX = useTransform(sX, [-1, 1], [ 12, -12]);
  const cardY = useTransform(sY, [-1, 1], [  8,  -8]);
  const arcsX = useTransform(sX, [-1, 1], [ -8,   8]);
  const arcsY = useTransform(sY, [-1, 1], [ -5,   5]);
  const txtX  = useTransform(sX, [-1, 1], [  4,  -4]);

  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left - r.width  / 2) / (r.width  / 2));
    mouseY.set((e.clientY - r.top  - r.height / 2) / (r.height / 2));
  };

  return (
    <section
      className="relative h-screen w-full overflow-hidden bg-[#05030d]"
      onMouseMove={onMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
    >
      {/* ── FULL SCREEN BACKGROUND IMAGE ── */}
      <motion.div style={{ x: bgX, y: bgY }} className="absolute inset-[-4%] z-0">
        <Image
          src="/heroam.png"
          alt="Al-Amour facility"
          fill
          className="object-cover"
          priority
          style={{ opacity: 0.60 }}
        />
      </motion.div>

      {/* Left-side dark gradient so text is readable */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: 'linear-gradient(to right, rgba(5,3,13,0.97) 0%, rgba(5,3,13,0.92) 30%, rgba(5,3,13,0.65) 55%, rgba(5,3,13,0.15) 75%, transparent 100%)',
      }} />
      {/* Top vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: 'linear-gradient(to bottom, rgba(5,3,13,0.88) 0%, transparent 30%)',
      }} />
      {/* Bottom vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{
        background: 'linear-gradient(to top, rgba(5,3,13,0.92) 0%, transparent 40%)',
      }} />

      {/* Blue ambient glow — center right */}
      <div className="absolute z-[1] pointer-events-none" style={{
        top: '25%', right: '15%', width: 600, height: 600, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,151,215,0.16) 0%, transparent 65%)',
        filter: 'blur(60px)',
      }} />
      {/* Bottom blue floor glow */}
      <div className="absolute z-[1] pointer-events-none" style={{
        bottom: '-5%', right: '10%', width: 500, height: 300, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,151,215,0.18) 0%, transparent 70%)',
        filter: 'blur(50px)',
      }} />

      {/* Subtle grid */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.018]" style={{
        backgroundImage: 'linear-gradient(rgba(0,151,215,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,151,215,1) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Particles (right side only) */}
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute z-[2] rounded-full bg-cyan-400/50 pointer-events-none"
          style={{ width: p.s, height: p.s, left: `${p.x}%`, top: `${p.y}%` }}
          animate={{ y: [0, -22, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: p.d, delay: p.dl, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      {/* ── ARCS (upper right) ── */}
      <motion.div
        style={{ x: arcsX, y: arcsY, position: 'absolute', top: 0, right: 0, width: '45%', height: '55%', zIndex: 3, pointerEvents: 'none' }}
      >
        <div className="absolute" style={{ top: 0, right: 0, width: '100%', height: '100%' }}>
          <svg width="100%" height="100%" viewBox="0 0 500 400" fill="none" overflow="visible"
            style={{ position: 'absolute', top: 0, right: 0 }}>
            <circle cx="420" cy="60"  r="220" stroke="rgba(0,151,215,0.10)" strokeWidth="0.6" />
            <circle cx="420" cy="60"  r="170" stroke="rgba(0,151,215,0.14)" strokeWidth="0.5" strokeDasharray="6 12" />
            <circle cx="420" cy="60"  r="120" stroke="rgba(6,182,212,0.10)" strokeWidth="0.5" />
            <circle cx="420" cy="60"  r="75"  stroke="rgba(6,182,212,0.08)" strokeWidth="0.4" strokeDasharray="3 8" />
            {/* Sweep */}
            <motion.circle
              cx="420" cy="60" r="170"
              stroke="rgba(6,182,212,0.65)" strokeWidth="1.2" strokeLinecap="round"
              pathLength={1} strokeDasharray="0.08 0.92"
              animate={{ rotate: 360 }}
              transition={{ duration: 14, ease: 'linear', repeat: Infinity }}
              style={{ transformOrigin: '420px 60px' }}
            />
            {/* Orbit dots */}
            {[30, 120, 210, 300].map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              return (
                <motion.circle
                  key={i}
                  cx={420 + 170 * Math.cos(rad)}
                  cy={60  + 170 * Math.sin(rad)}
                  r="2"
                  fill="rgba(6,182,212,0.85)"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ duration: 3, delay: i * 0.7, repeat: Infinity }}
                />
              );
            })}
          </svg>
        </div>
      </motion.div>

      {/* ── NAVBAR ── */}
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-50 px-8 py-6 lg:px-14"
        dir="rtl"
      >
        <div className="mx-auto flex max-w-[1700px] items-center justify-between">
          {/* Logo — right side in RTL */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center gap-3"
          >
            <div className="hidden md:block text-right">
              <div className="text-lg font-bold tracking-[0.12em] text-white lg:text-xl">AL-AMOUR</div>
              <div className="text-[10px] tracking-[0.28em] text-blue-400/80">GENERAL TRADING CO.</div>
            </div>
            <div
              className="relative h-14 w-14 lg:h-16 lg:w-16"
              style={{ filter: 'drop-shadow(0 0 14px rgba(0,151,215,0.50))' }}
            >
              <Image src="/logo.png" alt="Al-Amour Logo" fill className="object-contain" />
            </div>
          </motion.div>

          {/* Controls — left side in RTL */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
              className="hidden rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/75 backdrop-blur-md transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:text-white md:block"
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 backdrop-blur-md transition-all hover:border-blue-400/40 hover:bg-blue-500/10">
              <Menu className="h-4 w-4 text-white/75" />
            </button>
          </motion.div>
        </div>
      </motion.nav>

      {/* ── MAIN CONTENT ── */}
      <div
        className="relative z-10 mx-auto flex h-[calc(100vh-88px)] max-w-[1700px] items-center px-8 lg:px-14"
        dir="ltr"
      >
        <div className="grid w-full grid-cols-1 items-center lg:grid-cols-2">

          {/* ══ LEFT — TEXT ══ */}
          <motion.div
            style={{ x: txtX }}
            className="flex flex-col gap-5 lg:gap-6"
            dir="rtl"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <span
                className="text-xs font-bold tracking-[0.30em] text-cyan-400 lg:text-sm"
                style={{ filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.6))' }}
              >
                منذ عام 1999
              </span>
              <div className="h-px w-14 bg-gradient-to-l from-cyan-400/60 to-transparent" />
            </motion.div>

            {/* Heading */}
            <div className="flex flex-col gap-0">
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.55 }}
                className="font-black leading-[1.08] text-white"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', letterSpacing: '-0.02em' }}
              >
                حلول طلاء و
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.70 }}
                className="font-black leading-[1.08]"
                style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', letterSpacing: '-0.02em' }}
              >
                <span className="text-white">منتجات </span>
                <span
                  className="bg-gradient-to-l from-cyan-300 via-sky-400 to-cyan-400 bg-clip-text text-transparent"
                  style={{ filter: 'drop-shadow(0 0 22px rgba(6,182,212,0.65))' }}
                >
                  متقدمة
                </span>
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="max-w-[400px] text-sm leading-[1.80] text-white/55 lg:text-base"
            >
              منتجات متميزة وأنظمة تقنية للتطبيقات الصناعية والسيارات والبحرية وتشطيب الأثاث.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-wrap items-center gap-3"
            >
              <motion.a
                href="#products"
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(6,182,212,0.50), 0 6px 24px rgba(0,151,215,0.40)' }}
                whileTap={{ scale: 0.97 }}
                className="relative overflow-hidden rounded-full px-7 py-3 text-sm font-bold text-white lg:px-9 lg:py-3.5"
                style={{
                  background: 'linear-gradient(135deg, #0097d7 0%, #06b6d4 55%, #0284c7 100%)',
                  boxShadow: '0 0 20px rgba(6,182,212,0.35), 0 4px 16px rgba(0,151,215,0.30)',
                }}
              >
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(105deg, transparent 28%, rgba(255,255,255,0.18) 50%, transparent 72%)' }}
                  animate={{ x: ['-100%', '220%'] }}
                  transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
                />
                <span className="relative z-10">استكشف المنتجات</span>
              </motion.a>

              <motion.a
                href="#catalogs"
                whileHover={{ scale: 1.04, borderColor: 'rgba(6,182,212,0.50)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full border px-7 py-3 text-sm font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 lg:px-9 lg:py-3.5"
                style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.16)' }}
              >
                <Download className="h-3.5 w-3.5 text-cyan-400" />
                تحميل الكتالوجات
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.15 }}
              className="flex flex-wrap items-center gap-5"
            >
              {([
                [Shield,     'جودة موثوقة'],
                [Award,      'منتجات متميزة'],
                [Headphones, 'دعم فني'],
              ] as const).map(([Icon, label]) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                    <Icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-xs font-medium text-white/70">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.28 }}
              className="flex flex-wrap gap-2"
            >
              {([['المنتجات','#products'],['الكتالوجات','#catalogs'],['اتصل بنا','#contact']] as const).map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-full border px-4 py-1.5 text-xs font-medium text-white/65 transition-all hover:border-white/30 hover:text-white/90"
                  style={{ borderColor: 'rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.04)' }}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* ══ RIGHT — FLOATING CARD ONLY ══ */}
          <div className="relative hidden h-[82vh] lg:block">

            {/* INDUSTRIAL COATINGS label — upper right */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              className="absolute right-8 top-16 z-20 flex flex-col items-end gap-1"
            >
              <div className="flex items-center gap-2">
                <div className="h-px w-16 bg-gradient-to-l from-cyan-400/50 to-transparent" />
                <span className="text-[9px] font-bold tracking-[0.22em] text-cyan-400/75">INDUSTRIAL</span>
              </div>
              <span className="self-end text-[9px] font-bold tracking-[0.22em] text-cyan-400/75 mr-[4.5rem]">COATINGS</span>
            </motion.div>

            {/* Floating card — heroam1 bottom right */}
            <motion.div
              style={{ x: cardX, y: cardY }}
              className="absolute bottom-[8%] right-[4%] z-20 w-[58%]"
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
                style={{
                  rotate: 2.5,
                  overflow: 'hidden',
                  borderRadius: '22px',
                  border: '1.5px solid rgba(255,255,255,0.55)',
                  boxShadow: '0 0 0 1px rgba(0,151,215,0.40), 0 0 50px rgba(0,151,215,0.30), 0 0 100px rgba(0,151,215,0.12), 0 30px 70px rgba(0,0,0,0.75)',
                }}
                className="relative aspect-[4/3]"
              >
                <Image
                  src="/heroam1.png"
                  alt="Al-Amour building"
                  fill
                  className="object-cover"
                  style={{ opacity: 0.95 }}
                />
                {/* Subtle bottom overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#05030d]/40 to-transparent" />
                {/* Neon top edge */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                {/* Shine sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(108deg, transparent 28%, rgba(255,255,255,0.06) 50%, transparent 72%)' }}
                  animate={{ x: ['-120%', '220%'] }}
                  transition={{ duration: 2, ease: 'easeInOut', repeat: Infinity, repeatDelay: 6 }}
                />
              </motion.div>
            </motion.div>

            {/* PREMIUM MATERIALS — bottom left with line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="absolute bottom-[22%] left-4 z-20 flex items-center gap-2"
            >
              <div className="flex flex-col">
                <span className="text-[8px] font-bold tracking-[0.22em] text-blue-400/65">PREMIUM</span>
                <span className="text-[8px] font-bold tracking-[0.22em] text-blue-400/65">MATERIALS</span>
              </div>
              <div className="h-px w-20 bg-gradient-to-r from-blue-400/50 to-transparent" />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-400/60" />
            </motion.div>

            {/* SINCE 1999 — bottom right with line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
              className="absolute bottom-[5%] right-[62%] z-20 flex items-center gap-2"
            >
              <div className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400/50" />
              <span className="text-[8px] font-bold tracking-[0.22em] text-cyan-400/70">SINCE 1999</span>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
