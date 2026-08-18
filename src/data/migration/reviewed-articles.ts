import { officialSources as s, sources } from "./official-sources";
import { finalReviewedLegacyArticles } from "./reviewed-articles-final";
import type { EditorialReview, LegacyReviewFlag } from "./types";

const reviewedAt = "2026-08-11";
const productFlag: LegacyReviewFlag = {
  type: "lender_or_product_claim",
  status: "pending",
  note: "Las condiciones de productos y proveedores concretos todavía requieren verificación individual.",
};
const eligibilityFlag: LegacyReviewFlag = {
  type: "age_or_eligibility",
  status: "pending",
  note: "La elegibilidad y los límites de edad dependen del producto y todavía no se han verificado por proveedor.",
};
const availabilityFlag: LegacyReviewFlag = {
  type: "market_availability",
  status: "pending",
  note: "La disponibilidad actual de ofertas concretas todavía requiere verificación.",
};
const timingFlag: LegacyReviewFlag = {
  type: "approval_or_funding_time",
  status: "pending",
  note: "No se han verificado tiempos de estudio, decisión o desembolso por proveedor.",
};

export const reviewedLegacyArticles: Partial<Record<string, EditorialReview>> = {
  ...finalReviewedLegacyArticles,
  "/tasa-de-usura-colombia.html": {
    reviewedAt,
    intro:
      "Guía para identificar la modalidad aplicable, consultar la certificación vigente y entender cómo se obtiene la referencia de usura sin confundirla con una tasa universal.",
    bodyHtml: `<section><h2 id="conceptos">IBC y referencia de usura: no son lo mismo</h2><p>El Interés Bancario Corriente (IBC) es una tasa certificada por la Superintendencia Financiera para una modalidad de crédito y un periodo determinados. La modalidad importa: no se debe tomar el valor de consumo y ordinario y aplicarlo automáticamente a créditos de bajo monto, productivos u otras categorías.</p><p>La referencia de usura se calcula como <strong>1,5 veces el IBC aplicable</strong>. Por eso, antes de hacer la operación hay que identificar la modalidad del contrato y la certificación vigente durante el periodo que se quiere revisar. Hablar de “la tasa de usura de Colombia” sin esos datos puede llevar a una comparación equivocada.</p></section><section><h2 id="ejemplo-agosto">Ejemplo fechado: agosto de 2026</h2><p>Para <strong>crédito de consumo y ordinario</strong>, la certificación oficial fijó un IBC de <strong>19,77 % efectivo anual</strong> entre el 1 y el 31 de agosto de 2026. La operación derivada para esa modalidad y ese periodo es:</p><p><strong>19,77 % × 1,5 = 29,655 % E.A.</strong>, equivalente a 29,66 % E.A. si se muestra con dos decimales.</p><p>Ese resultado es un cálculo derivado de la certificación indicada. No es un límite universal para todos los productos de crédito colombianos.</p></section><section><h2 id="modalidades">Por qué debe revisar la modalidad</h2><p>El tablero oficial de agosto de 2026 muestra IBC diferentes: consumo y ordinario, 19,77 % E.A.; consumo de bajo monto, 43,64 % E.A.; crédito productivo de mayor monto, 28,00 % E.A.; productivo rural, 22,37 % E.A.; y productivo urbano, 39,78 % E.A. Estos valores son IBC, no una lista de topes universales.</p><p>Compare el nombre exacto de la modalidad en su contrato con la categoría oficial. Si el documento no permite identificarla, solicite una explicación escrita antes de concluir que una tasa supera o no una referencia.</p></section><section><h2 id="comprobar">Cómo comprobar una tasa</h2><ol><li>Identifique la modalidad y el periodo del crédito.</li><li>Consulte la certificación o el tablero oficial correspondiente.</li><li>Confirme que las tasas comparadas estén expresadas en el mismo periodo.</li><li>Separe intereses de seguros, comisiones y otros cargos.</li><li>Conserve contrato, tabla de pagos y comunicaciones.</li></ol><p>Las certificaciones cambian. Para una decisión actual, vuelva siempre a la publicación oficial en lugar de reutilizar este ejemplo fechado.</p></section>`,
    sources: sources(s.sfcIbcAugust2026, s.sfcRatesDashboard, s.sfcUsuryMethodology),
    claimProvenance: [
      {
        claim: "IBC de consumo y ordinario de 19,77 % E.A. para agosto de 2026",
        sourceIds: [s.sfcIbcAugust2026.id],
      },
      { claim: "Los IBC varían según la modalidad", sourceIds: [s.sfcRatesDashboard.id] },
      {
        claim: "La referencia de usura se calcula como 1,5 veces el IBC aplicable",
        sourceIds: [s.sfcUsuryMethodology.id],
      },
    ],
    reviewFlags: [],
  },
  "/credito-online-vs-banco.html": {
    reviewedAt: "2026-08-18",
    intro:
      "Compara productos concretos por costo, condiciones, proceso y autoridad aplicable; el canal digital o presencial no determina por sí solo cuál opción conviene.",
    bodyHtml: `<section><h2 id="comparacion-real">Compare productos, no estereotipos</h2><p>“Online” describe un canal; “banco” describe un tipo de entidad. Una entidad bancaria puede ofrecer un proceso completamente digital y una empresa tecnológica puede tener condiciones muy distintas entre sus propios productos. La comparación útil se hace sobre la oferta escrita que recibirá la persona, no sobre promesas generales de rapidez o facilidad.</p><p>Revise para cada alternativa: entidad legal que contrata, monto efectivamente entregado, tasa y periodo en que se expresa, plazo, valor y frecuencia de cuotas, seguros, comisiones, cargos de mora, condiciones de pago anticipado y costo total esperado.</p></section><section><h2 id="informacion-escrita">Qué debe quedar por escrito</h2><p>La SIC indica que, en financiación ofrecida por medios tecnológicos, el consumidor debe recibir información clara y escrita sobre intereses relevantes y condiciones contractuales. No se limite a una pantalla publicitaria: conserve la oferta, el contrato y el calendario de pagos. Si una cifra cambia entre la simulación y el documento final, pida la explicación antes de aceptar.</p><p>Para comparar intereses, use periodos equivalentes. Una tasa mensual y una efectiva anual no se deben enfrentar directamente. Además, una tasa menor no garantiza por sí sola el menor desembolso total si existen otros cargos.</p></section><section><h2 id="proceso">Proceso, requisitos y tiempos</h2><p>No presuponga que todo crédito digital es inmediato ni que todo banco exige más documentos. Los requisitos, el estudio, la decisión y el desembolso dependen del producto y del solicitante. Compare qué datos se piden, cómo se verifica la identidad, qué autorizaciones se solicitan y cuándo se considera aceptado el contrato.</p><p>La guía educativa de la SIC recomienda evaluar condiciones e identificar prácticas abusivas o engañosas. Una interfaz rápida no reemplaza la lectura del contrato ni la identificación del responsable.</p></section><section><h2 id="lista-comparar">Lista antes de elegir</h2><ul><li>¿Quién es la entidad legal y cuál es su dominio oficial?</li><li>¿Cuál es la tasa, en qué periodo está expresada y a qué modalidad corresponde?</li><li>¿Cuánto recibe y cuánto pagaría en total según los documentos?</li><li>¿Qué cargos son obligatorios y cuáles opcionales?</li><li>¿Qué ocurre ante mora, pago anticipado o una reclamación?</li><li>¿Cuál autoridad o canal de atención corresponde a esa entidad y actividad?</li></ul><p>La mejor opción es la que puede entender, verificar y pagar sin comprometer gastos esenciales; no necesariamente la que promete menos pasos.</p></section>`,
    bodyHtmlAppend: `<section><h2 id="tabla-comparacion">Comparación por producto</h2><div class="overflow-x-auto"><table><thead><tr><th>Criterio</th><th>Crédito por canal online</th><th>Producto bancario</th></tr></thead><tbody><tr><td>Velocidad</td><td>Depende de verificación, estudio, firma y desembolso.</td><td>Puede ser digital o presencial y depende del producto.</td></tr><tr><td>Requisitos y monto</td><td>Los define el proveedor; un formulario breve no garantiza condiciones.</td><td>Los define el banco y su evaluación; no existe un rango universal.</td></tr><tr><td>Costo</td><td>Compare tasa, cargos y total escrito.</td><td>Aplique la misma comparación, incluso si ya es cliente.</td></tr><tr><td>Regulación</td><td>Identifique entidad, actividad y autoridad aplicable.</td><td>Compruebe la razón social en la lista de vigiladas de la SFC.</td></tr><tr><td>Servicio</td><td>Revise canales humanos, reclamaciones y soporte posterior.</td><td>Revise disponibilidad digital, oficinas y canales de reclamación.</td></tr></tbody></table></div></section><section><h2 id="cuando-encaja">Cuándo puede encajar cada opción</h2><p>Un proceso online puede servir a quien puede verificar la entidad, completar el trámite digital y conservar documentos. Un banco puede encajar cuando la persona valora una relación existente o canales presenciales. Ninguna de esas circunstancias sustituye la comparación del costo y la capacidad de pago.</p><p>Si decide explorar ofertas, use una comparación documentada y no una promesa de aprobación. Consulte <a href="/ofertas-creditos.html">proveedores y servicios documentados</a> después de definir monto, plazo y cuota sostenible.</p></section>`,
    sources: sources(
      s.sicFintechInstructions,
      s.sicDigitalCreditCourse,
      s.sfcCreditFaq,
      s.sfcSupervisedEntities,
    ),
    claimProvenance: [
      {
        claim: "La financiación tecnológica debe informar por escrito intereses y condiciones",
        sourceIds: [s.sicFintechInstructions.id],
      },
      {
        claim: "El consumidor digital debe evaluar condiciones y reconocer prácticas engañosas",
        sourceIds: [s.sicDigitalCreditCourse.id],
      },
    ],
    reviewFlags: [productFlag, eligibilityFlag, timingFlag, availabilityFlag],
  },
  "/requisitos-credito-para-pensionados-colombia.html": {
    reviewedAt,
    intro:
      "Los requisitos dependen del producto y del operador. Esta guía separa la documentación que debe confirmar de los supuestos que no deben darse por hechos.",
    bodyHtml: `<section><h2 id="no-universales">No existe una lista universal de requisitos</h2><p>La condición de pensionado no permite asumir una edad máxima, un monto disponible, un plazo de aprobación ni una administradora aceptada. Cada proveedor define su producto y realiza su evaluación. Pida la lista de requisitos directamente a la entidad identificada y confirme que corresponde a la oferta concreta.</p><p>Como preparación práctica, tenga disponibles sus documentos de identidad y los soportes de pensión e ingresos que el proveedor solicite. No envíe información sensible antes de verificar la entidad legal, el dominio oficial y el uso que dará a los datos.</p></section><section><h2 id="libranza">Si el producto usa libranza</h2><p>La libranza es un mecanismo diferenciado de crédito y pago en el que existe una autorización de descuento a través del pagador. Antes de firmar, confirme quién es el operador, quién cumple el papel de pagador, qué valor será descontado, con qué frecuencia y durante cuánto tiempo.</p><p>RUNEOL es el Registro Único Nacional de Entidades Operadoras de Libranza. La existencia de ese registro no significa que todos sus operadores sean vigilados por la Superintendencia Financiera. Son comprobaciones diferentes y no deben presentarse como equivalentes.</p></section><section><h2 id="documentos">Qué debe pedir y revisar</h2><ul><li>Identidad y datos de contacto de la entidad que ofrece el crédito.</li><li>Contrato completo y autorización de descuento, cuando corresponda.</li><li>Tasa expresada con claridad, plazo, cuota y costos adicionales.</li><li>Condiciones para modificar, terminar o reclamar un descuento.</li><li>Canales oficiales de atención y autoridad aplicable.</li></ul><p>Compare el descuento propuesto con su presupuesto real. La autorización automática no elimina otros gastos mensuales ni convierte una cuota en asequible.</p></section><section><h2 id="preguntas">Preguntas antes de solicitar</h2><ul><li>¿El producto es libranza o un crédito con otro medio de pago?</li><li>¿El pagador admite el mecanismo y qué trámite exige?</li><li>¿Qué documentos son obligatorios para este proveedor?</li><li>¿Hay seguros, comisiones u otros cargos?</li><li>¿Qué sucede si la solicitud no es aprobada?</li></ul><p>No acepte cifras o tiempos que no aparezcan en la información escrita. Esta página explica el marco general; no certifica elegibilidad ante ninguna entidad.</p></section>`,
    sources: sources(s.sfcLibranza, s.sfcRuneol, s.sicFintechInstructions),
    claimProvenance: [
      {
        claim: "La libranza es un mecanismo diferenciado con descuento autorizado mediante pagador",
        sourceIds: [s.sfcLibranza.id, s.sfcRuneol.id],
      },
      {
        claim: "RUNEOL registra operadores y no equivale a supervisión de la SFC",
        sourceIds: [s.sfcRuneol.id],
      },
    ],
    reviewFlags: [productFlag, eligibilityFlag, timingFlag, availabilityFlag],
  },
  "/consultar-historial-crediticio-gratis.html": {
    reviewedAt,
    intro:
      "DataCrédito ofrece a personas naturales un canal oficial para registrarse y consultar gratis su historia de crédito, además de canales de consulta y reclamo.",
    bodyHtml: `<section><h2 id="canal-oficial">Dónde hacer la consulta gratuita</h2><p>DataCrédito Experian publica el servicio <strong>Historia de Crédito Gratis</strong> para personas naturales. El proceso requiere registro. Entre directamente por el enlace oficial incluido en las fuentes de esta página y compruebe el dominio antes de entregar datos de identificación.</p><p>La consulta permite revisar la información contenida en el registro. No significa que el puntaje vaya a mejorar, no garantiza la aprobación de un crédito y no demuestra que todos los proveedores usen la misma central o el mismo proceso.</p></section><section><h2 id="prepararse">Cómo prepararse</h2><ol><li>Use un dispositivo y una conexión que considere seguros.</li><li>Abra el sitio oficial y complete su propio registro.</li><li>Realice las validaciones de identidad que muestre el canal oficial.</li><li>Revise los datos personales y la información crediticia presentada.</li><li>Guarde constancia de cualquier dato que necesite consultar o reclamar.</li></ol><p>No entregue contraseñas, códigos de acceso ni respuestas de validación a terceros que prometan hacer la consulta por usted.</p></section><section><h2 id="que-revisar">Qué revisar en la historia</h2><p>Lea los datos tal como aparecen y compruebe que puede reconocer las obligaciones y su estado. La utilidad principal de la consulta es saber qué información contiene el registro e identificar elementos sobre los que necesite aclaración.</p><p>No deduzca de una sola anotación que será aprobado o rechazado. La decisión crediticia corresponde al análisis de cada proveedor y puede considerar información y criterios distintos.</p></section><section><h2 id="reclamos">Consultas y reclamos de habeas data</h2><p>DataCrédito también mantiene canales de habeas data para consultas y reclamos relacionados con la información de historia crediticia. Si detecta algo que considera incorrecto, describa el dato específico y conserve los soportes disponibles y la constancia de la solicitud.</p><p>Use siempre el procedimiento publicado por la fuente oficial. Esta guía no fija plazos de respuesta ni anticipa el resultado de un reclamo.</p></section><section><h2 id="antes-credito">Antes de pedir un crédito</h2><p>Consultar el registro puede evitar que una solicitud se base en suposiciones sobre la información visible. Después, compare por separado la tasa, los cargos, el plazo, la cuota y los requisitos del producto. La historia de crédito es una pieza de información, no una oferta ni una promesa de aprobación.</p></section>`,
    bodyHtmlAppend: `<section><h2 id="transunion">Consulta también tu reporte en TransUnion</h2><p>TransUnion Colombia mantiene un canal oficial de reporte de crédito gratuito. DataCrédito y TransUnion son operadores distintos: consultar uno no demuestra que ya revisaste toda la información que podría existir en el otro. Entra desde la fuente oficial incluida al final de esta guía y completa personalmente la verificación de identidad.</p><p>Evita planes pagos si tu tarea es únicamente ejercer la consulta gratuita; revisa con atención qué modalidad seleccionas antes de aceptar condiciones.</p></section><section><h2 id="interpretar-corregir">Cómo interpretar y revisar posibles errores</h2><p>Comprueba tu identificación, las entidades que reportan, las obligaciones que reconoces, su estado y las fechas mostradas. Una anotación no permite predecir por sí sola si aprobarán una solicitud ni explica todos los criterios de un proveedor.</p><p>Si no reconoces un dato o consideras que es incorrecto, anota exactamente el registro, reúne soportes y utiliza el canal de consulta o reclamo del operador donde aparece. DataCrédito y TransUnion publican procedimientos separados; conserva la constancia de radicación y evita enviar documentos por contactos no verificados.</p></section><section><h2 id="despues-consulta">Qué hacer después de consultar</h2><ol><li>Separa la información correcta de la que necesitas aclarar.</li><li>Presenta el reclamo en el operador correspondiente cuando proceda.</li><li>Revisa presupuesto y obligaciones antes de una nueva solicitud.</li><li>Compara tasa, cargos, plazo y cuota sin asumir que el reporte garantiza un resultado.</li><li>Protege contraseñas, preguntas de validación y códigos de acceso.</li></ol><p>Si el registro contiene información negativa, continúa con la guía sobre <a href="/prestamo-reportado-datacredito.html">opciones y límites para personas reportadas</a>.</p></section>`,
    sources: sources(
      s.dataCreditoFreeHistory,
      s.dataCreditoHabeasData,
      s.dataCreditoPersonas,
      s.transUnionFreeReport,
      s.transUnionNaturalPersonRequests,
    ),
    claimProvenance: [
      {
        claim:
          "Las personas naturales pueden registrarse y consultar su historia de crédito gratis",
        sourceIds: [s.dataCreditoFreeHistory.id],
      },
      {
        claim: "Existen canales de consulta y reclamo de habeas data",
        sourceIds: [s.dataCreditoHabeasData.id],
      },
    ],
    reviewFlags: [],
  },
  "/derechos-consumidor-financiero-colombia.html": {
    reviewedAt: "2026-08-18",
    intro:
      "La autoridad y el marco aplicables dependen de quién ofrece el crédito y de la actividad realizada; identifique primero a la entidad y conserve la información contractual.",
    bodyHtml: `<section><h2 id="alcance">Primero identifique el alcance</h2><p>No toda empresa que ofrece financiación digital es necesariamente vigilada por la Superintendencia Financiera. La Superintendencia Financiera publica una lista oficial de entidades bajo su supervisión. La SIC, por su parte, ofrece orientación y ejerce funciones de protección al consumidor en contextos de financiación mediante tecnología.</p><p>Por eso, antes de reclamar, identifique la razón social que figura en el contrato, su sitio oficial, la actividad que realiza y el canal de atención indicado. No asuma la autoridad competente solo por el nombre comercial o porque el trámite ocurrió en internet.</p></section><section><h2 id="informacion">Información antes de aceptar</h2><p>En operaciones de financiación ofrecidas por medios tecnológicos, la SIC exige información clara y escrita que incluya los intereses relevantes y las condiciones contractuales. Revise la tasa y el periodo en que está expresada, el monto que recibirá, las cuotas, el plazo, los seguros, las comisiones, los cargos de mora y cualquier otra condición económica.</p><p>Las actuaciones oficiales de la SIC citadas en las fuentes muestran que las autoridades colombianas han sancionado casos concretos por interés excesivo y por información insuficiente o publicidad problemática. Esos casos no prueban nada sobre proveedores distintos.</p></section><section><h2 id="reclamar">Cómo preparar una reclamación</h2><ol><li>Describa el hecho, la fecha y lo que solicita.</li><li>Adjunte contrato, oferta, comprobantes y comunicaciones relevantes.</li><li>Use el canal oficial del proveedor y conserve el número o constancia.</li><li>Verifique qué autoridad corresponde según la entidad y actividad.</li><li>Conserve la respuesta y el historial de comunicaciones.</li></ol><p>Si el asunto incluye historia crediticia, consulte además los canales de habeas data de la central correspondiente. No comparta públicamente documentos con datos personales.</p></section><section><h2 id="lista">Lista de control del consumidor</h2><ul><li>¿Conoce la entidad legal con la que contrata?</li><li>¿Tiene las condiciones completas por escrito?</li><li>¿Puede distinguir intereses de otros costos?</li><li>¿Sabe cómo reclamar y ante qué canal?</li><li>¿La entidad afirma estar vigilada? Compruébelo en la lista oficial.</li></ul><p>Esta guía es educativa y no sustituye asesoría jurídica individual. Una duda sobre un contrato concreto debe analizarse con sus documentos y circunstancias.</p></section>`,
    bodyHtmlAppend: `<section><h2 id="trato-y-contrato">Trato justo, contrato y datos</h2><p>En relaciones con entidades vigiladas, la Ley 1328 reconoce principios de debida diligencia, libertad de elección, transparencia e información cierta, suficiente y oportuna. Revise derechos, obligaciones, costos, exclusiones, tratamiento de datos y consecuencias del incumplimiento antes de aceptar.</p><p>El contrato no autoriza solicitudes ilimitadas de datos. En crédito digital, confirme la finalidad y destinatarios de la información y use los canales de habeas data cuando el problema corresponda a una central de información.</p></section><section><h2 id="defensor-y-sfc">Entidad, Defensor y Superintendencia Financiera</h2><p>Empiece por el canal oficial de la entidad y conserve el radicado. Cuando se trate de una entidad vigilada, el Defensor del Consumidor Financiero puede atender quejas y actuar como conciliador en los casos previstos. La SFC publica guías y canales para inconformidades relacionadas con sus vigiladas.</p><p>El Defensor y la SFC no son el canal universal para toda empresa de crédito. Identifique primero quién contrató y qué autoridad aplica. La guía para <a href="/verificar-prestamista-legal-colombia.html">verificar un prestamista</a> explica esa distinción.</p></section><section><h2 id="cobranza-respetuosa">Cobranza respetuosa</h2><p>La Ley 2300 protege la intimidad del consumidor y regula canales autorizados, horarios y periodicidad de contacto para quienes realizan cobranza. Documente llamadas y mensajes que considere contrarios a esas reglas y formule una reclamación con hechos y fechas concretos.</p></section>`,
    sources: sources(
      s.sicFintechInstructions,
      s.sicDigitalCreditCourse,
      s.sfcSupervisedEntities,
      s.sicBancupoEnforcement,
      s.sicNanocredEnforcement,
      s.financialConsumerLaw,
      s.sfcFinancialConsumerDefender,
      s.respectfulCollectionsLaw,
    ),
    claimProvenance: [
      {
        claim: "La financiación tecnológica requiere información clara y escrita",
        sourceIds: [s.sicFintechInstructions.id],
      },
      {
        claim: "La SFC mantiene una lista de entidades vigiladas",
        sourceIds: [s.sfcSupervisedEntities.id],
      },
      {
        claim: "La SIC ha actuado en casos concretos por usura e información o publicidad",
        sourceIds: [s.sicBancupoEnforcement.id, s.sicNanocredEnforcement.id],
      },
    ],
    reviewFlags: [
      {
        type: "regulatory_or_legal_claim",
        status: "pending",
        note: "La autoridad y los derechos aplicables a casos individuales requieren evaluación según entidad, actividad y contrato.",
      },
    ],
  },
  "/prestamo-reportado-datacredito.html": {
    reviewedAt,
    intro:
      "Estar “reportado” describe información en una historia de crédito; por sí solo no demuestra que una persona sea elegible o inelegible para todos los productos.",
    bodyHtml: `<section><h2 id="significa">Qué significa estar reportado</h2><p>En lenguaje cotidiano, “estar reportado” suele referirse a información sobre obligaciones incluida en una historia de crédito, en especial cuando existe una situación negativa. Para saber qué aparece realmente, la persona debe consultar su propio registro en el canal oficial.</p><p>DataCrédito permite a personas naturales registrarse y consultar gratis su Historia de Crédito. La consulta sirve para identificar la información contenida allí; no cambia por sí misma el historial ni garantiza una aprobación.</p></section><section><h2 id="no-determina">Un reporte no decide todos los créditos</h2><p>Un reporte no prueba automáticamente que una persona será aceptada o rechazada en cualquier producto. Cada proveedor realiza su análisis y puede aplicar criterios distintos. Tampoco debe interpretarse esta guía como confirmación de que existan ofertas vigentes “para reportados”.</p><p>No confunda publicidad de aprobación fácil con una decisión real. La elegibilidad, el monto, la tasa y el plazo solo pueden confirmarse mediante información verificable del producto y el estudio del proveedor.</p></section><section><h2 id="revisar">Revise antes de solicitar</h2><ol><li>Entre al servicio oficial de Historia de Crédito Gratis y complete su registro.</li><li>Identifique obligaciones y estados que no reconozca o quiera aclarar.</li><li>Conserve soportes y detalles exactos de la información cuestionada.</li><li>Use los canales de habeas data publicados por DataCrédito para consultas o reclamos.</li><li>Guarde la constancia del trámite.</li></ol><p>Esta página no fija el resultado ni los plazos de una reclamación.</p></section><section><h2 id="oferta">Cómo evaluar una oferta</h2><ul><li>Identifique la entidad legal y su dominio oficial.</li><li>Exija tasa, plazo, cuota y costos por escrito.</li><li>No acepte una garantía de aprobación basada únicamente en su reporte.</li><li>No entregue datos a intermediarios cuya función no esté clara.</li><li>Compruebe el contrato y los canales de reclamación antes de aceptar.</li></ul><p>Si una oferta se presenta como solución especial para personas reportadas, aplique el mismo nivel de verificación. La urgencia no reemplaza la identificación del responsable ni la lectura de condiciones.</p></section><section><h2 id="siguiente">Qué puede hacer ahora</h2><p>Empiece por conocer la información de su registro y, si corresponde, use el canal formal de consulta o reclamo. Después evalúe su presupuesto y compare únicamente productos cuyas condiciones estén documentadas. No solicite un crédito solo para “mejorar el historial”: este contenido no respalda esa promesa.</p></section>`,
    sources: sources(s.dataCreditoFreeHistory, s.dataCreditoHabeasData, s.dataCreditoPersonas),
    claimProvenance: [
      {
        claim: "Las personas naturales pueden consultar gratis su historia tras registrarse",
        sourceIds: [s.dataCreditoFreeHistory.id],
      },
      {
        claim: "DataCrédito ofrece canales de habeas data para consultas y reclamos",
        sourceIds: [s.dataCreditoHabeasData.id],
      },
      {
        claim: "TransUnion ofrece reporte gratuito y canales de solicitud o reclamo",
        sourceIds: [s.transUnionFreeReport.id, s.transUnionNaturalPersonRequests.id],
      },
    ],
    reviewFlags: [productFlag, eligibilityFlag, availabilityFlag],
  },
  "/tasas-interes-prestamos-online.html": {
    reviewedAt,
    intro:
      "Compare tasas expresadas en periodos equivalentes, identifique la modalidad del crédito y separe el interés de los demás costos del contrato.",
    bodyHtml: `<section><h2 id="comparar">Cómo comparar una tasa</h2><p>Una tasa solo se puede interpretar correctamente si conoce su periodo, modalidad y condiciones. No compare directamente una cifra mensual con una efectiva anual. Pida que las alternativas se expresen en un periodo equivalente y confirme si la cifra corresponde al interés o intenta resumir también otros cargos.</p><p>La tasa ofrecida y los criterios de aprobación pueden variar por producto y solicitante. Esta página no publica tasas de proveedores ni promete una condición individual.</p></section><section><h2 id="referencias">Referencias oficiales de agosto de 2026</h2><p>El tablero de la Superintendencia Financiera informa IBC diferentes por modalidad: consumo y ordinario, 19,77 % E.A.; consumo de bajo monto, 43,64 %; productivo de mayor monto, 28,00 %; productivo rural, 22,37 %; y productivo urbano, 39,78 %. Son referencias de IBC para modalidades identificadas, no precios de todas las ofertas ni una tasa universal.</p><p>Para consumo y ordinario, la certificación de 19,77 % E.A. rige del 1 al 31 de agosto de 2026. Las cifras cambian; consulte la fuente oficial para otro periodo.</p></section><section><h2 id="usura">IBC y usura</h2><p>La referencia de usura se obtiene multiplicando por 1,5 el IBC aplicable. Antes de calcularla, identifique la modalidad del contrato. No aplique el valor de una categoría a otra.</p></section><section><h2 id="contrato">Qué revisar en la oferta</h2><ul><li>Tasa, periodo y modalidad.</li><li>Monto neto recibido y total previsto de pagos.</li><li>Seguros, comisiones y cargos adicionales.</li><li>Consecuencias de mora y condiciones de pago anticipado.</li><li>Documento contractual y canal de reclamación.</li></ul><p>En financiación tecnológica, la SIC exige información clara y escrita sobre intereses relevantes y condiciones contractuales. Conserve esa información para comparar la oferta final con lo anunciado.</p></section>`,
    bodyHtmlAppend: `<section><h2 id="nominal-efectiva">Tasa nominal y tasa efectiva</h2><p>A un nivel conceptual, una tasa nominal comunica una referencia periódica bajo las condiciones con las que fue expresada, mientras que una tasa efectiva refleja el efecto acumulado durante el periodo indicado. El nombre de la tasa no basta: compruebe si se presenta por mes o por año y cuáles supuestos acompañan la cifra.</p><p>Para comparar dos ofertas, solicite que ambas tasas se muestren sobre un periodo equivalente. Si una oferta presenta una cifra mensual y otra una efectiva anual, no elija la aparentemente menor sin convertirla o pedir una presentación comparable. También confirme que las tasas correspondan a productos y modalidades comparables.</p></section><section><h2 id="costo-total">La tasa anunciada no es todo el costo</h2><p>El interés es una parte de la comparación. El contrato puede indicar seguros, comisiones u otros cargos aplicables. Revise el monto que recibirá, el valor y número de cuotas y el total previsto de pagos. La guía de <a href="/costos-ocultos-creditos-online.html">cargos y costos adicionales</a> ofrece una lista para revisar la oferta final.</p><p>No presuponga que una tasa efectiva incluye automáticamente cada concepto contractual. Separe las cifras y pregunte por escrito qué cubre cada una.</p></section><section><h2 id="relacion-usura">Cómo se relaciona con la referencia de usura</h2><p>El IBC y la referencia de usura cumplen funciones distintas de la tasa particular ofrecida en un contrato. La modalidad debe identificarse antes de usar una certificación. Consulte la explicación de <a href="/tasa-de-usura-colombia.html">la tasa de usura por modalidad</a> para ver el cálculo derivado ya verificado.</p><p>Como las certificaciones tienen periodos definidos, una cifra de agosto de 2026 no debe reutilizarse como si siguiera vigente indefinidamente. Para otra fecha, vuelva a la fuente oficial.</p></section>`,
    sources: sources(
      s.sfcIbcAugust2026,
      s.sfcRatesDashboard,
      s.sfcUsuryMethodology,
      s.sicFintechInstructions,
    ),
    claimProvenance: [
      {
        claim: "IBC de agosto de 2026 por modalidad",
        sourceIds: [s.sfcIbcAugust2026.id, s.sfcRatesDashboard.id],
      },
      {
        claim: "Referencia de usura igual a 1,5 veces el IBC aplicable",
        sourceIds: [s.sfcUsuryMethodology.id],
      },
    ],
    reviewFlags: [productFlag, eligibilityFlag, availabilityFlag],
  },
  "/descuento-automatico-pensionados-colombia.html": {
    reviewedAt,
    intro:
      "El descuento automático mediante libranza requiere identificar al operador, al pagador, la autorización y las condiciones concretas del crédito.",
    bodyHtml: `<section><h2 id="mecanismo">Qué es el descuento por libranza</h2><p>La libranza es un mecanismo diferenciado de crédito y pago que puede involucrar una autorización para que el pagador realice descuentos. En el caso de una pensión, no basta con que una oferta diga “descuento automático”: el contrato debe permitir identificar al operador, el papel del pagador y la obligación que se pagará.</p></section><section><h2 id="autorizar">Antes de autorizar</h2><ul><li>Compruebe la entidad legal que recibirá los pagos.</li><li>Lea el valor, frecuencia y duración del descuento.</li><li>Revise tasa, plazo, seguros, comisiones y demás condiciones.</li><li>Pregunte qué procedimiento aplica ante un error o finalización.</li><li>Conserve contrato, autorización y desprendibles.</li></ul><p>La deducción automática no demuestra que una cuota sea adecuada para su presupuesto. Compare el ingreso disponible después del descuento con sus gastos esenciales.</p></section><section><h2 id="runeol">RUNEOL y supervisión</h2><p>RUNEOL es el Registro Único Nacional de Entidades Operadoras de Libranza. La inscripción dentro del marco de operadores no significa, por sí sola, que una entidad sea vigilada por la Superintendencia Financiera. Si una empresa afirma estar supervisada por esa autoridad, compruébelo por separado en la lista oficial.</p></section><section><h2 id="depende">Lo que depende del producto</h2><p>La elegibilidad, la edad admitida, los documentos, el monto, el plazo y los tiempos de decisión dependen del proveedor y no se pueden inferir del mecanismo de libranza. Solicite estas condiciones por escrito. Esta guía no confirma convenios con pagadores ni ofertas vigentes.</p></section>`,
    bodyHtmlAppend: `<section><h2 id="pagador">Qué hace el pagador</h2><p>El pagador ejecuta el descuento autorizado dentro del mecanismo de libranza. Eso no significa que el pagador haya elegido el crédito por la persona, evaluado su conveniencia o garantizado las condiciones del operador. El solicitante sigue siendo responsable de entender la autorización y el contrato antes de aceptarlos.</p><p>Compruebe que el documento explique a quién se transferirá el descuento, desde cuándo operaría y qué debe hacer si el valor descontado no coincide con lo pactado. No dé por hecho que un pagador específico admite una operación hasta confirmarlo por el canal correspondiente.</p></section><section><h2 id="costo-libranza">Costo y condiciones siguen importando</h2><p>La automatización del pago no reemplaza la comparación de la tasa, el plazo, la cuota, el monto neto recibido y los cargos aplicables. Una cuota que se descuenta sin intervención mensual puede seguir afectando el dinero disponible para alimentación, salud, vivienda y emergencias.</p><p>Revise además las consecuencias de mora o inconsistencias, las reglas de pago anticipado y el canal para reclamar. Pida aclaración escrita cuando la oferta y el contrato no coincidan.</p></section><section><h2 id="checklist-libranza">Lista antes de aceptar</h2><ol><li>Identifique la entidad legal y el operador.</li><li>Confirme el papel del pagador y el alcance de la autorización.</li><li>Compare tasa, costo total, plazo y cuota.</li><li>Revise valor, frecuencia y duración del descuento.</li><li>Distinga el registro en RUNEOL de una afirmación de supervisión por la SFC.</li><li>Conserve contrato, autorización, oferta y comprobantes.</li></ol><p>Para revisar otros requisitos variables, consulte la <a href="/requisitos-credito-para-pensionados-colombia.html">guía de requisitos para pensionados</a>.</p></section>`,
    sources: sources(s.sfcLibranza, s.sfcRuneol, s.sfcSupervisedEntities),
    claimProvenance: [
      {
        claim: "Libranza como mecanismo diferenciado con descuento autorizado",
        sourceIds: [s.sfcLibranza.id, s.sfcRuneol.id],
      },
      {
        claim: "RUNEOL no equivale a supervisión de la SFC",
        sourceIds: [s.sfcRuneol.id, s.sfcSupervisedEntities.id],
      },
    ],
    reviewFlags: [productFlag, eligibilityFlag, timingFlag, availabilityFlag],
  },
  "/prestamos-para-pensionados-colombia.html": {
    reviewedAt,
    intro:
      "Guía para distinguir el producto de crédito, el mecanismo de libranza y las condiciones que cada pensionado debe confirmar con el proveedor.",
    bodyHtml: `<section><h2 id="producto">No todos los créditos para pensionados son iguales</h2><p>“Para pensionados” describe el público de una oferta, pero no fija una tasa, edad máxima, monto, plazo ni probabilidad de aprobación. Compare documentos de productos concretos y verifique quién contrata, cómo se paga y qué costos se aplican.</p></section><section><h2 id="libranza">Cuando se ofrece libranza</h2><p>La libranza es un mecanismo diferenciado de crédito y pago que puede utilizar una autorización de descuento mediante un pagador. Confirme el valor y la frecuencia del descuento, la duración, la entidad operadora y el procedimiento para consultas o inconsistencias.</p><p>RUNEOL registra operadores de libranza. Esa inscripción no equivale automáticamente a vigilancia de la Superintendencia Financiera; la supervisión debe comprobarse por separado cuando una entidad la afirma.</p></section><section><h2 id="comparar">Qué comparar</h2><ul><li>Entidad legal, dominio y canal de atención.</li><li>Tasa en un periodo comparable, cuota y plazo.</li><li>Seguros, comisiones y otros cargos.</li><li>Monto recibido frente al total de pagos previsto.</li><li>Mecanismo de pago y autorización de descuento.</li><li>Consecuencias de mora y condiciones contractuales.</li></ul><p>No autorice un descuento solo porque simplifica el pago. Revise cuánto ingreso queda disponible para gastos esenciales.</p></section><section><h2 id="solicitud">Requisitos y decisión</h2><p>Cada proveedor establece documentación y criterios de estudio. No se deben inventar administradoras aceptadas, tiempos de desembolso ni edades límite. Pida la lista vigente y conserve la respuesta escrita. Esta página no contiene ofertas ni certifica elegibilidad.</p></section>`,
    bodyHtmlAppend: `<section><h2 id="opciones-generales">Crédito ordinario y crédito con libranza</h2><p>Una persona pensionada puede encontrar productos con medios de pago diferentes. En un crédito ordinario, el contrato define cómo y cuándo debe realizarse el pago. Cuando existe libranza, el mecanismo incorpora una autorización para que un pagador efectúe descuentos. La diferencia está en la estructura de pago y en los documentos que la acompañan; no demuestra por sí sola que una opción sea más barata, más rápida o apropiada.</p><p>Antes de comparar, confirme de qué clase de producto se trata. Una referencia comercial a “crédito para pensionados” no permite deducir que siempre exista libranza.</p></section><section><h2 id="papel-pagador">Operador, pagador y autorización</h2><p>En la libranza debe poder identificar quién ofrece y opera el crédito, quién actúa como pagador y qué autorización se otorgará. El pagador participa en la ejecución del descuento, pero su presencia no sustituye la lectura del contrato ni prueba que una oferta concreta esté disponible para todas las personas.</p><p>RUNEOL es el registro de operadores de libranza. Registro y supervisión financiera no son sinónimos. Si una entidad afirma estar vigilada por la Superintendencia Financiera, esa afirmación debe comprobarse por separado.</p></section><section><h2 id="comparacion-detallada">Cómo comparar antes de solicitar</h2><h3>Tasa y costo</h3><p>Compare tasas en periodos equivalentes y separe intereses de seguros, comisiones u otros cargos que el contrato indique. Use el monto neto recibido y el total previsto de pagos para entender el compromiso completo.</p><h3>Plazo, cuota y descuento</h3><p>Revise cuántas cuotas existirían, su frecuencia y el efecto del descuento en el ingreso disponible. Una cuota aparentemente manejable puede extenderse durante un plazo que no se ajusta a sus objetivos.</p><h3>Contrato y responsable</h3><p>Compruebe la razón social, el dominio oficial, el canal de atención y las condiciones para reclamar, pagar anticipadamente o atender una inconsistencia. Conserve la oferta y la versión contractual aceptada.</p></section><section><h2 id="sin-regla-universal">Por qué no hay una regla universal</h2><p>Edad, monto, documentos, capacidad de pago, plazo y decisión dependen del producto y del análisis de cada proveedor. La condición de pensionado no garantiza aprobación y un factor favorable no reemplaza los demás criterios. Esta guía no confirma convenios con pagadores ni disponibilidad de ofertas.</p><p>Prepare solo los documentos pedidos por la entidad ya identificada. La <a href="/requisitos-credito-para-pensionados-colombia.html">guía de requisitos</a> explica qué debe confirmar sin inventar criterios universales.</p></section><section><h2 id="guias-pensionados">Profundice según su situación</h2><ul><li>Revise <a href="/descuento-automatico-pensionados-colombia.html">cómo funciona el descuento automático</a> si la oferta utiliza libranza.</li><li>Si existe información negativa en su historia, lea la guía sobre <a href="/credito-pensionados-mal-historial-colombia.html">crédito para pensionados con mal historial</a>.</li><li>Para preparar un presupuesto sin asumir límites del proveedor, consulte <a href="/cuanto-credito-puede-pedir-un-pensionado-colombia.html">cómo evaluar cuánto crédito pedir</a>.</li></ul><p>Estos recursos son educativos: no constituyen ofertas ni determinan elegibilidad.</p></section><section><h2 id="preguntas-pensionados">Preguntas para llevar a la comparación</h2><ul><li>¿Quién es la entidad legal que firma el contrato?</li><li>¿El pago es ordinario o mediante libranza?</li><li>¿Cuál es el costo completo documentado?</li><li>¿Cuánto quedará disponible después de la cuota o descuento?</li><li>¿Qué requisitos y canales aplican a este producto concreto?</li></ul></section>`,
    sources: sources(s.sfcLibranza, s.sfcRuneol, s.sicFintechInstructions),
    claimProvenance: [
      {
        claim: "Naturaleza diferenciada de la libranza y papel del pagador",
        sourceIds: [s.sfcLibranza.id, s.sfcRuneol.id],
      },
      { claim: "RUNEOL no implica supervisión de la SFC", sourceIds: [s.sfcRuneol.id] },
    ],
    reviewFlags: [productFlag, eligibilityFlag, timingFlag, availabilityFlag],
  },
  "/verificar-empresa-prestamos-legitima.html": {
    reviewedAt: "2026-08-18",
    intro:
      "Verifique identidad legal, dominio, contrato, costos y autoridad aplicable. No aparecer en la lista de la Superfinanciera no prueba por sí solo ilegalidad.",
    bodyHtml: `<section><h2 id="identidad">1. Identifique a la entidad legal</h2><p>No se quede con la marca de una aplicación o anuncio. Busque en la oferta y el contrato la razón social responsable, sus datos de contacto y el dominio oficial. Compruebe que los documentos y canales pertenecen a la misma entidad.</p></section><section><h2 id="condiciones">2. Exija las condiciones por escrito</h2><p>Antes de aceptar, revise tasa y periodo, monto, plazo, cuotas, seguros, comisiones, cargos de mora y canales de reclamación. Para financiación por medios tecnológicos, la SIC exige información clara y escrita sobre intereses relevantes y condiciones contractuales.</p><p>La educación de la SIC recomienda evaluar condiciones e identificar prácticas abusivas o engañosas. Una apariencia profesional o HTTPS no demuestra por sí sola la legitimidad de una oferta.</p></section><section><h2 id="autoridad">3. Determine qué autoridad aplica</h2><p>La Superintendencia Financiera mantiene una lista oficial de entidades bajo su supervisión. Si una empresa afirma estar vigilada, busque la razón social exacta en esa lista. Sin embargo, la ausencia de una empresa no significa automáticamente que sea ilegal: no todo proveedor legal de crédito tiene que estar supervisado por la SFC.</p><p>Identifique la actividad y el contrato para determinar el marco y canal correspondientes. No convierta una comprobación aislada en una conclusión general.</p></section><section><h2 id="verificacion">4. Haga una verificación coherente</h2><ul><li>Compare razón social, marca, dominio, correos y contrato.</li><li>Lea las condiciones económicas completas.</li><li>Compruebe afirmaciones de supervisión en la fuente oficial.</li><li>Conserve capturas y documentos de la oferta.</li><li>No comparta claves, PIN ni códigos de autenticación.</li><li>Deténgase si el responsable o el costo no se pueden explicar.</li></ul></section><section><h2 id="limites">Lo que esta comprobación no demuestra</h2><p>Aparecer en una lista oficial no convierte toda oferta en conveniente ni garantiza aprobación. No aparecer tampoco basta para etiquetar a una empresa como estafa. La evaluación debe mantener separadas la identidad legal, la supervisión, la transparencia contractual y la conveniencia económica.</p></section>`,
    bodyHtmlAppend: `<section><h2 id="dominio">2. Confirme el dominio oficial</h2><p>Compare el dominio con la razón social y con los canales indicados en los documentos. Desconfíe de variaciones tipográficas, contactos que cambian de dominio sin explicación o comunicaciones que solo llegan desde perfiles personales. Tener HTTPS protege la conexión, pero no demuestra por sí solo quién controla el sitio.</p><p>Entre al sitio por una dirección que pueda verificar y no por un enlace recibido con presión. Compruebe que contrato, política de datos, correo y canal de pago señalen al mismo responsable.</p></section><section><h2 id="nit-registro">3. Contraste razón social y NIT</h2><p>Busque la razón social o el NIT en el RUES y compare la información registral disponible con el contrato, dominio y canales usados. Un registro mercantil ayuda a comprobar identidad empresarial, pero no demuestra que la empresa esté vigilada por la SFC, que una oferta concreta sea auténtica o que sus condiciones sean convenientes.</p></section><section><h2 id="costos-checklist">4. Verifique la tasa y todos los costos</h2><p>Pida la tasa con su periodo, el monto neto, el plazo, las cuotas y cada seguro o comisión aplicable. Compare la información anunciada con la oferta final. Si hay contradicciones o un cargo no puede explicarse por escrito, no continúe hasta aclararlo.</p></section><section><h2 id="alertas">Patrones que justifican más cautela</h2><ul><li>Solicitud de un pago previo presentado como activación, seguro, trámite o liberación.</li><li>Suplantación mediante un dominio o contacto parecido al oficial.</li><li>Presión para transferir o aceptar antes de leer los documentos.</li><li>Negativa a identificar la razón social o entregar condiciones escritas.</li><li>Solicitud de claves, PIN o códigos de autenticación.</li></ul><p>Una señal aislada no sustituye la verificación completa, pero sí justifica detenerse. Revise también la guía sobre <a href="/estafas-prestamos-online-colombia.html">señales de estafas de préstamos</a> y la explicación de <a href="/derechos-consumidor-financiero-colombia.html">derechos y canales de reclamación</a>.</p></section><section><h2 id="checklist-final">Checklist final</h2><ol><li>Identifique razón social y NIT.</li><li>Confirme su dominio oficial.</li><li>Lea contrato y divulgaciones.</li><li>Verifique tasa y costos.</li><li>Determine la autoridad o marco aplicable.</li><li>Si afirma vigilancia de la SFC, compruébela en la lista oficial.</li><li>No interprete un registro empresarial o la ausencia de la lista SFC como prueba automática de legitimidad o ilegalidad.</li><li>Deténgase ante pagos anticipados, posible suplantación o urgencia engañosa.</li></ol></section>`,
    sources: sources(
      s.sfcSupervisedEntities,
      s.sicFintechInstructions,
      s.sicDigitalCreditCourse,
      s.ruesBusinessLookup,
    ),
    claimProvenance: [
      {
        claim: "La SFC mantiene una lista oficial de entidades vigiladas",
        sourceIds: [s.sfcSupervisedEntities.id],
      },
      {
        claim: "La financiación tecnológica debe informar intereses y condiciones por escrito",
        sourceIds: [s.sicFintechInstructions.id],
      },
    ],
    reviewFlags: [productFlag, availabilityFlag],
  },
  "/que-es-estudio-de-credito.html": {
    reviewedAt: "2026-08-18",
    intro:
      "Un estudio de crédito es una evaluación asociada a una solicitud; los criterios, documentos y resultados dependen del producto y de la entidad.",
    bodyHtml: `<section><h2 id="definicion">Qué es un estudio de crédito</h2><p>Es el proceso mediante el cual una entidad analiza una solicitud antes de decidir sobre un crédito y sus condiciones. La información considerada no es idéntica para todos los proveedores, y esta página no atribuye un modelo, puntaje o algoritmo concreto a ninguna empresa.</p><p>La información general de la Superintendencia Financiera sobre créditos sirve como referencia educativa, pero los requisitos deben confirmarse en el producto específico.</p></section><section><h2 id="puede-pedir">Qué puede pedir un proveedor</h2><p>La entidad puede solicitar documentos e información para verificar identidad y analizar la solicitud, según su producto. Antes de enviarlos, identifique a la entidad legal, el dominio oficial y el tratamiento informado de los datos. No dé por hecho que todos piden los mismos soportes.</p></section><section><h2 id="historia">Historia de crédito</h2><p>DataCrédito ofrece a personas naturales registro y consulta de la Historia de Crédito Gratis, además de canales de habeas data. Revisarla permite conocer la información contenida en el registro y plantear consultas o reclamos; no garantiza aprobación y no demuestra que todas las entidades la usen igual.</p></section><section><h2 id="resultado">Cómo leer el resultado</h2><p>Una aprobación, modificación o rechazo corresponde al análisis del proveedor. Los tiempos, las razones y las condiciones pueden variar. Solicite que la oferta final indique monto, tasa, plazo, cuotas y costos, y no confunda una simulación con una aprobación definitiva.</p></section><section><h2 id="prepararse">Preparación responsable</h2><ul><li>Revise que sus datos y documentos sean correctos.</li><li>Consulte los requisitos publicados por el producto.</li><li>Compare la oferta escrita con su presupuesto.</li><li>Evite solicitudes basadas en promesas de aprobación garantizada.</li><li>Conserve autorizaciones y comunicaciones.</li></ul><p>Esta guía no publica rangos de puntaje, porcentajes de endeudamiento ni factores algorítmicos porque no fueron verificados para proveedores concretos.</p></section>`,
    bodyHtmlAppend: `<section><h2 id="categorias">Categorías que pueden formar parte del análisis</h2><h3>Ingresos y capacidad de pago</h3><p>El proveedor puede analizar la información de ingresos, gastos y deudas que solicita para el producto. No existe un porcentaje universal ni un documento único aplicable a todas las entidades.</p><h3>Historia, puntaje e identidad</h3><p>La historia y un puntaje pueden ser insumos, pero no revelan por sí solos el modelo del proveedor ni fijan un umbral universal. La entidad también puede verificar identidad y coherencia de datos. Consulte <a href="/consultar-historial-crediticio-gratis.html">su historia crediticia</a> y la guía de <a href="/puntaje-crediticio-colombia.html">puntaje</a> sin interpretar ninguna cifra como garantía.</p></section><section><h2 id="tiempo-y-resultados">Tiempo, oferta y resultado</h2><p>La evaluación puede terminar en aprobación, oferta modificada, solicitud de información adicional o rechazo. El tiempo depende del proveedor y del caso. Una preaprobación, simulación o mensaje automático no equivale a la decisión final ni al desembolso.</p></section><section><h2 id="si-rechazan">Si la solicitud es rechazada</h2><p>No envíe de inmediato muchas solicitudes ni pague a alguien que prometa cambiar el resultado. Revise que la información entregada sea correcta, consulte su historia si procede, pida al proveedor la información que pueda comunicar sobre la decisión y vuelva a evaluar presupuesto y requisitos.</p><p>Un rechazo no demuestra fraude ni una prohibición permanente. Cada producto aplica criterios propios; espere a resolver errores y compare alternativas sin ocultar datos.</p></section><section><h2 id="sin-garantia">Ningún factor garantiza aprobación</h2><p>Un ingreso estable, una historia sin información negativa o la entrega completa de documentos puede ser relevante, pero ningún factor positivo aislado garantiza aprobación. La preparación útil consiste en entregar datos verificables, entender el producto y comprobar que una eventual cuota cabe en el presupuesto.</p></section>`,
    sources: sources(
      s.sfcCreditFaq,
      s.dataCreditoFreeHistory,
      s.dataCreditoHabeasData,
      s.sicFintechInstructions,
    ),
    claimProvenance: [
      { claim: "Explicación general del crédito y su estudio", sourceIds: [s.sfcCreditFaq.id] },
      {
        claim: "Consulta gratuita y canales de habeas data",
        sourceIds: [s.dataCreditoFreeHistory.id, s.dataCreditoHabeasData.id],
      },
    ],
    reviewFlags: [productFlag, eligibilityFlag, timingFlag, availabilityFlag],
  },
  "/costos-ocultos-creditos-online.html": {
    reviewedAt,
    intro:
      "El costo de un crédito puede incluir más que el interés anunciado. Revise por escrito todos los cargos y las condiciones antes de aceptar.",
    bodyHtml: `<section><h2 id="mas-interes">El costo no termina en la tasa</h2><p>Para comparar créditos, identifique el interés y también cualquier seguro, comisión, cargo de plataforma, estudio, cobranza u otro concepto que aparezca en la oferta o contrato. No todos esos cargos existen en todos los productos: pregunte cuáles aplican, su valor, cuándo se cobran y si son obligatorios.</p><p>Una cifra publicitaria aislada no permite calcular el costo final. Compare el monto neto que recibe con el calendario y total previsto de pagos.</p></section><section><h2 id="informacion">Información clara en crédito digital</h2><p>La SIC indica que la financiación ofrecida por medios tecnológicos debe presentar información clara y escrita sobre intereses relevantes y condiciones contractuales. Su material educativo también recomienda evaluar condiciones y reconocer prácticas abusivas o engañosas.</p><p>Las actuaciones de la SIC citadas como fuentes muestran aplicación de reglas en casos concretos de interés excesivo e información insuficiente o publicidad. No deben interpretarse como afirmaciones sobre otras empresas.</p></section><section><h2 id="lista">Lista de revisión</h2><ul><li>Tasa y periodo en que se expresa.</li><li>Monto solicitado y monto efectivamente entregado.</li><li>Número, valor y frecuencia de cuotas.</li><li>Seguros y servicios adicionales, indicando si son obligatorios.</li><li>Comisiones y momento del cobro.</li><li>Cargos y procedimiento ante mora.</li><li>Condiciones de pago anticipado y reclamación.</li></ul><p>Si un cargo no se entiende, solicite la explicación por escrito antes de firmar. No presuponga que una tasa efectiva anual incorpora automáticamente todo concepto del contrato.</p></section><section><h2 id="comparar">Cómo comparar dos ofertas</h2><ol><li>Ponga las tasas en periodos equivalentes.</li><li>Use el mismo monto y plazo para la comparación.</li><li>Sume solo los cargos que cada documento confirme.</li><li>Compare el total previsto y el efecto de la cuota en su presupuesto.</li><li>Guarde la versión contractual aceptada.</li></ol><p>No se incluyen ejemplos numéricos porque un ejemplo sin condiciones verificadas podría inducir a error.</p></section>`,
    bodyHtmlAppend: `<section><h2 id="tipos-cargos">Qué tipos de cargos debe distinguir</h2><h3>Interés</h3><p>Compruebe la tasa y el periodo en que se expresa. Para comparar dos ofertas, use periodos equivalentes y no confunda la tasa anunciada con el costo completo.</p><h3>Comisiones y cargos</h3><p>Puede haber cargos cuando el contrato concreto los contempla. Pida nombre, valor, momento de cobro y servicio asociado. No presuponga que una categoría aparece en todos los créditos.</p><h3>Seguros y servicios</h3><p>Verifique si el producto incluye un seguro o servicio, si es obligatorio u opcional dentro de esa oferta, cuánto cuesta y cómo se acepta. No trate un servicio opcional como requisito universal ni acepte una casilla sin entenderla.</p><h3>Mora y cobranza</h3><p>Lea qué consecuencias contractuales se aplican si una cuota no se paga en la fecha acordada. Revise cargos, comunicaciones y canales para atender una dificultad; no espere a la mora para buscar esa información.</p></section><section><h2 id="oferta-final">La oferta final y el contrato son la referencia</h2><p>Una simulación o anuncio ayuda a explorar, pero la decisión debe basarse en los documentos finales. Compare nombres de conceptos, fechas, monto neto y calendario de pagos entre la oferta y el contrato. Guarde la versión que aceptó.</p><p>Si una condición cambia o aparece un cargo nuevo, pida explicación escrita antes de continuar. Consulte también cómo <a href="/tasas-interes-prestamos-online.html">comparar tasas en periodos equivalentes</a> y los <a href="/derechos-consumidor-financiero-colombia.html">principios de información y reclamación</a>.</p></section><section><h2 id="preguntas-costos">Preguntas concretas antes de firmar</h2><ul><li>¿Cuánto dinero recibiré realmente?</li><li>¿Cuál es el total previsto de pagos?</li><li>¿Qué conceptos son obligatorios para esta oferta?</li><li>¿Qué servicios puedo aceptar o rechazar?</li><li>¿Qué ocurre ante mora o pago anticipado?</li><li>¿Dónde queda cada respuesta en el contrato?</li></ul><p>“Costos adicionales” es una categoría de revisión, no una afirmación de que todos los proveedores oculten cargos.</p></section>`,
    sources: sources(
      s.sicFintechInstructions,
      s.sicDigitalCreditCourse,
      s.sicBancupoEnforcement,
      s.sicNanocredEnforcement,
    ),
    claimProvenance: [
      {
        claim: "Deber de informar por escrito intereses y condiciones en financiación tecnológica",
        sourceIds: [s.sicFintechInstructions.id],
      },
      {
        claim: "Casos concretos de aplicación por usura e información o publicidad",
        sourceIds: [s.sicBancupoEnforcement.id, s.sicNanocredEnforcement.id],
      },
    ],
    reviewFlags: [productFlag, availabilityFlag],
  },
};
