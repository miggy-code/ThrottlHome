import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";

const projects = [
  {
    type: "INVESTMENT ANALYSIS",
    description:
      "Built a system that evaluates investment opportunities using AI, replacing a manual process.",
    metric: "40+ hours/week reclaimed",
  },
  {
    type: "MARKET INTELLIGENCE",
    description:
      "Automated competitive analysis and market size estimation across product categories.",
    metric: "10x faster market analysis",
  },
  {
    type: "MARKETING AUTOMATION",
    description:
      "AI-powered email and marketing automation with consistent targeting and personalization.",
    metric: "3x qualified pipeline",
  },
];

export function ProofSection() {
  return (
    <section className="bg-wash py-12 md:py-[120px]">
      <Container>
        <FadeIn>
          <SectionLabel>RESULTS</SectionLabel>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="mt-6 font-display text-ink">
            Built for operators. Proven in practice.
          </h2>
        </FadeIn>

        {/* ── Team image banner ── */}
        <FadeIn delay={150}>
          <div className="relative mt-12 overflow-hidden rounded-xl">
            <Image
              src="/hands-on-desk-at-meeting.jpg"
              alt="Our team collaborating on AI implementation with real data and analysis"
              width={1200}
              height={400}
              className="h-[220px] w-full object-cover md:h-[300px]"
            />
            {/* Gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-ink/50 via-ink/20 to-transparent" />
            {/* Overlay text */}
            <div className="absolute inset-0 flex items-center px-8 md:px-12">
              <div>
                <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-white/60">
                  Real work, real results
                </p>
                <p className="mt-2 max-w-[400px] font-display text-[22px] font-bold leading-snug text-white md:text-[28px]">
                  Every number below came from an operator who needed answers, not demos.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Project cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((project, i) => (
            <FadeIn key={project.type} delay={200 + i * 100}>
              <div className="group relative overflow-hidden rounded-lg border border-gridline bg-canvas p-10 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(59,125,216,0.08)] hover:-translate-y-1 hover:border-blueprint/30">
                <span className="font-sans text-xs font-medium uppercase tracking-[0.08em] text-blueprint">
                  {project.type}
                </span>
                <p className="mt-4 text-base text-charcoal">
                  {project.description}
                </p>
                <p className="mt-6 font-display text-[32px] font-bold leading-tight text-ink transition-colors group-hover:text-blueprint">
                  {project.metric}
                </p>
                {/* Accent underline on hover */}
                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-blueprint transition-all duration-500 group-hover:w-full" />
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Founder spotlight */}
        <FadeIn delay={500}>
          <div className="mt-20 grid grid-cols-1 items-center gap-10 md:grid-cols-[280px_1fr]">
            {/* Headshot placeholder */}
            <div className="mx-auto h-[280px] w-[280px] rounded-[4px] border border-gridline bg-wash flex items-center justify-center md:mx-0">
              <span className="font-sans text-sm text-charcoal/40">
                Photo
              </span>
            </div>

            {/* Bio */}
            <div>
              <h3 className="font-display text-[28px] font-bold text-ink">
                Gabriel Gavrilov
              </h3>
              <p className="mt-1 font-sans text-base text-charcoal">
                Co-Founder &amp; Lead Advisor
              </p>
              <p className="mt-4 max-w-[540px] text-charcoal">
                With decades of operational and sales experience in traditional
                industries, Gabriel bridges the gap between what AI can do and
                what businesses actually need. His approach is rooted in
                real-world operations, not technology hype.
              </p>
              <Link
                href="/about"
                className="group mt-4 inline-flex items-center gap-1 font-sans text-base font-medium text-blueprint transition-colors hover:text-blueprint-hover"
              >
                Meet the full team{" "}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
