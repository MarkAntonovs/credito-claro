import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { StandardPageLayout } from "@/components/layouts/standard-page-layout";
import { AffiliateDisclosure } from "@/components/site/affiliate-disclosure";
import { ProviderDirectoryBrowser } from "@/components/site/provider-directory-browser";
import { LastReviewed } from "@/components/site/primitives";
import { publicRoutes } from "@/config/routes";
import { ACTIVE_PROVIDERS, INACTIVE_PROVIDERS } from "@/data/providers/providers";
import { getSeoBreadcrumbs } from "@/data/seo/routes";
import { createRouteMetadata } from "@/lib/seo";

const routeDefinition = publicRoutes.providers.directory;

export const Route = createFileRoute("/proveedores/")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title: "Directorio de proveedores y servicios | CreditoColombia.co",
      description:
        "Directorio de proveedores directos y servicios de intermediación con datos revisados, fuentes disponibles y fecha de revisión.",
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: ProviderDirectoryPage,
});

const TYPES = [
  {
    title: "Servicio de crédito con rol no confirmado",
    text: "Registro cuya fuente comercial no permite afirmar si concede el crédito o actúa como intermediario.",
  },
  {
    title: "Proveedor directo de crédito",
    text: "Entidad o empresa que ofrece el producto y toma la decisión sobre la solicitud bajo sus condiciones.",
  },
  {
    title: "Broker",
    text: "Intermediario que puede ayudar a presentar o canalizar una solicitud hacia uno o más terceros.",
  },
  {
    title: "Agregador",
    text: "Servicio que organiza o compara información de varias opciones sin ser necesariamente quien concede el crédito.",
  },
  {
    title: "Servicio de generación o conexión de leads",
    text: "Servicio que recopila datos de contacto o solicitud para conectarlos con posibles proveedores u otros intermediarios.",
  },
];

export function ProviderDirectoryPage() {
  const reviewedAt = ACTIVE_PROVIDERS.map((provider) => provider.verifiedAt)
    .sort()
    .at(-1);
  return (
    <StandardPageLayout
      breadcrumbs={
        getSeoBreadcrumbs(routeDefinition.path) ?? [
          { label: "Inicio", href: publicRoutes.commercial.home.path },
          { label: routeDefinition.label },
        ]
      }
      eyebrow="Directorio"
      title="Directorio de prestamistas y servicios en Colombia"
      intro="Busca prestamistas directos, intermediarios y servicios con rol no confirmado presentes en el conjunto mantenido. La inclusión y el orden alfabético no constituyen un ranking, recomendación ni garantía de aprobación."
      meta={reviewedAt ? <LastReviewed date={reviewedAt} label="Datos revisados" /> : null}
      relatedLinks={[
        { label: "Comparar opciones", href: publicRoutes.commercial.offers.path },
        { label: "Cómo verificamos los datos", href: publicRoutes.trust.methodology.path },
      ]}
    >
      <ContentSection title="Cómo clasificamos los registros">
        <div className="grid gap-5 sm:grid-cols-2">
          {TYPES.map((type) => (
            <div key={type.title} className="border-t border-border-strong pt-4">
              <h3 className="text-base font-semibold text-foreground">{type.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{type.text}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Buscar y filtrar el directorio">
        <p>
          Solo se muestran registros marcados como activos en los datos mantenidos. Las fichas SEO
          existentes se enlazan cuando forman parte del registro final; las demás ofertas conservan
          su acción comercial sin crear páginas nuevas.
        </p>
        <AffiliateDisclosure />
        <ProviderDirectoryBrowser providers={ACTIVE_PROVIDERS} />
      </ContentSection>

      {INACTIVE_PROVIDERS.length > 0 ? (
        <ContentSection title="Registros inactivos">
          <p>
            {INACTIVE_PROVIDERS.length} registros permanecen fuera del directorio activo. No se
            presentan como opciones disponibles ni reciben enlaces comerciales.
          </p>
        </ContentSection>
      ) : null}

      <ContentSection title="Metodología, fuentes y límites">
        <p>
          La clasificación, entidad legal, producto, requisitos, montos y demás campos proceden de
          las fuentes asociadas a cada registro y muestran fecha de revisión. Lo que no está
          respaldado aparece como “No disponible”; no completamos tasas, tiempos, licencias ni
          condiciones por inferencia.
        </p>
        <p>
          Antes de solicitar, contrasta la ficha con el sitio y contrato oficiales. Consulta la{" "}
          <a href={publicRoutes.commercial.offers.path}>comparación de ofertas</a> para revisar los
          mismos campos lado a lado.
        </p>
      </ContentSection>

      <ContentSection title="Seguridad antes de contactar un prestamista">
        <p>
          Verifica razón social, dominio, tratamiento de datos y condiciones escritas. No
          interpretes la presencia en este directorio como certificación regulatoria y detente ante
          pagos previos inesperados, suplantación o promesas de aprobación garantizada.
        </p>
      </ContentSection>
    </StandardPageLayout>
  );
}
