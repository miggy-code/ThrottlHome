import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BlueprintGrid } from "@/components/global/BlueprintGrid";
import { GlobalCTA } from "@/components/global/GlobalCTA";

export const metadata: Metadata = {
  title: "About — Throttl",
  description:
    "Built by operators, for operators. Meet the team behind Throttl.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-canvas pt-[72px]">
        <BlueprintGrid opacity={0.2} />
        <Container className="relative z-10 py-16 md:py-[120px]">
          <h1 className="font-display text-[40px] font-bold text-ink md:text-[48px]">
            Built by Operators. For Operators.
          </h1>
          <p className="mt-6 max-w-[600px] text-charcoal">
            Two founders who saw the gap between AI hype and business reality,
            and built a firm to close it.
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
