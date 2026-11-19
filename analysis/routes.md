# Route Inventory & Page Architecture

## 1. Overview & Architecture

The camelAI web platform is structured as a **React Router v7** application with Server-Side Rendering (SSR) enabled (`ssr: true`, `isSpaMode: false`). Route discovery operates in lazy mode (`"routeDiscovery": { "mode": "lazy", "manifestPath": "/__manifest" }`).

Every route serves semantic HTML from the edge, complete with:
- Server-rendered OpenGraph (`og:*`) and Twitter card meta tags.
- Schema.org JSON-LD structured data (`Organization`, `SoftwareApplication`, `FAQPage`).
- Font preloading (`/fonts/camelCoolFont-Regular.woff2`).
- Canonical URL declarations.
- Module preload headers for the JavaScript client runtime and route-specific bundles.

---

## 2. Core Public Routes Inventory

### 2.1 Primary Application Routes

| Path | Page Title | Meta Description | Primary Layout / Sections | Key Interactive Elements |
| :--- | :--- | :--- | :--- | :--- |
| **`/`** | `camelAI: Discord bots, AI agent hosting & coding assistant` | `Make your own Discord bot with camelBot. camelAI also makes open-source AI agent hosting and an open-source AI coding assistant.` | - Sticky `Navbar`<br>- `#hero` (Dynamic height viewport banner)<br>- `#bot` (camelBot feature spotlight)<br>- `#run` (camelRun hosting spotlight)<br>- `#code` (camelCode coding assistant spotlight)<br>- `#platform` (Architecture deep dive)<br>- `#faq` (8-item accordion)<br>- `#company` (Team & YC W24)<br>- `Footer` | - Interactive bot prompt picker<br>- Navigation dropdowns (BOT, RUN, CODE)<br>- FAQ Accordions<br>- App showcase carousel<br>- Mobile drawer |
| **`/bot`** | `camelBot: Build, Test & Host Discord Bots \| camelAI` | `camelBot writes your Discord bot, lets you test it in a private channel, and hosts it after you publish. Track every use, fix failures, and roll back versions.` | - Hero with instant bot generator<br>- Visual step-by-step workflow (Describe → Test → Publish)<br>- Feature grid (Zero config, automated hosting, analytics)<br>- Discord bot templates list | - Bot prompt input field with one-click presets<br>- Channel simulation preview<br>- External link to `bots.camelai.com/new` |
| **`/code`** | `camelCode: the open-source coding agent with a permanent computer \| camelAI` | `camelCode is camelAI's MIT-licensed coding agent. Describe what you want; it builds and deploys real apps from a workspace that never forgets. Free to start.` | - Hero with terminal / browser split view<br>- Permanent computer explanation (persistent sandbox)<br>- Model choice selector showcase<br>- Comparison vs traditional AI code tools<br>- Community / GitHub metrics | - Code / UI live preview simulator<br>- Terminal output display<br>- CTAs to `camelai.dev/signup` and GitHub repo |
| **`/run`** | `AI Agent Platform and Agent Runtime \| camelRun by camelAI` | `Deploy AI agents without managing infrastructure. camelRun runs the agent loop, history, sandboxed code, and scaling. Use any model. $0.01 per agent-hour.` | - Serverless agent architecture overview<br>- Wake-up trigger diagram (Webhooks, crons, queues)<br>- Pricing spotlight ($0.01/hr)<br>- Code examples (Python / TypeScript SDK)<br>- Infrastructure comparison | - Interactive code snippet switcher<br>- Pricing calculator / agent-hour estimator<br>- CTAs to `run.camelai.com/console/` |
| **`/pricing`** | `Pricing \| camelAI` | `camelRun costs $0.01 per agent-hour. camelCode has a free plan, and paid plans start at $10 a month. camelBot is free while in beta.` | - Hero pricing overview<br>- 3-column product pricing matrix (`camelBot`, `camelRun`, `camelCode`)<br>- Granular cost breakdowns (Compute, storage, tokens, top-ups)<br>- Frequently asked billing questions | - Product tab switcher (`#bot`, `#run`, `#code`)<br>- Collapsible fee breakdowns<br>- Prepaid credit explanations |
| **`/about-us`** | `About camelAI` | `camelAI is a small Y Combinator W24 team building cool AI stuff: camelRun, a hosted runtime for AI agents, and camelCode, an open-source coding agent.` | - Founder stories & vision<br>- Team grid (`miguel`, `isabella`, `illiana`)<br>- Company values & open-source commitment<br>- Y Combinator W24 badge & milestones | - Social profile links<br>- Career inquiries callout |
| **`/discord`** | `AI Discord Bot Maker & Builder \| Free, No Code \| camelAI` | `Build a custom Discord bot with AI in minutes. Test in private, deploy to your server, and automate tasks without writing code.` | - Dedicated Discord bot landing page<br>- Preset bot categories (Moderation, Games, Utilities, Tickets)<br>- Discord OAuth login flow integration | - One-click prompt launchers<br>- Deep links to Discord OAuth |
| **`/contact`** | `Contact sales \| camelAI` | `Talk to the camelAI team about camelRun and camelCode. Tell us a bit about yourself and we'll reach out to schedule a conversation.` | - Sales inquiry form<br>- Enterprise deployment details<br>- Contact email and Discord community links | - Multi-field contact form (Name, Work Email, Company, Message)<br>- Form submission state handling |
| **`/blog`** | `camelAI Blog` | `Product updates, engineering deep dives, and tips from the camelAI team.` | - Featured article hero banner<br>- Filterable article grid by tag/category<br>- Author badges<br>- RSS / Atom feed links | - Search / topic filter pills<br>- Article pagination / infinite scroll |
| **`/open-source`** | `Open Source AI Coding Agent \| camelAI` | `camelAI is an MIT-licensed open source AI coding agent with persistent workspaces, self-hosting, model choice, and app deployment.` | - Open-source philosophy<br>- Self-hosting instructions (Docker, Docker Compose)<br>- GitHub repo link (`qaml-ai/camelAI`)<br>- License terms (MIT) | - Copy-to-clipboard docker run commands<br>- Star counter badge from GitHub |
| **`/legal`** | `Terms and Policies — camelAI` | `Find the terms of service and privacy policy for each camelAI product: camelRun, camelBot, and camelCode.` | - Terms navigation hub<br>- Product-specific terms links (`/bot/terms`, `/run/terms`) | - Legal document anchors |
| **`/privacy-policy`**| `Privacy Policy — camelAI` | `Learn how camelAI collects, uses, and protects your personal information...` | - Full legal text<br>- Table of contents<br>- Revision date and contact info | - Anchor jump links |

