import { useEffect, useState } from "react";
import { IMAGES } from "../constants/theme";
import { RoleTypist } from "../components/ui/RoleTypist";
import { LiquidEther } from "../components/ui/LiquidEther";


/* ─── center atmosphere statement ──────────────────────────────────── */
function Statement() {
  return (
    <p
      className="font-heading text-[clamp(15px,1.6vw,22px)] font-normal leading-relaxed tracking-tight max-w-[440px] italic text-center select-none pointer-events-none"
      style={{ color: "rgba(240,240,240,0.13)" }}
    >
      I build intelligent systems that bring clarity
      <br />to complex real-world operations.
    </p>
  );
}

/* ─── marquee data strip ────────────────────────────────────────────── */
const STRIP_ITEMS = [
  "PROJECT: AI TRANSCOM",
  "TYPE: MILITARY LOGISTICS SYSTEM",
  "STATUS: IN DEVELOPMENT",
  "FOCUS: ROUTE OPTIMIZATION + REAL-TIME CONTROL",
];

function DataStrip() {
  const text = STRIP_ITEMS.join("  •  ");
  return (
    <div className="absolute left-0 right-0 border-y border-border-dark overflow-hidden h-8 flex items-center">
      <div className="flex whitespace-nowrap animate-marquee will-change-transform">
        {[text, text].map((t, i) => (
          <span
            key={i}
            className="font-mono text-[10px] tracking-[0.18em] uppercase pr-20"
            style={{ color: "#3a3a3a", textShadow: "0 0 12px rgba(255,255,255,0.04)" }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── main Hero ─────────────────────────────────────────────────────── */
export function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 60);
    return () => clearTimeout(t);
  }, []);

  const fadeIn = (delay = 0) => ({
    opacity: ready ? 1 : 0,
    animation: ready ? `fadeUp 0.75s cubic-bezier(0.22,1,0.36,1) ${delay}s forwards` : "none",
    animationFillMode: "both",
  });

  return (
    <section
      id="home"
      className="relative w-full h-screen min-h-[620px] overflow-hidden bg-background"
    >
      <LiquidEther />

      {/* PHOTO — right-0 w-[70%] object-[53%_0%] scale-[1.12] */}
      <div
        className="absolute top-0 right-0 w-[70%] h-full pointer-events-none select-none"
        style={fadeIn(0)}
      >
        <img
          src={IMAGES.hero}
          alt="Udbhaw"
          className="w-full h-full object-cover block"
          style={{
            objectPosition: "53% 0%",
            transform: "scale(1.12)",
            transformOrigin: "top center",
          }}
        />
        {/* left blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/5 to-transparent from-0% via-5% to-42%" />
        {/* bottom blend */}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent from-0% to-38%" />
        {/* top blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent from-0% to-18%" />
      </div>

      {/* ZONE A — LEFT HOOK CARD (top-left) */}
      <div
        className="absolute top-24 left-11 z-10"
        style={fadeIn(0.15)}
      >
        {/* label */}
        <div className="font-mono text-[10px] tracking-[0.18em] text-medium-gray uppercase mb-3.5">
          — Systems &amp; Intelligence
        </div>

        {/* hook headline */}
        <div
          className="font-display font-bold leading-none text-foreground"
          style={{ fontSize: "clamp(28px,3.8vw,52px)", letterSpacing: "-0.04em" }}
        >
          <div>AI SYSTEMS</div>
          <div>THAT SOLVE</div>
          <div>
            <span
              style={{
                background: "linear-gradient(90deg, #ffffff, #666666)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              REAL PROBLEMS.
            </span>
          </div>
        </div>

        {/* sub copy */}
        <p className="font-heading text-[13px] font-normal text-muted leading-relaxed mt-4.5 max-w-[280px] tracking-tight">
          Building intelligent platforms using AI,
          <br />real-time data, and scalable architecture.
        </p>

        {/* CTA */}
        <a
          href="#works"
          className="inline-block mt-7 font-mono text-[11px] font-medium tracking-[0.12em] uppercase text-foreground border border-dark-gray px-6 py-3 cursor-pointer transition-colors hover:border-foreground no-underline"
        >
          EXPLORE WORK →
        </a>
      </div>

      {/* ZONE B — CENTER ATMOSPHERE TEXT (subtle overlay) */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center"
        style={{ ...fadeIn(0.3) }}
      >
        <Statement />
      </div>

      {/* ZONE C — RIGHT MICRO-INFO BLOCK */}
      <div
        className="absolute right-11 top-24 z-10 flex flex-col gap-7 items-end"
        style={fadeIn(0.4)}
      >
        {/* year + stack */}
        <div className="text-right">
          <div className="font-mono text-[10px] tracking-[0.16em] text-dark-gray uppercase">
            (2026)
          </div>
          <div className="font-mono text-[10px] tracking-[0.16em] text-medium-gray uppercase mt-0.5">
            FULL STACK + AI
          </div>
        </div>

        {/* approach block */}
        <div className="text-right">
          <div className="font-mono text-[9px] tracking-[0.2em] text-dark-gray uppercase mb-2">
            APPROACH
          </div>
          {["SYSTEM THINKING", "REAL-WORLD PROBLEMS", "PERFORMANCE FOCUSED"].map((line) => (
            <div
              key={line}
              className="font-mono text-[9px] tracking-[0.14em] text-medium-gray uppercase mb-1"
            >
              {line}
            </div>
          ))}
        </div>

        {/* focus block */}
        <div className="text-right">
          <div className="font-mono text-[9px] tracking-[0.2em] text-dark-gray uppercase mb-2">
            FOCUS
          </div>
          <div className="font-mono text-[9px] tracking-[0.14em] text-medium-gray uppercase">
            INTELLIGENT SYSTEM DESIGN
          </div>
        </div>

        {/* rotating role */}
        <div className="text-right">
          <RoleTypist size={10} color="#3a3a3a" />
        </div>
      </div>

      {/* ZONE D — DATA STRIP (marquee) */}
      <div className="absolute top-[62%] left-0 right-0 z-10">
        <DataStrip />
      </div>

      {/* ZONE E — BOTTOM DISPLAY NAME STAMP */}
      <div
        className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0.78] z-5 pointer-events-none"
        style={fadeIn(0.1)}
      >
        <h1
          className="font-display font-extrabold text-transparent leading-[0.82] select-none whitespace-nowrap"
          style={{
            fontSize: "clamp(80px,17vw,240px)",
            letterSpacing: "-0.04em",
            WebkitTextStroke: "1px #1c1c1c",
          }}
        >
          UDBHAW.
        </h1>
      </div>

      {/* ZONE F — BOTTOM ACTION BAR */}
      <div
        className="absolute bottom-7 left-11 right-11 z-20 flex justify-between items-end"
        style={fadeIn(0.6)}
      >
        {/* left — stats / identity */}
        <div className="flex flex-col gap-1.5">
          <div className="font-mono text-[11px] tracking-[0.14em] text-medium-gray uppercase font-medium">
            AI · SYSTEMS · FULL STACK
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.4)] inline-block" />
            <span className="font-mono text-[10px] tracking-[0.14em] text-[#444] uppercase">
              Open to Opportunities
            </span>
          </div>
        </div>

        {/* center CTA */}
        <a
          href="#works"
          className="font-mono text-[11px] tracking-[0.14em] uppercase text-background bg-foreground px-7 py-3.25 cursor-pointer no-underline transition-colors hover:bg-[#ccc] font-medium"
        >
          SEE MY WORK →
        </a>

        {/* right — scroll hint */}
        <div className="flex flex-col items-center gap-1.5 opacity-30">
          <div className="w-px h-8 bg-[#888]" />
          <span className="font-mono text-[9px] tracking-[0.14em] text-[#888] uppercase">scroll</span>
        </div>
      </div>
    </section>
  );
}
