'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navbar
    home: 'الرئيسية',
    about: 'من نحن',
    services: 'خدماتنا',
    products: 'المنتجات',
    contact: 'اتصل بنا',
    getQuote: 'احصل على عرض سعر',
    
    // Hero
    heroTitle: 'منتجات دهانات متميزة',
    heroSubtitle: 'وحلول تجارية',
    heroDescription: 'شريكك الموثوق لدهانات الخشب، دهانات السيارات، وحلول مزج الألوان الاحترافية في فلسطين.',
    exploreProducts: 'استكشف المنتجات',
    contactUs: 'اتصل بنا',
    
    // Premium Hero
    since1999: 'منذ عام 1999',
    heroMainTitle: 'حلول طلاء وراتنج',
    heroSubTitle: 'متقدمة',
    heroDescription2: 'منتجات متميزة وأنظمة تقنية للتطبيقات الصناعية والسيارات والبحرية.',
    downloadCatalogs: 'تحميل الكتالوجات',
    catalogs: 'الكتالوجات',
    technicalResources: 'الموارد التقنية',
    catalogsDescription: 'قم بتنزيل الكتالوجات التقنية التفصيلية للحصول على معلومات شاملة حول منتجاتنا ومواصفاتها.',
    carouselAutoRotate: 'تتغير تلقائياً',
    carouselPrevious: 'الكتالوج السابق',
    carouselNext: 'الكتالوج التالي',
    carouselCardLabel: 'كتالوج PDF',
    pdfPreview: 'معاينة PDF',
    downloadPdf: 'تحميل PDF',
    catalogPage: 'الكتالوج',
    catalogPageOf: 'من',
    gelcoatSystemsTitle: 'أنظمة الجليكوت',
    gelcoatSystemsDesc: 'حلول جليكوت متميزة للتطبيقات البحرية والسيارات والصناعة.',
    antistaticGelcoatTitle: 'جليكوت مضاد للكهرباء الساكنة',
    antistaticGelcoatDesc: 'أنظمة جليكوت متخصصة مضادة للكهرباء الساكنة للتطبيقات التقنية المتقدمة.',
    bioResinTitle: 'الراتنج الحيوي',
    bioResinDesc: 'أنظمة راتنج حيوية صديقة للبيئة للتصنيع المستدام.',
    dcpdResinsTitle: 'راتنجات DCPD',
    dcpdResinsDesc: 'أنظمة راتنج DCPD عالية الأداء للتطبيقات الصعبة.',
    vinylEsterResinTitle: 'راتنج فينيل إستر',
    vinylEsterResinDesc: 'راتنجات فينيل إستر متقدمة للتطبيقات المقاومة للتآكل.',
    toolingSystemsTitle: 'أنظمة الأدوات',
    toolingSystemsDesc: 'حلول احترافية لصناعة القوالب وأنظمة الأدوات.',
    needHelp: 'تحتاج مساعدة؟',
    contactSupport: 'اتصل بفريق الدعم الفني لدينا',
    trustedQuality: 'جودة موثوقة',
    premiumProducts: 'منتجات متميزة',
    technicalSupport: 'دعم فني',
    engineeredFor: 'مصمم من أجل',
    performanceDurability: 'الأداء والمتانة',
    
    // Stats
    performanceSnapshot: 'لمحة عن الأداء',
    yearsExperience: 'سنوات\nالخبرة',
    premiumBrands: 'علامات\nمتميزة',
    productsLabel: 'المنتجات',
    satisfiedClients: 'عملاء\nراضون',
    qualityAssured: 'جودة\nمضمونة',
    
    // Services
    ourServices: 'خدماتنا',
    servicesDescription: 'حلول شاملة للدهانات والتشطيبات للمحترفين والشركات',
    
    // Product Categories
    ourProducts: 'منتجاتنا',
    productCategories: 'فئات المنتجات',
    productCategoriesDesc: 'استكشف مجموعة العمور المتميزة من الطلاءات والدهانات وأنظمة الراتنج والحلول التقنية.',
    woodCoatings: 'طلاءات الخشب',
    woodCoatingsDesc: 'حلول طلاء خشب احترافية عالية الأداء',
    resinsGelcoats: 'الراتنجات والجيلكوت',
    resinsGelcoatsDesc: 'أنظمة راتنج متقدمة للتطبيقات الصناعية',
    toolingSystems: 'أنظمة القوالب',
    colorMixingDescShort: 'تقنية مزج ألوان دقيقة ومطابقة مخصصة',
    carpenterSuppliesDescShort: 'أدوات ومواد أساسية للنجارين المحترفين',
    woodPaints: 'دهانات الخشب',
    woodPaintsDesc: 'حلول تشطيب خشب عالية الجودة للأثاث والنجارة والمحترفين في الأعمال الخشبية.',
    carPaints: 'دهانات السيارات',
    carPaintsDesc: 'منتجات دهانات سيارات احترافية لورش العمل ومتخصصي إعادة طلاء السيارات.',
    furnitureFinishing: 'تشطيب الأثاث',
    furnitureFinishingDesc: 'مجموعة كاملة من منتجات تشطيب الأثاث بما في ذلك الورنيش والصبغات والطلاءات الواقية.',
    carpenterSupplies: 'مستلزمات النجارة',
    carpenterSuppliesDesc: 'مستلزمات ومواد أساسية للنجارين المحترفين وشركات الأعمال الخشبية.',
    colorMixing: 'حلول مزج الألوان',
    colorMixingDesc: 'تقنية مزج ألوان متقدمة وخدمات مطابقة ألوان مخصصة لمتطلبات الألوان الدقيقة.',
    
    // Service Examples
    oakStain: 'صبغة البلوط',
    mahoganyFinish: 'تشطيب الماهوجني',
    clearVarnish: 'ورنيش شفاف',
    walnutStain: 'صبغة الجوز',
    metallicBlue: 'أزرق معدني',
    pearlWhite: 'أبيض لؤلؤي',
    matteBlack: 'أسود مطفي',
    racingRed: 'أحمر سباق',
    satinVarnish: 'ورنيش ساتان',
    glossFinish: 'تشطيب لامع',
    woodStain: 'صبغة خشب',
    lacquer: 'لكر',
    woodFiller: 'معجون خشب',
    sandpaper: 'ورق صنفرة',
    brushes: 'فرش',
    sealers: 'مواد عزل',
    customBlue: 'أزرق مخصص',
    customGreen: 'أخضر مخصص',
    customRed: 'أحمر مخصص',
    customYellow: 'أصفر مخصص',
    
    // About
    aboutUs: 'من نحن',
    aboutFeature1Title: 'خبرة متخصصة',
    aboutText1: 'نوفر منتجات دهانات وتشطيبات احترافية بخبرة تمتد لأكثر من عقدين في السوق الفلسطيني.',
    aboutFeature2Title: 'تطور مستمر',
    aboutText2: 'توسعنا من مورد متخصص إلى شركة متكاملة تشمل دهانات السيارات ومستلزمات النجارة ومزج الألوان.',
    aboutFeature3Title: 'شراكات عالمية',
    aboutText3: 'نتعاون مع ILVA وPOLITEK وERCO لتقديم حلول عالية الجودة للورش والشركات والمحترفين.',
    aboutFeature4Title: 'ثقة محلية',
    aboutText4: 'فهمنا العميق للسوق المحلي والتزامنا بالتميز يجعلنا خيارا موثوقا للمحترفين.',
    aboutFeature5Title: 'رحلة منذ 1999',
    aboutText5: 'منذ 1999 نواصل النمو بشغف الجودة وخدمة العملاء بنزاهة واحترافية.',
    
    // Blog
    latestUpdates: 'آخر التحديثات',
    blogDescription: 'تابع رحلتنا على وسائل التواصل الاجتماعي وابق على اطلاع بأحدث منتجاتنا ونصائحنا وأخبارنا',
    readMore: 'اقرأ المزيد',
    viewAllPosts: 'عرض جميع المنشورات',
    
    // Footer
    companyDescription: 'مورد رائد لمنتجات الدهانات المتميزة وحلول التشطيب في فلسطين منذ عام 1999.',
    company: 'الشركة',
    productsFooter: 'المنتجات',
    contactFooter: 'اتصل بنا',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    trustedByLeadingBrands: 'موثوق به من قبل العلامات التجارية الرائدة',
  },
  en: {
    // Navbar
    home: 'Home',
    about: 'About',
    services: 'Services',
    products: 'Products',
    contact: 'Contact',
    getQuote: 'Get Quote',
    
    // Hero
    heroTitle: 'Premium Paint Products',
    heroSubtitle: '& Trading Solutions',
    heroDescription: 'Your trusted partner for wood paints, car paints, and professional color mixing solutions in Palestine.',
    exploreProducts: 'Explore Products',
    contactUs: 'Contact Us',
    
    // Premium Hero
    since1999: 'SINCE 1999',
    heroMainTitle: 'Advanced Coating',
    heroSubTitle: '& Resin Solutions',
    heroDescription2: 'Premium products and technical systems for industrial, automotive, and marine applications.',
    downloadCatalogs: 'Download Catalogs',
    catalogs: 'Catalogs',
    technicalResources: 'Technical Resources',
    catalogsDescription: 'Download our detailed technical catalogs for comprehensive information about our products and specifications.',
    carouselAutoRotate: 'Auto rotates',
    carouselPrevious: 'Previous catalog',
    carouselNext: 'Next catalog',
    carouselCardLabel: 'PDF Catalog',
    pdfPreview: 'PDF Preview',
    downloadPdf: 'Download PDF',
    catalogPage: 'Catalog',
    catalogPageOf: 'of',
    gelcoatSystemsTitle: 'Gelcoat Systems',
    gelcoatSystemsDesc: 'Premium gelcoat solutions for marine, automotive, and industrial applications.',
    antistaticGelcoatTitle: 'Antistatic Gelcoat',
    antistaticGelcoatDesc: 'Specialized antistatic gelcoat systems for advanced technical applications.',
    bioResinTitle: 'Bio Resin',
    bioResinDesc: 'Eco-friendly bio-based resin systems for sustainable manufacturing.',
    dcpdResinsTitle: 'DCPD Resins',
    dcpdResinsDesc: 'High-performance DCPD resin systems for demanding applications.',
    vinylEsterResinTitle: 'Vinyl Ester Resin',
    vinylEsterResinDesc: 'Advanced vinyl ester resins for corrosion-resistant applications.',
    toolingSystemsTitle: 'Tooling Systems',
    toolingSystemsDesc: 'Professional tooling and mold-making system solutions.',
    needHelp: 'Need Help?',
    contactSupport: 'Contact our technical support team',
    trustedQuality: 'Trusted Quality',
    premiumProducts: 'Premium Products',
    technicalSupport: 'Technical Support',
    engineeredFor: 'Engineered for',
    performanceDurability: 'Performance & Durability',
    
    // Stats
    performanceSnapshot: 'PERFORMANCE SNAPSHOT',
    yearsExperience: 'YEARS\nEXPERIENCE',
    premiumBrands: 'PREMIUM\nBRANDS',
    productsLabel: 'PRODUCTS',
    satisfiedClients: 'SATISFIED\nCLIENTS',
    qualityAssured: 'QUALITY\nASSURED',
    
    // Services
    ourServices: 'Our Services',
    servicesDescription: 'Comprehensive paint and finishing solutions for professionals and businesses',
    
    // Product Categories
    ourProducts: 'Our Products',
    productCategories: 'Product Categories',
    productCategoriesDesc: "Explore Al-Amour's premium range of coatings, paints, resin systems, and technical product solutions.",
    woodCoatings: 'Wood Coatings',
    woodCoatingsDesc: 'Professional high-performance wood coating solutions',
    resinsGelcoats: 'Resins & Gelcoats',
    resinsGelcoatsDesc: 'Advanced resin systems for industrial applications',
    toolingSystems: 'Tooling Systems',
    colorMixingDescShort: 'Precise color mixing technology and custom matching',
    carpenterSuppliesDescShort: 'Essential tools and materials for professional carpenters',
    woodPaints: 'Wood Paints',
    woodPaintsDesc: 'Premium quality wood finishing solutions for furniture, carpentry, and woodworking professionals.',
    carPaints: 'Car Paints',
    carPaintsDesc: 'Professional automotive paint products for workshops and car refinishing specialists.',
    furnitureFinishing: 'Furniture Finishing',
    furnitureFinishingDesc: 'Complete range of furniture finishing products including varnishes, stains, and protective coatings.',
    carpenterSupplies: 'Carpenter Supplies',
    carpenterSuppliesDesc: 'Essential supplies and materials for professional carpenters and woodworking businesses.',
    colorMixing: 'Color Mixing Solutions',
    colorMixingDesc: 'Advanced color mixing technology and custom paint matching services for precise color requirements.',
    
    // Service Examples
    oakStain: 'Oak Stain',
    mahoganyFinish: 'Mahogany Finish',
    clearVarnish: 'Clear Varnish',
    walnutStain: 'Walnut Stain',
    metallicBlue: 'Metallic Blue',
    pearlWhite: 'Pearl White',
    matteBlack: 'Matte Black',
    racingRed: 'Racing Red',
    satinVarnish: 'Satin Varnish',
    glossFinish: 'Gloss Finish',
    woodStain: 'Wood Stain',
    lacquer: 'Lacquer',
    woodFiller: 'Wood Filler',
    sandpaper: 'Sandpaper',
    brushes: 'Brushes',
    sealers: 'Sealers',
    customBlue: 'Custom Blue',
    customGreen: 'Custom Green',
    customRed: 'Custom Red',
    customYellow: 'Custom Yellow',
    
    // About
    aboutUs: 'About Us',
    aboutFeature1Title: 'Specialized Expertise',
    aboutText1: 'We deliver professional paint and finishing solutions with more than two decades of market experience.',
    aboutFeature2Title: 'Continuous Growth',
    aboutText2: 'We evolved from a focused supplier into a full portfolio provider for automotive paints, carpentry supplies, and color mixing.',
    aboutFeature3Title: 'Global Partnerships',
    aboutText3: 'Our partnerships with ILVA, POLITEK, and ERCO bring trusted quality to workshops, companies, and professionals.',
    aboutFeature4Title: 'Local Trust',
    aboutText4: 'Deep local market knowledge and a quality-first approach make us a trusted professional partner.',
    aboutFeature5Title: 'A Journey Since 1999',
    aboutText5: 'Since 1999, our journey has been driven by quality, integrity, and long-term customer value.',
    
    // Blog
    latestUpdates: 'Latest Updates',
    blogDescription: 'Follow our journey on social media and stay updated with our latest products, tips, and news',
    readMore: 'Read More',
    viewAllPosts: 'View All Posts',
    
    // Footer
    companyDescription: 'Leading supplier of premium paint products and finishing solutions in Palestine since 1999.',
    company: 'Company',
    productsFooter: 'Products',
    contactFooter: 'Contact',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    trustedByLeadingBrands: 'Trusted by leading brands',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar'); // Arabic as default

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.ar] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'} className={language === 'ar' ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
