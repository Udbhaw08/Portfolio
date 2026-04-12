import { useInView } from "../hooks/useInView";
import { BorderGlow } from "../components/ui/BorderGlow";

const PROJECTS = [
  {
    index: "01",
    tags: ["HTML", "SCSS", "Python", "Flask"],
    title: "ChertNodes",
    desc: "Minecraft server hosting platform with automated provisioning and real-time monitoring.",
    type: "Platform",
    liveUrl: "#",
    glow: "180 100 50", // Cyan
  },
  {
    index: "02",
    tags: ["React", "Express", "Discord.js", "Node.js"],
    title: "ProtectX",
    desc: "Discord anti-crash bot with advanced rate-limiting and threat detection algorithms.",
    type: "System",
    liveUrl: "#",
    glow: "320 100 60", // Pink
  },
  {
    index: "03",
    tags: ["CSS", "Express", "Node.js"],
    title: "Kahoot Answers",
    desc: "Real-time Kahoot quiz answer viewer with live game interception.",
    type: "Tool",
    liveUrl: "#",
    glow: "45 100 50", // Amber
  },
];

function ProjectRow({ index, tags, title, desc, type, liveUrl, glow, delay }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className="mb-4 transition-all duration-500"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <BorderGlow
        backgroundColor="#0a0a0a"
        borderRadius={16}
        glowColor={glow}
        className="w-full"
      >
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group grid grid-cols-[48px_1fr_auto] lg:grid-cols-[48px_1fr_220px_100px] gap-6 items-center px-8 py-10 no-underline cursor-pointer"
        >
          {/* index */}
          <span className="font-mono text-[11px] tracking-[0.16em] text-[#3a3a3a] group-hover:text-[#666] transition-colors">
            {index}
          </span>

          {/* title + desc */}
          <div>
            <h3
              className="font-display font-bold text-foreground m-0 leading-none transition-all duration-300 group-hover:translate-x-1"
              style={{ fontSize: "clamp(20px,2.4vw,32px)", letterSpacing: "-0.03em" }}
            >
              {title}
            </h3>
            <p className="font-heading text-[14px] text-[#666] leading-relaxed mt-2.5 m-0 max-w-[480px]">
              {desc}
            </p>
          </div>

          {/* tags */}
          <div className="hidden lg:flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="font-mono text-[10px] tracking-[0.12em] text-[#555] uppercase border border-[#2a2a2a] px-2.5 py-1 group-hover:border-[#444] group-hover:text-[#888] transition-colors"
              >
                {t}
              </span>
            ))}
          </div>

          {/* type + arrow */}
          <div className="flex items-center justify-end gap-3">
            <span className="font-mono text-[10px] tracking-[0.18em] text-[#444] uppercase hidden lg:block">
              {type}
            </span>
            <span className="font-mono text-[16px] text-[#333] group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1">
              ↗
            </span>
          </div>
        </a>
      </BorderGlow>
    </div>
  );
}

export function Projects() {
  const [ref, visible] = useInView();

  return (
    <section id="works" ref={ref} className="pt-[120px] pb-24">
      {/* section label */}
      <div className="flex items-center justify-between mb-16">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">03</span>
          <div className="w-8 h-px bg-[#2a2a2a]" />
          <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">Projects</span>
        </div>
        <a
          href="#"
          className="font-mono text-[10px] tracking-[0.18em] text-[#444] uppercase no-underline hover:text-[#888] transition-colors"
        >
          View all →
        </a>
      </div>

      {/* column headers */}
      <div
        className={`grid grid-cols-[48px_1fr_auto] lg:grid-cols-[48px_1fr_220px_100px] gap-6 mb-4 px-8 pb-4 border-b border-[#1c1c1c] transition-all duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <span className="font-mono text-[9px] tracking-[0.22em] text-[#333] uppercase">#</span>
        <span className="font-mono text-[9px] tracking-[0.22em] text-[#333] uppercase">Project</span>
        <span className="font-mono text-[9px] tracking-[0.22em] text-[#333] uppercase hidden lg:block">Stack</span>
        <span className="font-mono text-[9px] tracking-[0.22em] text-[#333] uppercase hidden lg:block text-right">Type</span>
      </div>

      {/* rows */}
      <div>
        {PROJECTS.map((p, i) => (
          <ProjectRow key={p.index} {...p} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}

