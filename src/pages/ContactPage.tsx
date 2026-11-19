import React, { useState } from "react";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PixelButton } from "@/components/ui/PixelButton";
import { Mail, Check, ShieldCheck } from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 space-y-12">
        <div className="space-y-4">
          <Eyebrow>GET IN TOUCH</Eyebrow>
          <h1
            className="text-3xl sm:text-5xl uppercase tracking-wider text-foreground"
            style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400, letterSpacing: "0.04em", lineHeight: 1.1 }}
          >
            CONTACT THE CLEV TEAM
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Talk to us about regional facility targeting, pilot chimney sensor deployments, or continuous emissions monitoring for your facility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-border pt-12 items-start">
          {/* Left Details */}
          <div className="md:col-span-5 space-y-6 text-sm text-muted-foreground">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Direct inquiries</h3>
              <p className="font-mono text-xs text-foreground">
                <a href="mailto:brookyirsaw444@gmail.com" className="hover:underline">
                  brookyirsaw444@gmail.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Partnership &amp; Pilots</h3>
              <p className="text-xs leading-relaxed">
                We deploy evaluation sensor kits and regional targeting access to environmental agencies, treaty bodies, and industrial parks.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">Office</h3>
              <p className="text-xs">Addis Ababa</p>
            </div>
          </div>

          {/* Right Form */}
          <div className="md:col-span-7 lg:col-span-7 w-full border border-border bg-card p-6 md:p-8">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="size-12 bg-foreground/10 text-foreground rounded-full flex items-center justify-center mx-auto">
                  <Check className="size-6" />
                </div>
                <h3
                  className="text-xl uppercase tracking-wider text-foreground"
                  style={{ fontFamily: "ClevPixel, Silkscreen, monospace", fontWeight: 400 }}
                >
                  Message received
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Thank you for reaching out. A team member will reply within 24 hours to coordinate pilot specifications.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 w-full">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground block">Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground"
                    placeholder="Inspector or Facility Representative"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground block">Official Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground"
                    placeholder="name@agency.gov or name@company.com"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground block">Agency or Organization</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground"
                    placeholder="Environmental Protection Agency, Inspection Unit, etc."
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-muted-foreground block">Message / Scope *</label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-background border border-border px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-foreground resize-none"
                    placeholder="Describe the regional monitoring area or target facility type..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 bg-foreground text-background font-silkscreen text-xs uppercase tracking-widest hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactPage;
