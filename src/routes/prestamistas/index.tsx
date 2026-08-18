import { createFileRoute } from "@tanstack/react-router";

import { publicRoutes } from "@/config/routes";
import { createRouteMetadata } from "@/lib/seo";
import { ProviderDirectoryPage } from "@/routes/proveedores/index";
import { StructuredData } from "@/components/seo/structured-data";
import { siteConfig } from "@/config/site";
import { createWebPageStructuredData } from "@/lib/structured-data";

const routeDefinition = publicRoutes.providers.directory;

export const Route = createFileRoute("/prestamistas/")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: "Directorio de prestamistas y servicios | CreditoColombia.co",
      description:
        "Directorio de prestamistas directos y servicios de intermediación con datos verificados, fuentes oficiales y fecha de revisión.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <StructuredData
        data={createWebPageStructuredData({
          name: "Directorio de prestamistas y servicios",
          description:
            "Directorio de prestamistas directos y servicios de intermediación con datos verificados, fuentes oficiales y fecha de revisión.",
          path: routeDefinition.path,
          siteName: siteConfig.siteName,
        })}
      />
      <ProviderDirectoryPage />
    </>
  );
}
