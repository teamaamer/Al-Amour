// Car-paint products, transcribed from the POLITEK catalog in public/catgs ("politek (1).pdf").
// Images are the product shots cropped out of each catalog page (public/products/politek).

import type { CategoryPage, Product } from './catalogTypes';

const img = (page: number) => `/products/politek/${String(page).padStart(2, '0')}.webp`;

const products: Product[] = [
  // ───── Cleaning & preparation ─────
  {
    code: 'T5230',
    brand: 'politek',
    type: 'prep',
    name: { ar: 'منظف الأسطح المعدنية', en: 'Surface Cleaning Thinner' },
    description: { ar: 'نظافة دقيقة قبل الطلاء… لنتيجة ما بتقبل الخطأ.', en: 'Precise cleaning before painting, for a flawless result.' },
    features: {
      ar: ['يزيل الشحوم والأوساخ وبصمات الأصابع من الأسطح المعدنية والمطلية.', 'يمنحك سطحاً جاهزاً لطبقة دهان مثالية بدون عيوب.'],
      en: ['Removes grease, dirt and fingerprints from metal and painted surfaces.', 'Leaves the surface ready for a flawless coat of paint.'],
    },
    sizes: { ar: '1 لتر · 5 لتر', en: '1 L · 5 L' },
    image: img(17),
  },
  {
    code: 'MB0001',
    brand: 'politek',
    type: 'prep',
    name: { ar: 'قماش شمعي لتنظيف الأسطح', en: 'Tack Cloth' },
    description: { ar: 'لتنظيف وتجهيز أسطح السيارات قبل الطلاء.', en: 'Cleans and prepares car surfaces before painting.' },
    features: {
      ar: ['إزالة فعّالة للغبار، وخالٍ من السيليكون.', 'يساعد على الحصول على تشطيب احترافي.'],
      en: ['Removes dust effectively and is silicone-free.', 'Helps achieve a professional finish.'],
    },
    image: img(21),
  },
  {
    code: 'A2500',
    brand: 'politek',
    type: 'prep',
    name: { ar: 'مزيل الدهان', en: 'Paint Remover' },
    description: { ar: 'مزيل دهان احترافي يساعد على إزالة جميع أنواع الدهانات.', en: 'Professional remover for all types of paint.' },
    features: {
      ar: ['للأسطح المعدنية وإزالة طبقات الدهان القديمة.', 'جاهز للاستخدام، ويُطبَّق بالفرشاة.'],
      en: ['For metal surfaces and stripping old paint layers.', 'Ready to use; apply by brush.'],
    },
    colors: { ar: 'شفاف', en: 'Clear' },
    sizes: { ar: '1 كغ', en: '1 kg' },
    image: img(5),
  },

  // ───── Putties ─────
  {
    code: 'PP 210',
    brand: 'politek',
    type: 'putty',
    name: { ar: 'معجون بوليستر ناعم', en: 'Polyester Putty' },
    description: {
      ar: 'معجون بوليستر ناعم عالي الجودة، سهل الفرد والصنفرة، وتعبئة مثالية قبل الطلاء للمسة نهائية ناعمة.',
      en: 'Fine, high-quality polyester putty that spreads and sands easily, for a smooth base before painting.',
    },
    features: {
      ar: ['يمنحك سطحاً أملس ومتجانساً مع قوة التصاق ممتازة.', 'يخفي العيوب قبل الدهان.'],
      en: ['A smooth, even surface with excellent adhesion.', 'Hides imperfections before painting.'],
    },
    colors: { ar: 'أصفر · أبيض', en: 'Yellow · White' },
    sizes: { ar: 'الأصفر: 1 كغ و2.4 كغ · الأبيض: 1 كغ', en: 'Yellow: 1 kg & 2.4 kg · White: 1 kg' },
    image: img(6),
  },
  {
    code: 'PP 240',
    brand: 'politek',
    type: 'putty',
    name: { ar: 'معجون بوليستر فايبر', en: 'Glass Fiber Putty' },
    description: {
      ar: 'إصلاح قوي واحترافي للحفر والأضرار العميقة بفضل تركيبته المدعّمة بالألياف الزجاجية، مع التصاق ممتاز وسهولة في الصنفرة قبل الطلاء.',
      en: 'Strong, professional repair of holes and deep damage thanks to its glass-fibre reinforcement, with excellent adhesion and easy sanding.',
    },
    features: { ar: ['معجون بوليستر فايبر ثنائي المكونات.'], en: ['Two-component polyester fibre putty.'] },
    mix: { ar: '2–3% مصلب BPO', en: '2–3% BPO hardener' },
    sizes: { ar: '1 كغ', en: '1 kg' },
    image: img(7),
  },
  {
    code: 'PP 270',
    brand: 'politek',
    type: 'putty',
    name: { ar: 'معجون بوليستر خشن', en: 'Lightweight Polyester Putty' },
    description: {
      ar: 'مناسب لمختلف الأسطح مثل الفايبر جلاس، والصاج، والألومنيوم، والخشب.',
      en: 'Suitable for many surfaces including fibreglass, sheet steel, aluminium and wood.',
    },
    features: {
      ar: ['يجمع بين سهولة الاستخدام ونعومة الصنفرة وقوة التعبئة، لنتيجة احترافية تدوم.'],
      en: ['Easy to use, smooth to sand and strong at filling, for a lasting professional result.'],
    },
    sizes: { ar: '3.785 لتر', en: '3.785 L' },
    image: img(10),
  },

  // ───── Primers & fillers ─────
  {
    code: 'F1110',
    brand: 'politek',
    type: 'primer',
    name: { ar: 'معجون أكريليك 2K (أساس عازل)', en: 'Acrylic Filler 2K 4+1' },
    description: {
      ar: 'لتعبئة وتسوية الأسطح قبل الطلاء؛ احصل على سطح أكثر نعومة وتجهيز احترافي قبل الطلاء النهائي.',
      en: 'Fills and levels surfaces for a smoother, professionally prepared base before the top coat.',
    },
    features: {
      ar: ['تعبئة وتسوية أسطح السيارات، والحديد المجلفن، والبوليستر، والأسطح المطلية القديمة.', 'جفاف سريع، صنفرة سهلة، تعبئة عالية، تشطيب احترافي.'],
      en: ['Fills and levels car bodies, galvanised steel, polyester and old painted surfaces.', 'Fast drying, easy sanding, high build, professional finish.'],
    },
    mix: { ar: 'يُستخدم مع منشف H2120', en: 'Use with hardener H2120' },
    sizes: { ar: '1 لتر · 2.5 لتر', en: '1 L · 2.5 L' },
    image: img(11),
  },
  {
    code: 'F3110',
    brand: 'politek',
    type: 'primer',
    name: { ar: 'بوليستر سبراي فيلر + هاردنر', en: 'Polyester Spray Filler + Hardener' },
    description: {
      ar: 'برايمر بوليستر عالي التعبئة يمنح تغطية ممتازة للعيوب والخدوش العميقة، سريع الجفاف وسهل الصنفرة للحصول على سطح أملس قبل الدهان النهائي.',
      en: 'High-build polyester primer that covers defects and deep scratches; fast drying and easy to sand for a smooth surface before the top coat.',
    },
    features: { ar: ['للمعادن، وأسطح البوليستر، ومعاجين البوليستر.'], en: ['For metal, polyester surfaces and polyester putties.'] },
    mix: { ar: '2% هاردنر', en: '2% hardener' },
    colors: { ar: 'رمادي', en: 'Grey' },
    sizes: { ar: '1 لتر', en: '1 L' },
    image: img(14),
  },
  {
    code: 'F5320',
    brand: 'politek',
    type: 'primer',
    name: { ar: 'أساس للمعادن مع المنشف', en: 'Metal Primer with Activator' },
    description: {
      ar: 'أساس قوي من سلسلة ColorTEC لنتيجة طلاء تدوم، مع التصاق فائق وحماية فعّالة للأسطح المعدنية قبل الطلاء.',
      en: 'A strong ColorTEC primer for long-lasting paintwork, with superior adhesion and effective protection for metal before painting.',
    },
    features: {
      ar: ['تركيبة ثنائية المكونات تمنحك مقاومة عالية للصدأ والتآكل.', 'سرعة في الجفاف وتشطيب احترافي يضمن جودة العمل من أول طبقة.'],
      en: ['Two-component formula with high rust and corrosion resistance.', 'Fast drying with a professional finish from the first coat.'],
    },
    mix: { ar: 'برايمر : مصلب — 2:1', en: 'Primer : activator — 2:1' },
    sizes: { ar: '0.9 لتر برايمر + 0.45 لتر مصلب', en: '0.9 L primer + 0.45 L activator' },
    image: img(13),
  },
  {
    code: 'F4230',
    brand: 'politek',
    type: 'primer',
    name: { ar: 'برايمر احترافي لأسطح البلاستيك', en: '1K Plastic Surface Primer' },
    description: {
      ar: 'برايمر 1K مخصص لأسطح البلاستيك، يساعد على تحسين الالتصاق وتجهيز السطح قبل الدهان النهائي.',
      en: '1K primer for plastic surfaces that improves adhesion and prepares the surface for the top coat.',
    },
    features: {
      ar: ['مناسب لأسطح PP / EPDM / PUR / PVC.', 'مناسب لأعمال إصلاح ودهان السيارات.', 'جاهز للاستخدام.'],
      en: ['Suitable for PP / EPDM / PUR / PVC.', 'For car repair and refinishing work.', 'Ready to use.'],
    },
    image: img(15),
  },
  {
    code: 'F4231',
    brand: 'politek',
    type: 'primer',
    name: { ar: 'برايمر التصاق للبلاستيك – رمادي', en: '1K Adhesion Primer for Plastics – Grey' },
    description: {
      ar: 'مخصص لأسطح البلاستيك في السيارات، يحسّن التصاق طبقات الدهان النهائية ويجهّز السطح لتشطيب متجانس واحترافي.',
      en: 'For plastic car parts; improves adhesion of the top coats and prepares the surface for an even, professional finish.',
    },
    features: {
      ar: ['الاستخدام: جميع قطع البلاستيك في السيارات.', 'الوظيفة: تحسين الالتصاق وتجهيز السطح للدهان.', 'التطبيق سهل وسريع، والنتيجة تشطيب ناعم ومتجانس.'],
      en: ['For all plastic car parts.', 'Improves adhesion and prepares the surface for paint.', 'Quick, easy application for a smooth, even finish.'],
    },
    colors: { ar: 'رمادي', en: 'Grey' },
    sizes: { ar: '1 كغ', en: '1 kg' },
    image: img(12),
  },

  // ───── Paints ─────
  {
    code: 'P1110',
    brand: 'politek',
    type: 'paint',
    name: { ar: 'دهان أكريليك ثنائي المكونات', en: 'Acrylic Auto Paint 2K' },
    description: {
      ar: 'تغطية عالية ولمعان ممتاز، مع مقاومة قوية للعوامل الجوية والكيميائية والفيزيائية. مناسب لتشطيبات السيارات والمركبات والأسطح المعدنية.',
      en: 'High coverage and excellent gloss with strong resistance to weather, chemicals and wear. For cars, vehicles and metal surfaces.',
    },
    features: { ar: ['للسيارات، والمركبات التجارية، والأثاث، والصناعات المعدنية.'], en: ['For cars, commercial vehicles, furniture and metal industries.'] },
    mix: { ar: 'يُستخدم مع منشف H1110 وتنر T1230', en: 'Use with hardener H1110 and thinner T1230' },
    colors: { ar: 'أبيض · أسود', en: 'White · Black' },
    sizes: { ar: '3.785 لتر', en: '3.785 L' },
    image: img(8),
  },
  {
    code: 'P3210',
    brand: 'politek',
    type: 'paint',
    name: { ar: 'دهان صناعي نهائي', en: 'Industrial Top Coat Paint' },
    description: {
      ar: 'من سلسلة ColorTEC؛ يمنح أسطحك المعدنية والخشبية تشطيباً احترافياً يجمع بين اللمعان العالي والمتانة وسرعة الجفاف.',
      en: 'From the ColorTEC range: a professional finish for metal and wood that combines high gloss, durability and fast drying.',
    },
    features: {
      ar: ['تركيبته الصناعية توفّر تغطية ممتازة وتحافظ على لمعانها لفترة طويلة.', 'الخيار المثالي لمختلف التطبيقات الصناعية على الأسطح المعدنية والخشبية.', 'جفاف سريع، لمعان عالٍ، ثبات طويل الأمد.'],
      en: ['Industrial formula with excellent coverage and long-lasting gloss.', 'Ideal for industrial applications on metal and wood.', 'Fast drying, high gloss, long-term durability.'],
    },
    colors: { ar: 'أسود', en: 'Black' },
    sizes: { ar: '0.75 لتر · 2.5 لتر', en: '0.75 L · 2.5 L' },
    image: img(9),
  },
  {
    code: 'A2200',
    brand: 'politek',
    type: 'paint',
    name: { ar: 'دهان صدامات بلاستيك', en: '1K Plastic Bumper Paint' },
    description: {
      ar: 'دهان نهائي عالي الجودة مخصص لأسطح البلاستيك في السيارات، يمنحك تشطيباً متجانساً ومظهراً احترافياً بدون الحاجة إلى برايمر لاصق.',
      en: 'High-quality top coat for plastic car parts, giving an even, professional finish with no adhesion primer needed.',
    },
    features: { ar: ['لصدامات وقطع السيارات البلاستيكية.'], en: ['For bumpers and plastic car parts.'] },
    mix: { ar: 'التخفيف: 20–25% مخفف سيليلوزي', en: 'Thin with 20–25% cellulose thinner' },
    colors: { ar: 'أسود', en: 'Black' },
    sizes: { ar: '1 لتر', en: '1 L' },
    image: img(2),
  },

  // ───── Clear coat ─────
  {
    code: 'C2121',
    brand: 'politek',
    type: 'clearcoat',
    name: { ar: 'لكر أكريلي', en: 'Acrylic Clearcoat 2K' },
    description: {
      ar: 'مقاومة عالية للعوامل الفيزيائية والكيميائية والخدوش، وحماية قوية من أشعة الشمس وبهتان اللون.',
      en: 'High resistance to physical and chemical wear and scratches, with strong protection against sunlight and fading.',
    },
    features: { ar: ['يمنح السطح لمعة عالية وثابتة وتشطيباً احترافياً يدوم.'], en: ['A high, lasting gloss and a durable professional finish.'] },
    mix: {
      ar: 'لكر : منشف H1110 — 2:1، ويمكن تخفيفه بـ 10–20 مل تنر لكل 100 مل من الخليط',
      en: 'Clearcoat : hardener H1110 — 2:1; thin with 10–20 ml thinner per 100 ml of mix',
    },
    sizes: { ar: '1 لتر · 5 لتر', en: '1 L · 5 L' },
    image: img(16),
  },

  // ───── Hardeners ─────
  {
    code: 'H1110',
    brand: 'politek',
    type: 'hardener',
    name: { ar: 'منشف أكريليك', en: 'Universal Acrylic Hardener UV 2K' },
    description: {
      ar: 'يُستخدم مع دهانات الأكريليك والبرايمر والورنيش في طلاء السيارات، ويمنحها أداءً أعلى مع صلابة ومتانة تحافظ على جودة التشطيب لفترة أطول.',
      en: 'For acrylic paints, primers and clearcoats in car refinishing; adds hardness and durability for a longer-lasting finish.',
    },
    features: { ar: ['مقاومة عالية، ثبات أفضل، تشطيب احترافي.'], en: ['High resistance, better stability, professional finish.'] },
    sizes: { ar: '1 لتر · 2.5 لتر', en: '1 L · 2.5 L' },
    image: img(20),
  },
  {
    code: 'H2120',
    brand: 'politek',
    type: 'hardener',
    name: { ar: 'منشف فيلر الأكريليك', en: 'Acrylic Filler Hardener 2K' },
    description: {
      ar: 'منشف أساس عازل، مصمم خصيصاً للاستخدام مع ACRYLIC FILLER 2K 4+1، يحقق جفافاً سريعاً ومتجانساً ونتائج نهائية احترافية وثابتة.',
      en: 'Hardener designed for ACRYLIC FILLER 2K 4+1 (F1110), for fast, even drying and consistent professional results.',
    },
    features: { ar: ['مخصص لبرايمر وفيلر الأكريليك 2K للسيارات وأعمال إعادة الطلاء.'], en: ['For 2K acrylic primer-fillers in car refinishing.'] },
    mix: { ar: '100 فيلر : 25 مصلب : 10–15 تنر', en: '100 filler : 25 hardener : 10–15 thinner' },
    sizes: { ar: '0.25 لتر · 0.625 لتر', en: '0.25 L · 0.625 L' },
    image: img(19),
  },

  // ───── Thinner ─────
  {
    code: 'T1230',
    brand: 'politek',
    type: 'thinner',
    name: { ar: 'تنر أكريلي', en: 'Universal Acrylic Thinner 2K' },
    description: {
      ar: 'مصمم لأنظمة 2K ACRYLIC، مع 3 خيارات حسب درجة حرارة بيئة العمل.',
      en: 'Designed for 2K acrylic systems, in three grades for the working temperature.',
    },
    features: {
      ar: ['T1232 سريع: 0–15°C', 'T1230 قياسي: 10–25°C', 'T1231 بطيء: 20–40°C', 'تحكم أفضل، تطبيق احترافي، ونتائج متناسقة.'],
      en: ['T1232 Fast: 0–15°C', 'T1230 Standard: 10–25°C', 'T1231 Slow: 20–40°C', 'Better control, professional application and consistent results.'],
    },
    sizes: { ar: '1 لتر · 5 لتر', en: '1 L · 5 L' },
    image: img(18),
  },

  // ───── Additives & protection ─────
  {
    code: 'A2100',
    brand: 'politek',
    type: 'additive',
    name: { ar: 'حماية ضد الحصى (أنتي جرافيل)', en: 'Stone Chip Protector' },
    description: {
      ar: 'طبقة حماية مطاطية لهيكل المركبة ضد الحصى والتآكل، للحفاظ على جودة التشطيب.',
      en: 'Rubber-based protective coating that guards the vehicle body against stone chips and corrosion.',
    },
    features: {
      ar: ['لأسفل السيارات، والرفارف، وأجزاء الهيكل المعرّضة للصدمات.'],
      en: ['For underbodies, wheel arches and body parts exposed to impacts.'],
    },
    sizes: { ar: '1 كغ', en: '1 kg' },
    image: img(1),
  },
  {
    code: 'A2300',
    brand: 'politek',
    type: 'additive',
    name: { ar: 'إضافة أنتي سيليكون', en: 'Anti-Silicone Additive' },
    description: {
      ar: 'تخلّص من مشكلة عيون السمكة (Cratering) الناتجة عن تلوث السيليكون، واحصل على تشطيب أنعم وأكثر احترافية.',
      en: 'Eliminates fish-eye cratering caused by silicone contamination for a smoother, more professional finish.',
    },
    features: {
      ar: ['للدهانات، والورنيش، والمواد التأسيسية (Primers).', 'يمنع عيوب السيليكون ويحسّن التوتر السطحي.', 'سهل الاستخدام، نتائج احترافية.'],
      en: ['For paints, clearcoats and primers.', 'Prevents silicone defects and improves surface tension.', 'Easy to use, professional results.'],
    },
    mix: { ar: '5–10 مل لكل 1 لتر من المنتج الجاهز للاستخدام', en: '5–10 ml per 1 L of ready-to-use product' },
    sizes: { ar: '0.25 لتر', en: '0.25 L' },
    image: img(3),
  },
  {
    code: 'A2400',
    brand: 'politek',
    type: 'additive',
    name: { ar: 'مسرّع إضافي للجفاف', en: 'Extra Accelerator' },
    description: { ar: 'تسريع الجفاف ورفع كفاءة التشطيب.', en: 'Speeds up drying and makes finishing more efficient.' },
    features: {
      ar: ['مادة مضافة لتسريع جفاف الدهانات الأكريليكية 2K.', 'مع الدهانات السادة وطبقات الكلير كوت الأكريليكية.'],
      en: ['Additive that speeds up drying of 2K acrylic paints.', 'For solid colours and acrylic clearcoats.'],
    },
    mix: { ar: '10–20 مل لكل 1 لتر من المنتج الجاهز للاستخدام', en: '10–20 ml per 1 L of ready-to-use product' },
    sizes: { ar: '0.25 لتر', en: '0.25 L' },
    image: img(4),
  },
];

