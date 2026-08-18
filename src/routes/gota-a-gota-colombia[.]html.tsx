import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const path = "/gota-a-gota-colombia.html";

export const Route = createFileRoute("/gota-a-gota-colombia.html")({
  loader: async () =>
    (await import("@/data/migration/articles/peligros-gota-gota-colombia")).article,
  head: ({ loaderData }) => createMigratedRouteMetadata(loaderData!, path),
  component: Page,
});

function Page() {
  return <MigratedLegacyPage article={Route.useLoaderData()} canonicalPath={path} />;
}
