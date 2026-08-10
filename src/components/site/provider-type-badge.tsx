import { cn } from "@/lib/utils";
import type { ProviderType } from "@/data/sample-providers";

const LABELS: Record<ProviderType, string> = {
  directo: "Proveedor directo",
  comparacion: "Servicio de comparación",
};

export function ProviderTypeBadge({
  type,
  className,
}: {
  type: ProviderType;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 text-[0.6875rem] font-semibold uppercase tracking-[0.08em]",
        type === "directo"
          ? "border-accent-soft-foreground/25 bg-accent-soft text-accent-soft-foreground"
          : "border-notice-border bg-notice text-notice-foreground",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          type === "directo" ? "bg-accent" : "bg-notice-foreground",
        )}
      />
      {LABELS[type]}
    </span>
  );
}
