export function ProjectCard({ img, tags, title, desc, buttons, liveUrl, cacheUrl }) {
  return (
    <div
      className="flex flex-col cursor-pointer bg-background border border-border-dark transition-colors duration-250 hover:bg-[#111]"
    >
      <div className="h-[220px] overflow-hidden bg-[#111] relative">
        {img ? (
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover block"
          />
        ) : (
          <div className="w-full h-full bg-[#111]" />
        )}
      </div>
      <div className="flex gap-2 px-4 pt-2.5 flex-wrap">
        {tags.map((t, i) => (
          <span key={i} className="text-[11px] tracking-widest uppercase text-muted">{t}</span>
        ))}
      </div>
      <div className="p-4 flex flex-col gap-3 flex-1">
        <h3 className="text-xl font-semibold text-foreground tracking-tight m-0">{title}</h3>
        <p className="text-sm text-muted leading-relaxed m-0">{desc}</p>
        <div className="flex gap-2.5 mt-auto pt-1">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-[13px] font-semibold tracking-wider uppercase text-background bg-foreground border-none px-6 py-3 cursor-pointer transition-colors duration-200 no-underline hover:bg-[#ccc]"
            >
              Live ↗
            </a>
          )}
          {cacheUrl && (
            <a
              href={cacheUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-heading text-[13px] font-medium tracking-wider uppercase text-muted bg-transparent border border-border-dark px-5 py-[11px] cursor-pointer transition-colors duration-200 no-underline hover:border-foreground hover:text-foreground"
            >
              Cached
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

