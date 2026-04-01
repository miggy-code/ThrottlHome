"use client";

import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BlueprintGrid } from "@/components/global/BlueprintGrid";
import { AdoptionChart } from "@/components/home/AdoptionChart";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/cn";

const steps = [
  {
    number: "1",
    title: "AI Peer Review",
    description:
      "A focused conversation with Gabriel to assess your current AI landscape, identify high-value opportunities, and cut through vendor noise. Complimentary.",
    duration: "60 minutes",
  },
  {
    number: "2",
    title: "Roadmap Workshop",
    description:
      "A structured session to design your AI implementation strategy, with clear priorities, realistic timelines, and defined success metrics.",
    duration: "Half-day",
  },
  {
    number: "3",
    title: "Implementation & Training",
    description:
      "Hands-on building and integration of AI systems into your operations, with parallel training so your team owns the capability long-term.",
    duration: "Weeks to months",
  },
];

export function ProcessSection() {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.15,
  });

  return (
    <section id="process" className="relative bg-canvas py-16 md:py-[120px]">
      <BlueprintGrid opacity={0.15} />

      <Container className="relative z-10">
        <div
          className={cn(
            "transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1.0)]",
            isIntersecting ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
          )}
        >
          <SectionLabel>THE PROCESS</SectionLabel>
          <h2 className="mt-6 font-display text-ink">
            From conversation to capability.
          </h2>
        </div>

        <div ref={ref} className="relative mt-16">
          {/* Connecting line — desktop only */}
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gridline md:block" />

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* Step circle */}
                <div
                  className={cn(
                    "relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 transition-all duration-200 md:mx-0",
                    isIntersecting
                      ? "border-blueprint bg-blueprint text-white"
                      : "border-blueprint bg-white text-blueprint",
                  )}
                  style={{
                    transitionDelay: `${i * 200}ms`,
                  }}
                >
                  <span className="font-sans text-lg font-semibold">
                    {step.number}
                  </span>
                </div>

                {/* Step content */}
                <div
                  className={cn(
                    "mt-6 transition-all duration-[600ms] [transition-timing-function:cubic-bezier(0.25,0.1,0.25,1.0)]",
                    isIntersecting
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6",
                  )}
                  style={{ transitionDelay: `${200 + i * 200}ms` }}
                >
                  <h3 className="font-sans text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base text-charcoal">
                    {step.description}
                  </p>
                  <p className="mt-3 font-sans text-sm font-medium uppercase tracking-[0.08em] text-charcoal/60">
                    {step.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ── AI Adoption Chart ── */}
        <AdoptionChart />
      </Container>
    </section>
  );
}
