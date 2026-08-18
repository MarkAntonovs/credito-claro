import { publicRoutes } from "./routes";

export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationGroup {
  title: string;
  items: NavigationItem[];
}

const available = (
  route: { label: string; path: string },
  label = route.label,
): NavigationItem => ({
  label,
  href: route.path,
});

const guideHub = { label: "Guías", path: "/mapa-sitio.html" } as const;
const onlineRequirements = {
  label: "Requisitos de crédito online",
  path: "/requisitos-credito-online-colombia.html",
} as const;
const interestRates = {
  label: "Tasas de interés",
  path: "/tasas-interes-creditos-colombia.html",
} as const;
const usuryRate = {
  label: "Tasa de usura",
  path: "/tasa-de-usura-colombia.html",
} as const;

export const primaryNavigation: NavigationItem[] = [
  available(publicRoutes.commercial.offers),
  available(publicRoutes.commercial.onlineCredit, "Tipos de crédito"),
  available(guideHub),
  available(publicRoutes.trust.methodology, "Cómo comparamos"),
  available(publicRoutes.trust.about, "Nosotros"),
];

export const footerNavigation: NavigationGroup[] = [
  {
    title: "Comparar",
    items: [
      available(publicRoutes.commercial.onlineCredit),
      available(publicRoutes.verticals.pensioners),
      available(publicRoutes.verticals.reportedCredit),
      available(publicRoutes.verticals.independentWorkers),
      available(publicRoutes.providers.directory),
    ],
  },
  {
    title: "Contenido",
    items: [
      available(guideHub),
      available(onlineRequirements),
      available(interestRates),
      available(usuryRate),
      available(publicRoutes.trust.responsibleBorrowing),
    ],
  },
  {
    title: "Transparencia",
    items: [
      available(publicRoutes.trust.methodology),
      available(publicRoutes.trust.editorialPolicy),
      available(publicRoutes.trust.affiliateDisclosure),
      available(publicRoutes.trust.about),
    ],
  },
  {
    title: "Legal",
    items: [
      available(publicRoutes.legal.privacy),
      available(publicRoutes.legal.terms),
      available(publicRoutes.legal.contact),
    ],
  },
];
