# Asset Inventory & Resource Directory

## 1. Brand Vectors & Icons

All primary SVG brand assets have been inspected and downloaded directly into `analysis/assets/`.

| File Path | Description | Dimensions | Formats Available |
| :--- | :--- | :--- | :--- |
| **`analysis/assets/logo-light.svg`** | Full horizontal logo for light surfaces. Black text with inverted camel icon square. | `1932 x 466` (viewBox) | SVG |
| **`analysis/assets/logo-dark.svg`** | Full horizontal logo for dark surfaces. White text with white camel icon square. | `1932 x 466` (viewBox) | SVG |
| **`analysis/assets/favicon.svg`** | Standalone pixelated camel head icon in square container. | `32 x 32` / Scalable | SVG |
| **`/favicon.ico`** | Legacy multi-resolution ICO icon. | `48 x 48` | ICO |
| **`/favicon-16x16.png`** | Small raster favicon. | `16 x 16` | PNG |
| **`/favicon-32x32.png`** | Standard raster favicon. | `32 x 32` | PNG |
| **`/apple-touch-icon.png`** | High-res iOS home screen icon. | `180 x 180` | PNG |
| **`/site.webmanifest`** | Progressive web app manifest detailing theme colors and app icons. | JSON | WebManifest |
| **`/llms.txt`** | LLM-readable summary of site products and documentation. | Plain Text | TXT |

---

## 2. Partner & Ecosystem Logos

Displayed within integration marquees, feature cards, and platform architecture diagrams:

| Logo Identifier | Path | Format | Usage Context |
| :--- | :--- | :--- | :--- |
| **Y Combinator** | `/logos/yc.png` | Raster PNG | Company section & footer trust badge (W24 batch) |
| **PostgreSQL** | `/logos/postgres.svg` | Vector SVG | Database connectors on camelRun & camelBot |
| **BigQuery** | `/logos/bigquery.svg` | Vector SVG | Enterprise analytics integration |
| **Snowflake** | `/logos/snowflake.svg` | Vector SVG | Data warehouse connector |
| **Airtable** | `/logos/airtable.svg` | Vector SVG | Low-code database connector |
| **Stripe** | `/logos/stripe.svg` | Vector SVG | Payment automation and billing agents |
| **Slack** | `/logos/slack.svg` | Vector SVG | camelRun Slack bot deployment integration |
| **Notion** | `/logos/notion.svg` | Vector SVG | Knowledge base sync integration |
| **HubSpot** | `/logos/hubspot.svg` | Vector SVG | CRM integration showcase |
| **GitHub** | `/logos/github_light.svg` | Vector SVG | GitHub OAuth, repo links, and open-source badge |
| **OpenAI** | `/logos/openai_light.svg`| Vector SVG | Model provider switcher |
| **Apple** | `/logos/apple.png` | Raster PNG | Client platform indicator |
| **Google** | `/logos/google.png` | Raster PNG | Cloud ecosystem partner |

---

## 3. Team Avatars

Located in `/team/` and rendered inside the `#company` section on the landing page and `/about-us`:
- **Miguel Salinas**: `/team/miguel.png` (Co-founder / Engineering)
- **Isabella Reed**: `/team/isabella.png` (Co-founder / Product)
- **Illiana Reed**: `/team/illiana.png` (Co-founder / Operations)

---

## 4. OpenGraph Social Card Images

High-resolution `1200 x 630` social preview images configured for Twitter cards and OpenGraph scrapers:
- **Default Site Preview**: `https://camelai.com/og/og-default.png`
- **Homepage**: `https://camelai.com/og/og-home.png`
- **Pricing**: `https://camelai.com/og/og-pricing.png`
- **camelBot**: `https://camelai.com/og/og-bot.png`
- **camelRun**: `https://camelai.com/og/og-run.png`
- **camelCode**: `https://camelai.com/og/og-code.png`
- **About Us**: `https://camelai.com/og/og-about-us.png`
- **Contact Sales**: `https://camelai.com/og/og-contact.png`
- **Discord Bot Builder**: `https://camelai.com/og/og-discord.png`
- **Open Source**: `https://camelai.com/og/open-source.png`

