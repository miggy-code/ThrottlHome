"use client";

import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { FadeIn } from "@/components/ui/FadeIn";
import { Download, CheckCircle, Loader2 } from "lucide-react";

const ACCENT = "#8500FF";

function DocumentIcon() {
  return (
    <div className="group/doc relative mx-auto mb-8 h-[100px] w-[76px] transition-transform duration-200 ease-out hover:-translate-y-1">
      {/* Document body */}
      <div
        className="absolute inset-0 rounded-lg transition-shadow duration-200 group-hover/doc:shadow-[0_12px_40px_rgba(133,0,255,0.2)]"
        style={{
          background: `linear-gradient(135deg, ${ACCENT}, #5a00b3)`,
        }}
      >
        {/* Corner fold */}
        <div className="absolute right-0 top-0 h-5 w-5 rounded-bl-md bg-white/20" />

        {/* Text lines */}
        <div className="absolute left-3 right-3 top-8 space-y-2">
          <div className="h-[3px] w-full rounded-full bg-white/30" />
          <div className="h-[3px] w-4/5 rounded-full bg-white/20" />
          <div className="h-[3px] w-full rounded-full bg-white/30" />
          <div className="h-[3px] w-3/5 rounded-full bg-white/20" />
        </div>

        {/* Throttl mark */}
        <div className="absolute bottom-3 left-3 font-mono text-[9px] font-bold tracking-wider text-white/40">
          T.
        </div>
      </div>
    </div>
  );
}

export function PricingDownload() {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setStatus("loading");

    try {
      // Fire-and-forget email capture — don't block the download
      // Replace this endpoint with your actual email collection service
      await fetch("/api/pricing-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      }).catch(() => {
        // Silently fail — the download is more important than the email capture
      });

      setStatus("success");

      // Trigger the PDF download
      const link = document.createElement("a");
      link.href = "/pricing-guide.pdf";
      link.download = "Throttl-Pricing-Guide.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Click feedback animation
      btnRef.current?.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(0.97)" },
          { transform: "scale(1)" },
        ],
        { duration: 200, easing: "cubic-bezier(0.33, 1, 0.68, 1)" },
      );
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="relative py-16 md:py-[120px]"
      style={{
        background:
          "linear-gradient(135deg, rgba(133,0,255,0.04) 0%, rgba(59,125,216,0.04) 50%, rgba(133,0,255,0.02) 100%)",
      }}
    >
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-[720px] rounded-2xl border border-[#8500FF]/10 bg-white px-8 py-14 text-center shadow-[0_20px_60px_rgba(133,0,255,0.06)] md:px-16">
            <DocumentIcon />

            <SectionLabel className="mb-4">Pricing Guide</SectionLabel>

            <h2 className="font-display text-ink">
              See exactly what it costs. No&nbsp;surprises.
            </h2>

            <p className="mx-auto mt-4 max-w-[480px] text-charcoal">
              Enter your email and we&apos;ll send you our complete pricing
              guide with program details, timelines, and investment ranges for
              every service we offer.
            </p>

            {status === "success" ? (
              <div className="mt-8 flex flex-col items-center gap-2">
                <CheckCircle className="h-8 w-8 text-success" />
                <p className="font-sans text-[15px] font-medium text-ink">
                  Your download has started.
                </p>
                <p className="font-sans text-[13px] text-charcoal/60">
                  Check your downloads folder for the pricing guide.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-[480px] flex-col items-center gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-[52px] w-full flex-1 rounded-[4px] border border-gridline bg-canvas px-4 font-sans text-[15px] text-ink placeholder:text-charcoal/40 focus:border-[#8500FF]/40 focus:outline-none focus:ring-2 focus:ring-[#8500FF]/10 transition-all"
                />
                <button
                  ref={btnRef}
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex h-[52px] w-full items-center justify-center gap-2.5 rounded-[4px] px-6 font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-white transition-all duration-150 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 sm:w-auto sm:whitespace-nowrap"
                  style={{
                    backgroundColor: ACCENT,
                    animation: "glowPulse 3s ease-in-out infinite",
                  }}
                >
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Download className="h-4 w-4" strokeWidth={2.5} />
                  )}
                  {status === "loading" ? "Sending..." : "Get the Guide"}
                </button>
              </form>
            )}

            <p className="mt-4 font-sans text-[13px] text-charcoal/50">
              We&apos;ll only use this to send you the guide. No spam, ever.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
