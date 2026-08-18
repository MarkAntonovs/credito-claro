import { ChevronRight } from "lucide-react";
import { useRouterState } from "@tanstack/react-router";

import { StructuredData } from "@/components/seo/structured-data";
import { createBreadcrumbListStructuredData } from "@/lib/structured-data";

export interface Crumb {
  label: string;
  href?: string;
}

export function Breadcrumbs({
  items,
  ariaLabel = "Ruta de navegación",
}: {
  items: Crumb[];
  ariaLabel?: string;
}) {
  const currentPath = useRouterState({ select: (state) => state.location.pathname });

  return (
    <>
      <StructuredData data={createBreadcrumbListStructuredData(items, currentPath)} />
      <nav aria-label={ariaLabel}>
        <ol className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground">
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1.5">
              {item.href ? (
                <a href={item.href} className="transition-colors hover:text-foreground">
                  {item.label}
                </a>
              ) : (
                <span aria-current="page" className="text-foreground">
                  {item.label}
                </span>
              )}
              {i < items.length - 1 ? (
                <ChevronRight aria-hidden="true" className="size-3.5" />
              ) : null}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
