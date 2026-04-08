type ProofStripProps = {
  items: string[];
};

export default function ProofStrip({ items }: ProofStripProps) {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white/72 backdrop-blur"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
