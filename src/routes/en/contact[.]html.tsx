import { createFileRoute } from "@tanstack/react-router";
import { EnglishUtilityPage } from "@/components/migration/english-utility-page";
import { englishRoutes } from "@/config/english-routes";
import { createRouteMetadata } from "@/lib/seo";

export const Route = createFileRoute("/en/contact.html")({
  head: () =>
    createRouteMetadata({
      path: englishRoutes.contact,
      title: "Contact | CreditoColombia.co",
      description:
        "Contact information and scope for the CreditoColombia.co English information section.",
      robotsIntent: "noindex",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <EnglishUtilityPage
      eyebrow="Contact"
      title="Contact"
      intro="CreditoColombia.co is an independent information website. It cannot access, approve or manage an application made with a provider."
      sections={[
        {
          title: "What we can address",
          paragraphs: [
            "You may contact the site team about corrections, accessibility, editorial feedback or questions concerning content published on this website. Owner and direct contact details are still being finalized for production and are therefore not invented on this development build.",
          ],
        },
        {
          title: "Provider and account questions",
          paragraphs: [
            "For an application, payment, account, contract or personal-data request submitted to a provider, use that company’s verified official support channel. Do not send identity documents, passwords, payment credentials or sensitive financial information to this informational website.",
          ],
        },
        {
          title: "Development status",
          paragraphs: [
            "This rebuilt site remains globally noindex and is not deployed as the replacement production site. Production-ready owner and contact disclosures must be completed before indexing is enabled.",
          ],
        },
      ]}
    />
  );
}
