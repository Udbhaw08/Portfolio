import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../../components/common/Container";

/* ─── Dummy data — replace with real projects later ────────────────── */
const PROJECTS = [
  {
    index: "01",
    type: "AI / LOGISTICS / SYSTEM DESIGN",
    name: "AI TRANSCOM",
    hook: "Convoy routing that adapts before the road does.",
    desc: "Modular platform for high-stakes transport ops — dynamic routing, convoy spacing, real-time replanning. Built for conditions that change faster than any static schedule can handle.",
    stats: ["Multi-modal", "Real-time", "Dynamic Routes"],
    tags: ["Node.js", "React", "MongoDB", "WebSockets", "AI Models"],
    github: "https://github.com/Udbhaw08/Transportation_PS",
    live: "#",
  },
  {
    index: "02",
    type: "AI / AGENT SYSTEM / BLOCKCHAIN",
    name: "Fair Hiring Network",
    hook: "Your GitHub commits don't lie. Your resume might.",
    desc: "Multi-agent pipeline that pulls real skill signals from GitHub, LeetCode, and beyond — not just what candidates claim. Evidence graphs and scoring models surface the actual hire, not the best-formatted PDF.",
    stats: ["Multi-agent", "Evidence Graph", "LLM-powered"],
    tags: ["Python", "Node.js", "Graph Processing", "LLMs", "Solana"],
    github: "https://github.com/Udbhaw08/HEUREKA",
    live: "#",
  },
  {
    index: "03",
    type: "DEVOPS / INFRASTRUCTURE / AUTOMATION",
    name: "AutoFlow CI/CD",
    hook: "Push code. Tests run. Ships clean.",
    desc: "End-to-end pipeline that handles integration, testing, and deployment without manual intervention. Built during RIFT Hackathon — fast by necessity, reliable by design.",
    stats: ["Zero-touch Deploy", "Full Pipeline", "Hackathon Build"],
    tags: ["Docker", "GitHub Actions", "Node.js", "Bash", "Cloud"],
    github: "#",
    live: "#",
  },
  {
    index: "04",
    type: "DRONE / REAL-TIME SYSTEM / CONTROL",
    name: "GCS Command Dashboard",
    hook: "Send a command. Watch the drone move.",
    desc: "Ground control interface for real drone telemetry — MAVLink comms, NED navigation, live position feed. Built for precision control, not simulation.",
    stats: ["MAVLink", "NED Control", "Live Telemetry"],
    tags: ["React", "FastAPI", "MAVLink", "WebSockets", "Python"],
    github: "https://github.com/Udbhaw08/mavlink",
    live: "#",
  },
];

