import { projects } from "@/data/projects";

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return { previous: undefined, next: undefined };
  return {
    previous: index > 0 ? projects[index - 1] : undefined,
    next: index < projects.length - 1 ? projects[index + 1] : undefined,
  };
}

export function getRelatedProjects(slug: string, limit = 2) {
  const current = getProject(slug);
  if (!current) return [];
  const same = projects.filter((project) => project.slug !== slug && project.category === current.category);
  const others = projects.filter((project) => project.slug !== slug && project.category !== current.category);
  return [...same, ...others].slice(0, limit);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
