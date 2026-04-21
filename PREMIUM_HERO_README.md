# Premium Hero Section - Al-Amour

## Overview
A premium fullscreen hero section designed for Al-Amour General Trading Co., featuring a cinematic dark blue aesthetic with product showcase and modern UI elements.

## Features

### ✨ Design Elements
- **Fullscreen Layout**: 100vh hero with split-column design
- **Premium Navbar**: Logo, navigation links, language toggle, and menu
- **Product Showcase**: Right-side product composition with floating animation
- **Trust Badges**: Quality, Premium Products, and Technical Support indicators
- **Slider Controls**: Elegant bottom navigation with progress indicator
- **Floating Badge**: Performance & Durability callout card
- **Responsive Design**: Mobile-first approach with adaptive layouts

### 🎨 Visual Features
- Dark navy (#0a0d1a) background with product composition overlay
- Electric blue gradient accents (blue-400 to cyan-500)
- Glassmorphism effects with backdrop blur
- Smooth Framer Motion animations
- Parallax mouse tracking on product image
- Floating product animation (up/down loop)

### 🌐 Internationalization
- Full Arabic and English support
- RTL/LTR text direction
- Language toggle in navbar
- All text content translatable

## File Structure

```
src/
├── components/
│   └── PremiumHero.tsx          # Main premium hero component
├── context/
│   └── LanguageContext.tsx      # Updated with new translations
└── app/
    └── premium/
        └── page.tsx             # Demo page with premium hero
```

## Usage

### Option 1: Demo Page (Recommended for Testing)
Visit `/premium` route to see the new hero in action:
```
http://localhost:3000/premium
```

### Option 2: Replace Main Hero
To use the premium hero on the main page, update `src/app/page.tsx`:

```tsx
// Replace this:
import Hero from '@/components/Hero';

// With this:
import PremiumHero from '@/components/PremiumHero';

// Then in the component:
<PremiumHero />
```

### Option 3: Use Both
Keep both heroes and switch based on user preference or A/B testing.

## Component Structure

### Main Sections
1. **Background Layer** - Product composition image with gradient overlay
2. **Navbar** - Logo, navigation, language toggle, menu
3. **Content Grid** - Two-column layout (text left, product right)
4. **Slider Controls** - Bottom navigation with progress bar

### Left Column Content
- Eyebrow text: "SINCE 1999"
- Main headline: "Advanced Coating"
- Gradient subheadline: "& Resin Solutions"
- Description paragraph
- Two CTA buttons (Explore Products, Download Catalogs)
- Three trust badges with icons

### Right Column Content
- Product composition image
- Floating animation with parallax
- Glow effects
- Performance badge overlay

## Animations

### Entry Animations (Framer Motion)
- Navbar: Slides down (0.8s delay)
- Eyebrow: Fades up (0.2s delay)
- Headline: Fades up (0.4s delay)
- Description: Fades up (0.6s delay)
- Buttons: Fade up (0.8s delay)
- Trust badges: Fade up (1.0s delay)
- Product: Scale + fade (0.6s delay)
- Floating badge: Slide from right (1.4s delay)
- Slider controls: Fade up (1.6s delay)

### Continuous Animations
- Product floating: 4s loop (up/down 20px)
- Mouse parallax: Subtle X/Y shift based on cursor position
- Button hover: Scale + shadow effects
- Progress bar: Smooth width transitions

## Customization

### Colors
Update in `tailwind.config.ts`:
```ts
colors: {
  primary: '#0097d7',
  navy: '#0a0d1a',
  accent: {
    blue: '#0097d7',
    cyan: '#2596C7'
  }
}
```

### Images
Replace these assets in `/public`:
- `/heroalamour.png` - Background with product composition
- `/logo.png` - Company logo

### Text Content
Edit translations in `src/context/LanguageContext.tsx`:
```ts
// English
since1999: 'SINCE 1999',
heroMainTitle: 'Advanced Coating',
heroSubTitle: '& Resin Solutions',
// ... etc

// Arabic
since1999: 'منذ عام 1999',
heroMainTitle: 'حلول طلاء وراتنج',
heroSubTitle: 'متقدمة',
// ... etc
```

## Responsive Breakpoints

- **Mobile** (< 768px): Stacked layout, simplified nav
- **Tablet** (768px - 1024px): Tighter spacing, maintained 2-column
- **Desktop** (> 1024px): Full layout with all features
- **Large Desktop** (> 1600px): Max-width container (1600px)

## Dependencies

All dependencies are already installed:
- `framer-motion` - Animations
- `lucide-react` - Icons
- `next/image` - Optimized images
- `tailwindcss` - Styling

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Notes

- Images use Next.js Image component for optimization
- Animations use GPU-accelerated transforms
- Backdrop blur may impact performance on older devices
- Consider lazy loading for below-fold content

## Accessibility

- Semantic HTML structure
- Keyboard navigation support
- ARIA labels on interactive elements
- Focus states on buttons
- Sufficient color contrast ratios

## Next Steps

1. **Test on different devices** - Mobile, tablet, desktop
2. **Adjust animations** - Speed, delays, easing if needed
3. **Add real product images** - Replace placeholder if needed
4. **Connect CTAs** - Link buttons to actual pages/actions
5. **Add analytics** - Track button clicks and interactions
6. **Optimize images** - Compress for faster loading
7. **Add more slides** - Implement actual slider functionality if needed

## Support

For questions or issues, refer to:
- Framer Motion docs: https://www.framer.com/motion/
- Tailwind CSS docs: https://tailwindcss.com/docs
- Next.js docs: https://nextjs.org/docs

---

**Created for Al-Amour General Trading Co.**
Premium coating and resin solutions since 1999.
