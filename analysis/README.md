
The website utilizes a modern, performance-optimized, server-side rendered architecture combining **React Router v7** with **Tailwind CSS v4**, paired with a distinctive retro-technical design language characterized by zero-radius brutalist borders, pixelated accents (`Silkscreen`, `CamelCool`), tactile 3D beveled buttons, and warm parchment/graphite palettes.

---

## 2. Architectural Identity & Technology Stack

| Layer | Discovered Technology | Evidence & Implementation Details |
| :--- | :--- | :--- |
| **Framework / SSR** | **React Router v7** (formerly Remix / React Router 7) | `window.__reactRouterContext`, `window.__reactRouterManifest`, Vite Environment API, streaming SSR controller (`streamController.enqueue`). |
| **Bundler & Build Tool** | **Vite** | Route-based code splitting, modulepreload links, chunk hashing (`root-CV-Hx8tP.js`, `home-4hlN2DbM.js`). |
| **Styling Engine** | **Tailwind CSS v4** | Modern `@import "tailwindcss";` setup, OKLab/OKLCH color mixing (`color-mix(in oklab, ...)`), CSS custom property design tokens. |
| **UI Primitives** | **Radix UI** + **shadcn/ui** patterns | `@radix-ui/react-navigation-menu`, `@radix-ui/react-collapsible`, `@radix-ui/react-slot`, `class-variance-authority` (CVA), `clsx`, `tailwind-merge`. |
| **Iconography** | **Lucide React** + Custom SVGs | Lucide icons (39 identified), custom SVG brand logos (Discord, X/Twitter, LinkedIn, YouTube, GitHub, YC). |
| **Typography** | Google Fonts + Custom WebFont | `Figtree` (body sans), `Geist Mono` (code/numbers), `Silkscreen` (retro uppercase UI), `Source Serif 4` (editorial accents), `CamelCool` (custom display font). |
| **CDN & Edge** | **Cloudflare** | Cloudflare Workers / Pages, Zaraz tag manager, Cloudflare Insights beacon, bot mitigation. |
| **Analytics & Telemetry** | Google Tag Manager + Octolane + Custom | First-party GTM (`/gtm1231osdifuwer/`), Octolane B2B tracker, internal journey tracking endpoint (`/api/journey/events`). |

---

## 3. Analysis Deliverables Directory Map

The technical specification is structured across the following modular documents inside `c:\Users\HP\Desktop\clev\analysis\`:

- **[routes.md](file:///c:/Users/HP/Desktop/clev/analysis/routes.md)**: Exhaustive route inventory, SEO metadata, canonical paths, loader data contracts, and subdomain architecture.
- **[components.md](file:///c:/Users/HP/Desktop/clev/analysis/components.md)**: Full component hierarchy, reusable atoms (`PixelButton`, `Button`, `Eyebrow`), navigation structures (`Navbar`, `NavigationMenu`, `MobileDrawer`), and page section organisms.
- **[design-system.md](file:///c:/Users/HP/Desktop/clev/analysis/design-system.md)**: CSS design tokens, light/dark color palettes, typography scale, zero-radius borders, shadows/bevels, responsive breakpoints, and keyframe animations.
- **[interactions.md](file:///c:/Users/HP/Desktop/clev/analysis/interactions.md)**: Stateful client behaviors, Radix dropdowns, mobile menu transitions, interactive bot prompt switcher, accordions, theme toggle, and analytics triggers.
- **[assets.md](file:///c:/Users/HP/Desktop/clev/analysis/assets.md)**: Catalog of SVG logos, partner icons, team photography, OpenGraph images, webfonts, and Lucide icon indices.
- **[unknowns-limitations.md](file:///c:/Users/HP/Desktop/clev/analysis/unknowns-limitations.md)**: Boundary conditions, closed-source cloud runtime backends, telemetry redaction, and reverse engineering limitations.
- **[implementation-plan.md](file:///c:/Users/HP/Desktop/clev/analysis/implementation-plan.md)**: Prioritized, step-by-step engineering roadmap to rebuild the entire website with 1:1 fidelity.

### Verified Visual Artifacts
Captured browser scenarios are saved in `analysis/screenshots/`:
- **Desktop (1280x720 / 1440x900)**: [landing-desktop-1280.png](file:///c:/Users/HP/Desktop/clev/analysis/screenshots/landing-desktop-1280.png) & [pricing-desktop-1440.png](file:///c:/Users/HP/Desktop/clev/analysis/screenshots/pricing-desktop-1440.png)
- **Tablet (768x1024)**: [landing-tablet-768.png](file:///c:/Users/HP/Desktop/clev/analysis/screenshots/landing-tablet-768.png)
- **Mobile (375x812)**: [landing-mobile-375.png](file:///c:/Users/HP/Desktop/clev/analysis/screenshots/landing-mobile-375.png)
- **Interactive State**: [bot-menu-open.png](file:///c:/Users/HP/Desktop/clev/analysis/screenshots/bot-menu-open.png) (Desktop NavigationMenu dropdown)
