import type { Service } from "@/types/content";

export const services: Service[] = [
  {
    id: "residential",
    title: "Residential Interiors",
    category: "Residential",
    summary:
      "Personalized spaces shaped by the rhythms of everyday life, with thoughtful layouts, enduring materials, and an unmistakable sense of home.",
    overview:
      "Residential work begins with how a household actually uses a day: where people gather, where they retreat, and which rooms have to work hard. The design direction covers planning, materials, light, and furniture, and it can include a renovation concept when the brief calls for one.",
    considerations: [
      "How the rooms connect, and which ones should stay quiet.",
      "Daylight first, then the lamps that carry the evening.",
      "Materials that can be lived with, not only photographed.",
      "Storage planned early, so the rooms can stay clear.",
    ],
    deliverables: [
      "Spatial planning for the rooms in scope.",
      "An interior concept and material palette.",
      "Finish, lighting, and furniture direction.",
      "Styling guidance for the final edit.",
      "Renovation concepts where the brief includes them.",
    ],
    image: {
      src: "/images/service-residential.jpg",
      alt: "A timber-clad house at dusk, with living and dining rooms visible through the glass.",
    },
  },
  {
    id: "commercial",
    title: "Commercial Interiors",
    category: "Commercial",
    summary:
      "Purposeful environments that balance function, atmosphere, and brand identity through considered spatial and material decisions.",
    overview:
      "Commercial interiors cover workplaces, retail and showroom rooms, and other client-facing business spaces. The work is planning and atmosphere: how someone arrives, meets, and focuses, and which materials carry the character of the brand.",
    considerations: [
      "The sequence from entry to the room where the real conversation happens.",
      "A difference between focus and gathering, planned rather than left to furniture.",
      "Acoustic comfort and daylight, treated as design material.",
      "A palette that can represent the brand without a layer of graphics.",
    ],
    deliverables: [
      "Spatial planning for the agreed commercial scope.",
      "A concept for arrival, meeting, and focused work.",
      "Material choices aligned with the brand’s character.",
      "Lighting and furniture direction.",
      "Design documentation limited to the agreed interior scope.",
    ],
    image: {
      src: "/images/foundry-2.jpg",
      alt: "A meeting room with a concrete ceiling, a timber table, and black pendant lights.",
    },
  },
  {
    id: "hospitality",
    title: "Hospitality Design",
    category: "Hospitality",
    summary:
      "Immersive environments that create a sense of arrival, comfort, and lasting memory through the relationship between space, light, and detail.",
    overview:
      "Hospitality studies cover guest accommodation, dining rooms, and lounges. The design question is the stay itself: the first impression, the light at supper, and the few materials a guest will remember.",
    considerations: [
      "Arrival, and how quickly the room explains itself.",
      "The difference between day and evening in the same interior.",
      "Comfort at the scale of a chair, a bed, and a table.",
      "A material palette that still feels considered when the room is full.",
    ],
    deliverables: [
      "Spatial planning for guest, dining, or lounge areas.",
      "An atmospheric concept and material palette.",
      "Lighting direction for arrival and evening.",
      "Furniture direction.",
      "Notes on the guest sequence within the agreed scope.",
    ],
    image: {
      src: "/images/nocturne-2.jpg",
      alt: "A guest pavilion with a low timber bed, plaster walls, and a wide desert view.",
    },
  },
];

export const serviceLinks = services.map((service) => ({
  href: `/services#${service.id}`,
  label: service.title,
}));
