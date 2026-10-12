'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Download, Phone } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { HELP_LINE } from '@/lib/contact';

interface CatalogCardProps {
  title: string;
  description: string;
  fileSize: string;
  fileName: string;
  color: string;
  t: (key: string) => string;
  isActive?: boolean;
}

const CatalogCard = ({ title, description, fileSize, fileName, color, t, isActive = false }: CatalogCardProps) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/catgs/${fileName}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={[
        'group relative flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-deep shadow-[0_18px_45px_rgba(8,15,31,0.32)] ring-1 ring-steel transition-all duration-300',
        isActive ? 'scale-[1.02] shadow-[0_24px_55px_rgba(8,15,31,0.48)] ring-cyan/40' : 'scale-100',
      ].join(' ')}
    >
      <div className={`h-1.5 ${color}`} />

      <div className="flex h-full flex-col p-4 sm:p-5">
        <div className="relative overflow-hidden rounded-[22px] border border-steel bg-gradient-to-br from-midnight to-deep shadow-inner">
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-steel bg-midnight/95 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-cool backdrop-blur-sm">
            <span>{t('pdfPreview')}</span>
            <span>{fileSize}</span>
          </div>

          <iframe
            src={`/catgs/${encodeURIComponent(fileName)}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
            title={`${title} PDF preview`}
            loading="lazy"
            className="h-[280px] w-full bg-midnight sm:h-[300px] lg:h-[320px]"
          />
        </div>

        <div className="mt-5 flex flex-1 flex-col justify-between gap-5">
          <div>
            <div className={`mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${color} bg-opacity-10`}>
              <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
              <span className="text-cool">{t('carouselCardLabel')}</span>
            </div>

            <h3 className="mb-3 text-xl font-bold text-white sm:text-2xl">
              {title}
            </h3>

            <p className="text-sm leading-relaxed text-cool sm:text-base">
              {description}
            </p>
          </div>

          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan to-sky px-4 py-3 font-semibold text-midnight shadow-lg shadow-cyan/10 transition-all"
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
  const [page, setPage] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Desktop shows 4 cards per page, mobile 1; paging by whole pages avoids repeating cards
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const catalogs = [
    {
      id: 8,
      titleKey: 'ilvaCatalogTitle',
      descriptionKey: 'ilvaCatalogDesc',
      fileSize: '5.6 MB',
      fileName: 'ilva.pdf',
      color: 'bg-cyan',
    },
    {
      id: 9,
      titleKey: 'ercoCatalogTitle',
      descriptionKey: 'ercoCatalogDesc',
      fileSize: '4.8 MB',
      fileName: 'ERCO.pdf',
      color: 'bg-sky',
    },
    {
      id: 10,
      titleKey: 'polytekCatalogTitle',
      descriptionKey: 'polytekCatalogDesc',
      fileSize: '7.6 MB',
      fileName: 'politek (1).pdf',
      color: 'bg-cyan-600',
    },
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

  const perPage = isDesktop ? 4 : 1;
  const pageCount = Math.ceil(catalogs.length / perPage);
  const currentPage = Math.min(page, pageCount - 1);
  const pageItems = catalogs.slice(currentPage * perPage, currentPage * perPage + perPage);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setPage((p) => (Math.min(p, pageCount - 1) + 1) % pageCount);
    }, 10000);

    return () => window.clearInterval(interval);
  }, [pageCount]);

  const goToPrevious = () => {
    setPage((p) => (Math.min(p, pageCount - 1) - 1 + pageCount) % pageCount);
  };

  const goToNext = () => {
    setPage((p) => (Math.min(p, pageCount - 1) + 1) % pageCount);
  };

  return (
    <section id="catalogs" className="py-20 lg:py-32 bg-midnight text-white overflow-hidden">
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
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan" />
              <span className="text-sky text-sm lg:text-base font-semibold tracking-widest uppercase">
                {t('technicalResources')}
              </span>
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {t('downloadCatalogs')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-cool max-w-3xl mx-auto leading-relaxed"
          >
            {t('catalogsDescription')}
          </motion.p>
        </div>

        {/* Catalogs Carousel */}
        <div className="relative mx-auto max-w-7xl">
          <div className="sticky top-24 z-30 mb-6 rounded-2xl border border-steel bg-deep/95 px-4 py-4 shadow-lg backdrop-blur-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sky">
                  {t('carouselAutoRotate')}
                </p>
                <p className="mt-1 text-sm text-cool">
                  {isDesktop ? t('catalogsPageLabel') : t('catalogPage')} {String(currentPage + 1).padStart(2, '0')} {t('catalogPageOf')}{' '}
                  {String(pageCount).padStart(2, '0')}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {Array.from({ length: pageCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setPage(index)}
                    className={`flex h-8 min-w-8 items-center justify-center rounded-full border px-3 text-xs font-semibold transition-all duration-500 ${
                      index === currentPage
                        ? 'border-cyan bg-cyan text-midnight'
                        : 'border-steel bg-midnight text-cool hover:border-cyan hover:bg-deep'
                    }`}
                    aria-label={`${isDesktop ? t('catalogsPageLabel') : t('catalogPage')} ${index + 1}`}
                    aria-current={index === currentPage ? 'true' : undefined}
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
                className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-steel bg-deep/95 text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105 hover:bg-steel"
                aria-label={t('carouselPrevious')}
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 hidden lg:flex items-center">
              <button
                type="button"
                onClick={goToNext}
                className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-steel bg-deep/95 text-white shadow-lg backdrop-blur-md transition-transform hover:scale-105 hover:bg-steel"
                aria-label={t('carouselNext')}
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
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
                    title={t(pageItems[0].titleKey)}
                    description={t(pageItems[0].descriptionKey)}
                    fileSize={pageItems[0].fileSize}
                    fileName={pageItems[0].fileName}
                    color={pageItems[0].color}
                    t={t}
                    isActive
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="hidden lg:block">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="flex justify-center gap-6"
                >
                  {pageItems.map((catalog, offset) => (
                    <div key={catalog.id} className="h-full w-[calc((100%-4.5rem)/4)] shrink-0">
                      <CatalogCard
                        title={t(catalog.titleKey)}
                        description={t(catalog.descriptionKey)}
                        fileSize={catalog.fileSize}
                        fileName={catalog.fileName}
                        color={catalog.color}
                        t={t}
                        isActive={offset === 0}
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
          <a
            href={`tel:${HELP_LINE.tel}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-deep rounded-2xl border border-steel transition-colors hover:border-cyan"
          >
            <div className="w-10 h-10 rounded-full bg-cyan flex items-center justify-center">
              <Phone className="w-5 h-5 text-midnight" />
            </div>
            <div className="text-start">
              <p className="text-sm font-semibold text-white">{t('needHelp')}</p>
              <p className="text-xs text-cool">{t('contactSupport')}</p>
              <p dir="ltr" className="mt-1 flex gap-1.5 text-base font-bold text-cyan">
                <span>{HELP_LINE.code}</span>
                <span>{HELP_LINE.number}</span>
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Catalogs;
