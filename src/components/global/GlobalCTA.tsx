import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function GlobalCTA() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <Container className="text-center">
        <div className="mx-auto max-w-[700px]">
          <h2 className="font-display text-[32px] font-bold leading-tight text-white md:text-[40px]">
            Your team is the variable.
          </h2>
          <p className="mt-6 font-sans text-lg text-white/75">
            Every engagement starts with a conversation. Book a complimentary
            Strategy Review with Gabriel and get clarity on where AI can and
            can&apos;t create value in your operation.
          </p>
          <Button href="/contact" variant="dark" size="lg" className="mt-10">
            Book a Strategy Review
          </Button>
          <p className="mt-4 font-sans text-sm text-white/50">
            60-minute call. No pitch. Just clarity.
          </p>
        </div>
      </Container>
    </section>
  );
}
