import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const path = "/prestamos-bajo-monto-colombia.html";

export const Route = createFileRoute("/prestamos-bajo-monto-colombia.html")({
  loader: async () =>
    (await import("@/data/migration/articles/prestamos-pequenos-montos-colombia")).article,
  head: ({ loaderData }) => createMigratedRouteMetadata(loaderData!, path),
  component: Page,
});

function Page() {
  return <MigratedLegacyPage article={Route.useLoaderData()} canonicalPath={path} />;
}
