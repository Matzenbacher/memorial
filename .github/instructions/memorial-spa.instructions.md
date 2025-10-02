---
applyTo: '**'
---

# Memorial Garden - Project Instructions

## 📋 Project Overview

This is a **React 17.0.2 SPA** for Memorial Garden cemetery park in Ourinhos, SP. The project features:
- Smooth scroll animations with Locomotive Scroll
- Advanced animations using GSAP and Framer Motion
- Responsive design with Styled Components
- Theme system with Memorial Garden branding (purple #6C20AF + pink #FF3984)

## 🛠️ Tech Stack

### Core (DO NOT CHANGE)
- React 17.0.2
- React Router DOM 6.2.2
- Styled Components 5.3.3

### Animations (PRESERVE)
- Framer Motion 6.2.8 - Declarative animations
- GSAP 3.9.1 - Advanced animations and ScrollTrigger
- Locomotive Scroll 4.1.4 + React Locomotive Scroll 0.2.0 - Smooth scroll

### Fonts
- @fontsource/poppins (primary - Memorial Garden)
- @fontsource/kaushan-script (decorative)
- @fontsource/sirin-stencil (decorative)

## 🎨 Design System - Memorial Garden

### Color Palette
```javascript
primary: '#6C20AF'      // Purple - Primary CTAs, titles
accent: '#FF3984'       // Pink - Highlights, hover states
dark: '#333333'         // Main text
darkGrey: '#666666'     // Secondary text
lightGrey: '#F5F5F5'    // Alternative backgrounds
white: '#FFFFFF'        // Main backgrounds
success: '#28a745'      // WhatsApp, positive feedback
error: '#dc3545'        // Error feedback
```

### Typography
```javascript
fontFamily: "'Poppins', -apple-system, sans-serif"
weights: 400 (regular), 600 (semibold), 700 (bold)

// Size tokens (from Themes.js)
fontxs: '0.75em'    // 12px
fontsm: '0.875em'   // 14px
fontmd: '1em'       // 16px
fontlg: '1.25em'    // 20px
fontxl: '2em'       // 32px
fontxxl: '3em'      // 48px
fontxxxl: '4em'     // 64px
fontBig: '5em'      // 80px
```

### Component Patterns
```javascript
// Primary Button
background: linear-gradient(135deg, #6C20AF, #FF3984)
borderRadius: 50px
padding: 12px 32px
fontWeight: 600
hover: transform: scale(1.05)

// Cards
borderRadius: 16px
boxShadow: 0 4px 20px rgba(0,0,0,0.08)
hover: transform: translateY(-8px)
```

## 📁 Project Structure

```
src/
├── App.js                 # Main component with Locomotive Scroll
├── index.js              # Entry point
├── assets/
│   ├── Images/          # Memorial Garden photos
│   └── Svgs/            # Icons and logos
├── components/
│   ├── CoverVideo.jsx   # Video component
│   ├── Loader.jsx       # Loading screen (3s delay)
│   ├── Logo.jsx         # Memorial Garden logo
│   ├── Navbar.jsx       # Navigation with mobile menu
│   ├── ScrollTriggerProxy.js  # GSAP proxy for Locomotive
│   └── useLocoScroll.js # Custom Locomotive hook
├── sections/
│   ├── Home.jsx         # Hero section
│   ├── About.jsx        # About Memorial Garden
│   ├── Shop.jsx         # Services grid
│   ├── NewArrival.jsx   # Highlights/differentials
│   ├── Marquee.jsx      # Stats banner
│   └── Footer.jsx       # Footer
├── styles/
│   ├── GlobalStyles.js  # Global CSS
│   └── Themes.js        # Theme tokens
└── data/
    └── content.js       # Memorial Garden content (JSON import)
```

## 🎯 Section Components

### Home.jsx - Hero Section
- Headline: "Preservamos a memória de histórias que não devem ser esquecidas."
- Subtitle: "Cemitério Parque Ourinhos"
- CTA: "Quero contratar um serviço"
- Background: Hero carousel (10 images from memorial-assets)
- Animations: Framer Motion entrance

### About.jsx - About Section
- Title: "Memorial Garden é o único cemitério modelo parque da região de Ourinhos"
- Split layout: Image (about-main.webp) + text
- CTA: "Conhecer mais sobre"
- Scroll reveal animations

### Shop.jsx - Services Grid
Transform into services grid with 3 cards:
1. **Sepultamento** - "Com estrutura planejada, cuidado e serenidade."
2. **Espaço Cerimonial** - "Ambiente acolhedor e respeitoso para homenagens."
3. **Velório** - "Comodidade, privacidade e apoio integral."
- CTA per card: "Saiba mais"

### NewArrival.jsx - Highlights
3 cards with icons:
1. "Plano preventivo garante economia de até 40%"
2. "Um ambiente acolhedor, planejado para transmitir tranquilidade."
3. "Plantão Memorial Garden disponível 24h"

### Marquee.jsx - Stats Banner
- Background: Purple gradient
- Stats: "14 Anos em Ourinhos" | "+2000 Famílias amparadas"
- Animated counting effect

### CoverVideo.jsx - Institutional Video
- Video: memorial-assets/video-institucional.mp4
- Title: "Preservar memórias que merecem ser lembradas"
- Play button with purple/pink theme

### Footer.jsx - Complete Footer
4 columns:
1. **Contact**: Phone, WhatsApp, Email, Address
2. **Quick Links**: Início, Sobre, Serviços, Blog
3. **Services**: Velório, Sepultamento, Espaço cerimonial
4. **Hours**: Regular (08:00-18:00) + 24h emergency
- Social: Instagram (@memorial.garden), WhatsApp
- Address: Est. Fernando Antônio Paschoal 1.555, Água do Jacu, Ourinhos, SP

### Navbar.jsx - Navigation
- Logo: Memorial Garden (logo.webp)
- Links: Início, Sobre, Serviços, Contato
- CTA: WhatsApp button (green)
- Mobile: Hamburger menu
- z-index: 6

## 🔧 Coding Guidelines

### Styled Components
```javascript
import styled from 'styled-components';

const Component = styled.div`
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};
  font-size: ${props => props.theme.fontmd};
  
  @media (max-width: 40em) {
    // Mobile styles (640px)
  }
