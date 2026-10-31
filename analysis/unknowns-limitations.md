# Unknowns, Boundaries & Technical Limitations

## 1. Architectural Boundaries & Closed Systems

In strict adherence to reverse-engineering ethics and project constraints, our inspection was restricted exclusively to publicly observable HTTP(S) responses, client bundles, public DOM hierarchies, and network transactions. The following private backend systems remain outside the observable boundary:

### 1.1 camelRun Agent Sandbox & Execution Runtime
- **Observed Behavior**: The public marketing describes a serverless runtime where agents "wake up when there is work", costing $0.01 per agent-hour, with idle states costing only storage.
- **Underlying Infrastructure**: Architectural blog posts reveal that camelRun utilizes **Cloudflare Workers** and **Cloudflare Durable Objects** combined with custom container microVM sandboxes for code execution.
- **Unknowns**: The internal cluster management code, autoscaling triggers, task queuing mechanism, and multi-tenant memory isolation layers are hosted in private backends.

### 1.2 camelBot Code Generator & Discord Gateway Engine
- **Observed Behavior**: Users input natural-language descriptions; camelBot generates bot logic, provides a private Discord test channel, and automates server deployment.
- **Unknowns**: The prompt engineering pipeline, Discord gateway sharding architecture, real-time log streaming service, and version rollback storage engine reside entirely on private server clusters.

### 1.3 camelCode Persistent VM Infrastructure
- **Observed Behavior**: Provides a "permanent computer" that maintains filesystem state, installed packages, and active web processes across coding sessions.
- **Unknowns**: Snapshotting schedules, block storage virtualization, terminal WebSocket multiplexers, and dynamic port-forwarding proxies are proprietary server infrastructure.

---

## 2. Telemetry, Analytics & Event Ingestion Payloads

### 2.1 `/api/journey/events` Telemetry Endpoint
- **Observed**: The client fires `POST` requests to `/api/journey/events` when buttons and links with `data-journey-cta` and `data-journey-location` attributes are clicked.
- **Unknowns**: The exact database schema, ingestion pipeline, conversion funnel scoring model, and downstream CRM integrations. Rebuilding this endpoint requires only a minimal dummy receiver returning `HTTP 200 { "status": "ok" }`.

### 2.2 Cloudflare Zaraz & First-Party Proxying
- **Observed**: GTM and third-party scripts are proxied through Cloudflare Zaraz (`/cdn-cgi/zaraz/s.js`) and custom endpoints (`/gtm1231osdifuwer/`).
- **Limitation**: Zaraz redacts upstream headers and intercepts browser analytics calls before dispatching them to external providers. Rebuilding does not require Zaraz; direct GTM or modern privacy-first analytics (Plausible / PostHog) can be used.

---

## 3. Subdomain Applications & Authenticated Consoles

The following web properties operate behind authentication barriers and were intentionally not probed beyond public OAuth entry points:
- **`bots.camelai.com`**: Discord bot creation console (requires Discord OAuth2 authorization).
- **`run.camelai.com/console/`**: camelRun developer dashboard (requires GitHub OAuth2 authorization).
- **`camelai.dev`**: camelCode interactive coding workspace.
- **`stream.camelai.com`**: camelStream login portal.

For an independent frontend reconstruction, all outbound links to these consoles should simply point to configured mock URLs or modular placeholder dashboards.

---

## 4. Inspection Method Limitations

1. **Passive Browser CDP**: The Chrome DevTools Protocol passive inspection captures loaded DOM states, script assets, and static chunk graphs. Dynamic runtime routes that require specific URL hash fragments or authenticated cookies were verified via chunk analysis.
2. **Bundle Minification**: Client-side code bundles have undergone production minification and tree-shaking via Vite. Variable names are shortened, though React component structures, hook boundaries, CVA configuration tables, and route definitions remain fully recoverable.
