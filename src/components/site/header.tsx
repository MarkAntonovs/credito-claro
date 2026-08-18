import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { primaryNavigation } from "@/config/navigation";
import { publicRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { Container } from "./section";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <Container>
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3.5">
          <Link to="/" className="min-w-0 truncate font-display text-lg tracking-tight">
            {siteConfig.siteName.replace(/\.co$/, "")}
            <span className="text-accent">.co</span>
          </Link>

          <nav aria-label="Principal" className="hidden items-center gap-6 lg:flex">
            {primaryNavigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={publicRoutes.commercial.offers.path}
              className="inline-flex min-h-10 items-center rounded-md border border-primary px-4 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Comparar opciones
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-md border border-border lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
            <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
          </button>
        </div>

        {open ? (
          <nav id="mobile-nav" aria-label="Principal móvil" className="pb-4 lg:hidden">
            <ul className="border-t border-border">
              {primaryNavigation.map((item) => (
                <li key={item.label}>
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
            <a
              href={publicRoutes.commercial.offers.path}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground"
            >
              Comparar opciones
            </a>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
