import { createFileRoute, notFound } from "@tanstack/react-router";

import { EnglishArticlePage } from "@/components/migration/english-article-page";
import { getEnglishArticle } from "@/data/migration/english-articles";
import { createRouteMetadata } from "@/lib/seo";

export const Route = createFileRoute("/en/$slug")({
  loader: ({ params }) => {
    const article = getEnglishArticle(params.slug);
    if (!article) throw notFound();
    return article;
  },
  head: ({ loaderData }) =>
    loaderData
      ? createRouteMetadata({
          path: loaderData.path,
          title: `${loaderData.title} | CreditoColombia.co`,
          description: loaderData.description,
          openGraphType: "article",
        })
      : createRouteMetadata({
          path: "/en/",
          title: "Page not found | CreditoColombia.co",
          description: "The requested English page could not be found.",
          robotsIntent: "noindex",
        }),
  component: EnglishArticleRoute,
});

function EnglishArticleRoute() {
  return <EnglishArticlePage article={Route.useLoaderData()} />;
}
