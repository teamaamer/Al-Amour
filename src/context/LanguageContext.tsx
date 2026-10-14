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
    contactHeadingStart: 'جاهزون دائماً',
    contactHeadingHighlight: 'لتلبية احتياجاتكم',
    contactIntro: 'فريقنا على استعداد للإجابة عن استفساراتكم، ومساعدتكم في اختيار المنتج المناسب لعملكم، وتجهيز طلبياتكم بسرعة واحترافية. تواصلوا معنا بالاتصال أو عبر الواتساب أو البريد الإلكتروني، ويسعدنا خدمتكم.',
    contactSales: 'المبيعات',
    contactSalesHint: 'الأسعار، الطلبيات، وتوفّر المنتجات',
    contactSupportLine: 'الدعم الفني',
    contactSupportHint: 'مساعدة في اختيار المنتج وطريقة التطبيق',
    contactCall: 'اتصال',
    contactWhatsApp: 'واتساب',
    contactEmail: 'البريد الإلكتروني',
    
    // Premium Hero
    since1999: 'منذ عام 1999',
    heroMainTitle: 'حلول دهانات وتغطية أثاث والسيارات',
    heroSubTitle: 'وحلول الريزن المتقدمة',
    heroDescription2: 'منتجات متميزة وأنظمة تقنية للتطبيقات الصناعية والسيارات.',
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
    catalogsPageLabel: 'الصفحة',
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
    polytekCatalogDesc: 'كتالوج منتجات Politek — معاجين، أساسات، دهانات، لكر ومستلزمات إصلاح ودهان السيارات.',
    ilvaCatalogTitle: 'كتالوج ILVA',
    ilvaCatalogDesc: 'كتالوج منتجات ILVA — دهانات وتشطيبات خشب احترافية بجودة إيطالية.',
    ercoCatalogTitle: 'كتالوج ERCO',
    ercoCatalogDesc: 'كتالوج منتجات ERCO — أساسات ودهانات خشب تركية بمعايير عالمية.',
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
    aboutTaglineStart: 'كل احتياجات شغلك',
    aboutTaglineHighlight: 'من مكان واحد.',
    aboutIntro: 'شركة العامور وشركاه للتجارة العامة شركة فلسطينية خاصة تأسّست عام 1999، ومقرّها في بديا، شارع مسحا، بمحافظة سلفيت. نعمل في استيراد وتوفير الأخشاب، ودهانات الأخشاب والسيارات، ومستلزمات النجّارين، لخدمة الفنيّين والحرفيّين وأصحاب الورش والشركات.',
    aboutJourney: 'مسيرتنا',
    aboutM1Title: 'البداية',
    aboutM1Text: 'انطلقنا بدهانات الأخشاب من بديا.',
    aboutM2Title: 'الأخشاب والنجارة',
    aboutM2Text: 'توسّعنا لتوفير الأخشاب ومستلزمات النجّارين.',
    aboutM3Title: 'دهانات السيارات',
    aboutM3Text: 'أضفنا دهانات السيارات ومستلزماتها.',
    aboutM4Year: 'اليوم',
    aboutM4Title: 'حلول متكاملة',
    aboutM4Text: 'منتجات وحلول مهنية للأثاث والمطابخ والأبواب والتشطيب.',
    aboutOfferTitle: 'ماذا نوفّر',
    aboutOffer: 'الأخشاب|دهانات الأخشاب|دهانات السيارات|مستلزمات النجّارين',
    aboutServeTitle: 'لمن نعمل',
    aboutServe: 'الفنيّون|الحرفيّون|أصحاب الورش|الشركات',
    aboutBeliefTitle: 'ما نؤمن به',
    aboutBelief: 'نؤمن بأنّ اختيار المنتج المناسب يصنع فرقاً في جودة العمل؛ لذلك يساعد فريقنا العملاء على اختيار ما يلائم احتياجاتهم. ونواصل تطوير منتجاتنا وخدماتنا، مستندين إلى الخبرة والمصداقية وثقة عملائنا، لنساهم في دعم أعمالهم والاقتصاد الوطني الفلسطيني.',
    aboutLocation: 'بديا · شارع مسحا · سلفيت',
    aboutSince: 'منذ 1999',
    videoPlay: 'تشغيل الفيديو',
    videoPause: 'إيقاف الفيديو',
    videoMute: 'كتم الصوت',
    videoUnmute: 'تشغيل الصوت',
    
    // Blog
    latestUpdates: 'آخر التحديثات',
    blogDescription: 'تابع رحلتنا على وسائل التواصل الاجتماعي وابق على اطلاع بأحدث منتجاتنا ونصائحنا وأخبارنا',
    readMore: 'اقرأ المزيد',
    viewAllPosts: 'عرض جميع المنشورات',
    
    // Wood coatings page
    wcBack: 'العودة للرئيسية',
    wcEyebrow: 'فئات المنتجات',
    wcSystemTitle: 'نظام التطبيق',
    wcColors: 'الألوان المتوفرة',
    wcApplications: 'مجالات الاستخدام',
    wcKeyFeatures: 'المميزات',
    wcTechCatalogs: 'كتالوجات فنية',
    wcTechCatalogsNote: 'جاهزة للعرض والتحميل',
    wcView: 'عرض',
    wcAll: 'الكل',
    wcSearch: 'ابحث بالاسم أو الكود',
    wcProducts: 'منتج',
    wcNoResults: 'لا توجد منتجات مطابقة',
    wcFeatures: 'المميزات والتطبيقات',
    wcMix: 'نسبة الخلط',
    wcGloss: 'درجات اللمعة',
    wcSizes: 'الأحجام المتوفرة',
    wcAsk: 'استفسر عبر واتساب',
    wcCatalog: 'تحميل الكتالوج',
    wcClose: 'إغلاق',
    wcAskMessage: 'مرحباً، أود الاستفسار عن المنتج',
    wcDetails: 'التفاصيل',

    // Founder
    founderEyebrow: 'المؤسس',
    founderName: 'هيثم صالح العامور',
    founderRole: 'المدير العام',
    founderBio: 'من مدينة بديا في محافظة سلفيت، أسّس هيثم صالح العامور شركة العامور عام 1999، وبنى على مدى أكثر من 25 عامًا شركةً موثوقة في توريد الدهانات وحلول التشطيب في فلسطين، بشراكات مع علامات عالمية مثل ILVA و POLITEK و ERCO.',
    founderHometownLabel: 'مسقط الرأس',
    founderHometown: 'بديا – محافظة سلفيت',
    founderBornLabel: 'مواليد',
    founderFoundedLabel: 'تأسيس الشركة',

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
    heroTitleLine1: 'حلول دهانات وتغطية أثاث والسيارات',
    heroTitleLine2: '',
    heroTitleHighlight: 'وحلول الريزن المتقدمة',
    premiumHeroDescription: 'منتجات متميزة وأنظمة تقنية للتطبيقات الصناعية والسيارات.',
    premiumProductsBadge: 'منتجات متميزة',
    technologies: 'التقنيات',
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

    // FAQ
    faqLabel: 'الأسئلة الشائعة',
    faqTitle: 'الأسئلة الأكثر شيوعًا',
    faqDescription: 'تعرّف على إجابات لأبرز الأسئلة حول دهانات الأخشاب والبوليستر والريزن ومستلزماته.',
    faq1Q: 'هل تتوفر دهانات تساعد على حماية الخشب من الاصفرار مع مرور الوقت؟',
    faq1A: 'نعم. تتضمن مجموعة المنتجات المتوفرة أنظمة دهان شفافة مصممة للمساعدة في الحفاظ على المظهر الطبيعي للخشب وتوفير مقاومة للاصفرار مع مرور الوقت.',
    faq2Q: 'هل تتوفر حلول لطلاء الخشب المعرض للرطوبة أو الظروف الخارجية؟',
    faq2A: 'نعم. تتضمن المجموعة منتجات مصممة لمقاومة الرطوبة والاستخدامات الخارجية، بما في ذلك طلاءات توفر الحماية من الماء وأشعة الشمس.',
    faq3Q: 'هل تتوفر طلاءات شفافة مقاومة للخدش للخشب؟',
    faq3A: 'نعم. تتوفر خيارات من الطلاءات الشفافة المقاومة للخدش للأسطح الخشبية المعرضة للاستخدام والاحتكاك المتكرر.',
    faq3Media: 'لكر شفاف ضد الجرح: احتكاك يومي؟ خلّي الحماية أقوى',
    faqViewPost: 'شاهد المنشور على إنستغرام',
    faqViewReel: 'شاهد الريل على إنستغرام',
    faq4Media: 'لكر مائي شفاف داخلي بثلاث درجات لمعة: يحمي الخشب دون أن يغيّر جماله',
    faq1Media: 'خلطة الدهان الأبيض مع المنشف ضد الاصفرار',
    faq7Media: 'منظف الأسطح المعدنية: قبل الطلاء، السطح لازم يكون جاهز',
    faq2Media: 'انزولاسيا: احمِ الخشب من الرطوبة قبل ما تبدأ التشطيب',
    faq4Q: 'هل تتوفر درجات لمعان مختلفة لتشطيبات الخشب؟',
    faq4A: 'نعم. تتوفر بعض أنظمة الطلاء بدرجات لمعان متعددة، مما يتيح اختيار التشطيب المناسب حسب المظهر المطلوب.',
    faq7Q: 'هل تتوفر حلول لتجهيز الأسطح المعدنية قبل الدهان؟',
    faq7A: 'نعم. تشمل المجموعة برايمرات للمعادن ومنتجات لتنظيف وتجهيز الأسطح المعدنية قبل تطبيق نظام الطلاء.',
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
    contactHeadingStart: 'Always ready',
    contactHeadingHighlight: 'to meet your needs',
    contactIntro: 'Our team is ready to answer your questions, help you choose the right product for your work, and prepare your orders quickly and professionally. Call us, message us on WhatsApp or send us an email — we are happy to help.',
    contactSales: 'Sales',
    contactSalesHint: 'Prices, orders and product availability',
    contactSupportLine: 'Technical support',
    contactSupportHint: 'Help choosing products and how to apply them',
    contactCall: 'Call',
    contactWhatsApp: 'WhatsApp',
    contactEmail: 'Email',
    
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
    catalogsPageLabel: 'Page',
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
    polytekCatalogDesc: 'Politek product catalog — putties, primers, paints, clearcoats and car-refinishing supplies.',
    ilvaCatalogTitle: 'ILVA Catalog',
    ilvaCatalogDesc: 'ILVA product catalog — professional Italian wood coatings and finishes.',
    ercoCatalogTitle: 'ERCO Catalog',
    ercoCatalogDesc: 'ERCO product catalog — Turkish wood primers and coatings built to global standards.',
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
    aboutTaglineStart: 'Everything your work needs,',
    aboutTaglineHighlight: 'in one place.',
    aboutIntro: 'Al-Amour & Partners General Trading is a private Palestinian company founded in 1999 and based on Masha Street in Bidya, Salfit Governorate. We import and supply timber, wood and car paints, and carpentry supplies for technicians, craftsmen, workshop owners and companies.',
    aboutJourney: 'Our journey',
    aboutM1Title: 'The start',
    aboutM1Text: 'We began with wood paints in Bidya.',
    aboutM2Title: 'Timber & carpentry',
    aboutM2Text: 'We expanded into timber and carpentry supplies.',
    aboutM3Title: 'Car paints',
    aboutM3Text: 'We added car paints and their supplies.',
    aboutM4Year: 'Today',
    aboutM4Title: 'Complete solutions',
    aboutM4Text: 'Professional products for furniture, kitchens, doors and finishing.',
    aboutOfferTitle: 'What we supply',
    aboutOffer: 'Timber|Wood paints|Car paints|Carpentry supplies',
    aboutServeTitle: 'Who we serve',
    aboutServe: 'Technicians|Craftsmen|Workshop owners|Companies',
    aboutBeliefTitle: 'What we believe',
    aboutBelief: 'We believe the right product makes a real difference to the quality of the work, so our team helps every customer choose what fits their needs. We keep developing our products and services, built on experience, credibility and our customers’ trust, to support their businesses and the Palestinian national economy.',
    aboutLocation: 'Bidya · Masha Street · Salfit',
    aboutSince: 'Since 1999',
    videoPlay: 'Play video',
    videoPause: 'Pause video',
    videoMute: 'Mute',
    videoUnmute: 'Unmute',
    
    // Blog
    latestUpdates: 'Latest Updates',
    blogDescription: 'Follow our journey on social media and stay updated with our latest products, tips, and news',
    readMore: 'Read More',
    viewAllPosts: 'View All Posts',
    
    // Wood coatings page
    wcBack: 'Back to home',
    wcEyebrow: 'Product categories',
    wcSystemTitle: 'Application system',
    wcColors: 'Available colours',
    wcApplications: 'Applications',
    wcKeyFeatures: 'Key features',
    wcTechCatalogs: 'Technical catalogs',
    wcTechCatalogsNote: 'Ready to view and download',
    wcView: 'View',
    wcAll: 'All',
    wcSearch: 'Search by name or code',
    wcProducts: 'products',
    wcNoResults: 'No matching products',
    wcFeatures: 'Features & applications',
    wcMix: 'Mixing ratio',
    wcGloss: 'Gloss levels',
    wcSizes: 'Available sizes',
    wcAsk: 'Ask on WhatsApp',
    wcCatalog: 'Download catalog',
    wcClose: 'Close',
    wcAskMessage: 'Hello, I would like to ask about',
    wcDetails: 'Details',

    // Founder
    founderEyebrow: 'Founder',
    founderName: 'Haitham Saleh Al‑Amour',
    founderRole: 'General Manager',
    founderBio: 'Born in the town of Bidya in the Salfit Governorate, Haitham Saleh Al‑Amour founded Al‑Amour in 1999. Over more than 25 years he has built a trusted supplier of paints and finishing solutions in Palestine, partnering with international brands such as ILVA, POLITEK and ERCO.',
    founderHometownLabel: 'Hometown',
    founderHometown: 'Bidya – Salfit Governorate',
    founderBornLabel: 'Born',
    founderFoundedLabel: 'Founded the company',

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
    heroTitleLine1: 'Advanced Coating & Resin',
    heroTitleLine2: '',
    heroTitleHighlight: 'Solutions',
    premiumHeroDescription: 'Premium products and technical systems for industrial, automotive, and marine applications.',
    premiumProductsBadge: 'Premium Products',
    technologies: 'Technologies',
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

    // FAQ
    faqLabel: 'FAQ',
    faqTitle: 'Frequently Asked Questions',
    faqDescription: 'Find answers to common questions about wood paints, polyester, resin and its supplies.',
    faq1Q: 'Do you offer coatings that help protect wood from yellowing over time?',
    faq1A: 'Yes. Our available product range includes clear coating systems designed to help maintain the natural appearance of wood and provide resistance to yellowing over time.',
    faq2Q: 'Are there coating solutions for wood exposed to moisture or outdoor conditions?',
    faq2A: 'Yes. Our range includes products designed for moisture resistance and exterior applications, including coatings that provide protection against water and sunlight.',
    faq3Q: 'Do you have scratch-resistant clear coatings for wood?',
    faq3A: 'Yes. Scratch-resistant clear coating options are available for wooden surfaces exposed to frequent contact and wear.',
    faq3Media: 'Scratch-resistant clear lacquer: daily wear? Make the protection stronger',
    faqViewPost: 'View the post on Instagram',
    faqViewReel: 'Watch the reel on Instagram',
    faq4Media: 'Clear interior water-based lacquer in three gloss levels: protects wood without changing its beauty',
    faq1Media: 'White paint mixed with the anti-yellowing hardener',
    faq7Media: 'Metal surface cleaner: before painting, the surface has to be ready',
    faq2Media: 'Insulation sealer: protect wood from moisture before you start finishing',
    faq4Q: 'Do you provide different gloss levels for wood finishes?',
    faq4A: 'Yes. Selected coating systems are available in multiple gloss levels, allowing the finish to be selected according to the desired appearance.',
    faq7Q: 'Do you offer solutions for preparing metal surfaces before painting?',
    faq7A: 'Yes. Our range includes metal primers and surface-cleaning products designed to prepare metal surfaces and improve the quality of the subsequent coating system.',
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
