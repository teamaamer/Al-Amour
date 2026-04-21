'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

interface CatalogCardProps {
  title: string;
  description: string;
  fileSize: string;
  fileName: string;
  color: string;
  t: (key: string) => string;
}

const CatalogCard = ({ title, description, fileSize, fileName, color, t }: CatalogCardProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/catgs/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group relative flex h-full w-full flex-col overflow-hidden rounded-3xl bg-white shadow-[0_20px_80px_rgba(10,13,26,0.12)] ring-1 ring-black/5">
      <div className={`h-1.5 ${color}`} />

      <div className="flex h-full flex-col">
        <div className="bg-[#f7f9fc] p-4 sm:p-5">
          <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white shadow-inner">
            <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-black/10 bg-white/95 px-4 py-3 text-[11px] uppercase tracking-[0.3em] text-gray-500 backdrop-blur-sm">
              <span>{t('pdfPreview')}</span>
              <span>{fileSize}</span>
            </div>

            <div className="pt-11">
              <iframe
                src={`/catgs/${encodeURIComponent(fileName)}#toolbar=0&navpanes=0&scrollbar=0`}
                title={`${title} PDF preview`}
                className="h-[280px] w-full bg-white sm:h-[300px] lg:h-[320px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-between gap-5 p-5 sm:p-6">
          <div>
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${color} bg-opacity-10`}>
              <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
              <span className="text-navy">{t('carouselCardLabel')}</span>
            </div>

            <h3 className="text-2xl font-bold text-navy mb-3">
              {title}
            </h3>

            <p className="text-base text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>

          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-blue-400 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/25 transition-all"
          >
            <Download className="h-4 w-4" />
            {t('downloadPdf')}
          </motion.button>
        </div>
      </div>
    </div>
  );
};

const Catalogs = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);

  const catalogs = [
    {
      id: 1,
      titleKey: 'gelcoatSystemsTitle',
      descriptionKey: 'gelcoatSystemsDesc',
      fileSize: '491 KB',
      fileName: 'GELCOAT (1).pdf',
      color: 'bg-blue-500',
    },
    {
      id: 2,
      titleKey: 'antistaticGelcoatTitle',
      descriptionKey: 'antistaticGelcoatDesc',
      fileSize: '998 KB',
      fileName: 'ANTISTATIC GELCOAT (2).pdf',
      color: 'bg-blue-400',
    },
    {
      id: 3,
      titleKey: 'bioResinTitle',
      descriptionKey: 'bioResinDesc',
      fileSize: '596 KB',
      fileName: 'BIO RESIN (1).pdf',
      color: 'bg-blue-600',
    },
    {
      id: 4,
      titleKey: 'dcpdResinsTitle',
      descriptionKey: 'dcpdResinsDesc',
      fileSize: '595 KB',
      fileName: 'DCPD RESINS (1).pdf',
      color: 'bg-navy',
    },
    {
      id: 5,
      titleKey: 'vinylEsterResinTitle',
      descriptionKey: 'vinylEsterResinDesc',
      fileSize: '793 KB',
      fileName: 'VİNYL ESTER RESIN (1).pdf',
      color: 'bg-navy-light',
    },
    {
      id: 6,
      titleKey: 'toolingSystemsTitle',
      descriptionKey: 'toolingSystemsDesc',
      fileSize: '795 KB',
      fileName: 'TOOLING SYSTEM (1).pdf',
      color: 'bg-primary',
    },
  ];

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % catalogs.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, [catalogs.length]);

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => (currentIndex - 1 + catalogs.length) % catalogs.length);
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => (currentIndex + 1) % catalogs.length);
  };

  return (
    <section id="catalogs" className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <div className="flex items-center gap-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-500" />
              <span className="text-blue-500 text-sm lg:text-base font-semibold tracking-widest uppercase">
                {t('technicalResources')}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
          >
            {t('downloadCatalogs')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('catalogsDescription')}
          </motion.p>
        </div>

        {/* Catalogs Carousel */}
        <div className="relative mx-auto max-w-7xl">
          <div className="sticky top-24 z-30 mb-6 rounded-2xl border border-white/70 bg-white/90 px-4 py-4 shadow-lg backdrop-blur-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-blue-500">
                  {t('carouselAutoRotate')}
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  {t('catalogPage')} {String(activeIndex + 1).padStart(2, '0')} {t('catalogPageOf')} {String(catalogs.length).padStart(2, '0')} {t('catalogs')}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {catalogs.map((catalog, index) => (
                  <button
                    key={catalog.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex h-8 min-w-8 items-center justify-center rounded-full border px-3 text-xs font-semibold transition-all duration-500 ${
                      index === activeIndex
                        ? 'border-blue-500 bg-blue-500 text-white'
                        : 'border-gray-200 bg-white text-gray-500 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                    aria-label={`${t('catalogPage')} ${index + 1}`}
                    aria-current={index === activeIndex ? 'true' : undefined}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl px-0 lg:px-16">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden lg:flex items-center">
              <button
                type="button"
                onClick={goToPrevious}
                className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/90 text-navy shadow-lg backdrop-blur-md transition-transform hover:scale-105 hover:bg-white"
                aria-label={t('carouselPrevious')}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden lg:flex items-center">
              <button
                type="button"
                onClick={goToNext}
                className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-white/90 text-navy shadow-lg backdrop-blur-md transition-transform hover:scale-105 hover:bg-white"
                aria-label={t('carouselNext')}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.18}
                onDragEnd={(_, info) => {
                  const swipeThreshold = 60;

                  if (info.offset.x < -swipeThreshold) {
                    goToNext();
                  }

                  if (info.offset.x > swipeThreshold) {
                    goToPrevious();
                  }
                }}
                className="grid grid-cols-1 gap-6 cursor-grab active:cursor-grabbing lg:hidden"
              >
                <div className="h-full">
                  <CatalogCard
                    title={t(catalogs[activeIndex].titleKey)}
                    description={t(catalogs[activeIndex].descriptionKey)}
                    fileSize={catalogs[activeIndex].fileSize}
                    fileName={catalogs[activeIndex].fileName}
                    color={catalogs[activeIndex].color}
                    t={t}
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="hidden lg:block">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="grid grid-cols-4 gap-6"
                >
                  {Array.from({ length: 4 }, (_, offset) => catalogs[(activeIndex + offset) % catalogs.length]).map((catalog) => (
                    <div key={`${catalog.id}-${activeIndex}`} className="h-full">
                      <CatalogCard
                        title={t(catalog.titleKey)}
                        description={t(catalog.descriptionKey)}
                        fileSize={catalog.fileSize}
                        fileName={catalog.fileName}
                        color={catalog.color}
                        t={t}
                      />
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-50 rounded-2xl border border-blue-100">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
              <Download className="w-5 h-5 text-white" />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-navy">{t('needHelp')}</p>
              <p className="text-xs text-gray-600">{t('contactSupport')}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalogs;
