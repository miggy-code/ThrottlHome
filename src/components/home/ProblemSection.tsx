import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { number: "73%", label: "of AI projects never reach production." },
  { number: "87%", label: "of data science projects never make it to market." },
  {
    number: "$300B+",
    label: "wasted annually on failed digital transformations.",
  },
];

export function ProblemSection() {
  return (
    <section className="bg-wash py-16 md:py-[120px]">
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_0.67fr]">
          {/* Left column — copy */}
          <div>
            <FadeIn>
              <SectionLabel>THE CHALLENGE</SectionLabel>
            </FadeIn>

            <FadeIn delay={100}>
              <h2 className="mt-6 font-display text-ink">
                AI is everywhere. Clarity is not.
              </h2>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-6 space-y-4 text-charcoal">
                <p>
                  You&apos;re hearing about AI from every vendor, every
                  conference, every board meeting. But the gap between what AI
                  promises and what it delivers in your operation is vast.
                </p>
                <p>
                  Most businesses don&apos;t need more AI tools — they need
                  someone who understands their business well enough to know
                  where AI actually creates value, and where it&apos;s just
                  noise.
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Right column — stats */}
          <FadeIn delay={300}>
            <div className="flex flex-col justify-center gap-0">
              {stats.map((stat, i) => (
                <div
                  key={stat.number}
                  className={`py-8 ${i < stats.length - 1 ? "border-b border-gridline" : ""}`}
                >
                  <p className="font-display text-5xl font-bold text-ink">
                    {stat.number}
                  </p>
                  <p className="mt-2 font-sans text-sm text-charcoal">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
