# Design System Specification

## 1. Color System & Design Tokens

The camelAI aesthetic is founded on a high-contrast, tactile, retro-brutalist theme. The light palette evokes archival parchment paper, while the dark theme introduces deep obsidian tones with precise stone/strata accents.

### 1.1 CSS Custom Properties Matrix

```css
@import "tailwindcss";

:root {
  /* Corner Radii - Strict Brutalist Zero Radius */
  --radius: 0rem;

  /* Base Surface & Text */
  --background: #f6f4ee;
  --foreground: #111113;

  /* Cards & Containers */
  --card: #efede6;
  --card-foreground: oklch(14.1% 0.005 285.823);

  /* Popovers & Dropdowns */
  --popover: oklch(100% 0 0);
  --popover-foreground: oklch(14.1% 0.005 285.823);

  /* Brand Primary */
  --primary: #111113;
  --primary-foreground: #f6f4ee;

  /* Brand Secondary */
  --secondary: oklch(96.7% 0.001 286.375);
  --secondary-foreground: oklch(21% 0.006 285.885);

  /* Muted Elements */
  --muted: oklch(96.7% 0.001 286.375);
  --muted-foreground: #3f3f45;

  /* Accent Tones */
  --accent: #efede6;
  --accent-foreground: oklch(21% 0.006 285.885);

  /* Status & Destructive */
  --destructive: oklch(57.7% 0.245 27.325);

  /* Structural Borders & Controls */
  --border: #d5d2c9;
  --input: #d5d2c9;
  --ring: #8a888f;

  /* Product Feature Accent */
  --guide-accent: oklch(50.5% 0.24 275.75);

  /* Data Visualizations */
  --chart-1: oklch(64.6% 0.222 41.116);
  --chart-2: oklch(60% 0.118 184.704);
  --chart-3: oklch(39.8% 0.07 227.392);
  --chart-4: oklch(82.8% 0.189 84.429);
  --chart-5: oklch(76.9% 0.188 70.08);

  /* Custom Tactile Tokens */
  --paper: #f6f4ee;
  --rim: #d5d2c9;
  --press-bg: #efede6;
}

.dark {
  /* Dark Base Surface & Text */
  --background: #0b0b0c;
  --foreground: #f4f2ea;

  /* Dark Cards & Popovers */
  --card: #141417;
  --card-foreground: #f4f2ea;
  --popover: #151518;
  --popover-foreground: #f4f2ea;

  /* Dark Primary Controls */
  --primary: #f4f2ea;
  --primary-foreground: #0b0b0c;

  /* Dark Secondary & Muted */
  --secondary: #1e1f22;
  --secondary-foreground: #f4f2ea;
  --muted: #1e1f22;
  --muted-foreground: #8a888f;

  /* Dark Structural Borders & Rings */
  --border: #2c2c31;
  --input: #2c2c31;
  --ring: #4e5058;

  /* Dark Custom Tactile Tokens */
  --paper: #141417;
  --rim: #4a4a55;
  --soil: #3a2a1e;
  --st: #85858e;
  --st-d: #62626a;
  --st-l: #a3a3ab;
  --st-ink: #141417;
}
```

---

## 2. Typography System

The typography creates a deliberate tension between clean, modern readability (`Figtree`), mechanical precision (`Geist Mono`), classical editorial authority (`Source Serif 4`), and retro-gaming pixel nostalgia (`Silkscreen`, `CamelCool`).

### 2.1 Font Declarations & WebFont Hierarchy

```css
/* Custom Brand Display Font */
@font-face {
  font-family: 'CamelCool';
  src: url('/fonts/camelCoolFont-Regular.woff2') format('woff2'),
       url('/fonts/camelCoolFont-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Secondary Pixel Glyphs Fallback */
@font-face {
  font-family: 'CamelCool';
  src: url('/fonts/Silkscreen-Regular.ttf') format('truetype');
  unicode-range: U+0027, U+2019; /* Apostrophes and quotes */
  font-display: swap;
}
```

Google Fonts loaded via `<link>`:
- **`Figtree`**: Primary UI & body font (300 to 900, normal & italic).
- **`Geist Mono`**: Code snippets, pricing figures, and terminal outputs (100 to 900).
- **`Silkscreen`**: Uppercase badges, navigation items, and `PixelButton` controls (400, 700).
- **`Source Serif 4`**: Editorial headings and serif highlights (opsz 8..60, 200 to 900).

### 2.2 Typography Scale & Tracking Standards

