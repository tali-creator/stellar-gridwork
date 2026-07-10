import { Reveal } from "@/components/landing/reveal";

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = "left",
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={align === "center" ? "text-center" : ""}>
      <div
        className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-ink-faint ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        <span className="text-signal">{index}</span>
        <span aria-hidden="true" className="h-px w-8 bg-line" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-xl text-balance text-[15px] leading-relaxed text-ink-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
