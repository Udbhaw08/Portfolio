import { GithubIcon, DribbbleIcon, FigmaIcon } from "../ui/Icons";

export function SideMedia() {
  return (
    <div className="fixed left-8 bottom-0 flex flex-col items-center gap-6 z-50">
      <div className="w-px h-24 bg-border-dark" />
      <a href="#" className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <GithubIcon />
      </a>
      <a href="#" className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <DribbbleIcon />
      </a>
      <a href="#" className="opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <FigmaIcon />
      </a>
      <div className="h-8" />
    </div>
  );
}

