import { SectionTitle } from "../components/ui/SectionTitle";
import { ProjectCard } from "../components/ui/ProjectCard";
import { useInView } from "../hooks/useInView";


const PROJECTS = [
  {
    tags: ["HTML", "SCSS", "Python", "Flask"],
    title: "ChertNodes",
    desc: "Minecraft servers hosting platform with automated provisioning and real-time monitoring.",
    liveUrl: "#",
  },
  {
    tags: ["React", "Express", "Discord.js", "Node.js"],
    title: "ProtectX",
    desc: "Discord anti-crash bot with advanced rate-limiting and threat detection algorithms.",
    liveUrl: "#",
  },
  {
    tags: ["CSS", "Express", "Node.js"],
    title: "Kahoot Answers",
    desc: "Real-time Kahoot quiz answer viewer with live game interception.",
    liveUrl: "#",
  },
];

export function Projects() {
  const [ref, visible] = useInView();
  return (
    <section id="works" ref={ref} className="pt-[100px] pb-20">
      <div className="flex justify-between items-center mb-12">
        <SectionTitle title="Projects" />
        <a href="#" className="text-[13px] font-medium tracking-[0.06em] text-muted cursor-pointer uppercase transition-colors no-underline hover:text-foreground">View all →</a>
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-3 gap-px bg-border-dark border border-border-dark transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}

