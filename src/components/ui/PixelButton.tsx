import * as React from "react";
import { cn } from "@/lib/utils";

export interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm";
  href?: string;
  "data-journey-cta"?: string;
}

const variantStyles: Record<string, string> = {
  primary: "bg-foreground text-background hover:opacity-85 active:translate-y-px",
  secondary: "border border-border text-foreground bg-background/60 hover:border-foreground/50 active:translate-y-px",
  ghost: "text-muted-foreground hover:text-foreground underline-offset-4 hover:underline px-0 py-0"
};

const sizeStyles: Record<string, string> = {
  default: "text-[11px] px-5 py-3 tracking-[0.22em]",
  sm: "text-[10px] px-4 py-2.5 tracking-[0.2em]"
};

export const PixelButton = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, PixelButtonProps>(
  ({ variant = "primary", size = "default", className, style, href, ...props }, ref) => {
    const classes = cn(
      "inline-flex items-center justify-center uppercase select-none rounded-none transition font-silkscreen font-normal",
      variantStyles[variant],
      sizeStyles[size],
      className
    );
    const fontStyle = { fontFamily: '"Silkscreen", monospace', ...style };

    if (href !== undefined) {
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          style={fontStyle}
          data-journey-cta={variant}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        style={fontStyle}
        {...props}
      />
    );
  }
);
PixelButton.displayName = "PixelButton";
