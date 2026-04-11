import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about-me" },
  { label: "Projects", href: "#works" },
  { label: "Contact", href: "#contacts" },
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
      className={`fixed top-0 left-0 right-0 z-[100] px-10 h-16 flex items-center justify-between transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-[#1a1a1a]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      {/* Logo / wordmark */}
      <a
        href="#home"
        aria-label="Udbhaw — home"
        className="text-[15px] font-semibold tracking-[0.06em] uppercase text-foreground cursor-pointer no-underline"
      >
        Udbhaw
      </a>

      {/* Nav */}
      <nav role="navigation" aria-label="Main navigation">
        <ul className="flex gap-9 list-none items-center m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <NavLink href={href} label={label} />
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="text-sm font-normal tracking-[0.04em] text-[#888] transition-colors duration-200 cursor-pointer inline-block no-underline hover:text-foreground"
    >
      {label}
    </a>
  );
}

