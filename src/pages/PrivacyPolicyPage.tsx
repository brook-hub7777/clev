import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function PrivacyPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 space-y-8">
        <div className="space-y-4">
          <Eyebrow>PRIVACY</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            Privacy Policy
          </h1>
          <p className="text-sm font-mono text-muted-foreground">Last updated: October 2026</p>
        </div>

        <div className="border-t border-border pt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <h3
            className="text-base uppercase tracking-wide text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
          >
            1. Overview
          </h3>
          <p>Clev is dedicated to maintaining the security and confidentiality of inspection telemetry and registry data across Clev, clevRank, clevSense, and clevProof.</p>

          <h3
            className="text-base uppercase tracking-wide text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
          >
            2. Sensor Telemetry &amp; Location Data
          </h3>
          <p>Facility coordinates, stack sensor telemetry, and inspection notes are encrypted in transit and at rest. Clev does not share sensor data across unrelated agency accounts or unauthorized third parties.</p>

          <h3
            className="text-base uppercase tracking-wide text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
          >
            3. Information We Collect
          </h3>
          <p>We collect essential agency contact information, authentication credentials, and diagnostic hardware telemetry necessary to maintain sensor network uptime and verify calibration integrity.</p>
        </div>
      </div>
    </div>
  );
}
export default PrivacyPolicyPage;
