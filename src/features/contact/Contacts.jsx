import { useRef, useEffect, useState } from "react";
import contactBg from "../../assets/contact_bg.png";
import contactChar from "../../assets/contact_char_real.png";

/* ─── Combined hook: scroll entrance + mouse parallax ──────── */
function useContactAnimation(sectionRef) {
  const [charTransform, setCharTransform] = useState({ scrollY: 0, parallaxX: 0, parallaxY: 0 });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    // Approximate paddingTop offset math from the Vue file
    const pt = parseFloat(window.getComputedStyle(el).paddingTop) || 30;

    let targetScrollY = 0;
    
    let mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    let rect = el.getBoundingClientRect();

    const onScroll = () => {
      rect = el.getBoundingClientRect();
      const windowH = window.innerHeight;
      
      // Calculate scroll progress 0 to 1
      // 0 = section entering from bottom of screen
      // 1 = section reaches the top of the screen
      const progress = Math.max(0, Math.min(1, (windowH - rect.top) / windowH));
      
      // Starts pushed down by 180px, rises to 0px as section scrolls into view
      // This prevents the character from floating infinitely upwards!
      targetScrollY = (1 - progress) * 180;
    };

    const onMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    let raf;
    let currentPX = 0;
    let currentPY = 0;
    let currentScrollY = 0;
    let autoAnimDegree = 0;
    
    const lerp = (a, b, t) => a + (b - a) * t;
    const multiplicator = 0.15; // from Vue data-parallax-value=".15"

    // Initial positioning
    onScroll();
    currentScrollY = targetScrollY;
    setCharTransform(prev => ({ ...prev, scrollY: currentScrollY }));

    const tick = () => {
      let relativeCursorX = rect.width / 2 + rect.left;
      let relativeCursorY = rect.height / 2 + rect.top;

      let dx = mouse.x - relativeCursorX;
      let dy = mouse.y - relativeCursorY;
      
      let targetPX = 0;
      let targetPY = 0;
      
      const isMobile = window.innerWidth <= 768;

      if (!isMobile) {
        // Quadratic move from Vue Parallax.vue
        targetPX = -(dx * multiplicator * 2) / Math.log(Math.abs(dx) + 2);
        targetPY = -(dy * multiplicator * 2) / Math.log(Math.abs(dy) + 2);
      } else {
        // Auto linear move for mobile from Vue Parallax.vue
        autoAnimDegree = (autoAnimDegree + 0.005) % 360;
        const hyp = 300;
        let curX = hyp * Math.cos(autoAnimDegree * 1.5);
        let curY = hyp * Math.sin(autoAnimDegree);
        targetPX = (curX) * -multiplicator;
        targetPY = (curY) * -multiplicator;
      }

      currentPX = lerp(currentPX, targetPX, 0.08);
      currentPY = lerp(currentPY, targetPY, 0.08);
      
      // Lerping scroll slightly to keep it buttery smooth,
      // but following actual scroll tightly
      currentScrollY = lerp(currentScrollY, targetScrollY, 0.15);

      setCharTransform({
        scrollY: currentScrollY,
        parallaxX: currentPX,
        parallaxY: currentPY
      });

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return charTransform;
}

/* ─── Link Group ─────────────────────────────────────────── */
function LinkGroup({ title, items }) {
  return (
    <div className="contact-link-group">
      <p className="contact-link-label">{title}</p>
      <ul className="contact-link-list">
        {items.map(({ href, text }) => (
          <li key={text}>
            <a
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="contact-link-item"
            >
              {text}
              <span className="contact-link-arrow">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────── */
export function Contacts() {
  const sectionRef = useRef(null);
  const { scrollY, parallaxX, parallaxY } = useContactAnimation(sectionRef);

  return (
    <section
      id="contacts"
      ref={sectionRef}
      className="contact-section"
      style={{ scrollMarginTop: "72px" }}
      aria-label="Contact section"
    >
      {/* ── Static background ──────────────────────────────── */}
      <div className="contact-bg" aria-hidden="true">
        <img src={contactBg} alt="" className="contact-bg-img" />
        <div className="contact-bg-overlay" />
      </div>

      {/* ── Fog / vignette ─────────────────────────────────── */}
      <div className="contact-fog" aria-hidden="true" />

      {/* ── Content ────────────────────────────────────────── */}
      <div className="contact-content">

        {/* Top nav — fully static */}
        <div className="contact-nav-strip">
          <div className="contact-section-tag">
            <span className="contact-section-num">05</span>
            <span className="contact-section-divider" />
            <span className="contact-section-name">Contact</span>
          </div>

          <div className="contact-links-row">
            <LinkGroup
              title="HIRE ME"
              items={[{ href: "mailto:udbhawanand@gmail.com", text: "udbhaw@dev.me" }]}
            />
            <LinkGroup
              title="SOCIAL"
              items={[{ href: "https://www.linkedin.com/in/udbhawanand", text: "LinkedIn" }]}
            />
            <LinkGroup
              title="OPEN SOURCE"
              items={[
                { href: "https://github.com/Udbhaw08",  text: "GitHub"         },
                { href: "tel:8826867932",               text: "+91 8826867932" },
              ]}
            />
          </div>
        </div>

        {/* Stage — text rows + animated character */}
        <div className="contact-stage">

          {/* LET'S WORK — behind character (z-index 3), split to allow middle gap */}
          <div className="contact-text-row contact-text-row--top" aria-hidden="true">
            <span className="contact-big-top">LET'S</span>
            <span className="contact-big-top gap-spacer"></span>
            <span className="contact-big-top">WORK</span>
          </div>

          {/* ── Character: scroll rise wrapping mouse parallax ───── */}
          <div
            className="contact-char-wrap"
            style={{
              transform:  `translateY(${scrollY}px)`,
              willChange: "transform",
            }}
            aria-hidden="true"
          >
            <img
              src={contactChar}
              alt="Developer character"
              className="contact-char-img"
              style={{
                transform:  `translate(${parallaxX}px, ${parallaxY}px)`,
                willChange: "transform",
              }}
              draggable="false"
            />
          </div>

          {/* TOGETHER — in front of character (z-index 5) */}
          <div className="contact-text-row contact-text-row--bottom" aria-hidden="true">
            <span className="contact-big-bottom">TOGETHER</span>
          </div>
        </div>

      </div>

      <h2 className="sr-only">Let's Work Together — Contact</h2>
    </section>
  );
}
