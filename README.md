# Patrick Watertor – Personal Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/8763dcef-8d4f-4b7c-ba33-f11fd9e7055c/deploy-status)](https://app.netlify.com/projects/patrick-watertor-portfolio/deploys)
![GitHub](https://img.shields.io/github/license/JurassicPat/2025-Personal-Portfolio)

A sleek, accessible, and mobile-friendly portfolio built with React and Vite to showcase design and development work. Built by Patrick Watertor — designer, developer, and lover of clean UI.

[🌐 View Live Site »](https://patrickwatertor.com)

---

## ✨ Features

- ⚡ Blazing-fast Vite bundler
- 🎨 Modern, accessible design with responsive layout
- 🖼 Animated sections via Framer Motion
- 📱 Fully responsive + mobile nav with overlay
- 🛠 SEO, meta tags, sitemap generation
- 📊 Google Analytics 4 integration (GDPR-compliant)
- 📩 Contact form with Formspree + spam protection
- 🌑 Dark mode-ready (toggleable)
- 🧩 Modular, reusable React components

---

## 🧰 Tech Stack

- **Frontend:** React 19, Vite, React Bootstrap
- **UI Animations:** Framer Motion, Lucide Icons
- **Routing:** React Router v7
- **Analytics:** `react-ga4` (Google Analytics 4)
- **Forms:** Formspree + honeypot spam protection
- **Deployment:** [Netlify](https://www.netlify.com/)
- **Build Tools:** Vite, ESLint, Vite Plugin Compression

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- npm or pnpm

### Installation

```bash
git clone https://github.com/JurassicPat/2025-Personal-Portfolio.git
cd 2025-Personal-Portfolio
npm install
```

---

## 🛡 Environment Variables

Create a `.env` file (optional depending on your analytics or external services). Example:

```env
VITE_GA4_ID=G-XXXXXXXXXX
FORMSPREE_ENDPOINT=your-form-id
```

---

## 📁 Folder Structure (simplified)

```
src/
├── assets/              # Images, logos, icons
├── components/          # Reusable UI components
├── data/                # Project data, social links
├── hooks/               # Custom React hooks
├── pages/               # Route views (Home, About, etc.)
├── styles/              # CSS files (not Tailwind)
├── App.jsx              # Main app wrapper
└── main.jsx             # Entry point
```

---

## 📬 Contact

Want to connect or work together?

- [GitHub](https://github.com/JurassicPat)

---

## 📄 License

[MIT](./LICENSE)

---

## 🧠 Acknowledgments

- Built with love and Vite ⚡
- Design inspired by modern, minimal personal sites
- Special thanks to [Formspree](https://formspree.io/) and [Framer Motion](https://www.framer.com/motion/)

---

## 🔧 Development Scripts

### Start Local Dev Server

```bash
npm run dev
```

Starts the local development server with hot reloading via Vite.

### Build for Production

```bash
npm run build
```

Builds the site for production and runs the sitemap generator (`scripts/generate-sitemap.js`).

### Preview Production Build

```bash
npm run preview
```

Runs a local preview server to test the production build output.

### Lint Code

```bash
npm run lint
```

Runs ESLint across the project to enforce consistent style and catch errors.

---

> “Clean design is about clarity, empathy, and impact.” – Patrick Watertor