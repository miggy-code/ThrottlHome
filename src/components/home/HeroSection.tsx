"use client";

import { useEffect, useRef, useState, useCallback } from "react";

// ─── Constants ────────────────────────────────────────────────────────────────

const ACCENT = "#8500FF";

// Wave timing (ms) — single source of truth for the whole sequence
const T = {
  HOLD: 800,          // chaos display hold before anything moves
  W1_START: 0,         // wave 1: outer ambient departs
  W1_DUR: 700,
  W2_START: 300,       // wave 2: data fragments glitch out
  W2_DUR: 500,
  W3_START: 700,       // wave 3: seeds converge on headline
  W3_DUR: 950,
  WORD_OFFSET: 80,    // stagger between each word reveal
  PERIOD_IN: 1100,     // period fade-in after last seed
  PERIOD_COLOR: 2000,  // period color shift to accent
  SUB_IN: 1500,
  CTA_IN: 1950,
  CTA_PULSE: 2600,
  RESOLVED: 3400,
};

const HEADLINE_WORDS = [
  { text: "AI", line: 0 },
  { text: "Clarity.", line: 0 },
  { text: "Operational", line: 1 },
  { text: "Results", line: 1 },
];

const DOT_OFFSETS: [number, number][] = [
  [0, 0], [14, 5], [5, 13], [18, 15], [8, 7],
];

// ─── Chaos element data ───────────────────────────────────────────────────────

type Ring = "inner" | "mid" | "outer";

type ChaosItem = {
  id: number;
  type: "text" | "data" | "line" | "rect" | "dots";
  content?: string;
  x: number;       // % from left
  y: number;       // % from top
  rot?: number;    // clamped to ±15
  opacity: number;
  fontSize?: number;
  width?: number;
  height?: number;
  angle?: number;
  seed?: number;   // index into HEADLINE_WORDS — converges on that word
  residual?: boolean;
  ring: Ring;
  bp: 0 | 1 | 2;  // min breakpoint
};

// Placement logic:
//   outer ring  → ambient text, decorative shapes  (x: 0–20 or 75–100, y: 0–20 or 75–100)
//   mid ring    → seeds, secondary text             (x: 15–35 or 60–80, y: 20–40 or 55–75)
//   inner ring  → data fragments                    (x: 30–65, y: 25–65)
//
// Rotation: ±8° inner, ±12° mid, ±15° outer — feels intentional, not broken

