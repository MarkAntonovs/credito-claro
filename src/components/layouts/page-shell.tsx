import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/site/breadcrumbs";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { LastReviewed } from "@/components/site/primitives";
import { Container } from "@/components/site/section";

export interface InternalLink {
  label: string;
  href: string;
  description?: string | undefined;
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="contenido-principal">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  lastReviewed,
  meta,
}: {
  breadcrumbs: Crumb[];
  eyebrow?: string | undefined;
  title: string;
  intro: string;
  lastReviewed?: string | null | undefined;
  meta?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <Container>
        <div className="max-w-3xl py-10 sm:py-14">
          <Breadcrumbs items={breadcrumbs} />
          {eyebrow ? <p className="eyebrow mt-7 text-accent-soft-foreground">{eyebrow}</p> : null}
          <h1 className="mt-3 text-balance text-3xl leading-[1.1] sm:text-4xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
            {intro}
          </p>
          {meta ? <div className="mt-5">{meta}</div> : null}
          {lastReviewed !== undefined ? (
            <LastReviewed date={lastReviewed} label="Última revisión editorial" className="mt-5" />
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export function RelatedNavigation({
  title = "También puede interesarte",
  links,
}: {
  title?: string;
  links: InternalLink[];
}) {
  if (links.length === 0) return null;

  return (
    <nav aria-label={title} className="border-t border-border-strong pt-5 lg:border-t-0 lg:pt-0">
      <h2 className="eyebrow text-muted-foreground">{title}</h2>
      <ul className="mt-3 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm font-medium underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent-soft-foreground hover:decoration-accent"
            >
              {link.label}
            </a>
            {link.description ? (
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                {link.description}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function ContentGrid({
  children,
  relatedLinks = [],
}: {
  children: ReactNode;
  relatedLinks?: InternalLink[] | undefined;
}) {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
          <div className="max-w-3xl space-y-10">{children}</div>
          <RelatedNavigation links={relatedLinks} />
        </div>
      </Container>
    </section>
  );
}

export function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border pt-6">
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
