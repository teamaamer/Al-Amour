'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CONTACT_EMAIL, FACEBOOK_URL, INSTAGRAM_URL, SALES, SUPPORT } from '@/lib/contact';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: t('aboutUs'), href: '#about' },
      { label: t('products'), href: '#products' },
      { label: t('catalogs'), href: '#catalogs' },
      { label: t('contact'), href: '#contact' },
    ],
    products: [
      { label: t('footerWoodPaints'), href: '#' },
      { label: t('footerCarPaints'), href: '#' },
      { label: t('footerFurnitureFinishing'), href: '#' },
      { label: t('footerCarpenterSupplies'), href: '#' },
      { label: t('footerColorMixing'), href: '#' },
    ],
    legal: [
      { label: t('privacyPolicy'), href: '#' },
      { label: t('termsOfService'), href: '#' },
    ],
  };

  const socialLinks = [
    { icon: MessageCircle, href: `https://wa.me/${SALES.whatsapp}`, label: 'WhatsApp' },
    { icon: Instagram, href: INSTAGRAM_URL, label: 'Instagram' },
    { icon: Facebook, href: FACEBOOK_URL, label: 'Facebook' },
  ];

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-[1280px] mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <Image
                src="/logo.png"
                alt={t('companyName')}
                width={467}
                height={480}
                className="h-28 md:h-32 w-auto mb-4"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              {t('companyDescription')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">{t('company')}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">{t('productsFooter')}</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">{t('contactFooter')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  dir="ltr"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="space-y-1 text-white/80">
                  <a href={`tel:${SALES.tel}`} className="block hover:text-white">
                    <span className="text-white/50">{t('contactSales')}: </span>
                    <span dir="ltr">{SALES.groups.join('-')}</span>
                  </a>
                  <a href={`tel:${SUPPORT.tel}`} className="block hover:text-white">
                    <span className="text-white/50">{t('contactSupportLine')}: </span>
                    <span dir="ltr">{SUPPORT.groups.join('-')}</span>
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{t('aboutLocation')}</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {currentYear} {t('companyName')}. {t('allRightsReserved')}
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
