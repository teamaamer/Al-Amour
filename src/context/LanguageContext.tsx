'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

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
    polytekCatalogTitle: 'كتالوج Politek',
    polytekCatalogDesc: 'الكتالوج الشامل لمنتجات Politek — دهانات خشب، مواد تشطيب، وحلول طلاء متقدمة.',
    ilvaCatalogTitle: 'كتالوج ILVA',
    ilvaCatalogDesc: 'كتالوج منتجات ILVA — دهانات وتشطيبات خشب احترافية بجودة إيطالية.',
    ercoCatalogTitle: 'كتالوج ERCO',
    ercoCatalogDesc: 'كتالوج منتجات ERCO — أساسات ودهانات خشب تركية بمعايير عالمية.',
    politekFullCatalogTitle: 'كتالوج Politek الكامل',
    politekFullCatalogDesc: 'الإصدار الكامل من كتالوج Politek بجميع المنتجات والمواصفات.',
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
    exploreCategory: 'استكشف الفئة',
    productCategories: 'فئات المنتجات',
    productCategoriesDesc: 'استكشف مجموعة العامور المتميزة من الطلاءات والدهانات وأنظمة الراتنج والحلول التقنية.',
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

    // Hero
    heroSince: 'منذ عام 1999',
    heroTitleLine1: 'حلول طلاء و',
    heroTitleLine2: 'منتجات ',
    heroTitleHighlight: 'متقدمة',
    premiumHeroDescription: 'منتجات متميزة وأنظمة تقنية للتطبيقات الصناعية والسيارات والبحرية وتشطيب الأثاث.',
    premiumProductsBadge: 'منتجات متميزة',
    switchLanguage: 'English',

    // Footer links
    footerWoodPaints: 'دهانات الخشب',
    footerCarPaints: 'دهانات السيارات',
    footerFurnitureFinishing: 'تشطيب الأثاث',
    footerCarpenterSupplies: 'مستلزمات النجارة',
    footerColorMixing: 'مزج الألوان',
    palestine: 'فلسطين',
    companyName: 'شركة العامور',
    whatsappLabel: 'تواصل معنا عبر واتساب',

    // Blog posts
    blogPost1Title: 'مجموعة دهانات الخشب الجديدة من ILVA',
    blogPost1Excerpt: 'اكتشف أحدث منتجات تشطيب الخشب المتميزة من ILVA...',
    blogPost2Title: 'نجاح ورشة مزج الألوان',
    blogPost2Excerpt: 'شكرا لكل من حضر ورشة مزج الألوان الخاصة بنا...',
    blogPost3Title: 'حلول دهانات سيارات احترافية',
    blogPost3Excerpt: 'استكشف مجموعتنا من منتجات دهانات السيارات للورش...',
    blogPost4Title: 'نصائح لتشطيب الأثاث',
    blogPost4Excerpt: 'تعلم أفضل التقنيات للحصول على تشطيب مثالي للأثاث...',

    // FAQ
    faqLabel: 'الأسئلة الشائعة',
    faqTitle: 'الأسئلة الأكثر شيوعًا',
    faqDescription: 'تعرّف على إجابات لأبرز الأسئلة حول الدهانات، وأنظمة التشطيب، ومنتجات تجهيز الأسطح، والحلول المهنية المتوفرة لدينا.',
    faq1Q: 'هل تتوفر دهانات تساعد على حماية الخشب من الاصفرار مع مرور الوقت؟',
    faq1A: 'نعم. تتضمن مجموعة المنتجات المتوفرة أنظمة دهان شفافة مصممة للمساعدة في الحفاظ على المظهر الطبيعي للخشب وتوفير مقاومة للاصفرار مع مرور الوقت.',
    faq2Q: 'هل تتوفر حلول لطلاء الخشب المعرض للرطوبة أو الظروف الخارجية؟',
    faq2A: 'نعم. تتضمن المجموعة منتجات مصممة لمقاومة الرطوبة والاستخدامات الخارجية، بما في ذلك طلاءات توفر الحماية من الماء وأشعة الشمس.',
    faq3Q: 'هل تتوفر طلاءات شفافة مقاومة للخدش للخشب؟',
    faq3A: 'نعم. تتوفر خيارات من الطلاءات الشفافة المقاومة للخدش للأسطح الخشبية المعرضة للاستخدام والاحتكاك المتكرر.',
    faq4Q: 'هل تتوفر درجات لمعان مختلفة لتشطيبات الخشب؟',
    faq4A: 'نعم. تتوفر بعض أنظمة الطلاء بدرجات لمعان متعددة، مما يتيح اختيار التشطيب المناسب حسب المظهر المطلوب.',
    faq5Q: 'هل تتوفر منتجات لإعادة دهان وإصلاح السيارات؟',
    faq5A: 'نعم. تشمل مجموعة المنتجات برايمرات السيارات، ومواد التعبئة، ودهانات الأكريليك، والطلاءات الشفافة، والتنر، ومزيلات الدهان، ومنتجات تجهيز الأسطح.',
    faq6Q: 'هل تتوفر منتجات لتجهيز الأجزاء البلاستيكية في السيارات قبل الدهان؟',
    faq6A: 'نعم. تتوفر برايمرات متخصصة لتحسين الالتصاق على الأسطح البلاستيكية وتجهيزها قبل تطبيق طبقة الدهان النهائية.',
    faq7Q: 'هل تتوفر حلول لتجهيز الأسطح المعدنية قبل الدهان؟',
    faq7A: 'نعم. تشمل المجموعة برايمرات للمعادن ومنتجات لتنظيف وتجهيز الأسطح المعدنية قبل تطبيق نظام الطلاء.',
    faq8Q: 'هل تتوفر منتجات لإزالة الدهان القديم قبل إعادة الطلاء؟',
    faq8A: 'نعم. تتوفر منتجات مخصصة لإزالة طبقات الدهان القديمة عن الأسطح المناسبة كجزء من عملية التجهيز لإعادة الطلاء.',
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
    polytekCatalogTitle: 'Politek Catalog',
    polytekCatalogDesc: 'Full Politek product catalog — wood coatings, finishing materials, and advanced coating solutions.',
    ilvaCatalogTitle: 'ILVA Catalog',
    ilvaCatalogDesc: 'ILVA product catalog — professional Italian wood coatings and finishes.',
    ercoCatalogTitle: 'ERCO Catalog',
    ercoCatalogDesc: 'ERCO product catalog — Turkish wood primers and coatings built to global standards.',
    politekFullCatalogTitle: 'Politek Full Catalog',
    politekFullCatalogDesc: 'The complete Politek catalog with all products and specifications.',
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
    exploreCategory: 'Explore Category',
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

    // Hero
    heroSince: 'SINCE 1999',
    heroTitleLine1: 'Advanced Coating',
    heroTitleLine2: '& Product ',
    heroTitleHighlight: 'Solutions',
    premiumHeroDescription: 'Premium products and technical systems for industrial, automotive, marine and furniture finishing applications.',
    premiumProductsBadge: 'Premium Products',
    switchLanguage: 'العربية',

    // Footer links
    footerWoodPaints: 'Wood Paints',
    footerCarPaints: 'Car Paints',
    footerFurnitureFinishing: 'Furniture Finishing',
    footerCarpenterSupplies: 'Carpenter Supplies',
    footerColorMixing: 'Color Mixing',
    palestine: 'Palestine',
    companyName: 'Al-Amour Company',
    whatsappLabel: 'Contact us on WhatsApp',

    // Blog posts
    blogPost1Title: 'New ILVA Wood Paint Collection',
    blogPost1Excerpt: 'Discover our latest premium wood finishing products from ILVA...',
    blogPost2Title: 'Color Mixing Workshop Success',
    blogPost2Excerpt: 'Thank you to everyone who attended our color mixing workshop...',
    blogPost3Title: 'Professional Car Paint Solutions',
    blogPost3Excerpt: 'Explore our range of automotive paint products for workshops...',
    blogPost4Title: 'Furniture Finishing Tips',
    blogPost4Excerpt: 'Learn the best techniques for achieving perfect furniture finishes...',

    // FAQ
    faqLabel: 'FAQ',
    faqTitle: 'Frequently Asked Questions',
    faqDescription: 'Find answers to common questions about our coatings, finishing systems, surface preparation products, and professional solutions.',
    faq1Q: 'Do you offer coatings that help protect wood from yellowing over time?',
    faq1A: 'Yes. Our available product range includes clear coating systems designed to help maintain the natural appearance of wood and provide resistance to yellowing over time.',
    faq2Q: 'Are there coating solutions for wood exposed to moisture or outdoor conditions?',
    faq2A: 'Yes. Our range includes products designed for moisture resistance and exterior applications, including coatings that provide protection against water and sunlight.',
    faq3Q: 'Do you have scratch-resistant clear coatings for wood?',
    faq3A: 'Yes. Scratch-resistant clear coating options are available for wooden surfaces exposed to frequent contact and wear.',
    faq4Q: 'Do you provide different gloss levels for wood finishes?',
    faq4A: 'Yes. Selected coating systems are available in multiple gloss levels, allowing the finish to be selected according to the desired appearance.',
    faq5Q: 'Do you offer products for automotive refinishing and repair?',
    faq5A: 'Yes. Our product range includes automotive primers, fillers, acrylic paints, clear coats, thinners, paint removers, and surface-preparation products.',
    faq6Q: 'Do you have products for preparing plastic automotive parts before painting?',
    faq6A: 'Yes. Specialized adhesion primers are available for plastic automotive surfaces to improve adhesion and prepare the surface before the final paint application.',
    faq7Q: 'Do you offer solutions for preparing metal surfaces before painting?',
    faq7A: 'Yes. Our range includes metal primers and surface-cleaning products designed to prepare metal surfaces and improve the quality of the subsequent coating system.',
    faq8Q: 'Are products available for removing old paint before refinishing?',
    faq8A: 'Yes. Paint-removal products are available for removing old coating layers from suitable surfaces as part of the refinishing process.',
  },
};

const STORAGE_KEY = 'al-amour-language';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar'); // Arabic as default

  // Restore the visitor's last choice
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') setLanguageState(saved);
    } catch {}
  }, []);

  // Keep <html lang/dir> in sync with the selected language
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
  };

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
