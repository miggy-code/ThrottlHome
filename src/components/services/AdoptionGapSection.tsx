import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { AdoptionGapStats } from "@/components/services/AdoptionGapStats";

export function AdoptionGapSection() {
  return (
    <section className="bg-wash py-16 md:py-[100px]">
      <Container>
        <FadeIn>
          <SectionLabel>The Adoption Gap</SectionLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-6 max-w-[600px] font-display text-ink">
            It&apos;s not a technology problem. It&apos;s a readiness problem.
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-4 max-w-[600px] text-charcoal">
            The organizations seeing real AI ROI aren't the ones with the
            most tools. They're the ones whose people know how to use
            them. The gap between purchase and productivity is where most AI
            investments die.
          </p>
        </FadeIn>

        <div className="mt-12">
          <AdoptionGapStats />
        </div>
      </Container>
    </section>
  );
}
