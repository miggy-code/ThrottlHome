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
    title: "Audit (The Reality Check)",
    description:
      "We don't do off-the-shelf curriculums. We analyze your current tools, your team's actual baseline, and your operational bottlenecks before we design your syllabus.",
  },
  {
    icon: SlidersHorizontal,
    number: "02",
    title: "Customize (The Playbook)",
    description:
      "We build a multi-day executive training experience strictly around your industry and your specific data. You learn on your own use-cases, not generic examples.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Equip (The Workshop)",
    description:
      "Intensive, hands-on sessions for your C-suite and managers. We demystify the tech and install best practices so your leadership can confidently direct AI adoption.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Execute (The Handoff)",
    description:
      "Your team leaves with a concrete, de-risked roadmap and the internal fluency to execute it. If you need us to help build the complex workflows later, we’re here.",
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
            Audit. Customize. Equip. Execute.
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
