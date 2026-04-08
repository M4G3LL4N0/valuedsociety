type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.28em] text-white/42">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-8 text-white/65">{description}</p>
      ) : null}
    </div>
  );
}
