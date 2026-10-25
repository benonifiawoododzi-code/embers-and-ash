import Image from "next/image";
import Link from "next/link";
import { ctaImage } from "@/data/media";

export function FinalCTA() {
  return (
    <section className="relative min-h-[80svh] bg-charcoal text-ivory">
      <Image src={ctaImage.src} alt={ctaImage.alt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(33,31,29,0.2)_0%,rgba(33,31,29,0.72)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[80svh] w-full max-w-[1440px] flex-col justify-end px-5 py-16 md:px-10 lg:px-16 lg:py-24">
        <h2 className="max-w-4xl text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.98] text-ivory">
          Let’s make space for something exceptional.
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory md:text-lg">
          Whether you’re reimagining a home, creating a workplace, or developing a hospitality concept, we’d love to hear what you’re envisioning.
        </p>
        <Link href="/contact" className="btn btn-light mt-8 self-start">
          Discuss Your Project
        </Link>
      </div>
    </section>
  );
}
