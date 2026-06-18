# RemoteRecruit — Home Page (Features Showcase)

[![React Version](https://img.shields.io/badge/react-v19.2.6-blue.svg)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/vite-v8.0.12-blueviolet.svg)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/tailwind_css-v4.3.1-38bdf8.svg)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/framer__motion-v12.40.0-ff007f.svg)](https://www.framer.com/motion/)

A high-fidelity frontend implementation of the **RemoteRecruit** landing page and feature showcase. Built as a technical examination project, this repository showcases a modern component-based architecture, smooth scroll animations, optimized assets, and responsive layout structures matching Figma design specifications.

---

## 🔗 Live Deployment & Repository Links

* 🌐 **Live Demo URL:** [https://remote-recruit-nine.vercel.app/](https://remote-recruit-nine.vercel.app/)
* 💻 **GitHub Repository:** [https://github.com/siam-khan-alt/remote-recruit](https://github.com/siam-khan-alt/remote-recruit)

---

## 📌 Project Overview & High-Fidelity Design Match

**RemoteRecruit** connects global talents with companies hiring full-time, part-time, and freelance professionals. The objective of this project is to deliver a **pixel-perfect, high-fidelity recreation of the Figma design**, with precise attention to:
*   **Typography & Hierarchy:** Clear separation of headings, description text, and button tags using custom and scale-based font weights.
*   **Aesthetics & Polish:** Sleek modern gradients, glassmorphism backdrops, interactive hover micro-states, and shadows corresponding to a premium design system.
*   **Adaptive Layouts:** A fully fluid grid and flex design optimized for a seamless transition between Mobile, Tablet, and Desktop viewports.

---

## 🚀 Core Features Implemented

*   **Component-Based Architecture:** Modular structure dividing the page layout into self-contained, reusable sections and UI components for maintainability.
*   **Responsive Navigation Drawer:** Hamburger-toggle mechanics on mobile viewports transition smoothly into a clean mobile-only navigation overlay.
*   **Scroll-Reveal Animations:** Utilizes `framer-motion` to handle subtle, high-performance fade-ins, float states, and slide-up triggers as sections enter the viewport.
*   **Interactive FAQ Accordion:** Clean, animated layout driven by isolated mock data, maintaining visual hierarchy on all screen sizes.
*   **Performance Optimization:** Asset management including vector SVG graphics, compressed mockups, and modular components designed to achieve optimal Lighthouse speed metrics ($\ge 90$).
*   **Modern Hover States:** Consistent micro-interactions across buttons, links, cards, and interactive wrappers (`transition-all duration-300`).

---

## 🛠️ Tech Stack & Libraries Used

*   **Core Framework:** [React (v19.2)](https://react.dev/) for component lifecycle management and state handling.
*   **Build Tool & Bundler:** [Vite (v8.0)](https://vite.dev/) for extremely fast hot module replacement (HMR) and optimized production compilation.
*   **Styling Engine:** [Tailwind CSS (v4.3)](https://tailwindcss.com/) leveraging utility classes and v4 native CSS-in-CSS configuration for layout styling.
*   **Animation Engine:** [Framer Motion (v12.4)](https://www.framer.com/motion/) for fluid animations, spring-loaded keyframes, and scroll-bound reveals.
*   **Iconography:** [Lucide React (v1.2)](https://lucide.dev/) for crisp, scalable vector-based icons.

---

## 📂 Project Architecture & Directory Structure

The repository is organized following standard frontend architecture conventions, separating global UI components from page-specific sections:

```text
remoterecruit/
├── public/                 # Static public assets
└── src/
    ├── assets/             # Brand assets, vectors (SVGs), mockups, and social icons
    ├── components/
    │   └── ui/             # Reusable core UI components
    │       ├── SectionHeader.jsx  # Standardized heading with badge and description
    │       └── UserCard.jsx       # Floating candidate/payment card component
    ├── data/               # Mock data config files (FAQs, features, social handles)
    ├── sections/           # Discrete layout blocks forming the single page application
    │   ├── Navbar.jsx      # Sticky responsive navigation bar with mobile drawer
    │   ├── Hero.jsx        # Landing hero banner with call-to-actions
    │   ├── GlobalReach.jsx # Interactive section featuring floating dashboard items
    │   ├── FeeFreeForever.jsx  # Feature matrix detailing membership options
    │   ├── ShowcaseTalents.jsx # Video introduction card and skill badges list
    │   ├── ReadyToWork.jsx # Bottom call-to-action block with overlay elements
    │   ├── CommonQuestions.jsx # Animated Q&A accordion list
    │   └── PricingFooter.jsx   # Detailed comparative pricing cards and bottom footer
    ├── App.css             # Root stylesheet overrides
    ├── App.jsx             # Main application orchestrator containing section layout
    ├── index.css           # Tailwind entry point including directives
    └── main.jsx            # React client-side renderer entry
```

---

## ⚙️ Quick Installation & Local Setup

Ensure you have [Node.js](https://nodejs.org/) installed (recommended version 18 or higher).

### 1. Clone the repository
```bash
git clone [https://github.com/siam-khan-alt/remote-recruit.git](https://github.com/siam-khan-alt/remote-recruit.git)
cd remoterecruit
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
The application will be available locally at `http://localhost:5173`.

### 4. Build for production
To build and optimize the project for static production hosting:
```bash
npm run build
```
This generates an optimized `/dist` folder with minified JS/CSS and compressed asset references.

---

## ⚡ Optimization & Performance Details

*   **Asset Compression:** Graphic assets (such as background waves and dashboard mockups) are processed in web-friendly formats to minimize layout shift (CLS) and initial bundle size.
*   **Component Modularity:** Sections are split into individual modules, allowing for isolated renders and keeping the main thread clear.
*   **SVG Optimization:** Background patterns and branding marks are kept inline or imported as vectors, preventing pixelation on high-DPI displays.
*   **Animation Throttling:** Viewport animation triggers utilize `viewport={{ once: true }}` to reduce CPU paint cycles once elements are visible.

---

## ⚠️ Known Issues & Limitations

*   **Asset Source:** Figma design assets were exported and compressed manually; minor color-profile variances may exist depending on monitor calibration (sRGB vs. P3 profiles).
*   **Framer Motion Scroll Offset:** On mobile viewports, fast scrolling may trigger cards animations slightly later due to browser viewport resizing on dynamic address bars.
