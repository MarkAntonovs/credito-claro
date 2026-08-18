import { createFileRoute, notFound } from "@tanstack/react-router";

import { publicRoutes } from "@/config/routes";
import { getProviderProfileContent } from "@/data/providers/profile-content";
import { getProviderBySlug } from "@/data/providers/providers";
import { createRouteMetadata } from "@/lib/seo";
import { ProviderProfileContentPage } from "@/routes/proveedores/$slug/index";
import { StructuredData } from "@/components/seo/structured-data";
import { siteConfig } from "@/config/site";
import { createWebPageStructuredData } from "@/lib/structured-data";
import { getFinalSeoRoute } from "@/data/seo/routes";

export const Route = createFileRoute("/prestamistas/$slug/")({
  loader: ({ params }) => {
    const provider = getProviderBySlug(params.slug);
    const path = `/prestamistas/${params.slug}/`;
    if (!provider || !getFinalSeoRoute(path)) throw notFound();
    return provider;
  },
  head: ({ loaderData }) => {
    const provider = loaderData;
    if (!provider) {
      return createRouteMetadata({
        path: publicRoutes.providers.directory.path,
        title: "Perfil de prestamista | CreditoColombia.co",
        robotsIntent: "noindex",
      });
    }
    const path = `/prestamistas/${provider.slug}/`;
    const content = getProviderProfileContent(provider.slug);
    if (!content) return {};
    return createRouteMetadata({
      path,
      title: `${provider.name} en Colombia: información verificada`,
      description: content.metaDescription,
      robotsIntent: publicRoutes.providers.profile.futureIndexability,
    });
  },
  component: Page,
});

function Page() {
  const provider = Route.useLoaderData();
  const path = `/prestamistas/${provider.slug}/`;
  const content = getProviderProfileContent(provider.slug);
  if (!content) throw new Error(`Missing profile content for ${provider.slug}`);
  return (
    <>
      <StructuredData
        data={createWebPageStructuredData({
          name: `${provider.name} en Colombia`,
          description: content.metaDescription,
          path,
          siteName: siteConfig.siteName,
        })}
      />
      <ProviderProfileContentPage provider={provider} />
    </>
  );
}