/* ─── Video / media placeholder ────────────────────────────────────── */
function MediaPlaceholder({ index }) {
  return (
    <div className="relative w-full h-full min-h-[360px] lg:min-h-[440px] overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0d0d0d 0%, #111 40%, #0a0a0a 100%)" }}
    >
      {/* corner marks */}
      <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#2a2a2a]" />
      <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#2a2a2a]" />
      <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#2a2a2a]" />
      <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#2a2a2a]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* pulse ring */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <motion.div
            className="absolute w-20 h-20 rounded-full border border-[#c8f55a]/20"
            animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute w-20 h-20 rounded-full border border-[#c8f55a]/10"
            animate={{ scale: [1, 2.2], opacity: [0.3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
          {/* play icon */}
          <div className="relative w-14 h-14 rounded-full border border-[#2a2a2a] flex items-center justify-center bg-[#0a0a0a]">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 2l9 5-9 5V2z" fill="#c8f55a" />
            </svg>
          </div>
        </div>
      </div>

      {/* bottom label */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center">
        <span className="font-mono text-[9px] tracking-[0.28em] text-[#333] uppercase">
          Video Teaser · {index}
        </span>
      </div>

      {/* accent line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8f55a]/30 to-transparent" />
    </div>
  );
}

/* ─── Single project block ──────────────────────────────────────────── */
function ProjectBlock({ project, flip }) {
  const [hovered, setHovered] = useState(false);

  const textCol = (
    <motion.div
      className="flex flex-col justify-center px-0 lg:px-12 py-12 lg:py-0"
      initial={{ opacity: 0, x: flip ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* system type */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="font-mono text-[9px] tracking-[0.28em] uppercase px-2.5 py-1"
          style={{ color: "#c8f55a", border: "1px solid rgba(200,245,90,0.25)", borderRadius: "2px" }}
        >
          {project.type}
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#333] uppercase">
          {project.index}
        </span>
      </div>

      {/* name */}
      <h3
        className="font-display font-bold text-foreground leading-none m-0 mb-4"
        style={{ fontSize: "clamp(36px, 4.5vw, 64px)", letterSpacing: "-0.03em" }}
      >
        {project.name}
      </h3>

      {/* hook */}
      <p
        className="font-heading m-0 mb-5"
        style={{ fontSize: "clamp(16px, 1.6vw, 20px)", color: "#c8f55a", letterSpacing: "-0.01em", lineHeight: 1.3 }}
      >
        {project.hook}
      </p>

      {/* description */}
      <p
        className="font-heading m-0 mb-8 max-w-[440px]"
        style={{ fontSize: "clamp(13px, 1.2vw, 15px)", color: "#666", lineHeight: 1.85 }}
      >
        {project.desc}
      </p>

      {/* stats — appear on hover */}
      <motion.div
        className="flex gap-6 mb-8"
        animate={{ opacity: hovered ? 1 : 0.35, y: hovered ? 0 : 4 }}
        transition={{ duration: 0.3 }}
      >
        {project.stats.map((s) => (
          <div key={s} className="flex flex-col gap-1">
            <span className="font-mono text-[13px] font-medium text-foreground tracking-tight">{s}</span>
            <div className="h-px w-full" style={{ background: hovered ? "#c8f55a" : "#2a2a2a", transition: "background 0.3s" }} />
          </div>
        ))}
      </motion.div>

      {/* tech tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tags.map((t) => (
          <span
            key={t}
            className="font-mono text-[9px] tracking-[0.14em] text-[#555] uppercase px-2.5 py-1 border border-[#222] transition-colors"
            style={{ borderRadius: "2px" }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex items-center gap-4">
        {project.live !== "#" && (
          <a
            href={project.live}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase no-underline px-5 py-3 transition-all duration-200"
            style={{ background: "#c8f55a", color: "#0a0a0a", borderRadius: "2px" }}
          >
            View Project
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        )}
        {project.github !== "#" && (
          <a
            href={project.github}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] uppercase no-underline px-5 py-3 border border-[#2a2a2a] text-[#888] hover:border-[#555] hover:text-foreground transition-all duration-200"
            style={{ borderRadius: "2px" }}
          >
            GitHub
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 8L8 2M8 2H3M8 2v5" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
        )}
      </div>
    </motion.div>
  );

  const mediaCol = (
    <motion.div
      initial={{ opacity: 0, x: flip ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MediaPlaceholder index={project.index} />
    </motion.div>
  );

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#141414]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {flip ? (
        <>
          <div className="lg:border-r border-[#141414]">{mediaCol}</div>
          <div>{textCol}</div>
        </>
      ) : (
        <>
          <div className="lg:border-r border-[#141414]">{textCol}</div>
          <div>{mediaCol}</div>
        </>
      )}
    </div>
  );
}

/* ─── Section ───────────────────────────────────────────────────────── */
export function Projects() {
  return (
    <section id="works" className="pt-6 pb-0" style={{scrollMarginTop:"72px"}}>
      {/* section header */}
      <Container>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-20"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">03</span>
            <div className="w-12 h-px bg-[#2a2a2a]" />
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">Projects</span>
            <div className="flex-1 h-px bg-[#1c1c1c]" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.18em] text-[#333] uppercase ml-8 whitespace-nowrap">
            {PROJECTS.length} selected works
          </span>
        </motion.div>
      </Container>

      {/* full-bleed project blocks */}
      <div className="border-t border-[#141414]">
        {PROJECTS.map((project, i) => (
          <ProjectBlock key={project.index} project={project} flip={i % 2 !== 0} />
        ))}
      </div>

      <div className="pb-24" />
    </section>
  );
}
