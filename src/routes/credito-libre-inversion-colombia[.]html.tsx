import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/layouts/article-layout";
import { ContentSection } from "@/components/layouts/page-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { LoanCalculator } from "@/components/site/loan-calculator";
import { ProductComparisonCta } from "@/components/site/product-comparison-cta";
import { editorialIdentity } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { officialSources } from "@/data/migration/official-sources";
import { getFinalSeoRouteByName, getSeoBreadcrumbs } from "@/data/seo/routes";
import { createRouteMetadata } from "@/lib/seo";
import { createArticleStructuredData, createWebPageStructuredData } from "@/lib/structured-data";

const path = "/credito-libre-inversion-colombia.html";
const title = "Crédito de libre inversión en Colombia: compara costos";
const description =
  "Qué es un crédito de libre inversión, requisitos generales, costos, bancos y canales digitales, proceso y calculadora para comparar escenarios.";
const heading = "Crédito de libre inversión en Colombia: qué es y cómo comparar";
const reviewedAt = "2026-08-18";

const routeFor = (pageName: string) => {
  const route = getFinalSeoRouteByName(pageName);
  if (!route?.implemented) throw new Error("Missing implemented SEO route: " + pageName);
  return route.finalUrl;
};

export const Route = createFileRoute("/credito-libre-inversion-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: LibreInvestmentPage,
});

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="font-medium text-foreground underline decoration-accent underline-offset-4"
    >
      {children}
    </a>
  );
}

