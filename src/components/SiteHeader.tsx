"use client";

import { useEffect, useId, useRef, useState } from "react";
import { nav } from "@/content/site";
import { Wordmark } from "./Wordmark";

const primaryLinks = nav.filter((item) => item.href !== "#get-involved");

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="mx-auto grid h-18 max-w-6xl grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]">
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {primaryLinks.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="font-semibold text-ink hover:text-sky-deep">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#top" className="justify-self-start rounded-md md:justify-self-center">
          <Wordmark className="h-8 w-auto" />
        </a>

        <div className="hidden justify-self-end md:block">
          <a
            href="#get-involved"
            className="inline-flex rounded-lg bg-midnight px-5 py-2.5 font-semibold text-white hover:bg-midnight-2"
          >
            Get involved
          </a>
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="inline-flex items-center gap-2 justify-self-end rounded-lg border border-line px-4 py-2 text-sm font-semibold md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <svg viewBox="0 0 20 20" aria-hidden="true" className="size-4">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      <nav id={menuId} aria-label="Primary" hidden={!open} className="border-t border-line md:hidden">
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-2 sm:px-8">
          {nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-lg font-semibold hover:text-sky-deep"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
