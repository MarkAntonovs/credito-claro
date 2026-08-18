import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/tasa-de-usura-colombia.html",
  title: "Tasa de usura en Colombia: qué es y cómo consultarla",
  description:
    "Tasa de usura en Colombia: entiende el IBC, la modalidad aplicable y el cálculo de referencia con el ejemplo oficial de agosto de 2026.",
} as const;

export const Route = createFileRoute("/tasa-de-usura-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () => (await import("@/data/migration/articles/tasa-de-usura-colombia")).article,
  component: TasaDeUsuraColombiaPage,
});

function TasaDeUsuraColombiaPage() {
  const article = Route.useLoaderData();
  return (
    <MigratedLegacyPage
      article={article}
      description={metadata.description}
      afterContent={
        <p className="border-t border-border pt-6 text-[0.975rem] leading-relaxed text-muted-foreground">
          Para comparar la tasa particular de una oferta y sus demás cargos, vuelve a la guía de{" "}
          <a
            href="/tasas-interes-creditos-colombia.html"
            className="font-medium text-foreground underline decoration-accent underline-offset-4"
          >
            tasas de interés y costo total
          </a>
          . La referencia oficial no sustituye esa comparación.
        </p>
      }
    />
  );
}
