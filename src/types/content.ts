export const projectCategories = ["Residential", "Commercial", "Hospitality"] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export type Picture = {
  src: string;
  alt: string;
};

export type Material = {
  name: string;
  note: string;
};

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  featured: boolean;
  /** Sample studies are never presented as finished commissions. */
  sample: true;
  summary: string;
  overview: string;
  brief: string;
  concept: string;
  materials: Material[];
  decisions: string;
  hero: Picture;
  gallery: Picture[];
};

export type Service = {
  id: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  overview: string;
  considerations: string[];
  deliverables: string[];
  image: Picture;
};

export type Testimonial = {
  quote: string;
  attribution: string;
  category: ProjectCategory;
};

export type ProcessStep = {
  number: string;
  title: string;
  body: string;
};
