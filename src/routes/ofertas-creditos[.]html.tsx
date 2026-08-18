import { createFileRoute } from "@tanstack/react-router";

import { CommercialPageLayout } from "@/components/layouts/commercial-page-layout";
import { ProviderComparisonWorkspace } from "@/components/comparison/provider-comparison-workspace";
import { ContentSection } from "@/components/layouts/page-shell";
import { publicRoutes } from "@/config/routes";
import { PROVIDERS_ALPHABETICAL } from "@/data/providers/providers";
import { createRouteMetadata } from "@/lib/seo";
import { StructuredData } from "@/components/seo/structured-data";
import { siteConfig } from "@/config/site";
import { getSeoBreadcrumbs } from "@/data/seo/routes";
import { createWebPageStructuredData } from "@/lib/structured-data";
import { LastReviewed } from "@/components/site/primitives";

const routeDefinition = publicRoutes.commercial.offers;
const title = "Ofertas de crédito online en Colombia: compara opciones";
const description =
  "Compara prestamistas y servicios de crédito online en Colombia por tipo, montos y requisitos revisados, con datos no disponibles identificados claramente.";
const lastReviewed = PROVIDERS_ALPHABETICAL.map((provider) => provider.verifiedAt)
  .sort()
  .at(-1);

export const Route = createFileRoute("/ofertas-creditos.html")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      title,
      description,
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: OffersPage,
});

function OffersPage() {
  return (
    <>
      <StructuredData
        data={createWebPageStructuredData({
          name: title,
          description,
          path: routeDefinition.path,
          siteName: siteConfig.siteName,
        })}
      />
      <CommercialPageLayout
        breadcrumbs={
          getSeoBreadcrumbs(routeDefinition.path) ?? [
            { label: "Inicio", href: publicRoutes.commercial.home.path },
            { label: routeDefinition.label },
          ]
        }
        title="Compara ofertas de crédito online en Colombia"
        intro="Compara proveedores directos, servicios de intermediación y servicios con rol no confirmado usando los datos comerciales revisados. El orden inicial es alfabético: no es un ranking ni promete aprobación."
        meta={lastReviewed ? <LastReviewed date={lastReviewed} label="Datos revisados" /> : null}
        comparisonTitle="Filtra y compara proveedores documentados"
        comparisonDescription="Busca, filtra por tipo de servicio y ordena únicamente con datos mantenidos. Antes de salir del sitio, revisa la divulgación de afiliados y confirma la oferta final con su responsable."
        comparison={<ProviderComparisonWorkspace providers={PROVIDERS_ALPHABETICAL} />}
        trustLinks={[
          { label: "Cómo comparamos", href: publicRoutes.trust.methodology.path },
          { label: "Divulgación de afiliados", href: publicRoutes.trust.affiliateDisclosure.path },
          { label: "Préstamo responsable", href: publicRoutes.trust.responsibleBorrowing.path },
        ]}
      >
        <ContentSection title="Proveedor directo e intermediario no son lo mismo">
          <p>
            Un proveedor directo evalúa y, si corresponde, entrega el crédito bajo sus propias
            condiciones. Un broker, agregador o servicio de contacto cumple otra función y puede
            conectar al usuario con terceros.
          </p>
          <p>
            La comparación mantiene esta diferencia visible para evitar que un servicio de
            intermediación se presente como si fuera quien concede el crédito.
          </p>
        </ContentSection>

        <ContentSection title="Montos, plazos, requisitos, costos y velocidad">
          <p>
            Las tarjetas muestran monto, plazo, edad, requisitos y tiempo cuando el dato está
            disponible en el conjunto mantenido. Un campo omitido o marcado con un guion no implica
            que la condición no exista: debe confirmarse en la oferta final.
          </p>
          <p>
            Un tiempo de solicitud no equivale al tiempo de decisión ni al desembolso. Del mismo
            modo, una tasa aislada no refleja necesariamente seguros, comisiones u otros cargos del
            contrato.
          </p>
        </ContentSection>

        <ContentSection title="Cómo funcionan los filtros y el orden">
          <p>
            El buscador filtra por nombre, operador o producto. Los filtros separan proveedores
            directos de intermediarios y permiten limitar la vista a fichas con monto confirmado. El
            orden por monto usa solo el máximo disponible; las fichas sin ese dato quedan después.
          </p>
          <p>
            No ponderamos aprobación, popularidad ni comisión de afiliado. Puedes seleccionar hasta
            tres fichas para contrastar los mismos campos lado a lado.
          </p>
        </ContentSection>

        <ContentSection title="Confirma siempre la condición final">
          <p>
            La información de una ficha sirve para orientarse, pero no sustituye la evaluación ni la
            comunicación del proveedor. La aprobación y las condiciones definitivas dependen del
            proveedor y del perfil de cada solicitante.
          </p>
        </ContentSection>

        <ContentSection title="Guías para necesidades específicas">
          <p>
            Antes de usar los filtros, revisa cómo evaluar las{" "}
            <a
              className="font-medium underline decoration-accent underline-offset-4"
              href="/apps-prestamos-colombia.html"
            >
              apps de préstamos
            </a>
            , qué significa solicitar un{" "}
            <a
              className="font-medium underline decoration-accent underline-offset-4"
              href="/prestamos-sin-codeudor-colombia.html"
            >
              préstamo sin codeudor
            </a>{" "}
            y cuándo un{" "}
            <a
              className="font-medium underline decoration-accent underline-offset-4"
              href="/microcreditos-colombia.html"
            >
              microcrédito
            </a>{" "}
            corresponde realmente a un uso productivo.
          </p>
        </ContentSection>
      </CommercialPageLayout>
    </>
  );
}
