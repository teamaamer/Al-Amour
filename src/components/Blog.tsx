'use client';

import { motion } from 'framer-motion';
import { Instagram, Facebook, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

const Blog = () => {
  const { t } = useLanguage();
  const blogPosts = [
    {
      id: 1,
      title: 'New ILVA Wood Paint Collection',
      excerpt: 'Discover our latest premium wood finishing products from ILVA...',
      image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80',
      date: '2026-04-05',
      platform: 'instagram',
    },
    {
      id: 2,
      title: 'Color Mixing Workshop Success',
      excerpt: 'Thank you to everyone who attended our color mixing workshop...',
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=600&q=80',
      date: '2026-04-03',
      platform: 'facebook',
    },
    {
      id: 3,
      title: 'Professional Car Paint Solutions',
      excerpt: 'Explore our range of automotive paint products for workshops...',
      image: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&q=80',
      date: '2026-04-01',
      platform: 'instagram',
    },
    {
      id: 4,
      title: 'Furniture Finishing Tips',
      excerpt: 'Learn the best techniques for achieving perfect furniture finishes...',
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80',
      date: '2026-03-28',
      platform: 'facebook',
    },
  ];

  return (
    <section id="blog" className="py-12 md:py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
            {t('latestUpdates')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('blogDescription')}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: '0 25px 50px -12px rgba(1, 151, 215, 0.25)',
              }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent-cyan/0 group-hover:from-primary/5 group-hover:to-accent-cyan/5 transition-all duration-500 pointer-events-none z-10" />
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                  {post.platform === 'instagram' ? (
                    <Instagram className="text-primary" size={20} />
                  ) : (
                    <Facebook className="text-primary" size={20} />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Calendar size={16} />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>

                <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                  {post.excerpt}
                </p>

                <button className="text-primary font-semibold text-sm flex items-center group-hover:gap-2 transition-all">
                  {t('readMore')}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.article>
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
          <button className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-all hover:shadow-xl inline-flex items-center gap-2">
            {t('viewAllPosts')}
            <Instagram size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
