import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/layouts/article-layout";
import { ContentSection } from "@/components/layouts/page-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { ProductComparisonCta } from "@/components/site/product-comparison-cta";
import { editorialIdentity } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { officialSources } from "@/data/migration/official-sources";
import { getSeoBreadcrumbs } from "@/data/seo/routes";
import { createRouteMetadata } from "@/lib/seo";
import { createArticleStructuredData, createWebPageStructuredData } from "@/lib/structured-data";

const path = "/apps-prestamos-colombia.html";
const title = "Apps de préstamos en Colombia: cómo comparar y proteger tus datos";
const description =
  "Compara apps y plataformas de préstamos por responsable, costos, permisos, privacidad y seguridad antes de solicitar crédito en Colombia.";
const heading = "Apps de préstamos en Colombia: qué revisar antes de solicitar";
const reviewedAt = "2026-08-18";

const links = {
  home: "/",
  offers: "/ofertas-creditos.html",
  online: "/creditos-online-colombia.html",
  verify: "/verificar-prestamista-legal-colombia.html",
  scams: "/estafas-prestamos-online-colombia.html",
  rates: "/tasas-interes-creditos-colombia.html",
  requirements: "/requisitos-credito-online-colombia.html",
};

function InlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a className="font-medium underline decoration-accent underline-offset-4" href={href}>
      {children}
    </a>
  );
}

export const Route = createFileRoute("/apps-prestamos-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: AppsPrestamosPage,
});

function AppsPrestamosPage() {
  const sources = [
    officialSources.sicFintechInstructions,
    officialSources.sicDigitalCreditCourse,
    officialSources.sfcSupervisedEntities,
    officialSources.sicNanocredEnforcement,
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
            { label: "Apps de préstamos" },
          ]
        }
        title={heading}
        intro="Una app de préstamos es solo un canal digital: puede pertenecer al prestamista, a un intermediario o incluso ser una imitación. Antes de instalarla o enviar datos, identifica la empresa responsable, compara el costo escrito, revisa permisos y privacidad, y confirma que el canal sea oficial."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Créditos online", href: links.online },
          { label: "Comparar opciones", href: links.offers },
          { label: "Verificar prestamista", href: links.verify },
          { label: "Evitar estafas", href: links.scams },
          { label: "Tasas y costos", href: links.rates },
          { label: "Requisitos", href: links.requirements },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Qué cuenta como app de préstamos">
          <p>
            Puede ser una aplicación instalada, una web adaptada al celular o el acceso móvil de una
            entidad. El formato no determina quién presta. Distingue entre proveedor directo,
            intermediario que comparte la solicitud con terceros y simple canal tecnológico.
          </p>
          <p>
            Una versión web en el navegador puede ofrecer el mismo trámite sin pedir acceso
            permanente al dispositivo. Compara siempre la app con su equivalente web y entra desde
            el dominio oficial, no desde enlaces recibidos por mensajes.
          </p>
        </ContentSection>

        <ContentSection title="Cómo comparar aplicaciones y plataformas">
          <ul className="list-disc space-y-2 pl-5">
            <li>Razón social, NIT, función y datos de contacto del responsable.</li>
            <li>Tasa expresada en un periodo comparable, cargos, seguros, plazo, cuota y total.</li>
            <li>Qué ocurre entre solicitud, estudio, aprobación, contrato y desembolso.</li>
            <li>
              Política de privacidad, destinatarios de los datos y forma de solicitar su
              eliminación.
            </li>
            <li>Canales para reclamos, pagos y soporte después del desembolso.</li>
          </ul>
          <p>
            Ninguna tienda de aplicaciones certifica por sí sola que el crédito sea barato, legal o
            seguro. Tampoco tratamos calificaciones, descargas o testimonios como prueba de
            aprobación o calidad.
          </p>
        </ContentSection>

        <ContentSection title="Requisitos y flujo de solicitud">
          <p>
            Es habitual que se verifiquen identidad, contacto, ingresos, obligaciones y medio de
            desembolso, pero la lista depende del producto. La ausencia de documentos visibles no
            equivale a facilidad ni aprobación garantizada. Consulta los{" "}
            <InlineLink href={links.requirements}>requisitos de crédito online</InlineLink> antes de
            subir información.
          </p>
          <p>
            Un formulario rápido solo mide el tiempo de captura. El estudio, la decisión, la firma y
            el desembolso son etapas distintas, como explica la guía de{" "}
            <InlineLink href={links.online}>créditos online en Colombia</InlineLink>.
          </p>
        </ContentSection>

        <ContentSection title="Costos y velocidad: qué debe quedar por escrito">
          <p>
            Compara tasa, comisiones, seguros, impuestos aplicables, cuota, número de pagos, total y
            consecuencias de mora. No asumimos una tasa ni un tiempo de desembolso para la
            categoría; deben provenir de la oferta concreta y vigente.
          </p>
          <p>
            Contrasta los periodos con la guía de{" "}
            <InlineLink href={links.rates}>tasas y costo total</InlineLink>. Una promesa de dinero
            “inmediato” no reemplaza el contrato ni demuestra que la solicitud será aprobada.
          </p>
        </ContentSection>

        <ContentSection title="Permisos, privacidad y tratamiento de datos">
          <p>
            Antes de instalar, revisa por qué solicita cámara, ubicación, contactos, archivos,
            micrófono u otros permisos. Concede solo lo necesario para una función explicada y usa
            los controles del sistema para retirarlo cuando deje de ser necesario.
          </p>
          <p>
            Lee quién recolecta los datos, con qué finalidad, por cuánto tiempo y con quién los
            comparte. Evita entregar claves, PIN, códigos de verificación o acceso remoto al
            teléfono. La SIC mantiene instrucciones específicas sobre financiación tecnológica y
            protección al consumidor.
          </p>
        </ContentSection>

        <ContentSection title="Señales de seguridad y fuentes de descarga">
          <p>
            Comprueba la identidad mediante la guía para{" "}
            <InlineLink href={links.verify}>verificar un prestamista</InlineLink>. Llega a la tienda
            desde el sitio oficial de la empresa, verifica desarrollador y política de privacidad, y
            evita archivos APK o enlaces enviados por cuentas desconocidas.
          </p>
          <p>
            La supervisión financiera depende de la entidad y actividad, no de que exista una app.
            Consulta fuentes oficiales, pero no interpretes la ausencia o presencia en una sola
            lista como validación completa de todo el producto.
          </p>
        </ContentSection>

        <ContentSection title="Alertas: anticipos, suplantación y cobro abusivo">
          <ul className="list-disc space-y-2 pl-5">
            <li>Pago previo para “liberar”, asegurar o legalizar un crédito.</li>
            <li>Presión para actuar sin leer o comunicación desde cuentas que imitan una marca.</li>
            <li>Solicitud de contactos o archivos sin una finalidad clara.</li>
            <li>Contrato ausente, empresa responsable oculta o costos incompletos.</li>
            <li>Amenazas, exposición de datos o mensajes a terceros como método de cobro.</li>
          </ul>
          <p>
            Si aparece una señal, detén el proceso y conserva evidencia. La guía sobre{" "}
            <InlineLink href={links.scams}>estafas de préstamos online</InlineLink> explica cómo
            verificar y reportar.
          </p>
        </ContentSection>

        <ProductComparisonCta
          title="Compara después de verificar la seguridad"
          description="La comparación no clasifica una opción como app segura ni confirma disponibilidad, tasa o aprobación sin evidencia del responsable."
        />
      </ArticleLayout>
    </>
  );
}
