import { createFileRoute } from "@tanstack/react-router";

import { EnglishContentSection, EnglishPageLayout } from "@/components/layouts/english-page-layout";
import { EnglishProviderCard } from "@/components/site/english-provider-card";
import { Callout } from "@/components/site/primitives";
import { englishRoutes } from "@/config/english-routes";
import { PROVIDERS_ALPHABETICAL } from "@/data/providers/providers";
import { createRouteMetadata } from "@/lib/seo";
import { isIntermediaryProvider } from "@/lib/provider-display";

export const Route = createFileRoute("/en/loan-offers.html")({
  head: () =>
    createRouteMetadata({
      path: englishRoutes.offers,
      title: "Compare Credit Providers and Services in Colombia | CreditoColombia.co",
      description:
        "Compare documented direct credit providers, brokers and aggregators in Colombia using sourced factual profiles without guaranteed approval claims.",
    }),
  component: EnglishOffersPage,
});

function EnglishOffersPage() {
  const direct = PROVIDERS_ALPHABETICAL.filter(
    (provider) => provider.providerType === "direct_credit_provider",
  );
  const intermediaries = PROVIDERS_ALPHABETICAL.filter((provider) =>
    isIntermediaryProvider(provider),
  );
  const unclassifiedServices = PROVIDERS_ALPHABETICAL.filter(
    (provider) => provider.providerType === "credit_service",
  );

  return (
    <EnglishPageLayout
      breadcrumbs={[{ label: "Home", href: englishRoutes.home }, { label: "Compare providers" }]}
      eyebrow="Provider comparison"
      title="Compare documented credit providers and services"
      intro="This page organizes the same verified provider facts used by the Spanish site. It distinguishes companies offering credit directly from services that compare, broker or transmit applications."
      relatedLinks={[
        { label: "How online credit works", href: englishRoutes.onlineLoans },
        { label: "Compare interest rates", href: "/en/online-loan-interest-rates.html" },
        { label: "Verify a credit company", href: "/en/verify-legitimate-loan-company.html" },
      ]}
    >
      <Callout variant="accent" title="Information, not an approval service">
        CreditoColombia.co does not issue credit, evaluate applications or guarantee that a product
        is available to a particular user. No affiliate or commercial outbound CTA is enabled on
        this English route.
      </Callout>

      <EnglishContentSection title="How to read this comparison">
        <p>
          A direct provider offers the credit product and makes the lending decision under its own
          conditions. A broker, aggregator or lead-generation service can organize options or pass
          information to third parties, but it is not necessarily the company that lends money.
        </p>
        <p>
          Missing fields are displayed as “Not available.” They are not inferred from another
          product, advertisement or affiliate destination. The cards are arranged alphabetically by
          provider name, not by commercial relationship, recommendation or expected approval.
        </p>
      </EnglishContentSection>

      <EnglishContentSection title="Direct credit providers">
        <div className="grid gap-5 lg:grid-cols-2">
          {direct.map((provider) => (
            <EnglishProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </EnglishContentSection>

      <EnglishContentSection title="Brokers, aggregators and intermediary services">
        <div className="grid gap-5 lg:grid-cols-2">
          {intermediaries.map((provider) => (
            <EnglishProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </EnglishContentSection>

      <EnglishContentSection title="Credit services with an unconfirmed role">
        <div className="grid gap-5 lg:grid-cols-2">
          {unclassifiedServices.map((provider) => (
            <EnglishProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </EnglishContentSection>

      <EnglishContentSection title="What still requires confirmation">
        <p>
          Before accepting any offer, confirm the legal contracting entity, eligibility criteria,
          amount, rate period, term, payment dates, mandatory charges, data permissions and
          complaint channels. A comparison card cannot replace the provider’s final contract.
        </p>
        <p>
          Provider records can be reviewed independently of monetization. The absence of an English
          commercial link does not express a view about legitimacy or quality; it is a deliberate
          SEO-first limitation for this migration pass.
        </p>
      </EnglishContentSection>
    </EnglishPageLayout>
  );
}
