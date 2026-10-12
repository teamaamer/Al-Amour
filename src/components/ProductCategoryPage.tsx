'use client';

import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, Download, Droplets, Eraser, Eye, FileText, Layers, MessageCircle, Paintbrush, Search, ShieldCheck, Sparkles, X } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { SALES } from '@/lib/contact';
import type { CategoryPage, Product, StepIcon } from '@/data/catalogTypes';
import { woodCoatingsPage } from '@/data/woodCoatings';
import { carPaintsPage } from '@/data/carPaints';
import { resinsPage } from '@/data/resins';


const PAGES = {
  'wood-coatings': woodCoatingsPage,
  'car-paints': carPaintsPage,
  'resins-gelcoats': resinsPage,
} satisfies Record<string, CategoryPage>;

export type CategorySlug = keyof typeof PAGES;

const STEP_ICONS: Record<StepIcon, typeof Droplets> = {
  droplets: Droplets,
  layers: Layers,
  paintbrush: Paintbrush,
  eraser: Eraser,
  sparkles: Sparkles,
};

// Literal class names so Tailwind keeps them
const STEP_COLS: Record<number, string> = { 3: 'md:grid-cols-3', 4: 'md:grid-cols-2 lg:grid-cols-4' };

// Inline flags: Windows has no flag emoji, so 🇮🇹 would render as the letters "IT"
const Flag = ({ country }: { country: 'it' | 'tr' }) =>
  country === 'it' ? (
    <svg viewBox="0 0 3 2" className="inline-block h-[0.8em] w-[1.2em] shrink-0 rounded-[2px] align-[-0.05em]" aria-hidden="true">
      <rect width="1" height="2" fill="#009246" />
      <rect x="1" width="1" height="2" fill="#fff" />
      <rect x="2" width="1" height="2" fill="#CE2B37" />
    </svg>
  ) : (
    <svg viewBox="0 0 30 20" className="inline-block h-[0.8em] w-[1.2em] shrink-0 rounded-[2px] align-[-0.05em]" aria-hidden="true">
      <rect width="30" height="20" fill="#E30A17" />
      <circle cx="11.25" cy="10" r="5" fill="#fff" />
      <circle cx="12.5" cy="10" r="4" fill="#E30A17" />
      <polygon fill="#fff" points="17.1,10 20.9,8.76 18.55,11.98 18.55,8.02 20.9,11.24" />
    </svg>
  );

