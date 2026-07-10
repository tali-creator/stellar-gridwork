import { SectionHeading } from "@/components/landing/section-heading";
import { Reveal } from "@/components/landing/reveal";

const rows = [
  { label: "Chain", helium: "Solana (migrated 2023)", hivemapper: "Solana", render: "Solana", dimo: "Polygon" },
  {
    label: "Proof mechanism",
    helium: "Proof-of-Coverage",
    hivemapper: "Imagery quality + coverage scoring",
    render: "Job-completion attestation",
    dimo: "Telemetry + consent scope",
  },
  {
    label: "Settlement unit",
    helium: "HNT / Data Credits",
    hivemapper: "HONEY",
    render: "RENDER (BME)",
    dimo: "DIMO token",
  },
  {
    label: "Governance",
    helium: "HIPs",
    hivemapper: "MIPs",
    render: "Foundation-run",
    dimo: "Foundation-run",
  },
];

const gridwork = {
  chain: "Stellar / Soroban",
  proof: "Pluggable per-vertical modules",
  settlement: "USDC / EURC, direct streaming",
  governance: "GIPs",
};

export function PriorArt() {
  return (
    <section id="prior-art" className="border-b border-line bg-panel/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          index="§05"
          eyebrow="Prior Art"
          title="What Helium, Hivemapper, Render, and DIMO already proved."
          description="Gridwork isn't a new pattern — it's a synthesis of patterns that already work, denominated directly in stablecoins instead of a network token."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_280px]">
          <Reveal>
            <div className="overflow-x-auto rounded-lg border border-line">
              <table className="w-full min-w-160 border-collapse text-left">
                <caption className="sr-only">
                  Comparison of Gridwork with Helium, Hivemapper, Render, and DIMO
                </caption>
                <thead>
                  <tr className="border-b border-line bg-panel">
                    <th scope="col" className="px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                      &nbsp;
                    </th>
                    <th scope="col" className="px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                      Helium
                    </th>
                    <th scope="col" className="px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                      Hivemapper
                    </th>
                    <th scope="col" className="px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                      Render
                    </th>
                    <th scope="col" className="px-5 py-3 font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                      DIMO
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row) => (
                    <tr key={row.label} className="border-b border-line text-sm last:border-b-0">
                      <th scope="row" className="px-5 py-4 font-medium text-ink-muted">
                        {row.label}
                      </th>
                      <td className="px-5 py-4 text-ink-muted">{row.helium}</td>
                      <td className="px-5 py-4 text-ink-muted">{row.hivemapper}</td>
                      <td className="px-5 py-4 text-ink-muted">{row.render}</td>
                      <td className="px-5 py-4 text-ink-muted">{row.dimo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 font-mono text-[11px] text-ink-faint lg:hidden">
              Scroll to see all four columns.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-lg border border-signal/40 bg-panel p-6">
              <span className="font-mono text-[11px] uppercase tracking-wide text-signal">
                Gridwork
              </span>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="text-xs text-ink-faint">Chain</dt>
                  <dd className="mt-0.5 text-sm text-ink">{gridwork.chain}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-faint">Proof mechanism</dt>
                  <dd className="mt-0.5 text-sm text-ink">{gridwork.proof}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-faint">Settlement unit</dt>
                  <dd className="mt-0.5 text-sm text-ink">{gridwork.settlement}</dd>
                </div>
                <div>
                  <dt className="text-xs text-ink-faint">Governance</dt>
                  <dd className="mt-0.5 text-sm text-ink">{gridwork.governance}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
