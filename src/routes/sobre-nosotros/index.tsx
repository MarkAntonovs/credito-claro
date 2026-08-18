import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { publicRoutes } from "@/config/routes";
import { siteConfig } from "@/config/site";
import { createRouteMetadata } from "@/lib/seo";

const routeDefinition = publicRoutes.trust.about;

export const Route = createFileRoute("/sobre-nosotros/")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: `Sobre ${siteConfig.siteName}`,
      description:
        "Qué es CreditoColombia.co, cuál es su función informativa y qué límites tiene frente a proveedores y solicitudes de crédito.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <StandardPageLayout
      breadcrumbs={[
        { label: "Inicio", href: publicRoutes.commercial.home.path },
        { label: routeDefinition.label },
      ]}
      eyebrow="Transparencia"
      title={`Sobre ${siteConfig.siteName}`}
      intro="Somos un sitio informativo independiente pensado para ayudar a entender y comparar opciones de crédito sin presentarnos como entidad financiera."
      relatedLinks={[
        { label: "Metodología", href: publicRoutes.trust.methodology.path },
        { label: "Política editorial", href: publicRoutes.trust.editorialPolicy.path },
        { label: "Contacto", href: publicRoutes.legal.contact.path },
      ]}
    >
      <ContentSection title="Qué hacemos">
        <p>
          Organizamos explicaciones, criterios de comparación y fichas de proveedores sustentadas
          por fuentes identificables. La finalidad es facilitar una revisión informada, no tomar
          decisiones por el usuario.
        </p>
      </ContentSection>
      <ContentSection title="Qué no hacemos">
        <p>
          No otorgamos créditos, no aprobamos solicitudes y no fijamos las condiciones de ningún
          producto. Tampoco debemos completar información desconocida como si estuviera confirmada.
        </p>
      </ContentSection>
      <ContentSection title="Cómo puede financiarse el sitio">
        <p>
          Algunos enlaces son de afiliados y pueden generar una compensación para el sitio. Esa
          relación se indica de forma visible y se mantiene separada de las decisiones editoriales
          sobre cómo se explica la información.
        </p>
      </ContentSection>
    </StandardPageLayout>
  );
}
