import type { ReactNode } from "react";

import { Breadcrumbs, type Crumb } from "@/components/site/breadcrumbs";
import { EnglishFooter } from "@/components/site/english-footer";
import { EnglishHeader } from "@/components/site/english-header";
import { Container } from "@/components/site/section";
import type { InternalLink } from "./page-shell";

export function EnglishPageLayout({
  breadcrumbs,
  eyebrow,
  title,
  intro,
  meta,
  relatedLinks = [],
  children,
}: {
  breadcrumbs: Crumb[];
  eyebrow?: string;
  title: string;
  intro: string;
  meta?: ReactNode;
  relatedLinks?: InternalLink[];
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <EnglishHeader />
      <main id="contenido-principal">
        <section className="border-b border-border">
          <Container>
            <div className="max-w-3xl py-10 sm:py-14">
              <Breadcrumbs items={breadcrumbs} ariaLabel="Breadcrumb" />
              {eyebrow ? (
                <p className="eyebrow mt-7 text-accent-soft-foreground">{eyebrow}</p>
              ) : null}
              <h1 className="mt-3 text-balance text-3xl leading-[1.1] sm:text-4xl">{title}</h1>
              <p className="mt-5 max-w-2xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                {intro}
              </p>
              {meta ? <div className="mt-5">{meta}</div> : null}
            </div>
          </Container>
        </section>
        <section className="py-12 sm:py-16">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
              <div className="max-w-3xl space-y-10">{children}</div>
              {relatedLinks.length > 0 ? (
                <nav
                  aria-label="Related English guides"
                  className="border-t border-border-strong pt-5 lg:border-t-0 lg:pt-0"
                >
                  <h2 className="eyebrow text-muted-foreground">Related guides</h2>
                  <ul className="mt-3 space-y-3">
                    {relatedLinks.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className="text-sm font-medium underline decoration-border-strong underline-offset-4 transition-colors hover:text-accent-soft-foreground hover:decoration-accent"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : null}
            </div>
          </Container>
        </section>
      </main>
      <EnglishFooter />
    </div>
  );
}

export function EnglishContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-border pt-6">
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-4 text-[0.975rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  );
}
