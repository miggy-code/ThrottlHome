import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { Cpu, GraduationCap } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Executive AI Education",
    subtitle: "Flagship",
    description:
      "Highly tailored, multi-day intensives that bridge the gap between AI hype and operational reality. We give your managers the fluency and frameworks to safely implement AI without relying on outside tech teams.",
    cta: { label: "Explore education programs", href: "/services" },
    icon: GraduationCap,
    accent: "border-t-[#8500FF]",
    iconBg: "bg-[#8500FF]/10",
    iconColor: "text-[#8500FF]",
  },
  {
    title: "Custom AI Solutions",
    subtitle: "Specialized",
    description:
      "Sometimes the roadmap your team designs during the workshop requires advanced engineering. For select clients, we act as a fractional development team, building the bespoke LLM and automation workflows you need, while your managers oversee the strategy.",
    cta: { label: "Explore solutions", href: "/services" },
    icon: Cpu,
    accent: "border-t-blueprint",
    iconBg: "bg-blueprint/10",
    iconColor: "text-blueprint",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-wash py-12 md:py-[120px]">
      <Container>
        <FadeIn>
          <SectionLabel>HOW WE ENGAGE</SectionLabel>
        </FadeIn>

        <FadeIn delay={100}>
          <h2 className="mt-6 font-display text-ink">
            Education first. Engineering when you need it.
          </h2>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="mt-4 text-charcoal">
            Every engagement starts with your business. Most start&mdash;and
            end&mdash;with education.
          </p>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <FadeIn key={service.title} delay={300 + i * 100} className="flex h-full">
                <div
                  className={`group flex h-full w-full flex-col rounded-lg border border-gridline border-t-[3px] ${service.accent} bg-canvas p-10 transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,42,74,0.08)] hover:-translate-y-0.5 md:p-12`}
                >
                  <div
                    className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${service.iconBg}`}
                  >
                    <Icon
                      className={`h-6 w-6 ${service.iconColor}`}
                      strokeWidth={1.6}
                    />
                  </div>
                  <h3 className="mt-5 shrink-0 font-sans text-[22px] font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-1 shrink-0 font-sans text-base italic text-charcoal">
                    {service.subtitle}
                  </p>
                  <p className="mt-4 grow text-charcoal">{service.description}</p>
                  <Link
                    href={service.cta.href}
                    className="group/link mt-6 mr-auto inline-flex shrink-0 items-center gap-1 font-sans text-base font-medium text-blueprint transition-colors hover:text-blueprint-hover"
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
