import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { TrainingTiers } from "@/components/services/TrainingTiers";

export function TrainingSection() {
  return (
    <section className="bg-canvas py-16 md:py-[120px]">
      <Container>
        <FadeIn>
          <SectionLabel>Executive AI Education</SectionLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-6 font-display text-ink">
            Training built around what your team actually does.
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-4 max-w-[640px] text-charcoal">
            We don&apos;t teach generic &ldquo;intro to AI&rdquo; courses. Every
            session is built around the tools your company already pays for, like
            ChatGPT, Claude, and Copilot. Then we apply them to the tasks your people actually do every day.
          </p>
        </FadeIn>

        <div className="mt-12">
          <TrainingTiers />
        </div>
      </Container>
    </section>
  );
}
