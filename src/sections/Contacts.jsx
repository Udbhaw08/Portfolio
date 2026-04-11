import { SectionTitle } from "../components/ui/SectionTitle";
import { DiscordIcon, EmailIcon } from "../components/ui/Icons";
import { useInView } from "../hooks/useInView";

export function Contacts() {
  const [ref, visible] = useInView();
  return (
    <section id="contacts" ref={ref} className="pt-[100px] pb-20">
      <SectionTitle title="Contact" />
      <div
        className={`flex flex-col lg:flex-row justify-between items-start gap-20 mt-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div>
          <p className="text-[28px] font-semibold text-foreground -tracking-[0.02em] mb-4 leading-[1.3] m-0">
            Let's build something<br />together.
          </p>
          <p className="text-[15px] text-muted leading-[1.7] max-w-[480px] font-normal m-0">
            Open to freelance opportunities and collaborations. If you have a
            project in mind or just want to say hi, reach out.
          </p>
        </div>
        <div className="border border-border-dark p-6 min-w-[240px]">
          <h4 className="text-[11px] font-medium tracking-widest uppercase text-muted mb-4 m-0">Message me here</h4>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <DiscordIcon />
              <span className="text-sm text-[#abb2bf]">!Udbhaw#0000</span>
            </div>
            <div className="flex items-center gap-2.5">
              <EmailIcon />
              <a href="mailto:udbhaw@example.com" className="text-sm text-[#abb2bf] cursor-pointer no-underline hover:text-foreground transition-colors">
                udbhaw@example.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

