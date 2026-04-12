import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About",    href: "#about-me"  },
  { label: "Projects", href: "#works"     },
  { label: "Contact",  href: "#contacts"  },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] px-10 h-14 flex items-center justify-between transition-all duration-400 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-[#141414]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* logo */}
      <a
        href="#home"
        aria-label="Udbhaw — home"
        className="font-mono text-[11px] tracking-[0.18em] uppercase text-[#555] no-underline hover:text-foreground transition-colors"
      >
        Udbhaw
      </a>

      {/* nav */}
      <nav role="navigation" aria-label="Main navigation">
        <ul className="flex gap-8 list-none items-center m-0 p-0">
          {NAV_LINKS.map(({ label, href }, i) => (
            <li key={href} className="flex items-center gap-3">
              <span className="font-mono text-[8px] tracking-[0.14em] text-[#252525]">
                {String(i + 2).padStart(2, "0")}
              </span>
              <a
                href={href}
                className="font-mono text-[10px] tracking-[0.14em] uppercase text-[#3a3a3a] transition-colors duration-200 no-underline hover:text-foreground"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