---

### 2.2 Product Sub-routes & SEO Use-Cases

The codebase includes an extensive collection of specialized landing pages targeting specific workflows:

#### camelBot Directory & Presets
- `/discord/bots`: Comprehensive catalog of bots you can make.
- `/discord/dnd-dice-bot`: Specialized D&D dice rolling Discord bot.
- `/discord/ticket-bot`: Server support ticket automation bot.
- `/discord/trivia-bot`: Interactive community trivia bot.

#### camelRun Integrations & Comparisons
- `/run/mcp`: Model Context Protocol (MCP) server support and agent tool integration.
- `/run/self-hosted`: Private deployment guide and hybrid cloud execution.
- `/run/slack`: Hosting Slack bots and agents on camelRun.
- `/run/vs`: Detailed comparison matrix against AWS Bedrock AgentCore, Claude Managed Agents, and OpenAI Agents API.

#### High-Intent SEO & Use-Case Landing Pages
- `/ai-app-builder`: Landing page targeting AI application generators.
- `/vibe-coding`: Dedicated page for non-technical creators ("vibe coding").
- `/use-cases/ai-agents`: Enterprise agent deployment patterns.
- `/use-cases/automation`: Scheduled crons and automated event listeners.
- `/use-cases/data-analytics`: Natural language SQL analytics and database queries.
- `/use-cases/email`: Autonomous email inbox sorting and automated drafts.
- `/use-cases/internal-tools`: Custom admin panels and backoffice tooling.
- `/use-cases/slack`: Enterprise team automation in Slack channels.
- `/use-cases/web-development`: End-to-end fullstack development agents.

---

## 3. Subdomain Ecosystem & Authentication Boundaries

The camelAI platform delegates authenticated interactive applications to dedicated subdomains:

```mermaid
graph TD
    Main["camelai.com (Public Marketing & Docs)"]
    
    subgraph Products
        BotApp["bots.camelai.com (camelBot Builder)"]
        RunApp["run.camelai.com/console/ (camelRun Runtime Console)"]
        CodeApp["camelai.dev (camelCode IDE & Workspace)"]
        StreamApp["stream.camelai.com (camelStream Frontier API)"]
    end
    
    Main -->|"/discord" or "Build a bot"| BotApp
    Main -->|"/run" or "Console"| RunApp
    Main -->|"/code" or "Start coding"| CodeApp
    Main -->|"Frontier API"| StreamApp
    
    BotApp -->|Discord OAuth2| DiscordOAuth["Discord Auth API"]
    RunApp -->|GitHub OAuth2| GitHubOAuth["GitHub Auth API"]
    CodeApp -->|Email / OAuth| Auth0["Auth Service"]
```

### Deep-Link Attribution Parameters
All outbound product links include query parameters to track marketing source attribution:
- `ref=home`: Clicks originating from the primary landing page.
- `ref=pricing`: Clicks originating from the pricing matrix.
- `ref=nav`: Clicks originating from the top navigation dropdowns.
- `ref=footer`: Clicks originating from footer link columns.
- `attribution_id=<uuid>`: Preserved across cross-domain transitions to maintain user acquisition funnel analytics.
- `prompt=<url_encoded_string>`: Passes the bot description from the marketing hero directly into the builder:
  `https://bots.camelai.com/new?prompt=Build%20an%20alert%20bot...&ref=home`
