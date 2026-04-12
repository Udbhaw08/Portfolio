import { IMAGES } from "../constants/theme";
import { useInView } from "../hooks/useInView";

export function AboutMe() {
  const [ref, visible] = useInView();

  return (
    <section id="about-me" ref={ref} className="pt-[120px] pb-24">
      {/* section label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">02</span>
        <div className="w-8 h-px bg-[#2a2a2a]" />
        <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">About</span>
        <div className="flex-1 h-px bg-[#1c1c1c]" />
      </div>

      <div
        className={`grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-24 items-start transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* LEFT — text */}
        <div>
          {/* large name */}
          <div className="mb-10">
            <h2
              className="font-display font-bold text-foreground leading-none m-0"
              style={{ fontSize: "clamp(36px,5vw,72px)", letterSpacing: "-0.04em" }}
            >
              Udbhaw
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.5)" }} />
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#555] uppercase">Available · Full Stack + AI</span>
            </div>
          </div>

          {/* bio */}
          <div className="space-y-5 max-w-[560px]">
            <p
              className="font-heading leading-[1.75] m-0"
              style={{ fontSize: "clamp(15px,1.4vw,17px)", color: "#999" }}
            >
              Self-taught full-stack developer with a focus on{" "}
              <span className="text-foreground font-medium">intelligent systems</span> —
              platforms that process real-world data, make decisions under constraint,
              and perform at scale.
            </p>
            <p
              className="font-heading leading-[1.75] m-0"
              style={{ fontSize: "clamp(15px,1.4vw,17px)", color: "#666" }}
            >
              I work at the intersection of technical precision and visual craft.
              Over the past year I've shipped full-stack platforms, AI-driven
              tools, and interactive experiences — always pushing into what's next.
            </p>
          </div>

          {/* stat row */}
          <div className="flex gap-12 mt-12 pt-10 border-t border-[#1c1c1c]">
            {[
              { val: "3+",  label: "Systems Built"   },
              { val: "1Y+", label: "Production Work" },
              { val: "AI",  label: "Core Focus"      },
            ].map(({ val, label }) => (
              <div key={label}>
                <div
                  className="font-display font-bold text-foreground leading-none"
                  style={{ fontSize: "clamp(24px,3vw,40px)", letterSpacing: "-0.04em" }}
                >
                  {val}
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-[#444] uppercase mt-1.5">{label}</div>
              </div>
            ))}
          </div>

          <a
            href="#contacts"
            className="inline-flex items-center gap-3 mt-10 font-mono text-[11px] tracking-[0.16em] uppercase text-foreground border border-[#2a2a2a] px-6 py-3.5 no-underline transition-colors hover:border-[#555]"
          >
            Get in touch
            <span className="text-[#555]">→</span>
          </a>
        </div>

        {/* RIGHT — image */}
        <div className="relative mx-auto lg:mx-0">
          {/* corner marks */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-[#333]" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-[#333]" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-[#333]" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-[#333]" />

          <div className="w-[280px] h-[380px] overflow-hidden">
            <img
              src={IMAGES.hero}
              alt="Udbhaw"
              className="w-full h-full object-cover block"
              style={{ objectPosition: "53% 10%", filter: "grayscale(15%) contrast(1.05)" }}
            />
          </div>

          {/* floating tag */}
          <div
            className="absolute -bottom-5 -right-5 bg-background border border-[#222] px-4 py-3"
            style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.6)" }}
          >
            <div className="font-mono text-[9px] tracking-[0.2em] text-[#444] uppercase mb-1">Location</div>
            <div className="font-mono text-[11px] tracking-[0.14em] text-[#666]">India · Remote OK</div>
          </div>
        </div>
      </div>
    </section>
  );
}
