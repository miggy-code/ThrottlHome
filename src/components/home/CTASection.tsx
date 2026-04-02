import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-ink py-20 md:py-[120px]">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <FadeIn>
            <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
              Ready to take ownership of your AI strategy?
            </h2>
          </FadeIn>
          
          <FadeIn delay={100}>
            <p className="mt-6 font-sans text-lg text-white/70">
              The first step isn&apos;t a sales pitch. It&apos;s an Alignment Call with Gabriel to discuss your current operational bottlenecks, assess your team&apos;s baseline, and see if an Executive Intensive is the right move for your business.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex h-14 items-center justify-center gap-2 rounded bg-[#8500FF] px-8 font-sans text-[15px] font-semibold uppercase tracking-wider text-white transition-all hover:scale-[1.02] hover:bg-[#9d33ff] hover:shadow-[0_0_24px_rgba(133,0,255,0.4)]"
              >
                Book an Alignment Call
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <p className="mt-6 font-sans text-sm text-white/40">
              Zero obligation. Just a candid conversation between operators.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
