import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const isDarkSaved =
      document.documentElement.classList.contains("dark") ||
      !document.documentElement.classList.contains("light");
    setIsDark(isDarkSaved);
    if (isDarkSaved) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  };

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Brand Logo */}
        <Link to="/" aria-label="Clev home" className="-my-2 py-2 flex items-center gap-2.5 group">
          <img alt="Clev" src="/clev-icon-light.png" className="block dark:hidden h-8 w-auto" />
          <img alt="Clev" src="/clev-icon-dark.png" className="hidden dark:block h-8 w-auto" />
          <span className="font-bold text-2xl tracking-tight text-foreground lowercase">clev</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-4 lg:flex">
          {/* RANK Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("rank")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="group inline-flex items-center justify-center px-2 py-2 text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground h-auto rounded-none bg-transparent"
              style={{ fontFamily: "Silkscreen, monospace" }}
              onClick={() => setActiveDropdown(activeDropdown === "rank" ? null : "rank")}
            >
              RANK
              <ChevronDown
                className={`relative top-px ml-1 size-3 transition duration-300 ${
                  activeDropdown === "rank" ? "rotate-180 text-foreground" : ""
                }`}
              />
            </button>

            {activeDropdown === "rank" && (
              <div className="absolute top-full left-0 mt-1 w-80 border border-border bg-popover p-2 shadow-2xl z-50 rounded-none">
                <div className="px-3 pb-1 pt-2">
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                    style={{ fontFamily: "Silkscreen, monospace" }}
                  >
                    Facility Targeting
                  </p>
                </div>
                <Link
                  to="/bot"
                  className="block px-3 py-2.5 transition-colors hover:bg-muted text-foreground"
                >
                  <div className="text-sm font-medium">clevRank Overview</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">Prioritize facilities behind regional plumes</div>
                </Link>
                <a
                  href="/#rank"
                  className="block px-3 py-2.5 transition-colors hover:bg-muted text-foreground"
                >
                  <div className="text-sm font-medium">Interactive Cases</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">Explore synthetic ranking scenarios</div>
                </a>
                <Link
                  to="/contact"
                  className="block px-3 py-2.5 transition-colors hover:bg-muted text-foreground group"
                >
                  <div className="text-sm font-medium flex items-center justify-between">
                    Run a ranking
                    <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-foreground" />
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">Initiate targeting for an emissions spike</div>
                </Link>
              </div>
            )}
          </div>

          {/* SENSE Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("sense")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="group inline-flex items-center justify-center px-2 py-2 text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground h-auto rounded-none bg-transparent"
              style={{ fontFamily: "Silkscreen, monospace" }}
              onClick={() => setActiveDropdown(activeDropdown === "sense" ? null : "sense")}
            >
              SENSE
              <ChevronDown
                className={`relative top-px ml-1 size-3 transition duration-300 ${
                  activeDropdown === "sense" ? "rotate-180 text-foreground" : ""
                }`}
              />
            </button>

            {activeDropdown === "sense" && (
              <div className="absolute top-full left-0 mt-1 w-80 border border-border bg-popover p-2 shadow-2xl z-50 rounded-none">
                <div className="px-3 pb-1 pt-2">
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                    style={{ fontFamily: "Silkscreen, monospace" }}
                  >
                    Chimney Sensor
                  </p>
                </div>
                <Link
                  to="/run"
                  className="block px-3 py-2.5 transition-colors hover:bg-muted text-foreground"
                >
                  <div className="text-sm font-medium">clevSense Overview</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    Low-cost continuous stack monitoring
                  </div>
                </Link>
                <Link
                  to="/hardware-notes"
                  className="block px-3 py-2.5 transition-colors hover:bg-muted text-foreground"
                >
                  <div className="text-sm font-medium">Hardware Notes</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    Sensor architecture and detection limits
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2.5 transition-colors hover:bg-muted text-foreground group"
                >
                  <div className="text-sm font-medium flex items-center justify-between">
                    Join a pilot
                    <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-foreground" />
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">Request sensor evaluation units</div>
                </Link>
              </div>
            )}
          </div>

          {/* PROOF Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("proof")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button
              className="group inline-flex items-center justify-center px-2 py-2 text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground h-auto rounded-none bg-transparent"
              style={{ fontFamily: "Silkscreen, monospace" }}
              onClick={() => setActiveDropdown(activeDropdown === "proof" ? null : "proof")}
            >
              PROOF
              <ChevronDown
                className={`relative top-px ml-1 size-3 transition duration-300 ${
                  activeDropdown === "proof" ? "rotate-180 text-foreground" : ""
                }`}
              />
            </button>

            {activeDropdown === "proof" && (
              <div className="absolute top-full left-0 mt-1 w-80 border border-border bg-popover p-2 shadow-2xl z-50 rounded-none">
                <div className="px-3 pb-1 pt-2">
                  <p
                    className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                    style={{ fontFamily: "Silkscreen, monospace" }}
                  >
                    Emissions Reports
                  </p>
                </div>
                <Link
                  to="/code"
                  className="block px-3 py-2.5 transition-colors hover:bg-muted text-foreground"
                >
                  <div className="text-sm font-medium">clevProof Overview</div>
                  <div className="mt-0.5 text-xs text-muted-foreground">
                    Tamper-evident regulatory reporting
                  </div>
                </Link>
                <Link
                  to="/contact"
                  className="block px-3 py-2.5 transition-colors hover:bg-muted text-foreground group"
                >
                  <div className="text-sm font-medium flex items-center justify-between">
                    Join the waitlist
                    <ArrowUpRight className="size-3 text-muted-foreground group-hover:text-foreground" />
                  </div>
                  <div className="mt-0.5 text-xs text-muted-foreground">Early regulatory reporting access</div>
                </Link>
              </div>
            )}
          </div>

          {/* Direct Static Links */}
          <Link
            to="/pricing"
            className="text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground px-2 py-2"
            style={{ fontFamily: "Silkscreen, monospace" }}
          >
            PRICING
          </Link>
          <Link
            to="/blog"
            className="text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground px-2 py-2"
            style={{ fontFamily: "Silkscreen, monospace" }}
          >
            BLOG
          </Link>
          <Link
            to="/contact"
            className="text-[10px] font-normal uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground px-2 py-2"
            style={{ fontFamily: "Silkscreen, monospace" }}
          >
            CONTACT
          </Link>

        </div>

      </div>

    </nav>
  );
}
export default Navbar;
