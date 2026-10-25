/**
 * Public studio configuration.
 * Contact details and social profiles come only from the environment.
 * Leave a value blank to hide it. Do not invent business details here.
 */

function publicEnv(name: string) {
  const value = process.env[name];
  return value?.trim() ?? "";
}

export const siteConfig = {
  name: "Embers & Ash",
  legalName: "Embers & Ash Interiors",
  tagline: "Atmosphere, shaped by design.",
  supporting: "Interiors with depth. Spaces with soul.",
  description:
    "Embers & Ash Interiors is a design-led studio creating refined, atmospheric interiors for residential, commercial, and hospitality environments.",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, ""),
  email: publicEnv("NEXT_PUBLIC_STUDIO_EMAIL"),
  phone: publicEnv("NEXT_PUBLIC_STUDIO_PHONE"),
  whatsapp: publicEnv("NEXT_PUBLIC_STUDIO_WHATSAPP"),
  location: publicEnv("NEXT_PUBLIC_STUDIO_LOCATION"),
  social: {
    instagram: publicEnv("NEXT_PUBLIC_SOCIAL_INSTAGRAM"),
    pinterest: publicEnv("NEXT_PUBLIC_SOCIAL_PINTEREST"),
    linkedin: publicEnv("NEXT_PUBLIC_SOCIAL_LINKEDIN"),
  },
  copyrightYear: 2026,
};

export const illustrativeLabel = "Illustrative concept. Not a documented commission.";

export const photoNote =
  "Photographs are reference images for this concept. They are not a record of one built project.";

export const navigation = [
  { href: "/services", label: "Our Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export function externalUrl(value: string) {
  if (!value) return "";
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") return "";
    return url.toString();
  } catch {
    return "";
  }
}

export function emailHref(value: string) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "";
  return `mailto:${value}`;
}

export function whatsappHref(value: string) {
  const digits = value.replace(/\D/g, "");
  if (digits.length < 8) return "";
  return `https://wa.me/${digits}`;
}

export function getSocialLinks() {
  return [
    { label: "Instagram", href: externalUrl(siteConfig.social.instagram) },
    { label: "Pinterest", href: externalUrl(siteConfig.social.pinterest) },
    { label: "LinkedIn", href: externalUrl(siteConfig.social.linkedin) },
  ].filter((item) => item.href);
}
