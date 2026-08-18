import worker from "../.output/server/index.mjs";
import { AFFILIATE_LINKS } from "../src/data/providers/affiliate-links.ts";
import { OFFER_EDITORIAL_METADATA } from "../src/data/providers/offer-editorial-metadata.ts";
import { VERIFIED_PROVIDERS } from "../src/data/providers/providers.ts";
import { IMPLEMENTED_FINAL_ROUTES, INDEXABLE_ROUTES } from "../src/config/indexability.ts";
import { LANGUAGE_PAIRS } from "../src/config/language-pairs.ts";
import {
  DIRECTORY_NORMALIZATION_REDIRECTS,
  FINAL_MIGRATION_REDIRECTS,
  LEGACY_REDIRECTS,
  REDIRECT_RULES,
} from "../src/config/redirects.ts";
import { siteConfig } from "../src/config/site.ts";
import {
  FINAL_SEO_ROUTES,
  MERGED_SEO_INTENTS,
  PREPARED_CONDITIONAL_MIGRATIONS,
  resolveFinalCanonicalPath,
} from "../src/data/seo/routes.ts";
import { canonicalUrl } from "../src/lib/seo.ts";

const executionContext = { waitUntil() {} };

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

async function request(pathOrUrl) {
  const url = pathOrUrl.startsWith("http") ? pathOrUrl : `http://seo-validation.local${pathOrUrl}`;
  return worker.fetch(new Request(url), {}, executionContext);
}

function linkTags(html) {
  return html.match(/<link\s[^>]*>/gi) ?? [];
}

function metaTags(html) {
  return html.match(/<meta\s[^>]*>/gi) ?? [];
}

function anchorTags(html) {
  return html.match(/<a\s[^>]*>/gi) ?? [];
}

function attribute(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}=["']([^"']+)["']`, "i"));
  return match?.[1];
}

function structuredDataBlocks(html) {
  return [
    ...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi),
  ].map((match) => JSON.parse(match[1]));
}

function elementText(html, tagName) {
  const match = html.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)<\\/${tagName}>`, "i"));
  return stripTags(match?.[1] ?? "");
}

