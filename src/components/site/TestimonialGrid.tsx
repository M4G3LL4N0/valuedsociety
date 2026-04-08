type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

type TestimonialGridProps = {
  items: Testimonial[];
};

export default function TestimonialGrid({ items }: TestimonialGridProps) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.quote}
          className="rounded-[1.7rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-7"
        >
          <p className="text-base leading-8 text-white/78">“{item.quote}”</p>
          <div className="mt-8 border-t border-white/10 pt-5">
            <p className="text-sm font-semibold text-white">{item.name}</p>
            <p className="mt-1 text-sm text-white/45">{item.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
