"use client";

import { Container } from "@/components/ui/Container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

const principles = [
  "We don't sell vaporware.",
  "We don't run 18-month engagements that go nowhere.",
  "We don't recommend technology for its own sake.",
  "We don't hide behind jargon to justify our fees.",
  "We don't pretend every problem needs AI.",
];

export function ManifestoSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section className="relative overflow-hidden bg-ink py-16 md:py-[100px]">
      {/* Gradient mesh */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -left-[200px] top-[10%] h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(133,0,255,0.1) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-[100px] bottom-[10%] h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,125,216,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 60px)",
        }}
      />

      <Container className="relative z-10">
        <div ref={ref} className="mx-auto max-w-[720px] text-center">
          <p
            className={cn(
              "font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-white/30 transition-all duration-700",
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            What we believe
          </p>

          <h2
            className={cn(
              "mt-6 font-display text-[32px] font-bold leading-tight text-white md:text-[44px] transition-all duration-700 delay-100",
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
          >
            Honesty is our only{" "}
            <span className="text-[#8500FF]">unfair advantage.</span>
          </h2>

          {/* Anti-list */}
          <div className="mt-12 space-y-0">
            {principles.map((line, i) => (
              <div
                key={i}
                className={cn(
                  "border-t border-white/8 py-5 transition-all duration-600",
                  isIntersecting
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-6",
                )}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                <p className="font-sans text-[17px] font-medium text-white/70 md:text-[19px]">
                  {line}
                </p>
              </div>
            ))}
            <div className="border-t border-white/8" />
          </div>

          {/* Positive closer */}
          <p
            className={cn(
              "mt-10 font-display text-[20px] italic leading-relaxed text-white/50 md:text-[22px] transition-all duration-700",
              isIntersecting
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4",
            )}
            style={{ transitionDelay: "800ms" }}
          >
            We tell you the truth. Then we do the work.
          </p>
        </div>
      </Container>
    </section>
  );
}
