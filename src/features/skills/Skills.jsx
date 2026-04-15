import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Container } from "../../components/common/Container";

/* ─── Service card data ────────────────────────────────── */
const SERVICE_CARDS = [
  {
    code: "CV",
    title: "COMPUTER",
    titleAccent: "VISION",
    color: "#c8f55a",
    colorDark: "#111",
    skills: ["YOLOv9", "YOLOv8", "SAHI", "OpenCV", "ByteTrack", "TensorRT", "FP16", "Roboflow"],
    tagline: "DET → TRK",
  },
  {
    code: "MLO",
    title: "ML",
    titleAccent: "OPS",
    color: "#f0ece0",
    colorDark: "#1a1a17",
    skills: ["Docker", "FastAPI", "MLflow", "DVC", "GitHub CI", "Prometheus", "Grafana", "Linux"],
    tagline: "RUN → SHIP",
  },
  {
    code: "UAV",
    title: "DRONE",
    titleAccent: "AUTO",
    color: "#a5adba",
    colorDark: "#131519",
    skills: ["MAVLink", "ArduPilot", "SITL", "NED", "pymavlink", "GCS Dev", "Mission", "Jetson"],
    tagline: "NAV → AUTO",
  },
  {
    code: "LLM",
    title: "AI",
    titleAccent: "AGENTS",
    color: "#c8f55a",
    colorDark: "#111",
    skills: ["LangGraph", "LangChain", "Ollama", "Gemini", "OpenRouter", "RAG", "MCP", "Prompting"],
    tagline: "RAG → FLOW",
  },
  {
    code: "DEV",
    title: "FULL",
    titleAccent: "STACK",
    color: "#f0ece0",
    colorDark: "#1a1a17",
    skills: ["React", "FastAPI", "Node.js", "MongoDB", "TypeScript", "Firebase", "PostgreSQL", "REST"],
    tagline: "FRO → BCK",
  },
  {
    code: "EDG",
    title: "EDGE",
    titleAccent: "AI",
    color: "#a5adba",
    colorDark: "#131519",
    skills: ["Jetson Orin", "TensorRT", "CUDA", "ONNX", "FP16 Quant", "Pruning", "DeepStream", "30fps"],
    tagline: "FP16 → FPS",
  },
];

/* ─── Component ────────────────────────────────────────── */
export function Skills() {
  const trackRef = useRef(null);
  const dragState = useRef({ isDragging: false, startX: 0, scrollLeft: 0 });

  const [progress, setProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(1);

  /* ── Scroll / progress tracking ────────────────────────── */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const update = () => {
      const max = track.scrollWidth - track.clientWidth;
      const ratio = max > 0 ? track.scrollLeft / max : 0;
      setProgress(ratio * 100);
      setActiveIndex(
        Math.min(Math.max(Math.round(ratio * (SERVICE_CARDS.length - 1)) + 1, 1), SERVICE_CARDS.length)
      );
    };

    update();
    track.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      track.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  /* ── Pointer drag ──────────────────────────────────────── */
  const onDown = (e) => {
    const track = trackRef.current;
    if (!track) return;
    dragState.current = { isDragging: true, startX: e.clientX, scrollLeft: track.scrollLeft };
    track.setPointerCapture?.(e.pointerId);
  };

  const onMove = (e) => {
    const track = trackRef.current;
    if (!track || !dragState.current.isDragging) return;
    e.preventDefault();
    track.scrollLeft = dragState.current.scrollLeft - (e.clientX - dragState.current.startX) * 1.4;
  };

  const onUp = (e) => {
    dragState.current.isDragging = false;
    trackRef.current?.releasePointerCapture?.(e.pointerId);
  };

  return (
    <section id="skills" className="sk-section" style={{ scrollMarginTop: "72px" }}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="sk-header"
        >
          <div>
            <div className="sk-label">(N°004) — Capabilities</div>
            <h2 className="sk-title">
              SKILL <span>STACK</span>
            </h2>
          </div>

          <div className="sk-hint">
            Drag to explore
            <span className="sk-hint-arrow" />
          </div>
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.06 }}
        className="sk-track-wrap"
      >
        {/* ─ Timeline rod with code badges ───────────────── */}
        <div className="sk-rod" aria-hidden="true" />

        {/* ─ Scrollable track ────────────────────────────── */}
        <div
          ref={trackRef}
          className="sk-track"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onPointerLeave={onUp}
        >
          {SERVICE_CARDS.map((card, i) => (
            <article
              key={card.code}
              className="sk-card"
              style={{ "--card-accent": card.color, "--card-dark": card.colorDark }}
            >
              {/* Code badge sitting on the rod */}
              <div className="sk-badge">
                <span className="sk-badge-code">{card.code}</span>
              </div>

              {/* Upper: giant typography */}
              <div className="sk-card-upper">
                <span className="sk-big-line">{card.title}</span>
                <span className="sk-big-line sk-big-line--accent">{card.titleAccent}</span>
              </div>

              {/* Divider */}
              <div className="sk-card-divider" />

              {/* Lower: skills + tagline */}
              <div className="sk-card-lower">
                <div className="sk-skill-grid">
                  {card.skills.map((s) => (
                    <span key={s} className="sk-skill-chip">{s}</span>
                  ))}
                </div>

                <div className="sk-tagline">
                  <span>{card.tagline}</span>
                  <span className="sk-tagline-idx">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ─ Progress bar ────────────────────────────────── */}
        <Container>
          <div className="sk-progress">
            <div className="sk-progress-track">
              <div className="sk-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="sk-progress-count">
              {String(activeIndex).padStart(2, "0")} / {String(SERVICE_CARDS.length).padStart(2, "0")}
            </div>
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
