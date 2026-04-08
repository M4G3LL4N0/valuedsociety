type FAQItem = {
  question: string;
  answer: string;
};

type FAQGridProps = {
  items: FAQItem[];
};

export default function FAQGrid({ items }: FAQGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.question}
          className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
        >
          <h3 className="text-xl font-semibold text-white">{item.question}</h3>
          <p className="mt-4 text-sm leading-7 text-white/62">{item.answer}</p>
        </div>
      ))}
    </div>
  );
}
