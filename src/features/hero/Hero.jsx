import { IMAGES } from "../../constants/theme";
import "./Hero.css";

export function Hero() {
  return (
    <section id="home" className="hero-root hero-section">
      {/* Background photo with the actual production path */}
      <div 
        className="hero-photo"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
      ></div>

      <div className="hero-content">
        <h1 className="hero-headline">
          <span className="headline-line"><span>AI Systems</span></span>
          <span className="headline-line">
            <span>
              <em className="accent-word">That</em> Solve
              <span className="inline-comment">// high-precision ops</span>
            </span>
          </span>
          <span className="headline-line"><span>Real Problems.</span></span>
        </h1>

        <div className="hero-description">
          <p>
            Building intelligent platforms from the ground up.
            Focused on <strong>real-time optimization</strong> and
            human-centric AI architecture — from UAV autonomy
            to defense-grade logistics intelligence.
          </p>
        </div>

        <div className="hero-cta">
          <a href="#projects" className="cta-primary">
            Explore Projects
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </a>
          <a href="#contacts" className="cta-secondary">Get in touch</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="hero-statusbar">
        <div className="status-left">
          <span className="status-item">Year <b>2026</b></span>
          <span className="status-item">Projects <b>12+</b></span>
          <span className="status-item">Hackathons <b>6</b></span>
        </div>
      </div>
    </section>
  );
}