function LibreInvestmentPage() {
  const offersPath = routeFor("Ofertas de créditos");
  const ratesPath = routeFor("Tasas de interés de créditos");
  const simulatorPath = routeFor("Simulador y calculadora de crédito");
  const requirementsPath = routeFor("Requisitos para crédito online");
  const onlinePath = routeFor("Créditos online Colombia");
  const purchasePortfolioPath = routeFor("Compra de cartera");
  const sources = [
    officialSources.bancoBogotaLibreInvestment,
    officialSources.sfcCreditFaq,
    officialSources.sfcRatesDashboard,
    officialSources.sicFintechInstructions,
  ];

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
            { label: "Crédito de libre inversión" },
          ]
        }
        title={heading}
        intro="Un crédito de libre inversión es un préstamo personal cuyo dinero no queda ligado a una compra específica. Puede servir para un gasto o proyecto definido por el solicitante, pero sigue sujeto a estudio, contrato y costo. Compáralo por tasa, cargos, plazo, cuota y total previsto, no solo por el destino libre."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Inicio", href: "/" },
          { label: "Comparar opciones", href: offersPath },
          { label: "Tasas y costo total", href: ratesPath },
          { label: "Simulador de crédito", href: simulatorPath },
          { label: "Requisitos de crédito", href: requirementsPath },
          { label: "Créditos online", href: onlinePath },
          { label: "Compra de cartera", href: purchasePortfolioPath },
          { label: "Tabla de amortización", href: "/tabla-amortizacion-credito.html" },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Qué es y para qué sirve">
          <p>
            “Libre inversión”, “libre destino” o “libre destinación” suelen describir una categoría
            de crédito de consumo en la que el contrato no restringe el desembolso a vivienda,
            vehículo, educación u otro propósito específico. La denominación del proveedor y las
            condiciones concretas deben confirmarse en su oferta.
          </p>
          <p>
            La libertad de uso no elimina la obligación de explicar tasa, plazo, cuotas, seguros,
            comisiones y consecuencias de mora. Tampoco convierte una preevaluación en aprobación.
          </p>
        </ContentSection>

        <ContentSection title="A quién puede resultarle apropiado">
          <p>
            Puede ser una opción cuando existe un gasto definido, el valor necesario es conocido y
            la cuota cabe con margen en el presupuesto. No es una solución automática para cubrir
            cada mes un déficit recurrente ni para financiar una compra que dispone de un crédito
            específico claramente más conveniente.
          </p>
          <p>
            Si el objetivo principal es trasladar o agrupar obligaciones existentes, compara primero
            una <InlineLink href={purchasePortfolioPath}>compra de cartera</InlineLink>; tomar
            dinero nuevo y pagar las deudas por cuenta propia no reproduce necesariamente sus
            condiciones.
          </p>
        </ContentSection>

        <ContentSection title="Requisitos, documentos e ingresos">
          <p>
            El proveedor puede solicitar identidad, contacto, información laboral o de actividad,
            ingresos, gastos, obligaciones, historia crediticia y un medio de desembolso. No existe
            una lista universal ni presentar todos los documentos garantiza una decisión favorable.
          </p>
          <p>
            Confirma la lista del producto concreto y la finalidad de cada dato. La guía de{" "}
            <InlineLink href={requirementsPath}>requisitos para crédito</InlineLink> explica qué
            revisar antes de enviar información sensible.
          </p>
        </ContentSection>

        <ContentSection title="Montos y plazos dependen del proveedor">
          <p>
            Esta página no publica un monto mínimo, máximo o plazo “típico” porque esos valores
            cambian por entidad, canal, producto y evaluación. Si una oferta no muestra el dato,
            trátalo como <strong>“No disponible”</strong> o{" "}
            <strong>“Consultar con el proveedor”</strong>, no como una condición favorable.
          </p>
          <p>
            Compara el monto neto que recibirías con el principal que quedará registrado y verifica
            cuántas cuotas habrá, con qué frecuencia y en qué fecha vence la primera.
          </p>
        </ContentSection>

        <ContentSection title="Tasa, cargos y costo total">
          <p>
            Lleva todas las tasas a un periodo comparable y separa intereses de seguros, comisiones
            y otros cargos confirmados. Una tasa nominal menor o una cuota más baja no demuestra por
            sí sola que pagarás menos en total; un plazo más largo puede reducir la cuota y aumentar
            el costo acumulado.
          </p>
          <p>
            Usa la guía de <InlineLink href={ratesPath}>tasas y costo total</InlineLink> para
            comparar la oferta escrita. Las referencias oficiales cambian por modalidad y periodo,
            por lo que aquí no se reutiliza una cifra como tasa universal de libre inversión.
          </p>
        </ContentSection>

        <ContentSection title="Bancos, fintech y canal digital">
          <p>
            “Banco” identifica una clase de entidad; “fintech” puede describir tecnología, canal o
            modelo de servicio. Un banco puede tramitar el crédito digitalmente y una plataforma
            puede actuar como proveedor directo o como intermediario. El canal no demuestra por sí
            solo quién presta, cuánto cuesta o si el producto es realmente libre inversión.
          </p>
          <p>
            Identifica la entidad legal, su función y el contrato. Consulta la guía de{" "}
            <InlineLink href={onlinePath}>créditos online</InlineLink> para separar solicitud,
            estudio, aprobación y desembolso.
          </p>
        </ContentSection>

        <ContentSection title="Proceso general de solicitud">
          <ol className="list-decimal space-y-2 pl-5">
            <li>Identifica el producto, la entidad legal y el canal oficial.</li>
            <li>Revisa requisitos y autorizaciones antes de enviar datos.</li>
            <li>Recibe el resultado del estudio sin asumir aprobación previa.</li>
            <li>Compara oferta, contrato, tabla de pagos y costo total.</li>
            <li>Acepta solo si entiendes las condiciones y la cuota es sostenible.</li>
          </ol>
        </ContentSection>

        <ContentSection title="Calculadora para comparar un escenario">
          <p>
            Ingresa únicamente un monto, tasa y plazo tomados de una oferta verificable. La
            estimación usa cuotas mensuales iguales y no incluye cargos que no hayas añadido a tu
            comparación. Para más contexto, abre el{" "}
            <InlineLink href={simulatorPath}>simulador completo</InlineLink>.
          </p>
          <p>
            Los valores que aparecen al abrir la calculadora son ejemplos editables; no representan
            una tasa, monto o plazo vigente de libre inversión.
          </p>
          <LoanCalculator compact />
        </ContentSection>

        <ProductComparisonCta
          title="Cómo comparar opciones de libre inversión"
          description="No hemos convertido préstamos genéricos del directorio en opciones de libre inversión sin evidencia del proveedor."
        />

        <ContentSection title="Alternativas antes de asumir la deuda">
          <p>
            Considera ahorrar y aplazar el gasto, reducir su alcance, usar un producto específico
            cuando tenga mejores condiciones documentadas o negociar directamente una obligación
            existente. La disponibilidad de una alternativa no implica que resulte más barata:
            compárala con los mismos datos y contra tu presupuesto.
          </p>
        </ContentSection>
      </ArticleLayout>
    </>
  );
}
