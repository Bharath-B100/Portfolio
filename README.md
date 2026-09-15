# Bharath Raj B — Portfolio

A premium, Apple-inspired portfolio website built with **React + Vite**, showcasing my projects, skills, and experience as a Full-Stack Developer & IoT Engineer.

## ?? Live Demo

**?? [https://bharathraj-portfolio.vercel.app](https://bharathraj-portfolio.vercel.app)**

---

## ? Features

### Design & UI
- **Apple-Inspired Minimalist Design** — Clean white aesthetic with deep black typography
- **Fully Responsive** — Optimized for Mobile, Tablet, and Desktop (all breakpoints covered)
- **Custom Cursor** — Premium custom pointer that adapts to context (dark/light sections)
- **Page Transitions** — Smooth fade overlay between pages for a native app feel

### Animations & Interactions
- **Liquid Silver Hover Animation** — Fluid left-to-right silver fill on all skill tags, project tech tags, and case study tags
- **Spinning Silver Ring** — Animated chrome ring on all CTA buttons
- **Scroll-Driven Snake Timeline** — SVG snake path that draws itself as you scroll through "My Journey"
- **3D Hero Image Tilt** — Perspective tilt effect on the profile image following mouse movement
- **Odometer Counter** — Slot-machine style number animation for coding stats
- **Scroll Reveal** — 3D cascade entrance animations for all sections

### Sections
- **Hero** — Animated introduction with particles background and achievement badges
- **About** — Education timeline with animated snake path, certifications, contact info, and live API-fetched coding stats
- **Experience** — UI/UX Internship at Sri Nandha Infotech with detailed bullet points
- **Projects** — 6 project cards with tech tags, hover effects, and case study links
- **Skills** — Categorized skill tags with liquid silver hover animation
- **Contact** — Contact form (Formspree) with GitHub activity stats
- **Footer** — Quick links, social icons, contact details

### Project Case Studies
Each project has a dedicated React page with:
- Project overview and problem statement
- Technical approach and architecture
- Live demo and GitHub repo links
- Animated tags with liquid hover effects

---

## ??? Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 18 (JSX, Hooks) |
| **Build Tool** | Vite |
| **Routing** | React Router DOM v6 |
| **Styling** | Vanilla CSS3 (Custom Properties, Grid, Flexbox) |
| **Animations** | CSS Keyframes, SVG stroke-dashoffset, cubic-bezier transitions |
| **Icons** | Font Awesome 6 |
| **Form** | Formspree API |
| **Live Stats** | LeetCode API (alfa-leetcode-api), GitHub REST API |

---

## ?? Project Structure

```
Portfolio/
+-- index.html                    # Vite HTML entry point
+-- vite.config.js                # Vite configuration
+-- package.json
+-- public/
¦   +-- assets/
¦   ¦   +-- images/               # Profile photo, cursors, project screenshots
¦   ¦   +-- docs/
¦   ¦       +-- Resume.pdf        # Downloadable resume
¦   +-- scripts/
¦       +-- script.js             # Supplemental vanilla JS (scroll animations, etc.)
+-- src/
    +-- main.jsx                  # React entry — mounts App
    +-- App.jsx                   # Root component with React Router routes
    +-- components/
    ¦   +-- Preloader.jsx         # Lightweight entrance preloader (~1.2 s)
    ¦   +-- Navbar.jsx
    ¦   +-- Footer.jsx
    ¦   +-- Lightbox.jsx
    ¦   +-- PageTransitionOverlay.jsx
    ¦   +-- home/                 # Single-page section components
    ¦       +-- Home.jsx          # Hero section
    ¦       +-- About.jsx         # About + coding stats (LeetCode & GitHub API)
    ¦       +-- Experience.jsx
    ¦       +-- Projects.jsx      # Project cards (centralized data array)
    ¦       +-- Skills.jsx
    ¦       +-- Testimonials.jsx
    ¦       +-- Contact.jsx
    +-- pages/
    ¦   +-- Home.jsx              # Assembles all home sections
    ¦   +-- CertificationsPage.jsx
    ¦   +-- case-studies/        # Individual project deep-dives
    ¦       +-- SmartSpending.jsx
    ¦       +-- FinancialPortfolio.jsx
    ¦       +-- HostelManagement.jsx
    ¦       +-- SmartShoe.jsx
    ¦       +-- DydCloths.jsx
    ¦       +-- Traveloop.jsx
    +-- styles/                  # Global and component CSS
```

---

## ?? Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## ?? Projects Featured

| Project | Year | Tech | Links |
|---------|------|------|-------|
| **Smart Hostel Management** | 2024 | MongoDB, Express, React, Node.js | [Live](https://tinyurl.com/SMART-HOSTEL) · [GitHub](https://github.com/Bharath-B100/Smart-hostel) |
| **Smart Spending Analysis** | 2025 | Python, Pandas, Power BI | — |
| **Financial Portfolio Tracker** | 2025 | React, Flask, PostgreSQL | [GitHub](https://github.com/Bharath-B100/Financial_portfolio) |
| **DYD Cloths** | 2025 | Fabric.js, Node.js, MongoDB, Razorpay | [Live](https://dyd-cloths.onrender.com) · [GitHub](https://github.com/Bharath-B100/DYD-Cloths) |
| **Smart Shoe** | 2024 | Arduino, IoT, Embedded C | — |
| **Traveloop** | 2025 | React, Node.js, PostgreSQL, Supabase | [Live](https://traveloop-mtz2.onrender.com/) · [GitHub](https://github.com/Bharath-B100/Traveloop) |

---

## ?? Responsive Breakpoints

| Breakpoint | Target |
|-----------|--------|
| <= 1024px | Tablets |
| <= 768px  | Mobile / Small Tablet |
| <= 576px  | Portrait Mobile |
| <= 480px  | Small Phone |
| <= 375px  | iPhone SE / Extra Small |

---

## ?? About Me

**Bharath Raj B** — B.Tech CSBS Student at Dr.N.G.P Institute Of Technology (2023–2027)

- ?? Coimbatore, India
- ?? bharathrajmurali1010@gmail.com
- ?? +91 9943935576
- ?? [LinkedIn](https://www.linkedin.com/in/bharath-raj143/)
- ?? [GitHub](https://github.com/Bharath-B100)
- ?? [LeetCode](https://leetcode.com/u/Bharath_Raj_B/) — 541+ Problems Solved

---

## ?? License

This project is open source and available under the [MIT License](LICENSE).
