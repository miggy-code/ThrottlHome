import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BlueprintGrid } from "@/components/global/BlueprintGrid";
import { ContactForm } from "@/components/contact/ContactForm";
import { COMPANY } from "@/lib/constants";
import dynamic from "next/dynamic";

const GlobalCTA = dynamic(() => import("@/components/global/GlobalCTA").then((m) => m.GlobalCTA));

export const metadata: Metadata = {
  title: "Contact — Throttl",
  description:
    "Book a complimentary AI strategy review. 60 minutes with Gabriel — no pitch, just clarity.",
};

export default function ContactPage() {
  return (
    <section className="relative min-h-screen bg-canvas pt-[72px]">
      <BlueprintGrid opacity={0.15} />

      <Container className="relative z-10 py-16 md:py-[120px]">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left column — copy */}
          <div>
            <h1 className="font-display text-[36px] font-bold leading-tight text-ink md:text-[40px]">
              Let&apos;s start with a conversation.
            </h1>

            <div className="mt-6 space-y-4 text-charcoal">
              <p>
                Every engagement begins with an AI Strategy Review — a
                60-minute conversation with Gabriel to understand your business,
                assess your AI landscape, and identify where real value can be
                created.
              </p>
              <p>No pitch, no pressure. Just clarity.</p>
            </div>

            {/* Direct contact */}
            <div className="mt-10">
              <a
                href={`mailto:${COMPANY.email}`}
                className="font-sans text-base font-medium text-blueprint transition-colors hover:text-blueprint-hover"
              >
                {COMPANY.email}
              </a>
            </div>
          </div>

          {/* Right column — form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
