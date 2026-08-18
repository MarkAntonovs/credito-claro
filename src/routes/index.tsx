import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, FileSearch, ShieldCheck, Tag } from "lucide-react";

import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { Container, Section, SectionHeading } from "@/components/site/section";
import { ProviderCard } from "@/components/site/provider-card";
import { AffiliateDisclosure } from "@/components/site/affiliate-disclosure";
import { CategoryNavigation } from "@/components/site/category-navigation";
import { GuideCard } from "@/components/site/guide-card";
import { LoanCalculator } from "@/components/site/loan-calculator";
import { ResponsibleBorrowingNotice } from "@/components/site/responsible-borrowing-notice";
import { Callout } from "@/components/site/primitives";
import { StructuredData } from "@/components/seo/structured-data";
import { siteConfig } from "@/config/site";
import { publicRoutes } from "@/config/routes";
import { HOMEPAGE_PROVIDERS } from "@/data/providers/providers";
import { createRouteMetadata } from "@/lib/seo";
import { createWebSiteStructuredData } from "@/lib/structured-data";
import {
  createOrganizationStructuredData,
  createWebPageStructuredData,
} from "@/lib/structured-data";
import { getFinalSeoRouteByName } from "@/data/seo/routes";

const routeDefinition = publicRoutes.commercial.home;
const seoRoute = (pageName: string) => {
  const route = getFinalSeoRouteByName(pageName);
  if (!route) throw new Error(`Missing final SEO route: ${pageName}`);
  return route.finalUrl;
};

export const Route = createFileRoute("/")({
  head: () =>
    createRouteMetadata({
      path: routeDefinition.path,
      robotsIntent: routeDefinition.futureIndexability,
    }),
  component: Home,
});

const TRUST = [
  {
    icon: FileSearch,
    title: "Proceso de verificación",
    text: "Las fichas publicadas muestran su fecha de revisión y conservan los datos no disponibles como desconocidos.",
  },
  {
    icon: ShieldCheck,
    title: "Fuentes identificables",
    text: "Las fichas indican las fuentes oficiales utilizadas y cuándo un dato no está disponible.",
  },
  {
    icon: Tag,
    title: "Publicidad identificada",
    text: "Algunos enlaces son de afiliados y pueden generar una comisión; se identifican de forma visible.",
  },
];

const CATEGORIES = [
  {
    title: "Libre inversión",
    situation: "Necesito financiar un proyecto o gasto general",
    description:
      "Cómo comparar un crédito personal sin destino específico por tasa, cargos, plazo, cuota y costo total.",
    href: seoRoute("Crédito de libre inversión"),
  },
  {
    title: "Libranza",
    situation: "Puedo pagar mediante nómina o pensión",
    description:
      "Cómo funciona el descuento directo, qué debe confirmar la pagaduría y qué riesgos revisar.",
    href: seoRoute("Crédito de libranza"),
  },
  {
    title: "Compra de cartera",
    situation: "Quiero trasladar o agrupar deudas",
    description:
      "Compara saldos, tasa, nuevo plazo, cuota y costo restante sin asumir un ahorro garantizado.",
    href: seoRoute("Compra de cartera"),
  },
  {
    title: "Créditos online",
    situation: "Quiero solicitar desde el celular",
    description:
      "Opciones que se solicitan por internet, con procesos digitales y requisitos publicados por cada proveedor.",
    href: publicRoutes.commercial.onlineCredit.path,
  },
  {
    title: "Pensionados",
    situation: "Recibo mesada pensional",
    description:
      "Condiciones, edades y descuentos por nómina que suelen aplicar a personas pensionadas en Colombia.",
    href: seoRoute("Préstamos para pensionados"),
  },
  {
    title: "Reportados / historial crediticio",
    situation: "Tengo reportes en centrales de riesgo",
    description:
      "Qué significa estar reportado, qué revisan las entidades y qué alternativas existen mientras mejoras tu historial.",
    href: seoRoute("Préstamos para reportados"),
  },
  {
    title: "Independientes",
    situation: "No tengo contrato laboral fijo",
    description:
      "Cómo se demuestran ingresos cuando trabajas por cuenta propia y qué documentos suelen pedir.",
    href: seoRoute("Préstamos para independientes"),
  },
];

const STEPS = [
  {
    title: "Revisamos información de proveedores",
    text: "Las fichas se contrastan con información publicada por cada entidad o servicio y registran su fecha de revisión.",
  },
  {
    title: "Organizamos las opciones",
    text: "Los datos verificados se presentarán en un mismo formato para facilitar su comparación.",
  },
  {
    title: "Tú confirmas con el proveedor",
    text: `Las condiciones finales dependen de tu perfil y las define el proveedor, no ${siteConfig.siteName}.`,
  },
];

