import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Problem } from "@/components/landing/problem";
import { Architecture } from "@/components/landing/architecture";
import { Verticals } from "@/components/landing/verticals";
import { Datasheet } from "@/components/landing/datasheet";
import { PriorArt } from "@/components/landing/prior-art";
import { Roadmap } from "@/components/landing/roadmap";
import { CallToAction } from "@/components/landing/call-to-action";
import { SiteFooter } from "@/components/landing/site-footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-signal focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-void"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Problem />
        <Architecture />
        <Verticals />
        <Datasheet />
        <PriorArt />
        <Roadmap />
        <CallToAction />
      </main>
      <SiteFooter />
    </>
  );
}
