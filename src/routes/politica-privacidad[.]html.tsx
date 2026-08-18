import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { Callout } from "@/components/site/primitives";
import { publicRoutes } from "@/config/routes";
import { createRouteMetadata } from "@/lib/seo";

const routeDefinition = publicRoutes.legal.privacy;

export const Route = createFileRoute("/politica-privacidad.html")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: "Política de privacidad | CreditoColombia.co",
      description:
        "Borrador de arquitectura para explicar el tratamiento de datos del futuro sitio CreditoColombia.co.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <StandardPageLayout
      breadcrumbs={[
        { label: "Inicio", href: publicRoutes.commercial.home.path },
        { label: routeDefinition.label },
      ]}
      eyebrow="Legal"
      title="Política de privacidad"
      intro="Esta es una primera estructura de desarrollo. Deberá completarse con los datos reales del responsable y con los tratamientos que existan antes del lanzamiento."
      relatedLinks={[
        { label: "Términos", href: publicRoutes.legal.terms.path },
        { label: "Contacto", href: publicRoutes.legal.contact.path },
      ]}
    >
      <Callout variant="notice" title="Información legal pendiente">
        TODO antes de producción: identificar al responsable del sitio, el canal para ejercer
        derechos y cualquier tratamiento, proveedor técnico o plazo de conservación aplicable.
      </Callout>
      <ContentSection title="Estado actual del prototipo">
        <p>
          Esta versión no contiene formularios de solicitud de crédito ni integra analítica,
          publicidad o gestión de consentimiento. Si esas funciones se incorporan, esta política
          deberá actualizarse antes de utilizarlas.
        </p>
      </ContentSection>
      <ContentSection title="Datos de proveedores externos">
        <p>
          Los futuros enlaces podrán dirigir a sitios de terceros con sus propias políticas. El
          usuario deberá revisar esas condiciones directamente en el servicio correspondiente.
        </p>
      </ContentSection>
      <ContentSection title="Cambios de esta política">
        <p>
          La versión final deberá indicar su fecha de vigencia y reflejar las funciones reales del
          sitio. No se añadirá una identidad jurídica, dirección o contacto que no haya sido
          confirmado.
        </p>
      </ContentSection>
    </StandardPageLayout>
  );
}
