import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/landing/reveal";

export function CallToAction() {
  return (
    <section className="border-b border-line bg-blueprint-grid bg-void">
      <div className="mx-auto max-w-7xl px-6 py-24 text-center">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3 py-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            <span className="text-signal">In development</span>
            <span aria-hidden="true">&middot;</span>
            <span>Stellar Wave submission</span>
          </div>

          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Building a DePIN vertical? Start with the interface.
          </h2>
          <p className="mt-4 max-w-md text-balance leading-relaxed text-ink-muted">
            The registry, reward engine, and settlement contracts are generic.
            Bring your own verification module and Gridwork handles the rest.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="https://github.com/gridwork-protocol/gridwork" variant="primary">
              <GithubIcon className="h-4 w-4" aria-hidden="true" />
              View Repository
            </Button>
            <Button
              href="https://github.com/gridwork-protocol/gridwork#readme"
              variant="secondary"
            >
              Read Full Spec
              <ArrowUpRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
