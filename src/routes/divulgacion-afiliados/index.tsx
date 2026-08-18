import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { publicRoutes } from "@/config/routes";
import { createRouteMetadata } from "@/lib/seo";

const routeDefinition = publicRoutes.trust.affiliateDisclosure;

export const Route = createFileRoute("/divulgacion-afiliados/")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: "Divulgación de afiliados | CreditoColombia.co",
      description:
        "Cómo se identifican los enlaces de afiliados y cómo se separan las relaciones comerciales del contenido editorial.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: AffiliateDisclosurePage,
});

function AffiliateDisclosurePage() {
  return (
    <StandardPageLayout
      breadcrumbs={[
        { label: "Inicio", href: publicRoutes.commercial.home.path },
        { label: routeDefinition.label },
      ]}
      eyebrow="Transparencia comercial"
      title="Divulgación de afiliados"
      intro="Algunos enlaces de proveedores y servicios son enlaces de afiliados y pueden generar una compensación para CreditoColombia.co. Esta relación se identifica junto al enlace comercial."
      relatedLinks={[
        { label: "Política editorial", href: publicRoutes.trust.editorialPolicy.path },
        { label: "Metodología", href: publicRoutes.trust.methodology.path },
      ]}
    >
      <ContentSection title="Qué es un enlace de afiliado">
        <p>
          Es un enlace que permite atribuir una visita o acción a este sitio y que puede generar una
          compensación. Los enlaces de este tipo se marcan de forma visible como enlaces
          comerciales.
        </p>
      </ContentSection>
      <ContentSection title="Qué no significa">
        <p>
          Una relación de afiliación no convierte a CreditoColombia.co en prestamista, no garantiza
          la aprobación y no permite decidir las condiciones ofrecidas al usuario.
        </p>
      </ContentSection>
      <ContentSection title="Relación con el contenido editorial">
        <p>
          La existencia o ausencia de una comisión deberá mantenerse separada de la descripción del
          tipo de proveedor, las fuentes utilizadas y los datos que estén o no disponibles.
        </p>
      </ContentSection>
      <ContentSection title="Condiciones finales">
        <p>
          Las condiciones finales del crédito, incluida cualquier aprobación, tasa, costo o plazo,
          las determina y comunica el proveedor o prestamista involucrado.
        </p>
      </ContentSection>
    </StandardPageLayout>
  );
}
