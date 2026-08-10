import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Small inline elements used across pages: unknown values, source links,
 * review dates, and short contextual notices.
 */

export function UnknownValue() {
  return <span className="text-muted-foreground italic">No disponible</span>;
}

export function DataValue({ value, className }: { value: string | null; className?: string }) {
  if (!value) return <UnknownValue />;
  return <span className={cn("num", className)}>{value}</span>;
}

export function LastReviewed({ date, className }: { date: string | null; className?: string }) {
  return (
    <p className={cn("text-xs text-muted-foreground", className)}>
      Información verificada:{" "}
      {date ? (
        <time dateTime={date} className="num">
          {date}
        </time>
      ) : (
        <UnknownValue />
      )}
    </p>
  );
}

export function SourceLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="underline decoration-border-strong underline-offset-4 transition-colors hover:decoration-accent hover:text-accent-soft-foreground"
    >
      {children}
    </a>
  );
}

export function TrustNotice({
  title,
  children,
  className,
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-md border border-border-strong bg-card px-4 py-3.5 sm:px-5",
        className,
      )}
    >
      {title ? <p className="text-sm font-semibold">{title}</p> : null}
      <div className={cn("text-sm leading-relaxed text-muted-foreground", title && "mt-1")}>
        {children}
      </div>
    </div>
  );
}

export function Callout({
  variant = "neutral",
  title,
  children,
}: {
  variant?: "neutral" | "notice" | "accent";
  title?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-md border-l-2 py-4 pl-4 pr-4 sm:pl-5",
        variant === "neutral" && "border-l-border-strong bg-surface",
        variant === "notice" && "border-l-notice-border bg-notice",
        variant === "accent" && "border-l-accent bg-accent-soft",
      )}
    >
      {title ? (
        <p
          className={cn(
            "text-sm font-semibold",
            variant === "notice" && "text-notice-foreground",
            variant === "accent" && "text-accent-soft-foreground",
          )}
        >
          {title}
        </p>
      ) : null}
      <div
        className={cn(
          "text-sm leading-relaxed",
          title && "mt-1.5",
          variant === "notice" ? "text-notice-foreground" : "text-muted-foreground",
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function ArticleAuthor({
  name,
  role,
  date,
}: {
  name: string;
  role: string;
  date: string | null;
}) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <span
        aria-hidden="true"
        className="grid size-9 shrink-0 place-items-center rounded-full bg-surface text-xs font-semibold"
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
      <span className="min-w-0">
        <span className="block truncate font-medium">{name}</span>
        <span className="block truncate text-xs text-muted-foreground">
          {role}
          {date ? ` · ${date}` : ""}
        </span>
      </span>
    </div>
  );
}
