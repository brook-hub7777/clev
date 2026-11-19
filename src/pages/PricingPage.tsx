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
        </div>

      </div>
    </div>
  );
}
export default PricingPage;
