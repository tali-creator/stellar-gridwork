import { SectionHeading } from "@/components/landing/section-heading";
import { Reveal } from "@/components/landing/reveal";

const phases = [
  {
    n: "01",
    name: "Bootstrap",
    status: "In progress",
    detail:
      "Core team ships the registry, reward engine, and settlement contracts, plus one reference verification module to prove the pipeline end to end.",
  },
  {
    n: "02",
    name: "Vertical Expansion",
    status: "Next",
    detail:
      "Third-party teams build verification modules against the published interface — no core-team involvement, no protocol fork.",
  },
  {
    n: "03",
    name: "Governance Handoff",
    status: "Planned",
    detail:
      "GIPs become the sole path for parameter changes. Core contract upgrade authority moves toward a multisig or DAO representing active verticals.",
  },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          index="§06"
          eyebrow="Roadmap"
          title="Bootstrapped by one team. Governed by every vertical."
        />

        <div className="relative mt-16 grid gap-10 sm:grid-cols-3">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[13px] hidden h-px bg-line sm:block"
          />
          {phases.map((phase, i) => (
            <Reveal key={phase.n} delay={i * 90}>
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span
                    className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border font-mono text-[11px] ${
                      i === 0
                        ? "border-signal bg-void text-signal"
                        : "border-line bg-void text-ink-faint"
                    }`}
                  >
                    {phase.n}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                    {phase.status}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-medium text-ink">{phase.name}</h3>
                <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
                  {phase.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
