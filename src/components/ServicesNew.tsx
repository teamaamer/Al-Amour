'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
}

const CategoryCard = ({ title, description, image, index }: CategoryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

      {/* Blue Accent Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <motion.div
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed mb-4">
            {description}
          </p>
        </motion.div>

        {/* Arrow Button */}
        <motion.div
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUpRight className="w-5 h-5 text-white" />
        </motion.div>
      </div>

      {/* Hover Border Glow */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 transition-all duration-500" />
    </motion.div>
  );
};

const ServicesNew = () => {
  const { t } = useLanguage();

  const categories = [
    {
      id: 1,
      title: t('woodCoatings'),
      description: t('woodCoatingsDesc'),
      image: '/cats/wood-coatings.png',
    },
    {
      id: 2,
      title: t('carPaints'),
      description: t('carPaintsDesc'),
      image: '/cats/car-paints.png',
    },
    {
      id: 3,
      title: t('resinsGelcoats'),
      description: t('resinsGelcoatsDesc'),
      image: '/cats/resins-and-gelcoats.png',
    },
    {
      id: 4,
      title: t('toolingSystems'),
      description: t('toolingSystemsDesc'),
      image: '/cats/tooling.png',
    },
    {
      id: 5,
      title: t('colorMixing'),
      description: t('colorMixingDescShort'),
      image: '/cats/color-mixing.png',
    },
    {
      id: 6,
      title: t('carpenterSupplies'),
      description: t('carpenterSuppliesDescShort'),
      image: '/cats/carpenter.png',
    },
  ];

  return (
    <section id="products" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
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
                {t('ourProducts')}
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
            {t('productCategories')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            {t('productCategoriesDesc')}
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              description={category.description}
              image={category.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesNew;
