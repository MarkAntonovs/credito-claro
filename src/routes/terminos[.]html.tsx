import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { Callout } from "@/components/site/primitives";
import { publicRoutes } from "@/config/routes";
import { createRouteMetadata } from "@/lib/seo";

const routeDefinition = publicRoutes.legal.terms;

export const Route = createFileRoute("/terminos.html")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: "Términos de uso | CreditoColombia.co",
      description:
        "Primera versión de los principios de uso y limitaciones del sitio informativo CreditoColombia.co.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <StandardPageLayout
      breadcrumbs={[
        { label: "Inicio", href: publicRoutes.commercial.home.path },
        { label: routeDefinition.label },
      ]}
      eyebrow="Legal"
      title="Términos de uso"
      intro="Estos términos describen de forma preliminar la función informativa del sitio. Requieren revisión y datos del responsable antes del lanzamiento público."
      relatedLinks={[
        { label: "Política de privacidad", href: publicRoutes.legal.privacy.path },
        { label: "Sobre nosotros", href: publicRoutes.trust.about.path },
      ]}
    >
      <Callout variant="notice" title="Documento en preparación">
        TODO antes de producción: completar la identificación del responsable y revisar el texto
        legal conforme a las funciones efectivamente publicadas.
      </Callout>
      <ContentSection title="Finalidad informativa">
        <p>
          CreditoColombia.co organiza información general y herramientas de comparación. No es una
          entidad financiera, no concede créditos y no decide sobre solicitudes.
        </p>
      </ContentSection>
      <ContentSection title="Confirmación con el proveedor">
        <p>
          La información financiera puede cambiar. Las condiciones, requisitos y decisiones
          aplicables deben confirmarse directamente con el proveedor antes de asumir un compromiso.
        </p>
      </ContentSection>
      <ContentSection title="Enlaces y servicios de terceros">
        <p>
          Los futuros enlaces externos dirigirán a servicios independientes. Una relación comercial
          se identificará cuando exista, pero no hará que CreditoColombia.co controle el servicio o
          sus decisiones.
        </p>
      </ContentSection>
      <ContentSection title="Uso responsable">
        <p>
          El usuario debe revisar la información según su situación y evitar interpretar el
          contenido general como una aprobación, oferta definitiva o asesoría individual.
        </p>
      </ContentSection>
    </StandardPageLayout>
  );
}
