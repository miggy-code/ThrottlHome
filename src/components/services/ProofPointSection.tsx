import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ProofPointSection() {
  return (
    <section className="relative overflow-hidden bg-ink py-16 md:py-[100px]">
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute left-[20%] top-[10%] h-[400px] w-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,125,216,0.1) 0%, transparent 70%)",
          }}
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Text */}
          <div>
            <FadeIn>
              <span className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-white/30">
                The data is clear
              </span>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-display text-[56px] font-bold text-white/40 md:text-[72px]">
                  21%
                </span>
                <span className="font-display text-[28px] text-white/30 md:text-[36px]">
                  →
                </span>
                <span className="font-display text-[56px] font-bold text-[#8500FF] md:text-[72px]">
                  42%
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-4 max-w-[480px] font-sans text-lg leading-relaxed text-white/60">
                Companies with mature AI upskilling programs are{" "}
                <strong className="text-white font-semibold">
                  twice as likely
                </strong>{" "}
                to report significant ROI from their AI investments.
              </p>
              <p className="mt-3 font-mono text-[11px] text-white/20">
                Source: DataCamp / CIO Dive, 2025
              </p>
            </FadeIn>
          </div>

          {/* Image */}
          <FadeIn delay={200} direction="right">
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/graphs-complex-spreadsheets.jpg"
                alt="Data analysis and performance metrics"
                width={600}
                height={400}
                className="h-[300px] w-full object-cover md:h-[360px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/20 to-transparent" />
              <div className="absolute bottom-4 left-4 rounded-[4px] bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                <p className="font-mono text-[11px] font-semibold text-blueprint">
                  The variable is trained people, not better tools.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
