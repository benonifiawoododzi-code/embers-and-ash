import Link from "next/link";
import { serviceLinks } from "@/data/services";
import { emailHref, getSocialLinks, navigation, siteConfig, whatsappHref } from "@/data/site";
import { Wordmark } from "@/components/layout/Wordmark";

export function Footer() {
  const social = getSocialLinks();
  const email = emailHref(siteConfig.email);
  const whatsapp = whatsappHref(siteConfig.whatsapp);
  const hasContact = Boolean(email || siteConfig.phone || siteConfig.location || whatsapp);

  return (
    <footer className="bg-charcoal text-ivory">
      <div className="mx-auto grid w-full max-w-[1440px] gap-14 px-5 py-16 md:px-10 lg:grid-cols-12 lg:px-16 lg:py-24">
        <div className="lg:col-span-5">
          <Wordmark accent className="text-[clamp(3rem,6vw,5.4rem)]" />
          <p className="mt-4 text-xs tracking-[0.18em] text-clay uppercase">Interiors</p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory">{siteConfig.supporting}</p>
        </div>

        <div className="grid gap-10 sm:grid-cols-3 lg:col-span-7">
          <div>
            <p className="eyebrow text-clay">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line text-sm text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-clay">Services</p>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-line text-sm text-ivory">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow text-clay">Contact</p>
            <ul className="mt-4 space-y-2 text-sm">
              {email ? (
                <li>
                  <a href={email} className="link-line text-ivory">
                    {siteConfig.email}
                  </a>
                </li>
              ) : null}
              {siteConfig.phone ? (
                <li>
                  <a href={`tel:${siteConfig.phone}`} className="link-line text-ivory">
                    {siteConfig.phone}
                  </a>
                </li>
              ) : null}
              {whatsapp ? (
                <li>
                  <a href={whatsapp} className="link-line text-ivory" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              ) : null}
              {siteConfig.location ? <li className="text-ivory">{siteConfig.location}</li> : null}
              {social.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="link-line text-ivory" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
              {!hasContact && social.length === 0 ? (
                <li>
                  <Link href="/contact" className="link-line text-ivory">
                    Discuss a project
                  </Link>
                </li>
              ) : null}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-5 py-6 text-xs text-clay sm:flex-row sm:items-center sm:justify-between md:px-10 lg:px-16">
          <p>
            © {siteConfig.copyrightYear} {siteConfig.legalName}
          </p>
          <Link href="/privacy" className="link-line">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
