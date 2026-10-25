"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navigation } from "@/data/site";
import { Wordmark } from "@/components/layout/Wordmark";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [path, setPath] = useState(pathname);
  if (pathname !== path) {
    setPath(pathname);
    setOpen(false);
  }
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const overlay = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    const main = document.getElementById("content");
    const footer = document.querySelector("footer");
    if (main) main.inert = open;
    if (footer instanceof HTMLElement) footer.inert = open;
    return () => {
      document.body.classList.remove("menu-open");
      if (main) main.inert = false;
      if (footer instanceof HTMLElement) footer.inert = false;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>("a[href], button");
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const tone = overlay ? "text-ivory" : "text-charcoal";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${overlay ? "focus-on-dark bg-transparent" : "border-b border-divider bg-chalk/95 backdrop-blur-md"} ${tone}`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center justify-between gap-6 px-5 md:px-10 lg:px-16">
        <Link href="/" aria-label="Embers & Ash Interiors, home" className="shrink-0">
          <Wordmark className="text-[1.35rem] sm:text-[1.5rem]" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`text-[0.72rem] tracking-[0.16em] uppercase ${active ? "underline decoration-1 underline-offset-[0.4rem]" : "link-line"}`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="inline-flex min-h-11 items-center border border-current px-4 text-[0.68rem] tracking-[0.16em] uppercase">
            Discuss Your Project
          </Link>
        </nav>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span aria-hidden="true" className="relative block h-3 w-6">
            <span className={`absolute left-0 h-px w-6 bg-current ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-6 bg-current ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <div
        id={panelId}
        ref={panelRef}
        inert={!open}
        aria-hidden={!open}
        className={`fixed inset-x-0 bottom-0 top-[4.5rem] z-40 bg-chalk text-charcoal transition-opacity duration-200 motion-reduce:transition-none lg:hidden ${open ? "visible opacity-100" : "invisible opacity-0"}`}
      >
        <nav aria-label="Mobile" className="flex h-full flex-col px-5 py-6">
          <button
            ref={closeRef}
            type="button"
            className="self-end text-[0.72rem] tracking-[0.16em] uppercase"
            onClick={() => {
              setOpen(false);
              toggleRef.current?.focus();
            }}
          >
            Close
          </button>
          <ul className="mt-8">
            {navigation.map((item) => (
              <li key={item.href} className="border-t border-divider">
                <Link
                  href={item.href}
                  className="block py-4 font-serif text-4xl text-charcoal"
                  aria-current={isActive(pathname, item.href) ? "page" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" className="btn btn-dark mt-auto" onClick={() => setOpen(false)}>
            Discuss Your Project
          </Link>
        </nav>
      </div>
    </header>
  );
}
