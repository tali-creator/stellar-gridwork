const links = [
  { href: "#architecture", label: "Architecture" },
  { href: "#verticals", label: "Verticals" },
  { href: "#datasheet", label: "Datasheet" },
  { href: "#prior-art", label: "Prior Art" },
  { href: "#roadmap", label: "Roadmap" },
];

export function SiteFooter() {
  return (
    <footer className="bg-void">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-mono text-sm font-semibold text-ink">Gridwork</p>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-muted">
              A generalizable DePIN micro-payment rewards layer for Stellar.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-1 font-mono text-[13px] text-ink-muted sm:grid-cols-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="inline-flex min-h-[44px] items-center transition-colors hover:text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-line pt-6 font-mono text-[11px] text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>gridwork/spec &middot; v0.1 &middot; MIT License</p>
          <p>Previously named PulseNet &middot; Category: DePIN Rewards Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
