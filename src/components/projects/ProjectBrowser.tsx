"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectCategories, type Project } from "@/types/content";

const filters = ["All", ...projectCategories] as const;
type Filter = (typeof filters)[number];

const spans = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7", "md:col-span-8", "md:col-span-4"];
const frames = ["aspect-[4/5] md:aspect-[4/5]", "aspect-[3/4]", "aspect-[4/5]", "aspect-[16/10]", "aspect-[4/5]", "aspect-[3/4]"];

export function ProjectBrowser({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? projects : projects.filter((project) => project.category === filter);

  return (
    <div>
      <div role="toolbar" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((item) => {
          const selected = item === filter;
          return (
            <button
              key={item}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(item)}
              className={`min-h-11 px-4 text-[0.72rem] tracking-[0.14em] uppercase ${selected ? "bg-charcoal text-ivory" : "border border-divider text-charcoal"}`}
            >
              {item}
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <p className="mt-16 max-w-md text-walnut">No illustrative concepts sit in this category.</p>
      ) : (
        <ul className="mt-12 grid gap-x-6 gap-y-14 md:grid-cols-12">
          {visible.map((project, index) => (
            <li key={project.slug} className={`min-w-0 ${spans[index % spans.length]}`}>
              <ProjectCard
                project={project}
                headingLevel="h2"
                priority={index === 0}
                frameClassName={frames[index % frames.length]}
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
