import { SectionHeading } from "@/components/landing/section-heading";
import { Reveal } from "@/components/landing/reveal";

const specs: { param: string; value: string; note?: string }[] = [
  { param: "Chain", value: "Stellar / Soroban" },
  { param: "Settlement asset", value: "USDC, EURC", note: "no native protocol token" },
  { param: "Payout minimum", value: "$0.00", note: "no batching delay" },
  { param: "Settlement model", value: "Continuous stream", note: "per unit of contribution" },
  { param: "Typical finality", value: "< 5 s" },
  { param: "Typical fee per transaction", value: "< $0.01" },
  { param: "Reward curve", value: "Density-aware decay", note: "configurable per vertical" },
  { param: "Verification interface", value: "submit_proof() → contribution_score" },
  { param: "Governance unit", value: "GIP", note: "Gridwork Improvement Proposal" },
  { param: "Anti-Sybil model", value: "Plausibility checks + reward decay" },
];

export function Datasheet() {
  return (
    <section id="datasheet" className="border-b border-line">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          index="§04"
          eyebrow="Protocol Datasheet"
          title="The numbers, without the pitch."
        />

        <Reveal delay={100}>
          <div className="mt-12 overflow-hidden rounded-lg border border-line">
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">Gridwork protocol specification parameters</caption>
              <thead>
                <tr className="border-b border-line bg-panel">
                  <th
                    scope="col"
                    className="px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint"
                  >
                    Parameter
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-ink-faint"
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody>
                {specs.map((row, i) => (
                  <tr
                    key={row.param}
                    className={`border-b border-line last:border-b-0 ${
                      i % 2 === 1 ? "bg-panel/40" : ""
                    }`}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 text-sm font-normal text-ink-muted"
                    >
                      {row.param}
                    </th>
                    <td className="px-6 py-4 font-mono text-sm text-ink">
                      {row.value}
                      {row.note ? (
                        <span className="ml-2 text-ink-faint">— {row.note}</span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
