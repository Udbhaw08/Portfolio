import { DiscordIcon, EmailIcon } from "../components/ui/Icons";
import { useInView } from "../hooks/useInView";

export function Contacts() {
  const [ref, visible] = useInView();

  return (
    <section id="contacts" ref={ref} className="pt-[120px] pb-24">
      {/* section label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">05</span>
        <div className="w-8 h-px bg-[#2a2a2a]" />
        <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">Contact</span>
        <div className="flex-1 h-px bg-[#1c1c1c]" />
      </div>

      <div
        className={`transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* big heading */}
        <div className="mb-16">
          <h2
            className="font-display font-bold text-foreground leading-none m-0"
            style={{ fontSize: "clamp(36px,6vw,88px)", letterSpacing: "-0.04em" }}
          >
            Let's build
            <br />
            <span
              style={{
                background: "linear-gradient(90deg, #ffffff 0%, #444 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              something.
            </span>
          </h2>
        </div>

        {/* two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-16 items-start">
          {/* left — description */}
          <div>
            <p
              className="font-heading leading-[1.8] m-0 mb-8"
              style={{ fontSize: "clamp(15px,1.3vw,17px)", color: "#777" }}
            >
              Open to freelance opportunities and collaborations.
              If you have a project in mind, a system to build,
              or just want to connect — reach out.
            </p>

            {/* availability badge */}
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.4)" }} />
              <span className="font-mono text-[11px] tracking-[0.18em] text-[#555] uppercase">
                Open to opportunities · 2026
              </span>
            </div>
          </div>

          {/* right — contact card */}
          <div className="border border-[#1c1c1c]">
            {/* card header */}
            <div className="px-6 py-4 border-b border-[#1c1c1c] flex items-center justify-between">
              <span className="font-mono text-[10px] tracking-[0.2em] text-[#444] uppercase">
                Reach me
              </span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px rgba(74,222,128,0.3)" }} />
            </div>

            {/* discord */}
            <div className="px-6 py-5 border-b border-[#1c1c1c] flex items-center justify-between group cursor-default">
              <div className="flex items-center gap-3">
                <span className="text-[#444]"><DiscordIcon /></span>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] text-[#444] uppercase mb-1">Discord</div>
                  <span className="font-heading text-[14px] text-[#777]">!Udbhaw#0000</span>
                </div>
              </div>
              <span className="font-mono text-[14px] text-[#333] group-hover:text-[#666] transition-colors">→</span>
            </div>

            {/* email */}
            <a
              href="mailto:udbhaw@example.com"
              className="px-6 py-5 flex items-center justify-between group no-underline"
            >
              <div className="flex items-center gap-3">
                <span className="text-[#444]"><EmailIcon /></span>
                <div>
                  <div className="font-mono text-[9px] tracking-[0.18em] text-[#444] uppercase mb-1">Email</div>
                  <span className="font-heading text-[14px] text-[#777] group-hover:text-foreground transition-colors">
                    udbhaw@example.com
                  </span>
                </div>
              </div>
              <span className="font-mono text-[14px] text-[#333] group-hover:text-foreground transition-all group-hover:translate-x-0.5">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
