import { createFileRoute } from "@tanstack/react-router";

import { ArticleLayout } from "@/components/layouts/article-layout";
import { ContentSection } from "@/components/layouts/page-shell";
import { StructuredData } from "@/components/seo/structured-data";
import { Callout } from "@/components/site/primitives";
import { ProductComparisonCta } from "@/components/site/product-comparison-cta";
import { editorialIdentity } from "@/config/editorial";
import { siteConfig } from "@/config/site";
import { officialSources } from "@/data/migration/official-sources";
import { getFinalSeoRouteByName, getSeoBreadcrumbs } from "@/data/seo/routes";
import { createRouteMetadata } from "@/lib/seo";
import { createArticleStructuredData, createWebPageStructuredData } from "@/lib/structured-data";

const path = "/credito-libranza-colombia.html";
const title = "Crédito de libranza en Colombia: cómo funciona y comparar";
const description =
  "Cómo funciona la libranza y el descuento por nómina o pensión, quién puede acceder, pagaduría, límites legales, costos, ventajas y riesgos.";
const heading = "Crédito de libranza en Colombia: funcionamiento, acceso y costos";
const reviewedAt = "2026-08-18";

const routeFor = (pageName: string) => {
  const route = getFinalSeoRouteByName(pageName);
  if (!route?.implemented) throw new Error("Missing implemented SEO route: " + pageName);
  return route.finalUrl;
};