const CHAOS: ChaosItem[] = [
  // ── Outer ring ambient text ──
  { id: 1, type: "text", content: "ROI", x: 7, y: 12, rot: -8, opacity: 0.18, fontSize: 16, ring: "outer", bp: 0 },
  { id: 2, type: "text", content: "Q3 pipeline", x: 78, y: 8, rot: 6, opacity: 0.15, fontSize: 13, ring: "outer", bp: 1 },
  { id: 5, type: "text", content: "neural network", x: 82, y: 76, rot: -11, opacity: 0.14, fontSize: 12, ring: "outer", bp: 2 },
  { id: 9, type: "text", content: "GPT", x: 88, y: 10, rot: -7, opacity: 0.22, fontSize: 20, ring: "outer", bp: 0 },
  { id: 10, type: "text", content: "predictive analytics", x: 35, y: 86, rot: 4, opacity: 0.12, fontSize: 11, ring: "outer", bp: 2 },
  { id: 12, type: "text", content: "risk model", x: 6, y: 80, rot: 10, opacity: 0.14, fontSize: 13, ring: "outer", bp: 2 },
  { id: 16, type: "text", content: "deep learning", x: 55, y: 88, rot: 7, opacity: 0.14, fontSize: 13, ring: "outer", bp: 2 },
  { id: 17, type: "text", content: "disrupt", x: 5, y: 22, rot: -13, opacity: 0.2, fontSize: 16, ring: "outer", bp: 0 },
  { id: 18, type: "text", content: "synergy", x: 80, y: 84, rot: 5, opacity: 0.14, fontSize: 13, ring: "outer", bp: 2 },

  // ── Mid ring secondary text (non-seed) ──
  { id: 6, type: "text", content: "deploy at scale", x: 14, y: 62, rot: 5, opacity: 0.2, fontSize: 13, ring: "mid", bp: 0 },
  { id: 11, type: "text", content: "cost reduction", x: 70, y: 38, rot: -6, opacity: 0.2, fontSize: 14, ring: "mid", bp: 1 },
  { id: 13, type: "text", content: "digital transformation", x: 62, y: 14, rot: -3, opacity: 0.17, fontSize: 12, ring: "mid", bp: 1 },
  { id: 14, type: "text", content: "data-driven", x: 24, y: 58, rot: 9, opacity: 0.22, fontSize: 15, ring: "mid", bp: 0 },
  { id: 19, type: "text", content: "real-time insights", x: 68, y: 28, rot: -5, opacity: 0.16, fontSize: 12, ring: "mid", bp: 1 },

  // ── Mid ring seeds (converge onto headline words) ──
  { id: 3, type: "text", content: "automate", x: 74, y: 24, rot: 7, opacity: 0.32, fontSize: 16, ring: "mid", bp: 0, seed: 0 },
  { id: 7, type: "text", content: "strategy", x: 16, y: 46, rot: -9, opacity: 0.28, fontSize: 19, ring: "mid", bp: 0, seed: 1 },
  { id: 8, type: "text", content: "workflow", x: 64, y: 62, rot: 11, opacity: 0.26, fontSize: 16, ring: "mid", bp: 0, seed: 2 },
  { id: 20, type: "text", content: "optimize", x: 80, y: 54, rot: -8, opacity: 0.3, fontSize: 17, ring: "mid", bp: 0, seed: 3 },

  // ── Inner ring data fragments ──
  { id: 21, type: "data", content: "847.3", x: 58, y: 32, rot: 3, opacity: 0.28, fontSize: 15, ring: "inner", bp: 0 },
  { id: 22, type: "data", content: "12.7%", x: 34, y: 26, rot: -5, opacity: 0.32, fontSize: 17, ring: "inner", bp: 0, residual: true },
  { id: 23, type: "data", content: "-$2.4M", x: 38, y: 68, rot: 7, opacity: 0.22, fontSize: 14, ring: "inner", bp: 0 },
  { id: 24, type: "data", content: "99.2", x: 62, y: 44, rot: -3, opacity: 0.24, fontSize: 14, ring: "inner", bp: 1 },
  { id: 25, type: "data", content: "0.034", x: 44, y: 72, rot: 5, opacity: 0.18, fontSize: 12, ring: "inner", bp: 2 },
  { id: 26, type: "data", content: "+186%", x: 72, y: 58, rot: -6, opacity: 0.3, fontSize: 16, ring: "inner", bp: 1, residual: true },
  { id: 27, type: "data", content: "NaN", x: 46, y: 18, rot: 4, opacity: 0.24, fontSize: 15, ring: "inner", bp: 0 },
  { id: 28, type: "data", content: "$4,291,0—", x: 30, y: 74, rot: -7, opacity: 0.18, fontSize: 13, ring: "inner", bp: 2 },

  // ── Decorative (outer) ──
  { id: 29, type: "line", x: 8, y: 38, width: 70, angle: 28, opacity: 0.07, ring: "outer", bp: 1 },
  { id: 30, type: "line", x: 70, y: 80, width: 55, angle: -18, opacity: 0.05, ring: "outer", bp: 2 },
  { id: 31, type: "line", x: 52, y: 16, width: 90, angle: 42, opacity: 0.07, ring: "outer", bp: 1, residual: true },
  { id: 33, type: "rect", x: 78, y: 42, width: 55, height: 28, opacity: 0.05, ring: "outer", bp: 1 },
  { id: 35, type: "rect", x: 10, y: 55, width: 38, height: 22, opacity: 0.05, ring: "outer", bp: 2 },
  { id: 36, type: "dots", x: 44, y: 62, opacity: 0.14, ring: "mid", bp: 2 },
];

// ─── Easing presets ───────────────────────────────────────────────────────────

