import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/layouts/article-layout";
import { ContentSection } from "@/components/layouts/page-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { LoanCalculator } from "@/components/site/loan-calculator";
import { editorialIdentity } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { officialSources } from "@/data/migration/official-sources";
import { getSeoBreadcrumbs } from "@/data/seo/routes";
import { createRouteMetadata } from "@/lib/seo";
import { createArticleStructuredData, createWebPageStructuredData } from "@/lib/structured-data";

const path = "/tabla-amortizacion-credito.html";
const title = "Tabla de amortización de crédito: calcula cuota, capital e interés";
const description =
  "Genera una tabla de amortización completa por monto, tasa efectiva y plazo. Revisa cuota, interés, abono a capital, saldo, total y supuestos.";
const heading = "Tabla de amortización de crédito: genera el calendario completo";
const reviewedAt = "2026-08-18";
const links = {
  simulator: "/simulador-credito-colombia.html",
  rates: "/tasas-interes-creditos-colombia.html",
  free: "/credito-libre-inversion-colombia.html",
  portfolio: "/compra-de-cartera-colombia.html",
  offers: "/ofertas-creditos.html",
};
function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="font-medium underline decoration-accent underline-offset-4" href={href}>
      {children}
    </a>
  );
}

export const Route = createFileRoute("/tabla-amortizacion-credito.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: TablaAmortizacionPage,
});

function TablaAmortizacionPage() {
  const sources = [officialSources.sfcCreditFaq, officialSources.sfcRatesDashboard];
  return (
    <>
      <StructuredData
        data={[
          createWebPageStructuredData({
            name: heading,
            description,
            path,
            siteName: siteConfig.siteName,
          }),
          createArticleStructuredData({
            headline: heading,
            description,
            path,
            language: "es-CO",
            dateModified: reviewedAt,
            authorName: editorialIdentity.name,
          }),
        ]}
      />
      <ArticleLayout
        breadcrumbs={
          getSeoBreadcrumbs(path) ?? [
            { label: "Inicio", href: "/" },
            { label: "Simulador", href: links.simulator },
            { label: "Tabla de amortización" },
          ]
        }
        title={heading}
        intro="Ingresa el monto, una tasa efectiva anual o mensual y el plazo. La herramienta calcula una cuota mensual estimada y muestra todos los periodos con interés, abono a capital y saldo. Usa cuotas iguales pagadas al final de cada mes; no reproduce cargos ni reglas que no estén modelados."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Simulador de crédito", href: links.simulator },
          { label: "Tasas y costo total", href: links.rates },
          { label: "Libre inversión", href: links.free },
          { label: "Compra de cartera", href: links.portfolio },
          { label: "Comparar opciones", href: links.offers },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Genera tu tabla de amortización completa">
          <p>
            Los valores iniciales son un ejemplo editable, no una oferta vigente. Usa datos de una
            cotización verificable para contrastar escenarios.
          </p>
          <LoanCalculator scheduleMode="full" />
        </ContentSection>
        <ContentSection title="Cómo leer la tabla">
          <dl className="space-y-4">
            <div>
              <dt className="font-semibold">Cuota</dt>
              <dd>
                Pago estimado del periodo. En este modelo permanece igual salvo diferencias
                matemáticas no mostradas por el redondeo visual.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Interés</dt>
              <dd>
                Costo calculado sobre el saldo al inicio del periodo usando la tasa efectiva
                mensual.
              </dd>
            </div>
            <div>
              <dt className="font-semibold">Capital</dt>
              <dd>Parte de la cuota que reduce el principal adeudado.</dd>
            </div>
            <div>
              <dt className="font-semibold">Saldo</dt>
              <dd>Principal que queda después de aplicar el abono a capital del periodo.</dd>
            </div>
          </dl>
        </ContentSection>
        <ContentSection title="Sistema de cuota fija o sistema francés">
          <p>
            La herramienta usa el esquema conocido como cuota fija o sistema francés: calcula un
            pago periódico igual para amortizar el principal y los intereses durante el plazo.
            Cuando la tasa es positiva, el interés se calcula sobre el saldo pendiente.
          </p>
          <p>
            Al inicio el saldo es mayor y, por tanto, también lo es el interés calculado. A medida
            que el capital baja, una parte mayor de la misma cuota puede aplicarse a capital. No
            todos los créditos colombianos usan exactamente este sistema: una tasa variable,
            periodos distintos, cuotas extraordinarias, seguros o reglas contractuales cambian el
            resultado.
          </p>
        </ContentSection>
        <ContentSection title="Ejemplo educativo y redondeo">
          <p>
            Si mantienes los valores iniciales, verás cómo cada cuota se divide entre interés y
            capital y cómo el saldo llega a cero al finalizar el plazo. Cambiar de tasa E.A. a
            efectiva mensual cambia la interpretación del porcentaje: la E.A. se convierte mediante
            equivalencia compuesta.
          </p>
          <p>
            Los cálculos internos conservan decimales; la pantalla redondea pesos para facilitar la
            lectura. Por eso sumar únicamente los valores visibles puede producir una pequeña
            diferencia frente a los totales internos.
          </p>
        </ContentSection>
        <ContentSection title="Supuestos y costos no incluidos">
          <ul className="list-disc space-y-2 pl-5">
            <li>Pagos mensuales iguales realizados al final de cada periodo.</li>
            <li>Tasa fija durante todo el plazo y sin días irregulares.</li>
            <li>No incluye seguros, impuestos, comisiones, estudios, mora ni otros cargos.</li>
            <li>No modela desembolsos netos diferentes del principal ni periodos de gracia.</li>
          </ul>
          <p>
            La tabla oficial del prestamista puede diferir. Compara primero la tasa con la guía de{" "}
            <InlineLink href={links.rates}>tasas y costo total</InlineLink> y usa el{" "}
            <InlineLink href={links.simulator}>simulador general</InlineLink> cuando solo necesites
            una vista previa.
          </p>
        </ContentSection>
        <ContentSection title="Abonos a capital y pago anticipado">
          <p>
            Un abono adicional puede reducir saldo, intereses futuros, plazo o cuota según el
            contrato y la instrucción aceptada por el proveedor. Esta herramienta no simula abonos
            extraordinarios: no restes una cuota manualmente y asumas que reproduce el tratamiento
            contractual.
          </p>
          <p>
            Solicita por escrito cómo se aplicará el pago, si reduce plazo o cuota, qué saldo
            quedará y una tabla actualizada. En una{" "}
            <InlineLink href={links.portfolio}>compra de cartera</InlineLink>, compara además el
            costo de la nueva obligación; para un{" "}
            <InlineLink href={links.free}>crédito de libre inversión</InlineLink>, no confundas
            recibir dinero nuevo con refinanciar automáticamente una deuda.
          </p>
        </ContentSection>
      </ArticleLayout>
    </>
  );
}
