import type { Metadata } from "next";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How the Embers & Ash Interiors website handles the inquiry form, sample photography, and contact details.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="bg-chalk pt-32 pb-20 md:pt-40 md:pb-28">
      <Container className="max-w-3xl">
        <p className="eyebrow text-walnut">Privacy</p>
        <h1 className="mt-4 text-[clamp(3rem,6vw,5rem)] leading-[0.96] text-charcoal">Privacy note</h1>
        <div className="mt-10 space-y-6 text-walnut">
          <p>
            The inquiry form checks what you type in your browser. On this build it does not send those details to the studio, and it does not store them. A real submission endpoint has to be connected before the form can deliver a message.
          </p>
          <p>
            Email, telephone, location, WhatsApp, and social links appear only when they are supplied in the site configuration. This website does not invent them.
          </p>
          <p>
            Photographs are sample images used to design the website. They are not pictures of Embers & Ash projects. Project studies are illustrative concepts, not documented commissions.
          </p>
          <p>This build does not include analytics, advertising, or a payment service.</p>
        </div>
      </Container>
    </section>
  );
}
