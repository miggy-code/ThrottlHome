import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center bg-canvas pt-[72px]">
      <Container className="text-center">
        <p className="font-sans text-sm font-medium uppercase tracking-[0.08em] text-blueprint">
          404
        </p>
        <h1 className="mt-4 font-display text-[40px] font-bold text-ink">
          Page not found
        </h1>
        <p className="mt-4 text-charcoal">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" className="mt-8">
          Back to Home
        </Button>
      </Container>
    </section>
  );
}
