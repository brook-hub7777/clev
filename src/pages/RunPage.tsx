import React from "react";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PixelButton } from "@/components/ui/PixelButton";
import { Radio, Shield, Activity, Check, BatteryCharging, Wifi, ArrowRight } from "lucide-react";

export function RunPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        <div className="max-w-3xl space-y-4">
          <Eyebrow>CLEVSENSE · CHIMNEY SENSOR</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            KNOW WHAT LEAVES THE CHIMNEY
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Inspectors carry a low-cost sensor to flagged sites and get a measured answer instead of a guess. clevSense logs readings around the clock and syncs them to your Clev dashboard. Built for agencies and factories that can't afford a five-figure analyzer.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <PixelButton
              variant="primary"
              size="default"
              href="/contact"
            >
              JOIN A PILOT
            </PixelButton>
            <span className="text-xs font-mono text-muted-foreground">Evaluation units available · Weatherproof stack mounting</span>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
          <div className="border border-border bg-card p-6 space-y-3">
            <div className="size-10 border border-border bg-background flex items-center justify-center text-foreground">
              <Activity className="size-5" />
            </div>
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Continuous Stack Logging
            </h3>
            <p className="text-sm text-muted-foreground">
              Mounts directly to exhaust ducts, stacks, and vents to record chemical concentrations 24/7, catching unannounced nocturnal purges.
            </p>
          </div>

          <div className="border border-border bg-card p-6 space-y-3">
            <div className="size-10 border border-border bg-background flex items-center justify-center text-foreground">
              <Shield className="size-5" />
            </div>
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Low-Cost Electrochemical Cells
            </h3>
            <p className="text-sm text-muted-foreground">
              Engineered with targeted electrochemical sensors to eliminate prohibitive laboratory equipment and multi-thousand-dollar optics.
            </p>
          </div>

          <div className="border border-border bg-card p-6 space-y-3">
            <div className="size-10 border border-border bg-background flex items-center justify-center text-foreground">
              <Wifi className="size-5" />
            </div>
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Encrypted Local &amp; Cloud Sync
            </h3>
            <p className="text-sm text-muted-foreground">
              Readings store securely on tamper-resistant local flash memory and sync to the central Clev dashboard whenever connectivity is present.
            </p>
          </div>
        </div>

        {/* Traditional Analyzer Comparison */}
        <div id="comparison" className="border-t border-border pt-12 scroll-mt-20">
          <div className="max-w-2xl mb-8">
            <h2
              className="text-2xl uppercase tracking-wider text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Compare with traditional stack analyzers
            </h2>
            <p className="text-sm text-muted-foreground mt-1">
              Engineered for wide deployment across entire industrial parks.
            </p>
          </div>

          <div className="border border-border overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-muted border-b border-border text-foreground uppercase tracking-wider">
                <tr>
                  <th className="p-4">Specification</th>
                  <th className="p-4">Traditional FTIR / CEMS</th>
                  <th className="p-4 bg-foreground/10 text-foreground font-bold">clevSense Stack Unit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-muted-foreground">
                <tr>
                  <td className="p-4 font-semibold text-foreground">Capital Cost</td>
                  <td className="p-4">$40,000 – $120,000 per stack</td>
                  <td className="p-4 bg-foreground/5 text-foreground font-semibold">Low-cost pilot target</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">Installation</td>
                  <td className="p-4">Requires crane &amp; specialized team</td>
                  <td className="p-4 bg-foreground/5 text-foreground font-semibold">Hand-carried magnetic mount by inspector</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">Power Requirement</td>
                  <td className="p-4">High-voltage shore line</td>
                  <td className="p-4 bg-foreground/5 text-foreground font-semibold">Rechargeable battery + solar option</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">Sampling Cadence</td>
                  <td className="p-4">Periodic grab samples or batch run</td>
                  <td className="p-4 bg-foreground/5 text-foreground font-semibold">Continuous 24/7 automated logging</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-foreground">Tamper Protection</td>
                  <td className="p-4">Local logger vulnerable to reset</td>
                  <td className="p-4 bg-foreground/5 text-foreground font-semibold">Cryptographically signed logs &amp; housing tamper seal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default RunPage;
