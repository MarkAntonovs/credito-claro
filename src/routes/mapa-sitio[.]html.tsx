import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { publicRoutes } from "@/config/routes";
import { createRouteMetadata } from "@/lib/seo";

const guideLinks = [
  ["Préstamos para pensionados", "/prestamos-para-pensionados-colombia"],
  ["Crédito e historial en DataCrédito", "/prestamo-reportado-datacredito.html"],
  ["Préstamos para independientes", "/prestamos-para-independientes-colombia.html"],
  ["Requisitos del crédito online", "/requisitos-credito-online-colombia.html"],
  ["Préstamos rápidos e inmediatos", "/prestamos-rapidos-inmediatos-colombia.html"],
  ["Préstamo solo con cédula", "/prestamo-solo-con-cedula-colombia.html"],
  ["Cómo comparar tasas de interés", "/tasas-interes-creditos-colombia.html"],
  ["Tasa de usura en Colombia", "/tasa-de-usura-colombia.html"],
  ["Cómo reconocer estafas", "/estafas-prestamos-online-colombia.html"],
  ["Derechos del consumidor financiero", "/derechos-consumidor-financiero-colombia.html"],
  ["Préstamo responsable", publicRoutes.trust.responsibleBorrowing.path],
] as const;

export const Route = createFileRoute("/mapa-sitio.html")({
  head: () =>
    createRouteMetadata({
      path: "/mapa-sitio.html",
      title: "Mapa del sitio | CreditoColombia.co",
      description:
        "Navegación por las principales comparaciones, guías, proveedores y páginas de transparencia de CreditoColombia.co.",
    }),
  component: SpanishSitemapPage,
});

function SpanishSitemapPage() {
  return (
    <StandardPageLayout
      breadcrumbs={[{ label: "Inicio", href: "/" }, { label: "Mapa del sitio" }]}
      eyebrow="Navegación"
      title="Mapa del sitio"
      intro="Accede a las principales secciones informativas de CreditoColombia.co. Las direcciones antiguas y los redireccionamientos no se incluyen aquí."
    >
      <ContentSection title="Comparar y entender opciones">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <a className="underline" href={publicRoutes.commercial.offers.path}>
              Comparar proveedores documentados
            </a>
          </li>
          <li>
            <a className="underline" href={publicRoutes.commercial.onlineCredit.path}>
              Créditos online en Colombia
            </a>
          </li>
          <li>
            <a className="underline" href={publicRoutes.providers.directory.path}>
              Directorio de proveedores
            </a>
          </li>
        </ul>
      </ContentSection>

      <ContentSection title="Guías destacadas">
        <ul className="grid gap-2 sm:grid-cols-2">
          {guideLinks.map(([label, href]) => (
            <li key={href}>
              <a className="underline" href={href}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Transparencia editorial">
        <ul className="grid gap-2 sm:grid-cols-2">
          {Object.values(publicRoutes.trust).map((route) => (
            <li key={route.path}>
              <a className="underline" href={route.path}>
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Legal y contacto">
        <ul className="list-disc space-y-2 pl-5">
          {Object.values(publicRoutes.legal).map((route) => (
            <li key={route.path}>
              <a className="underline" href={route.path}>
                {route.label}
              </a>
            </li>
          ))}
        </ul>
      </ContentSection>
    </StandardPageLayout>
  );
}
