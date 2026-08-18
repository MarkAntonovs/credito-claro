export interface LanguagePair {
  esPath: string;
  enPath: string;
}

export const LANGUAGE_PAIRS = [
  { esPath: "/", enPath: "/en/" },
  { esPath: "/ofertas-creditos.html", enPath: "/en/loan-offers.html" },
  { esPath: "/creditos-online-colombia.html", enPath: "/en/online-loans-colombia.html" },
  {
    esPath: "/alternativas-prestamos-online.html",
    enPath: "/en/alternatives-to-online-loans.html",
  },
  {
    esPath: "/no-puedo-pagar-prestamo-que-hacer.html",
    enPath: "/en/cant-pay-loan-what-to-do.html",
  },
  {
    esPath: "/consultar-historial-crediticio-gratis.html",
    enPath: "/en/check-credit-history-free.html",
  },
  {
    esPath: "/peligros-gota-gota-colombia.html",
    enPath: "/en/dangers-of-loan-sharks-colombia.html",
  },
  {
    esPath: "/derechos-consumidor-financiero-colombia.html",
    enPath: "/en/financial-consumer-rights-colombia.html",
  },
  { esPath: "/prestamos-inmediatos-en-linea.html", enPath: "/en/instant-online-loans.html" },
  {
    esPath: "/simulador-credito-como-funciona.html",
    enPath: "/en/loan-simulator-how-it-works.html",
  },
  {
    esPath: "/prestamo-reportado-datacredito.html",
    enPath: "/en/loan-with-bad-credit-datacredito.html",
  },
  {
    esPath: "/prestamo-solo-con-cedula-colombia.html",
    enPath: "/en/loan-with-id-only-colombia.html",
  },
  {
    esPath: "/credito-sin-cuenta-bancaria-colombia.html",
    enPath: "/en/loan-without-bank-account-colombia.html",
  },
  {
    esPath: "/credito-sin-historial-crediticio.html",
    enPath: "/en/loan-without-credit-history.html",
  },
  {
    esPath: "/prestamos-para-pensionados-colombia.html",
    enPath: "/en/loans-for-retirees-colombia.html",
  },
  {
    esPath: "/prestamos-para-independientes-colombia.html",
    enPath: "/en/loans-for-self-employed-colombia.html",
  },
  { esPath: "/tasas-interes-prestamos-online.html", enPath: "/en/online-loan-interest-rates.html" },
  {
    esPath: "/requisitos-credito-online-colombia.html",
    enPath: "/en/online-loan-requirements-colombia.html",
  },
  {
    esPath: "/estafas-prestamos-online-colombia.html",
    enPath: "/en/online-loan-scams-colombia.html",
  },
  { esPath: "/credito-online-vs-banco.html", enPath: "/en/online-loan-vs-bank.html" },
  {
    esPath: "/prestamos-pequenos-montos-colombia.html",
    enPath: "/en/small-amount-loans-colombia.html",
  },
  { esPath: "/tasa-de-usura-colombia.html", enPath: "/en/usury-rate-colombia.html" },
  {
    esPath: "/verificar-empresa-prestamos-legitima.html",
    enPath: "/en/verify-legitimate-loan-company.html",
  },
  { esPath: "/que-es-estudio-de-credito.html", enPath: "/en/what-is-credit-study.html" },
  { esPath: "/contacto.html", enPath: "/en/contact.html" },
  { esPath: "/politica-privacidad.html", enPath: "/en/privacy-policy.html" },
  { esPath: "/terminos.html", enPath: "/en/terms.html" },
  { esPath: "/mapa-sitio.html", enPath: "/en/sitemap.html" },
] as const satisfies readonly LanguagePair[];

export function getLanguagePair(path: string): (typeof LANGUAGE_PAIRS)[number] | undefined {
  return LANGUAGE_PAIRS.find((pair) => pair.esPath === path || pair.enPath === path);
}
