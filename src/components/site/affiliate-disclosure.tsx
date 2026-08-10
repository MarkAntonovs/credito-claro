import { Info } from "lucide-react";

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
          Algunos enlaces son de afiliados. Podemos recibir una comisión si solicitas un producto a
          través de ellos. Esto no aumenta el costo para ti ni condiciona la información que
          publicamos.{" "}
          <a
            href="#metodologia"
            className="font-medium text-foreground underline decoration-accent underline-offset-4"
          >
            Cómo funciona nuestra metodología
          </a>
        </p>
      </div>
    </aside>
  );
}
