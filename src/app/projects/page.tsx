import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ProjectBrowser } from "@/components/projects/ProjectBrowser";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Illustrative interior concepts by Embers & Ash across residential, commercial, and hospitality work.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <section className="bg-chalk pt-32 pb-20 md:pt-40 md:pb-28">
      <Container>
        <p className="eyebrow text-walnut">Projects</p>
        <h1 className="mt-4 max-w-4xl text-[clamp(3rem,6vw,5.8rem)] leading-[0.96] text-charcoal">An edited set of illustrative interiors.</h1>
        <p className="mt-6 max-w-2xl text-lg text-walnut">
          These concepts show a range of rooms. They are not records of completed commissions, and they do not name clients or places.
        </p>
        <div className="mt-12">
          <ProjectBrowser projects={projects} />
        </div>
      </Container>
    </section>
  );
}
