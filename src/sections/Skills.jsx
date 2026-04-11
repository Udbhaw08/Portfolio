import { SectionTitle } from "../components/ui/SectionTitle";
import { SkillBlock } from "../components/ui/SkillBlock";
import { useInView } from "../hooks/useInView";

export function Skills() {
  const [ref, visible] = useInView();
  return (
    <section id="skills" ref={ref} className="pt-[100px] pb-20">
      <SectionTitle title="Skills" />
      <div
        className={`flex flex-col lg:flex-row gap-15 mt-12 transition-all duration-700 delay-100 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* Left decorative element */}
        <div className="relative w-[280px] shrink-0 flex items-center justify-center mx-auto lg:mx-0">
          <div className="text-center">
            <div className="w-40 h-40 border border-[#222] flex items-center justify-center mx-auto">
              <div className="w-20 h-20 border border-[#333] flex items-center justify-center">
                <span className="text-[11px] tracking-widest uppercase text-[#444]">stack</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid */}
        <div className="flex flex-wrap gap-px flex-1 bg-border-dark border border-border-dark align-top">
          <SkillBlock title="Languages"  items={[["TypeScript", "Lua"], ["Python", "JavaScript"]]} />
          <SkillBlock title="Databases"  items={[["SQLite", "PostgreSQL"], ["MongoDB"]]} />
          <SkillBlock title="Tools"      items={[["VSCode", "Neovim", "Linux"], ["Figma", "Git"]]} />
          <SkillBlock title="Other"      items={[["HTML", "CSS", "SCSS"], ["REST", "Jinja"]]} />
          <SkillBlock title="Frameworks" items={[["React", "Vue"], ["Discord.js", "Flask", "Express"]]} />
        </div>
      </div>
    </section>
  );
}

