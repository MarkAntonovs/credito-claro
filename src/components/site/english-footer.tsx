import { englishRoutes } from "@/config/english-routes";
import { siteConfig } from "@/config/site";
import { Container } from "./section";

const groups = [
  {
    title: "Credit information",
    links: [
      { label: "Online loans in Colombia", href: englishRoutes.onlineLoans },
      { label: "Compare providers", href: englishRoutes.offers },
      { label: "Interest rates", href: "/en/online-loan-interest-rates.html" },
    ],
  },
  {
    title: "Safety",
    links: [
      { label: "Avoid loan scams", href: "/en/online-loan-scams-colombia.html" },
      { label: "Verify a company", href: "/en/verify-legitimate-loan-company.html" },
      { label: "Consumer rights", href: "/en/financial-consumer-rights-colombia.html" },
    ],
  },
  {
    title: "Site",
    links: [
      { label: "Contact", href: englishRoutes.contact },
      { label: "Privacy", href: englishRoutes.privacy },
      { label: "Terms", href: englishRoutes.terms },
      { label: "HTML sitemap", href: englishRoutes.sitemap },
    ],
  },
] as const;

export function EnglishFooter() {
  return (
    <footer className="border-t border-border bg-surface text-surface-foreground">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-[minmax(0,1.2fr)_minmax(0,2fr)]">
          <div className="max-w-sm">
            <p className="font-display text-lg tracking-tight">
              {siteConfig.siteName.replace(/\.co$/, "")}
              <span className="text-accent">.co</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Independent information and comparison website covering credit products and services
              available in Colombia.
            </p>
          </div>
          <nav aria-label="Footer navigation" className="grid gap-8 sm:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="eyebrow text-muted-foreground">{group.title}</h2>
                <ul className="mt-3 space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm transition-colors hover:text-accent-soft-foreground"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="border-t border-border py-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            {siteConfig.siteName} is not a financial institution. It does not issue credit or
            approve applications. Final conditions must be confirmed with the provider involved.
            Some outbound links may be affiliate links and will be identified when used.
          </p>
          <p className="mt-3">
            © {new Date().getFullYear()} {siteConfig.siteName}
          </p>
        </div>
      </Container>
    </footer>
  );
}