---

## 5. Lucide React Icon Catalog

Verified 39 distinct icons from the `lucide-react` library utilized across headers, buttons, cards, and diagrams:

| Lucide Icon Class | Component Name | Usage Context |
| :--- | :--- | :--- |
| `lucide-chevron-down` | `ChevronDown` | Navigation dropdown triggers, accordion headers |
| `lucide-chevron-up` | `ChevronUp` | Accordion toggles |
| `lucide-menu` | `Menu` | Mobile navigation drawer trigger |
| `lucide-x` | `X` | Mobile drawer close button, modal dismiss |
| `lucide-arrow-right` | `ArrowRight` | Link callouts, CTA button text indicators |
| `lucide-arrow-up-right`| `ArrowUpRight` | External outbound links (Discord, GitHub, Docs) |
| `lucide-arrow-down` | `ArrowDown` | Scroll indicators |
| `lucide-check` | `Check` | Pricing feature lists, copy confirmation |
| `lucide-copy` | `Copy` | Code snippet copy button |
| `lucide-bot` | `Bot` | camelBot feature highlights |
| `lucide-code-xml` | `CodeXml` | camelCode syntax and code blocks |
| `lucide-terminal` | `Terminal` | Persistent environment command previews |
| `lucide-cloud` | `Cloud` | camelRun serverless hosting indicators |
| `lucide-git-branch` | `GitBranch` | Version control & rollback features |
| `lucide-github` | `Github` | GitHub authentication & source links |
| `lucide-hard-drive` | `HardDrive` | Workspace storage indicators |
| `lucide-clock` | `Clock` | Agent execution runtime & cron timers |
| `lucide-timer` | `Timer` | Hourly billing calculations |
| `lucide-sparkles` | `Sparkles` | AI capability indicators |
| `lucide-brain-circuit`| `BrainCircuit` | Frontier model integration diagram |
| `lucide-layers` | `Layers` | Architecture tier indicators |
| `lucide-server-cog` | `ServerCog` | Infrastructure management |
| `lucide-shield-check` | `ShieldCheck` | Security and privacy features |
| `lucide-webhook` | `Webhook` | camelRun wake-up triggers |
| `lucide-message-square`|`MessageSquare` | Discord message bubbles |
| `lucide-mouse-pointer-click`|`MousePointerClick`| Interactive action demos |
| `lucide-puzzle` | `Puzzle` | MCP server integrations |
| `lucide-refresh-cw` | `RefreshCw` | Version rollback & agent loop |
| `lucide-key-round` | `KeyRound` | Bring-your-own API key callouts |
| `lucide-lock-keyhole`| `LockKeyhole` | Private test channel sandbox |
| `lucide-mail` | `Mail` | Contact sales inquiry email |
| `lucide-user` | `User` | Account profile indicators |
| `lucide-folder` | `Folder` | Workspace file tree |
| `lucide-package-open` | `PackageOpen` | Deployed applications |
| `lucide-list` | `List` | Discord bot idea directory |
| `lucide-earth` | `Earth` | Custom domains on camelCode |
| `lucide-triangle-alert`|`TriangleAlert`| Error states & warning callouts |

---

## 6. Social Brand Vector SVGs

The footer includes custom inline SVG paths for social media platforms:

### 6.1 Discord Icon
```svg
<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
</svg>
```

### 6.2 X (Twitter) Icon
```svg
<svg viewBox="0 0 1200 1227" width="16" height="16" fill="currentColor" aria-hidden="true">
  <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"></path>
</svg>
```

### 6.3 GitHub Icon
```svg
<svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"></path>
</svg>
```
