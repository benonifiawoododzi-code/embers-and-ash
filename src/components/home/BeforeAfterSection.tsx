import Link from "next/link";
import { BeforeAfterSlider } from "@/components/comparison/BeforeAfterSlider";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { comparisonImages } from "@/data/media";

export function BeforeAfterSection() {
  return (
    <section id="transformation" className="bg-ivory py-20 md:py-28 lg:py-36">
      <Container>
        <SectionHeading
          eyebrow="The transformation"
          title="See the difference intention makes."
          intro="This control is ready for two photographs of the same room. The pictures loaded now are unrelated samples, so they do not show a transformation. Replace them before publishing a before-and-after."
        />
        <div className="mt-12">
          <BeforeAfterSlider before={comparisonImages.before} after={comparisonImages.after} />
        </div>
        <Link href="/projects" className="link-line mt-8 inline-flex min-h-11 items-center text-[0.72rem] tracking-[0.16em] text-charcoal uppercase">
          View illustrative projects
        </Link>
      </Container>
    </section>
  );
}
