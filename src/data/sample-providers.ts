/**
 * SAMPLE / PLACEHOLDER DATA — design prototype only.
 *
 * No real rates, amounts, terms or verification dates. Every value below is a
 * placeholder used to demonstrate the ProviderCard layout. Real data will be
 * sourced and verified before any of this ships publicly.
 */

export type ProviderType = "directo" | "comparacion";

export type ProviderField = string | null;

export interface Provider {
  id: string;
  name: string;
  /** Two-letter monogram used instead of a real logo in the prototype. */
  monogram: string;
  type: ProviderType;
  product: ProviderField;
  amount: ProviderField;
  term: ProviderField;
  requirements: ProviderField[];
  cost: ProviderField;
  /** ISO date of last review, or null when unknown. */
  lastReviewed: string | null;
}

export const SAMPLE_PROVIDERS: Provider[] = [
  {
    id: "proveedor-a",
    name: "Proveedor A",
    monogram: "PA",
    type: "directo",
    product: "Cupo de crédito rotativo",
    amount: "[monto de ejemplo]",
    term: "[plazo de ejemplo]",
    requirements: ["[requisito de ejemplo]", "[requisito de ejemplo]", "[requisito de ejemplo]"],
    cost: "[tasa y costos por verificar]",
    lastReviewed: null,
  },
  {
    id: "servicio-b",
    name: "Servicio B",
    monogram: "SB",
    type: "comparacion",
    product: "Formulario único para varios proveedores",
    amount: "[rango de ejemplo según proveedor]",
    term: "[definido por cada proveedor]",
    requirements: ["[requisito de ejemplo]", "[requisito de ejemplo]"],
    cost: null,
    lastReviewed: null,
  },
  {
    id: "proveedor-c",
    name: "Proveedor C",
    monogram: "PC",
    type: "directo",
    product: "Crédito de libre inversión",
    amount: "[monto de ejemplo]",
    term: null,
    requirements: ["[requisito de ejemplo]", "[requisito de ejemplo]"],
    cost: "[tasa de ejemplo]",
    lastReviewed: null,
  },
];
