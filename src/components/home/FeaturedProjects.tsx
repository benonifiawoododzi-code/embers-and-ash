import Link from "next/link";
import { Container } from "@/components/Container";
import { SampleNote } from "@/components/SampleNote";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

const frames = [
  "aspect-[4/5] md:aspect-[16/10]",
  "aspect-[3/4] md:aspect-[4/5] md:w-[64%]",
  "aspect-[4/5] md:ml-auto md:aspect-[5/4] md:w-[56%]",
  "aspect-[4/5] md:aspect-[16/9] md:w-[82%]",
];

export function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section id="work" className="bg-chalk py-20 md:py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="Spaces with a distinct point of view."
          intro="Four illustrative concepts are edited here. The full set is in the archive. None of them is a record of a completed commission."
        />
        <div className="mt-14 flex flex-col gap-16 md:mt-20 md:gap-28">
          {featured.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              headingLevel="h3"
              frameClassName={frames[index] ?? frames[0]}
              sizes="(min-width: 768px) 72vw, 100vw"
            />
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <SampleNote />
          <Link href="/projects" className="btn btn-dark">
            View All Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
