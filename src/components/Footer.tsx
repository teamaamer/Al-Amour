'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Products', href: '#products' },
      { label: 'Catalogs', href: '#catalogs' },
      { label: 'Contact', href: '#contact' },
    ],
    products: [
      { label: 'Wood Paints', href: '#' },
      { label: 'Car Paints', href: '#' },
      { label: 'Furniture Finishing', href: '#' },
      { label: 'Carpenter Supplies', href: '#' },
      { label: 'Color Mixing', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: MessageCircle, href: 'https://wa.me/970XXXXXXXX', label: 'WhatsApp' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  return (
    <footer id="contact" className="bg-navy text-white">
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
                alt="Al-Amour Company"
                width={220}
                height={110}
                className="h-24 md:h-28 w-auto mb-4"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading supplier of premium paint products and finishing solutions in Palestine since 1999.
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
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Company</h4>
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
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Products</h4>
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
            <h4 className="text-sm font-bold uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@alamour.ps"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  info@alamour.ps
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <div className="text-white/80">
                  <div>+970 2 XXX XXXX</div>
                  <div>+970 59X XXX XXX</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-white/80">Palestine</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/60">
            © {currentYear} Al-Amour Company. All rights reserved.
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
