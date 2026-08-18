import { createFileRoute } from "@tanstack/react-router";
import { EnglishUtilityPage } from "@/components/migration/english-utility-page";
import { englishRoutes } from "@/config/english-routes";
import { createRouteMetadata } from "@/lib/seo";

export const Route = createFileRoute("/en/terms.html")({
  head: () =>
    createRouteMetadata({
      path: englishRoutes.terms,
      title: "Terms of Use | CreditoColombia.co",
      description:
        "Terms governing use of the informational English section of CreditoColombia.co.",
      robotsIntent: "noindex",
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <EnglishUtilityPage
      eyebrow="Legal"
      title="Terms of Use"
      intro="The English section provides general educational and comparison information about credit products and services connected with Colombia."
      sections={[
        {
          title: "Informational role",
          paragraphs: [
            "CreditoColombia.co is not a financial institution, lender or credit broker acting on a user’s application. It does not approve requests, set provider conditions or guarantee that a product is available or suitable. Final information must be confirmed with the provider involved.",
          ],
        },
        {
          title: "No personal financial advice",
          paragraphs: [
            "Content is general information and does not replace legal, financial or professional advice for an individual situation. Users remain responsible for reading the final contract, checking affordability and protecting account and identity credentials.",
          ],
        },
        {
          title: "Sources and external services",
          paragraphs: [
            "Official-source links are provided for verification and may change outside this site’s control. Some site areas may later contain clearly disclosed affiliate links, but no provider commercial CTA is enabled on the migrated English pages in this pass.",
          ],
        },
        {
          title: "Development limitation",
          paragraphs: [
            "Owner-specific legal details and governing provisions must be reviewed before the rebuild is indexed or deployed as the replacement production site. This route preserves the legacy URL while avoiding unsupported identity or address claims.",
          ],
        },
      ]}
    />
  );
}
