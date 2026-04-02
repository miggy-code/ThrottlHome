import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-[72px]">
      {/* Gradient mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="absolute -left-[200px] top-[20%] h-[600px] w-[600px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,125,216,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute -right-[100px] bottom-0 h-[500px] w-[500px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(133,0,255,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Grid overlay */}
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
                Executive Education & Custom Solutions
              </span>
            </FadeIn>

            <FadeIn delay={100}>
              <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] text-white sm:text-[40px] md:text-[56px] hyphens-auto break-words">
                You already bought the tools.{" "}
                <span className="text-[#8500FF]">We make them pay off.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={200}>
              <p className="mt-6 max-w-[480px] font-sans text-lg leading-relaxed text-white/60">
                Most AI investments fail not because the technology is wrong,
                but because teams aren't trained to use the technology. We close that 
                gap with education that sticks and systems that ship.
              </p>
            </FadeIn>

            {/* Stat callout */}
            <FadeIn delay={300}>
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

          {/* Image */}
          <FadeIn delay={200} direction="right">
            <div className="relative overflow-hidden rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
              <Image
                src="/tech-meeting-flatlay.jpg"
                alt="Team working through AI strategy with laptops and data"
                width={640}
                height={440}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
