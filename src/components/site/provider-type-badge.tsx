import type { ProviderType } from "@/types/provider";
import { cn } from "@/lib/utils";

const LABELS: Record<ProviderType, string> = {
  direct_credit_provider: "Proveedor directo",
  credit_service: "Servicio de crédito",
  broker: "Intermediario",
  aggregator: "Servicio de comparación",
  lead_generator: "Servicio de contacto",
};

export function ProviderTypeBadge({ type, className }: { type: ProviderType; className?: string }) {
  const isDirect = type === "direct_credit_provider";
  const isNeutral = type === "credit_service";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em]",
        isDirect
          ? "border-accent-soft-foreground/25 bg-accent-soft text-accent-soft-foreground"
          : isNeutral
            ? "border-border-strong bg-surface text-foreground"
            : "border-notice-border bg-notice text-notice-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          isDirect ? "bg-accent" : isNeutral ? "bg-muted-foreground" : "bg-notice-foreground",
        )}
      />
      {LABELS[type]}
    </span>
  );
}
