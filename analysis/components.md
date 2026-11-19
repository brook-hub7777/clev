# Component Inventory & Implementation Specifications

## 1. Atomic Primitives

The camelAI component library follows a brutalist, pixelated aesthetic built on **Radix UI** primitives styled with **Tailwind CSS v4** and utility helpers (`clsx`, `tailwind-merge`).

### 1.1 PixelButton (`PixelButton.tsx`)

The signature interactive element across the entire website. Characterized by zero border radius, uppercase monospace typography, wide tracking, and high tactile contrast.

#### TypeScript Signature & Implementation
```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
  href?: string;
  "data-journey-cta"?: string;
}

const variantStyles: Record<string, string> = {
  primary: "bg-foreground text-background hover:opacity-80 active:translate-y-px",
  secondary: "border border-border text-foreground bg-background/55 hover:border-foreground/50 active:translate-y-px",
  ghost: "text-muted-foreground hover:text-foreground underline-offset-4 hover:underline px-0 py-0"
};

const sizeStyles: Record<string, string> = {
  default: "text-[11px] px-5 py-3 tracking-[0.22em]",
  sm: "text-[10px] px-4 py-2.5 tracking-[0.2em]"
};

export const PixelButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, PixelButtonProps>(
  ({ variant = "primary", size = "default", className, style, href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center uppercase select-none rounded-none transition font-silkscreen",
      variantStyles[variant],
      sizeStyles[size],
      className
    );
    const fontStyle = { fontFamily: '"Silkscreen", monospace', ...style };

    if (href !== undefined) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          style={fontStyle}
          data-journey-cta={variant}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        style={fontStyle}
        {...props}
      />
    );
  }
);
PixelButton.displayName = "PixelButton";
```

---

### 1.2 Button (`Button.tsx`)

A standard shadcn/ui CVA button wrapper used for auxiliary navigation items, form submit controls, and secondary utilities.

#### CVA Variant Definition
```tsx
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-none border border-transparent bg-clip-padding text-xs/relaxed font-medium transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:border-ring aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline: "border-border dark:bg-input/30 hover:bg-input/50 hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 focus-visible:border-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-7 gap-1 px-2 text-xs/relaxed [&_svg:not([class*='size-'])]:size-3.5",
        xs: "h-5 gap-1 rounded-none px-2 text-[0.625rem] [&_svg:not([class*='size-'])]:size-2.5",
        sm: "h-6 gap-1 px-2 text-xs/relaxed [&_svg:not([class*='size-'])]:size-3",
        lg: "h-8 gap-1 px-2.5 text-xs/relaxed [&_svg:not([class*='size-'])]:size-4",
        icon: "size-7 [&_svg:not([class*='size-'])]:size-3.5",
        "icon-xs": "size-5 rounded-none [&_svg:not([class*='size-'])]:size-2.5",
        "icon-sm": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-lg": "size-8 [&_svg:not([class*='size-'])]:size-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
```

---

### 1.3 Eyebrow (`Eyebrow.tsx`)

Header badge text preceding section headings. Renders uppercase pixel typography with wide letter-spacing.

```tsx
import * as React from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn("text-[10px] uppercase tracking-[0.3em] text-muted-foreground", className)}
      style={{ fontFamily: '"Silkscreen", monospace' }}
    >
      {children}
    </p>
  );
}
```

---

### 1.4 Collapsible / Accordion (`Collapsible.tsx`)

Direct wrapper around `@radix-ui/react-collapsible` with smooth CSS height animations.

```tsx
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

export const Collapsible = CollapsiblePrimitive.Root;
export const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
export const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
```
**Keyframe Bindings in CSS**:
- `data-[state=open]:animate-collapsible-down`
- `data-[state=closed]:animate-collapsible-up`

---

## 2. Navigation Molecules & Organisms

### 2.1 Sticky Top Navbar (`Navbar.tsx`)

```tsx
<nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
  <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
    {/* Brand Logo with Theme Switching */}
    <a href="/" aria-label="camelAI home" className="-my-2 py-2">
      <img alt="camelAI" src="/logo-light.svg" className="block dark:hidden h-7 w-auto" />
      <img alt="camelAI" src="/logo-dark.svg" className="hidden dark:block h-7 w-auto" />
    </a>

    {/* Desktop Navigation Items */}
    <div className="hidden items-center gap-4 lg:flex">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger style={{ fontFamily: "Silkscreen, monospace" }}>
              BOT <ChevronDown className="ml-1 size-3" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* Dropdown Items (Overview, Discord bot maker, Bots you can make, Open builder) */}
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger style={{ fontFamily: "Silkscreen, monospace" }}>
              RUN <ChevronDown className="ml-1 size-3" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* Dropdown Items (Overview, Cloud hosting, MCP tools, Self-hosted) */}
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger style={{ fontFamily: "Silkscreen, monospace" }}>
              CODE <ChevronDown className="ml-1 size-3" />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* Dropdown Items (Overview, Open source, Permanent computer, Vibe coding) */}
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <a href="/pricing" className="text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground font-silkscreen">PRICING</a>
      <a href="/blog" className="text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground font-silkscreen">BLOG</a>
      <a href="/contact" className="text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground font-silkscreen">CONTACT</a>
    </div>

    {/* Right Action Cluster */}
    <div className="hidden items-center gap-3 lg:flex">
      <Button variant="outline" size="sm" className="font-silkscreen text-[10px] tracking-wider" onClick={openLoginModal}>
        LOG IN
      </Button>
      <PixelButton size="sm" href="https://bots.camelai.com/new?ref=nav">
        START FREE
      </PixelButton>
    </div>

    {/* Mobile Hamburger Trigger */}
    <div className="flex items-center gap-2 lg:hidden">
      <button aria-label="Open navigation" className="p-2 text-foreground" onClick={toggleMobileMenu}>
        <Menu className="size-6" />
      </button>
    </div>
  </div>
</nav>
```