export const Route = createFileRoute("/credito-libranza-colombia.html")({
  head: () =>
    createRouteMetadata({
      path,
      title,
      description,
      robotsIntent: "index",
      openGraphType: "article",
    }),
  component: LibranzaPage,
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

function LibranzaPage() {
  const pensionersPath = routeFor("Préstamos para pensionados");
  const reportedPath = routeFor("Préstamos para reportados");
  const offersPath = routeFor("Ofertas de créditos");
  const ratesPath = routeFor("Tasas de interés de créditos");
  const requirementsPath = routeFor("Requisitos para crédito online");
  const sources = [
    officialSources.colombiaLibranzaLaw,
    officialSources.sfcCreditFaq,
    officialSources.sfcRuneol,
    officialSources.sfcLibranza,
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
            { label: "Crédito de libranza" },
          ]
        }
        title={heading}
        intro="La libranza es una modalidad en la que autorizas que la cuota se descuente de tu salario, honorarios o pensión y que el empleador o entidad pagadora la gire al operador. Pueden acceder, en términos legales generales, ciertos asalariados, contratistas, asociados, afiliados y pensionados; la aprobación sigue dependiendo de capacidad y políticas del operador."
        author={{ name: editorialIdentity.name, role: editorialIdentity.spanishRole }}
        reviewedAt={reviewedAt}
        sources={sources}
        relatedGuides={[
          { label: "Inicio", href: "/" },
          { label: "Créditos para pensionados", href: pensionersPath },
          { label: "Crédito para reportados", href: reportedPath },
          { label: "Comparar opciones", href: offersPath },
          { label: "Tasas y costo total", href: ratesPath },
          { label: "Requisitos de crédito", href: requirementsPath },
        ]}
        showResponsibleBorrowingNotice
      >
        <ContentSection title="Cómo funciona el descuento directo">
          <ol className="list-decimal space-y-2 pl-5">
            <li>El beneficiario acepta el producto y autoriza expresamente el descuento.</li>
            <li>El empleador o entidad pagadora descuenta la cuota del pago correspondiente.</li>
            <li>La pagaduría gira esos recursos a la entidad operadora.</li>
            <li>El proceso continúa durante el plazo pactado o hasta extinguir la obligación.</li>
          </ol>
          <p>
            El descuento automático es un medio de pago, no una garantía de que la deuda sea
            asequible ni una autorización para omitir contrato, tasa, cargos o tabla de pagos.
          </p>
        </ContentSection>

        <ContentSection title="Quién puede acceder en términos generales">
          <p>
            La Ley 1527, con sus modificaciones, contempla personas naturales asalariadas,
            contratadas por prestación de servicios, asociadas a cooperativas o precooperativas,
            afiliadas a fondos de empleados y pensionadas. Esa posibilidad legal no obliga al
            operador a aprobar: la misma norma la sujeta a la capacidad de endeudamiento y a sus
            políticas comerciales.
          </p>
          <p>
            La entidad puede solicitar identidad, prueba del vínculo o pago, desprendibles,
            información de obligaciones y autorizaciones. Consulta los{" "}
            <InlineLink href={requirementsPath}>requisitos generales</InlineLink>, pero confirma la
            lista exacta con el operador y la pagaduría.
          </p>
        </ContentSection>

        <ContentSection title="Pagaduría, convenio y operador">
          <p>
            La pagaduría es quien realiza el pago del salario, honorarios o pensión y ejecuta el
            descuento autorizado. Antes de solicitar, confirma que puede operar la libranza con la
            entidad elegida, qué trámite exige y en qué orden procesa las autorizaciones. No
            presumimos que exista un convenio vigente entre un empleador o pagador y un proveedor.
          </p>
          <p>
            La ley exige al pagador verificar la inscripción del operador en RUNEOL. Esa inscripción
            no significa por sí sola que el operador sea vigilado por la Superintendencia
            Financiera: la autoridad aplicable depende de la naturaleza de la entidad.
          </p>
        </ContentSection>

        <ContentSection title="Límite legal del descuento y presupuesto real">
          <Callout variant="notice" title="La regla no equivale a capacidad de pago">
            Para libranzas descontadas de salario o pensión, la Ley 1527 establece que la persona no
            debe recibir menos del 50 % del neto de su salario o pensión después de los descuentos
            de ley. Ese límite no demuestra que la cuota restante sea sostenible.
          </Callout>
          <p>
            Calcula gastos esenciales, otras deudas y variaciones de ingreso. No extrapoles el 50 %
            a una regla universal de aprobación, a honorarios o a toda clase de descuento; pide a la
            pagaduría y al operador el cálculo aplicable a tu caso.
          </p>
        </ContentSection>

        <ContentSection title="Tasas, cargos y condiciones">
          <p>
            No existe una tasa única de libranza. Compara la tasa en un mismo periodo, plazo, valor
            de cuota, total previsto, seguros y cualquier cargo confirmado. La publicación
            estadística de la Superintendencia Financiera sirve para observar la modalidad, pero no
            sustituye la oferta individual.
          </p>
          <p>
            Revisa la guía de <InlineLink href={ratesPath}>tasas y costo total</InlineLink>. Si una
            condición no está publicada o documentada, mantenla como “No disponible” o “Consultar
            con el proveedor”.
          </p>
        </ContentSection>

        <ContentSection title="Libranza para pensionados">
          <p>
            Una persona pensionada puede estar dentro de la modalidad si existe autorización de
            descuento y se cumplen las condiciones legales, del operador y de la entidad pagadora.
            Esto no permite inventar edades máximas, pagadores admitidos, montos o convenios.
          </p>
          <p>
            La guía de <InlineLink href={pensionersPath}>créditos para pensionados</InlineLink>{" "}
            trata el perfil, documentación y riesgos propios de esa situación sin convertir la
            libranza en una aprobación automática.
          </p>
        </ContentSection>

        <ContentSection title="Qué ocurre si hay reportes crediticios">
          <p>
            El descuento por nómina o pensión puede cambiar el mecanismo de pago, pero no elimina el
            estudio ni obliga a ignorar la historia crediticia. Cada operador define sus criterios y
            no publicamos una regla universal para personas reportadas.
          </p>
          <p>
            Consulta la guía específica de{" "}
            <InlineLink href={reportedPath}>opciones para personas reportadas</InlineLink> antes de
            interpretar una publicidad como garantía de acceso.
          </p>
        </ContentSection>

        <ContentSection title="Diferencia frente a un préstamo personal ordinario">
          <p>
            En la libranza, la cuota se atiende mediante una autorización de descuento y la
            intervención de una pagaduría. En un crédito personal ordinario, el deudor suele pagar
            por débito, transferencia u otro canal pactado. Ambos requieren comparar costo total,
            plazo, mora, pago anticipado y consecuencias de cambios en el ingreso.
          </p>
        </ContentSection>

        <ContentSection title="Ventajas posibles y limitaciones">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-semibold text-foreground">Posibles ventajas</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Pago periódico integrado a la nómina, honorario o pensión.</li>
                <li>Menor riesgo de olvidar manualmente una fecha de cuota.</li>
                <li>Condiciones que pueden diferir de un crédito personal ordinario.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Limitaciones y riesgos</h3>
              <ul className="mt-2 list-disc space-y-2 pl-5">
                <li>Dependencia operativa de la pagaduría y del vínculo de pago.</li>
                <li>Menor dinero disponible antes de organizar otros gastos.</li>
                <li>La obligación continúa aunque cambie la situación laboral o el pagador.</li>
              </ul>
            </div>
          </div>
        </ContentSection>

        <ProductComparisonCta
          title="Qué comparar antes de aceptar una libranza"
          description="Compara solo opciones que identifiquen la modalidad, el operador, la pagaduría aplicable y las condiciones por escrito."
        />
      </ArticleLayout>
    </>
  );
}