export const carPaintsPage: CategoryPage = {
  index: '02',
  title: { ar: 'دهانات السيارات', en: 'Car Paints' },
  intro: {
    ar: 'نظام POLITEK التركي المتكامل لإصلاح ودهان السيارات، من التنظيف والمعجون والأساس حتى الدهان واللكر.',
    en: 'POLITEK’s complete Turkish car-refinishing system, from cleaning, putty and primer to paint and clearcoat.',
  },
  steps: [
    { icon: 'sparkles', title: { ar: 'التحضير', en: 'Prepare' }, desc: { ar: 'تنظيف السطح وإزالة الدهان القديم', en: 'Clean the surface and strip old paint' } },
    { icon: 'eraser', title: { ar: 'المعجون', en: 'Fill' }, desc: { ar: 'معجون بوليستر لإصلاح العيوب', en: 'Polyester putty to repair damage' } },
    { icon: 'layers', title: { ar: 'الأساس', en: 'Prime' }, desc: { ar: 'فيلر وبرايمر للمعادن والبلاستيك', en: 'Filler and primer for metal and plastic' } },
    { icon: 'paintbrush', title: { ar: 'الطبقة النهائية', en: 'Top coat' }, desc: { ar: 'دهان أكريليك ثم لكر للحماية واللمعة', en: 'Acrylic paint, then clearcoat for gloss and protection' } },
  ],
  stepNote: { ar: 'كل طبقة تُخلط مع المنشف والتنر المناسبين', en: 'Each coat is mixed with the matching hardener and thinner' },
  brands: [
    {
      id: 'politek',
      name: 'POLITEK',
      origin: { ar: 'صناعة تركية', en: 'Made in Türkiye' },
      country: 'tr',
      logo: '/politek.png',
      catalog: '/catgs/politek%20(1).pdf',
      tagline: {
        ar: 'دهانات ومستلزمات إصلاح السيارات التركية بجودة عالمية.',
        en: 'Turkish car-refinishing paints and supplies to international standards.',
      },
    },
  ],
  productTypes: [
    { id: 'prep', label: { ar: 'تنظيف وتحضير', en: 'Cleaning & prep' } },
    { id: 'putty', label: { ar: 'معاجين', en: 'Putties' } },
    { id: 'primer', label: { ar: 'أساسات وفيلر', en: 'Primers & fillers' } },
    { id: 'paint', label: { ar: 'دهانات', en: 'Paints' } },
    { id: 'clearcoat', label: { ar: 'لكر', en: 'Clearcoat' } },
    { id: 'hardener', label: { ar: 'منشفات', en: 'Hardeners' } },
    { id: 'thinner', label: { ar: 'تنر', en: 'Thinners' } },
    { id: 'additive', label: { ar: 'إضافات وحماية', en: 'Additives & protection' } },
  ],
  products,
};
