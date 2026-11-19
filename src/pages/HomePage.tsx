import React, { useState } from "react";
import { Link } from "react-router-dom";
import { OrbitCanvas } from "@/components/canvas/OrbitCanvas";
import { ArrowRight, ChevronDown, Check, ShieldCheck, Activity, Database, FileText, Radio } from "lucide-react";

export function HomePage() {
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

      </section>

    </main>
  );
}
export default HomePage;
