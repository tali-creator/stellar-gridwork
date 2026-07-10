import Link from "next/link";
import { GithubIcon } from "@/components/icons/github";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#architecture", label: "Architecture" },
  { href: "#verticals", label: "Verticals" },
  { href: "#datasheet", label: "Datasheet" },
  { href: "#prior-art", label: "Prior Art" },
  { href: "#roadmap", label: "Roadmap" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link
          href="#top"
          className="flex items-center gap-2.5 text-ink"
          aria-label="Gridwork home"
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
            className="text-signal"
          >
            <rect x="1" y="1" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.4" />
            <rect x="13" y="1" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
            <rect x="1" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.4" opacity="0.4" />
            <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.4" />
            <path d="M9 5H13M5 9V13M17 9V13M9 17H13" stroke="currentColor" strokeWidth="1.2" opacity="0.6" />
          </svg>
          <span className="font-mono text-[15px] font-semibold tracking-tight">
            Gridwork
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-8 font-mono text-[13px] text-ink-muted">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center transition-colors hover:text-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Button
            href="https://github.com/gridwork-protocol/gridwork"
            variant="ghost"
            className="hidden sm:inline-flex"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
            GitHub
          </Button>
          <Button href="#datasheet" variant="secondary">
            Read the Spec
          </Button>
        </div>
      </div>
    </header>
  );
}
