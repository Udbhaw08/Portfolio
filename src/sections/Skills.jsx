import { useInView } from "../hooks/useInView";

const SKILL_GROUPS = [
  { category: "Languages",  items: ["TypeScript", "JavaScript", "Python", "Lua"] },
  { category: "Frameworks", items: ["React", "Vue", "Express", "Flask", "Discord.js"] },
  { category: "Databases",  items: ["PostgreSQL", "MongoDB", "SQLite"] },
  { category: "Tools",      items: ["VSCode", "Neovim", "Linux", "Figma", "Git"] },
  { category: "Other",      items: ["HTML", "CSS", "SCSS", "REST", "Jinja"] },
];

export function Skills() {
  const [ref, visible] = useInView();

  return (
    <section id="skills" ref={ref} className="pt-[120px] pb-24">
      {/* section label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">04</span>
        <div className="w-8 h-px bg-[#2a2a2a]" />
        <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">Skills</span>
        <div className="flex-1 h-px bg-[#1c1c1c]" />
      </div>

      <div
        className={`transition-all duration-700 delay-100 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* ghost watermark */}
        <div
          className="font-display font-bold text-transparent leading-none select-none mb-10 -ml-1"
          style={{
            fontSize: "clamp(48px,8vw,120px)",
            letterSpacing: "-0.05em",
            WebkitTextStroke: "1px #1c1c1c",
          }}
        >
          STACK
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px bg-[#1c1c1c] border border-[#1c1c1c]">
          {SKILL_GROUPS.map(({ category, items }, gi) => (
            <div key={category} className="bg-background p-6 flex flex-col gap-4">
              {/* category header */}
              <div className="flex items-center gap-2 pb-3 border-b border-[#1c1c1c]">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#3a3a3a] uppercase">
                  {String(gi + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[10px] tracking-[0.16em] text-[#555] uppercase">
                  {category}
                </span>
              </div>

              {/* items */}
              <div className="flex flex-col gap-2.5">
                {items.map((item) => (
                  <div key={item} className="group flex items-center gap-2.5">
                    <div className="w-1 h-1 bg-[#333] rounded-full shrink-0 group-hover:bg-[#666] transition-colors" />
                    <span className="font-heading text-[14px] text-[#777] group-hover:text-[#aaa] transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* bottom note */}
        <div className="flex items-center gap-3 mt-8">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 6px rgba(74,222,128,0.4)" }} />
          <span className="font-mono text-[10px] tracking-[0.18em] text-[#444] uppercase">
            Always learning — currently exploring AI systems architecture
          </span>
        </div>
      </div>
    </section>
  );
}
