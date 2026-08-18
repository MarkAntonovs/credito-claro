import { ArrowRight } from "lucide-react";

export interface Category {
  title: string;
  situation: string;
  description: string;
  href?: string;
}

export function CategoryNavigation({ categories }: { categories: Category[] }) {
  return (
    <ul className="mt-8 border-t border-border-strong">
      {categories.map((cat) => {
        const content = (
          <>
            <div className="min-w-0">
              <h3 className="text-xl leading-tight">{cat.title}</h3>
              <p className="eyebrow mt-1 text-accent-soft-foreground">{cat.situation}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{cat.description}</p>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium">
              {cat.href ? "Ver información" : "Contenido planificado"}
              {cat.href ? (
                <ArrowRight
                  aria-hidden="true"
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              ) : null}
            </span>
          </>
        );

        return (
          <li key={cat.title}>
            {cat.href ? (
              <a
                href={cat.href}
                className="group grid gap-2 border-b border-border py-6 transition-colors hover:bg-card md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] md:items-baseline md:gap-8 md:px-2"
              >
                {content}
              </a>
            ) : (
              <div className="grid gap-2 border-b border-border py-6 text-muted-foreground md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] md:items-baseline md:gap-8 md:px-2">
                {content}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
