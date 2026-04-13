import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../../components/common/Container";

/* ─── Skill data ───────────────────────────────────────────────────── */
const SKILL_GROUPS = [
  {
    index: "01",
    category: "AI & Machine Learning",
    items: [
      { name: "Python",          hint: "Used across 3 systems" },
      { name: "LLMs",            hint: "Multi-agent pipelines" },
      { name: "Computer Vision",  hint: "Detection & tracking" },
      { name: "Model Training",   hint: "Fine-tuning & eval" },
      { name: "Data Processing",  hint: "Real-time pipelines" },
    ],
  },
  {
    index: "02",
    category: "Backend & Systems",
    items: [
      { name: "Node.js",        hint: "Production servers" },
      { name: "FastAPI",         hint: "Drone & AI backends" },
      { name: "REST APIs",       hint: "End-to-end design" },
      { name: "WebSockets",      hint: "Live telemetry feeds" },
      { name: "System Design",   hint: "Distributed architectures" },
    ],
  },
  {
    index: "03",
    category: "Frontend",
    items: [
      { name: "React",            hint: "Production dashboards" },
      { name: "TailwindCSS",      hint: "Design systems" },
      { name: "UI/UX Systems",    hint: "Component architecture" },
      { name: "State Management",  hint: "Complex app state" },
    ],
  },
  {
    index: "04",
    category: "DevOps & Infra",
    items: [
      { name: "Docker",          hint: "Containerized deploys" },
      { name: "CI/CD",           hint: "Zero-touch pipelines" },
      { name: "GitHub Actions",   hint: "Automated workflows" },
      { name: "Linux",           hint: "Server administration" },
      { name: "Cloud",           hint: "AWS & Vercel" },
    ],
  },
];

/* ─── Single skill pill ────────────────────────────────────────────── */
function SkillPill({ name, hint, delay }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative group cursor-default"
    >
      <div
        className="flex items-center gap-3 px-4 py-3 border transition-all duration-300"
        style={{
          borderColor: hovered ? "rgba(200,245,90,0.4)" : "#1c1c1c",
          background: hovered ? "rgba(200,245,90,0.03)" : "transparent",
          borderRadius: "2px",
          boxShadow: hovered ? "0 0 20px rgba(200,245,90,0.06), inset 0 0 20px rgba(200,245,90,0.02)" : "none",
          transform: hovered ? "translateY(-1px)" : "translateY(0)",
        }}
      >
        {/* dot indicator */}
        <div
          className="w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-300"
          style={{
            background: hovered ? "#c8f55a" : "#2a2a2a",
            boxShadow: hovered ? "0 0 6px rgba(200,245,90,0.5)" : "none",
          }}
        />

        {/* skill name */}
        <span
          className="font-mono text-[11px] tracking-[0.08em] transition-colors duration-300"
          style={{ color: hovered ? "#f0f0f0" : "#666" }}
        >
          {name}
        </span>

        {/* experience hint — slides in on hover */}
        <motion.span
          initial={false}
          animate={{
            opacity: hovered ? 1 : 0,
            x: hovered ? 0 : -6,
            width: hovered ? "auto" : 0,
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="font-mono text-[9px] tracking-[0.12em] text-[#555] uppercase whitespace-nowrap overflow-hidden ml-auto"
        >
          {hint}
        </motion.span>
      </div>
    </motion.div>
  );
}

/* ─── Single group card ────────────────────────────────────────────── */
function SkillGroup({ group, groupDelay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: groupDelay }}
      className="flex flex-col"
    >
      {/* category header */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#1c1c1c]">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#333] uppercase">
          {group.index}
        </span>
        <span
          className="font-mono text-[9px] tracking-[0.28em] uppercase px-2.5 py-1"
          style={{ color: "#c8f55a", border: "1px solid rgba(200,245,90,0.25)", borderRadius: "2px" }}
        >
          {group.category}
        </span>
      </div>

      {/* skill pills */}
      <div className="flex flex-col gap-2">
        {group.items.map((item, i) => (
          <SkillPill
            key={item.name}
            name={item.name}
            hint={item.hint}
            delay={groupDelay + i * 0.06}
          />
        ))}
      </div>

      {/* item count */}
      <div className="mt-4 pt-3 border-t border-[#141414]">
        <span className="font-mono text-[9px] tracking-[0.2em] text-[#2a2a2a] uppercase">
          {group.items.length} skills
        </span>
      </div>
    </motion.div>
  );
}

/* ─── Section ──────────────────────────────────────────────────────── */
export function Skills() {
  const totalSkills = SKILL_GROUPS.reduce((sum, g) => sum + g.items.length, 0);

  return (
    <section id="skills" className="pt-6 pb-0" style={{ scrollMarginTop: "72px" }}>
      <Container>
        {/* section header — matches Projects pattern exactly */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-between mb-20"
        >
          <div className="flex items-center gap-4">
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">04</span>
            <div className="w-12 h-px bg-[#2a2a2a]" />
            <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">Skills / Tech Stack</span>
            <div className="flex-1 h-px bg-[#1c1c1c]" />
          </div>
          <span className="font-mono text-[10px] tracking-[0.18em] text-[#333] uppercase ml-8 whitespace-nowrap">
            {totalSkills} technologies
          </span>
        </motion.div>
      </Container>

      {/* full-bleed content area with border — matches Projects */}
      <div className="border-t border-[#141414]">
        <Container>
          <div className="py-16">
            {/* ghost watermark */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="font-display font-bold text-transparent leading-none select-none mb-16 -ml-1.5"
              style={{
                fontSize: "clamp(64px,10vw,160px)",
                letterSpacing: "-0.05em",
                WebkitTextStroke: "1px #141414",
              }}
            >
              STACK
            </motion.div>

            {/* 2×2 grid of skill groups */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16">
              {SKILL_GROUPS.map((group, i) => (
                <SkillGroup
                  key={group.index}
                  group={group}
                  groupDelay={i * 0.12}
                />
              ))}
            </div>

            {/* bottom status line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-4 mt-16 pt-8 border-t border-[#141414]"
            >
              <div
                className="w-1.5 h-1.5 rounded-full bg-green-400"
                style={{ boxShadow: "0 0 8px rgba(74,222,128,0.5)" }}
              />
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#444] uppercase">
                Always expanding — currently deep in AI-driven distributed systems & real-time architectures.
              </span>
            </motion.div>
          </div>
        </Container>
      </div>

      <div className="pb-24" />
    </section>
  );
}
