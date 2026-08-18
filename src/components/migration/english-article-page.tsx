import { EnglishContentSection, EnglishPageLayout } from "@/components/layouts/english-page-layout";
import { SourceLink } from "@/components/site/primitives";
import { ArticleAuthor } from "@/components/site/primitives";
import { StructuredData } from "@/components/seo/structured-data";
import { editorialIdentity } from "@/config/editorial";
import { englishRoutes } from "@/config/english-routes";
import {
  ENGLISH_ARTICLE_CONTEXT,
  getEnglishArticleLabel,
  type EnglishArticle,
} from "@/data/migration/english-articles";
import { createArticleStructuredData } from "@/lib/structured-data";

const specialLabels: Record<string, string> = {
  [englishRoutes.home]: "English homepage",
  [englishRoutes.offers]: "Compare documented providers",
  [englishRoutes.onlineLoans]: "Online loans in Colombia",
};

export function EnglishArticlePage({ article }: { article: EnglishArticle }) {
  return (
    <>
      <StructuredData
        data={createArticleStructuredData({
          headline: article.h1,
          description: article.description,
          path: article.path,
          language: "en",
          authorName: editorialIdentity.name,
        })}
      />
      <EnglishPageLayout
        breadcrumbs={[{ label: "Home", href: englishRoutes.home }, { label: article.h1 }]}
        eyebrow={article.classification === "C" ? "Reviewed English adaptation" : "English guide"}
        title={article.h1}
        intro={article.intro}
        meta={
          <ArticleAuthor
            name={editorialIdentity.name}
            role={editorialIdentity.englishRole}
            date={null}
          />
        }
        relatedLinks={article.relatedPaths.map((path) => ({
          href: path,
          label: specialLabels[path] ?? getEnglishArticleLabel(path),
        }))}
      >
        <article className="space-y-10">
          {article.sections.map((section) => (
            <EnglishContentSection key={section.title} title={section.title}>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.bullets ? (
                <ul className="list-disc space-y-2 pl-5">
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </EnglishContentSection>
          ))}
        </article>

        {article.sources.length > 0 ? (
          <EnglishContentSection title="Official sources reused">
            <ul className="space-y-2">
              {article.sources.map((source) => (
                <li key={source.id}>
                  <SourceLink href={source.url}>{source.label}</SourceLink>
                  {source.publisher ? ` — ${source.publisher}` : null}
                </li>
              ))}
            </ul>
          </EnglishContentSection>
        ) : null}

        <EnglishContentSection title="Important context">
          <p>{ENGLISH_ARTICLE_CONTEXT}</p>
        </EnglishContentSection>
      </EnglishPageLayout>
    </>
  );
}
