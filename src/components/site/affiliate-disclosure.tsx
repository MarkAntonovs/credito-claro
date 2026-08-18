import { Info } from "lucide-react";
import { publicRoutes } from "@/config/routes";

export function AffiliateDisclosure({ compact = false }: { compact?: boolean }) {
  return (
    <aside
      aria-label="Divulgación de afiliados"
      className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 rounded-md border border-border-strong bg-card p-4 sm:p-5"
    >
      <Info aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
      <div className="min-w-0">
        {!compact ? <p className="text-sm font-semibold">Divulgación comercial</p> : null}
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          Algunos enlaces son de afiliados. CreditoColombia.co puede recibir una comisión si
          utilizas uno de estos enlaces. Las condiciones finales dependen del proveedor
          correspondiente.{" "}
          <a
            href={publicRoutes.trust.affiliateDisclosure.path}
            className="font-medium text-foreground underline decoration-accent underline-offset-4"
          >
            Consulta la divulgación de afiliados
          </a>
          {" y "}
          <a
            href={publicRoutes.trust.methodology.path}
            className="font-medium text-foreground underline decoration-accent underline-offset-4"
          >
            nuestra metodología
          </a>
          .
        </p>
      </div>
    </aside>
  );
}
