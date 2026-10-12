// Resin and gelcoat technical catalogs (public/catgs). This category has no product list,
// so the page shows the catalogs themselves.

import type { CategoryPage } from './catalogTypes';

export const resinsPage: CategoryPage = {
  index: '03',
  title: { ar: 'الراتنجات والجيلكوت', en: 'Resins & Gelcoats' },
  intro: {
    ar: 'كتالوجات فنية لأنظمة الراتنجات والجيلكوت المتقدمة لصناعة المواد المركّبة والقوالب. اعرضها أو حمّلها مباشرة.',
    en: 'Technical catalogs for advanced resin and gelcoat systems for composites and mould making. View or download them directly.',
  },
  brands: [],
  productTypes: [],
  products: [],
  catalogs: [
    {
      name: { ar: 'عائلة منتجات الجيلكوت', en: 'Gelcoat Product Family' },
      tagline: { ar: 'معيار التميّز في الأسطح', en: 'Defining the Standard of Surface Excellence' },
      summary: {
        ar: 'جيلكوت عالي الأداء بتركيبات ISO و ISO-NPG و VE واليوريثان، للمعة أعلى واستهلاك أقل وعمر أطول للقوالب.',
        en: 'High-performance gelcoats in ISO, ISO-NPG, VE and urethane chemistries for higher gloss, lower consumption and longer mould life.',
      },
      kind: { ar: 'جيلكوت', en: 'Gelcoat' },
      file: '/catgs/GELCOAT%20(1).pdf',
      size: '491 KB',
    },
    {
      name: { ar: 'جيلكوت مضاد للكهرباء الساكنة', en: 'Antistatic Gelcoat' },
      tagline: { ar: 'أسطح آمنة وتفريغ للشحنات الساكنة', en: 'Safe Surfaces, Discharged Static Electricity' },
      summary: {
        ar: 'يمنع تراكم الكهرباء الساكنة والشرر في المصانع والبيئات القابلة للانفجار والغرف النظيفة وملاعب الأطفال.',
        en: 'Prevents static build-up and sparks in plants, explosive environments, cleanrooms and playgrounds.',
      },
      kind: { ar: 'جيلكوت', en: 'Gelcoat' },
      file: '/catgs/ANTISTATIC%20GELCOAT%20(2).pdf',
      size: '998 KB',
    },
    {
      name: { ar: 'الراتنجات الحيوية', en: 'Bio-Based Resins' },
      tagline: { ar: 'حلول مستدامة للمواد المركّبة', en: 'Next-Generation Solutions for Sustainable Composites' },
      summary: {
        ar: 'راتنجات من مواد خام متجددة تقلل البصمة الكربونية، لقطع السيارات والإنشاءات والطاقة وتوربينات الرياح.',
        en: 'Resins from renewable raw materials that cut carbon footprint, for automotive, construction, energy and wind turbines.',
      },
      kind: { ar: 'راتنجات', en: 'Resins' },
      file: '/catgs/BIO%20RESIN%20(1).pdf',
      size: '596 KB',
    },
    {
      name: { ar: 'راتنجات DCPD والهجينة', en: 'DCPD & Hybrid Resins' },
      tagline: { ar: 'ثبات دقيق وأداء محسّن', en: 'Precision Stability, Optimized Performance' },
      summary: {
        ar: 'انكماش منخفض جداً وثبات أبعادي عالٍ لتصنيع القوالب الدقيقة والقطع الصناعية وتطبيقات GFRP.',
        en: 'Very low shrinkage and high dimensional stability for precision moulds, industrial parts and GFRP.',
      },
      kind: { ar: 'راتنجات', en: 'Resins' },
      file: '/catgs/DCPD%20RESINS%20(1).pdf',
      size: '595 KB',
    },
    {
      name: { ar: 'راتنجات فينيل إستر', en: 'Vinyl Ester Resins' },
      tagline: { ar: 'بين القوة والمتانة', en: 'Bridging the Gap Between Strength and Durability' },
      summary: {
        ar: 'سلسلة V75–V90 بمقاومة كيميائية وميكانيكية عالية للخزانات الكيميائية والقوارب والأرضيات الصناعية.',
        en: 'The V75–V90 range, with high chemical and mechanical resistance for chemical tanks, marine parts and industrial flooring.',
      },
      kind: { ar: 'راتنجات', en: 'Resins' },
      file: `/catgs/${encodeURIComponent('VİNYL ESTER RESIN (1).pdf')}`,
      size: '793 KB',
    },
    {
      name: { ar: 'أنظمة القوالب عالية الأداء', en: 'High-Performance Tooling Systems' },
      tagline: { ar: 'دقة على نطاق واسع، ومتانة بالتصميم', en: 'Precision at Scale. Durability by Design.' },
      summary: {
        ar: 'نظام متكامل لتصنيع القوالب بلا انكماش، يجمع فينيل إستر المعدّل باليوريثان مع بوليستر ISO/NPG وجيلكوت مضاد للكهرباء.',
        en: 'An integrated zero-shrink mould-making system combining urethane-modified VE, ISO/NPG polyester and antistatic gelcoat.',
      },
      kind: { ar: 'أنظمة القوالب', en: 'Tooling' },
      file: '/catgs/TOOLING%20SYSTEM%20(1).pdf',
      size: '795 KB',
    },
  ],
};
