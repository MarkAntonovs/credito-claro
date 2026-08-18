import type { PageType } from "@/types/content";

export type FutureIndexability = "index" | "noindex";

export interface PublicRouteDefinition {
  path: string;
  label: string;
  pageType: PageType;
  navigation: {
    primary: boolean;
    footer: boolean;
  };
  futureIndexability: FutureIndexability;
}

function route(definition: PublicRouteDefinition): PublicRouteDefinition {
  return definition;
}

export const publicRoutes = {
  commercial: {
    home: route({
      path: "/",
      label: "Inicio",
      pageType: "commercial",
      navigation: { primary: false, footer: false },
      futureIndexability: "index",
    }),
    offers: route({
      path: "/ofertas-creditos.html",
      label: "Comparar",
      pageType: "commercial",
      navigation: { primary: true, footer: true },
      futureIndexability: "index",
    }),
    onlineCredit: route({
      path: "/creditos-online-colombia.html",
      label: "Créditos online",
      pageType: "pillar",
      navigation: { primary: true, footer: true },
      futureIndexability: "index",
    }),
  },
  verticals: {
    pensioners: route({
      path: "/prestamos-para-pensionados-colombia",
      label: "Pensionados",
      pageType: "pillar",
      navigation: { primary: false, footer: false },
      futureIndexability: "index",
    }),
    reportedCredit: route({
      path: "/prestamo-reportado-datacredito.html",
      label: "Reportados",
      pageType: "pillar",
      navigation: { primary: false, footer: false },
      futureIndexability: "index",
    }),
    independentWorkers: route({
      path: "/prestamos-para-independientes-colombia.html",
      label: "Independientes",
      pageType: "pillar",
      navigation: { primary: false, footer: false },
      futureIndexability: "index",
    }),
  },
  providers: {
    directory: route({
      path: "/prestamistas/",
      label: "Prestamistas",
      pageType: "provider",
      navigation: { primary: false, footer: true },
      futureIndexability: "index",
    }),
    profile: route({
      path: "/prestamistas/$slug/",
      label: "Perfil de prestamista",
      pageType: "provider",
      navigation: { primary: false, footer: false },
      futureIndexability: "index",
    }),
  },
  trust: {
    about: route({
      path: "/sobre-nosotros/",
      label: "Sobre nosotros",
      pageType: "trust",
      navigation: { primary: true, footer: true },
      futureIndexability: "index",
    }),
    methodology: route({
      path: "/metodologia/",
      label: "Metodología",
      pageType: "trust",
      navigation: { primary: true, footer: true },
      futureIndexability: "index",
    }),
    editorialPolicy: route({
      path: "/politica-editorial/",
      label: "Política editorial",
      pageType: "trust",
      navigation: { primary: false, footer: true },
      futureIndexability: "index",
    }),
    affiliateDisclosure: route({
      path: "/divulgacion-afiliados/",
      label: "Divulgación de afiliados",
      pageType: "trust",
      navigation: { primary: false, footer: true },
      futureIndexability: "index",
    }),
    responsibleBorrowing: route({
      path: "/prestamo-responsable/",
      label: "Préstamo responsable",
      pageType: "trust",
      navigation: { primary: false, footer: true },
      futureIndexability: "index",
    }),
  },
  legal: {
    contact: route({
      path: "/contacto.html",
      label: "Contacto",
      pageType: "utility",
      navigation: { primary: false, footer: true },
      futureIndexability: "noindex",
    }),
    privacy: route({
      path: "/politica-privacidad.html",
      label: "Privacidad",
      pageType: "legal",
      navigation: { primary: false, footer: true },
      futureIndexability: "noindex",
    }),
    terms: route({
      path: "/terminos.html",
      label: "Términos",
      pageType: "legal",
      navigation: { primary: false, footer: true },
      futureIndexability: "noindex",
    }),
  },
} as const;
