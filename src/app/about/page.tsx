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
      "10+ years operational and commercial leadership",
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

// ─── Hero graphic ─────────────────────────────────────────────────────────────

function FounderDiagram() {
  return (
    <svg
      viewBox="0 0 380 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full max-w-[420px]"
      aria-hidden="true"
    >
      {/* Outer decorative rings */}
      <circle cx="190" cy="170" r="158" stroke="white" strokeOpacity="0.03" strokeWidth="1" />
      <circle cx="190" cy="170" r="132" stroke="white" strokeOpacity="0.04" strokeWidth="1" />

      {/* Left semicircle — Operations / Gabriel — Blueprint */}
      <path
        d="M190,38 A132,132 0 0,0 190,302"
        fill="rgba(59,125,216,0.09)"
        stroke="rgba(59,125,216,0.45)"
        strokeWidth="1.5"
      />
      {/* Left inner dashed ring */}
      <path
        d="M190,88 A82,82 0 0,0 190,252"
        fill="none"
        stroke="rgba(59,125,216,0.18)"
        strokeWidth="1"
        strokeDasharray="3 6"
      />

      {/* Right semicircle — Engineering / Miguel — Purple */}
      <path
        d="M190,38 A132,132 0 0,1 190,302"
        fill="rgba(133,0,255,0.09)"
        stroke="rgba(133,0,255,0.45)"
        strokeWidth="1.5"
      />
      {/* Right inner dashed ring */}
      <path
        d="M190,88 A82,82 0 0,1 190,252"
        fill="none"
        stroke="rgba(133,0,255,0.18)"
        strokeWidth="1"
        strokeDasharray="3 6"
      />

      {/* Center dividing line */}
      <line
        x1="190" y1="38" x2="190" y2="302"
        stroke="white"
        strokeOpacity="0.12"
        strokeWidth="1"
        strokeDasharray="4 7"
      />

      {/* Connector lines from satellite dots to center */}
      <line x1="98" y1="118" x2="190" y2="170" stroke="rgba(59,125,216,0.1)" strokeWidth="1" />
      <line x1="76" y1="170" x2="190" y2="170" stroke="rgba(59,125,216,0.1)" strokeWidth="1" />
      <line x1="108" y1="222" x2="190" y2="170" stroke="rgba(59,125,216,0.1)" strokeWidth="1" />
      <line x1="282" y1="118" x2="190" y2="170" stroke="rgba(133,0,255,0.1)" strokeWidth="1" />
      <line x1="304" y1="170" x2="190" y2="170" stroke="rgba(133,0,255,0.1)" strokeWidth="1" />
      <line x1="272" y1="222" x2="190" y2="170" stroke="rgba(133,0,255,0.1)" strokeWidth="1" />

      {/* Left satellite dots */}
      <circle cx="98" cy="118" r="2.5" fill="rgba(59,125,216,0.55)" />
      <circle cx="76" cy="170" r="3" fill="rgba(59,125,216,0.45)" />
      <circle cx="108" cy="222" r="2.5" fill="rgba(59,125,216,0.55)" />
      <circle cx="138" cy="88" r="1.5" fill="rgba(59,125,216,0.3)" />
      <circle cx="138" cy="252" r="1.5" fill="rgba(59,125,216,0.3)" />

      {/* Right satellite dots */}
      <circle cx="282" cy="118" r="2.5" fill="rgba(133,0,255,0.55)" />
      <circle cx="304" cy="170" r="3" fill="rgba(133,0,255,0.45)" />
      <circle cx="272" cy="222" r="2.5" fill="rgba(133,0,255,0.55)" />
      <circle cx="242" cy="88" r="1.5" fill="rgba(133,0,255,0.3)" />
      <circle cx="242" cy="252" r="1.5" fill="rgba(133,0,255,0.3)" />

      {/* Top and bottom junction nodes */}
      <circle cx="190" cy="38" r="3" fill="white" fillOpacity="0.25" />
      <circle cx="190" cy="302" r="3" fill="white" fillOpacity="0.25" />

      {/* Center node */}
      <circle cx="190" cy="170" r="12" stroke="white" strokeOpacity="0.1" strokeWidth="1" />
      <circle cx="190" cy="170" r="6" fill="white" fillOpacity="0.55" />

      {/* Corner accents */}
      <rect x="18" y="18" width="18" height="18" stroke="rgba(59,125,216,0.18)" strokeWidth="1" />
      <rect x="344" y="18" width="18" height="18" stroke="rgba(133,0,255,0.18)" strokeWidth="1" />
      <rect x="18" y="304" width="18" height="18" stroke="rgba(59,125,216,0.12)" strokeWidth="1" />
      <rect x="344" y="304" width="18" height="18" stroke="rgba(133,0,255,0.12)" strokeWidth="1" />
    </svg>
  );
}

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
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* Text */}
            <div>
              <FadeIn>
                <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-white/30">
                  Who we are
                </span>
              </FadeIn>
              <FadeIn delay={100}>
                <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] text-white sm:text-[40px] md:text-[52px]">
                  Operator instincts.{" "}
                  <span className="text-[#8500FF]">Engineering depth.</span>
                </h1>
              </FadeIn>
              <FadeIn delay={200}>
                <p className="mt-6 max-w-[460px] font-sans text-lg leading-relaxed text-white/55">
                  Most AI consultants know the technology. We know what it&apos;s
                  like to sit on the other side of the table — and actually have
                  to make it work.
                </p>
              </FadeIn>
            </div>

            {/* Graphic */}
            <FadeIn delay={300} direction="right">
              <div className="flex items-center justify-center">
                <FounderDiagram />
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

          {/* Cards — items-stretch so both are equal height */}
          <div className="mt-14 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            {founders.map((founder, i) => (
              <FadeIn key={founder.name} delay={200 + i * 120} className="flex">
                <div className={`flex flex-col overflow-hidden rounded-xl border bg-canvas w-full ${founder.accent}`}>
                  {/* Photo — aspect-square so full 1:1 image is shown */}
                  <div className="relative aspect-square w-full overflow-hidden bg-wash">
                    <Image
                      src={founder.photo}
                      alt={`${founder.name}, ${founder.title} at Throttl`}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>

                  {/* Content — flex-1 so both cards fill to the same height */}
                  <div className="flex flex-1 flex-col p-8">
                    <div>
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
                    </div>

                    {/* Credentials pinned to bottom of card */}
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
        </Container>
      </section>

      {/* ── Origin story (under the photos) ── */}
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
                  Gabriel and Miguel first worked together at Neuron Education — Gabriel on
                  operations and growth, Miguel leading engineering. That experience taught
                  them something that has stuck: the technology is rarely the hard part.
                  Getting people to actually use it is.
                </p>
                <p>
                  When large language models became genuinely useful business tools, they
                  both watched the same pattern repeat across every industry: vendors
                  selling transformation, executives buying subscriptions, and the tools
                  quietly gathering dust because no one built the internal fluency to use
                  them. Gabriel was living it as a COO. Miguel was, literally, training
                  the models everyone was failing to deploy.
                </p>
                <p>
                  Throttl is their answer — a firm built on the belief that the gap
                  between AI investment and AI ROI is a people problem, not a technology
                  problem.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="mt-10 flex items-center gap-2">
                <p className="font-sans text-[14px] text-charcoal/60">
                  No vendor relationships. No commissions. Just results.
                </p>
                <span className="text-charcoal/30">&middot;</span>
                <Link
                  href="/contact"
                  className="font-sans text-[14px] font-semibold text-blueprint transition-colors hover:text-blueprint-hover"
                >
                  Work with us &rarr;
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <GlobalCTA />
    </>
  );
}
