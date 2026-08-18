import type { VerifiedProviderSlug } from "./providers";

export interface ProviderProfileContent {
  metaDescription: string;
  intro: string;
  overview: string;
  directness: string;
  confirm: string[];
  requirementsAndProcess?: string[];
  paymentsAndCosts?: string;
  safety?: string;
  limitsAndAlternatives?: string;
}

export const providerProfileContent = {
  lineru: {
    metaDescription:
      "Información verificada sobre Lineru en Colombia: cupo de crédito rotativo, rango publicado, cuenta bancaria y fuentes oficiales.",
    intro:
      "Lineru ofrece en Colombia un cupo de crédito rotativo. Esta ficha separa los datos confirmados de las condiciones que todavía no están disponibles.",
    overview:
      "El producto documentado es una línea o cupo de crédito rotativo. El conjunto comercial muestra actualmente un rango de COP 200.000 a COP 1.500.000 y un plazo de 4 a 30 días; la oferta individual puede variar.",
    directness:
      "Lineru figura en esta clasificación como proveedor directo. El tiempo mostrado de cuatro horas es una referencia mínima del conjunto comercial, no una garantía de decisión o desembolso.",
    confirm: [
      "La tasa y los costos aplicables a la oferta final.",
      "Las fechas de pago y el valor de cada obligación.",
      "Los requisitos completos y el resultado del estudio del proveedor.",
    ],
    requirementsAndProcess: [
      "La cuenta bancaria figura entre los datos confirmados; los demás documentos y validaciones deben revisarse en el flujo oficial vigente.",
      "Completar una solicitud no equivale a aprobación. El proveedor comunica el resultado de su evaluación y las condiciones aplicables.",
    ],
    paymentsAndCosts:
      "Antes de usar el cupo, confirma tasa, cargos, fechas, medio de pago y cómo se aplica cada abono. Esta ficha no completa esos valores por inferencia.",
    safety:
      "Entra desde el dominio oficial incluido en las fuentes, revisa el contrato vigente y no compartas claves, PIN ni códigos de verificación.",
    limitsAndAlternatives:
      "El rango publicado orienta sobre el producto, pero no garantiza un cupo individual. Compara el costo total con otras opciones documentadas y con alternativas sin deuda.",
  },
  credito365: {
    metaDescription:
      "Información verificada sobre Crédito365 en Colombia, su operador Tech365 SAS, producto de crédito en línea y requisitos confirmados.",
    intro:
      "Crédito365 opera un servicio de crédito en línea en Colombia bajo Tech365 SAS. La ficha muestra únicamente identidad, producto y requisitos respaldados.",
    overview:
      "El sitio describe productos de microcrédito o préstamo personal en línea. Sus términos identifican a Tech365 SAS como operador y contemplan la evaluación de solicitudes de personas adultas colombianas que cumplan sus requisitos.",
    directness:
      "Crédito365 se presenta aquí como proveedor directo. No se atribuyen montos, edad máxima, tasas, plazos ni tiempos de aprobación o desembolso.",
    confirm: [
      "Los documentos exigidos para la solicitud concreta.",
      "La tasa, los cargos y el total previsto de pagos.",
      "El monto, plazo y decisión comunicados por Tech365 SAS.",
    ],
  },
  "doctor-peso": {
    metaDescription:
      "Información verificada sobre Doctor Peso, FINTECH SOLUTIONS COLOMBIA S.A.S., su NIT y la documentación de su cupo de crédito.",
    intro:
      "Doctor Peso es una plataforma operada por FINTECH SOLUTIONS COLOMBIA S.A.S. con documentación oficial relacionada con un cupo de crédito.",
    overview:
      "Los documentos oficiales identifican a FINTECH SOLUTIONS COLOMBIA S.A.S., NIT 901455665-9, como la entidad que opera la plataforma Doctor Peso. El área documental incluye información contractual del cupo de crédito.",
    directness:
      "La ficha clasifica a Doctor Peso como proveedor directo del cupo. El conjunto comercial muestra COP 100.000 a COP 1.400.000 y 62 a 150 días; no atribuye una tasa, costos, tiempo de decisión ni estado de supervisión financiera.",
    confirm: [
      "Las condiciones económicas de la oferta y del contrato vigente.",
      "Los requisitos de identidad, cuenta o elegibilidad que correspondan.",
      "El plazo y cualquier cargo aplicable antes de aceptar.",
    ],
    requirementsAndProcess: [
      "Consulta en el canal oficial qué información y documentos exige la solicitud concreta.",
      "La existencia de un cupo documentado no implica aprobación, monto o plazo predeterminado para cada solicitante.",
    ],
    paymentsAndCosts:
      "Monto, tasa, plazo, cargos y forma de pago permanecen como no disponibles hasta que el proveedor los comunique en una oferta o contrato vigente.",
    safety:
      "Contrasta el dominio, la entidad identificada y los documentos antes de entregar datos. No interpretes esta ficha como confirmación de licencia o supervisión financiera.",
    limitsAndAlternatives:
      "La ficha permite verificar identidad y tipo de producto, no conveniencia ni aprobación. Compara cualquier oferta escrita con otras opciones y con tu presupuesto.",
  },
  rayo: {
    metaDescription:
      "Información verificada sobre Rayo en Colombia, su cupo de crédito rotativo, RAYOCOL SAS y condiciones que deben confirmarse.",
    intro:
      "Rayo ofrece un cupo de crédito rotativo en Colombia. Sus requisitos y la aprobación final dependen de la evaluación realizada por el proveedor.",
    overview:
      "El producto descrito por el sitio oficial es un cupo de crédito rotativo. La información oficial de medios de pago hace referencia a RAYOCOL SAS.",
    directness:
      "Rayo se clasifica como proveedor directo. Esta ficha no reproduce promesas de aprobación rápida, desembolso en un plazo determinado ni mejora del historial crediticio.",
    confirm: [
      "Los requisitos que Rayo solicite para la evaluación.",
      "El cupo aprobado, la tasa, los costos y el calendario de pagos.",
      "La identidad del receptor en los medios de pago oficiales.",
    ],
  },
  odiru: {
    metaDescription:
      "Información verificada sobre Odiru, LEMON COLOMBIA S.A.S., su cupo rotativo y la nota regulatoria contenida en el contrato oficial.",
    intro:
      "Odiru ofrece un cupo de crédito rotativo operado por LEMON COLOMBIA S.A.S.; el monto depende del estudio, riesgo y perfil del solicitante.",
    overview:
      "El contrato identifica a LEMON COLOMBIA S.A.S. como una sociedad comercial colombiana y describe un cupo de crédito rotativo. No se publica aquí un rango de montos porque el valor aprobado depende del análisis indicado en ese documento.",
    directness:
      "Odiru se clasifica como proveedor directo. El contrato también contiene una aclaración específica sobre la ausencia de inspección, vigilancia o control de la Superintendencia Financiera para esta actividad; la ficha no amplía esa declaración a otras conclusiones.",
    confirm: [
      "El monto efectivamente aprobado después del estudio.",
      "La tasa, el plazo, los cargos y las reglas de uso del cupo.",
      "La versión vigente del contrato antes de aceptar.",
    ],
  },
  crezu: {
    metaDescription:
      "Información verificada sobre CREZU en Colombia, su función de intermediación, operador Fininity OÜ y fuentes oficiales.",
    intro:
      "CREZU es un servicio de intermediación y comparación operado por Fininity OÜ. No es banco ni prestamista directo.",
    overview:
      "CREZU conecta usuarios con instituciones prestamistas y describe su servicio de comparación como gratuito para el usuario. Las condiciones financieras que puedan presentarse pertenecen al prestamista correspondiente.",
    directness:
      "CREZU no otorga el crédito directamente. La decisión, el desembolso y las condiciones finales dependen de la entidad prestamista, por lo que esta ficha no asigna a CREZU montos, tasas o plazos de terceros.",
    confirm: [
      "Qué entidad prestamista recibiría la solicitud.",
      "Las condiciones y el contrato entregados por esa entidad.",
      "El tratamiento de datos y el alcance de la intermediación.",
    ],
  },
  soscredit: {
    metaDescription:
      "Información verificada sobre SOSCREDIT en Colombia y su función como broker que no concede ni desembolsa créditos directamente.",
    intro:
      "SOSCREDIT se describe como broker de crédito en línea en Colombia. No es una entidad financiera ni concede préstamos directamente.",
    overview:
      "El servicio intermedia entre usuarios y terceros. Sus términos aclaran que no desembolsa dinero y no toma la decisión final de aprobación o rechazo.",
    directness:
      "SOSCREDIT actúa como broker y no otorga el crédito directamente. Cualquier monto, tasa, plazo o requisito final corresponde al prestamista que eventualmente presente una oferta.",
    confirm: [
      "La identidad del prestamista al que se remite la solicitud.",
      "Las condiciones completas comunicadas por ese tercero.",
      "Qué datos se transmiten y para qué finalidad.",
    ],
  },
  finteres: {
    metaDescription:
      "Información verificada sobre FINTERES, su operador Fininity Ltd y su función como servicio de información y comparación de terceros.",
    intro:
      "FINTERES es un servicio de información y comparación operado por Fininity Ltd. No presta dinero ni concede créditos.",
    overview:
      "El servicio recopila y compara ofertas de préstamos de terceros. Se describe como gratuito para el usuario, mientras que los proveedores pueden pagar a Fininity Ltd por solicitudes o datos transmitidos.",
    directness:
      "FINTERES no otorga el crédito directamente. Los rangos de monto y plazo mostrados describen el alcance comercial del servicio de comparación; la tasa, decisión, desembolso y condiciones contractuales pertenecen al prestamista de cada oferta.",
    confirm: [
      "La identidad y condiciones del prestamista presentado.",
      "El alcance del consentimiento para transmitir la solicitud o datos.",
      "El contrato final antes de aceptar cualquier oferta.",
    ],
    requirementsAndProcess: [
      "FINTERES recopila información para presentar o comparar alternativas de terceros; revisa el consentimiento antes de enviar la solicitud.",
      "El prestamista que eventualmente presente una oferta define sus propios requisitos, evaluación y decisión.",
    ],
    paymentsAndCosts:
      "FINTERES no fija la tasa, las cuotas ni los cargos del crédito de un tercero. Esos datos deben aparecer en la oferta y contrato del prestamista identificado.",
    safety:
      "Confirma quién recibirá los datos y quién sería el prestamista. No aceptes una oferta sin identificar a su responsable y revisar las condiciones completas.",
    limitsAndAlternatives:
      "El acceso a un comparador no garantiza que exista una oferta adecuada o aprobada. Puedes contrastar el resultado con el directorio y otras alternativas documentadas.",
  },
  finpug: {
    metaDescription:
      "Información verificada sobre FINPUG como servicio informativo que no es entidad financiera y no concede préstamos o microcréditos.",
    intro:
      "FINPUG.CO declara que presta servicios de información y que no es una organización financiera ni concede créditos directamente.",
    overview:
      "La fuente aprobada permite verificar únicamente la función informativa de FINPUG. No respalda rangos de montos, promociones, tasas, tiempos ni condiciones de entidades asociadas.",
    directness:
      "FINPUG no otorga microcréditos ni préstamos. Si el servicio presenta información de un tercero, la persona debe identificar a ese proveedor y revisar por separado sus condiciones.",
    confirm: [
      "Quién sería el proveedor real de cualquier producto mostrado.",
      "La fuente y vigencia de las condiciones presentadas.",
      "El tratamiento de datos antes de enviar información.",
    ],
  },
} satisfies Partial<Record<VerifiedProviderSlug, ProviderProfileContent>>;

export function getProviderProfileContent(slug: string): ProviderProfileContent | undefined {
  return providerProfileContent[slug as keyof typeof providerProfileContent];
}
