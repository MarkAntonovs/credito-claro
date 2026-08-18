import { ExternalLink } from "lucide-react";

import { getVerifiedAffiliateLink } from "@/data/providers/affiliate-links";
import { cn } from "@/lib/utils";
import type { Provider } from "@/types/provider";

export function CommercialOutboundLink({
  provider,
  showUnavailable = false,
  className,
}: {
  provider: Pick<Provider, "slug" | "name" | "providerType">;
  showUnavailable?: boolean;
  className?: string;
}) {
  const link = getVerifiedAffiliateLink(provider.slug);

  if (!link) {
    return showUnavailable ? (
      <p className={cn("text-sm text-muted-foreground", className)}>
        Enlace comercial no disponible actualmente. Las fuentes oficiales siguen disponibles en esta
        ficha.
      </p>
    ) : null;
  }

  const label =
    provider.providerType === "direct_credit_provider"
      ? "Ver oferta"
      : provider.providerType === "credit_service"
        ? "Ver condiciones"
        : "Comparar opciones";

  return (
    <a
      href={link.affiliateUrl}
      target="_blank"
      rel="sponsored nofollow noopener"
      aria-label={`${label}: ${provider.name}. Abre en una pestaña nueva.`}
      className={cn(
        "inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-md bg-primary px-4 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className,
      )}
    >
      <span>{label}</span>
      <ExternalLink aria-hidden="true" className="size-4 shrink-0" />
    </a>
  );
}
