"use client";

import dynamic from "next/dynamic";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const StreamCounter = dynamic(
  () => import("@/components/landing/stream-counter").then((m) => m.StreamCounter),
  {
    ssr: false,
    loading: () => (
      <div
        className="h-33 rounded-lg border border-line bg-panel"
        aria-hidden="true"
      />
    ),
  }
);

const pipeline = [
  { id: "device", label: "Device" },
  { id: "verify", label: "Verification" },
  { id: "reward", label: "Reward Engine" },
  { id: "settle", label: "Settlement" },
  { id: "operator", label: "Operator" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-line bg-blueprint-grid bg-void"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,165,60,0.10),transparent)]"
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            <span className="text-signal">Spec v0.1</span>
            <span aria-hidden="true">&middot;</span>
            <span>Soroban &middot; Stellar</span>
          </div>

          <h1 className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            Pay physical infrastructure the moment it proves itself.
          </h1>

          <p className="mt-6 max-w-lg text-balance text-lg leading-relaxed text-ink-muted">
            Gridwork is a Soroban-native rewards layer for DePIN hardware — sensors,
            mesh nodes, weather stations, solar arrays. Devices submit proof of
            real-world contribution and get paid in USDC or EURC, streamed per
            second, with no minimum payout and no batching delay.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href="#architecture" variant="primary">
              See the Architecture
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
            <Button href="#datasheet" variant="secondary">
              <FileText size={16} aria-hidden="true" />
              Read the Datasheet
            </Button>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                Settlement fee
              </dt>
              <dd className="mt-1 font-mono text-xl text-ink">&lt;$0.01</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                Finality
              </dt>
              <dd className="mt-1 font-mono text-xl text-ink">&lt;5s</dd>
            </div>
            <div>
              <dt className="font-mono text-[11px] uppercase tracking-wide text-ink-faint">
                Payout minimum
              </dt>
              <dd className="mt-1 font-mono text-xl text-ink">$0.00</dd>
            </div>
          </dl>
        </div>

        <div>
          <StreamCounter />

          <div className="mt-4 rounded-lg border border-line bg-panel p-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
              Pipeline
            </p>
            <ol className="mt-4 flex flex-col gap-0">
              {pipeline.map((stage, i) => (
                <li key={stage.id} className="flex items-center gap-3">
                  <div className="flex flex-col items-center">
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border font-mono text-[11px] ${
                        i === 2
                          ? "border-signal text-signal"
                          : "border-line text-ink-muted"
                      }`}
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    {i < pipeline.length - 1 ? (
                      <svg width="2" height="22" aria-hidden="true">
                        <line
                          x1="1"
                          y1="0"
                          x2="1"
                          y2="22"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="3 5"
                          className="animate-dash-flow text-ink-faint"
                        />
                      </svg>
                    ) : null}
                  </div>
                  <span className="pb-5.5 pt-1 text-sm text-ink-muted">
                    {stage.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
