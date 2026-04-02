import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { Cpu, GraduationCap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "AI Strategy & Implementation",
    subtitle: "For leaders with a problem to solve.",
    description:
      "From a complimentary 60-minute strategy review through roadmap design to full hands-on implementation, we build AI systems that integrate into your operation and deliver measurable ROI.",
    cta: { label: "Explore consulting", href: "/services" },
    icon: Cpu,
    accent: "border-t-blueprint",
    iconBg: "bg-blueprint/10",
    iconColor: "text-blueprint",
  },
  {
    title: "Executive Education & Training",
    subtitle: "For leaders who want their team to learn.",
    description:
      "Practical, operator-focused workshops and executive briefings that give your leadership team the AI fluency to make informed decisions — no academic theory, only applied knowledge.",
    cta: { label: "Explore education", href: "/services" },
    icon: GraduationCap,
    accent: "border-t-[#8500FF]",
    iconBg: "bg-[#8500FF]/10",
    iconColor: "text-[#8500FF]",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-wash py-16 md:py-[120px]">
      <Container>
        <FadeIn>
          <SectionLabel>HOW WE ENGAGE</SectionLabel>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="mt-6 font-display text-ink">
            Two capabilities. One mission.
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-4 text-charcoal">
            Whether you need hands-on implementation or strategic training,
            every engagement starts with understanding your business.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={300 + i * 100}>
                <div
                  className={`group rounded-lg border border-gridline border-t-[3px] ${service.accent} bg-canvas p-12 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,42,74,0.08)] hover:-translate-y-0.5`}
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-lg ${service.iconBg}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${service.iconColor}`}
                      strokeWidth={1.6}
                    />
                  </div>
                  <h3 className="mt-5 font-sans text-[22px] font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-1 font-sans text-base italic text-charcoal">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 text-charcoal">{service.description}</p>
                  <Link
                    href={service.cta.href}
                    className="group/link mt-6 inline-flex items-center gap-1 font-sans text-base font-medium text-blueprint transition-colors hover:text-blueprint-hover"
                  >
                    {service.cta.label}{" "}
                    <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