const EASE_OUT_EXPO = "cubic-bezier(0.16, 1, 0.3, 1)";
const EASE_IN_QUART = "cubic-bezier(0.5, 0, 0.75, 0)";
const EASE_OUT_CUBIC = "cubic-bezier(0.33, 1, 0.68, 1)";

// ─── Component ────────────────────────────────────────────────────────────────

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const chaosMap = useRef(new Map<number, HTMLElement>());
  const wordMap = useRef(new Map<number, HTMLElement>());
  const periodRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaBtnRef = useRef<HTMLAnchorElement>(null);

  const [phase, setPhase] = useState<"loading" | "chaos" | "animating" | "resolved">("loading");
  const [items, setItems] = useState<ChaosItem[]>([]);

  // ── Flush stale Web Animations on re-mount (HMR / Strict Mode) ─────────────

  useEffect(() => {
    const flush = (el: Element | null | undefined) =>
      el?.getAnimations().forEach((a) => a.cancel());
    wordMap.current.forEach(flush);
    chaosMap.current.forEach(flush);
    flush(periodRef.current);
    flush(subRef.current);
    flush(ctaRef.current);
    flush(ctaBtnRef.current);
  }, []);

  // ── Init: filter by breakpoint, trigger via IntersectionObserver ────────────

  useEffect(() => {
    const w = window.innerWidth;
    const bp = w >= 1024 ? 2 : w >= 768 ? 1 : 0;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setItems(CHAOS.filter((el) => el.bp <= bp));

    const t = setTimeout(() => setPhase("chaos"), 100);
    return () => clearTimeout(t);
  }, []);

  // ── Hold → animating ────────────────────────────────────────────────────────

  useEffect(() => {
    if (phase !== "chaos") return;
    const t = setTimeout(() => setPhase("animating"), T.HOLD);
    return () => clearTimeout(t);
  }, [phase]);

  // ── Core animation ──────────────────────────────────────────────────────────

  const runAnimation = useCallback((anims: Animation[]) => {
    const push = (a: Animation | undefined) => { if (a) anims.push(a); };

    // ── Wave 1: outer ring departs outward (staggered left→right, top→bottom) ─
    const outerItems = items.filter(
      (i) => i.ring === "outer" && i.seed === undefined && !i.residual,
    );
    outerItems.forEach((item, idx) => {
      const el = chaosMap.current.get(item.id);
      if (!el) return;

      // Direction: away from center (50,50)
      const nx = (item.x - 50) / Math.abs(item.x - 50 || 1);
      const ny = (item.y - 50) / Math.abs(item.y - 50 || 1);
      const mag = 120 + Math.abs(item.x - 50) * 0.8; // outer items fly further
      const rot = item.rot ?? item.angle ?? 0;

      push(el.animate(
        [
          { transform: `translate(0,0) rotate(${rot}deg) scale(1)`, opacity: item.opacity, filter: "blur(0px)" },
          { transform: `translate(${nx * mag * 1.5}px,${ny * mag * 1.5}px) rotate(${rot + nx * 15}deg) scale(1.2)`, opacity: 0, filter: "blur(10px)" },
        ],
        {
          duration: T.W1_DUR,
          delay: T.W1_START + idx * 45, // tight stagger — feels like a sweep, not a scatter
          easing: EASE_IN_QUART,
          fill: "forwards",
        },
      ));
    });

    // ── Wave 2: inner ring data fragments get sucked into the core ──────────────

    const dataItems = items.filter(
      (i) => i.ring === "inner" && !i.residual,
    );
    dataItems.forEach((item, idx) => {
      const el = chaosMap.current.get(item.id);
      if (!el) return;
      const rot = item.rot ?? 0;

      const cx = (50 - item.x);
      const cy = (50 - item.y);

      push(el.animate(
        [
          { transform: `translate(0,0) rotate(${rot}deg) scale(1)`, opacity: item.opacity, filter: "blur(0px)" },
          { transform: `translate(${cx * 0.8}px,${cy * 0.8}px) rotate(${rot}deg) scale(1.1)`, opacity: item.opacity * 1.5, filter: "blur(2px)" },
          { transform: `translate(${cx * 2}px,${cy * 2}px) rotate(${rot * 0.5}deg) scale(0.5)`, opacity: 0, filter: "blur(8px)" },
        ],
        {
          duration: T.W2_DUR,
          delay: T.W2_START + idx * 55,
          easing: EASE_OUT_CUBIC,
          fill: "forwards",
        },
      ));
    });

    // ── Wave 2b: mid ring non-seed text dissolves out of focus ──────────────────

    const midAmbient = items.filter(
      (i) => i.ring === "mid" && i.seed === undefined && !i.residual,
    );
    midAmbient.forEach((item, idx) => {
      const el = chaosMap.current.get(item.id);
      if (!el) return;
      const rot = item.rot ?? 0;

      push(el.animate(
        [
          { transform: `translate(0,0) rotate(${rot}deg) scale(1)`, opacity: item.opacity, filter: "blur(0px)" },
          { transform: `translate(0,10px) rotate(${rot}deg) scale(0.95)`, opacity: 0, filter: "blur(6px)" },
        ],
        {
          duration: 600,
          delay: T.W2_START + 100 + idx * 40,
          easing: EASE_OUT_CUBIC,
          fill: "forwards",
        },
      ));
    });

    // ── Wave 3: seeds converge on their headline word, fusing into clarity ──────

    const seeds = items.filter((i) => i.seed !== undefined);
    seeds.forEach((item, idx) => {
      const seedEl = chaosMap.current.get(item.id);
      const wordEl = wordMap.current.get(item.seed!);
      if (!seedEl || !wordEl) return;

      const rot = item.rot ?? 0;
      const sR = seedEl.getBoundingClientRect();
      const wR = wordEl.getBoundingClientRect();
      const dx = wR.left + wR.width / 2 - sR.left - sR.width / 2;
      const dy = wR.top + wR.height / 2 - sR.top - sR.height / 2;

      // Seed rushes in and snaps into the word slot perfectly
      push(seedEl.animate(
        [
          { transform: `translate(0,0) rotate(${rot}deg) scale(1)`, opacity: item.opacity, filter: "blur(0px)" },
          { transform: `translate(${dx * 0.7}px,${dy * 0.7}px) rotate(${rot * 0.3}deg) scale(1.15)`, opacity: item.opacity + 0.3, filter: "blur(4px)" },
          { transform: `translate(${dx}px,${dy}px) rotate(0deg) scale(0.95)`, opacity: 0, filter: "blur(0px)" },
        ],
        {
          duration: T.W3_DUR,
          delay: T.W3_START + idx * T.WORD_OFFSET,
          easing: EASE_OUT_EXPO,
          fill: "forwards",
        },
      ));

      // Word materialises from the fuse point, shifting into perfect sharpness
      push(wordEl.animate(
        [
          { opacity: 0, transform: "translateY(12px) scale(0.95)", filter: "blur(8px)" },
          { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0px)" },
        ],
        {
          duration: 350,
          delay: T.W3_START + idx * T.WORD_OFFSET + T.W3_DUR * 0.65,
          easing: EASE_OUT_EXPO,
          fill: "forwards",
        },
      ));
    });

    // ── Period: slams in, then shifts to accent ───────────────────────────────

    const pEl = periodRef.current;
    if (pEl) {
      push(pEl.animate(
        [
          { opacity: 0, transform: "scale(3) translateY(-10px)", filter: "blur(4px)" },
          { opacity: 1, transform: "scale(1) translateY(0)", filter: "blur(0px)" },
        ],
        { duration: 400, delay: T.PERIOD_IN, easing: EASE_OUT_EXPO, fill: "forwards" },
      ));
      push(pEl.animate(
        [{ color: "white" }, { color: ACCENT }],
        { duration: 400, delay: T.PERIOD_COLOR, easing: EASE_OUT_CUBIC, fill: "forwards" },
      ));
    }

    // ── Subheadline ─────────────────────────────────────────────────────────

    push(subRef.current?.animate(
      [
        { opacity: 0, transform: "translateY(10px)", filter: "blur(4px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
      ],
      { duration: 700, delay: T.SUB_IN, easing: EASE_OUT_EXPO, fill: "forwards" },
    ));

    // ── CTA container ───────────────────────────────────────────────────────

    push(ctaRef.current?.animate(
      [
        { opacity: 0, transform: "translateY(10px)", filter: "blur(4px)" },
        { opacity: 1, transform: "translateY(0)", filter: "blur(0px)" },
      ],
      { duration: 600, delay: T.CTA_IN, easing: EASE_OUT_EXPO, fill: "forwards" },
    ));

    // ── CTA glow pulse ──────────────────────────────────────────────────────

    push(ctaBtnRef.current?.animate(
      [
        { boxShadow: "0 0 20px rgba(133,0,255,0.3)" },
        { boxShadow: "0 0 45px rgba(133,0,255,0.65)" },
        { boxShadow: "0 0 20px rgba(133,0,255,0.3)" },
      ],
      { duration: 700, delay: T.CTA_PULSE },
    ));

    // ── Residuals settle to ghost opacity ───────────────────────────────────

    items.filter((i) => i.residual).forEach((item) => {
      push(chaosMap.current.get(item.id)?.animate(
        [{ opacity: item.opacity }, { opacity: 0.05 }],
        { duration: 1200, delay: T.W2_START, easing: EASE_OUT_CUBIC, fill: "forwards" },
      ));
    });

    // ── Mark resolved ───────────────────────────────────────────────────────

    const t = setTimeout(() => {
      setPhase("resolved");
      if (process.env.NODE_ENV !== "development") {
        sessionStorage.setItem("hero-played", "true");
      }
    }, T.RESOLVED);
    anims.push({ cancel: () => clearTimeout(t) } as unknown as Animation);
  }, [items]);

  useEffect(() => {
    if (phase !== "animating") return;
    const anims: Animation[] = [];
    runAnimation(anims);
    return () => anims.forEach((a) => a.cancel());
  }, [phase, runAnimation]);

  // ── Kill fill-forward animations once resolved (let inline styles win) ─────

  useEffect(() => {
    if (phase !== "resolved") return;
    const kill = (el: Element | null | undefined) =>
      el?.getAnimations().forEach((a) => a.cancel());
    wordMap.current.forEach(kill);
    chaosMap.current.forEach(kill);
    kill(periodRef.current);
    kill(subRef.current);
    kill(ctaRef.current);
    kill(ctaBtnRef.current);
  }, [phase]);

  // ── Helpers ─────────────────────────────────────────────────────────────────

  const resolved = phase === "resolved";
  const showChaos = phase !== "loading";

  const chaosRef = (id: number) => (el: HTMLElement | null) => {
    if (el) chaosMap.current.set(id, el);
    else chaosMap.current.delete(id);
  };

  const wordRef = (i: number) => (el: HTMLSpanElement | null) => {
    if (el) wordMap.current.set(i, el);
    else wordMap.current.delete(i);
  };

  // ── JSX ──────────────────────────────────────────────────────────────────────

  return (
    <section
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden bg-[#0a0f1a]"
    >
      {/* ── Gradient mesh ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute -left-[200px] top-[20%] h-[800px] w-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(133,0,255,0.15) 0%, transparent 70%)",
            animation: "meshFloat1 20s ease-in-out infinite",
          }}
        />
        <div
          className="absolute -right-[100px] -top-[10%] h-[600px] w-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(27,42,74,0.4) 0%, transparent 70%)",
            animation: "meshFloat2 25s ease-in-out infinite",
          }}
        />
        <div
          className="absolute bottom-[-20%] left-[30%] h-[700px] w-[700px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(133,0,255,0.1) 0%, transparent 70%)",
            animation: "meshFloat3 22s ease-in-out infinite",
          }}
        />
      </div>

      {/* ── Chaos layer ── */}
      {showChaos && (
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {items.map((item) => {
            const base: React.CSSProperties = {
              position: "absolute",
              left: `${item.x}%`,
              top: `${item.y}%`,
              willChange: resolved ? "auto" : "transform, opacity",
            };

            const resolvedOpacity = item.residual ? 0.05 : 0;

            if (item.type === "text" || item.type === "data") {
              return (
                <span
                  key={item.id}
                  ref={chaosRef(item.id)}
                  className="whitespace-nowrap"
                  style={{
                    ...base,
                    fontSize: `${item.fontSize}px`,
                    fontFamily: item.type === "data"
                      ? "var(--font-jetbrains-mono)"
                      : "var(--font-dm-sans)",
                    color: item.type === "data" ? "rgb(133,0,255)" : "white",
                    transform: `rotate(${item.rot ?? 0}deg)`,
                    opacity: resolved ? resolvedOpacity : item.opacity,
                  }}
                >
                  {item.content}
                </span>
              );
            }

            if (item.type === "line") {
              return (
                <div
                  key={item.id}
                  ref={chaosRef(item.id)}
                  style={{
                    ...base,
                    width: `${item.width}px`,
                    height: "1px",
                    backgroundColor: "white",
                    transform: `rotate(${item.angle ?? 0}deg)`,
                    opacity: resolved ? resolvedOpacity : item.opacity,
                  }}
                />
              );
            }

            if (item.type === "rect") {
              return (
                <div
                  key={item.id}
                  ref={chaosRef(item.id)}
                  style={{
                    ...base,
                    width: `${item.width}px`,
                    height: `${item.height}px`,
                    border: "1px solid white",
                    opacity: resolved ? 0 : item.opacity,
                  }}
                />
              );
            }

            if (item.type === "dots") {
              return (
                <div
                  key={item.id}
                  ref={chaosRef(item.id)}
                  style={{ ...base, opacity: resolved ? 0 : item.opacity }}
                >
                  {DOT_OFFSETS.map(([dx, dy], j) => (
                    <div
                      key={j}
                      className="absolute h-[3px] w-[3px] rounded-full"
                      style={{ left: dx, top: dy, backgroundColor: "rgb(133,0,255)" }}
                    />
                  ))}
                </div>
              );
            }

            return null;
          })}
        </div>
      )}

      {/* ── Content ── */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">

        <h1 className="font-display font-bold leading-[1.1] text-white text-[40px] md:text-[52px] lg:text-[72px]">
          {HEADLINE_WORDS.map((word, i) => (
            <span key={i}>
              {i > 0 && HEADLINE_WORDS[i - 1].line === word.line && " "}
              {i > 0 && HEADLINE_WORDS[i - 1].line !== word.line && <br />}
              <span
                ref={wordRef(i)}
                className="inline-block"
                style={{ opacity: resolved ? 1 : 0 }}
              >
                {word.text}
              </span>
            </span>
          ))}
          <span
            ref={periodRef}
            className="inline-block"
            style={{
              opacity: resolved ? 1 : 0,
              color: resolved ? ACCENT : "white",
            }}
          >
            .
          </span>
        </h1>

        <p
          ref={subRef}
          className="mt-6 max-w-[600px] font-sans text-lg md:text-xl"
          style={{ opacity: resolved ? 1 : 0, color: "#B0B8C8" }}
        >
          We help business leaders cut through AI complexity and build systems
          that deliver measurable, consistent value.
        </p>

        <div
          ref={ctaRef}
          className="mt-10 flex flex-col items-center gap-4"
          style={{ opacity: resolved ? 1 : 0 }}
        >
          <a
            ref={ctaBtnRef}
            href="/contact"
            className="inline-flex items-center justify-center rounded-[4px] px-8 py-4 font-sans text-sm font-semibold uppercase tracking-[0.05em] text-white transition-all duration-150 hover:scale-[1.02]"
            style={{
              backgroundColor: ACCENT,
              boxShadow: "0 0 20px rgba(133,0,255,0.3)",
            }}
          >
            <span className="hidden sm:inline">Book Your Complimentary Strategy Review</span>
            <span className="sm:hidden">Book a Strategy Review</span>
          </a>
          <a
            href="#process"
            className="group inline-flex items-center gap-1 font-sans text-base font-medium text-white transition-colors hover:text-[#8500FF]"
          >
            See How We Work{" "}
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}