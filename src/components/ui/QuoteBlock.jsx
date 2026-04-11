export function QuoteBlock() {
  return (
    <div className="py-20 flex flex-col items-center">
      <div className="relative border border-border-dark p-8 max-w-[600px] bg-[#111]/30 backdrop-blur-sm">
        <span className="absolute -top-3 -left-2 text-4xl text-muted font-serif opacity-30">"</span>
        <p className="text-xl text-foreground font-heading italic text-center m-0 leading-relaxed">
          With great power comes great electricity bill
        </p>
        <span className="absolute -bottom-8 -right-2 text-4xl text-muted font-serif opacity-30">"</span>
      </div>
      <div className="mt-6 text-right w-full max-w-[600px]">
        <span className="text-sm text-muted font-mono tracking-wider">- Dr. Who</span>
      </div>
    </div>
  );
}
