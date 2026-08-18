import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = process.env.SEO_SOURCE_DIR;

if (!sourceDir) {
  throw new Error(
    "SEO_SOURCE_DIR is required. Point it to the directory containing the three FINAL CSV files.",
  );
}

const sources = {
  architecture: path.join(sourceDir, "ColombiaCredito_FINAL_Page_Architecture.csv"),
  migrations: path.join(sourceDir, "ColombiaCredito_FINAL_URL_Migration_Map.csv"),
  content: path.join(sourceDir, "ColombiaCredito_FINAL_Content_SEO_Specification.csv"),
  audit: path.join(root, "data/seo-page-status.json"),
};
const outputPath = path.join(root, "src/data/seo/seo-routes.generated.ts");

function parseCsv(input) {
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  const text = input.replace(/^\uFEFF/, "");

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quoted) {
      if (char === '"' && text[index + 1] === '"') {
        field += '"';
        index += 1;
      } else if (char === '"') quoted = false;
      else field += char;
    } else if (char === '"') quoted = true;
    else if (char === ",") {
      row.push(field);
      field = "";
    } else if (char === "\n") {
      row.push(field.replace(/\r$/, ""));
      if (row.some(Boolean)) rows.push(row);
      row = [];
      field = "";
    } else field += char;
  }

  if (field || row.length > 0) {
    row.push(field.replace(/\r$/, ""));
    rows.push(row);
  }

  const [headers, ...records] = rows;
  return records.map((values) =>
    Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])),
  );
}

function routeId(url) {
  if (url === "/") return "home";
  return url
    .replace(/^\//, "")
    .replace(/\/$/, "")
    .replace(/\.html$/, "")
    .replaceAll("/", "--");
}

function parseInternalTargets(value, pagesByName) {
  if (!value) return [];
  return value
    .split(" ; ")
    .map((item) => {
      const [relation, pageName] = item.split(" → ");
      const target = pagesByName.get(pageName);
      if (!relation || !target) return null;
      return {
        relation: relation.toLowerCase(),
        targetId: routeId(target["Final URL"]),
        pageName,
        url: target["Final URL"],
      };
    })
    .filter(Boolean)
    .filter(
      (target, index, all) =>
        all.findIndex(
          (candidate) => candidate.relation === target.relation && candidate.url === target.url,
        ) === index,
    );
}

const [architecture, migrations, content, audit] = await Promise.all([
  readFile(sources.architecture, "utf8").then(parseCsv),
  readFile(sources.migrations, "utf8").then(parseCsv),
  readFile(sources.content, "utf8").then(parseCsv),
  readFile(sources.audit, "utf8").then(JSON.parse),
]);

const architectureByPage = new Map(architecture.map((row) => [row.Page, row]));
const migrationByPage = new Map(migrations.map((row) => [row.Page, row]));
const auditByPage = new Map(audit.pages.map((row) => [row.page, row]));
const contentByPage = new Map(content.map((row) => [row.Page, row]));

const finalRoutes = content.map((spec) => {
  const architectureRow = architectureByPage.get(spec.Page);
  const migrationRow = migrationByPage.get(spec.Page);
  const auditRow = auditByPage.get(spec.Page);
  if (!architectureRow || !migrationRow || !auditRow) {
    throw new Error(`Incomplete source data for final page: ${spec.Page}`);
  }

  const finalUrl = spec["Final URL"];
  const parentName = architectureRow.Parent || null;
  const parent = parentName ? contentByPage.get(parentName) : undefined;
  const legacyUrls = new Set();
  if (migrationRow["Legacy/source URL"] && migrationRow["Legacy/source URL"] !== finalUrl) {
    legacyUrls.add(migrationRow["Legacy/source URL"]);
  }
  if (auditRow.currentUrl && auditRow.currentUrl !== finalUrl) {
    legacyUrls.add(auditRow.currentUrl);
  }

  const implementationState =
    auditRow.status === "MISSING"
      ? "planned"
      : auditRow.status === "CONDITIONAL"
        ? "conditional"
        : "implemented";
  const implemented = implementationState !== "planned";
  const intendedIndexability = migrationRow.Indexability.startsWith("index") ? "index" : "noindex";

  return {
    id: routeId(finalUrl),
    pageName: spec.Page,
    finalUrl,
    legacyUrls: [...legacyUrls],
    parentName,
    parentId: parent ? routeId(parent["Final URL"]) : null,
    priority: spec.Priority,
    migrationAction: migrationRow["Migration action"],
    pageType: spec["Page type"],
    finalIntent: spec["Dominant intent"],
    journeyStage: spec["Journey stage"],
    primaryKeyword: spec["Primary keyword"],
    canonical: `https://creditocolombia.co${finalUrl}`,
    intendedIndexability,
    sitemapAction: migrationRow["Sitemap action"],
    sitemapIntended: migrationRow["Sitemap action"] === "INCLUDE final URL only",
    status: auditRow.status,
    implementationState,
    implemented,
    liveIndexable:
      implemented && implementationState !== "conditional" && intendedIndexability === "index",
    internalLinkTargets: parseInternalTargets(
      spec["Internal linking specification"],
      contentByPage,
    ),
  };
});

const mergedIntents = architecture
  .filter((row) => row["Final decision"] === "MERGE")
  .map((row) => {
    const migration = migrationByPage.get(row.Page);
    const target = finalRoutes.find((route) => route.finalUrl === row["Final URL"]);
    if (!migration || !target) throw new Error(`Invalid merged intent: ${row.Page}`);
    return {
      id: `merged--${routeId(row["Final URL"])}--${routeId(`/${row.Page}`)}`,
      pageName: row.Page,
      sourceUrl: migration["Legacy/source URL"] || null,
      targetId: target.id,
      targetUrl: target.finalUrl,
      migrationAction: migration["Migration action"],
      createStandalone: false,
    };
  });

if (finalRoutes.length !== 41 || mergedIntents.length !== 7) {
  throw new Error(
    `Unexpected FINAL source cardinality: ${finalRoutes.length} routes, ${mergedIntents.length} merged intents`,
  );
}

const duplicateFinalUrls = finalRoutes.filter(
  (route, index) =>
    finalRoutes.findIndex((candidate) => candidate.finalUrl === route.finalUrl) !== index,
);
if (duplicateFinalUrls.length > 0) {
  throw new Error(
    `Duplicate final URLs: ${duplicateFinalUrls.map((route) => route.finalUrl).join(", ")}`,
  );
}

const output =
  `// This file is generated by scripts/generate-seo-routes.mjs. Do not edit manually.\n` +
  `// Sources: ColombiaCredito_FINAL_Page_Architecture.csv, ColombiaCredito_FINAL_URL_Migration_Map.csv,\n` +
  `// ColombiaCredito_FINAL_Content_SEO_Specification.csv, and data/seo-page-status.json.\n\n` +
  `export const FINAL_SEO_ROUTES = ${JSON.stringify(finalRoutes, null, 2)} as const;\n\n` +
  `export const MERGED_SEO_INTENTS = ${JSON.stringify(mergedIntents, null, 2)} as const;\n`;

await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, output);
console.log(
  JSON.stringify({
    output: path.relative(root, outputPath),
    finalRoutes: finalRoutes.length,
    mergedIntents: mergedIntents.length,
  }),
);
