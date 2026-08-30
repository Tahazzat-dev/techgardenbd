type ProofBarProps = {
  items: string[];
};

export function ProofBar({items}: ProofBarProps) {
  return (
    <section className="border-y bg-muted/50 px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-muted-foreground">
        {items.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </section>
  );
}
