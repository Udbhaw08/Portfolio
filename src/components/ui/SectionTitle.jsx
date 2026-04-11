export function SectionTitle({ title, className = "" }) {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <h2 className="font-heading text-[13px] font-medium tracking-[0.14em] uppercase text-muted whitespace-nowrap m-0 leading-none">
        {title}
      </h2>
      <div className="flex-1 h-px bg-border-dark" />
    </div>
  );
}

