import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { PricingPage } from "@/pages/PricingPage";
import { BotPage } from "@/pages/BotPage";
import { RunPage } from "@/pages/RunPage";
import { CodePage } from "@/pages/CodePage";
import { AboutPage } from "@/pages/AboutPage";
import { ContactPage } from "@/pages/ContactPage";
import { OpenSourcePage } from "@/pages/OpenSourcePage";
import { BlogPage } from "@/pages/BlogPage";
import { LegalPage } from "@/pages/LegalPage";
import { PrivacyPolicyPage } from "@/pages/PrivacyPolicyPage";
import { PixelButton } from "@/components/ui/PixelButton";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function NotFoundPage() {
  return (
    <div className="py-24 text-center space-y-4">
      <h1 className="text-4xl font-silkscreen font-bold text-foreground">404 - NOT FOUND</h1>
      <p className="text-sm text-muted-foreground">The requested route could not be found.</p>
      <div className="pt-4">
        <PixelButton href="/" variant="primary">RETURN HOME</PixelButton>
      </div>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col justify-between bg-background text-foreground transition-colors selection:bg-foreground selection:text-background">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/rank" element={<BotPage />} />
            <Route path="/bot" element={<BotPage />} />
            <Route path="/sense" element={<RunPage />} />
            <Route path="/run" element={<RunPage />} />
            <Route path="/proof" element={<CodePage />} />
            <Route path="/code" element={<CodePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/hardware-notes" element={<OpenSourcePage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;
