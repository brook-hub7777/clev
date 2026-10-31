import React from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AboutPage() {
  const team = [
    {
      name: "Biruk Yirsaw",
      role: "CEO and co-founder",
      image: "/team/biruk.png",
      bio: "Leading Clev's strategic direction and mission to pinpoint and verify emissions sources. Partnering with environmental agencies and facilities to deploy continuous chimney monitoring.",
    },
    {
      name: "gebremedhin endashaw",
      role: "CTO and co-founder",
      image: "/team/gebremedhin.jpg",
      bio: "Hardware engineering and sensor telemetry networks. Developing ruggedized, low-cost chimney sensors and regional targeting algorithms.",
    },
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 space-y-16">
        <div className="max-w-3xl space-y-4">
          <Eyebrow>ABOUT US</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            FINDING THE SOURCE, NOT JUST THE SIGNAL
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Clev is an environmental technology company based in Addis Ababa. We build software and sensors to help environmental inspectors pinpoint and confirm illegal emissions of ozone-depleting substances.
          </p>
        </div>

        {/* Story Section */}
        <div className="border-t border-border pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-sm text-muted-foreground leading-relaxed">
          <div className="space-y-4">
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Why we started
            </h3>
            <p>
              Global atmospheric monitoring networks can detect a regional spike in banned substances like CFC-11, but cannot pinpoint which facility or chimney is leaking. Inspectors are left with thousands of potential industrial facilities across an entire province.
            </p>
            <p>
              We built Clev to close this enforcement gap. clevRank narrows down regional plumes to a prioritized short list using satellite imagery and trade data. clevSense gives inspectors low-cost chimney sensors to measure emissions on site.
            </p>
          </div>
          <div className="space-y-4">
            <h3
              className="text-lg uppercase tracking-wide text-foreground"
              style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
            >
              Our approach
            </h3>
            <p>
              We believe enforcement requires accessible, verified measurement. Traditional stack gas analyzers cost tens of thousands of dollars, making continuous monitoring impossible for most facilities and enforcement budgets.
            </p>
            <p>
              By combining regional signal prioritization with affordable sensor hardware, Clev gives environmental agencies, NGO investigators, and compliant factories the tools to confirm emissions directly at the chimney.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="border-t border-border pt-12 space-y-8">
          <h2
            className="text-2xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
          >
            The Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {team.map((member, i) => (
              <div key={i} className="border border-border bg-card p-6 space-y-4">
                <div className="aspect-square w-full max-w-[140px] overflow-hidden border border-border bg-muted">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <h3
                    className="text-base uppercase tracking-wide text-foreground"
                    style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">{member.role}</p>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
