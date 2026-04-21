# Al-Amour Company - Premium Next.js Website

Modern, premium Next.js 16+ website with Framer Motion animations, built for Al-Amour Company - a leading supplier of premium paint products and finishing solutions in Palestine.

## 🎨 Features

- **Next.js 16+** with App Router
- **TypeScript** for type safety
- **Framer Motion** for smooth animations
- **TailwindCSS** for styling
- **Lucide React** for icons
- **Fully Responsive** design
- **Scroll-based animations** and parallax effects
- **Premium B2B aesthetic**

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## 📋 Sections

1. **Navigation Bar** - Fixed navbar with social icons, logo, and animated burger menu
2. **Hero Section** - Full-screen parallax hero with scroll animations
3. **Stats Section** - Animated counting numbers with performance metrics
4. **Logo Ticker** - Infinite auto-scrolling brand carousel
5. **Services Carousel** - Premium horizontal scrolling service cards
6. **About Us** - Two-column layout with company information
7. **WhatsApp Float** - Floating contact button
8. **Footer** - Comprehensive footer with links and contact info

## 🎨 Brand Colors

- **Primary Blue**: `#0097d7`
- **Dark Navy**: `#130f2d`
- **White**: `#FFFFFF`

## 🛠️ Tech Stack

- Next.js 15.1.0
- React 19.0.0
- Framer Motion 11.15.0
- TailwindCSS 3.4.17
- TypeScript 5.7.2
- Lucide React 0.468.0

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
└── components/
    ├── Navbar.tsx
    ├── Hero.tsx
    ├── Stats.tsx
    ├── LogoTicker.tsx
    ├── ServicesCarousel.tsx
    ├── About.tsx
    ├── WhatsAppFloat.tsx
    └── Footer.tsx
```

## 🎯 Key Animations

- **Hero**: Parallax background, headline fade-up, decorative logo with scale/rotate
- **Stats**: Counting numbers that animate on scroll into view
- **Logo Ticker**: Infinite horizontal scroll with pause on hover
- **Services**: Auto-scrolling cards with hover lift effects
- **WhatsApp**: Entrance animation with continuous pulse

## 📝 Customization

### Update Contact Information

Edit the contact details in:
- `src/components/Navbar.tsx` (WhatsApp link)
- `src/components/WhatsAppFloat.tsx` (WhatsApp link)
- `src/components/Footer.tsx` (Email, phone, address)

### Update Images

Replace placeholder images in:
- `src/components/Hero.tsx` (Background image)
- `src/components/About.tsx` (About section image)

### Update Content

All text content can be edited directly in the component files.

## 🌐 Deployment

Deploy to Vercel:

```bash
vercel
```

Or any other Next.js hosting platform.

## 📄 License

© 2026 Al-Amour Company. All rights reserved.
