import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { ResponsibleBorrowingNotice } from "@/components/site/responsible-borrowing-notice";
import { publicRoutes } from "@/config/routes";
import { createRouteMetadata } from "@/lib/seo";

const routeDefinition = publicRoutes.trust.responsibleBorrowing;

export const Route = createFileRoute("/prestamo-responsable/")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: "Préstamo responsable: qué revisar antes de solicitar",
      description:
        "Principios generales para revisar capacidad de pago, costos, plazos y consecuencias antes de aceptar un crédito.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: ResponsibleBorrowingPage,
});

function ResponsibleBorrowingPage() {
  return (
    <StandardPageLayout
      breadcrumbs={[
        { label: "Inicio", href: publicRoutes.commercial.home.path },
        { label: routeDefinition.label },
      ]}
      eyebrow="Antes de solicitar"
      title="Tomar un crédito con información suficiente"
      intro="Solicitar crédito implica asumir pagos futuros. Comparar con calma ayuda a entender el compromiso, pero la decisión debe partir de tu situación y de las condiciones finales del proveedor."
      relatedLinks={[
        { label: "Entender créditos online", href: publicRoutes.commercial.onlineCredit.path },
        { label: "Comparar opciones", href: publicRoutes.commercial.offers.path },
      ]}
    >
      <ResponsibleBorrowingNotice />
      <ContentSection title="Revisa el costo completo">
        <p>
          No te quedes únicamente con una cuota o una tasa presentada de forma aislada. Solicita
          claridad sobre todos los costos aplicables y cuánto terminarías pagando según el plazo.
        </p>
      </ContentSection>
      <ContentSection title="Evalúa tu capacidad de pago">
        <p>
          Contrasta la cuota con ingresos y gastos habituales. Considera qué ocurriría si tus
          ingresos disminuyen o aparece un gasto inesperado durante el plazo.
        </p>
      </ContentSection>
      <ContentSection title="No confundas solicitud con aprobación">
        <p>
          Completar un formulario no significa que el crédito haya sido aprobado. Tampoco confirma
          el monto, el costo o el momento de desembolso hasta que el proveedor los comunique.
        </p>
      </ContentSection>
    </StandardPageLayout>
  );
}
