import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const path = "/estudio-de-credito-colombia.html";

export const Route = createFileRoute("/estudio-de-credito-colombia.html")({
  loader: async () => (await import("@/data/migration/articles/que-es-estudio-de-credito")).article,
  head: ({ loaderData }) => createMigratedRouteMetadata(loaderData!, path),
  component: Page,
});

function Page() {
  return <MigratedLegacyPage article={Route.useLoaderData()} canonicalPath={path} />;
}
