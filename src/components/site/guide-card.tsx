export interface Guide {
  kicker: string;
  title: string;
  excerpt: string;
  readTime: string;
  href?: string;
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="border-t border-border-strong pt-5">
      <p className="eyebrow text-muted-foreground">{guide.kicker}</p>
      <h3 className="mt-2 text-lg leading-snug">
        {guide.href ? (
          <a className="underline decoration-border-strong underline-offset-4" href={guide.href}>
            {guide.title}
          </a>
        ) : (
          guide.title
        )}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{guide.excerpt}</p>
      <p className="mt-3 text-xs text-muted-foreground num">{guide.readTime}</p>
      {!guide.href ? (
        <p className="mt-2 text-xs text-muted-foreground">Contenido planificado</p>
      ) : null}
    </article>
  );
}
