import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/Container";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { emailHref, siteConfig, whatsappHref } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Begin a conversation with Embers & Ash Interiors about a residential, commercial, or hospitality interior.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const email = emailHref(siteConfig.email);
  const whatsapp = whatsappHref(siteConfig.whatsapp);

  return (
    <section className="bg-chalk pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="eyebrow text-walnut">Contact</p>
          <h1 className="mt-4 text-[clamp(3rem,6vw,5.4rem)] leading-[0.96] text-charcoal">Tell us what you’re imagining.</h1>
          <p className="mt-6 text-lg leading-relaxed text-walnut">
            Every considered space begins with a conversation. Share a little about your project, and let’s explore the possibilities.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-walnut">
            On this build, the form only checks your note in the browser. Nothing is sent or stored until a submission endpoint is connected.
          </p>
          <ul className="mt-8 space-y-2 text-sm">
            {email ? (
              <li>
                <a href={email} className="link-line text-charcoal">
                  {siteConfig.email}
                </a>
              </li>
            ) : null}
            {siteConfig.phone ? (
              <li>
                <a href={`tel:${siteConfig.phone}`} className="link-line text-charcoal">
                  {siteConfig.phone}
                </a>
              </li>
            ) : null}
            {whatsapp ? (
              <li>
                <a href={whatsapp} className="link-line text-charcoal" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            ) : null}
            {siteConfig.location ? <li className="text-charcoal">{siteConfig.location}</li> : null}
          </ul>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <Suspense fallback={<div className="min-h-[36rem] border-t border-divider pt-8 text-sm text-walnut">Preparing the form.</div>}>
            <ConsultationForm />
          </Suspense>
        </div>
      </Container>
    </section>
  );
}
