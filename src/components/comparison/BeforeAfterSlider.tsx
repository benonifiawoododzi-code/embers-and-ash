"use client";

import Image from "next/image";
import { useState } from "react";
import type { Picture } from "@/types/content";

export function BeforeAfterSlider({ before, after }: { before: Picture; after: Picture }) {
  const [value, setValue] = useState(50);

  return (
    <figure className="focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-charcoal">
      <div className="relative aspect-[3/4] overflow-hidden bg-charcoal sm:aspect-[16/10]">
        <Image src={before.src} alt={before.alt} fill sizes="(min-width: 1024px) 80vw, 100vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${value}%)` }}>
          <Image src={after.src} alt={after.alt} fill sizes="(min-width: 1024px) 80vw, 100vw" className="object-cover" />
        </div>
        <div className="pointer-events-none absolute inset-y-0 z-[1]" style={{ left: `${value}%` }}>
          <div className="h-full w-px -translate-x-1/2 bg-ivory" />
          <div className="absolute top-1/2 left-1/2 h-11 w-11 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ivory" />
        </div>
        <span className="pointer-events-none absolute top-4 left-4 z-[1] bg-charcoal/80 px-2 py-1 text-[0.68rem] tracking-[0.16em] text-ivory uppercase">
          Before
        </span>
        <span className="pointer-events-none absolute top-4 right-4 z-[1] bg-charcoal/80 px-2 py-1 text-[0.68rem] tracking-[0.16em] text-ivory uppercase">
          After
        </span>
        <input
          className="compare-range"
          type="range"
          min={0}
          max={100}
          value={value}
          aria-label="Drag to compare the before and after photographs"
          aria-valuetext={`${value} percent shows the before photograph from the left. ${100 - value} percent shows the after photograph.`}
          onChange={(event) => setValue(Number(event.target.value))}
        />
      </div>
      <figcaption className="mt-4 text-sm leading-relaxed text-walnut">
        Drag across the image, or focus the control and use the arrow keys.
      </figcaption>
    </figure>
  );
}
