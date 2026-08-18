import { createFileRoute } from "@tanstack/react-router";
import { EnglishContentSection, EnglishPageLayout } from "@/components/layouts/english-page-layout";
import { englishRoutes } from "@/config/english-routes";
import { ENGLISH_ARTICLES } from "@/data/migration/english-articles";
import { createRouteMetadata } from "@/lib/seo";

export const Route = createFileRoute("/en/sitemap.html")({
  head: () =>
    createRouteMetadata({
      path: englishRoutes.sitemap,
      title: "English HTML Sitemap | CreditoColombia.co",
      description: "Navigation to every currently implemented English page on CreditoColombia.co.",
    }),
  component: EnglishSitemapPage,
});

function EnglishSitemapPage() {
  return (
    <EnglishPageLayout
      breadcrumbs={[{ label: "Home", href: englishRoutes.home }, { label: "HTML sitemap" }]}
      eyebrow="English navigation"
      title="English HTML sitemap"
      intro="This is a human-readable navigation page for implemented English routes. It is not an XML sitemap and does not enable indexing."
    >
      <EnglishContentSection title="Core English pages">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <a className="underline" href={englishRoutes.home}>
              English homepage
            </a>
          </li>
          <li>
            <a className="underline" href={englishRoutes.offers}>
              Compare documented providers
            </a>
          </li>
          <li>
            <a className="underline" href={englishRoutes.onlineLoans}>
              Online loans in Colombia
            </a>
          </li>
        </ul>
      </EnglishContentSection>
      <EnglishContentSection title="Guides">
        <ul className="grid gap-2 sm:grid-cols-2">
          {ENGLISH_ARTICLES.filter((article) => article.path !== englishRoutes.onlineLoans).map(
            (article) => (
              <li key={article.path}>
                <a className="underline" href={article.path}>
                  {article.h1}
                </a>
              </li>
            ),
          )}
        </ul>
      </EnglishContentSection>
      <EnglishContentSection title="Legal and utility pages">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <a className="underline" href={englishRoutes.contact}>
              Contact
            </a>
          </li>
          <li>
            <a className="underline" href={englishRoutes.privacy}>
              Privacy policy
            </a>
          </li>
          <li>
            <a className="underline" href={englishRoutes.terms}>
              Terms of use
            </a>
          </li>
          <li aria-current="page">English HTML sitemap (this page)</li>
        </ul>
      </EnglishContentSection>
    </EnglishPageLayout>
  );
}
