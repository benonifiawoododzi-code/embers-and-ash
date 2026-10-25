import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section className="bg-charcoal py-20 text-ivory md:py-28 lg:py-36">
      <Container>
        <SectionHeading
          tone="dark"
          eyebrow="Our services"
          title="Design with intention. Detail with purpose."
        />
        <ul className="mt-14 divide-y divide-white/15 md:mt-20">
          {services.map((service, index) => {
            const flipped = index % 2 === 1;
            return (
              <li key={service.id} className="grid items-center gap-8 py-12 md:grid-cols-12 md:py-16">
                <div className={`relative aspect-[4/5] bg-walnut md:col-span-6 ${flipped ? "md:col-start-7" : ""}`}>
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    fill
                    sizes="(min-width: 768px) 46vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className={`md:col-span-5 ${flipped ? "md:col-start-1 md:row-start-1" : "md:col-start-8"}`}>
                  <h3 className="text-[clamp(2.2rem,3.4vw,3.4rem)] leading-none text-ivory">{service.title}</h3>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ivory">{service.summary}</p>
                  <Link
                    href={`/services#${service.id}`}
                    className="link-line mt-8 inline-flex min-h-11 items-center gap-3 text-[0.72rem] tracking-[0.16em] text-ivory uppercase"
                  >
                    Explore Service
                    <Arrow />
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
