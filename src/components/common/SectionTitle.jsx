export default function SectionTitle({ eyebrow, title, description, align = "left" }) {
  const centered = align === "center";
  return (
    <div className={`mb-9 ${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}`}>
      {eyebrow ? <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#D94C8A]">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-bold tracking-[-0.035em] text-[#252A44] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-[#252A44]/65 sm:text-[15px]">{description}</p> : null}
    </div>
  );
}
