import { SectionHeading } from "@/components/landing/section-heading";
import { Reveal } from "@/components/landing/reveal";

const layers = [
  {
    n: "01",
    name: "Device Registry",
    kind: "generic",
    detail:
      "A one-time Soroban contract call. Every device registers with a device ID, a public key, a declared vertical, and a data-scope declaration.",
    tag: "register_device()",
  },
  {
    n: "02",
    name: "Verification Modules",
    kind: "pluggable",
    detail:
      "Each vertical supplies its own proof logic as a Soroban contract behind a shared interface — GPS plausibility, imagery QA, throughput attestation, whatever counts as \u201Creal\u201D for that hardware.",
    tag: "submit_proof(device_id, payload, signature) → contribution_score",
  },
  {
    n: "03",
    name: "Reward Engine",
    kind: "generic",
    detail:
      "Turns a contribution score into a payout using a density-aware curve — under-covered contribution earns more, saturated contribution earns less. Curve parameters are set per vertical.",
    tag: "score → payout_curve() → amount",
  },
  {
    n: "04",
    name: "Streaming Settlement",
    kind: "generic",
    detail:
      "Payouts settle as continuous micro-streams in USDC or EURC, per unit of verified contribution. No minimum payout threshold. No batching delay.",
    tag: "stream(operator, amount, USDC | EURC)",
  },
];

export function Architecture() {
  return (
    <section id="architecture" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          index="§02"
          eyebrow="Network Architecture"
          title="4 layers. 3 of them you never have to touch."
          description="Gridwork separates the generic parts of a DePIN system from the one part that actually varies by hardware vertical: what counts as a valid unit of contribution."
        />

        <div className="mt-14 divide-y divide-line border-y border-line">
          {layers.map((layer, i) => (
            <Reveal key={layer.n} delay={i * 70}>
              <div className="grid gap-4 py-7 sm:grid-cols-[80px_1fr] sm:gap-8 lg:grid-cols-[80px_260px_1fr_auto]">
                <span className="font-mono text-sm text-ink-faint">{layer.n}</span>

                <div className="flex items-start gap-3 lg:items-center">
                  <h3 className="text-lg font-medium text-ink">{layer.name}</h3>
                </div>

                <p className="max-w-xl leading-relaxed text-ink-muted">
                  {layer.detail}
                </p>

                <div className="flex items-start gap-3 lg:items-center lg:justify-end">
                  <span
                    className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${
                      layer.kind === "pluggable"
                        ? "border-signal/40 text-signal"
                        : "border-line text-ink-faint"
                    }`}
                  >
                    {layer.kind}
                  </span>
                </div>
              </div>
              <div className="hidden pb-6 pl-[calc(80px+2rem)] lg:block">
                <code className="font-mono text-xs text-ink-faint">{layer.tag}</code>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
