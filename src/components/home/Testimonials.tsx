import { Container } from "@/components/Container";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="reflections" className="bg-chalk py-20 md:py-28 lg:py-36">
      <Container>
        <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,4.6rem)] leading-[1.02] text-charcoal">
          Spaces remembered. Experiences shared.
        </h2>
        {testimonials.length === 0 ? (
          <div className="mt-12 max-w-2xl border-t border-divider pt-8">
            <p className="font-serif text-[clamp(1.7rem,2.5vw,2.4rem)] leading-snug text-charcoal">
              Verified client reflections will be published here.
            </p>
            <p className="mt-4 max-w-xl text-walnut">
              The studio has not supplied quotations for this site. None are shown in their place.
            </p>
          </div>
        ) : (
          <TestimonialCarousel items={testimonials} />
        )}
      </Container>
    </section>
  );
}