---

## 3. Page Section Organisms (Landing Page)

### 3.1 Hero Section (`HeroSection.tsx`)
- **Container**: `id="hero" class="relative isolate flex flex-col overflow-hidden sm:min-h-[calc(100svh-3.75rem)]"`
- **Heading 1**: Scaled fluidly using CSS clamp:
  `sm:[--hero-h1:calc(2.1*min((min(100vw,88rem)_-_4rem)/18.6,5rem))]`
  `H1: "Open-source home for AI agents"`
- **Eyebrow**: `"AN OPEN-SOURCE HOME FOR AI AGENTS"`
- **Subtitle**: `"camelCode writes software. camelRun hosts the agents you build. camelBot makes Discord bots."`
- **Action Cluster**:
  - Primary `PixelButton`: `"BUILD A DISCORD BOT"` (`href="https://bots.camelai.com/new?ref=home"`)
  - Secondary `PixelButton`: `"EXPLORE CAMELRUN"` (`href="/run"`)
- **Product Row Grid**:
  A 3-column interactive product switcher connecting directly to `/discord`, `/run`, and `/code`.

---

### 3.2 Bot Section (`BotSection.tsx`)
- **Container**: `id="bot" class="relative isolate scroll-mt-16 overflow-x-clip py-12 md:py-20"`
- **Eyebrow**: `"CAMELBOT · DISCORD BOT BUILDER"`
- **Heading 2**: `"Build a custom Discord bot with AI"`
- **Interactive Preset Selector**:
  - Category buttons: `"D&D dice bot"`, `"Trivia bot"`, `"Ticket desk"`, `"API alerts"`
  - Clicking a category automatically populates the prompt textarea and switches the live Discord chat preview simulation.
- **Discord Chat Simulator**:
  - Dark frame styled like Discord desktop client (`#313338`).
  - Bot profile header with bot avatar, `[BOT]` tag in blurple (`#5865F2`).
  - Realistic command invocation (`/roll`, `/trivia`, `/ticket`) and instant reply card.

---

### 3.3 Run Section (`RunSection.tsx`)
- **Container**: `id="run" class="scroll-mt-16 py-12 md:py-20"`
- **Eyebrow**: `"CAMELRUN · SERVERLESS AGENT PLATFORM"`
- **Heading 2**: `"Host AI agents that wake up when there is work"`
- **Pricing Badge**:
  `"$0.01 per agent-hour"` with explanation of sleeping vs running compute costs.
- **Code Block / SDK Demonstration**:
  Displays minimal Python / TypeScript snippet demonstrating serverless agent event loops.

---

### 3.4 Code Section (`CodeSection.tsx`)
- **Container**: `id="code" class="scroll-mt-16 py-12 md:py-20"`
- **Eyebrow**: `"CAMELCODE · AI CODING ASSISTANT"`
- **Heading 2**: `"An AI coding agent with a permanent computer"`
- **Dual Pane Workspace Preview**:
  - Left pane: Interactive terminal with bash commands (`git clone`, `npm run dev`).
  - Right pane: In-browser live preview of the generated web application.
- **What People Build Grid / Carousel**:
  Cards showcasing real-world apps generated by camelCode (data dashboards, web scrapers, automation bots).

---

### 3.5 Platform Architecture Section (`PlatformSection.tsx`)
- **Container**: `id="platform" class="scroll-mt-16 py-12 md:py-20"`
- **Eyebrow**: `"PLATFORM ARCHITECTURE"`
- **Heading 2**: `"We build our own products on camelRun"`
- **Architecture Diagram**:
  Shows how camelBot and camelCode run as agents inside the camelRun distributed cloud infrastructure.

---

### 3.6 FAQ Section (`FAQSection.tsx`)
- **Container**: `id="faq" class="scroll-mt-16 overflow-x-clip py-12 md:py-20 pb-4 md:pb-4 lg:pb-20"`
- **Eyebrow**: `"FAQ"`
- **Heading 2**: `"Questions about camelAI"`
- **8 Accordion Items**:
  1. *What is camelAI?*
  2. *What is camelRun?*
  3. *What is camelBot?*
  4. *Is camelCode an AI app builder?*
  5. *Is camelAI open source?*
  6. *Can I self-host camelAI?*
  7. *How much does camelAI cost?*
  8. *Which AI models does camelAI support?*

---

### 3.7 Company Section (`CompanySection.tsx`)
- **Container**: `id="company" class="scroll-mt-16 overflow-x-clip py-12 md:py-20 md:pb-24"`
- **Eyebrow**: `"COMPANY"`
- **Heading 2**: `"A small team that ships often"`
- **Team Grid**:
  - Miguel Salinas (`/team/miguel.png`)
  - Isabella Reed (`/team/isabella.png`)
  - Illiana Reed (`/team/illiana.png`)
- **Y Combinator Badge**:
  `"Backed by Y Combinator (W24)"` with official YC orange logo (`/logos/yc.png`).

---

### 3.8 Global Footer (`Footer.tsx`)
- **Brand Column**:
  - Logo SVG.
  - Tagline: `"An open-source home for AI agents."`
  - Social icon group (X, LinkedIn, YouTube, GitHub, Discord).
- **Column 1 (Products)**: camelBot, camelRun, camelCode, Pricing, Docs, Console.
- **Column 2 (Resources)**: Blog, Discord Bot Directory, Use Cases, Open Source.
- **Column 3 (Company)**: About Us, Contact Sales, GitHub Issues, Discord Community.
- **Column 4 (Legal)**: Privacy Policy, Terms of Service, Security.
