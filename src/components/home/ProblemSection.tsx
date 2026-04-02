"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// ─── Animated Counter ────────────────────────────────────────────────────────

function AnimatedStat({
  target,
  prefix,
  suffix,
  label,
  started,
}: {
  target: number;
  prefix?: string;
  suffix?: string;
  label: string;
  started: boolean;
}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  }, [target]);

  useEffect(() => {
    if (!started) return;
    animate();
    return () => cancelAnimationFrame(rafRef.current);
  }, [started, animate]);

  return (
    <div>
      <p className="font-display text-5xl font-bold text-ink tabular-nums">
        {prefix}
        {started ? value : 0}
        {suffix}
      </p>
      <p className="mt-2 font-sans text-sm text-charcoal">{label}</p>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

const stats = [
  {
    target: 73,
    suffix: "%",
    label: "of AI projects never reach production.",
  },
  {
    target: 87,
    suffix: "%",
    label: "of data science projects never make it to market.",
  },
  {
    target: 300,
    prefix: "$",
    suffix: "B+",
    label: "wasted annually on failed digital transformations.",
  },
];

export function ProblemSection() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
  });
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isIntersecting && !hasStarted) setHasStarted(true);
  }, [isIntersecting, hasStarted]);

  return (
    <section className="bg-wash py-12 md:py-[120px]">
      <Container>
        <div className="grid grid-cols-1 gap-8 md:gap-16 md:grid-cols-[1fr_0.67fr]">
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

          {/* Right column — animated stats */}
          <div ref={ref} className="flex flex-col justify-center gap-0">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={300 + i * 120}>
                <div
                  className={`py-8 ${i < stats.length - 1 ? "border-b border-gridline" : ""}`}
                >
                  <AnimatedStat
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    label={stat.label}
                    started={hasStarted}
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
