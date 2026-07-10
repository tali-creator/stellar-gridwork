import { SectionHeading } from "@/components/landing/section-heading";
import { Reveal } from "@/components/landing/reveal";

const verticals = [
  {
    name: "Weather Stations",
    detail: "Ambient sensor readings scored for plausibility, coverage gaps, and freshness.",
    status: "reference",
  },
  {
    name: "Bandwidth Mesh Nodes",
    detail: "Throughput attestation for community mesh and last-mile connectivity.",
    status: "reference",
  },
  {
    name: "Community Solar",
    detail: "Generation telemetry from distributed solar arrays and micro-grids.",
    status: "open",
  },
  {
    name: "Environmental Sensors",
    detail: "Air quality, soil, and water sensor networks with density-aware payout.",
    status: "open",
  },
  {
    name: "Edge Compute",
    detail: "Job-completion attestation for distributed inference or rendering nodes.",
    status: "open",
  },
  {
    name: "Your Vertical",
    detail: "Ship a verification module against the published interface — no fork required.",
    status: "build",
  },
];

const statusLabel: Record<string, string> = {
  reference: "Reference module",
  open: "Open slot",
  build: "Build yours",
};

export function Verticals() {
  return (
    <section id="verticals" className="border-b border-line bg-panel/30">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          index="§03"
          eyebrow="Verification Modules"
          title="One board. Any hardware vertical can plug in."
          description="Gridwork ships the registry, reward engine, and settlement rails once. Each vertical brings its own verification module against a shared interface."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {verticals.map((v, i) => (
            <Reveal key={v.name} delay={i * 60}>
              <div className="group relative flex h-full flex-col justify-between bg-void p-6">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-medium text-ink">{v.name}</h3>
                    <span
                      className={`shrink-0 font-mono text-[10px] uppercase tracking-wide ${
                        v.status === "reference"
                          ? "text-settle"
                          : v.status === "build"
                            ? "text-signal"
                            : "text-ink-faint"
                      }`}
                    >
                      {statusLabel[v.status]}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {v.detail}
                  </p>
                </div>

                <div
                  aria-hidden="true"
                  className="mt-6 flex gap-[3px] opacity-40 transition-opacity group-hover:opacity-80"
                >
                  {Array.from({ length: 10 }).map((_, tick) => (
                    <span key={tick} className="h-2 w-[3px] bg-ink-faint" />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
