import { createFileRoute } from "@tanstack/react-router";
import { EnglishUtilityPage } from "@/components/migration/english-utility-page";
import { englishRoutes } from "@/config/english-routes";
import { createRouteMetadata } from "@/lib/seo";

export const Route = createFileRoute("/en/privacy-policy.html")({
  head: () =>
    createRouteMetadata({
      path: englishRoutes.privacy,
      title: "Privacy Policy | CreditoColombia.co",
      description:
        "Development-safe privacy information for the CreditoColombia.co English section.",
      robotsIntent: "noindex",
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <EnglishUtilityPage
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This conservative development notice describes the present rebuild without inventing an owner, address or data-controller identity that has not yet been supplied."
      sections={[
        {
          title: "Current site behavior",
          paragraphs: [
            "The current rebuild does not add analytics, advertising pixels, affiliate callbacks, application forms or custom tracking cookies. Ordinary hosting and security infrastructure may process technical request information when the site is eventually deployed, but the final production details are not established in this repository pass.",
          ],
        },
        {
          title: "External websites",
          paragraphs: [
            "Links to official sources or other websites leave CreditoColombia.co and are governed by the destination’s own privacy practices. Do not submit provider application data to this site. Review the receiving company and its privacy information before sharing personal information.",
          ],
        },
        {
          title: "Production information still required",
          paragraphs: [
            "Before production indexing, this notice must be completed with the responsible owner or controller, valid contact channel, applicable processing purposes, retention and user-rights procedure. This temporary wording is not a substitute for that review.",
          ],
        },
      ]}
    />
  );
}
