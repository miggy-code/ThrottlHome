import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BlueprintGrid } from "@/components/global/BlueprintGrid";
import { GlobalCTA } from "@/components/global/GlobalCTA";

export const metadata: Metadata = {
  title: "Services — Throttl",
  description:
    "AI Strategy & Implementation and Executive Education — built around your business reality.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative bg-canvas pt-[72px]">
        <BlueprintGrid opacity={0.2} />
        <Container className="relative z-10 py-16 md:py-[120px]">
          <h1 className="font-display text-[40px] font-bold text-ink md:text-[48px]">
            How We Work With You
          </h1>
          <p className="mt-6 max-w-[600px] text-charcoal">
            Every engagement is built around your business reality. We bring the
            AI expertise — you bring the operational context. Together, we build
            what actually works.
          </p>
          <p className="mt-8 font-sans text-sm font-medium uppercase tracking-[0.08em] text-blueprint">
            Full page coming soon.
          </p>
        </Container>
      </section>
      <GlobalCTA />
    </>
  );
}
