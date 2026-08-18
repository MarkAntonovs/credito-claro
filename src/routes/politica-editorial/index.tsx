import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { publicRoutes } from "@/config/routes";
import { createRouteMetadata } from "@/lib/seo";

const routeDefinition = publicRoutes.trust.editorialPolicy;

export const Route = createFileRoute("/politica-editorial/")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: "Política editorial | CreditoColombia.co",
      description:
        "Principios editoriales para separar información, relaciones comerciales y datos aún no verificados.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: EditorialPolicyPage,
});

function EditorialPolicyPage() {
  return (
    <StandardPageLayout
      breadcrumbs={[
        { label: "Inicio", href: publicRoutes.commercial.home.path },
        { label: routeDefinition.label },
      ]}
      eyebrow="Transparencia editorial"
      title="Política editorial"
      intro="La información debe ser comprensible, atribuible y distinguir con claridad entre contenido editorial, datos de proveedores y relaciones comerciales."
      relatedLinks={[
        { label: "Metodología", href: publicRoutes.trust.methodology.path },
        { label: "Divulgación de afiliados", href: publicRoutes.trust.affiliateDisclosure.path },
      ]}
    >
      <ContentSection title="Exactitud antes que completitud">
        <p>
          Es preferible mostrar un dato como no disponible que publicar una cifra, condición o
          interpretación sin respaldo suficiente. Los cambios relevantes deberán reflejarse cuando
          puedan confirmarse.
        </p>
      </ContentSection>
      <ContentSection title="Lenguaje y contexto">
        <p>
          Evitaremos presentar la aprobación como garantizada, utilizar urgencia engañosa o
          confundir una solicitud con una oferta definitiva. Las condiciones dependen del proveedor
          y del perfil evaluado.
        </p>
      </ContentSection>
      <ContentSection title="Separación comercial">
        <p>
          Una posible comisión no debe ocultarse ni convertir una relación comercial en una
          recomendación editorial automática. Los enlaces comerciales deberán identificarse cerca
          del contexto en que aparecen.
        </p>
      </ContentSection>
      <ContentSection title="Correcciones">
        <p>
          La arquitectura permitirá actualizar contenido y fuentes cuando se detecten errores o
          cambios. El canal concreto para solicitar correcciones se publicará antes del lanzamiento.
        </p>
      </ContentSection>
    </StandardPageLayout>
  );
}
