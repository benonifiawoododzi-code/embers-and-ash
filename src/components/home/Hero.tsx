import Image from "next/image";
import Link from "next/link";
import { heroImage } from "@/data/media";

export function Hero() {
  return (
    <section className="relative min-h-[88svh] bg-charcoal text-ivory lg:min-h-[92svh]">
      <Image
        src={heroImage.src}
        alt={heroImage.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(33,31,29,0.45)_0%,rgba(33,31,29,0.12)_38%,rgba(33,31,29,0.78)_100%)]" />
      <div className="relative z-10 mx-auto flex min-h-[88svh] w-full max-w-[1440px] flex-col justify-end px-5 pt-28 pb-10 md:px-10 lg:min-h-[92svh] lg:px-16 lg:pb-14">
        <div className="rise-in max-w-full">
          <p className="eyebrow text-ivory">Embers & Ash Interiors</p>
          <h1 className="mt-5 max-w-[8.2em] text-[clamp(2.35rem,7.2vw,6.5rem)] leading-[0.96] text-ivory">
            Atmosphere, shaped by design.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ivory md:text-lg">
            We create considered interiors where material, light, and space come together to shape the way people live, work, and connect.
          </p>
          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link href="/projects" className="btn btn-light">
              Explore Our Projects
            </Link>
            <Link href="/contact" className="link-line inline-flex min-h-11 items-center text-[0.72rem] tracking-[0.16em] text-ivory uppercase">
              Discuss Your Space
            </Link>
          </div>
          <a href="#approach" className="scroll-cue mt-10 inline-flex items-center gap-3 text-[0.68rem] tracking-[0.18em] text-ivory uppercase">
            <span className="block h-8 w-px bg-ivory" />
            Scroll
          </a>
        </div>
      </div>
    </section>
  );
}
