"use client";

import { useEffect, useRef, useState } from "react";

const CURRENCY_FORMAT = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 6,
  maximumFractionDigits: 6,
});

/**
 * A hardware-readout-style ticking counter that mirrors Gridwork's
 * per-second, no-minimum-threshold settlement model described in the spec.
 * Values are illustrative, not pulled from a live chain feed.
 */
export function StreamCounter() {
  const [total, setTotal] = useState(48213.104822);
  const frame = useRef<number | undefined>(undefined);
  const last = useRef<number>(0);

  useEffect(() => {
    last.current = Date.now();
    const perMs = 0.014 / 1000;

    const tick = () => {
      const now = Date.now();
      const elapsed = now - last.current;
      last.current = now;
      setTotal((prev) => prev + elapsed * perMs);
      frame.current = requestAnimationFrame(tick);
    };

    frame.current = requestAnimationFrame(tick);
    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, []);

  const [whole, fraction] = CURRENCY_FORMAT.format(total).split(".");

  return (
    <div className="rounded-lg border border-line bg-panel p-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-faint">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 animate-blink rounded-full bg-settle"
          />
          Live settlement demo
        </span>
        <span className="font-mono text-[11px] text-ink-faint">USDC</span>
      </div>

      <p className="mt-3 font-mono text-4xl font-medium tabular text-ink sm:text-[2.75rem]">
        <span aria-hidden="true">
          ${whole}.
          <span className="text-ink-faint">{fraction}</span>
        </span>
        <span className="sr-only">
          {CURRENCY_FORMAT.format(total)} US dollar coin streamed to device operators, and
          climbing
        </span>
      </p>

      <p className="mt-2 font-mono text-[11px] text-ink-faint">
        Streamed to device operators &middot; updates every second &middot; no minimum payout
      </p>
    </div>
  );
}
