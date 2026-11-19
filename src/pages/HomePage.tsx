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

    </main>
  );
}
export default HomePage;
