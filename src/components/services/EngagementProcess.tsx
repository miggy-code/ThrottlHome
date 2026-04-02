import {
  ClipboardCheck,
  SlidersHorizontal,
  Rocket,
  BarChart3,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { BlueprintGrid } from "@/components/global/BlueprintGrid";

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Audit",
    description:
      "We learn your tools, workflows, team structure, and pain points. No recommendations until we understand the operation.",
  },
  {
    icon: SlidersHorizontal,
    number: "02",
    title: "Customize",
    description:
      "Every session, curriculum, or system is designed around your specific context — your industry, your tools, your people.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Deliver",
    description:
      "Hands-on execution. Whether it's a workshop or a production system, we build alongside your team so knowledge transfers in real time.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Measure",
    description:
      "We define success metrics upfront and track them. If it's not creating measurable value, we adjust until it does.",
  },
];

export function EngagementProcess() {
  return (
    <section className="relative bg-wash py-16 md:py-[100px]">
      <BlueprintGrid opacity={0.12} />

      <Container className="relative z-10">
        <FadeIn>
          <SectionLabel>How We Engage</SectionLabel>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-6 font-display text-ink">
            Audit. Customize. Deliver. Measure.
          </h2>
        </FadeIn>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={200 + i * 100}>
                <div className="relative">
                  <span className="font-mono text-[48px] font-bold leading-none text-gridline">
                    {step.number}
                  </span>

                  <div className="mt-3 flex items-center gap-2.5">
                    <Icon
                      className="h-5 w-5 text-blueprint"
                      strokeWidth={1.6}
                    />
                    <h3 className="font-sans text-[18px] font-semibold text-ink">
                      {step.title}
                    </h3>
                  </div>

                  <p className="mt-3 font-sans text-[15px] leading-relaxed text-charcoal">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
