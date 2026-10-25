"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Picture } from "@/types/content";

export function ProjectGallery({ images }: { images: Picture[] }) {
  const [active, setActive] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (active !== null && !dialog.open) {
      dialog.showModal();
      closeRef.current?.focus();
    }
    if (active === null && dialog.open) dialog.close();
  }, [active]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        setActive((current) => (current === null ? current : (current + 1) % images.length));
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        setActive((current) => (current === null ? current : (current - 1 + images.length) % images.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, images.length]);

  const current = active === null ? null : images[active];

  return (
    <>
      <ul className="grid gap-4 md:grid-cols-2">
        {images.map((image, index) => {
          const wide = images.length < 3 || index === 0;
          return (
            <li key={`${image.src}-${index}`} className={wide ? "md:col-span-2" : undefined}>
              <button
                type="button"
                className="group relative block w-full overflow-hidden text-left"
                onClick={(event) => {
                  triggerRef.current = event.currentTarget;
                  setActive(index);
                }}
              >
                <span className={`relative block bg-divider ${wide ? "aspect-[16/10]" : "aspect-[4/5]"}`}>
                  <Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 70vw, 100vw" className="object-cover media-zoom" />
                </span>
                <span className="sr-only">Enlarge</span>
              </button>
            </li>
          );
        })}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Enlarged project photograph"
        onClose={() => {
          setActive(null);
          triggerRef.current?.focus();
        }}
      >
        {current ? (
          <>
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-6">
              <p className="text-sm tracking-[0.14em] uppercase">
                {(active ?? 0) + 1} / {images.length}
              </p>
              <button ref={closeRef} type="button" className="min-h-11 px-3 text-sm tracking-[0.14em] uppercase" onClick={() => dialogRef.current?.close()}>
                Close
              </button>
            </div>
            <div className="relative min-h-0 flex-1">
              <Image src={current.src} alt={current.alt} fill sizes="100vw" className="object-contain" />
            </div>
            <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6">
              <button
                type="button"
                className="min-h-11 px-3 text-sm tracking-[0.14em] uppercase"
                onClick={() => setActive((value) => (value === null ? 0 : (value - 1 + images.length) % images.length))}
              >
                Previous
              </button>
              <button
                type="button"
                className="min-h-11 px-3 text-sm tracking-[0.14em] uppercase"
                onClick={() => setActive((value) => (value === null ? 0 : (value + 1) % images.length))}
              >
                Next
              </button>
            </div>
          </>
        ) : null}
      </dialog>
    </>
  );
}
