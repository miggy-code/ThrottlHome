import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { BlueprintGrid } from "@/components/global/BlueprintGrid";
import { GlobalCTA } from "@/components/global/GlobalCTA";

export const metadata: Metadata = {
  title: "About | Throttl",
  description:
    "Operator instincts. Engineering depth. Meet the two founders behind Throttl.",
};

// ─── Founder data ─────────────────────────────────────────────────────────────

const founders = [
  {
    name: "Gabriel Gavrilov",
    title: "Co-Founder",
    role: "Strategy & Client Engagement",
    photo: "/media/gabriel_prof.jpg",
    accent: "border-[#8500FF]/25",
    accentBg: "bg-[#8500FF]/5",
    accentColor: "text-[#8500FF]",
    dotColor: "rgba(133,0,255,0.4)",
    bio: [
      "Gabriel is currently COO of a multi-million dollar international services company — which means he has lived, firsthand, the challenge of driving AI adoption inside a complex, real-world organization.",
      "He co-founded Throttl because he kept seeing the same pattern: leadership teams buying AI tools on vendor promises, then watching those tools gather dust because no one built the internal fluency to use them. He built this firm to close that gap from the inside out.",
    ],
    credentials: [
      "COO, multi-million dollar international services company",
      "Co-founded Neuron Education (edtech, 2021–2023)",
      "20+ years operational and commercial leadership",
    ],
  },
  {
    name: "Miguel Padilla",
    title: "Co-Founder",
    role: "AI Architecture & Engineering",
    photo: "/media/miguel_prof.jpg",
    accent: "border-blueprint/25",
    accentBg: "bg-blueprint/5",
    accentColor: "text-blueprint",
    dotColor: "rgba(59,125,216,0.4)",
    bio: [
      "Miguel spent two years as an AI Reinforcement Engineer at DataAnnotation — literally training the large language models that enterprise teams now depend on. That work gave him rare, ground-level intuition for what these systems can and cannot do reliably.",
      "He brings that depth to every Throttl engagement: not just knowing how to use AI tools, but understanding how they work at the architecture level — and where they break down under real operational conditions.",
    ],
    credentials: [
      "AI Reinforcement Engineer, DataAnnotation (2023–2025)",
      "CTO, Neuron Education — scaled to hundreds of daily users",
      "Founding Engineer, Compute Algo Trading",
      "Background in fintech and edtech startups",
    ],
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-ink pt-[72px]">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div
            className="absolute -left-[200px] top-[20%] h-[600px] w-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(133,0,255,0.1) 0%, transparent 70%)" }}
          />
          <div
            className="absolute -right-[100px] bottom-0 h-[500px] w-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(59,125,216,0.08) 0%, transparent 70%)" }}
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 60px)",
          }}
        />

        <Container className="relative z-10 py-20 md:py-[120px]">
          <FadeIn>
            <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-white/30">
              Who we are
            </span>
          </FadeIn>
          <FadeIn delay={100}>
            <h1 className="mt-6 max-w-[600px] font-display text-4xl font-bold leading-[1.12] text-white sm:text-[40px] md:text-[52px]">
              Operator instincts.{" "}
              <span className="text-[#8500FF]">Engineering depth.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-[500px] font-sans text-lg leading-relaxed text-white/55">
              Most AI consultants know the technology. We know what it&apos;s
              like to sit on the other side of the table — and actually have to
              make it work.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ── Origin story ── */}
      <section className="relative bg-canvas py-16 md:py-[100px]">
        <BlueprintGrid opacity={0.12} />
        <Container className="relative z-10">
          <div className="mx-auto max-w-[680px]">
            <FadeIn>
              <SectionLabel>Why we started Throttl</SectionLabel>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="mt-6 font-display text-ink">
                We met building a product. We stayed to fix the adoption problem.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mt-6 space-y-4 text-charcoal">
                <p>
                  Gabriel and Miguel first worked together at Neuron Education — Gabriel on operations and growth, Miguel leading engineering. That experience taught them something that has stuck: the technology is rarely the hard part. Getting people to actually use it is.
                </p>
                <p>
                  When large language models became genuinely useful business tools, they both watched the same pattern repeat across every industry: vendors selling transformation, executives buying subscriptions, and the tools quietly gathering dust because no one built the internal fluency to use them. Gabriel was living it as a COO. Miguel was, literally, training the models everyone was failing to deploy.
                </p>
                <p>
                  Throttl is their answer — a firm built on the belief that the gap between AI investment and AI ROI is a people problem, not a technology problem.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* ── Founders ── */}
      <section className="bg-wash py-16 md:py-[120px]">
        <Container>
          <FadeIn>
            <SectionLabel>The team</SectionLabel>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 className="mt-6 font-display text-ink">
              Two perspectives. One firm.
            </h2>
          </FadeIn>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
            {founders.map((founder, i) => (
              <FadeIn key={founder.name} delay={200 + i * 120}>
                <div className={`overflow-hidden rounded-xl border bg-canvas ${founder.accent}`}>
                  {/* Photo */}
                  <div className="relative h-[280px] w-full overflow-hidden bg-wash">
                    <Image
                      src={founder.photo}
                      alt={`${founder.name}, ${founder.title} at Throttl`}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-canvas/60 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <span className={`font-sans text-[12px] font-semibold uppercase tracking-wider ${founder.accentColor}`}>
                      {founder.title} &middot; {founder.role}
                    </span>
                    <h3 className="mt-1 font-display text-[26px] font-bold text-ink">
                      {founder.name}
                    </h3>

                    <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-charcoal">
                      {founder.bio.map((para, j) => (
                        <p key={j}>{para}</p>
                      ))}
                    </div>

                    <div className={`mt-8 rounded-lg border p-5 ${founder.accent} ${founder.accentBg}`}>
                      <p className={`mb-3 font-sans text-[11px] font-semibold uppercase tracking-wider ${founder.accentColor}`}>
                        Background
                      </p>
                      <ul className="space-y-2">
                        {founder.credentials.map((cred) => (
                          <li key={cred} className="flex items-start gap-2.5 font-sans text-[14px] text-charcoal">
                            <span
                              className="mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full"
                              style={{ backgroundColor: founder.dotColor }}
                            />
                            {cred}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Closing note */}
          <FadeIn delay={400}>
            <div className="mt-16 flex flex-col items-center gap-4 text-center">
              <p className="max-w-[520px] font-sans text-[15px] leading-relaxed text-charcoal/70">
                We don&apos;t have a vendor relationship with any AI company and we don&apos;t earn
                commissions on software you buy. Our only incentive is that your team
                genuinely gets better at this.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-1.5 font-sans text-base font-semibold text-blueprint transition-colors hover:text-blueprint-hover"
              >
                Book a Strategy Review
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  &rarr;
                </span>
              </Link>
            </div>
          </FadeIn>
        </Container>
      </section>

      <GlobalCTA />
    </>
  );
}
