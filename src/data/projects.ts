import type { Project } from "@/types/content";

/**
 * Illustrative studies only. Do not describe these as completed commissions.
 * To use a studio photograph, replace the file in /public/images or change `src`.
 */

export const projects: Project[] = [
  {
    slug: "the-ember-residence",
    title: "The Ember Residence",
    category: "Residential",
    featured: true,
    sample: true,
    summary:
      "An illustrative house concept where timber, stone, and one long sofa share a single daylight volume.",
    overview:
      "This study imagines a residence organized as one generous room. A timber wall, a stone pier, and a low sofa set the pace. The kitchen stays visible, and the garden is reached without a corridor of doors.",
    brief:
      "The imagined brief asks for a home that can hold everyday life in one volume: cooking, sitting, and arriving from the garden, without a separate formal room.",
    concept:
      "Keep the architecture readable. Let the timber wall carry storage and warmth, let the stone mark the middle of the plan, and keep furniture close to the floor so the room stays long.",
    materials: [
      { name: "Timber", note: "A full-height wall, grain left visible rather than painted out." },
      { name: "Stone", note: "A textured pier that separates sitting from cooking without closing either." },
      { name: "Upholstery", note: "A long sectional in a quiet cloth, low enough to keep the view line open." },
      { name: "Metal", note: "Black window frames and a small table, used sparingly against the timber." },
    ],
    decisions:
      "The difficulty is clutter. An open kitchen, a garden door, and a place to sit can compete. The concept gives each one a clear edge: timber for the sitting wall, stone for the middle, and a pale kitchen that recedes. Lighting is imagined from the side and from a few pendants, not from a grid of downlights.",
    hero: {
      src: "/images/ember-1.jpg",
      alt: "An open living space with a grey sectional, a timber feature wall, a stone panel, and a white kitchen beyond.",
    },
    gallery: [
      {
        src: "/images/material-plaster.jpg",
        alt: "An evening living and dining space with a timber wall, a stone fireplace, and doors open to a deck.",
      },
      {
        src: "/images/material-stone.jpg",
        alt: "A black dining table in front of a stone wall and stair, with a timber-lined room beyond glass.",
      },
    ],
  },
  {
    slug: "house-of-stillness",
    title: "House of Stillness",
    category: "Residential",
    featured: true,
    sample: true,
    summary: "An illustrative residential study in pale stone, plain plaster, and a small number of furniture pieces.",
    overview:
      "House of Stillness explores a quieter room. The references are pale: marble, plaster, low seating, and a floor that stays mostly clear. The idea is calm without becoming empty.",
    brief:
      "The imagined brief is a sitting room for a household that wants fewer objects and a clearer order, with daylight doing more of the work than decoration.",
    concept:
      "Symmetry is useful up to a point. The marble wall can hold the room, then the furniture should sit a little lower and softer so the space does not feel staged.",
    materials: [
      { name: "Marble", note: "A quiet wall, book-matched or close to it, not a glossy showpiece." },
      { name: "Plaster", note: "Matte surrounding walls so the stone has somewhere to rest." },
      { name: "Timber", note: "Floor and ceiling grain in the secondary reference, warmer than the marble." },
      { name: "Cloth", note: "Pale upholstery with little pattern." },
    ],
    decisions:
      "A perfectly symmetrical room can feel fixed. The study keeps one ordered wall, then lets the other references loosen: a lower sofa, a plain plaster ground, and a timber ceiling that adds weight without adding objects.",
    hero: {
      src: "/images/stillness-2.jpg",
      alt: "A pale living room with a marble wall, symmetrical armchairs, and a coffered ceiling.",
    },
    gallery: [
      {
        src: "/images/hero-alt-2.jpg",
        alt: "A quiet sitting room with a low sofa, plain plaster walls, and a woven rug.",
      },
      {
        src: "/images/hero-alt.jpg",
        alt: "A corner with a dark timber ceiling, herringbone floor, a leather chair, and a round mirror.",
      },
    ],
  },
  {
    slug: "the-foundry-workspace",
    title: "The Foundry Workspace",
    category: "Commercial",
    featured: true,
    sample: true,
    summary: "An illustrative workplace with a client table, rooms for focus, and a material palette of concrete, timber, and glass.",
    overview:
      "The Foundry Workspace is a commercial study, not a factory. It imagines a workplace with a clear arrival, a table for clients, and rooms where focused work can stay quiet.",
    brief:
      "The imagined brief asks for a client-facing business interior that feels composed rather than temporary, with enough acoustic calm for meetings and desks.",
    concept:
      "Expose the structure where it helps, then edit the furniture hard. A timber table, black pendants, and glass rooms do the work. Color stays limited.",
    materials: [
      { name: "Concrete", note: "Ceiling and structure left visible in the meeting room." },
      { name: "Timber", note: "The client table, warm against the grey floor." },
      { name: "Glass", note: "Rooms along a corridor, so the plan stays readable." },
      { name: "Black metal", note: "Frames, pendants, and a kitchen volume." },
    ],
    decisions:
      "Workplaces collect cables, screens, and spare chairs. The concept concentrates meeting in one well-lit room and pushes focus into the glazed rooms beyond. The challenge is warmth: concrete and glass need the timber table, or the interior becomes only technical.",
    hero: {
      src: "/images/foundry-2.jpg",
      alt: "A meeting room with a concrete ceiling, a timber table, pink chairs, and black pendant lights.",
    },
    gallery: [
      {
        src: "/images/foundry-1.jpg",
        alt: "A long workplace corridor with dark glass rooms, a pale floor, and a black kitchen volume.",
      },
      {
        src: "/images/foundry-3.jpg",
        alt: "A workplace lounge with pale timber screens, grey seating, and a large black floor lamp.",
      },
    ],
  },
  {
    slug: "the-nocturne-retreat",
    title: "The Nocturne Retreat",
    category: "Hospitality",
    featured: true,
    sample: true,
    summary: "An illustrative guest-house study: a low bed, plaster, desert light, and a darker bedroom for the evening.",
    overview:
      "The Nocturne Retreat imagines a small place to stay. Arrival is simple. A low timber bed, plaster walls, and a large view do more than a theme. A second reference explores the same idea after dark: a tall bed, heavy curtains, and a few lamps.",
    brief:
      "The imagined brief is guest accommodation that feels intimate and specific, with a short sequence from arrival to rest and very little decoration.",
    concept:
      "Reduce the room to bed, light, and one material that can be touched. Let the landscape, or the city beyond the curtain, remain part of the interior.",
    materials: [
      { name: "Plaster", note: "Walls and a thick platform, matte and slightly imperfect." },
      { name: "Timber", note: "The bed frame, left pale." },
      { name: "Linen", note: "Bedding in a narrow range of warm whites and greys." },
      { name: "Light", note: "Lamps at bed height rather than a bright ceiling." },
    ],
    decisions:
      "Hospitality rooms are often over-styled. This study removes the theme and keeps the sequence: a day room with the landscape, then a darker room for night. The two photographs are different places. Together they test one idea, they do not document one building.",
    hero: {
      src: "/images/nocturne-2.jpg",
      alt: "A guest pavilion with a low timber bed, plaster walls, and desert landscape beyond the glass.",
    },
    gallery: [
      {
        src: "/images/nocturne-1.jpg",
        alt: "A bedroom with a dark wall, a tall upholstered bed, grey curtains, and warm bedside lamps.",
      },
    ],
  },
  {
    slug: "ashwood-house",
    title: "Ashwood House",
    category: "Residential",
    featured: false,
    sample: true,
    summary: "An illustrative house study centered on a kitchen, with timber outside and a quieter joinery palette inside.",
    overview:
      "Ashwood House treats the kitchen as the social room. Deep grey joinery, a stone counter, and timber underfoot make a place to cook and stay. The exterior reference is a timber-clad house with a dark recessed entry.",
    brief:
      "The imagined brief is a family kitchen that can remain composed while it is in use, plus an exterior that already explains the material idea before you enter.",
    concept:
      "Give the working wall a dark, even joinery line. Keep open shelf storage limited. Let the timber floor and the exterior cladding connect inside to outside.",
    materials: [
      { name: "Painted joinery", note: "A deep grey, with small metal pulls rather than a show of hardware." },
      { name: "Stone", note: "A pale counter that catches the window." },
      { name: "Timber", note: "Floor inside, vertical cladding outside." },
      { name: "Light", note: "One large shade over the working area, warm rather than blue." },
    ],
    decisions:
      "Kitchens collect tools. The concept hides most of them in the joinery and leaves only a short run of open shelf. The exterior is the other half of the study: timber and black, so the house reads as one material idea from the street.",
    hero: {
      src: "/images/ashwood-2.jpg",
      alt: "A kitchen with deep grey cabinets, a pale stone counter, timber shelves, and a large drum shade.",
    },
    gallery: [
      {
        src: "/images/ashwood-3.jpg",
        alt: "A timber-clad house exterior with a black recessed entry and a glazed screen.",
      },
    ],
  },
  {
    slug: "the-gathering-room",
    title: "The Gathering Room",
    category: "Hospitality",
    featured: false,
    sample: true,
    summary: "An illustrative dining room in dark timber and brass, planned around low light and close tables.",
    overview:
      "The Gathering Room is a hospitality study for supper. Dark timber, brass screens, and black seating make a room that feels occupied before anyone sits down. Light stays low and warm.",
    brief:
      "The imagined brief is a dining room that should feel intimate at a full seating, with a material palette that can take evening light.",
    concept:
      "Build the room from dark horizontal surfaces and a few vertical brass lines. Keep the ceiling visually heavy. Let the tables sit close, with cloth and timber doing more than centerpieces.",
    materials: [
      { name: "Dark timber", note: "Floor and table tops, with the grain still readable in low light." },
      { name: "Brass", note: "Screens and fittings, used as lines rather than ornament." },
      { name: "Upholstery", note: "Black seating, so the timber reads as the lighter note." },
      { name: "Light", note: "Pendants and a little daylight, never a bright wash." },
    ],
    decisions:
      "A dark dining room can turn muddy. The concept keeps contrast in the brass and the tabletops, and it refuses a second decorative theme. The close photograph is a table setting, not a second architecture. It is here to test atmosphere, not to claim a finished restaurant.",
    hero: {
      src: "/images/gathering-3.jpg",
      alt: "A dining room with dark timber floors, brass screens, and black upholstered seating.",
    },
    gallery: [
      {
        src: "/images/gathering-1.jpg",
        alt: "A close view of a restaurant table with glassware, a plated dish, and warm light.",
      },
    ],
  },
];
