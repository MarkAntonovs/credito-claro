import { createFileRoute } from "@tanstack/react-router";

import { MigratedLegacyPage } from "@/components/migration/migrated-legacy-page";
import { createMigratedRouteMetadata } from "@/lib/migrated-route";

const metadata = {
  path: "/requisitos-credito-para-pensionados-colombia.html",
  title: "Requisitos para crédito de pensionados en Colombia: guía clara",
  description:
    "Revisa qué documentos y condiciones debes confirmar al solicitar crédito como pensionado, especialmente si el producto utiliza libranza.",
} as const;

export const Route = createFileRoute("/requisitos-credito-para-pensionados-colombia.html")({
  head: () => createMigratedRouteMetadata(metadata),
  loader: async () =>
    (await import("@/data/migration/articles/requisitos-credito-para-pensionados-colombia"))
      .article,
  component: RequisitosCreditoParaPensionadosColombiaPage,
});

function RequisitosCreditoParaPensionadosColombiaPage() {
  const article = Route.useLoaderData();
  return <MigratedLegacyPage article={article} />;
}