function stripTags(value) {
  return value
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function duplicateValues(records) {
  const pathsByValue = new Map();
  for (const { path, value } of records) {
    const normalized = value.toLocaleLowerCase().replace(/\s+/g, " ").trim();
    const paths = pathsByValue.get(normalized) ?? [];
    paths.push(path);
    pathsByValue.set(normalized, paths);
  }
  return [...pathsByValue.entries()]
    .filter(([value, paths]) => value && paths.length > 1)
    .map(([value, paths]) => ({ value, paths }));
}

function canonicalTags(html) {
  return linkTags(html).filter((tag) => attribute(tag, "rel")?.toLowerCase() === "canonical");
}

function robotsMeta(html) {
  return metaTags(html)
    .filter((tag) => attribute(tag, "name")?.toLowerCase() === "robots")
    .map((tag) => attribute(tag, "content"))
    .find(Boolean);
}

function internalHrefs(html) {
  return anchorTags(html)
    .map((tag) => attribute(tag, "href"))
    .filter((href) => href?.startsWith("/"))
    .map((href) => new URL(href, "https://internal.invalid").pathname);
}

async function validateRegistry() {
  assert(FINAL_SEO_ROUTES.length === 41, "Final route registry must contain 41 standalone pages");
  assert(MERGED_SEO_INTENTS.length === 7, "Merged-intent registry must contain 7 entries");
  assert(
    new Set(FINAL_SEO_ROUTES.map((route) => route.finalUrl)).size === FINAL_SEO_ROUTES.length,
    "Final route registry contains duplicate URLs",
  );
  assert(
    FINAL_SEO_ROUTES.filter((route) => route.implementationState === "planned").length === 0,
    "Planned route count no longer matches the current implementation boundary",
  );
  assert(
    FINAL_SEO_ROUTES.filter((route) => route.implementationState === "conditional").length === 0,
    "Conditional route count no longer matches the source of truth",
  );
  const doneRoutes = FINAL_SEO_ROUTES.filter((route) => route.status === "DONE");
  assert(doneRoutes.length === 41, "Expected 41 DONE routes, found " + doneRoutes.length);
  assert(
    doneRoutes.every((route) => route.implemented),
    "Every DONE route must be implemented",
  );
  for (const intent of MERGED_SEO_INTENTS) {
    assert(intent.createStandalone === false, `${intent.pageName} can become standalone`);
    assert(
      FINAL_SEO_ROUTES.some((route) => route.finalUrl === intent.targetUrl),
      `${intent.pageName} has an unknown merge target`,
    );
  }
}

function validateOfferData() {
  const expectedAffiliateUrls = new Map([
    ["credito365", "https://go.goodaff.eu/credito365.co/9is4591jin"],
    ["crezu", "https://go.goodaff.eu/crezu.co/9is4591jin"],
    ["finteres", "https://go.goodaff.eu/finteres.co/9is4591jin"],
    ["raplo", "https://go.goodaff.eu/raplo.co/9is4591jin"],
    ["soscredit", "https://go.goodaff.eu/soscredit.co/9is4591jin"],
    ["binixo", "https://murtov.com/2cbu"],
    ["solcredito", "https://murtov.com/8cbu"],
    ["credy", "https://murtov.com/Zcbu"],
    ["zaimoo", "https://murtov.com/Xcbu"],
    ["lineru", "https://murtov.com/Fcbu"],
    ["doctor-peso", "https://murtov.com/acbu"],
    ["rayo", "https://murtov.com/0cbu"],
    ["odiru", "https://murtov.com/Ecbu"],
    ["creditify", "https://murtov.com/ocbu"],
    ["finpug", "https://murtov.com/pcbu"],
    ["nice-credit", "https://murtov.com/ccbu"],
  ]);

  assert(
    VERIFIED_PROVIDERS.length === 16,
    `Expected 16 offers, found ${VERIFIED_PROVIDERS.length}`,
  );
  assert(
    AFFILIATE_LINKS.length === 16,
    `Expected 16 affiliate links, found ${AFFILIATE_LINKS.length}`,
  );
  assert(
    new Set(VERIFIED_PROVIDERS.map((provider) => provider.id)).size === 16,
    "Duplicate provider IDs",
  );
  assert(
    new Set(VERIFIED_PROVIDERS.map((provider) => provider.slug)).size === 16,
    "Duplicate provider slugs",
  );
  assert(
    new Set(AFFILIATE_LINKS.map((record) => record.affiliateUrl)).size === 16,
    "Duplicate affiliate URLs",
  );

  for (const provider of VERIFIED_PROVIDERS) {
    assert(
      OFFER_EDITORIAL_METADATA[provider.slug]?.source === "user_provided_offer_master",
      `${provider.slug} lacks offer provenance`,
    );
    const link = AFFILIATE_LINKS.find((record) => record.providerSlug === provider.slug);
    assert(link, `${provider.slug} lacks an affiliate link`);
    assert(
      link.affiliateUrl === expectedAffiliateUrls.get(provider.slug),
      `${provider.slug} has the wrong affiliate URL`,
    );
    const publicFields = JSON.stringify({
      name: provider.name,
      productType: provider.productType,
      slogan: provider.slogan,
      benefits: provider.benefits,
      requirements: provider.requirements,
      caution: provider.cardCaution,
      eligibility: provider.eligibilityNotes,
    });
    assert(
      !/PHP|Philippines|Filipinas/i.test(publicFields),
      `${provider.slug} contains foreign-market contamination`,
    );
  }

  const creditnice = VERIFIED_PROVIDERS.find((provider) => provider.slug === "nice-credit");
  assert(creditnice?.providerType === "broker", "Creditnice must remain classified as a broker");
  assert(!creditnice.logo, "Creditnice must use the neutral provider fallback");
  assert(!creditnice.legalEntity && !creditnice.nit, "Creditnice has unsupported legal claims");

  return { offers: VERIFIED_PROVIDERS.length, affiliateLinks: AFFILIATE_LINKS.length };
}

async function validateOfferPresentation() {
  const response = await request("/ofertas-creditos.html");
  assert(response.status === 200, "Offer comparison did not render");
  const html = await response.text();
  const cardCount = (html.match(/data-provider-card(?:=|\s|>)/g) ?? []).length;
  assert(cardCount === 16, `Expected 16 rendered offer cards, found ${cardCount}`);
  assert(
    html.includes("Servicio con rol no confirmado"),
    "Neutral service classification is missing",
  );
  assert(!html.includes("user_provided_offer_master"), "Internal offer provenance leaked into UI");
  assert(!html.includes("Conflict Flag"), "Internal conflict metadata leaked into UI");
  for (const record of AFFILIATE_LINKS) {
    assert(
      html.includes(record.affiliateUrl),
      `${record.providerSlug} CTA is missing from offer cards`,
    );
  }
  for (const slug of [
    "raplo",
    "binixo",
    "solcredito",
    "credy",
    "zaimoo",
    "creditify",
    "nice-credit",
  ]) {
    assert(!html.includes(`/proveedores/${slug}/`), `${slug} received an unapproved profile link`);
  }
  return { renderedCards: cardCount, neutralFallbackLogos: 7 };
}

async function validateP1ContentBatch() {
  const checks = new Map([
    ["/", ["Calcula una cuota antes de comparar", "Proveedores y servicios documentados"]],
    ["/ofertas-creditos.html", ["data-comparison-workspace", "Rango mostrado"]],
    [
      "/creditos-online-colombia.html",
      ["Solicitud, aprobación y desembolso", "Datacrédito e historia crediticia"],
    ],
    [
      "/prestamos-rapidos-inmediatos-colombia.html",
      ["Etapas que no deben confundirse", "Requisitos, montos y tiempos"],
    ],
    [
      "/prestamos-para-pensionados-colombia",
      ["Cuando se ofrece libranza", "Historia crediticia, comparación"],
    ],
    [
      "/prestamo-reportado-datacredito.html",
      ["Opciones realistas según la situación", "pagos anticipados"],
    ],
    [
      "/consultar-historial-crediticio-gratis.html",
      ["TransUnion", "Cómo interpretar y revisar posibles errores"],
    ],
    [
      "/historial-crediticio-datacredito-colombia.html",
      ["Cuánto dura un reporte en Datacrédito", "Mora pagada u obligación extinguida"],
    ],
    [
      "/puntaje-crediticio-colombia.html",
      ["No hay un umbral universal de aprobación", "Cómo mejorar el historial y el puntaje"],
    ],
    [
      "/credito-libre-inversion-colombia.html",
      ["Montos y plazos dependen del proveedor", "Monto del crédito (COP)"],
    ],
    [
      "/credito-libranza-colombia.html",
      ["Pagaduría, convenio y operador", "no debe recibir menos del 50 %"],
    ],
    [
      "/compra-de-cartera-colombia.html",
      ["No es una calculadora de refinanciación", "Monto del crédito (COP)"],
    ],
    [
      "/tasas-interes-creditos-colombia.html",
      ["La tasa anunciada no es todo el costo", "simulador de crédito"],
    ],
    [
      "/tasa-de-usura-colombia.html",
      ["Ejemplo fechado: agosto de 2026", "Superintendencia Financiera"],
    ],
    [
      "/simulador-credito-colombia.html",
      ["Monto del crédito (COP)", "Vista previa de amortización"],
    ],
    ["/prestamistas/", ["Buscar y filtrar el directorio", "Fuentes consultadas"]],
  ]);

  for (const [path, requiredText] of checks) {
    const response = await request(path);
    assert(response.status === 200, `${path} failed P1 content validation`);
    const html = await response.text();
    for (const text of requiredText) {
      assert(html.includes(text), `${path} lacks required P1 content marker: ${text}`);
    }
  }
  return checks.size;
}

async function validateNonP1ContentBatch() {
  const checks = new Map([
    ["/prestamos-bajo-monto-colombia.html", ["modalidad regulada", "106 UVT"]],
    [
      "/prestamos-para-independientes-colombia.html",
      ["RUT, extractos y declaración", "Dónde comparar"],
    ],
    ["/credito-sin-historial-crediticio.html", ["Opciones que puede comparar", "codeudor"]],
    [
      "/requisitos-credito-online-colombia.html",
      ["Documentos y comprobaciones", "Casos que requieren"],
    ],
    ["/prestamo-solo-con-cedula-colombia.html", ["Quién puede presentar", "Límites reales"]],
    ["/credito-sin-cuenta-bancaria-colombia.html", ["billetera o efectivo", "Cómo se pagará"]],
    [
      "/estudio-de-credito-colombia.html",
      ["Historia, puntaje e identidad", "Si la solicitud es rechazada"],
    ],
    ["/no-puedo-pagar-prestamo-que-hacer.html", ["Mora, intereses y cobranza", "insolvencia"]],
    [
      "/estafas-prestamos-online-colombia.html",
      ["Aplicaciones y sitios falsos", "Qué hacer si ya entregó"],
    ],
    ["/verificar-prestamista-legal-colombia.html", ["Contraste razón social y NIT", "RUES"]],
    ["/gota-a-gota-colombia.html", ["también puede operar mediante aplicaciones", "línea 165"]],
    [
      "/derechos-consumidor-financiero-colombia.html",
      ["Trato justo, contrato y datos", "Defensor del Consumidor"],
    ],
    ["/credito-online-vs-banco.html", ["Comparación por producto", "Cuándo puede encajar"]],
    [
      "/alternativas-prestamos-online.html",
      ["Bancos, cooperativas y fondos", "Empleador, familia"],
    ],
  ]);

  for (const [path, requiredText] of checks) {
    const response = await request(path);
    assert(response.status === 200, `${path} failed non-P1 content validation`);
    const html = await response.text();
    for (const text of requiredText) {
      assert(html.includes(text), `${path} lacks required non-P1 content marker: ${text}`);
    }
  }
  return checks.size;
}

async function validateDebtLegalCluster() {
  const checks = new Map([
    [
      "/acuerdo-pago-deuda-colombia.html",
      ["Checklist del acuerdo escrito", "no produce eliminación automática"],
    ],
    [
      "/refinanciar-reestructurar-deuda.html",
      ["Cuatro opciones que no deben confundirse", "Cuota menor no significa deuda más barata"],
    ],
    [
      "/insolvencia-persona-natural-colombia.html",
      ["Ley 2445 de 2025", "Información general, no asesoría jurídica"],
    ],
    [
      "/embargo-por-deudas-colombia.html",
      ["Embargo, secuestro y remate no son lo mismo", "Información general, no defensa jurídica"],
    ],
  ]);

  for (const [path, requiredText] of checks) {
    const response = await request(path);
    assert(response.status === 200, `${path} failed debt/legal content validation`);
    const html = await response.text();
    for (const text of requiredText) {
      assert(html.includes(text), `${path} lacks required debt/legal marker: ${text}`);
    }
  }
  return checks.size;
}

async function validateFinalProductToolBatch() {
  const checks = new Map([
    [
      "/apps-prestamos-colombia.html",
      ["Permisos, privacidad y tratamiento de datos", "anticipos, suplantación y cobro abusivo"],
    ],
    [
      "/microcreditos-colombia.html",
      ["Microcrédito no es crédito de consumo de bajo monto", "Uso productivo y capacidad de pago"],
    ],
    [
      "/prestamos-sin-codeudor-colombia.html",
      ["sin codeudor no exige", "nunca significa aprobación sin controles"],
    ],
    [
      "/tabla-amortizacion-credito.html",
      ["Tabla de amortización completa", "Abonos a capital y pago anticipado"],
    ],
  ]);

  for (const [path, requiredText] of checks) {
    const response = await request(path);
    assert(response.status === 200, `${path} failed final product/tool content validation`);
    const html = await response.text();
    for (const text of requiredText) {
      assert(html.includes(text), `${path} lacks required final batch marker: ${text}`);
    }
  }
  return checks.size;
}

async function validateActivatedProviderProfiles() {
  const profiles = [
    ["lineru", ["Requisitos y proceso", "Límites y alternativas"]],
    ["doctor-peso", ["Pagos y costos", "No disponible"]],
    ["finteres", ["Servicio de intermediación", "no otorga el crédito directamente"]],
  ];

  const directoryResponse = await request("/prestamistas/");
  assert(directoryResponse.status === 200, "Provider directory failed profile-link validation");
  const directoryHtml = await directoryResponse.text();

  for (const [slug, requiredText] of profiles) {
    const path = `/prestamistas/${slug}/`;
    assert(directoryHtml.includes(`href="${path}"`), `${path} is not linked from the directory`);
    const response = await request(path);
    assert(response.status === 200, `${path} failed activated-profile validation`);
    const html = await response.text();
    assert(
      html.includes("Sitio de comparación independiente"),
      `${path} lacks independent-site disclosure`,
    );
    assert(html.includes("Algunos enlaces son de afiliados"), `${path} lacks affiliate disclosure`);
    for (const text of requiredText) {
      assert(html.includes(text), `${path} lacks activated-profile marker: ${text}`);
    }
  }

  return profiles.length;
}

async function validateRedirects() {
  const sources = new Set(REDIRECT_RULES.map((rule) => rule.source));
  for (const rule of REDIRECT_RULES) {
    assert(!sources.has(rule.destination), `${rule.source} begins a redirect chain`);
    const response = await request(`${rule.source}?validation=1`);
    assert(response.status === 301, `${rule.source} returned ${response.status}, expected 301`);
    assert(
      response.headers.get("location") === `${rule.destination}?validation=1`,
      `${rule.source} does not preserve its query string or has the wrong destination`,
    );

    const destination = await request(rule.destination);
    assert(destination.status === 200, `${rule.destination} returned ${destination.status}`);
    assert(!destination.headers.get("location"), `${rule.destination} redirects again`);
    const destinationHtml = await destination.text();
    const canonicals = canonicalTags(destinationHtml);
    assert(canonicals.length === 1, `${rule.destination} has ${canonicals.length} canonicals`);
    assert(
      attribute(canonicals[0], "href") === canonicalUrl(rule.destination),
      `${rule.destination} is not self-canonical`,
    );
  }

  for (const migration of PREPARED_CONDITIONAL_MIGRATIONS) {
    const source = await request(migration.source);
    assert(source.status === 200, `${migration.source} was activated without verification`);
    assert(!source.headers.get("location"), `${migration.source} conditionally redirects`);
    const destination = await request(migration.destination);
    assert(destination.status === 200, `${migration.destination} routing support is missing`);
    assert(
      robotsMeta(await destination.text())?.startsWith("noindex"),
      `${migration.destination} is indexable before relevance verification`,
    );
  }
}

async function validateSitemapAndRobots() {
  const sitemapResponse = await request("/sitemap.xml");
  assert(sitemapResponse.status === 200, `Sitemap returned ${sitemapResponse.status}`);
  assert(
    sitemapResponse.headers.get("content-type")?.includes("xml"),
    "Sitemap Content-Type is not XML-compatible",
  );
  const xml = await sitemapResponse.text();
  const locations = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  const expectedRoutes = siteConfig.indexingEnabled ? INDEXABLE_ROUTES : [];
  assert(locations.length === expectedRoutes.length, "Sitemap does not match environment state");
  assert(new Set(locations).size === locations.length, "Sitemap contains duplicate URLs");

  const redirectSources = new Set(REDIRECT_RULES.map((rule) => canonicalUrl(rule.source)));
  for (const route of expectedRoutes) {
    const expectedUrl = canonicalUrl(route.path);
    assert(locations.includes(expectedUrl), `${route.path} is missing from the sitemap`);
    assert(!redirectSources.has(expectedUrl), `${route.path} is a redirect source in the sitemap`);
    const response = await request(route.path);
    assert(response.status === 200, `${route.path} returned ${response.status}`);
    assert(!response.headers.get("location"), `${route.path} redirects from the sitemap`);
    const html = await response.text();
    const canonicals = canonicalTags(html);
    assert(canonicals.length === 1, `${route.path} has ${canonicals.length} canonicals`);
    assert(
      attribute(canonicals[0], "href") === expectedUrl,
      `${route.path} sitemap URL does not self-canonical`,
    );
    assert(robotsMeta(html) === "index, follow", `${route.path} is blocked while in sitemap`);
  }

  for (const location of locations) {
    assert(!redirectSources.has(location), `${location} is a redirected sitemap URL`);
  }

  const robotsResponse = await request("/robots.txt");
  assert(robotsResponse.status === 200, "robots.txt did not return 200");
  const robots = await robotsResponse.text();
  if (siteConfig.indexingEnabled) {
    assert(robots.includes("Allow: /"), "Production robots.txt does not allow crawling");
    assert(robots.includes(canonicalUrl("/sitemap.xml")), "Production robots.txt omits sitemap");
  } else {
    assert(robots === "User-agent: *\nDisallow: /\n", "Protected environment allows crawling");
    assert(locations.length === 0, "Protected environment publishes sitemap URLs");
  }
  return {
    sitemapUrls: locations.length,
    robotsMode: siteConfig.indexingEnabled ? "allow" : "block",
  };
}

async function validateImplementedFinalPages() {
  const redirectSources = new Set(REDIRECT_RULES.map((rule) => rule.source));
  const plannedPaths = new Set(
    FINAL_SEO_ROUTES.filter((route) => !route.implemented).map((route) => route.finalUrl),
  );
  const affiliateUrls = new Set(AFFILIATE_LINKS.map((record) => record.affiliateUrl));
  const titles = [];
  const descriptions = [];
  const headings = [];
  const inbound = new Map();
  let webPageCount = 0;
  let breadcrumbCount = 0;
  let articleCount = 0;
  let sponsoredLinkCount = 0;

  for (const route of IMPLEMENTED_FINAL_ROUTES) {
    const response = await request(route.path);
    assert(response.status === 200, `${route.path} returned ${response.status}`);
    assert(!response.headers.get("location"), `${route.path} is implemented as a redirect`);
    const html = await response.text();

    const canonicals = canonicalTags(html);
    assert(
      canonicals.length === 1,
      `${route.path} has ${canonicals.length} canonical declarations`,
    );
    const canonical = attribute(canonicals[0], "href");
    assert(
      canonical === canonicalUrl(route.path),
      `${route.path} has wrong canonical ${canonical}`,
    );
    assert(
      canonical?.startsWith("https://creditocolombia.co/"),
      `${route.path} canonical is not production`,
    );
    assert(
      !/localhost|127\.0\.0\.1|preview|lovable/i.test(canonical),
      `${route.path} leaks a preview canonical`,
    );

    const expectedRobots =
      siteConfig.indexingEnabled && route.indexability === "index"
        ? "index, follow"
        : "noindex, nofollow, noarchive";
    assert(robotsMeta(html) === expectedRobots, `${route.path} has wrong robots metadata`);

    const title = elementText(html, "title");
    const description = metaTags(html)
      .filter((tag) => attribute(tag, "name")?.toLowerCase() === "description")
      .map((tag) => attribute(tag, "content"))
      .find(Boolean);
    const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;
    const h1 = elementText(html, "h1");
    assert(title, `${route.path} has no title`);
    assert(description, `${route.path} has no meta description`);
    assert(h1Count === 1, `${route.path} rendered ${h1Count} H1 elements`);
    titles.push({ path: route.path, value: title });
    descriptions.push({ path: route.path, value: description });
    headings.push({ path: route.path, value: h1 });

    const blocks = structuredDataBlocks(html);
    const serialized = blocks.map((block) => JSON.stringify(block));
    assert(new Set(serialized).size === serialized.length, `${route.path} has duplicate JSON-LD`);
    assert(
      !serialized.some(
        (block) =>
          block.includes('"@type":"Review"') || block.includes('"@type":"AggregateRating"'),
      ),
      `${route.path} contains prohibited review/rating schema`,
    );
    const webPage = blocks.find((block) => block["@type"] === "WebPage");
    assert(webPage, `${route.path} has no WebPage schema`);
    assert(webPage.url === canonicalUrl(route.path), `${route.path} WebPage URL is wrong`);
    webPageCount += 1;

    const article = blocks.find((block) => block["@type"] === "Article");
    if (article) {
      articleCount += 1;
      assert(article.url === canonicalUrl(route.path), `${route.path} Article URL is wrong`);
    }
    const breadcrumb = blocks.find((block) => block["@type"] === "BreadcrumbList");
    if (route.path === "/") {
      assert(!breadcrumb, "Homepage must not render a fake breadcrumb trail");
      assert(
        blocks.some((block) => block["@type"] === "WebSite"),
        "Homepage lacks WebSite schema",
      );
      assert(
        blocks.some((block) => block["@type"] === "Organization"),
        "Homepage lacks Organization schema",
      );
    } else {
      assert(breadcrumb, `${route.path} has no BreadcrumbList schema`);
      breadcrumbCount += 1;
      const visibleBreadcrumb = html.match(
        /<nav[^>]*aria-label=["']Ruta de navegación["'][^>]*>([\s\S]*?)<\/nav>/i,
      );
      const visibleText = stripTags(visibleBreadcrumb?.[1] ?? "");
      for (const item of breadcrumb.itemListElement) {
        assert(
          visibleText.includes(item.name),
          `${route.path} breadcrumb JSON-LD differs from visible trail`,
        );
        const crumbResponse = await request(item.item);
        assert(
          crumbResponse.status === 200,
          `${route.path} breadcrumb points to non-200 ${item.item}`,
        );
        assert(
          !crumbResponse.headers.get("location"),
          `${route.path} breadcrumb points through redirect`,
        );
      }
    }

    const anchors = anchorTags(html);
    for (const anchor of anchors) {
      const href = attribute(anchor, "href");
      if (!href) continue;
      if (affiliateUrls.has(href)) {
        const rel = attribute(anchor, "rel")?.split(/\s+/) ?? [];
        assert(rel.includes("sponsored"), `${route.path} has affiliate link without rel=sponsored`);
        sponsoredLinkCount += 1;
      }
    }

    const finalRoute = FINAL_SEO_ROUTES.find((candidate) => candidate.finalUrl === route.path);
    if (finalRoute?.pageType.startsWith("Commercial comparison")) {
      assert(
        html.includes("Algunos enlaces son de afiliados"),
        `${route.path} is commercial but lacks affiliate disclosure`,
      );
    }

    for (const href of new Set(internalHrefs(html))) {
      assert(!redirectSources.has(href), `${route.path} links through redirect source ${href}`);
      assert(!plannedPaths.has(href), `${route.path} links to planned/unimplemented route ${href}`);
      const linkedResponse = await request(href);
      assert(linkedResponse.status === 200, `${route.path} has broken internal link ${href}`);
      assert(
        !linkedResponse.headers.get("location"),
        `${route.path} internal link redirects: ${href}`,
      );
      const refs = inbound.get(href) ?? [];
      refs.push(route.path);
      inbound.set(href, refs);
    }
  }

  const duplicateTitles = duplicateValues(titles);
  const duplicateDescriptions = duplicateValues(descriptions);
  const duplicateH1s = duplicateValues(headings);
  assert(duplicateTitles.length === 0, `Duplicate titles: ${JSON.stringify(duplicateTitles)}`);

  const orphanRoutes = INDEXABLE_ROUTES.filter(
    (route) => route.path !== "/" && !(inbound.get(route.path)?.length > 0),
  ).map((route) => route.path);
  assert(orphanRoutes.length === 0, `Orphan implemented final routes: ${orphanRoutes.join(", ")}`);

  return {
    implementedPages: IMPLEMENTED_FINAL_ROUTES.length,
    webPageCount,
    breadcrumbCount,
    articleCount,
    sponsoredLinkCount,
    duplicateTitles,
    duplicateDescriptions,
    duplicateH1s,
    orphanRoutes,
  };
}

async function validateLanguageAlternates() {
  let checkedPairs = 0;
  for (const pair of LANGUAGE_PAIRS) {
    const esPath = resolveFinalCanonicalPath(pair.esPath);
    const finalRoute = FINAL_SEO_ROUTES.find((route) => route.finalUrl === esPath);
    if (!finalRoute?.implemented) continue;

    for (const path of [esPath, pair.enPath]) {
      const response = await request(path);
      assert(response.status === 200, `${path} failed hreflang validation`);
      assert(!response.headers.get("location"), `${path} is a redirecting hreflang destination`);
      const alternates = linkTags(await response.text()).filter(
        (tag) => attribute(tag, "rel")?.toLowerCase() === "alternate",
      );
      assert(alternates.length === 3, `${path} emitted ${alternates.length} hreflang links`);
      const hrefs = new Map(
        alternates.map((tag) => [attribute(tag, "hreflang"), attribute(tag, "href")]),
      );
      assert(hrefs.get("es-CO") === canonicalUrl(esPath), `${path} has wrong es-CO alternate`);
      assert(hrefs.get("en") === canonicalUrl(pair.enPath), `${path} has wrong en alternate`);
      assert(
        hrefs.get("x-default") === canonicalUrl(esPath),
        `${path} has wrong x-default alternate`,
      );
    }
    checkedPairs += 1;
  }
  return checkedPairs;
}

async function validateHtmlSitemap() {
  const response = await request("/mapa-sitio.html");
  assert(response.status === 200, "HTML sitemap did not return 200");
  const html = await response.text();
  const redirectSources = new Set(REDIRECT_RULES.map((rule) => rule.source));
  const hrefs = new Set(internalHrefs(html));

  for (const href of hrefs) {
    assert(!redirectSources.has(href), `HTML sitemap links through redirect source ${href}`);
    const linkedResponse = await request(href);
    assert(linkedResponse.status === 200, `HTML sitemap has broken link ${href}`);
    assert(!linkedResponse.headers.get("location"), `HTML sitemap link redirects: ${href}`);
  }

  return hrefs.size;
}

const unknown = await request("/this-route-does-not-exist");
assert(unknown.status === 404, `Unknown route returned ${unknown.status}, expected 404`);

await validateRegistry();
const offers = validateOfferData();
const offerPresentation = await validateOfferPresentation();
await validateRedirects();
const environment = await validateSitemapAndRobots();
const pages = await validateImplementedFinalPages();
const p1CompletedPages = await validateP1ContentBatch();
const nonP1CompletedPages = await validateNonP1ContentBatch();
const debtLegalPages = await validateDebtLegalCluster();
const finalProductToolPages = await validateFinalProductToolBatch();
const activatedProviderProfiles = await validateActivatedProviderProfiles();
const htmlSitemapLinks = await validateHtmlSitemap();
const languagePairs = await validateLanguageAlternates();

console.log(
  JSON.stringify(
    {
      environment: {
        deployment: siteConfig.seoDeploymentEnvironment,
        indexingEnabled: siteConfig.indexingEnabled,
        ...environment,
      },
      registry: {
        finalRoutes: FINAL_SEO_ROUTES.length,
        implemented: IMPLEMENTED_FINAL_ROUTES.length,
        liveIndexableCandidates: INDEXABLE_ROUTES.length,
        done: FINAL_SEO_ROUTES.filter((route) => route.status === "DONE").length,
        planned: FINAL_SEO_ROUTES.filter((route) => !route.implemented).length,
        conditional: PREPARED_CONDITIONAL_MIGRATIONS.length,
        mergedIntents: MERGED_SEO_INTENTS.length,
      },
      offers,
      offerPresentation,
      redirects: {
        finalMigrations: FINAL_MIGRATION_REDIRECTS.length,
        legacyAliases: LEGACY_REDIRECTS.length,
        directoryNormalizations: DIRECTORY_NORMALIZATION_REDIRECTS.length,
      },
      languagePairs,
      pages,
      p1CompletedPages,
      nonP1CompletedPages,
      debtLegalPages,
      finalProductToolPages,
      activatedProviderProfiles,
      htmlSitemapLinks,
      status: "passed",
    },
    null,
    2,
  ),
);
process.exit(0);
