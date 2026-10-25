import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Page not found",
};

export default function NotFound() {
  return (
    <section className="bg-chalk pt-36 pb-24 md:pt-44">
      <Container>
        <p className="eyebrow text-walnut">404</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(3rem,7vw,5.6rem)] leading-[0.96] text-charcoal">This page could not be found.</h1>
        <p className="mt-6 max-w-md text-walnut">The address may be mistyped, or the page may have moved.</p>
        <div className="mt-10 flex flex-wrap items-center gap-6">
          <Link href="/" className="btn btn-dark">
            Home
          </Link>
          <Link href="/projects" className="link-line text-[0.72rem] tracking-[0.16em] text-charcoal uppercase">
            Projects
          </Link>
        </div>
      </Container>
    </section>
  );
}
