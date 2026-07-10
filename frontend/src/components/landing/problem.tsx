import { SectionHeading } from "@/components/landing/section-heading";
import { Reveal } from "@/components/landing/reveal";

export function Problem() {
  return (
    <section className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          index="§01"
          eyebrow="The Problem"
          title="Every DePIN network rebuilds the same stack from zero."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal delay={80}>
            <p className="text-balance text-xl leading-relaxed text-ink-muted">
              A device registry. A proof mechanism. Reward math. Settlement rails.
              A governance process. Helium, Hivemapper, Render, and DIMO each wrote
              this stack from scratch, one hardware vertical at a time — a
              12&ndash;18-month build before a new vertical can even test whether
              incentivized contribution works for it.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="space-y-6 border-l border-line pl-8">
              <p className="leading-relaxed text-ink-muted">
                Centralized operators — telecoms, mapping companies, utilities —
                win on density and freshness by owning capital-intensive hardware
                fleets outright. That capital requirement is the real moat, not
                the software.
              </p>
              <p className="leading-relaxed text-ink-muted">
                Stellar&rsquo;s fee and finality profile is built for exactly this:
                high-frequency, small-value payouts. What&rsquo;s missing is a shared
                layer a new vertical can build on without re-implementing
                everything underneath it.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
