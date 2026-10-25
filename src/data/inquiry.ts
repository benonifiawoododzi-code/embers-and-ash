export const inquiryOptions = {
  categories: ["Residential", "Commercial", "Hospitality", "Not sure yet"],
  sizes: ["Not specified", "Under 50 m²", "50–120 m²", "120–300 m²", "300 m² or more"],
  budgets: ["Not specified", "Under 50,000", "50,000–150,000", "150,000–400,000", "400,000 or more"],
  timelines: ["Not specified", "Within 3 months", "3–6 months", "6–12 months", "More than a year"],
} as const;

export const serviceParamToCategory: Record<string, (typeof inquiryOptions.categories)[number]> = {
  residential: "Residential",
  commercial: "Commercial",
  hospitality: "Hospitality",
};
