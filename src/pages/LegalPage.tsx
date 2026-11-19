import React from "react";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function LegalPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 space-y-8">
        <div className="space-y-4">
          <Eyebrow>LEGAL</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            Terms of Service
          </h1>
          <p className="text-sm font-mono text-muted-foreground">Last updated: October 2026</p>
        </div>

        <div className="border-t border-border pt-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
          <h3
            className="text-base uppercase tracking-wide text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
          >
            1. Acceptance of Terms
          </h3>
          <p>By accessing or using Clev, clevRank, clevSense, or clevProof, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.</p>

          <h3
            className="text-base uppercase tracking-wide text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
          >
            2. Scope of Service &amp; Investigative Findings
          </h3>
          <p>Clev prioritizes potential facility sources based on atmospheric signal modeling and available public registries. Clev does not make legal determinations or claim to prove wrongdoing. On-site sensor measurements confirm local concentrations to support authorized inspector evaluations.</p>

          <h3
            className="text-base uppercase tracking-wide text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
          >
            3. Data Ownership &amp; Confidentiality
          </h3>
          <p>Environmental agencies and facility operators retain ownership of their proprietary sensor records and inspection notes. Clev treats pilot telemetry data with strict confidentiality under applicable agency protocols.</p>

          <h3
            className="text-base uppercase tracking-wide text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
          >
            4. Privacy Policy
          </h3>
          <p>For information regarding how we handle technical and account data, please see our <Link to="/privacy-policy" className="text-foreground underline">Privacy Policy</Link>.</p>
        </div>
      </div>
    </div>
  );
}
export default LegalPage;
