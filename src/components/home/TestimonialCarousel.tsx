"use client";

import { useState } from "react";
import type { Testimonial } from "@/types/content";

export function TestimonialCarousel({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const item = items[index];
  if (!item) return null;
  const total = items.length;

  return (
    <div className="mt-12 max-w-3xl">
      <figure>
        <blockquote className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] leading-snug text-charcoal" aria-live="polite">
          {item.quote}
        </blockquote>
        <figcaption className="mt-6 text-sm tracking-[0.14em] text-walnut uppercase">
          {item.attribution}
          <span aria-hidden="true"> · </span>
          {item.category}
        </figcaption>
      </figure>
      {total > 1 ? (
        <div className="mt-8 flex gap-3">
          <button type="button" className="btn btn-dark" onClick={() => setIndex((current) => (current - 1 + total) % total)}>
            Previous
          </button>
          <button type="button" className="btn btn-dark" onClick={() => setIndex((current) => (current + 1) % total)}>
            Next
          </button>
        </div>
      ) : null}
    </div>
  );
}
