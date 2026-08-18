export interface FaqItem {
  question: string;
  answer: string;
}

export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="divide-y divide-border border-y border-border-strong">
      {items.map((item) => (
        <details key={item.question} className="group py-4">
          <summary className="cursor-pointer list-none text-[0.975rem] font-medium marker:hidden">
            <span className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
              <span className="min-w-0">{item.question}</span>
              <span
                aria-hidden="true"
                className="shrink-0 text-muted-foreground group-open:rotate-45 transition-transform"
              >
                +
              </span>
            </span>
          </summary>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
