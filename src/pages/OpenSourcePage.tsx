import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PixelButton } from "@/components/ui/PixelButton";
import { Radio, Copy, Check, ShieldCheck, Activity, Cpu } from "lucide-react";

export function OpenSourcePage() {
  const [copied, setCopied] = useState(false);

  const samplePayload = `{
  "sensor_id": "clev-stack-01",
  "firmware": "v2.4.1-pilot",
  "timestamp": "2026-10-27T16:00:00Z",
  "gas_readings": {
    "cfc11_equivalent_ppm": 0.021,
    "voc_baseline_ppm": 0.14,
    "temperature_c": 42.6,
    "differential_pressure_pa": 128
  },
  "tamper_hash": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855"
}`;

  const copyPayload = () => {
    navigator.clipboard.writeText(samplePayload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        <div className="max-w-3xl space-y-4">
          <Eyebrow>CLEVSENSE · HARDWARE NOTES</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            LOW-COST CHIMNEY SENSOR ARCHITECTURE
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            clevSense combines targeted electrochemical detection with cellular telemetry and tamper-resistant local logging. Designed for field deployment on active industrial exhaust stacks.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <PixelButton
              variant="primary"
              size="default"
              href="/contact"
            >
              REQUEST PILOT HARDWARE
            </PixelButton>
            <span className="text-xs font-mono text-muted-foreground">Evaluation units available for qualified teams</span>
          </div>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-12">
          <div className="border border-border bg-card p-6 space-y-3">
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Sensor Transducer
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tuned electrochemical cell matrix targeting fluorinated and halogenated compounds. Cross-calibrated against common industrial solvent interference (acetone, toluene, ethanol).
            </p>
            <ul className="text-xs font-mono text-foreground space-y-1 pt-2">
              <li>• Resolution: 0.005 ppm</li>
              <li>• Detection Range: 0.01 – 50.00 ppm</li>
              <li>• Response Time (t90): &lt; 15 seconds</li>
            </ul>
          </div>

          <div className="border border-border bg-card p-6 space-y-3">
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Power &amp; Enclosure
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Industrial magnetic flange mount designed for rapid, single-inspector attachment to ferromagnetic stack walls and duct inspection ports.
            </p>
            <ul className="text-xs font-mono text-foreground space-y-1 pt-2">
              <li>• Housing: IP67 weather-sealed polycarbonate</li>
              <li>• Battery Life: 45 days autonomous logging</li>
              <li>• Solar Assist: Optional 5W auxiliary collector</li>
            </ul>
          </div>
        </div>

        {/* Sample Telemetry Payload */}
        <div className="border border-border bg-card p-6 md:p-8 space-y-4 max-w-4xl">
          <div className="flex items-center justify-between">
            <h3
              className="text-base uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Standard Log Record Format (Synthetic)
            </h3>
            <button
              onClick={copyPayload}
              className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 cursor-pointer"
            >
              {copied ? <Check className="size-3.5 text-foreground" /> : <Copy className="size-3.5" />}
              <span>{copied ? "Copied" : "Copy JSON"}</span>
            </button>
          </div>
          <div className="bg-background p-4 border border-border font-mono text-xs overflow-x-auto">
            <pre className="text-foreground">
              <code>{samplePayload}</code>
            </pre>
          </div>
          <p className="text-xs text-muted-foreground">
            Each transmission is cryptographically hashed with an internal secure enclave key to verify data provenance.
          </p>
        </div>
      </div>
    </div>
  );
}
export default OpenSourcePage;
