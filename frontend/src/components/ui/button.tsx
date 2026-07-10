import * as React from "react";
import Link from "next/link";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type Props = (ButtonAsLink | ButtonAsButton) & {
  variant?: "primary" | "secondary" | "ghost";
};

const variantStyles: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-signal text-void hover:bg-signal/90 active:bg-signal/80 shadow-[0_0_0_1px_rgba(255,165,60,0.35)]",
  secondary:
    "bg-panel-raised text-ink border border-line hover:border-signal/50 hover:text-signal",
  ghost: "text-ink-muted hover:text-ink",
};

const base =
  "inline-flex min-h-[44px] items-center justify-center gap-2 rounded-md px-5 font-mono text-[13px] font-medium uppercase tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2";

export function Button({ variant = "primary", className = "", children, ...props }: Props) {
  const classes = `${base} ${variantStyles[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href } = props;
    const isExternal = /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonAsButton;
  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
