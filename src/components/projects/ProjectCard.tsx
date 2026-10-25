import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import type { Project } from "@/types/content";

export function ProjectCard({
  project,
  headingLevel = "h2",
  frameClassName = "aspect-[4/5]",
  sizes = "(min-width: 1024px) 45vw, 100vw",
  priority = false,
}: {
  project: Project;
  headingLevel?: "h2" | "h3";
  frameClassName?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const titleClass = "project-title text-[clamp(1.8rem,2.6vw,2.7rem)] leading-none text-charcoal";
  return (
    <Link href={`/projects/${project.slug}`} className="group block min-w-0">
      <div className={`relative overflow-hidden bg-divider ${frameClassName}`}>
        <Image
          src={project.hero.src}
          alt={project.hero.alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover media-zoom"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div className="min-w-0">
          {headingLevel === "h2" ? <h2 className={titleClass}>{project.title}</h2> : <h3 className={titleClass}>{project.title}</h3>}
          <p className="mt-2 text-[0.72rem] tracking-[0.16em] text-walnut uppercase">
            {project.category}
            <span aria-hidden="true"> · </span>
            Illustrative concept
          </p>
        </div>
        <Arrow className="arrow-shift mt-2 text-charcoal" />
      </div>
    </Link>
  );
}
