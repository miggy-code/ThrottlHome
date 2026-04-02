import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "AI Management Training",
    description:
      "We run intensive, hands-on programs that give your managers the skills and confidence to use AI tools effectively — and drive real value from them across your organisation.",
    bullets: [
      "Practical AI tool workshops for management teams",
      "Frameworks for identifying AI opportunities in your ops",
      "Ongoing coaching to embed new habits",
      "No jargon — just results",
    ],
    cta: { label: "Explore education programs", href: "/services" },
    image: "/media/ai-training.webp",
    accent: "border-t-[#8500FF]",
  },
  {
    title: "In-House AI Enablement",
    description:
      "Our teams embed directly into your business, working shoulder-to-shoulder with your management to identify, build, and roll out AI solutions that your employees actually use.",
    bullets: [
      "Dedicated Throttl team embedded in your organisation",
      "End-to-end AI implementation alongside your people",
      "Upskilling employees as we build",
      "You own the outcomes — not a vendor dependency",
    ],
    cta: { label: "Explore solutions", href: "/services" },
    image: "/media/ai-implementation.jpg",
    accent: "border-t-blueprint",
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
            return (
              <FadeIn key={service.title} delay={300 + i * 100} className="flex h-full">
                <div
                  className={`group flex h-full w-full flex-col overflow-hidden rounded-lg border border-gridline border-t-[3px] ${service.accent} bg-canvas transition-all duration-200 hover:shadow-[0_8px_32px_rgba(27,42,74,0.08)] hover:-translate-y-0.5`}
                >
                  <div className="relative aspect-video w-full overflow-hidden border-b border-gridline/50">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  
                  <div className="flex flex-col grow p-8 md:p-10">
                    <h3 className="shrink-0 font-sans text-[22px] font-semibold text-ink">
                      {service.title}
                    </h3>
                    
                    <p className="mt-3 shrink-0 text-charcoal">{service.description}</p>
                    
                    <ul className="mt-6 flex grow flex-col gap-3">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-charcoal">
                          <span className="shrink-0 text-[#8500FF]">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={service.cta.href}
                      className="group/link mt-8 mr-auto inline-flex shrink-0 items-center gap-1 font-sans text-base font-medium text-blueprint transition-colors hover:text-blueprint-hover"
                    >
                      {service.cta.label}{" "}
                      <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                        &rarr;
                      </span>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
