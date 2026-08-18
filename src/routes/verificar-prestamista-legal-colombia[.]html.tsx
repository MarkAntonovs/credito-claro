import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const path = "/verificar-prestamista-legal-colombia.html";

export const Route = createFileRoute("/verificar-prestamista-legal-colombia.html")({
  loader: async () =>
    (await import("@/data/migration/articles/verificar-empresa-prestamos-legitima")).article,
  head: ({ loaderData }) => createMigratedRouteMetadata(loaderData!, path),
  component: Page,
});

function Page() {
  return <MigratedLegacyPage article={Route.useLoaderData()} canonicalPath={path} />;
}
