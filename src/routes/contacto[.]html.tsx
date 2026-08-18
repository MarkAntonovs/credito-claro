import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { Callout } from "@/components/site/primitives";
import { publicRoutes } from "@/config/routes";
import { createRouteMetadata } from "@/lib/seo";

const routeDefinition = publicRoutes.legal.contact;

export const Route = createFileRoute("/contacto.html")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: "Contacto | CreditoColombia.co",
      description:
        "Página de contacto en preparación para consultas editoriales, correcciones y asuntos relacionados con el sitio.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <StandardPageLayout
      breadcrumbs={[
        { label: "Inicio", href: publicRoutes.commercial.home.path },
        { label: routeDefinition.label },
      ]}
      eyebrow="Contacto"
      title="Contactar con CreditoColombia.co"
      intro="Esta página reservará un canal para correcciones editoriales, consultas sobre el sitio y solicitudes relacionadas con contenido publicado."
      relatedLinks={[
        { label: "Sobre nosotros", href: publicRoutes.trust.about.path },
        { label: "Política editorial", href: publicRoutes.trust.editorialPolicy.path },
      ]}
    >
      <Callout variant="notice" title="Canal pendiente antes de producción">
        TODO de desarrollo: publicar aquí un correo o formulario verificado antes de habilitar el
        sitio. No se muestra información de contacto ficticia.
      </Callout>
      <ContentSection title="Qué podremos atender">
        <p>
          El canal podrá utilizarse para señalar errores, aportar una fuente, solicitar una revisión
          editorial o consultar sobre una relación comercial identificada en el sitio.
        </p>
      </ContentSection>
      <ContentSection title="Solicitudes de crédito">
        <p>
          CreditoColombia.co no recibe, aprueba ni administra solicitudes de crédito. Las consultas
          sobre una solicitud deben dirigirse al proveedor o servicio con el que fue presentada.
        </p>
      </ContentSection>
    </StandardPageLayout>
  );
}
