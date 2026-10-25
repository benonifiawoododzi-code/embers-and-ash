import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { SampleNote } from "@/components/SampleNote";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import { projects } from "@/data/projects";
import { photoNote, siteConfig } from "@/data/site";
import { getAdjacentProjects, getProject, getRelatedProjects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: `${project.summary} Illustrative concept, not a documented commission.`,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} — ${siteConfig.legalName}`,
      description: project.summary,
      images: [{ url: project.hero.src, alt: project.hero.alt }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { previous, next } = getAdjacentProjects(project.slug);
  const related = getRelatedProjects(project.slug);

  return (
    <article>
      <div className="relative h-[70svh] min-h-[24rem] bg-charcoal">
        <Image src={project.hero.src} alt={project.hero.alt} fill priority sizes="100vw" className="object-cover" />
      </div>
      <section className="bg-ivory py-16 md:py-24">
        <Container className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="eyebrow text-walnut">{project.category}</p>
            <h1 className="mt-4 text-[clamp(3rem,6vw,5.6rem)] leading-[0.96] text-charcoal">{project.title}</h1>
            <SampleNote className="mt-5" />
          </div>
          <p className="text-walnut md:col-span-4 md:col-start-9 md:pt-16">{photoNote}</p>
        </Container>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <Container className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="text-4xl text-charcoal">Overview</h2>
            <p className="mt-4 text-walnut">{project.overview}</p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <h2 className="text-4xl text-charcoal">Brief</h2>
            <p className="mt-4 text-walnut">{project.brief}</p>
          </div>
          <div className="md:col-span-8">
            <h2 className="text-4xl text-charcoal">Concept</h2>
            <p className="mt-4 max-w-3xl text-walnut">{project.concept}</p>
          </div>
        </Container>
      </section>

      <section className="border-t border-divider bg-ivory py-16 md:py-24">
        <Container>
          <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] text-charcoal">Material palette</h2>
          <dl className="mt-10">
            {project.materials.map((item) => (
              <div key={item.name} className="grid gap-2 border-t border-divider py-5 md:grid-cols-12">
                <dt className="font-serif text-3xl text-charcoal md:col-span-4">{item.name}</dt>
                <dd className="text-walnut md:col-span-7 md:col-start-6">{item.note}</dd>
              </div>
            ))}
          </dl>
          <h2 className="mt-16 text-[clamp(2.4rem,4vw,3.8rem)] text-charcoal">Decisions and challenges</h2>
          <p className="mt-5 max-w-3xl text-walnut">{project.decisions}</p>
        </Container>
      </section>

      <section className="bg-chalk py-16 md:py-24">
        <Container>
          <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] text-charcoal">Photographs</h2>
          <div className="mt-8">
            <ProjectGallery images={project.gallery} />
          </div>
        </Container>
      </section>

      {related.length > 0 ? (
        <section className="border-t border-divider bg-ivory py-16 md:py-24">
          <Container>
            <h2 className="text-[clamp(2.4rem,4vw,3.8rem)] text-charcoal">Related studies</h2>
            <ul className="mt-10 grid gap-10 md:grid-cols-2">
              {related.map((item) => (
                <li key={item.slug}>
                  <ProjectCard project={item} headingLevel="h3" frameClassName="aspect-[16/10]" sizes="(min-width: 768px) 45vw, 100vw" />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <nav aria-label="Project" className="border-t border-divider bg-chalk">
        <Container className="grid gap-6 py-10 sm:grid-cols-2">
          {previous ? (
            <Link href={`/projects/${previous.slug}`} className="group block">
              <p className="text-[0.72rem] tracking-[0.16em] text-walnut uppercase">Previous</p>
              <p className="project-title mt-2 font-serif text-3xl text-charcoal">{previous.title}</p>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/projects/${next.slug}`} className="group block sm:text-right">
              <p className="text-[0.72rem] tracking-[0.16em] text-walnut uppercase">Next</p>
              <p className="project-title mt-2 font-serif text-3xl text-charcoal">{next.title}</p>
            </Link>
          ) : null}
        </Container>
      </nav>

      <section className="bg-charcoal py-20 text-ivory">
        <Container>
          <h2 className="max-w-3xl text-[clamp(2.4rem,4vw,4rem)] leading-[1.02]">Discuss a room like this.</h2>
          <p className="mt-4 max-w-xl text-ivory">Tell us what you are imagining. This study is illustrative; your project would begin as its own conversation.</p>
          <Link href={`/contact?service=${project.category.toLowerCase()}`} className="btn btn-light mt-8">
            Discuss Your Project
          </Link>
        </Container>
      </section>
    </article>
  );
}
