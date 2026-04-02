import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ProcessStrip } from "@/components/services/ProcessStrip";
import { Download } from "lucide-react";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0f1a] pt-[72px]">
      {/* Gradient mesh */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute -left-[200px] top-[20%] h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(133,0,255,0.12) 0%, transparent 70%)",
            animation: "meshFloat1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-[100px] -top-[10%] h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,125,216,0.1) 0%, transparent 70%)",
            animation: "meshFloat2 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-10%] left-[40%] h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(133,0,255,0.08) 0%, transparent 70%)",
            animation: "meshFloat3 22s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 60px)",
        }}
      />

      <Container className="relative z-10 py-20 md:py-[140px]">
        <div className="mx-auto max-w-[720px] text-center">
          <FadeIn>
            <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-white/30">
              Our Services
            </span>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] text-white sm:text-[44px] md:text-[56px] lg:text-[64px] hyphens-auto break-words">
              We make AI{" "}
              <em className="not-italic text-[#8500FF]">actually</em> work
              for your team.
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="mx-auto mt-6 max-w-[560px] font-sans text-lg leading-relaxed text-white/60">
              Most AI investments fail because teams aren&apos;t trained. We fix
              that with education that sticks and systems that ship.
            </p>
          </FadeIn>

          {/* Dual CTAs */}
          <FadeIn delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/pricing-guide.pdf"
                download
                className="inline-flex items-center justify-center gap-2.5 rounded-[4px] px-8 py-4 font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-white transition-all duration-150 hover:scale-[1.02]"
                style={{
                  backgroundColor: "#8500FF",
                  boxShadow: "0 0 20px rgba(133,0,255,0.3)",
                }}
              >
                <Download className="h-4 w-4" strokeWidth={2.5} />
                Download Pricing Guide
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-[4px] border border-white/20 bg-transparent px-8 py-4 font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-white transition-all duration-150 hover:border-white/40 hover:bg-white/5"
              >
                Book a Strategy Review
              </a>
            </div>
          </FadeIn>

          {/* Process strip */}
          <FadeIn delay={400}>
            <div className="mt-12 rounded-lg border border-white/5 bg-white/[0.02] px-4 py-3">
              <ProcessStrip />
            </div>
          </FadeIn>

          {/* Stat callout */}
          <FadeIn delay={500}>
            <div className="mt-10 inline-flex items-baseline gap-3 rounded-lg border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-sm">
              <span className="font-display text-[36px] font-bold text-white">
                36%
              </span>
              <span className="font-sans text-[15px] text-white/50">
                of AI license holders ever become active users.
              </span>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
