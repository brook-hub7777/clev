import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PixelButton } from "@/components/ui/PixelButton";
import { Check, ShieldCheck, Zap, Activity, Radio, FileText } from "lucide-react";

export function PricingPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Eyebrow>TRANSPARENT PRICING &amp; PILOTS</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            AFFORDABLE HARDWARE AND TARGETING
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            clevRank, clevSense, and clevProof are coming soon. Join the waitlist for updates and early access.
          </p>
        </div>

        {/* 3-Column Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 1: clevRank */}
          <div id="rank" className="border border-border bg-card p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-silkscreen tracking-widest text-muted-foreground">
                  Facility Targeting
                </span>
                <h3
                  className="text-2xl sm:text-3xl tracking-wide text-foreground uppercase"
                  style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
                >
                  clevRank
                </h3>
                <div className="pt-2">
                  <span className="text-3xl font-bold font-silkscreen text-foreground">Soon</span>
                  <span className="text-xs font-mono text-muted-foreground ml-2">waitlist open</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Prioritizes regional industrial facilities based on atmospheric spikes, satellite imagery, and trade discrepancies.
              </p>

              <div className="space-y-3 pt-4 border-t border-border/60">
                <h4 className="text-xs uppercase font-silkscreen tracking-wider text-foreground">Included:</h4>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span>Regional plume attribution modeling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span>Satellite and registry cross-checks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span>Detailed evidence scoring breakdown</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span>Interactive case studies &amp; synthetic data</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <PixelButton
                variant="primary"
                size="default"
                href="/contact"
                className="w-full"
              >
                JOIN THE WAITLIST
              </PixelButton>
            </div>
          </div>

          {/* Card 2: clevSense */}
          <div id="sense" className="border border-foreground/40 bg-card p-8 flex flex-col justify-between relative shadow-lg">
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-silkscreen tracking-widest text-muted-foreground">
                    Chimney Sensor
                  </span>
                  <span className="text-[9px] uppercase font-silkscreen bg-foreground text-background px-2 py-0.5">
                    COMING SOON
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl tracking-wide text-foreground uppercase"
                  style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
                >
                  clevSense
                </h3>
                <div className="pt-2">
                  <span className="text-3xl font-bold font-silkscreen text-foreground">Soon</span>
                  <span className="text-xs font-mono text-muted-foreground ml-2">waitlist open</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Affordable chimney sensor that logs continuous emissions data directly from stacks and vents around the clock.
              </p>

              <div className="space-y-3 pt-4 border-t border-border/60">
                <h4 className="text-xs uppercase font-silkscreen tracking-wider text-foreground">Pilot Hardware Features:</h4>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Continuous monitoring</strong> around the clock</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Autonomous sync</strong> to central Clev console</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Low-cost hardware</strong> for broad deployment</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span>Ruggedized industrial weatherproof housing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <PixelButton
                variant="primary"
                size="default"
                href="/contact"
                className="w-full"
              >
                JOIN THE WAITLIST
              </PixelButton>
            </div>
          </div>

          {/* Card 3: clevProof */}
          <div id="proof" className="border border-border bg-card p-8 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-silkscreen tracking-widest text-muted-foreground">
                  Emissions Reports
                </span>
                <h3
                  className="text-2xl sm:text-3xl tracking-wide text-foreground uppercase"
                  style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
                >
                  clevProof
                </h3>
                <div className="pt-2">
                  <span className="text-3xl font-bold font-silkscreen text-foreground">Soon</span>
                  <span className="text-xs font-mono text-muted-foreground ml-2">waitlist open</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Tamper-evident, timestamped compliance digests cross-checked with trade and registry files that regulators can trust.
              </p>

              <div className="space-y-3 pt-4 border-t border-border/60">
                <h4 className="text-xs uppercase font-silkscreen tracking-wider text-foreground">Report Verification:</h4>
                <ul className="space-y-2.5 text-xs text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Timestamped logs</strong> with cryptographic hash</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Trade file cross-checks</strong> for precursor consistency</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Audit alerts</strong> for unexplained nocturnal spikes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-4 text-foreground shrink-0 mt-0.5" />
                    <span>Regulator-ready standardized exports</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <PixelButton
                variant="primary"
                size="default"
                href="/contact"
                className="w-full"
              >
                JOIN THE WAITLIST
              </PixelButton>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
export default PricingPage;
