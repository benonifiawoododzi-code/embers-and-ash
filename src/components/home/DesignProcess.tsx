import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/data/process";

export function DesignProcess() {
  return (
    <section id="how-we-work" className="scroll-mt-24 bg-chalk py-20 md:py-28 lg:py-36">
      <Container>
        <SectionHeading eyebrow="How we work" title="Thoughtful from the first conversation." />
        <ol className="mt-14 grid gap-0 md:mt-20 md:grid-cols-5">
          {processSteps.map((step) => (
            <li key={step.number} className="border-t border-divider py-8 md:px-4 md:first:pl-0 md:last:pr-0">
              <p className="font-serif text-2xl text-charcoal">{step.number}</p>
              <h3 className="mt-4 text-3xl text-charcoal">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-walnut">{step.body}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
