import { motion } from "framer-motion";
import { IMAGES } from "../../constants/theme";
import { Container } from "../../components/common/Container";

export function AboutMe() {
  return (
    <section id="about-me" className="pt-[160px] pb-24">
      <Container>
        {/* section label */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">02</span>
          <div className="w-12 h-px bg-[#2a2a2a]" />
          <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">About</span>
          <div className="flex-1 h-px bg-[#1c1c1c]" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-24 items-start">
          {/* LEFT — text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* large name */}
            <div className="mb-12">
              <h2
                className="font-display font-bold text-foreground leading-none m-0"
                style={{ fontSize: "clamp(48px,6vw,96px)", letterSpacing: "-0.04em" }}
              >
                Udbhaw
              </h2>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.5)" }} />
                <span className="font-mono text-[11px] tracking-[0.18em] text-[#555] uppercase">Available for Systems Architecture & AI</span>
              </div>
            </div>

            {/* bio */}
            <div className="space-y-6 max-w-[600px]">
              <p
                className="font-heading leading-[1.8] m-0"
                style={{ fontSize: "clamp(16px,1.5vw,19px)", color: "#999" }}
              >
                Self-taught full-stack developer with a focus on{" "}
                <span className="text-foreground font-medium">intelligent systems</span> —
                platforms that process real-world data, make decisions under constraint,
                and perform at scale.
              </p>
              <p
                className="font-heading leading-[1.8] m-0"
                style={{ fontSize: "clamp(16px,1.5vw,19px)", color: "#666" }}
              >
                I work at the intersection of technical precision and visual craft.
                Over the past year I've shipped full-stack platforms, AI-driven
                tools, and interactive experiences — always pushing into what's next.
              </p>
            </div>

            {/* stat row */}
            <div className="flex gap-16 mt-16 pt-12 border-t border-[#1c1c1c]">
              {[
                { val: "3+",  label: "Systems Built"   },
                { val: "1Y+", label: "Production Work" },
                { val: "AI",  label: "Core Focus"      },
              ].map(({ val, label }) => (
                <div key={label}>
                  <div
                    className="font-display font-bold text-foreground leading-none"
                    style={{ fontSize: "clamp(32px,4vw,48px)", letterSpacing: "-0.04em" }}
                  >
                    {val}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.2em] text-[#444] uppercase mt-2">{label}</div>
                </div>
              ))}
            </div>

            <a
              href="#contacts"
              className="inline-flex items-center gap-4 mt-12 font-mono text-[11px] tracking-[0.16em] uppercase text-foreground border border-[#2a2a2a] px-8 py-4 no-underline transition-all hover:border-[#555] hover:bg-white/5"
            >
              Get in touch
              <span className="text-[#555]">→</span>
            </a>
          </motion.div>

          {/* RIGHT — image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto lg:mx-0"
          >
            {/* corner marks */}
            <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-[#333]" />
            <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-[#333]" />
            <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-[#333]" />
            <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-[#333]" />

            <div className="w-full lg:w-[380px] aspect-[3/4] overflow-hidden grayscale contrast-[1.1] brightness-[0.8] transition-all duration-700 hover:grayscale-0 hover:brightness-100">
              <img
                src={IMAGES.hero}
                alt="Udbhaw"
                className="w-full h-full object-cover block"
                style={{ objectPosition: "53% 10%" }}
              />
            </div>

            {/* floating tag */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-6 -right-6 bg-background border border-border-dark px-6 py-4 z-10"
              style={{ boxShadow: "0 12px 32px rgba(0,0,0,0.8)" }}
            >
              <div className="font-mono text-[9px] tracking-[0.2em] text-[#444] uppercase mb-1">Status</div>
              <div className="font-mono text-[11px] tracking-[0.14em] text-[#666]">India · Available</div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
