import { motion } from "framer-motion";
import { Container } from "../../components/common/Container";
import { BorderGlow } from "../../components/common/BorderGlow";

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function ProjectRow({ index, tags, title, desc, type, liveUrl, glow }) {
  return (
    <motion.div variants={itemVariants} className="mb-4">
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
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="works" className="pt-[160px] pb-24">
      <Container>
        {/* section label */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center justify-between mb-20"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">03</span>
            <div className="w-12 h-px bg-[#2a2a2a]" />
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">Projects</span>
          </div>
          <a
            href="#"
            className="font-mono text-[10px] tracking-[0.18em] text-[#444] uppercase no-underline hover:text-[#888] transition-colors"
          >
            View all projects →
          </a>
        </motion.div>

        {/* column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-[48px_1fr_auto] lg:grid-cols-[48px_1fr_220px_100px] gap-6 mb-6 px-8 pb-4 border-b border-[#1c1c1c]"
        >
          <span className="font-mono text-[9px] tracking-[0.22em] text-[#333] uppercase">#</span>
          <span className="font-mono text-[9px] tracking-[0.22em] text-[#333] uppercase">Project Title</span>
          <span className="font-mono text-[9px] tracking-[0.22em] text-[#333] uppercase hidden lg:block text-center">Tech Stack</span>
          <span className="font-mono text-[9px] tracking-[0.22em] text-[#333] uppercase hidden lg:block text-right">Category</span>
        </motion.div>

        {/* rows with intersection observer variants */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {PROJECTS.map((p) => (
            <ProjectRow key={p.index} {...p} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

