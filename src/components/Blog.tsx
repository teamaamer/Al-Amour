'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { INSTAGRAM_URL } from '@/lib/contact';

// Instagram reel IDs (instagram.com/reel/<id>), newest first
const REELS = ['DeHLa3FAs4u', 'DeOd5WIiM0R', 'DdY6ET7j3NQ', 'DdOT5KAFJ9d'];

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

const Blog = () => {
  const { t } = useLanguage();

  // embed.js only scans the page when it first loads; re-scan if it was already loaded (e.g. client navigation)
  useEffect(() => {
    window.instgrm?.Embeds.process();
  }, []);

  return (
    <section id="blog" className="py-12 md:py-16 bg-midnight text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-sky mb-4">
            {t('latestUpdates')}
          </h2>
          <p className="text-xl text-cool max-w-2xl mx-auto">
            {t('blogDescription')}
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {REELS.map((id, index) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-steel bg-white shadow-lg [&_iframe]:!m-0 [&_iframe]:!min-w-0 [&_iframe]:!rounded-none [&_iframe]:!border-0"
            >
              {/* Replaced by embed.js with an auto-sized iframe; the link is the no-JS fallback */}
              <blockquote
                className="instagram-media !m-0 !w-full !min-w-0 !max-w-none !border-0 !shadow-none"
                data-instgrm-permalink={`https://www.instagram.com/reel/${id}/`}
                data-instgrm-version="14"
              >
                <a href={`https://www.instagram.com/reel/${id}/`} target="_blank" rel="noopener noreferrer" className="block p-6 text-center font-semibold text-midnight">
                  Instagram
                </a>
              </blockquote>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan text-midnight px-8 py-4 rounded-lg font-semibold text-lg hover:bg-sky transition-all hover:shadow-xl inline-flex items-center gap-2"
          >
            {t('viewAllPosts')}
            <Instagram size={20} />
          </a>
        </motion.div>
      </div>

      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" onLoad={() => window.instgrm?.Embeds.process()} />
    </section>
  );
};

export default Blog;
