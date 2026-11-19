import React from "react";
import { Link } from "react-router-dom";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function BlogPage() {
  const articles = [
    {
      title: "Attribution modeling from regional atmospheric plumes",
      date: "October 2026",
      tag: "Modeling",
      desc: "How back-trajectory calculations and chemical mass-balance filters isolate likely industrial source areas from distant monitoring stations."
    },
    {
      title: "Designing an affordable chimney sensor for halogenated gases",
      date: "September 2026",
      tag: "Hardware",
      desc: "The engineering trade-offs of electrochemical cells versus optical spectroscopy on high-temperature stack exhausts."
    },
    {
      title: "Closing the enforcement gap in ozone-depleting substance treaties",
      date: "August 2026",
      tag: "Policy",
      desc: "Why global atmospheric monitoring networks need rapid, low-cost ground inspection verification to confirm suspected emission sources."
    },
    {
      title: "Validating facility scores with satellite thermal and trade manifests",
      date: "July 2026",
      tag: "Targeting",
      desc: "Cross-referencing import records and heat signatures to separate active foaming lines from dormant facilities."
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-12">
        <div className="max-w-3xl space-y-4">
          <Eyebrow>INVESTIGATION &amp; RESEARCH BLOG</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            EMISSIONS ATTRIBUTION &amp; SENSOR FIELD NOTES
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Technical writing from the Clev team on regional atmospheric modeling, electrochemical chimney sensing, and regulatory evidence standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-12">
          {articles.map((art, idx) => (
            <article key={idx} className="border border-border bg-card p-6 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs font-mono text-muted-foreground">
                  <span className="bg-muted px-2 py-0.5 text-foreground font-silkscreen uppercase tracking-wider text-[10px]">{art.tag}</span>
                  <span>{art.date}</span>
                </div>
                <h2
                  className="text-lg uppercase tracking-wide text-foreground hover:underline cursor-pointer"
                  style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
                >
                  {art.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed">{art.desc}</p>
              </div>
              <div className="pt-4 border-t border-border/50 text-xs font-mono text-foreground font-medium">
                Read notes →
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
export default BlogPage;
