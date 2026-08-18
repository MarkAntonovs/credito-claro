import { createFileRoute } from "@tanstack/react-router";

import { ContentSection } from "@/components/layouts/page-shell";
import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { getFinalSeoRouteByName } from "@/data/seo/routes";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/no-puedo-pagar-prestamo-que-hacer.html",
  title: "No puedo pagar mi préstamo: pasos generales a considerar",
  description:
    "Orientación general ante una dificultad de pago: revisar el contrato, contactar al acreedor, pedir opciones por escrito y conservar registros.",
} as const;

const routeFor = (pageName: string) => {
  const route = getFinalSeoRouteByName(pageName);
  if (!route?.implemented) throw new Error("Missing implemented SEO route: " + pageName);
  return route.finalUrl;
};

export const Route = createFileRoute("/no-puedo-pagar-prestamo-que-hacer.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/no-puedo-pagar-prestamo-que-hacer")).article,
  component: NoPuedoPagarPrestamoQueHacerPage,
});

function NoPuedoPagarPrestamoQueHacerPage() {
  const article = Route.useLoaderData();
  return (
    <MigratedLegacyPage
      article={article}
      afterContent={
        <ContentSection title="Guías según la siguiente decisión">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <a
                className="font-medium text-foreground underline"
                href={routeFor("Acuerdo de pago de deuda")}
              >
                Negociar y documentar un acuerdo de pago
              </a>
              .
            </li>
            <li>
              <a
                className="font-medium text-foreground underline"
                href={routeFor("Refinanciar / reestructurar deuda")}
              >
                Comparar refinanciación y reestructuración
              </a>
              .
            </li>
            <li>
              <a
                className="font-medium text-foreground underline"
                href={routeFor("Insolvencia persona natural")}
              >
                Entender el régimen de insolvencia de persona natural
              </a>
              .
            </li>
            <li>
              <a
                className="font-medium text-foreground underline"
                href={routeFor("Embargo por deudas")}
              >
                Revisar qué significa un embargo por deudas
              </a>
              .
            </li>
          </ul>
        </ContentSection>
      }
    />
  );
}
