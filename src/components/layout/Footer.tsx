import React from "react";
import { Link } from "react-router-dom";
import { OrbitCanvas } from "@/components/canvas/OrbitCanvas";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background transition-colors">
      {/* Footer Content Columns */}
      <div className="mx-auto max-w-6xl px-6 pb-10 pt-6 sm:px-8 md:py-16">
        <div className="hidden gap-8 md:grid md:grid-cols-4 xl:grid-cols-7 xl:gap-x-6 text-xs font-sans">
          {/* Column 1: CLEVSENSE */}
          <div>
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
                CLEVSENSE
              </p>
            </div>
            <div className="space-y-3">
              <Link to="/run" className="block text-muted-foreground hover:text-foreground">Overview</Link>
              <Link to="/hardware-notes" className="block text-muted-foreground hover:text-foreground">Hardware Notes</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Join Pilot</Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-foreground">Deployment</Link>
            </div>
          </div>

          {/* Column 2: CLEVPROOF */}
          <div>
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
                CLEVPROOF
              </p>
            </div>
            <div className="space-y-3">
              <Link to="/code" className="block text-muted-foreground hover:text-foreground">Overview</Link>
              <Link to="/code" className="block text-muted-foreground hover:text-foreground">Verification</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Join Waitlist</Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-foreground">Compliance</Link>
            </div>
          </div>

          {/* Column 3: CLEVRANK */}
          <div>
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
                CLEVRANK
              </p>
            </div>
            <div className="space-y-3">
              <Link to="/bot" className="block text-muted-foreground hover:text-foreground">Overview</Link>
              <a href="/#rank" className="block text-muted-foreground hover:text-foreground">Case Studies</a>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Run Ranking</Link>
              <Link to="/blog" className="block text-muted-foreground hover:text-foreground">Targeting Logic</Link>
            </div>
          </div>

          {/* Column 4: COMPANY */}
          <div>
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
                COMPANY
              </p>
            </div>
            <div className="space-y-3">
              <Link to="/about-us" className="block text-muted-foreground hover:text-foreground">About us</Link>
              <Link to="/contact" className="block text-muted-foreground hover:text-foreground">Contact</Link>
              <a href="https://x.com/clev" target="_blank" rel="noopener noreferrer" className="block text-muted-foreground hover:text-foreground">Twitter / X</a>
            </div>
          </div>

          {/* Column 5: RESOURCES */}
          <div>
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
                RESOURCES
              </p>
            </div>
            <div className="space-y-3">
              <Link to="/blog" className="block text-muted-foreground hover:text-foreground">Blog</Link>
              <Link to="/pricing" className="block text-muted-foreground hover:text-foreground">Pricing & Pilots</Link>
              <Link to="/hardware-notes" className="block text-muted-foreground hover:text-foreground">Sensor Specs</Link>
            </div>
          </div>

          {/* Column 6: LEGAL */}
          <div>
            <div className="mb-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen">
                LEGAL
              </p>
            </div>
            <div className="space-y-3">
              <Link to="/legal" className="block text-muted-foreground hover:text-foreground">Terms</Link>
              <Link to="/privacy-policy" className="block text-muted-foreground hover:text-foreground">Privacy</Link>
            </div>
          </div>

          {/* Column 7: STATUS */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-foreground animate-pulse" />
              <span className="text-[11px] text-muted-foreground font-mono">All systems normal</span>
            </div>
          </div>
        </div>

        {/* Bottom Social Bar */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground">
          <div className="flex items-center gap-4">
            <Link to="/" aria-label="Clev home" className="flex items-center gap-2 group">
              <img alt="Clev" src="/clev-icon-light.png" className="block dark:hidden h-6 w-auto" />
              <img alt="Clev" src="/clev-icon-dark.png" className="hidden dark:block h-6 w-auto" />
              <span className="font-bold text-lg tracking-tight text-foreground lowercase">clev</span>
            </Link>
            <span>&copy; {new Date().getFullYear()} Clev</span>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            {/* Social SVG: X only */}
            <a href="https://x.com/clev" target="_blank" rel="noopener noreferrer" aria-label="X" className="hover:text-foreground">
              <svg viewBox="0 0 1200 1227" width="14" height="14" fill="currentColor">
                <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
