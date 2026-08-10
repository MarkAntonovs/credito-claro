export interface Guide {
  kicker: string;
  title: string;
  excerpt: string;
  readTime: string;
}

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="border-t border-border-strong pt-5">
      <p className="eyebrow text-muted-foreground">{guide.kicker}</p>
      <h3 className="mt-2 text-lg leading-snug">
        <a href="#guias" className="transition-colors hover:text-accent-soft-foreground">
          {guide.title}
        </a>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{guide.excerpt}</p>
      <p className="mt-3 text-xs text-muted-foreground num">{guide.readTime}</p>
    </article>
  );
}
