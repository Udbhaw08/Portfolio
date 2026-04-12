import { GithubIcon, FigmaIcon, DiscordIcon } from "../ui/Icons";

export function Footer() {
  return (
    <footer className="pt-8 pb-10 mt-8 border-t border-[#141414]">
      <div className="flex justify-between items-center">
        {/* left */}
        <div className="flex flex-col gap-1">
          <span className="font-mono text-[11px] tracking-[0.18em] text-[#2a2a2a] uppercase">Udbhaw</span>
          <a
            href="mailto:udbhaw@example.com"
            className="font-mono text-[10px] text-[#252525] no-underline hover:text-[#555] transition-colors"
          >
            udbhaw@example.com
          </a>
        </div>

        {/* center */}
        <p className="font-mono text-[9px] tracking-[0.16em] text-[#1e1e1e] uppercase m-0">
          © 2026 Udbhaw
        </p>

        {/* right — socials */}
        <div className="flex items-center gap-5">
          {[
            { href: "#", label: "GitHub",  Icon: GithubIcon  },
            { href: "#", label: "Figma",   Icon: FigmaIcon   },
            { href: "#", label: "Discord", Icon: DiscordIcon },
          ].map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="cursor-pointer transition-opacity opacity-20 hover:opacity-60"
            >
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
