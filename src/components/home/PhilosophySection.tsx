import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

export function PhilosophySection() {
  return (
    <section className="bg-canvas py-12 md:py-[120px]">
      <Container>
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          {/* ── Text column ── */}
          <div>
            <FadeIn>
              <SectionLabel>OUR APPROACH</SectionLabel>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="mt-6 font-display text-ink">
                We don&apos;t sell AI. We make it useful.
              </h2>
            </FadeIn>

            <div className="mt-8 space-y-4 text-charcoal">
              <FadeIn delay={200}>
                <p>
                  Throttl approaches every engagement through what we call
                  the Operator&apos;s Lens: the discipline of starting with your
                  business reality, not our technology stack, and working backward to find
                  where AI genuinely moves the needle.
                </p>
              </FadeIn>

              <FadeIn delay={300}>
                <p>
                  True expertise means understanding where AI creates value and
                  where it doesn&apos;t. We&apos;re as likely to tell you not to
                  build something as we are to build it. That honesty is what sets
                  us apart from vendors who profit from complexity.
                </p>
              </FadeIn>
            </div>

            {/* Pull quote */}
            <FadeIn delay={400}>
              <blockquote className="mt-10 border-l-4 border-blueprint pl-6">
                <p className="font-display text-2xl italic text-ink leading-relaxed">
                  &ldquo;The best AI strategy sometimes means knowing exactly
                  where not to use AI.&rdquo;
                </p>
                <cite className="mt-4 block font-sans text-sm not-italic text-charcoal">
                  - Gabriel, Co-Founder
                </cite>
              </blockquote>
            </FadeIn>
          </div>

          {/* ── Image column ── */}
          <FadeIn delay={200} direction="right">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(27,42,74,0.12)]">
                <Image
                  src="/meeting.jpg"
                  alt="Strategic planning session: mapping business outcomes before choosing technology"
                  width={600}
                  height={440}
                  className="h-auto w-full object-cover"
                />
                {/* Subtle gradient overlay at bottom for depth */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/20 to-transparent" />
              </div>

              {/* Decorative corner accent */}
              <div className="absolute -right-3 -top-3 h-16 w-16 rounded-br-xl border-b-2 border-r-2 border-blueprint/20" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