export default function ProductCategoryPage({ slug }: { slug: CategorySlug }) {
  const { title, intro, index, steps, stepNote, brands, productTypes, products, photos, catalogs }: CategoryPage = PAGES[slug];
  const brandById = Object.fromEntries(brands.map((b) => [b.id, b]));
  const brandOf = (p: Product) => (p.brand ? brandById[p.brand] : undefined);
  const { language, setLanguage, t } = useLanguage();
  const isRTL = language === 'ar';
  const reduceMotion = useReducedMotion();

  const [brand, setBrand] = useState<string>('all');
  const [type, setType] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<Product | null>(null);
  const selectedBrand = selected ? brandOf(selected) : undefined;

  const brandProducts = useMemo(
    () => (brand === 'all' ? products : products.filter((p) => p.brand === brand)),
    [brand, products],
  );

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return brandProducts.filter(
      (p) =>
        (type === 'all' || p.type === type) &&
        (!q || p.code.toLowerCase().includes(q) || p.name.ar.includes(q) || p.name.en.toLowerCase().includes(q)),
    );
  }, [brandProducts, type, query]);

  // Group by product type so the grid reads as an organised system, not a flat list
  const groups = productTypes
    .map((pt) => ({ ...pt, items: visible.filter((p) => p.type === pt.id) }))
    .filter((g) => g.items.length > 0);

  const typeCount = (id: string) => brandProducts.filter((p) => p.type === id).length;

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  const BackArrow = isRTL ? ArrowRight : ArrowLeft;


  return (
    <main className="min-h-screen bg-[#F4F6F9] text-midnight">
      {/* ================= HEADER ================= */}
      <header className="relative overflow-hidden bg-midnight text-white">
        <div className="pointer-events-none absolute -top-32 end-[-10%] h-[420px] w-[420px] rounded-full bg-cyan/15 blur-3xl" />

        <div className="relative mx-auto max-w-[1280px] px-5 md:px-8">
          <nav className="flex items-center justify-between py-4">
            <Link href="/" className="shrink-0" aria-label="Al-Amour">
              <Image src="/logo.png" alt="Al-Amour General Trading Co." width={467} height={480} className="h-16 w-auto" priority />
            </Link>

            <div className="flex items-center gap-3">
              <Link
                href="/#products"
                aria-label={t('wcBack')}
                className="flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm text-white/80 transition-colors hover:border-sky/60 hover:text-white sm:px-4"
              >
                <BackArrow className="h-4 w-4" />
                <span className="hidden sm:inline">{t('wcBack')}</span>
              </Link>
              <button
                type="button"
                onClick={() => setLanguage(isRTL ? 'en' : 'ar')}
                aria-label="Switch language"
                className="rounded-full border border-sky/45 bg-deep/80 px-3 py-2 text-xs font-bold tracking-wide text-white"
              >
                {isRTL ? 'EN' : 'AR'}
              </button>
            </div>
          </nav>

          <div className="grid gap-10 pb-14 pt-8 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-16">
            <div>
              <p className="mb-4 flex items-center gap-3 text-sm font-semibold text-sky">
                <span className="h-0.5 w-10 bg-cyan" />
                {t('wcEyebrow')} · {index}
              </p>
              <h1 className="mb-4 text-4xl font-black md:text-6xl">{title[language]}</h1>
              <p className="max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">{intro[language]}</p>

              {/* Catalog downloads, one per brand */}
              <div className="mt-7 flex flex-wrap gap-3">
                {brands.map((b) => (
                  <a
                    key={b.id}
                    href={b.catalog}
                    download
                    className="group inline-flex items-center gap-3 rounded-2xl bg-white py-2 pe-5 ps-2 text-midnight shadow-lg transition-transform hover:-translate-y-0.5"
                  >
                    <span className="flex h-11 w-16 items-center justify-center rounded-xl bg-[#F4F6F9] px-2">
                      <Image src={b.logo} alt={b.name} width={120} height={60} className="max-h-8 w-auto object-contain" />
                    </span>
                    <span className="flex flex-col leading-tight">
                      <span className="text-sm font-bold">
                        {t('wcCatalog')} {b.name}
                      </span>
                      <span className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-steel">
                        <Flag country={b.country} /> PDF
                      </span>
                    </span>
                    <span className="ms-1 flex h-9 w-9 items-center justify-center rounded-full bg-cyan text-midnight transition-colors group-hover:bg-sky">
                      <Download className="h-4 w-4" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Brand switcher, only worth showing when there is more than one brand */}
            {brands.length > 1 ? (
            <div className="grid grid-cols-3 gap-2 rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm sm:min-w-[440px]">
              {['all', ...brands.map((b) => b.id)].map((id) => {
                const active = brand === id;
                const b = id === 'all' ? null : brandById[id];
                const count = id === 'all' ? products.length : products.filter((p) => p.brand === id).length;
                return (
                  <button
                    key={id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setBrand(id);
                      setType('all');
                    }}
                    className={`flex flex-col items-center gap-1.5 rounded-xl px-3 py-3 transition-colors ${
                      active ? 'bg-white text-midnight shadow-lg' : 'text-white/75 hover:bg-white/10'
                    }`}
                  >
                    <span className="flex h-8 items-center">
                      {b ? (
                        <Image src={b.logo} alt={b.name} width={120} height={60} className={`h-7 w-auto ${active ? '' : 'rounded bg-white px-1.5 py-0.5'}`} />
                      ) : (
                        <span className="text-lg font-black">{t('wcAll')}</span>
                      )}
                    </span>
                    <span className="text-[11px] font-medium opacity-80">
                      {b ? (
                        <span className="inline-flex items-center gap-1.5">
                          <Flag country={b.country} />
                          {b.origin[language]}
                        </span>
                      ) : (
                        `${count} ${t('wcProducts')}`
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
            ) : brands.length === 1 ? (
              <div className="flex items-center gap-4 self-start rounded-2xl border border-white/10 bg-white/5 p-3 pe-6 backdrop-blur-sm lg:self-end">
                <span className="flex h-16 w-28 items-center justify-center rounded-xl bg-white px-3">
                  <Image src={brands[0].logo} alt={brands[0].name} width={160} height={80} className="max-h-11 w-auto object-contain" />
                </span>
                <span className="flex flex-col gap-1">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold">
                    <Flag country={brands[0].country} />
                    {brands[0].origin[language]}
                  </span>
                  <span className="text-xs text-white/60">
                    {products.length} {t('wcProducts')}
                  </span>
                </span>
              </div>
            ) : (
              <div className="flex items-center gap-4 self-start rounded-2xl border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm lg:self-end">
                <span className="text-5xl font-black text-cyan">{catalogs?.length ?? products.length}</span>
                <span className="flex flex-col gap-0.5 text-sm">
                  <span className="font-bold">{t('wcTechCatalogs')}</span>
                  <span className="text-white/60">{t('wcTechCatalogsNote')}</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </header>

      {catalogs ? (
        /* ================= CATALOGS ================= */
        <section className="mx-auto max-w-[1280px] px-5 pb-24 pt-12 md:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalogs.map((c, i) => (
              <motion.article
                key={c.file}
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
                className="group flex flex-col overflow-hidden rounded-3xl border border-steel/20 bg-white shadow-sm transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Document header: number, type and file size */}
                <div className="flex items-center gap-4 bg-midnight px-6 py-5 text-white">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/15 text-cyan transition-colors group-hover:bg-cyan group-hover:text-midnight">
                    <FileText className="h-6 w-6" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-xs font-bold text-cyan">{c.kind[language]}</span>
                    <span dir="ltr" className="font-mono text-[11px] text-white/60">
                      PDF · {c.size}
                    </span>
                  </span>
                  <span className="ms-auto text-3xl font-black text-white/90">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="mb-1 text-xl font-black">{c.name[language]}</h2>
                  <p className="mb-3 text-sm font-semibold text-cyan">{c.tagline[language]}</p>
                  <p className="mb-6 text-sm leading-relaxed text-steel">{c.summary[language]}</p>

                  <div className="mt-auto flex gap-2">
                    <a
                      href={c.file}
                      download
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-midnight px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-deep"
                    >
                      <Download className="h-4 w-4" />
                      {t('wcCatalog')}
                    </a>
                    <a
                      href={c.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t('wcView')} ${c.name[language]}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-midnight/15 px-4 py-3 text-sm font-bold text-midnight transition-colors hover:border-cyan"
                    >
                      <Eye className="h-4 w-4" />
                      {t('wcView')}
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      ) : (
        <>
      {/* ================= APPLICATION SYSTEM ================= */}
      <section className="mx-auto -mt-px max-w-[1280px] px-5 pt-10 md:px-8">
        <div className="rounded-3xl border border-steel/25 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-lg font-bold">{t('wcSystemTitle')}</h2>
            <p className="text-sm text-steel">{stepNote?.[language]}</p>
          </div>
          <ol className={`grid gap-3 ${STEP_COLS[steps?.length ?? 3] ?? 'md:grid-cols-3'}`}>
            {steps?.map((s, i) => {
              const Icon = STEP_ICONS[s.icon];
              return (
              <li key={s.title.en} className="relative flex items-center gap-4 rounded-2xl bg-[#F4F6F9] p-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-midnight text-cyan">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold text-cyan">0{i + 1}</p>
                  <p className="font-bold">{s.title[language]}</p>
                  <p className="text-sm text-steel">{s.desc[language]}</p>
                </div>
              </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* ================= FILTERS ================= */}
      <div className="sticky top-0 z-30 mt-8 border-y border-steel/20 bg-[#F4F6F9]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-3 md:flex-row md:items-center md:px-8">
          <div className="-mx-1 flex flex-1 gap-2 overflow-x-auto px-1 pb-1 md:pb-0 [scrollbar-width:none]">
            {[{ id: 'all' as const, label: { ar: t('wcAll'), en: t('wcAll') } }, ...productTypes].map((pt) => {
              const count = pt.id === 'all' ? brandProducts.length : typeCount(pt.id);
              if (count === 0) return null;
              const active = type === pt.id;
              return (
                <button
                  key={pt.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setType(pt.id)}
                  className={`flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                    active ? 'border-midnight bg-midnight text-white' : 'border-steel/30 bg-white text-midnight hover:border-cyan'
                  }`}
                >
                  {pt.label[language]}
                  <span className={`rounded-full px-1.5 text-[11px] ${active ? 'bg-cyan text-midnight' : 'bg-[#F4F6F9] text-steel'}`}>{count}</span>
                </button>
              );
            })}
          </div>

          <label className="relative block md:w-72">
            <Search className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-steel" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('wcSearch')}
              className="w-full rounded-full border border-steel/30 bg-white py-2 pe-4 ps-9 text-sm outline-none transition-colors focus:border-cyan"
            />
          </label>
        </div>
      </div>

      {/* ================= PRODUCTS ================= */}
      <section className="mx-auto max-w-[1280px] px-5 pb-24 pt-10 md:px-8">
        {groups.length === 0 && <p className="py-20 text-center text-steel">{t('wcNoResults')}</p>}

        {groups.map((group) => (
          <div key={group.id} className="mb-14 last:mb-0">
            <div className="mb-5 flex items-center gap-4">
              <h2 className="text-2xl font-black md:text-3xl">{group.label[language]}</h2>
              <span className="h-px flex-1 bg-steel/25" />
              <span className="text-sm font-semibold text-steel">
                {group.items.length} {t('wcProducts')}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
              {group.items.map((p, i) => {
                const b = brandOf(p);
                return (
                  <motion.button
                    key={p.code}
                    type="button"
                    onClick={() => setSelected(p)}
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.4, delay: Math.min(i, 6) * 0.04 }}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-steel/20 bg-white text-start shadow-sm transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:border-cyan/60 hover:shadow-xl focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-cyan"
                  >
                    <div className={`relative w-full overflow-hidden bg-white ${photos ? 'aspect-[4/5]' : 'aspect-square p-4'}`}>
                      <Image
                        src={p.image}
                        alt={b ? `${b.name} ${p.code}` : p.name[language]}
                        fill
                        sizes="(min-width: 1024px) 280px, (min-width: 768px) 30vw, 45vw"
                        className={`transition-transform duration-500 group-hover:scale-[1.04] ${photos ? 'object-cover' : 'object-contain p-3'}`}
                      />
                      {b && (
                        <span className="absolute start-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-midnight/90 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white">
                          <Flag country={b.country} /> {b.name}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col gap-1 border-t border-steel/15 p-4">
                      <span dir="ltr" className="self-start font-mono text-xs font-bold tracking-wide text-cyan">
                        {p.code}
                      </span>
                      <h3 className="text-base font-bold leading-snug md:text-lg">{p.name[language]}</h3>
                      <div className="mt-auto flex items-center justify-between gap-2 pt-2 text-xs text-steel">
                        <span>{p.sizes?.[language]}</span>
                        <span className="font-semibold text-midnight opacity-0 transition-opacity group-hover:opacity-100">
                          {t('wcDetails')} {isRTL ? '←' : '→'}
                        </span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        ))}
      </section>

        </>
      )}

      {/* ================= DETAIL PANEL ================= */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex items-end justify-center bg-midnight/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={selected.name[language]}
              initial={reduceMotion ? false : { y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative grid max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-t-3xl bg-white sm:rounded-3xl md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]"
            >
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label={t('wcClose')}
                className="absolute end-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-midnight/5 text-midnight transition-colors hover:bg-midnight/10"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative min-h-[280px] bg-gradient-to-b from-white to-[#EEF2F7] md:min-h-[520px]">
                <Image
                  src={selected.image}
                  alt={selectedBrand ? `${selectedBrand.name} ${selected.code}` : selected.name[language]}
                  fill
                  sizes="(min-width: 768px) 380px, 100vw"
                  className={photos ? 'object-cover' : 'object-contain p-8'}
                />
              </div>

              <div className="flex flex-col gap-6 p-6 md:p-8">
                <div>
                  <div className="mb-3 flex flex-wrap items-center gap-2 pe-12">
                    {selectedBrand && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-midnight px-3 py-1 text-xs font-bold text-white">
                        <Flag country={selectedBrand.country} /> {selectedBrand.name}
                      </span>
                    )}
                    <span className="rounded-full bg-[#F4F6F9] px-3 py-1 text-xs font-semibold text-steel">
                      {productTypes.find((pt) => pt.id === selected.type)?.label[language]}
                    </span>
                  </div>
                  <p dir="ltr" className={`font-mono text-sm font-bold text-cyan ${isRTL ? 'text-right' : ''}`}>
                    {selected.code}
                  </p>
                  <h2 className="mb-2 text-2xl font-black md:text-3xl">{selected.name[language]}</h2>
                  <p className="leading-relaxed text-steel">{selected.description[language]}</p>
                </div>

                <div>
                  <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-midnight/60">{selected.applications ? t('wcKeyFeatures') : t('wcFeatures')}</h3>
                  <ul className="space-y-2.5">
                    {selected.features[language].map((f) => (
                      <li key={f} className="flex gap-3 leading-relaxed">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-cyan" strokeWidth={3} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {selected.applications && (
                  <div>
                    <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-midnight/60">{t('wcApplications')}</h3>
                    <ul className="flex flex-wrap gap-2">
                      {selected.applications[language].map((a) => (
                        <li key={a} className="rounded-full bg-[#F4F6F9] px-3 py-1.5 text-sm font-medium">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <dl className="grid gap-3 sm:grid-cols-2 empty:hidden">
                  {selected.mix && (
                    <div className="rounded-2xl bg-[#F4F6F9] p-4 sm:col-span-2">
                      <dt className="mb-1 text-xs font-semibold text-steel">{t('wcMix')}</dt>
                      <dd className="font-bold">{selected.mix[language]}</dd>
                    </div>
                  )}
                  {selected.gloss && (
                    <div className="rounded-2xl bg-[#F4F6F9] p-4">
                      <dt className="mb-2 text-xs font-semibold text-steel">{t('wcGloss')}</dt>
                      <dd className="flex flex-wrap gap-1.5">
                        {selected.gloss.map((g) => (
                          <span key={g} dir="ltr" className="rounded-md bg-white px-2 py-0.5 text-sm font-bold">
                            {g}
                          </span>
                        ))}
                      </dd>
                    </div>
                  )}
                  {selected.colors && (
                    <div className="rounded-2xl bg-[#F4F6F9] p-4">
                      <dt className="mb-1 text-xs font-semibold text-steel">{t('wcColors')}</dt>
                      <dd className="font-bold">{selected.colors[language]}</dd>
                    </div>
                  )}
                  {selected.sizes && (
                    <div className="rounded-2xl bg-[#F4F6F9] p-4">
                      <dt className="mb-1 text-xs font-semibold text-steel">{t('wcSizes')}</dt>
                      <dd className="font-bold">{selected.sizes[language]}</dd>
                    </div>
                  )}
                </dl>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/${SALES.whatsapp}?text=${encodeURIComponent(
                      `${t('wcAskMessage')} ${selectedBrand ? `${selectedBrand.name} ` : ''}${selected.code} – ${selected.name[language]}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="h-4 w-4" />
                    {t('wcAsk')}
                  </a>
                  <a
                    href={selected.catalog ?? selectedBrand?.catalog}
                    download
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-midnight px-5 py-3 text-sm font-bold text-midnight transition-colors hover:bg-midnight hover:text-white"
                  >
                    <Download className="h-4 w-4" />
                    {t('wcCatalog')} {selectedBrand?.name}
                  </a>
                </div>

                {selectedBrand && (
                  <p className="flex items-center gap-2 text-xs text-steel">
                    <ShieldCheck className="h-4 w-4 text-cyan" />
                    {selectedBrand.origin[language]}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
