import React from "react";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PixelButton } from "@/components/ui/PixelButton";
import { Activity, ShieldCheck, Database, Layers, Check, ArrowRight } from "lucide-react";

export function BotPage() {
  const caseProfiles = [
    { name: "Rigid Polyurethane Foam Lines", desc: "Prioritizes foam blowing operations by comparing reported foaming compounds with electricity use and thermal output." },
    { name: "Refrigerant Formulation Plants", desc: "Checks precursor intake ratios and historical mass-balance figures against downstream packaging records." },
    { name: "Fluorinated Solvent Blenders", desc: "Cross-checks customs manifests against registered factory emissions scrubbers and waste reclamation streams." },
    { name: "Industrial Chemical Storage Yards", desc: "Flags unmapped outdoor tank clusters and pressurized storage vessels identified in high-resolution satellite imagery." },
    { name: "Regional Distribution Brokers", desc: "Tracks trade flows through intermediary chemical brokers handling ozone-depleting gas precursors." },
    { name: "Closed-Cell Insulation Fabricators", desc: "Evaluates board-stock and spray-foam facilities located within downwind plume trajectories." }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        <div className="max-w-3xl space-y-4">
          <Eyebrow>CLEVRANK · FACILITY TARGETING</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            FROM A WHOLE PROVINCE TO A SHORT LIST
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            An atmospheric spike tells you something is leaking somewhere in a region, not which building. clevRank scores nearby facilities using satellite imagery, trade records, and industrial registries, and shows the evidence behind every score. Inspectors start with the likeliest sites.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <PixelButton
              variant="primary"
              size="default"
              href="/contact"
            >
              RUN A RANKING
            </PixelButton>
            <span className="text-xs font-mono text-muted-foreground">Free while in beta · Synthetic demo available</span>
          </div>
        </div>

        {/* 3 Step Workflow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-border pt-12">
          <div className="border border-border bg-card p-6 space-y-3">
            <span className="text-xs font-silkscreen text-muted-foreground">STEP 01</span>
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Ingest Signal
            </h3>
            <p className="text-sm text-muted-foreground">
              Load atmospheric plume observations, wind trajectory models, and regional monitoring station data to bound the source search area.
            </p>
          </div>

          <div className="border border-border bg-card p-6 space-y-3">
            <span className="text-xs font-silkscreen text-muted-foreground">STEP 02</span>
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Correlate Evidence
            </h3>
            <p className="text-sm text-muted-foreground">
              clevRank cross-checks registered chemical capacities, customs trade flows, and thermal satellite signatures against observed spikes.
            </p>
          </div>

          <div className="border border-border bg-card p-6 space-y-3">
            <span className="text-xs font-silkscreen text-muted-foreground">STEP 03</span>
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Prioritize Targets
            </h3>
            <p className="text-sm text-muted-foreground">
              Inspectors receive a scored short list showing exact facility coordinates, priority tier, and verifiable supporting evidence.
            </p>
          </div>
        </div>

        {/* Profiles Grid */}
        <div className="border-t border-border pt-12 space-y-8">
          <div>
            <h2
              className="text-2xl uppercase tracking-wider text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Facility Target Categories
            </h2>
            <p className="text-sm text-muted-foreground mt-1">Screening categories calibrated for controlled substance detection.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseProfiles.map((t, idx) => (
              <div key={idx} className="border border-border bg-card p-6 space-y-2 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-semibold text-foreground">{t.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{t.desc}</p>
                </div>
                <div className="pt-4">
                  <Link
                    to="/contact"
                    className="text-xs font-mono text-foreground hover:underline inline-flex items-center gap-1"
                  >
                    Target this sector →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default BotPage;
