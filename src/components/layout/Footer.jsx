import { GithubIcon, FigmaIcon, DiscordIcon } from "../ui/Icons";

export function Footer() {
  return (
    <footer className="pt-10 pb-10 mt-15 border-t border-border-dark flex justify-between items-center">
      <div className="flex flex-col gap-1.5">
        <span className="text-[15px] font-semibold tracking-[0.04em] text-foreground">Udbhaw</span>
        <a href="mailto:udbhaw@example.com" className="text-[13px] text-muted no-underline">
          udbhaw@example.com
        </a>
      </div>

      <p className="text-[12px] text-[#444] tracking-wider m-0">© 2025 Udbhaw. All rights reserved.</p>

      <div className="flex flex-col items-end gap-2">
        <span className="text-[11px] font-medium tracking-widest uppercase text-muted">Socials</span>
        <div className="flex gap-4 items-center">
          <a href="#" aria-label="GitHub" className="opacity-60 transition-opacity cursor-pointer hover:opacity-100">
            <GithubIcon />
          </a>
          <a href="#" aria-label="Figma" className="opacity-60 transition-opacity cursor-pointer hover:opacity-100">
            <FigmaIcon />
          </a>
          <a href="#" aria-label="Discord" className="opacity-60 transition-opacity cursor-pointer hover:opacity-100">
            <DiscordIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

