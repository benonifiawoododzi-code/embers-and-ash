export function SectionHeading({
  eyebrow,
  title,
  intro,
  tone = "light",
  id,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  tone?: "light" | "dark";
  id?: string;
}) {
  const eyebrowClass = tone === "dark" ? "text-clay" : "text-walnut";
  const titleClass = tone === "dark" ? "text-ivory" : "text-charcoal";
  const introClass = tone === "dark" ? "text-ivory" : "text-walnut";

  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={`eyebrow ${eyebrowClass}`}>{eyebrow}</p> : null}
      <h2 id={id} className={`mt-4 text-[clamp(2.5rem,5vw,4.6rem)] leading-[1.02] ${titleClass}`}>
        {title}
      </h2>
      {intro ? <p className={`mt-6 max-w-2xl text-base leading-relaxed md:text-lg ${introClass}`}>{intro}</p> : null}
    </div>
  );
}
