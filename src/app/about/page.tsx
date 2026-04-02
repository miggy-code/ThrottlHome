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
    "Meet the operators behind Throttl — an entrepreneur with decades running international service businesses, and an AI engineer who has trained the models everyone else is using.",
};

// ─── Founder data ─────────────────────────────────────────────────────────────

const founders = [
  {
    name: "Gabriel Gavrilov",
    title: "Co-Founder",
    role: "Strategy & Client Engagement",
    photo: null, // swap in /media/gabriel.jpg when ready
    accent: "border-[#8500FF]/30",
    accentBg: "bg-[#8500FF]/5",
    accentColor: "text-[#8500FF]",
    bio: [
      "Gabriel brings the operator's perspective that most AI consultants lack: he's currently COO of a multi-million dollar international services company, which means he has lived, firsthand, the challenge of adopting AI inside a complex, real-world organization.",
      "He co-founded Throttl because he kept seeing the same pattern — leadership teams buying AI tools on vendor promises, then watching those tools sit unused because no one had the fluency to drive adoption. He built this firm to close that gap from the inside out.",
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
    photo: null, // swap in /media/miguel.jpg when ready
    accent: "border-blueprint/30",
    accentBg: "bg-blueprint/5",
    accentColor: "text-blueprint",
    bio: [
      "Miguel is an AI engineer who has spent years working at the frontier — literally training the large language models that enterprise teams now depend on. As a Code-Focused AI Reinforcement Engineer at DataAnnotation, he shaped the behavior of production LLMs used by millions, building deep intuition for what these systems can and cannot do reliably.",
      "He brings that technical depth to every Throttl engagement: not just knowing how to use AI tools, but understanding how they work at the architecture level — and where they break down under real operational conditions.",
    ],
    credentials: [
      "AI Reinforcement Engineer, DataAnnotation (2023–2025)",
      "CTO, Neuron Education — scaled platform to hundreds of daily users",
      "Founding SWE, Compute Algo Trading",
      "Background in financial and edtech startups",
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
            <h1 className="mt-6 max-w-[640px] font-display text-4xl font-bold leading-[1.12] text-white sm:text-[40px] md:text-[56px]">
              Built by operators.<br />
              <span className="text-[#8500FF]">Run by engineers.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="mt-6 max-w-[520px] font-sans text-lg leading-relaxed text-white/55">
              Throttl exists because the people selling AI and the people who have
              to live with AI are rarely the same person. We fix that.
            </p>
          </FadeIn>
        </Container>
      </section>

      {/* ── Origin story ── */}
      <section className="bg-canvas py-16 md:py-[100px]">
        <BlueprintGrid opacity={0.12} />
        <Container className="relative z-10">
          <div className="mx-auto max-w-[720px]">
            <FadeIn>
              <SectionLabel>Why we started Throttl</SectionLabel>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="mt-6 font-display text-ink">
                We met in edtech. We stayed in operations.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mt-6 space-y-4 text-charcoal">
                <p>
                  Gabriel and Miguel first worked together at Neuron Education, an edtech startup where Gabriel ran operations and growth and Miguel led the engineering team. Building that company taught them a lesson that applies everywhere: it doesn&apos;t matter how good your technology is if the people using it don&apos;t understand it.
                </p>
                <p>
                  When large language models matured into genuine business tools, both of them watched the same pattern play out across industries — vendors selling transformation, leadership teams buying subscriptions, and the tools quietly gathering dust because no one built the internal fluency to use them. Gabriel was living it firsthand as a COO. Miguel was, literally, training the models everyone was failing to deploy.
                </p>
                <p>
                  Throttl is their answer to that gap: a firm that combines real operational credibility with deep technical expertise, focused specifically on the human side of AI adoption.
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

          <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-2">
            {founders.map((founder, i) => (
              <FadeIn key={founder.name} delay={200 + i * 120}>
                <div className={`rounded-xl border bg-canvas p-8 md:p-10 ${founder.accent}`}>
                  {/* Photo */}
                  <div className="mb-8 h-[220px] w-[220px] overflow-hidden rounded-lg border border-gridline bg-wash flex items-center justify-center">
                    {founder.photo ? (
                      <Image
                        src={founder.photo}
                        alt={founder.name}
                        width={220}
                        height={220}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="font-sans text-sm text-charcoal/30">Photo coming soon</span>
                    )}
                  </div>

                  {/* Identity */}
                  <div className="mb-1">
                    <span className={`font-sans text-[12px] font-semibold uppercase tracking-wider ${founder.accentColor}`}>
                      {founder.title} &middot; {founder.role}
                    </span>
                  </div>
                  <h3 className="font-display text-[26px] font-bold text-ink md:text-[28px]">
                    {founder.name}
                  </h3>

                  {/* Bio */}
                  <div className="mt-5 space-y-3 text-[15px] leading-relaxed text-charcoal">
                    {founder.bio.map((para, j) => (
                      <p key={j}>{para}</p>
                    ))}
                  </div>

                  {/* Credentials */}
                  <div className={`mt-8 rounded-lg border p-5 ${founder.accent} ${founder.accentBg}`}>
                    <p className={`mb-3 font-sans text-[11px] font-semibold uppercase tracking-wider ${founder.accentColor}`}>
                      Background
                    </p>
                    <ul className="space-y-2">
                      {founder.credentials.map((cred) => (
                        <li key={cred} className="flex items-start gap-2.5 font-sans text-[14px] text-charcoal">
                          <span className={`mt-[7px] h-[5px] w-[5px] shrink-0 rounded-full ${founder.accentBg.replace("/5", "")}`}
                            style={{ backgroundColor: founder.accentColor === "text-[#8500FF]" ? "rgba(133,0,255,0.4)" : "rgba(59,125,216,0.4)" }}
                          />
                          {cred}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Values callout ── */}
      <section className="bg-canvas py-16 md:py-[100px]">
        <Container>
          <div className="mx-auto max-w-[680px] text-center">
            <FadeIn>
              <SectionLabel>What we stand for</SectionLabel>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 className="mt-6 font-display text-ink">
                We&apos;re not here to sell you a platform.
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p className="mt-5 text-charcoal">
                We don&apos;t have a vendor relationship with any AI company. We
                don&apos;t earn commissions on software you buy. Our only incentive
                is that your team genuinely gets better at this — and that you
                come back when the next phase of your AI journey starts.
              </p>
            </FadeIn>
            <FadeIn delay={300}>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 font-sans text-base font-semibold text-blueprint transition-colors hover:text-blueprint-hover"
                >
                  Book a Strategy Review{" "}
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                    &rarr;
                  </span>
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
