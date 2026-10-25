import type { Picture } from "@/types/content";

/**
 * Sample photography for the site design, saved in /public/images.
 * Replace a file, or change its path here, when the studio supplies its own pictures.
 * These images are not photographs of Embers & Ash projects.
 */

export const heroImage: Picture = {
  src: "/images/gathering-3.jpg",
  alt: "A dining room with dark timber floors, brass screens, black seating, and warm low light.",
};

export const studioImage: Picture = {
  src: "/images/studio.jpg",
  alt: "A living room with a grey sofa, leather chairs, a timber coffee table, and a brass arc lamp.",
};

export const ctaImage: Picture = {
  src: "/images/cta.jpg",
  alt: "A dusk exterior of a dark metal and timber building, with a warmly lit entry.",
};

export const comparisonImages = {
  before: {
    src: "/images/compare-before.jpg",
    alt: "Sample photograph for the before side: a bright living room with beige seating and a turquoise cushion. It is not a studio project.",
  },
  after: {
    src: "/images/compare-after.jpg",
    alt: "Sample photograph for the after side: a grey living room with dark shelving. It is a different room from the before photograph.",
  },
} as const;

export const materials: { title: string; caption: string; image: Picture }[] = [
  {
    title: "Stone",
    caption: "Large slabs beside a stair.",
    image: {
      src: "/images/material-stone.jpg",
      alt: "A dining table in front of a stone-clad wall and a black steel stair.",
    },
  },
  {
    title: "Timber",
    caption: "Ceiling and floor, grain in view.",
    image: {
      src: "/images/hero-alt.jpg",
      alt: "A corner with a dark timber ceiling, herringbone oak floor, and a leather chair.",
    },
  },
  {
    title: "Clay",
    caption: "Matte, speckled, fired.",
    image: {
      src: "/images/material-bronze.jpg",
      alt: "A group of speckled ceramic cups and a larger clay vessel on a white shelf.",
    },
  },
  {
    title: "Plaster",
    caption: "A quiet, matte ground.",
    image: {
      src: "/images/hero-alt-2.jpg",
      alt: "A pale sitting room with plain plaster walls, a low sofa, and a woven rug.",
    },
  },
  {
    title: "Cloth",
    caption: "Linen, wool, and a visible hand.",
    image: {
      src: "/images/material-fabric.jpg",
      alt: "A bedroom with linen bedding, a leather bench, and curtains beside a window.",
    },
  },
  {
    title: "Light",
    caption: "Aimed, not scattered.",
    image: {
      src: "/images/material-light.jpg",
      alt: "A dark metal lamp against a plain wall.",
    },
  },
];
