import { Menu, X } from "lucide-react";
import { useState } from "react";

import { englishPrimaryNavigation, englishRoutes } from "@/config/english-routes";
import { siteConfig } from "@/config/site";
import { Container } from "./section";

export function EnglishHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3.5">
          <a
            href={englishRoutes.home}
            className="min-w-0 truncate font-display text-lg tracking-tight"
          >
            {siteConfig.siteName.replace(/\.co$/, "")}
            <span className="text-accent">.co</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
            {englishPrimaryNavigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="english-mobile-nav"
            className="inline-flex size-11 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? (
              <X aria-hidden="true" className="size-5" />
            ) : (
              <Menu aria-hidden="true" className="size-5" />
            )}
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
        {open ? (
          <nav id="english-mobile-nav" aria-label="Mobile navigation" className="pb-4 lg:hidden">
            <ul className="border-t border-border">
              {englishPrimaryNavigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-center border-b border-border text-[0.95rem]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
