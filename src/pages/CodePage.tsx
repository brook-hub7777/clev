import React from "react";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PixelButton } from "@/components/ui/PixelButton";
import { ShieldCheck, FileText, Database, Check, Lock, ArrowRight } from "lucide-react";

export function CodePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        <div className="max-w-3xl space-y-4">
          <Eyebrow>CLEVPROOF · EMISSIONS REPORTS</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            REPORTS REGULATORS CAN CHECK
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            clevProof turns sensor readings into timestamped, tamper-evident reports, cross-checked against trade and registry data. Self-reported numbers are easy to fudge. Continuous measurements are harder to argue with. Coming soon: join the waitlist.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <PixelButton
              variant="primary"
              size="default"
              href="/contact"
            >
              JOIN THE WAITLIST
            </PixelButton>
            <span className="text-xs font-mono text-muted-foreground">Coming soon · Environmental agency compliance pilot</span>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
          <div className="border border-border bg-card p-6 space-y-3">
            <div className="size-10 border border-border bg-background flex items-center justify-center text-foreground">
              <Lock className="size-5" />
            </div>
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Tamper-Evident Signatures
            </h3>
            <p className="text-sm text-muted-foreground">
              Sensor readings are cryptographically hashed at the device level, preventing retroactive adjustments, cherry-picking, or omitted logs.
            </p>
          </div>

          <div className="border border-border bg-card p-6 space-y-3">
            <div className="size-10 border border-border bg-background flex items-center justify-center text-foreground">
              <Database className="size-5" />
            </div>
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Trade &amp; Registry Cross-Checks
            </h3>
            <p className="text-sm text-muted-foreground">
              Stack emissions are compared with chemical purchase manifests and customs entries to detect undeclared foaming compound usage.
            </p>
          </div>

          <div className="border border-border bg-card p-6 space-y-3">
            <div className="size-10 border border-border bg-background flex items-center justify-center text-foreground">
              <FileText className="size-5" />
            </div>
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Regulator-Ready Exports
            </h3>
            <p className="text-sm text-muted-foreground">
              Produces verified, timestamped audit dossiers formatted for treaty verification bodies and environmental agency enforcement divisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CodePage;