`;
```

### Framer Motion
```javascript
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
```

### Locomotive Scroll
```javascript
// Scroll to section
scroll.scrollTo(element, {
  offset: '-100',
  duration: '2000',
  easing: [0.25, 0.0, 0.35, 1.0]
});

// In JSX
<section data-scroll-section>
  <div data-scroll data-scroll-speed="2">
    // Parallax content
  </div>
</section>
```

### Content Import
```javascript
import content from '../data/content';

// Access data
const { hero, services, about } = content;
```

## ⚠️ Critical Rules

### DO NOT:
1. ❌ Change React version or core dependencies
2. ❌ Remove Locomotive Scroll or GSAP
3. ❌ Alter animation logic without preserving functionality
4. ❌ Remove lazy loading (React.lazy)
5. ❌ Change folder structure
6. ❌ Modify ScrollTriggerProxy.js
7. ❌ Remove mobile/tablet smooth scroll config

### DO:
1. ✅ Use theme tokens from Themes.js
2. ✅ Import content from data/content.js
3. ✅ Preserve all animations and transitions
4. ✅ Test mobile responsiveness (Locomotive has mobile config)
5. ✅ Use Framer Motion for component animations
6. ✅ Use GSAP for complex scroll animations
7. ✅ Keep z-index hierarchy (Navbar: 6, Loader: 10)
8. ✅ Maintain 3-second Loader delay
9. ✅ Use WebP format for images when possible
10. ✅ Test scroll offset (-100px) for smooth navigation

## 📦 Asset Locations

### Images
- Logo: `src/assets/Images/logo.webp`
- Hero: `src/assets/Images/hero/hero-01.webp` to `hero-10.webp`
- About: `src/assets/Images/about/about-main.webp`
- Services: `src/assets/Images/services/service-*.png`

### Video
- Institutional: `public/videos/video-institucional.mp4`

### Content
- All text content: `src/data/content.js` (imported from memorial-assets/content.json)

## 🎬 Animation Patterns

### Entrance Animations
```javascript
// Fade in from bottom
initial={{ opacity: 0, y: 50 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8, delay: 0.2 }}
```

### Scroll Reveal
```javascript
// Appear on scroll
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.3 }}
```

### Hover Effects
```javascript
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
transition={{ type: "spring", stiffness: 300 }}
```

## 📱 Responsive Breakpoints

```javascript
// Mobile
@media (max-width: 40em) { } // 640px

// Tablet
@media (max-width: 64em) { } // 1024px

// Desktop
@media (max-width: 75em) { } // 1200px
```

## 🚀 Commands

```bash
# Development
npm start               # Port 3000

# Production
npm run build          # Output: build/
GENERATE_SOURCEMAP=false npm run build

# Testing
npm test
```

## 🎯 Memorial Garden Contact Info

- **Phone**: 14 99794-3325
- **WhatsApp**: 14 99881-1397
- **Instagram**: @memorial.garden
- **Address**: Est. Fernando Antônio Paschoal 1.555, Água do Jacu, Ourinhos, SP - CEP: 19904-000
- **Hours**: Segunda a segunda, 08:00-18:00 + Plantão 24h

## 📝 Content Source

All content is sourced from `memorial-assets/content.json` which was scraped from https://memorialgarden.com.br/

Import pattern:
```javascript
import memorialContent from '../data/content';
export default memorialContent;
```

## ✅ When Creating/Editing Components

1. Check if content exists in `content.js`
2. Use theme colors from `Themes.js`
3. Implement responsive design (mobile-first)
4. Add Framer Motion animations for entrances
5. Test Locomotive Scroll behavior
6. Verify z-index doesn't conflict (Navbar: 6, Loader: 10)
7. Use `data-scroll-section` for Locomotive
8. Test on mobile (smooth scroll enabled for mobile/tablet)

## 🔍 Performance

- Lazy load components with React.lazy()
- Use WebP images
- Target Lighthouse score ≥ 80
- Loader shows for 3 seconds on initial load
- Optimize video (consider poster image)

## 🎨 Brand Voice

Memorial Garden is respectful, welcoming, and serene. Use:
- Warm, empathetic language
- Professional but accessible tone
- Focus on peace, care, and memory preservation
- Avoid overly commercial or sales-heavy copy