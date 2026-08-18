import { AffiliateDisclosure } from "@/components/site/affiliate-disclosure";
import { Callout } from "@/components/site/primitives";

export function ProductComparisonCta({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section className="border-t border-border pt-6">
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-4">
        <Callout variant="accent" title="Confirma el producto exacto antes de solicitar">
          {description} La página de comparación organiza proveedores y servicios documentados, pero
          no afirma que todos ofrezcan esta modalidad.
        </Callout>
        <AffiliateDisclosure compact />
        <a
          href="/ofertas-creditos.html"
          className="inline-flex min-h-11 items-center rounded-md border border-primary px-4 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Comparar proveedores documentados
        </a>
      </div>
    </section>
  );
}
