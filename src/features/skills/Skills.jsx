import { motion } from "framer-motion";
import { Container } from "../../components/common/Container";

const SKILL_GROUPS = [
  { category: "Languages",  items: ["TypeScript", "JavaScript", "Python", "Lua"] },
  { category: "Frameworks", items: ["React", "Vue", "Express", "Flask", "Discord.js"] },
  { category: "Databases",  items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { category: "Tools",      items: ["VSCode", "Neovim", "Linux", "Figma", "Git"] },
  { category: "Other",      items: ["HTML", "CSS", "SCSS", "REST", "Jinja"] },
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

export function Skills() {
  return (
    <section id="skills" className="pt-[160px] pb-24">
      <Container>
        {/* section label */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">04</span>
          <div className="w-12 h-px bg-[#2a2a2a]" />
          <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">Skills</span>
          <div className="flex-1 h-px bg-[#1c1c1c]" />
        </motion.div>

        <div>
          {/* ghost watermark */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-display font-bold text-transparent leading-none select-none mb-12 -ml-1.5"
            style={{
              fontSize: "clamp(64px,10vw,160px)",
              letterSpacing: "-0.05em",
              WebkitTextStroke: "1px #141414",
            }}
          >
            STACK
          </motion.div>

          {/* grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#1c1c1c] border border-[#1c1c1c]"
          >
            {SKILL_GROUPS.map(({ category, items }, gi) => (
              <motion.div 
                key={category} 
                variants={itemVariants}
                className="bg-background p-8 flex flex-col gap-6"
              >
                {/* category header */}
                <div className="flex items-center gap-3 pb-4 border-b border-[#1c1c1c]">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#3a3a3a] uppercase">
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.16em] text-[#888] uppercase">
                    {category}
                  </span>
                </div>

                {/* items */}
                <div className="flex flex-col gap-3">
                  {items.map((item) => (
                    <div key={item} className="group flex items-center gap-3">
                      <div className="w-1 h-1 bg-[#2a2a2a] rounded-full shrink-0 group-hover:bg-[#666] transition-colors" />
                      <span className="font-heading text-[15px] text-[#666] group-hover:text-foreground transition-colors tracking-tight">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* bottom note */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-4 mt-12"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.5)" }} />
            <span className="font-mono text-[10px] tracking-[0.18em] text-[#444] uppercase">
              Always expanding — currently specializing in AI-driven distributed systems & performance optimization.
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
