import { SectionTitle } from "../components/ui/SectionTitle";
import { IMAGES } from "../constants/theme";
import { useInView } from "../hooks/useInView";

export function AboutMe() {
  const [ref, visible] = useInView();
  return (
    <section id="about-me" ref={ref} className="pt-[100px] pb-20">
      <SectionTitle title="About" />
      <div
        className={`flex flex-col lg:flex-row justify-between gap-20 items-start mt-12 transition-all duration-700 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <div className="flex-1 max-w-[520px]">
          <p className="font-heading text-lg font-medium text-foreground mb-6 leading-relaxed m-0">
            Hello, I'm Udbhaw.
          </p>
          <p className="text-base text-muted leading-relaxed m-0">
            I'm a self-taught full-stack developer with a passion for building
            clean, performant web applications. I focus on the intersection
            of technical precision and visual craft.
          </p>
          <br />
          <p className="text-base text-muted leading-relaxed m-0">
            Over the past year I've helped clients establish a strong online
            presence — from interactive landing pages to full-stack platforms.
            I'm always learning and pushing into new technologies.
          </p>
          <a
            href="#contacts"
            className="font-heading text-[13px] font-semibold tracking-wider uppercase text-background bg-foreground border-none px-6 py-3 cursor-pointer transition-colors duration-200 no-underline hover:bg-[#ccc] inline-block mt-8"
          >
            Get in touch →
          </a>
        </div>

        <div className="relative w-80 h-[420px] shrink-0 mx-auto lg:mx-0">
          <img src={IMAGES.hero} alt="Udbhaw" className="w-full h-full object-cover block grayscale-[20%]" />
          {/* thin border frame offset */}
          <div className="absolute top-4 left-4 -right-4 -bottom-4 border border-[#222] -z-[1] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

