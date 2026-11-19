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
