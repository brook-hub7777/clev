import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OrbitCanvas } from "@/components/canvas/OrbitCanvas";
import { ArrowRight, ChevronDown, Check, ShieldCheck, Activity, Database, FileText, Radio } from "lucide-react";

export function HomePage() {
  // Case chips for clevRank Section
  const rankCases = [
    {
      id: "shandong",
      label: "Eastern China 2018 case (validating)",
      prompt: "Analyze 2018 regional atmospheric CFC-11 plume over Shandong and Hebei. Cross-reference industrial park registries, rigid foam blowing manifests, and trichlorofluoromethane trade flows.",
      signal: "Trichlorofluoromethane (CFC-11) regional elevation: +34.2 ppt above baseline.",
      facilities: [
        { id: "SYN-014", type: "foam producer", score: "0.82", note: "Trade volume doesn't match reported foaming compound use", status: "HIGH" },
        { id: "SYN-203", type: "refrigerant plant", score: "0.74", note: "Thermal signature anomaly detected in Q2 batch cycle", status: "HIGH" },
        { id: "SYN-088", type: "chemical facility", score: "0.69", note: "Historical compliance infraction on precursor storage", status: "MEDIUM" },
        { id: "SYN-119", type: "solvent processor", score: "0.58", note: "Shipment manifest gap with regional customs log", status: "MEDIUM" }
      ]
    },
    {
      id: "foam",
      label: "Foam producers",
      prompt: "Target polyol blowing facilities within 80km radius of monitoring station. Evaluate reported foaming compound substitutions against electricity usage curves.",
      signal: "Halogenated foaming precursor derivative trace: +18.4 ppt.",
      facilities: [
        { id: "SYN-014", type: "rigid polyurethane plant", score: "0.86", note: "Feedstock intake incongruent with water-blown polyol reports", status: "HIGH" },
        { id: "SYN-042", type: "insulation board maker", score: "0.71", note: "Unregistered storage tanks flagged by satellite imagery", status: "HIGH" },
        { id: "SYN-077", type: "appliance foam line", score: "0.54", note: "Consistent baseline with occasional vent purging", status: "LOW" }
      ]
    },
    {
      id: "refrigerant",
      label: "Refrigerant plants",
      prompt: "Screen fluorochemical synthesis plants for uncaptured byproduct vent streams. Compare feedstock consumption ratios with production records.",
      signal: "CTC precursor spike correlated with downwind wind vectors: +22.1 ppt.",
      facilities: [
        { id: "SYN-203", type: "HCFC synthesis facility", score: "0.79", note: "Byproduct vent ratio diverges from mass-balance baseline", status: "HIGH" },
        { id: "SYN-312", type: "chiller servicing depot", score: "0.63", note: "Recovery cylinder inventory discrepancy in Q3", status: "MEDIUM" },
        { id: "SYN-105", type: "gas packaging plant", score: "0.49", note: "Expected trace loss during cylinder decanting", status: "LOW" }
      ]
    },
    {
      id: "trade",
      label: "Trade anomalies",
      prompt: "Flag customs records showing discrepancies between imported raw chemicals and registered export quantities of finished closed-cell foam.",
      signal: "Regional port manifest mismatch: 420 metric tons unaccounted.",
      facilities: [
        { id: "SYN-014", type: "export foam fabricator", score: "0.84", note: "Reported foaming precursor costs 40% below market average", status: "HIGH" },
        { id: "SYN-510", type: "chemical trading broker", score: "0.76", note: "Intermediary billing through unlicensed regional distributor", status: "HIGH" },
        { id: "SYN-209", type: "polyurethane compounder", score: "0.61", note: "Precursor delivery log omitted from annual filing", status: "MEDIUM" }
      ]
    }
  ];

  const [activeCase, setActiveCase] = useState(rankCases[0]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: "What is Clev?",
      a: "Clev builds software and sensors to locate and confirm emissions of illegal ozone-depleting substances. clevRank scores and prioritizes suspect facilities across an entire region. clevSense provides low-cost chimney sensors to confirm the source directly on site. clevProof generates audit-ready reports regulators can trust."
    },
    {
      q: "How does clevRank prioritize facilities?",
      a: "clevRank combines atmospheric monitoring data with satellite imagery, trade filings, and industrial registries. It scores facilities based on production capacity, chemical precursor requirements, and historical records, then presents the supporting evidence behind each score."
    },
    {
      q: "Does Clev prove legal violations?",
      a: "No. Clev prioritizes sites and measures emissions. It does not determine legal liability. clevRank highlights where inspectors should look first, and clevSense measures stack concentrations so authorized inspectors can confirm or rule out suspected sources."
    },
    {
      q: "What chemicals does clevSense monitor?",
      a: "clevSense targets controlled halogenated compounds and ozone-depleting substances, including CFC-11, carbon tetrachloride (CTC), and related industrial gas tracers."
    },
    {
      q: "Who is Clev built for?",
      a: "Environmental enforcement agencies, multilateral treaty verification teams, investigative NGOs, and industrial facilities that need continuous, affordable chimney monitoring."
    },
    {
      q: "How can our inspection team run a pilot?",
      a: "Agencies and facilities can join our pilot program. We provide direct access to the clevRank targeting platform and deploy sensor units for on-site validation."
    }
  ];

  return (
    <main>
      {/* =========================================================================
          SECTION 1: HERO
         ========================================================================= */}
      <section
        id="hero"
        className="relative isolate flex flex-col overflow-hidden sm:min-h-[calc(100svh-3.75rem)]"
      >
        {/* Celestial Orbit Canvas Background - strictly positioned in upper dome */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_4vw)] pointer-events-none">
          <div className="absolute inset-x-0 top-0 h-[480px] sm:h-[540px] [mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)]">
            <div className="isolate size-full overflow-hidden bg-background absolute inset-0">
              <OrbitCanvas globeRadius={42} globeCenterY={105} />
            </div>
          </div>
        </div>

        {/* Dynamic Gap spacer - places headline cleanly just below the celestial orbit */}
        <div className="min-h-[128px] sm:min-h-[154px]"></div>

        {/* Center Title and Description - positioned directly below the globe orbit without overlap */}
        <div className="mx-auto w-full px-6 sm:px-8 max-w-[88rem]">
          <div className="@container flex flex-col items-center text-center">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[62px] tracking-wider text-foreground select-none"
              style={{
                fontFamily: "ClevPixel, Silkscreen, monospace",
                fontWeight: 400,
                letterSpacing: "0.04em",
                lineHeight: 1.12,
              }}
            >
              <span className="block whitespace-nowrap">FIND THE SOURCE,</span>
              <span className="block whitespace-nowrap mt-1 sm:mt-2">
                NOT JUST THE SIGNAL.
              </span>
            </h1>

            <p className="mt-5 max-w-[54rem] text-balance text-base sm:text-lg md:text-[19px] font-medium leading-relaxed text-foreground">
              Clev focuses on ozone-depleting substances like CFC-11, CFC-12, and carbon tetrachloride, flagging illegal emissions that satellites can see but regulators currently can’t trace to a source.
            </p>
          </div>
        </div>

        {/* 3 Horizontal Product Navigation Strips */}
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 pb-12 sm:pb-16 mt-8 sm:mt-10">
          <nav aria-label="Products" className="w-full border-t border-foreground/25">
            {/* CLEVRANK Row */}
            <a
              href="#rank"
              className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-foreground/25 py-3.5 sm:py-4 md:grid-cols-[14rem_1fr_auto_auto] lg:grid-cols-[16rem_1fr_auto_auto]"
            >
              <span
                className="text-[22px] sm:text-[26px] lg:text-[30px] text-foreground underline-offset-[6px] group-hover:underline uppercase"
                style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.05 }}
              >
                CLEVRANK
              </span>
              <ArrowRight className="size-5 justify-self-end text-foreground transition-transform group-hover:translate-x-1 md:order-last shrink-0" />
              <span className="col-span-2 text-balance text-left text-base text-foreground/85 md:col-span-1 md:text-foreground lg:text-lg">
                AI that ranks the factories most likely behind an emissions spike
              </span>
              <span
                className="uppercase col-span-2 text-left text-[11px] sm:text-[12px] tracking-[0.14em] text-foreground/60 sm:mt-1 md:col-span-1 md:mt-0 md:text-right font-silkscreen"
                style={{ fontFamily: "Silkscreen, monospace" }}
              >
                COMING SOON
              </span>
            </a>

            {/* CLEVSENSE Row */}
            <a
              href="#sense"
              className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-foreground/25 py-3.5 sm:py-4 md:grid-cols-[14rem_1fr_auto_auto] lg:grid-cols-[16rem_1fr_auto_auto]"
            >
              <span
                className="text-[22px] sm:text-[26px] lg:text-[30px] text-foreground underline-offset-[6px] group-hover:underline uppercase"
                style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.05 }}
              >
                CLEVSENSE
              </span>
              <ArrowRight className="size-5 justify-self-end text-foreground transition-transform group-hover:translate-x-1 md:order-last shrink-0" />
              <span className="col-span-2 text-balance text-left text-base text-foreground/85 md:col-span-1 md:text-foreground lg:text-lg">
                Low-cost chimney sensor that logs emissions around the clock
              </span>
              <span
                className="uppercase col-span-2 text-left text-[11px] sm:text-[12px] tracking-[0.14em] text-foreground/60 sm:mt-1 md:col-span-1 md:mt-0 md:text-right font-silkscreen"
                style={{ fontFamily: "Silkscreen, monospace" }}
              >
                COMING SOON
              </span>
            </a>

            {/* CLEVPROOF Row */}
            <a
              href="#proof"
              className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-foreground/25 py-3.5 sm:py-4 md:grid-cols-[14rem_1fr_auto_auto] lg:grid-cols-[16rem_1fr_auto_auto]"
            >
              <span
                className="text-[22px] sm:text-[26px] lg:text-[30px] text-foreground underline-offset-[6px] group-hover:underline uppercase"
                style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.05 }}
              >
                CLEVPROOF
              </span>
              <ArrowRight className="size-5 justify-self-end text-foreground transition-transform group-hover:translate-x-1 md:order-last shrink-0" />
              <span className="col-span-2 text-balance text-left text-base text-foreground/85 md:col-span-1 md:text-foreground lg:text-lg">
                Tamper-evident emissions reports regulators can trust
              </span>
              <span
                className="uppercase col-span-2 text-left text-[11px] sm:text-[12px] tracking-[0.14em] text-foreground/60 sm:mt-1 md:col-span-1 md:mt-0 md:text-right font-silkscreen"
                style={{ fontFamily: "Silkscreen, monospace" }}
              >
                COMING SOON
              </span>
            </a>
          </nav>
        </div>
      </section>

      {/* =========================================================================
          SECTION 1: CLEVRANK
         ========================================================================= */}
      <section id="rank" className="relative isolate scroll-mt-16 overflow-x-clip py-16 md:py-24 border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
              CLEVRANK · FACILITY TARGETING
            </p>
            <h2
              className="mt-4 max-w-5xl break-words text-balance text-[clamp(1.7rem,3.3vw,2.5rem)] text-foreground uppercase"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
            >
              FROM A WHOLE PROVINCE TO A SHORT LIST
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
              An atmospheric spike tells you something is leaking somewhere in a region, not which building. clevRank scores nearby facilities using satellite imagery, trade records, and industrial registries, and shows the evidence behind every score. Inspectors start with the likeliest sites.
            </p>
          </div>

          {/* Interactive Case Selector & Ranked List Mock */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Case Console */}
            <div className="lg:col-span-5 space-y-4">
              <label className="text-[10px] uppercase font-silkscreen tracking-widest text-muted-foreground block">
                OR START FROM A CASE
              </label>
              <div className="flex flex-col gap-2">
                {rankCases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCase(c)}
                    className={`px-3 py-2.5 text-xs text-left font-mono transition-all border rounded-none cursor-pointer flex items-center justify-between ${
                      activeCase.id === c.id
                        ? "bg-foreground text-background border-foreground font-semibold"
                        : "bg-background text-muted-foreground border-border hover:border-foreground/50 hover:text-foreground"
                    }`}
                  >
                    <span>{c.label}</span>
                    <span className="text-[10px] font-silkscreen opacity-75">SELECT</span>
                  </button>
                ))}
              </div>

              <div className="border border-foreground/25 bg-card p-4 space-y-2">
                <span className="text-[10px] uppercase font-silkscreen tracking-widest text-muted-foreground block">
                  REGIONAL SIGNAL PARAMETERS
                </span>
                <p className="text-xs font-mono text-foreground leading-relaxed">
                  {activeCase.signal}
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/50">
                  {activeCase.prompt}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center uppercase select-none rounded-none transition font-silkscreen text-[11px] tracking-[0.22em] px-6 py-3 bg-foreground text-background hover:opacity-85"
                  style={{ fontFamily: '"Silkscreen", monospace' }}
                >
                  RUN A RANKING
                </a>
                <Link
                  to="/bot"
                  className="inline-flex items-center justify-center uppercase select-none rounded-none transition font-silkscreen text-[11px] tracking-[0.22em] px-5 py-3 border border-border text-foreground bg-background hover:border-foreground/50"
                  style={{ fontFamily: '"Silkscreen", monospace' }}
                >
                  MORE ON CLEVRANK
                </Link>
              </div>
            </div>

            {/* Right Ranked Facility List Mock */}
            <div className="lg:col-span-7 border border-border bg-[#141417] text-foreground overflow-hidden shadow-2xl">
              {/* Header Bar */}
              <div className="bg-[#1c1c20] px-4 py-3 border-b border-border flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-foreground font-silkscreen text-[11px]">#SHANDONG-DEMO</span>
                  <span className="bg-foreground/10 text-foreground text-[9px] px-1.5 py-0.5 border border-foreground/20 uppercase font-silkscreen">
                    SYNTHETIC DATA
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground uppercase font-silkscreen">
                    RANKING · LIVE · V3
                  </span>
                  <span className="size-2 rounded-full bg-foreground animate-pulse" />
                </div>
              </div>

              {/* Status Update Banner */}
              <div className="bg-[#18181c] px-4 py-2 border-b border-border/60 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span className="text-foreground">Ranking updated: 3 new signals</span>
                <span className="text-[10px] text-muted-foreground">Regional atmospheric correlation active</span>
              </div>

              {/* Ranked Facility Rows */}
              <div className="p-4 space-y-3 font-mono text-xs">
                {activeCase.facilities.map((fac, idx) => (
                  <div
                    key={idx}
                    className="p-3 border border-border bg-[#101012] hover:border-foreground/40 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-foreground font-silkscreen text-[11px]">{fac.id}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-foreground/90">{fac.type}</span>
                        <span className="text-muted-foreground">•</span>
                        <span className="text-foreground font-bold">score {fac.score}</span>
                      </div>
                      <p className="text-[11px] text-muted-foreground leading-normal font-sans">
                        Evidence: {fac.note}
                      </p>
                    </div>
                    <div className="shrink-0 self-start sm:self-center">
                      <span className={`text-[9px] font-silkscreen px-2 py-0.5 uppercase ${
                        fac.status === "HIGH" 
                          ? "bg-foreground text-background border border-foreground font-bold"
                          : "bg-muted text-foreground border border-border"
                      }`}>
                        {fac.status} PRIORITY
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer Note */}
              <div className="px-4 py-2.5 bg-[#18181c] border-t border-border/60 text-[10px] font-mono text-muted-foreground flex items-center justify-between">
                <span>Synthetic dataset for demonstration</span>
                <span>Prioritizes inspection targets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: CLEVSENSE
         ========================================================================= */}
      <section id="sense" className="scroll-mt-16 py-16 md:py-24 border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
              CLEVSENSE · CHIMNEY SENSOR
            </p>
            <h2
              className="mt-4 max-w-5xl break-words text-balance text-[clamp(1.7rem,3.3vw,2.5rem)] text-foreground uppercase"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
            >
              KNOW WHAT LEAVES THE CHIMNEY
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Inspectors carry a low-cost sensor to flagged sites and get a measured answer instead of a guess. clevSense logs readings around the clock and syncs them to your Clev dashboard. Built for agencies and factories that can't afford a five-figure analyzer.
            </p>
          </div>

          {/* Sensor Nodes Simulation Mock */}
          <div className="mt-10 border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-silkscreen">
                  CONTINUOUS MONITORING NETWORK
                </span>
                <p className="text-sm font-semibold text-foreground">Active stack nodes (Synthetic deployment)</p>
              </div>

              {/* Legend: LOGGING / OFFLINE */}
              <div className="flex items-center gap-6 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-foreground animate-pulse" />
                  <span className="text-foreground font-silkscreen text-[10px]">LOGGING (3)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full border border-foreground/40 bg-transparent" />
                  <span className="text-muted-foreground font-silkscreen text-[10px]">OFFLINE (0)</span>
                </div>
              </div>
            </div>

            {/* 3 Sensor Stack Nodes */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border bg-background p-5 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-foreground font-silkscreen">stack-01</span>
                  <span className="text-foreground font-silkscreen text-[10px]">LOGGING</span>
                </div>
                <div className="text-2xl font-bold font-mono text-foreground">0.02 <span className="text-xs text-muted-foreground font-sans">ppm</span></div>
                <p className="text-xs text-muted-foreground">Primary flue duct · Nominal baseline reading</p>
                <div className="pt-2 border-t border-border/40 text-[10px] font-mono text-muted-foreground flex justify-between">
                  <span>Sampling: 10s</span>
                  <span>Sync: Live</span>
                </div>
              </div>

              <div className="border border-border bg-background p-5 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-foreground font-silkscreen">stack-02</span>
                  <span className="text-foreground font-silkscreen text-[10px]">LOGGING</span>
                </div>
                <div className="text-2xl font-bold font-mono text-foreground">0.00 <span className="text-xs text-muted-foreground font-sans">ppm</span></div>
                <p className="text-xs text-muted-foreground">Secondary scrubber exhaust · Below detection limit</p>
                <div className="pt-2 border-t border-border/40 text-[10px] font-mono text-muted-foreground flex justify-between">
                  <span>Sampling: 10s</span>
                  <span>Sync: Live</span>
                </div>
              </div>

              <div className="border border-border bg-background p-5 space-y-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="font-bold text-foreground font-silkscreen">stack-03</span>
                  <span className="text-foreground font-silkscreen text-[10px]">LOGGING</span>
                </div>
                <div className="text-2xl font-bold font-mono text-foreground">0.41 <span className="text-xs text-muted-foreground font-sans">ppm spike</span></div>
                <p className="text-xs text-muted-foreground">Solvent recovery vent · Intermittent purge detected</p>
                <div className="pt-2 border-t border-border/40 text-[10px] font-mono text-muted-foreground flex justify-between">
                  <span>Sampling: 10s</span>
                  <span>Sync: Live</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center uppercase select-none rounded-none transition font-silkscreen text-[11px] tracking-[0.22em] px-6 py-3 bg-foreground text-background hover:opacity-85"
              style={{ fontFamily: '"Silkscreen", monospace' }}
            >
              JOIN A PILOT
            </a>
            <Link
              to="/run"
              className="inline-flex items-center justify-center uppercase select-none rounded-none transition font-silkscreen text-[11px] tracking-[0.22em] px-6 py-3 border border-border text-foreground bg-background hover:border-foreground/50"
              style={{ fontFamily: '"Silkscreen", monospace' }}
            >
              MORE ON CLEVSENSE
            </Link>
            <Link
              to="/hardware-notes"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground underline ml-2"
            >
              HARDWARE NOTES →
            </Link>
            <Link
              to="/run#comparison"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground underline ml-4"
            >
              Compare with traditional stack analyzers →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: CLEVPROOF
         ========================================================================= */}
      <section id="proof" className="scroll-mt-16 py-16 md:py-24 border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
              CLEVPROOF · EMISSIONS REPORTS
            </p>
            <h2
              className="mt-4 max-w-5xl break-words text-balance text-[clamp(1.7rem,3.3vw,2.5rem)] text-foreground uppercase"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
            >
              REPORTS REGULATORS CAN CHECK
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
              clevProof turns sensor readings into timestamped, tamper-evident reports, cross-checked against trade and registry data. Self-reported numbers are easy to fudge. Continuous measurements are harder to argue with. Coming soon: join the waitlist.
            </p>
          </div>

          {/* Report Verification Dashboard Mock */}
          <div className="mt-10 border border-border bg-card p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-border gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-silkscreen">
                  STACK-REPORT
                </span>
                <h3 className="text-xl font-bold font-mono text-foreground mt-1">MONTH 07</h3>
              </div>

              {/* Legend: VERIFIED / FLAGGED */}
              <div className="flex items-center gap-6 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-foreground" />
                  <span className="text-foreground font-silkscreen text-[10px]">VERIFIED (4)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full border border-foreground/40 bg-transparent" />
                  <span className="text-muted-foreground font-silkscreen text-[10px]">FLAGGED (1)</span>
                </div>
              </div>
            </div>

            {/* Audit Files List */}
            <div className="mt-6 divide-y divide-border border border-border bg-background font-mono text-xs">
              <div className="p-3.5 flex items-center justify-between hover:bg-muted/40 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="size-4 text-foreground" />
                  <span className="font-semibold text-foreground">readings.log</span>
                  <span className="text-muted-foreground text-[11px]">86,400 sensor data points (continuous stack stream)</span>
                </div>
                <span className="text-[10px] font-silkscreen text-foreground bg-foreground/10 px-2 py-0.5 border border-foreground/20">
                  VERIFIED
                </span>
              </div>

              <div className="p-3.5 flex items-center justify-between hover:bg-muted/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Database className="size-4 text-foreground" />
                  <span className="font-semibold text-foreground">trade.csv</span>
                  <span className="text-muted-foreground text-[11px]">Regional chemical precursor purchase and export records</span>
                </div>
                <span className="text-[10px] font-silkscreen text-foreground bg-foreground/10 px-2 py-0.5 border border-foreground/20">
                  VERIFIED
                </span>
              </div>

              <div className="p-3.5 flex items-center justify-between hover:bg-muted/40 transition-colors">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="size-4 text-foreground" />
                  <span className="font-semibold text-foreground">registry.json</span>
                  <span className="text-muted-foreground text-[11px]">Permitted equipment capacity and foaming chemical declarations</span>
                </div>
                <span className="text-[10px] font-silkscreen text-foreground bg-foreground/10 px-2 py-0.5 border border-foreground/20">
                  VERIFIED
                </span>
              </div>

              <div className="p-3.5 flex items-center justify-between hover:bg-muted/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Activity className="size-4 text-foreground" />
                  <span className="font-semibold text-foreground">flags.db</span>
                  <span className="text-muted-foreground text-[11px]">Discrepancy: reported zero emissions vs observed nocturnal spike</span>
                </div>
                <span className="text-[10px] font-silkscreen text-background bg-foreground px-2 py-0.5 border border-foreground font-bold">
                  FLAGGED
                </span>
              </div>

              <div className="p-3.5 flex items-center justify-between hover:bg-muted/40 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="size-4 text-foreground" />
                  <span className="font-semibold text-foreground">report.pdf</span>
                  <span className="text-muted-foreground text-[11px]">Cryptographically signed inspection compliance digest</span>
                </div>
                <span className="text-[10px] font-silkscreen text-foreground bg-foreground/10 px-2 py-0.5 border border-foreground/20">
                  VERIFIED
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center uppercase select-none rounded-none transition font-silkscreen text-[11px] tracking-[0.22em] px-6 py-3 bg-foreground text-background hover:opacity-85"
              style={{ fontFamily: '"Silkscreen", monospace' }}
            >
              JOIN THE WAITLIST
            </a>
            <Link
              to="/code"
              className="inline-flex items-center justify-center uppercase select-none rounded-none transition font-silkscreen text-[11px] tracking-[0.22em] px-6 py-3 border border-border text-foreground bg-background hover:border-foreground/50"
              style={{ fontFamily: '"Silkscreen", monospace' }}
            >
              MORE ON CLEVPROOF
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: FAQ
         ========================================================================= */}
      <section id="faq" className="scroll-mt-16 py-16 md:py-24 border-t border-border/60">
        <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
              FAQ
            </p>
            <h2
              className="mt-4 max-w-5xl break-words text-balance text-[clamp(1.7rem,3.3vw,2.5rem)] text-foreground uppercase"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
            >
              Questions about Clev
            </h2>
          </div>

          <div className="mt-10 divide-y divide-border border-y border-border">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="py-4">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between text-left py-2 font-medium text-foreground hover:text-foreground/80 transition-colors cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-medium text-foreground">{faq.q}</span>
                    <ChevronDown className={`size-4 text-muted-foreground transition-transform duration-200 shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pt-2 pb-3 text-sm text-muted-foreground leading-relaxed animate-in fade-in-0 duration-200">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: COMPANY (Mission & Team)
         ========================================================================= */}
      <section id="company" className="scroll-mt-16 py-16 md:py-24 border-t border-border/60">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
              Team & Mission
            </p>
            <h2
              className="mt-4 max-w-5xl break-words text-balance text-[clamp(1.7rem,3.3vw,2.5rem)] text-foreground uppercase"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
            >
              BUILT FOR ENVIRONMENTAL INSPECTIONS
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground leading-relaxed">
              Clev was founded to close the enforcement gap between global atmospheric monitoring and ground-level facility verification.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl">
            <div className="border border-border bg-card p-6 space-y-4">
              <div className="aspect-square w-24 overflow-hidden border border-border bg-muted">
                <img src="/team/biruk.png" alt="Biruk Yirsaw" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Biruk Yirsaw</h3>
                <p className="text-xs font-mono text-muted-foreground">CEO and Co-founder</p>
              </div>
            </div>

            <div className="border border-border bg-card p-6 space-y-4">
              <div className="aspect-square w-24 overflow-hidden border border-border bg-muted">
                <img src="/team/gebremedhin.jpg" alt="Gebremedhin Endashaw" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all" />
              </div>
              <div>
                <h3 className="text-base font-bold text-foreground">Gebremedhin Endashaw</h3>
                <p className="text-xs font-mono text-muted-foreground">CTO and Co-founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default HomePage;
