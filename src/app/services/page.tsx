import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { services } from "@/data/services";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Residential, commercial, and hospitality interior design from Embers & Ash: scope, considerations, and how to begin a conversation.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ivory pt-32 pb-16 md:pt-40 md:pb-24">
        <Container className="grid items-end gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow text-walnut">Our services</p>
            <h1 className="mt-4 text-[clamp(3rem,6vw,5.8rem)] leading-[0.96] text-charcoal">Design with intention.</h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-walnut">
              Three areas of interior work. Each one is design direction: planning, materials, light, and furniture. Nothing here assumes construction management or approvals.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <a href={`#${service.id}`} className="link-line text-[0.72rem] tracking-[0.16em] text-charcoal uppercase">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] bg-divider md:col-span-5 md:col-start-8">
            <Image
              src={services[0].image.src}
              alt={services[0].image.alt}
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </Container>
      </section>

      {services.map((service, index) => {
        const related = projects.filter((project) => project.category === service.category);
        const flipped = index % 2 === 1;
        return (
          <section id={service.id} key={service.id} className="scroll-mt-28 border-t border-divider bg-chalk py-16 md:py-28">
            <Container className="grid items-start gap-10 md:grid-cols-12">
              <div className={`relative aspect-[5/4] bg-divider md:col-span-6 ${flipped ? "md:col-start-7" : ""}`}>
                <Image src={service.image.src} alt={service.image.alt} fill sizes="(min-width: 768px) 46vw, 100vw" className="object-cover" />
              </div>
              <div className={`md:col-span-5 ${flipped ? "md:col-start-1 md:row-start-1" : "md:col-start-8"}`}>
                <p className="eyebrow text-walnut">{service.category}</p>
                <h2 className="mt-3 text-[clamp(2.4rem,4vw,3.8rem)] leading-none text-charcoal">{service.title}</h2>
                <p className="mt-5 text-walnut">{service.summary}</p>
                <p className="mt-4 text-walnut">{service.overview}</p>
                <h3 className="mt-10 text-3xl text-charcoal">Considerations</h3>
                <ul className="mt-4 space-y-3 text-walnut">
                  {service.considerations.map((item) => (
                    <li key={item} className="border-t border-divider pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="mt-10 text-3xl text-charcoal">Possible deliverables</h3>
                <ul className="mt-4 space-y-3 text-walnut">
                  {service.deliverables.map((item) => (
                    <li key={item} className="border-t border-divider pt-3">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-walnut">Limited to the agreed interior-design scope.</p>
                {related.length > 0 ? (
                  <div className="mt-10">
                    <h3 className="text-2xl text-charcoal">Related studies</h3>
                    <ul className="mt-3 space-y-2">
                      {related.map((project) => (
                        <li key={project.slug}>
                          <Link href={`/projects/${project.slug}`} className="link-line text-charcoal">
                            {project.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <Link href={`/contact?service=${service.id}`} className="btn btn-dark mt-8">
                  Discuss This Service
                </Link>
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-charcoal py-20 text-ivory md:py-28">
        <Container className="max-w-3xl">
          <h2 className="text-[clamp(2.4rem,4vw,4rem)] leading-[1.02]">Begin with the room you have in mind.</h2>
          <p className="mt-5 max-w-xl text-ivory">
            Architectural approval, construction management, and procurement are not part of these services unless a written scope says otherwise.
          </p>
          <Link href="/contact" className="btn btn-light mt-8">
            Discuss Your Project
          </Link>
        </Container>
      </section>
    </>
  );
}
