# DARB Formulation Enterprise — Landing Page

A professional, modern, responsive landing page for **DARB Formulation Enterprise**, a cleaning products business based in Owerri, Imo State, Nigeria.

Built with **React**, **Vite**, and **CSS3**, following the Product Requirements Document's architectural guidance and accessibility standards.

## Live Demo

[View on GitHub Pages](https://darb-formulation-enterprise.vercel.app/) _(deploy when ready)_

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 (ES6+) |
| Build tool | Vite 8 |
| Styling | CSS3 with custom properties |
| Linting | Oxlint |
| Backend (future) | Node.js + Express.js + Supabase |

## Brand Identity

| Purpose | Colour | Hex |
|--------|--------|-----|
| Primary / accent | Deep yellow | `#E5B51B` |
| Secondary | Mint green | `#A8E6CF` |
| Dark text | Charcoal | `#202820` |
| Background | White | `#FFFFFF` |
| Section alt bg | Soft mint tint | `#F2FBF6` |
| Secondary text | Muted grey | `#626B65` |

**Typography**: Outfit (headings) + Work Sans (body) via Google Fonts.

## Project Structure

```
src/
  components/
    Icons.jsx          — Reusable SVG icon library
    Navbar.jsx         — Sticky nav with mobile hamburger menu
    Hero.jsx           — Headline, description, primary + WhatsApp CTAs
    ProductSection.jsx — Product showcase grid
    ProductCard.jsx    — Reusable product card component
    AboutSection.jsx   — Business introduction and location
    WhyChooseUs.jsx    — Benefits with icons
    ContactSection.jsx — Contact details + validated contact form
    WhatsAppButton.jsx — Floating WhatsApp contact button
    Footer.jsx         — Professional footer with quick links
  data/
    products.js        — Product catalogue (placeholders pending approval)
    businessInfo.js    — Business contact info (placeholders pending approval)
  styles/
    global.css         — Design tokens, reset, base styles
    navbar.css         — Navigation styles
    hero.css           — Hero section styles
    products.css       — Product card/styles
    sections.css       — About, Why Choose, Contact, WhatsApp button
    footer.css         — Footer styles
  utils/
    whatsapp.js        — WhatsApp click-to-chat URL builder
  App.jsx
  main.jsx
```

## Getting Started

### Prerequisites

- Node.js 22+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Lint

```bash
npm run lint
```

## Configuration

Copy `.env.example` to `.env` and fill in verified values:

```bash
cp .env.example .env
```

> **Important**: Never commit the real `.env` file. It is listed in `.gitignore`.

## Content Notes

This project uses **clearly marked placeholders** for all content that needs to be supplied and approved by the business before launch:

- **Products**: `src/data/products.js` contains 6 placeholder product cards
- **Contact info**: `src/data/businessInfo.js` contains placeholder phone, email, WhatsApp number, and address
- **Company description/mission**: in `src/data/businessInfo.js` — replace with approved copy

To replace placeholders, update `src/data/businessInfo.js` and `src/data/products.js`, then redeploy.

## Responsive Design

| Breakpoint | Layout |
|-----------|--------|
| Mobile (default) | Single column, hamburger menu, stacked CTAs |
| Tablet (768px+) | Two-column hero and product grid |
| Desktop (1024px+) | Four-column footer, three-column product grid |

## Accessibility

- Semantic HTML landmarks
- Keyboard navigation with visible focus states
- Screen reader ARIA labels
- `prefers-reduced-motion` support
- Form validation with error messages
- Sufficient colour contrast (WCAG 2.1 AA)

## License

Private project for DARB Formulation Enterprise.
