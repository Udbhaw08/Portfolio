export function SkillBlock({ title, items }) {
  return (
    <div className="bg-background flex flex-col min-w-[160px] flex-grow flex-shrink-0 basis-40">
      <div className="font-medium text-[11px] tracking-widest uppercase text-muted px-3.5 py-2.5">{title}</div>
      <div className="h-px bg-border-dark w-full" />
      <div className="p-3.5 flex flex-col gap-1.5">
        {items.map((row, ri) => (
          <div key={ri} className="flex gap-2 flex-wrap">
            {row.map((item, ii) => (
              <span key={ii} className="text-sm text-[#abb2bf]">{item}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

