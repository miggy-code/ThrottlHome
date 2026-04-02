"use client";

import { useEffect, useRef, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Link from "next/link";

// ─── Easing presets (shared with HeroSection) ────────────────────────────────

const EASE_OUT_EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
const EASE_OUT_CUBIC = "cubic-bezier(0.33, 1, 0.68, 1)";

// ─── Panel data ──────────────────────────────────────────────────────────────

const panels = [
  {
    id: "education",
    title: "Teach Your Team to Use AI (For Real)",
    description:
      "We run hands-on workshops built around the tools you already pay for — ChatGPT, Claude, Copilot — and the work your people actually do every day. No jargon. No generic slide decks. Just skills that stick.",
    bullets: [
      "Workshops built around your actual tools and workflows",
      "Your managers learn to spot AI opportunities in their own operations",
      "Ongoing coaching so the habits actually stick",
      "Everyone leaves with workflows they can use tomorrow",
    ],
    cta: { label: "See Education Programs", href: "/services" },
    accentColor: "#8500FF",
    meshColor: "rgba(133,0,255,0.12)",
  },
  {
    id: "solutions",
    title: "We Build It With You (Not For You)",
    description:
      "When training reveals something that needs building — a knowledge base, an automation pipeline, an AI agent — our team embeds directly in your business. We build shoulder-to-shoulder with your people, so when we leave, you own everything.",
    bullets: [
      "A dedicated Throttl team embedded in your org",
      "We build AI systems alongside your people, not behind closed doors",
      "Your team learns as we build — no vendor dependency",
      "You own the outcomes, the code, and the knowledge",
    ],
    cta: { label: "See Custom Solutions", href: "/services" },
    accentColor: "#3B7DD8",
    meshColor: "rgba(59,125,216,0.12)",
  },
];

// ─── Component ───────────────────────────────────────────────────────────────

export function ServicesSection() {
  const reducedMotion = useRef(false);

  // Section intro observer
  const { ref: introRef, isIntersecting: introVisible } =
    useIntersectionObserver({ threshold: 0.15 });

  // Panel observers
  const { ref: panel0Ref, isIntersecting: panel0Visible } =
    useIntersectionObserver({ threshold: 0.1 });
  const { ref: panel1Ref, isIntersecting: panel1Visible } =
    useIntersectionObserver({ threshold: 0.1 });

  // Connector observer
  const { ref: connectorRef, isIntersecting: connectorVisible } =
    useIntersectionObserver({ threshold: 0.5 });

  // Element refs for Web Animations API
  const introLabelRef = useRef<HTMLSpanElement>(null);
  const introHeadRef = useRef<HTMLHeadingElement>(null);
  const introSubRef = useRef<HTMLParagraphElement>(null);

  const panelCardRefs = useRef(new Map<number, HTMLDivElement>());
  const panelShapeRefs = useRef(new Map<number, HTMLDivElement>());
  const panelTitleRefs = useRef(new Map<number, HTMLHeadingElement>());
  const panelDescRefs = useRef(new Map<number, HTMLParagraphElement>());
  const panelBulletRefs = useRef(new Map<string, HTMLLIElement>());
  const panelCtaRefs = useRef(new Map<number, HTMLAnchorElement>());

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  // ── Intro animation ────────────────────────────────────────────────────────

  const introAnimated = useRef(false);

  useEffect(() => {
    if (!introVisible || introAnimated.current) return;
    introAnimated.current = true;

    const anims: Animation[] = [];
    const push = (a: Animation | undefined) => {
      if (a) anims.push(a);
    };

    if (reducedMotion.current) {
      [introLabelRef, introHeadRef, introSubRef].forEach((r) => {
        push(
          r.current?.animate([{ opacity: 0 }, { opacity: 1 }], {
            duration: 300,
            fill: "forwards",
          }),
        );
      });
      return () => anims.forEach((a) => a.cancel());
    }

    // Label
    push(
      introLabelRef.current?.animate(
        [
          { opacity: 0, transform: "translateY(10px)", filter: "blur(4px)" },
          { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
        ],
        { duration: 500, easing: EASE_OUT_EXPO, fill: "forwards" },
      ),
    );

    // Headline
    push(
      introHeadRef.current?.animate(
        [
          { opacity: 0, transform: "translateY(14px)", filter: "blur(6px)" },
          { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
        ],
        { duration: 600, delay: 150, easing: EASE_OUT_EXPO, fill: "forwards" },
      ),
    );

    // Subtext
    push(
      introSubRef.current?.animate(
        [
          { opacity: 0, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 500, delay: 350, easing: EASE_OUT_CUBIC, fill: "forwards" },
      ),
    );

    return () => anims.forEach((a) => a.cancel());
  }, [introVisible]);

  // ── Panel animation runner ─────────────────────────────────────────────────

  const panelAnimated = useRef(new Set<number>());

  const runPanelAnimation = useCallback(
    (index: number) => {
      if (panelAnimated.current.has(index)) return;
      panelAnimated.current.add(index);

      const anims: Animation[] = [];
      const push = (a: Animation | undefined) => {
        if (a) anims.push(a);
      };
      const panel = panels[index];
      const isLeft = index === 0;

      if (reducedMotion.current) {
        // Simple fades
        [
          panelShapeRefs.current.get(index),
          panelTitleRefs.current.get(index),
          panelDescRefs.current.get(index),
          panelCtaRefs.current.get(index),
        ].forEach((el) => {
          push(
            el?.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: 300,
              fill: "forwards",
            }),
          );
        });
        panel.bullets.forEach((_, bi) => {
          push(
            panelBulletRefs.current.get(`${index}-${bi}`)?.animate(
              [{ opacity: 0 }, { opacity: 1 }],
              { duration: 300, fill: "forwards" },
            ),
          );
        });
        return;
      }

      // Decorative shape blooms in
      push(
        panelShapeRefs.current.get(index)?.animate(
          [
            { transform: "scale(0.3) rotate(-15deg)", opacity: 0 },
            { transform: "scale(1) rotate(0deg)", opacity: 1 },
          ],
          { duration: 800, easing: EASE_OUT_EXPO, fill: "forwards" },
        ),
      );

      // Title slides in from the side
      const titleX = isLeft ? -40 : 40;
      push(
        panelTitleRefs.current.get(index)?.animate(
          [
            {
              transform: `translateX(${titleX}px)`,
              opacity: 0,
              filter: "blur(6px)",
            },
            { transform: "translateX(0)", opacity: 1, filter: "blur(0px)" },
          ],
          {
            duration: 600,
            delay: 200,
            easing: EASE_OUT_EXPO,
            fill: "forwards",
          },
        ),
      );

      // Description fades up
      push(
        panelDescRefs.current.get(index)?.animate(
          [
            { transform: "translateY(15px)", opacity: 0 },
            { transform: "translateY(0)", opacity: 1 },
          ],
          {
            duration: 500,
            delay: 400,
            easing: EASE_OUT_CUBIC,
            fill: "forwards",
          },
        ),
      );

      // Bullets stagger in
      panel.bullets.forEach((_, bi) => {
        push(
          panelBulletRefs.current.get(`${index}-${bi}`)?.animate(
            [
              { transform: "translateX(-20px)", opacity: 0 },
              { transform: "translateX(0)", opacity: 1 },
            ],
            {
              duration: 400,
              delay: 600 + bi * 80,
              easing: EASE_OUT_CUBIC,
              fill: "forwards",
            },
          ),
        );
      });

      // CTA fades in with glow
      const ctaEl = panelCtaRefs.current.get(index);
      if (ctaEl) {
        push(
          ctaEl.animate(
            [
              { transform: "translateY(10px)", opacity: 0, filter: "blur(4px)" },
              { transform: "translateY(0)", opacity: 1, filter: "blur(0px)" },
            ],
            {
              duration: 500,
              delay: 900,
              easing: EASE_OUT_EXPO,
              fill: "forwards",
            },
          ),
        );
        // Glow pulse after CTA appears
        push(
          ctaEl.animate(
            [
              {
                boxShadow: `0 0 20px ${panel.accentColor}4D`,
              },
              {
                boxShadow: `0 0 45px ${panel.accentColor}A6`,
              },
              {
                boxShadow: `0 0 20px ${panel.accentColor}4D`,
              },
            ],
            { duration: 700, delay: 1400 },
          ),
        );
      }
    },
    [],
  );

  // Trigger panel animations on intersection
  useEffect(() => {
    if (panel0Visible) runPanelAnimation(0);
  }, [panel0Visible, runPanelAnimation]);

  useEffect(() => {
    if (panel1Visible) runPanelAnimation(1);
  }, [panel1Visible, runPanelAnimation]);

  // ── JSX ────────────────────────────────────────────────────────────────────

  return (
    <section className="relative bg-ink py-20 md:py-[160px] overflow-hidden">
      {/* Background gradient meshes */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute -left-[300px] top-[10%] h-[800px] w-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(133,0,255,0.08) 0%, transparent 70%)",
            animation: "meshFloat1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-[200px] bottom-[10%] h-[700px] w-[700px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(59,125,216,0.06) 0%, transparent 70%)",
            animation: "meshFloat2 25s ease-in-out infinite",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.02]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 60px)",
        }}
      />

      <Container className="relative z-10">
        {/* ── Section intro ── */}
        <div ref={introRef} className="mx-auto mb-16 max-w-[640px] text-center md:mb-24">
          <span
            ref={introLabelRef}
            className="inline-block font-sans text-[14px] font-medium uppercase tracking-[0.08em] text-white/30"
            style={{ opacity: 0 }}
          >
            What We Do
          </span>

          <h2
            ref={introHeadRef}
            className="mt-6 font-display text-3xl font-bold leading-tight text-white md:text-[44px] md:leading-[1.15]"
            style={{ opacity: 0 }}
          >
            Two ways we help.{" "}
            <span className="text-[#8500FF]">Pick the one that fits.</span>
          </h2>

          <p
            ref={introSubRef}
            className="mt-5 font-sans text-lg leading-relaxed text-white/50"
            style={{ opacity: 0 }}
          >
            Most of our clients start with education. Some need us to build
            alongside them. Both start with your business, not ours.
          </p>
        </div>

        {/* ── Panels ── */}
        <div className="flex flex-col items-stretch">
          {panels.map((panel, index) => {
            const isLeft = index === 0;
            const panelRef = index === 0 ? panel0Ref : panel1Ref;

            return (
              <div key={panel.id}>
                {/* Connecting line between panels */}
                {index === 1 && (
                  <div
                    ref={connectorRef}
                    className="mx-auto hidden py-2 md:flex justify-center"
                    aria-hidden="true"
                  >
                    <div
                      className="w-px transition-all duration-700 ease-out"
                      style={{
                        height: connectorVisible ? 80 : 0,
                        backgroundColor: "rgba(255,255,255,0.1)",
                      }}
                    />
                  </div>
                )}
                <div ref={panelRef}>
                <div
                  ref={(el) => {
                    if (el) panelCardRefs.current.set(index, el);
                    else panelCardRefs.current.delete(index);
                  }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm md:p-14"
                >
                  <div
                    className={`grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto] md:gap-14 ${
                      !isLeft ? "md:grid-cols-[auto_1fr]" : ""
                    }`}
                  >
                    {/* Content side */}
                    <div className={!isLeft ? "md:order-2" : ""}>
                      <h3
                        ref={(el) => {
                          if (el) panelTitleRefs.current.set(index, el);
                          else panelTitleRefs.current.delete(index);
                        }}
                        className="font-display text-2xl font-bold leading-tight text-white md:text-[32px]"
                        style={{ opacity: 0 }}
                      >
                        {panel.title}
                      </h3>

                      <p
                        ref={(el) => {
                          if (el) panelDescRefs.current.set(index, el);
                          else panelDescRefs.current.delete(index);
                        }}
                        className="mt-4 max-w-[520px] font-sans text-base leading-relaxed text-white/50 md:text-lg"
                        style={{ opacity: 0 }}
                      >
                        {panel.description}
                      </p>

                      <ul className="mt-6 flex flex-col gap-3">
                        {panel.bullets.map((bullet, bi) => (
                          <li
                            key={bi}
                            ref={(el) => {
                              const key = `${index}-${bi}`;
                              if (el)
                                panelBulletRefs.current.set(key, el);
                              else panelBulletRefs.current.delete(key);
                            }}
                            className="flex gap-3 font-sans text-[15px] text-white/60"
                            style={{ opacity: 0 }}
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                              style={{ backgroundColor: panel.accentColor }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        ref={(el) => {
                          if (el)
                            panelCtaRefs.current.set(index, el);
                          else panelCtaRefs.current.delete(index);
                        }}
                        href={panel.cta.href}
                        className="mt-8 inline-flex items-center justify-center rounded-[4px] px-8 py-4 font-sans text-[14px] font-semibold uppercase tracking-[0.05em] text-white transition-all duration-150 hover:scale-[1.02]"
                        style={{
                          backgroundColor: panel.accentColor,
                          boxShadow: `0 0 20px ${panel.accentColor}4D`,
                          opacity: 0,
                        }}
                      >
                        {panel.cta.label}
                        <span className="ml-2">&rarr;</span>
                      </Link>
                    </div>

                    {/* Decorative shape */}
                    <div
                      className={`hidden md:flex items-center justify-center ${
                        !isLeft ? "md:order-1" : ""
                      }`}
                    >
                      <div
                        ref={(el) => {
                          if (el) panelShapeRefs.current.set(index, el);
                          else panelShapeRefs.current.delete(index);
                        }}
                        className="relative h-[200px] w-[200px] lg:h-[260px] lg:w-[260px]"
                        style={{ opacity: 0 }}
                      >
                        {/* Outer ring */}
                        <div
                          className="absolute inset-0 rounded-full border"
                          style={{
                            borderColor: `${panel.accentColor}20`,
                          }}
                        />
                        {/* Inner glow */}
                        <div
                          className="absolute inset-6 rounded-full"
                          style={{
                            background: `radial-gradient(circle, ${panel.meshColor} 0%, transparent 70%)`,
                          }}
                        />
                        {/* Center icon text */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span
                            className="font-display text-[48px] font-bold lg:text-[56px]"
                            style={{ color: `${panel.accentColor}40` }}
                          >
                            {index === 0 ? "Ed" : "En"}
                          </span>
                        </div>
                        {/* Orbiting dot */}
                        <div
                          className="absolute -right-1 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full"
                          style={{
                            backgroundColor: panel.accentColor,
                            boxShadow: `0 0 12px ${panel.accentColor}80`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
