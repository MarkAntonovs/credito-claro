import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  tone = "paper",
  id,
  labelledBy,
}: {
  children: ReactNode;
  className?: string;
  tone?: "paper" | "surface" | "ink";
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={cn(
        "border-t border-border py-14 sm:py-20",
        tone === "surface" && "bg-surface text-surface-foreground",
        tone === "ink" && "bg-primary text-primary-foreground border-primary",
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  level = 2,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  id?: string;
  level?: 2 | 3;
  className?: string;
}) {
  const Tag = level === 2 ? "h2" : "h3";
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <p className="eyebrow text-accent-soft-foreground">{eyebrow}</p> : null}
      <Tag
        id={id}
        className={cn(
          "mt-2 text-balance",
          level === 2 ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
        )}
      >
        {title}
      </Tag>
      {description ? (
        <p className="mt-3 text-[0.975rem] leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}
