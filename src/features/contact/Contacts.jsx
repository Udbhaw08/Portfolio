import { motion } from "framer-motion";
import { Container } from "../../components/common/Container";
import { DiscordIcon, EmailIcon } from "../../components/ui/Icons";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Contacts() {
  return (
    <section id="contacts" className="pt-6 pb-32" style={{scrollMarginTop:"72px"}}>
      <Container>
        {/* section label */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">05</span>
          <div className="w-12 h-px bg-[#2a2a2a]" />
          <span className="font-mono text-[10px] tracking-[0.24em] text-[#444] uppercase">Contact</span>
          <div className="flex-1 h-px bg-[#1c1c1c]" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* big heading */}
          <motion.div variants={itemVariants} className="mb-20">
            <h2
              className="font-display font-bold text-foreground leading-none m-0"
              style={{ fontSize: "clamp(56px,8vw,120px)", letterSpacing: "-0.04em" }}
            >
              Let's build
              <br />
              <span
                style={{
                  background: "linear-gradient(90deg, #ffffff 0%, #444 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                something.
              </span>
            </h2>
          </motion.div>

          {/* two column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-24 items-start">
            {/* left — description */}
            <motion.div variants={itemVariants}>
              <p
                className="font-heading leading-[1.8] m-0 mb-10"
                style={{ fontSize: "clamp(16px,1.4vw,19px)", color: "#777" }}
              >
                Open to freelance opportunities and collaborations.
                If you have a project in mind, a system to build,
                or just want to connect — reach out.
              </p>

              {/* availability badge */}
              <div className="flex items-center gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.5)" }} />
                <span className="font-mono text-[11px] tracking-[0.18em] text-[#555] uppercase">
                  Currently open to intelligence & systems projects · 2026
                </span>
              </div>
            </motion.div>

            {/* right — contact card */}
            <motion.div variants={itemVariants} className="border border-border-dark bg-white/2">
              {/* card header */}
              <div className="px-8 py-5 border-b border-border-dark flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.2em] text-[#444] uppercase">
                  Direct Channel
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" style={{ boxShadow: "0 0 8px rgba(74,222,128,0.4)" }} />
              </div>

              {/* discord */}
              <div className="px-8 py-6 border-b border-border-dark flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-4">
                  <span className="text-[#333] group-hover:text-[#555] transition-colors"><DiscordIcon /></span>
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.18em] text-[#444] uppercase mb-1.5">Discord ID</div>
                    <span className="font-heading text-[15px] text-[#666]">!Udbhaw#0000</span>
                  </div>
                </div>
                <span className="font-mono text-[16px] text-[#222] group-hover:text-[#444] transition-colors">→</span>
              </div>

              {/* email */}
              <a
                href="mailto:udbhaw@example.com"
                className="px-8 py-6 flex items-center justify-between group no-underline"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[#333] group-hover:text-foreground transition-colors"><EmailIcon /></span>
                  <div>
                    <div className="font-mono text-[9px] tracking-[0.18em] text-[#444] uppercase mb-1.5">Electronic Mail</div>
                    <span className="font-heading text-[15px] text-[#666] group-hover:text-foreground transition-colors">
                      udbhaw@example.com
                    </span>
                  </div>
                </div>
                <span className="font-mono text-[16px] text-[#222] group-hover:text-foreground transition-all group-hover:translate-x-0.5">↗</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
