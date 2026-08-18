import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { publicRoutes } from "@/config/routes";
import { createRouteMetadata } from "@/lib/seo";

const routeDefinition = publicRoutes.trust.methodology;

export const Route = createFileRoute("/metodologia/")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: "Metodología de información y comparación | CreditoColombia.co",
      description:
        "Principios para recopilar, presentar, atribuir y actualizar información de proveedores y productos de crédito.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: MethodologyPage,
});

function MethodologyPage() {
  return (
    <StandardPageLayout
      breadcrumbs={[
        { label: "Inicio", href: publicRoutes.commercial.home.path },
        { label: routeDefinition.label },
      ]}
      eyebrow="Transparencia"
      title="Cómo organizamos y verificamos la información"
      intro="Esta metodología explica cómo documentamos las fichas publicadas, distinguimos el tipo de servicio y mostramos con claridad los datos que no podemos confirmar."
      relatedLinks={[
        { label: "Política editorial", href: publicRoutes.trust.editorialPolicy.path },
        { label: "Divulgación de afiliados", href: publicRoutes.trust.affiliateDisclosure.path },
        { label: "Directorio de proveedores", href: publicRoutes.providers.directory.path },
      ]}
    >
      <ContentSection title="Identificar la función del servicio">
        <p>
          Cada registro indica si corresponde a un proveedor directo, broker, agregador o servicio
          de contacto. Esta clasificación no se deduce únicamente de la apariencia o el lenguaje
          comercial de una página.
        </p>
      </ContentSection>
      <ContentSection title="Vincular afirmaciones con fuentes">
        <p>
          Los campos verificables, como montos, edades, tipo de producto o información regulatoria,
          se asocian con una o más fuentes identificadas cuando existe respaldo suficiente. Una
          fuente general del proveedor no se trata automáticamente como respaldo de todos los
          campos.
        </p>
      </ContentSection>
      <ContentSection title="Mostrar lo que no sabemos">
        <p>
          Cuando una condición no puede confirmarse, se muestra como no disponible o pendiente de
          verificación. No estimamos tasas, plazos, requisitos ni tiempos de respuesta.
        </p>
      </ContentSection>
      <ContentSection title="Revisiones y cambios">
        <p>
          Las fichas muestran cuándo se revisó la información. La frecuencia de nuevas revisiones
          depende del proceso editorial y de la capacidad de confirmar cambios; esta página no
          promete una periodicidad específica.
        </p>
      </ContentSection>
    </StandardPageLayout>
  );
}
