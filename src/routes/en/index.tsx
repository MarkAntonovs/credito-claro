import { createFileRoute } from "@tanstack/react-router";

import { EnglishContentSection, EnglishPageLayout } from "@/components/layouts/english-page-layout";
import { Callout } from "@/components/site/primitives";
import { englishRoutes } from "@/config/english-routes";
import { createRouteMetadata } from "@/lib/seo";

export const Route = createFileRoute("/en/")({
  head: () =>
    createRouteMetadata({
      path: englishRoutes.home,
      title: "Online Credit Information in Colombia | CreditoColombia.co",
      description:
        "Independent English-language information about online credit, provider types, costs, requirements and consumer safety in Colombia.",
    }),
  component: EnglishHomepage,
});

const guideLinks = [
  { label: "Online credit requirements", href: "/en/online-loan-requirements-colombia.html" },
  { label: "Compare interest rates", href: "/en/online-loan-interest-rates.html" },
  { label: "Recognize online credit scams", href: "/en/online-loan-scams-colombia.html" },
  { label: "Check your credit history", href: "/en/check-credit-history-free.html" },
] as const;

function EnglishHomepage() {
  return (
    <EnglishPageLayout
      breadcrumbs={[{ label: "English home" }]}
      eyebrow="Independent information"
      title="Understand credit products and services available in Colombia"
      intro="CreditoColombia.co explains how online credit works, how direct providers differ from intermediaries, and which conditions English-speaking users should confirm before accepting an offer."
      relatedLinks={[...guideLinks]}
    >
      <Callout variant="accent" title="We do not issue or approve loans">
        CreditoColombia.co is an independent comparison and information website. Any eligibility
        decision and final credit conditions come from the provider or lender involved.
      </Callout>

      <EnglishContentSection title="Start with the two core English resources">
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href={englishRoutes.offers}
            className="rounded-lg border border-border-strong bg-card p-5 transition-colors hover:border-primary"
          >
            <strong className="block text-foreground">Compare documented providers</strong>
            <span className="mt-2 block text-sm">
              Review direct providers and intermediary services using the same verified factual
              dataset as the Spanish site, without English commercial CTAs.
            </span>
          </a>
          <a
            href={englishRoutes.onlineLoans}
            className="rounded-lg border border-border-strong bg-card p-5 transition-colors hover:border-primary"
          >
            <strong className="block text-foreground">How online credit works</strong>
            <span className="mt-2 block text-sm">
              Understand applications, provider roles, eligibility, rates, costs, terms and final
              contracts.
            </span>
          </a>
        </div>
      </EnglishContentSection>

      <EnglishContentSection title="Research before sharing information">
        <p>
          A website may be a direct credit provider, a broker, an aggregator or a service that sends
          applications to third parties. Identify its role, legal operator and data practices before
          entering personal information. A quick form is not proof of approval or immediate funding.
        </p>
        <p>
          Compare the final written amount, rate period, payment schedule, term and every mandatory
          cost. If a condition is unavailable, obtain it from the provider involved rather than
          filling the gap with an assumption.
        </p>
      </EnglishContentSection>

      <EnglishContentSection title="Commercial transparency">
        <p>
          Some outbound links on CreditoColombia.co may be affiliate links, and the site may receive
          compensation. Those relationships are disclosed where commercial links are used. No real
          provider commercial or affiliate CTA is enabled on this English homepage in this pass.
        </p>
      </EnglishContentSection>
    </EnglishPageLayout>
  );
}
