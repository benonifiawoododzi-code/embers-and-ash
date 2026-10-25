import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { Container } from "@/components/Container";
import { studioImage } from "@/data/media";

export function StudioIntroduction() {
  return (
    <section id="approach" className="bg-ivory py-20 md:py-28 lg:py-36">
      <Container className="grid items-start gap-12 md:grid-cols-12">
        <div className="order-2 md:order-1 md:col-span-5">
          <p className="eyebrow text-walnut">Our approach</p>
          <h2 className="mt-4 text-[clamp(2.6rem,5vw,4.5rem)] leading-[1.02] text-charcoal">
            Beyond the surface, there is a feeling.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-walnut md:text-lg">
            We believe the most memorable interiors are experienced as much as they are seen. Through considered spatial planning, tactile materials, and a sensitive approach to light, we create environments that feel purposeful, personal, and enduring.
          </p>
          <p className="mt-8 max-w-sm font-serif text-2xl leading-snug text-charcoal">
            Warmth lives in the details. Character lives in the contrast.
          </p>
          <Link href="#how-we-work" className="link-line mt-8 inline-flex min-h-11 items-center gap-3 text-[0.72rem] tracking-[0.16em] text-charcoal uppercase">
            Discover Our Approach
            <Arrow />
          </Link>
        </div>
        <div className="relative order-1 aspect-[4/5] bg-divider md:order-2 md:col-span-6 md:col-start-7">
          <Image
            src={studioImage.src}
            alt={studioImage.alt}
            fill
            sizes="(min-width: 768px) 46vw, 100vw"
            className="object-cover"
          />
        </div>
      </Container>
    </section>
  );
}