const CHECKLIST = [
  {
    title: "Tasa y costo total",
    text: "Más allá de la tasa, revisa el costo total: administración, seguros y cualquier cargo adicional.",
  },
  {
    title: "Plazo",
    text: "Un plazo más largo baja la cuota, pero normalmente aumenta lo que pagas al final.",
  },
  {
    title: "Cuota",
    text: "Compara la cuota mensual con tus ingresos y gastos fijos reales, no con el mejor mes.",
  },
  {
    title: "Requisitos",
    text: "Edad, ingresos, documentos e historial: confirma que cumples antes de solicitar.",
  },
  {
    title: "Consecuencias de mora",
    text: "Intereses de mora, cobranza y reporte a centrales de riesgo. Pregunta qué pasa si te atrasas.",
  },
];

const GUIDES = [
  {
    kicker: "Conceptos",
    title: "Tasas de interés: cómo leerlas sin confundirte",
    excerpt:
      "Diferencia entre tasa nominal, efectiva anual y cuál debes comparar entre proveedores.",
    readTime: "Guía · 6 min",
    href: seoRoute("Tasas de interés de créditos"),
  },
  {
    kicker: "Regulación",
    title: "Tasa de usura: qué es y para qué sirve",
    excerpt: "Qué límite existe en Colombia, quién lo define y cómo usarlo como referencia.",
    readTime: "Guía · 5 min",
    href: seoRoute("Tasa de usura Colombia"),
  },
  {
    kicker: "Historial",
    title: "Historial crediticio y centrales de riesgo",
    excerpt: "Qué información se registra, cómo consultarla y qué puedes corregir.",
    readTime: "Guía · 7 min",
    href: seoRoute("Consultar historial crediticio gratis"),
  },
  {
    kicker: "Seguridad",
    title: "Cómo identificar estafas de préstamos",
    excerpt:
      "Señales frecuentes: pagos por adelantado, presión por WhatsApp y entidades sin registro.",
    readTime: "Guía · 5 min",
    href: seoRoute("Estafas de préstamos online"),
  },
  {
    kicker: "Derechos",
    title: "Derechos del consumidor financiero",
    excerpt: "Qué puedes exigir, dónde reclamar y qué información debe entregarte una entidad.",
    readTime: "Guía · 6 min",
    href: seoRoute("Derechos del consumidor financiero"),
  },
];

