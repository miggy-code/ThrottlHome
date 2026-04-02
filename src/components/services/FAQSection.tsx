import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServicesFAQ } from "@/components/services/ServicesFAQ";

export function FAQSection() {
  return (
    <section className="bg-canvas py-16 md:py-[100px]">
      <Container>
        <FadeIn>
          <div className="text-center">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-6 font-display text-ink">Common questions</h2>
          </div>
        </FadeIn>

        <div className="mt-12">
          <ServicesFAQ />
        </div>
      </Container>
    </section>
  );
}