| Element Type | Font Family | Size | Weight | Tracking (Letter Spacing) | Transformation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Eyebrow Badges** | `Silkscreen, monospace` | `10px` (`0.625rem`) | 400 | `0.3em` (`tracking-[0.3em]`) | `uppercase` |
| **PixelButton (Default)** | `Silkscreen, monospace` | `11px` | 400 | `0.22em` (`tracking-[0.22em]`) | `uppercase` |
| **PixelButton (Small)** | `Silkscreen, monospace` | `10px` | 400 | `0.2em` (`tracking-[0.2em]`) | `uppercase` |
| **Nav Dropdown Trigger**| `Silkscreen, monospace` | `10px` | 400 | `0.18em` (`tracking-[0.18em]`) | `uppercase` |
| **Hero Heading 1** | `Source Serif 4 / Figtree`| Fluid clamp (2.5rem – 5rem) | 600 / 700 | `-0.02em` (tight) | Title case |
| **Section Heading 2** | `Figtree, sans-serif` | `1.875rem` – `2.5rem` | 600 | `-0.015em` | Sentence case |
| **Body Text** | `Figtree, sans-serif` | `0.9375rem` – `1.0625rem`| 400 / 500 | Normal | None |
| **Code / Monospace** | `Geist Mono, monospace` | `0.8125rem` – `0.875rem` | 400 / 500 | Normal | None |

---

## 3. Borders, Shadows & Tactile Bevels

### 3.1 Strict Zero Border Radius
Unlike mainstream SaaS apps that use rounded corners (`rounded-lg` or `rounded-full`), camelAI enforces **zero border radius** across all interactive elements:
- Buttons: `rounded-none`
- Dropdown menus: `rounded-none`
- Cards & Dialogs: `rounded-none`
- Input fields: `rounded-none`
- Badges: `rounded-none`

### 3.2 3D Retro Beveled Pixel Button
In dark mode, interactive buttons and cards use beveled multi-tone borders mimicking 90s OS buttons:
```css
.pixel-bevel {
  border-width: 1px;
  border-style: solid;
  border-color: #55555d #0b0b0c #0b0b0c #55555d; /* Top/Left light, Bottom/Right shadow */
}
```

### 3.3 Subtle Elevation Shadows
Popovers and floating menus use high-transparency shadows to preserve clean lines:
```css
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
```

---

## 4. Responsive Breakpoints & Viewport Layouts

The layout uses standard Tailwind responsive breakpoint tokens:

| Breakpoint | Minimum Width | Typical Target Device |
| :--- | :--- | :--- |
| **`sm`** | `40rem` (640px) | Large phones / phablets (landscape) |
| **`md`** | `48rem` (768px) | Tablets (iPad portrait) |
| **`lg`** | `64rem` (1024px) | Tablets (iPad landscape) / Small laptops |
| **`xl`** | `80rem` (1280px) | Standard desktop monitors (`max-w-7xl` container) |
| **`2xl`** | `96rem` (1536px) | Widescreen displays |

### Dynamic Hero SVH Formula
The hero section dynamically calculates available viewport space to prevent fold clipping on mobile devices with browser URL bars:
```css
#hero {
  min-height: calc(100svh - 3.75rem); /* Total small viewport height minus navbar */
  --hero-h1: calc(2.1 * min((min(100vw, 88rem) - 4rem) / 18.6, 5rem));
  --hero-rest: 590px;
  --hero-gap: min(36svh, max(8rem, calc(100svh - var(--hero-h1) - var(--hero-rest) + 0.24 * clamp(0px, 900px - 100svh, 250px))));
}
```

---

## 5. Keyframe Animations

```css
/* Pixel Boiled Animation (Retro Animated Jitter) */
@keyframes px-boil {
  0% { transform: translate(0, 0); }
  25% { transform: translate(1px, -1px); }
  50% { transform: translate(-1px, 1px); }
  75% { transform: translate(1px, 1px); }
  100% { transform: translate(0, 0); }
}

/* Radix Collapsible Height Transitions */
@keyframes collapsible-down {
  from { height: 0; }
  to { height: var(--radix-collapsible-content-height); }
}

@keyframes collapsible-up {
  from { height: var(--radix-collapsible-content-height); }
  to { height: 0; }
}

/* Accordion Smooth Expansions */
@keyframes accordion-down {
  from { height: 0; }
  to { height: var(--radix-accordion-content-height); }
}

@keyframes accordion-up {
  from { height: var(--radix-accordion-content-height); }
  to { height: 0; }
}
```
All animations automatically honor user preferences:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```
