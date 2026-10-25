import { illustrativeLabel } from "@/data/site";

export function SampleNote({ tone = "light", className = "" }: { tone?: "light" | "dark"; className?: string }) {
  const color = tone === "dark" ? "text-clay" : "text-walnut";
  return <p className={`text-sm leading-relaxed ${color} ${className}`}>{illustrativeLabel}</p>;
}