function Home() {
  return (
    <>
      <StructuredData
        data={[
          createWebSiteStructuredData({ name: siteConfig.siteName }),
          createOrganizationStructuredData({ name: siteConfig.siteName }),
          createWebPageStructuredData({
            name: siteConfig.defaultTitle,
            description: siteConfig.defaultDescription,
            path: routeDefinition.path,
            siteName: siteConfig.siteName,
          }),
        ]}
      />
      <div className="min-h-screen bg-background">
        <Header />

        <main id="contenido-principal">
          {/* HERO */}
          <section className="border-b border-border">
            <Container>
              <div className="grid gap-10 py-12 sm:py-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-start lg:gap-16 lg:py-20">
                <div className="max-w-2xl">
                  <p className="eyebrow text-accent-soft-foreground">
                    Comparador independiente · Colombia
                  </p>
                  <h1 className="mt-3 text-balance text-3xl leading-[1.1] sm:text-4xl lg:text-[3.25rem]">
                    Compara opciones de crédito en Colombia
                  </h1>
                  <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-muted-foreground">
                    Reúne en un mismo lugar proveedores, requisitos, montos y condiciones relevantes
                    para que puedas revisarlos con calma antes de decidir a quién solicitar.
                  </p>
                  <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={publicRoutes.commercial.offers.path}
                      className="inline-flex min-h-12 items-center justify-center rounded-md bg-primary px-6 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Comparar opciones
                    </a>
                    <a
                      href={publicRoutes.trust.methodology.path}
                      className="inline-flex min-h-12 items-center justify-center rounded-md border border-border-strong px-6 text-sm font-medium transition-colors hover:bg-surface"
                    >
                      Cómo funciona
                    </a>
                  </div>
                </div>

                <div className="lg:pt-14">
                  <Callout
                    variant="accent"
                    title={`${siteConfig.siteName} no es una entidad financiera`}
                  >
                    No otorgamos créditos ni aprobamos solicitudes. Publicamos información para
                    comparar; la decisión y las condiciones finales las define cada proveedor.
                  </Callout>
                </div>
              </div>
            </Container>
          </section>

          {/* TRUST STRIP */}
          <section aria-label="Cómo trabajamos la información" className="bg-surface">
            <Container>
              <ul className="grid gap-6 py-8 sm:grid-cols-3 sm:gap-10">
                {TRUST.map((item) => (
                  <li key={item.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
                    <item.icon aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Container>
          </section>

          <Section id="calculadora" labelledBy="calculadora-title" tone="surface">
            <SectionHeading
              id="calculadora-title"
              eyebrow="Estimación"
              title="Calcula una cuota antes de comparar"
              description="Prueba monto, tasa y plazo con supuestos visibles. El resultado orienta; no reemplaza la oferta ni incluye cargos que no hayas confirmado."
            />
            <div className="mt-8">
              <LoanCalculator compact />
            </div>
            <a
              href={seoRoute("Simulador y calculadora de crédito")}
              className="mt-5 inline-flex min-h-11 items-center rounded-md border border-primary px-4 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Abrir el simulador completo
            </a>
          </Section>

          {/* CATEGORIES */}
          <Section id="categorias" labelledBy="categorias-title">
            <SectionHeading
              id="categorias-title"
              eyebrow="Por situación"
              title="Encuentra información según tu situación"
              description="Cada perfil enfrenta requisitos distintos. Empieza por el que se parezca al tuyo."
            />
            <CategoryNavigation categories={CATEGORIES} />
          </Section>

          {/* COMPARISON PREVIEW */}
          <Section id="comparar" tone="surface" labelledBy="comparar-title">
            <SectionHeading
              id="comparar-title"
              eyebrow="Perfiles verificados"
              title="Proveedores y servicios documentados"
              description="Una selección equilibrada de proveedores directos y servicios de intermediación. No es un ranking ni una recomendación."
            />

            <div className="mt-8 grid items-start gap-4 lg:grid-cols-3">
              {HOMEPAGE_PROVIDERS.map((provider) => (
                <ProviderCard key={provider.id} provider={provider} />
              ))}
            </div>

            <div className="mt-6">
              <AffiliateDisclosure />
            </div>
            <div className="mt-6">
              <a
                href={publicRoutes.commercial.offers.path}
                className="inline-flex min-h-11 items-center rounded-md border border-primary px-4 text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Ver todas las opciones
              </a>
              <a
                href={seoRoute("Directorio de prestamistas")}
                className="ml-3 inline-flex min-h-11 items-center rounded-md px-4 text-sm font-medium underline decoration-border-strong underline-offset-4"
              >
                Investigar prestamistas
              </a>
            </div>
          </Section>

          {/* HOW IT WORKS */}
          <Section id="como-comparamos" labelledBy="como-title">
            <SectionHeading id="como-title" eyebrow="Método" title="Cómo funciona la comparación" />
            <ol className="mt-8 grid gap-8 md:grid-cols-3">
              {STEPS.map((step, i) => (
                <li key={step.title} className="border-t-2 border-primary pt-4">
                  <span className="num eyebrow text-muted-foreground">0{i + 1}</span>
                  <h3 className="mt-2 text-lg leading-snug">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </li>
              ))}
            </ol>
          </Section>

          {/* CHECKLIST */}
          <Section labelledBy="revisar-title" tone="surface">
            <SectionHeading
              id="revisar-title"
              eyebrow="Antes de solicitar"
              title="Qué revisar antes de solicitar un crédito"
            />
            <ul className="mt-8 grid gap-x-10 gap-y-6 md:grid-cols-2">
              {CHECKLIST.map((item) => (
                <li
                  key={item.title}
                  className="grid grid-cols-[auto_minmax(0,1fr)] gap-3 border-t border-border pt-4"
                >
                  <CheckCircle2 aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-accent" />
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {item.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          {/* RESPONSIBLE BORROWING */}
          <Section>
            <ResponsibleBorrowingNotice />
          </Section>

          {/* GUIDES */}
          <Section id="guias" labelledBy="guias-title" tone="surface">
            <SectionHeading
              id="guias-title"
              eyebrow="Contenido editorial"
              title="Guías para entender el crédito en Colombia"
              description="Artículos explicativos, sin recomendaciones de producto."
            />
            <div className="mt-8 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
              {GUIDES.map((guide) => (
                <GuideCard key={guide.title} guide={guide} />
              ))}
            </div>
          </Section>

          {/* METHODOLOGY */}
          <Section id="metodologia" tone="ink" labelledBy="metodologia-title">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
              <div>
                <p className="eyebrow text-primary-foreground/60">Transparencia editorial</p>
                <h2 id="metodologia-title" className="mt-3 text-2xl text-balance sm:text-3xl">
                  Cómo verificamos la información y de dónde vienen nuestros ingresos
                </h2>
                <div className="mt-6 flex flex-wrap gap-3">
                  {[
                    publicRoutes.trust.methodology,
                    publicRoutes.trust.editorialPolicy,
                    publicRoutes.trust.affiliateDisclosure,
                  ].map((link) => (
                    <a
                      key={link.path}
                      href={link.path}
                      className="inline-flex min-h-11 items-center rounded-md border border-primary-foreground/30 px-4 text-sm font-medium transition-colors hover:bg-primary-foreground hover:text-primary"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
              <ul className="space-y-4 text-[0.975rem] leading-relaxed text-primary-foreground/80">
                {[
                  "Verificamos la información publicada utilizando fuentes oficiales del proveedor y, cuando corresponde, fuentes públicas.",
                  "Mostramos la fecha de revisión de cada ficha y dejamos como no disponible lo que no podemos confirmar.",
                  "Las condiciones definitivas siempre debes confirmarlas directamente con el proveedor.",
                  "Algunos enlaces son de afiliados y pueden generar una comisión para CreditoColombia.co; se indican junto al enlace correspondiente.",
                  `Recibir compensación no convierte a ${siteConfig.siteName} en prestamista ni en intermediario de tu solicitud.`,
                ].map((text) => (
                  <li key={text} className="border-t border-primary-foreground/15 pt-4">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </Section>
        </main>

        <Footer />
      </div>
    </>
  );
}
