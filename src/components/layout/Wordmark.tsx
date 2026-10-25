export function Wordmark({
  accent = false,
  className = "",
}: {
  accent?: boolean;
  className?: string;
}) {
  return (
    <span className={`font-serif leading-none tracking-[-0.03em] ${className}`}>
      Embers <span className={accent ? "italic text-bronze" : "italic"}>&</span> Ash
    </span>
  );
}
