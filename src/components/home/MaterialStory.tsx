import Image from "next/image";
import { Container } from "@/components/Container";
import { materials } from "@/data/media";

const frames = [
  "md:col-span-5 md:row-span-2",
  "md:col-span-7",
  "md:col-span-4",
  "md:col-span-3",
  "md:col-span-5",
  "md:col-span-7",
];

export function MaterialStory() {
  return (
    <section className="bg-ivory py-20 md:py-28 lg:py-36">
      <Container>
        <h2 className="max-w-3xl text-[clamp(2.5rem,5vw,4.6rem)] leading-[1.02] text-charcoal">
          Character is found in the details.
        </h2>
        <p className="mt-6 max-w-xl text-walnut">
          A short study of surface, grain, and light. These are sample photographs, captioned for what they actually show.
        </p>
        <ul className="mt-12 grid gap-5 md:grid-cols-12 md:gap-6">
          {materials.map((item, index) => (
            <li key={item.title} className={frames[index] ?? "md:col-span-4"}>
              <figure>
                <div className={`relative overflow-hidden bg-divider ${index === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes={index === 0 ? "(min-width: 768px) 40vw, 100vw" : "(min-width: 768px) 28vw, 100vw"}
                    className="object-cover"
                  />
                </div>
                <figcaption className="mt-3">
                  <span className="block font-serif text-2xl text-charcoal">{item.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-walnut">{item.caption}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
