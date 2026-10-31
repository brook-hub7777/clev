import * as React from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn("text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-silkscreen select-none", className)}
      style={{ fontFamily: '"Silkscreen", monospace' }}
    >
      {children}
    </p>
  );
}
