import type { MigratedLegacyArticle } from "@/data/migration/types";
import { createRouteMetadata } from "@/lib/seo";

export function createMigratedRouteMetadata(
  article: Pick<MigratedLegacyArticle, "path" | "title" | "description">,
  canonicalPath = article.path,
) {
  return createRouteMetadata({
    path: canonicalPath,
    title: article.title,
    description: article.description,
    robotsIntent: "index",
    openGraphType: "article",
  });
}
