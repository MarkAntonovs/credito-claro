import type { Source } from "@/types/content";
import { officialSources as s, sources } from "./official-sources";

export type EnglishMigrationClassification = "A" | "B" | "C";

export interface EnglishArticleSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface EnglishArticle {
  slug: string;
  path: string;
  legacySourceFile: string;
  classification: EnglishMigrationClassification;
  legacyTitle: string;
  title: string;
  legacyDescription: string;
  description: string;
  legacyH1: string;
  h1: string;
  intro: string;
  pairedSpanishPath?: string;
  sources: Source[];
  sections: EnglishArticleSection[];
  relatedPaths: string[];
}

export const ENGLISH_ARTICLE_CONTEXT =
  "CreditoColombia.co provides independent information and does not issue credit or approve applications. The provider involved determines eligibility and the final contractual conditions.";

function article(input: Omit<EnglishArticle, "path" | "legacySourceFile">): EnglishArticle {
  return {
    ...input,
    path: `/en/${input.slug}`,
    legacySourceFile: `en/${input.slug}`,
  };
}

export const ENGLISH_ARTICLES = [
  article({
    slug: "online-loans-colombia.html",
    classification: "A",
    legacyTitle: "Online Loans Colombia 2026: Complete & Safe Guide",
    title: "Online Loans in Colombia: How They Work and What to Compare",
    legacyDescription:
      "Everything you need to know about online loans in Colombia 2026: requirements, how to avoid scams, compare rates and apply safely. Complete guide.",
    description:
      "Understand how online credit in Colombia works, the difference between direct providers and intermediaries, and what to compare before accepting a contract.",
    legacyH1: "Online Loans in Colombia — Complete Guide 2026",
    h1: "Online loans in Colombia: a practical guide",
    intro:
      "Online credit is credit researched, requested or managed through digital channels. The channel does not guarantee approval, speed or a particular cost, so the provider and final contract still matter.",
    pairedSpanishPath: "/creditos-online-colombia.html",
    sources: [],
    sections: [
      {
        title: "How an online credit process generally works",
        paragraphs: [
          "A website or app may explain a product, collect an application, request identity or income information, communicate a decision and provide documents for acceptance. Those steps can belong to one direct credit provider or may be split between an intermediary and the entity that ultimately evaluates the request.",
          "Submitting information is not the same as receiving an offer. A user should know which legal entity is collecting the data, whether it lends directly, and when a displayed estimate becomes a final written offer. The provider involved determines eligibility, approval and any funding timeline.",
        ],
      },
      {
        title: "Direct providers and intermediaries",
        paragraphs: [
          "A direct provider offers the credit product and makes the lending decision under its own conditions. A broker, aggregator or lead-generation service may compare options, transmit information or connect a user with third parties. An intermediary is not automatically the lender.",
          "Read the service description and privacy information before sharing personal data. If another company will receive the application, identify that company and review its own terms before continuing.",
        ],
      },
      {
        title: "What to compare before accepting",
        paragraphs: [
          "Compare written terms rather than advertising speed or convenience. Rates must use comparable periods, and the interest rate alone may not capture insurance, commissions or other contract charges. The amount received, payment schedule and expected total are all relevant.",
        ],
        bullets: [
          "The legal identity and role of every service involved.",
          "Eligibility requirements and information requested.",
          "Amount, term, payment dates and consequences of late payment.",
          "Rate, its stated period, additional costs and total expected payment.",
          "The final contract, complaint channels and data-use permissions.",
        ],
      },
      {
        title: "Why conditions vary",
        paragraphs: [
          "Products use different eligibility rules, amounts, terms and risk assessments. Conditions may also depend on the applicant and on information confirmed during review. A simulator, comparison card or preliminary message cannot replace the final contract.",
          "Keep copies of the offer and accepted documents. If a cost or condition changes, ask for a written explanation before accepting. For a structured view of the currently documented services, continue to the English provider comparison page.",
        ],
      },
      {
        title: "Eligibility and responsible data sharing",
        paragraphs: [
          "Eligibility can depend on identity verification, age rules, residency, income or payment information, existing obligations and the provider’s assessment. These are categories to confirm, not universal requirements. Never assume that a service accepts every applicant merely because its form is available online.",
          "Before authorizing a consultation or transmission of data, read who will receive it and for what purpose. This is especially important with comparison and lead-generation services, where the website collecting the form may not be the company that makes the lending decision. Do not share passwords, one-time codes or remote access to a device.",
        ],
      },
      {
        title: "The final contract controls the obligation",
        paragraphs: [
          "Advertising, calculators and preliminary eligibility messages can help a user research, but they do not replace the final documents. Check the legal contracting name, net amount, rate and period, term, payment frequency, mandatory charges, late-payment provisions and complaint channel in the version presented for acceptance.",
          "If the contract differs from the earlier screen, stop and compare the change. Credit should fit the budget after essential expenses, not only the provider’s displayed maximum. When payment would depend on immediately taking another loan, consider a non-credit alternative or contact an existing creditor before adding a new obligation.",
          "After acceptance, use the documented payment and support channels. Keep receipts and report a missing or incorrect payment record promptly rather than relying on an informal contact that cannot update the account.",
        ],
      },
    ],
    relatedPaths: [
      "/en/loan-offers.html",
      "/en/online-loan-requirements-colombia.html",
      "/en/online-loan-interest-rates.html",
      "/en/online-loan-scams-colombia.html",
    ],
  }),
  article({
    slug: "instant-online-loans.html",
    classification: "A",
    legacyTitle: "Instant Online Loans Colombia 2026: Real Approval Times",
    title: "Instant Online Loans in Colombia: What Speed Claims Mean",
    legacyDescription:
      "Instant online loans Colombia 2026: real approval times, disbursement in minutes or hours and what to expect from urgent credit.",
    description:
      "Learn why an online application is not a guarantee of instant approval or funding and what to check when a credit service emphasizes speed.",
    legacyH1: "Instant online loans — what to really expect",
    h1: "Instant online loans: what to realistically expect",
    intro:
      "“Instant” can describe a form, an automated step or a marketing message. It should not be read as a guarantee that a lender will approve or fund every application immediately.",
    pairedSpanishPath: "/prestamos-inmediatos-en-linea.html",
    sources: [],
    sections: [
      {
        title: "Application, decision and funding are different stages",
        paragraphs: [
          "Completing a digital form may take only a few minutes, but the provider may still verify identity, review information, request documents or assess affordability. A decision can be communicated separately, and an approved amount may be transferred only after the contract is accepted and payment details are confirmed.",
          "Because those stages depend on the provider, applicant and payment channel, this site does not promise a universal approval or disbursement time. Ask what the advertised time actually measures and which conditions must be met.",
        ],
      },
      {
        title: "Do not let urgency replace comparison",
        paragraphs: [
          "A fast process does not establish that a product is affordable. Before accepting, review the amount received, payment schedule, rate period, additional charges and late-payment consequences. If the documents are unavailable until after a payment or transfer, stop and verify the service.",
        ],
        bullets: [
          "Identify the legal entity and whether it lends directly.",
          "Confirm that the final offer matches the simulation or advertisement.",
          "Read permissions for personal and financial data.",
          "Never treat approval language as a substitute for a written contract.",
        ],
      },
      {
        title: "When the need is urgent",
        paragraphs: [
          "Consider whether the expense can be postponed, negotiated or covered through a non-credit alternative. If credit remains necessary, compare more than one documented option and check that the payment fits alongside essential expenses.",
          "Pressure, guaranteed approval, requests for advance transfers and informal-only communication are reasons to pause. The safety guides explain how to verify a company and recognize common scam signals before sharing more information.",
          "Keep a record of the domain, offer and messages you relied on. If timing is essential, ask the provider to state which stage a time estimate covers and what could delay it; do not plan an essential payment around an unconfirmed funding promise.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loans-colombia.html",
      "/en/online-loan-scams-colombia.html",
      "/en/alternatives-to-online-loans.html",
    ],
  }),
  article({
    slug: "loan-with-id-only-colombia.html",
    classification: "A",
    legacyTitle: "Loan With ID Only Colombia 2026: The Real Truth",
    title: "Loans With ID Only in Colombia: What the Phrase Really Means",
    legacyDescription:
      "Loan with ID only in Colombia: the truth about requirements, what lenders really ask and how to avoid advance payment scams. Updated 2026.",
    description:
      "Understand why an ID-only loan message does not necessarily mean there are no identity, contact, income or eligibility checks.",
    legacyH1: "Loans with ID only in Colombia — what it really means",
    h1: "Loans with ID only in Colombia: what it really means",
    intro:
      "An identification document may start an application, but the phrase “ID only” should not be interpreted as a promise that no other information or verification will be required.",
    pairedSpanishPath: "/prestamo-solo-con-cedula-colombia.html",
    sources: [],
    sections: [
      {
        title: "Identity is only one part of an application",
        paragraphs: [
          "A provider may use an ID number to locate or validate information, but it can also request contact details, identity checks, income information, a payment account or permission to consult relevant records. The exact requirements belong to the product and applicant; they should be confirmed on the provider’s official channel.",
          "A short form is not evidence of approval. It may be an initial eligibility or contact step, particularly when the website is an intermediary rather than the company that would issue the credit.",
        ],
      },
      {
        title: "Questions to ask before sharing your ID",
        paragraphs: [
          "First identify the legal entity operating the site, its role, and why it needs the information. Read the privacy notice and check whether data may be sent to lenders or other intermediaries. Use the official domain rather than a link received from an unknown message.",
        ],
        bullets: [
          "Who receives and controls the personal data?",
          "Is the service the lender or does it connect applications to third parties?",
          "What further checks occur before a final decision?",
          "Where are the rate, term, costs and complaint channels documented?",
        ],
      },
      {
        title: "Warning signs",
        paragraphs: [
          "Be cautious when a supposed lender guarantees approval, asks for an advance transfer to release funds, refuses to provide written conditions, or communicates only through an informal personal account. Do not send identity images or financial credentials until the recipient and purpose are clear.",
          "A legitimate-looking page can still be impersonated. Verify the domain independently and compare the name on the contract with the company you researched. If the final documents add requirements or costs, review them before accepting rather than relying on the original slogan.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loan-requirements-colombia.html",
      "/en/verify-legitimate-loan-company.html",
      "/en/online-loan-scams-colombia.html",
    ],
  }),
  article({
    slug: "loan-without-credit-history.html",
    classification: "A",
    legacyTitle: "First Loan No Credit History Colombia 2026: How to Get It",
    title: "First Credit Without a Credit History in Colombia",
    legacyDescription:
      "First loan without credit history Colombia 2026: simple requirements, lenders who approve and how to build your credit life step by step.",
    description:
      "A practical guide to researching a first credit product in Colombia when you have little or no established credit history.",
    legacyH1: "First loan in Colombia — how to start without history",
    h1: "First credit in Colombia without an established history",
    intro:
      "Having little credit history is different from having negative information. It does not guarantee acceptance or rejection, and each provider applies its own assessment and requirements.",
    pairedSpanishPath: "/credito-sin-historial-crediticio.html",
    sources: [],
    sections: [
      {
        title: "What a limited history means",
        paragraphs: [
          "A credit history records information associated with financial obligations and payment behavior. Someone who has not previously used formal credit may have less information available for an assessment. Providers may therefore rely on other verified information, but this varies by product.",
          "Do not confuse a lack of history with a promise of “no credit check.” Ask what information will be reviewed, what permissions are requested and which company makes the final decision.",
        ],
      },
      {
        title: "Start with affordability, not the maximum amount",
        paragraphs: [
          "Estimate a payment that remains manageable after rent, food, utilities and other essential commitments. Compare the amount actually received with the total expected payments, not only the advertised installment. A smaller amount can still be expensive if the term and charges are unfavorable.",
        ],
        bullets: [
          "Use the same amount and term when comparing alternatives.",
          "Check the rate period and every mandatory charge.",
          "Confirm payment dates and late-payment consequences.",
          "Keep the accepted contract and proof of payments.",
        ],
      },
      {
        title: "Build a record carefully",
        paragraphs: [
          "Only accept an obligation you understand and expect to repay. Pay according to the contract and review your records through official channels. If information appears inaccurate, use the relevant data-rights or complaint process rather than paying an unknown third party to “erase” it.",
          "Avoid repeated urgent applications across unfamiliar sites. Each request may involve new data permissions and intermediaries. Verify the service first and stop if it promises guaranteed approval or requests an advance payment.",
          "A first product should also be evaluated as a complete contract, not merely a way to create history. Ask how payments are recorded, where support is available and what happens if a payment cannot be made on time before accepting the obligation.",
        ],
      },
    ],
    relatedPaths: [
      "/en/check-credit-history-free.html",
      "/en/loan-with-bad-credit-datacredito.html",
      "/en/what-is-credit-study.html",
    ],
  }),
  article({
    slug: "online-loan-requirements-colombia.html",
    classification: "A",
    legacyTitle: "Online Loan Requirements Colombia 2026: Complete Guide",
    title: "Online Credit Requirements in Colombia: A Practical Checklist",
    legacyDescription:
      "Online loan requirements Colombia 2026: documents needed, step-by-step verification and how to protect your data. Complete checklist included.",
    description:
      "Review the types of identity, contact, income and payment information an online credit service may request, without assuming universal requirements.",
    legacyH1: "Requirements for an Online Loan in Colombia",
    h1: "Requirements for online credit in Colombia",
    intro:
      "Requirements vary by provider, product and applicant. This checklist explains common categories to confirm without presenting any item as universal eligibility criteria.",
    pairedSpanishPath: "/requisitos-credito-online-colombia.html",
    sources: [],
    sections: [
      {
        title: "Information a service may request",
        paragraphs: [
          "An application may request identity and contact details, information used to evaluate income or repayment capacity, and a destination for any approved funds. The provider may also ask for documents or authorization to verify information. The exact list must come from the official application and final documents.",
          "An intermediary may collect information for one or more third parties. Before submitting it, confirm who controls the data, who will receive it and whether the service itself makes the credit decision.",
        ],
      },
      {
        title: "Prepare safely",
        paragraphs: [
          "Use the provider’s official domain and read its privacy information. Do not share passwords, one-time codes or full financial credentials through chat. If identity images are required, confirm the recipient and purpose before uploading them.",
        ],
        bullets: [
          "Check that names and domains match across the site, privacy notice and contract.",
          "Ask which requirements are mandatory for the specific product.",
          "Review data-sharing permissions before accepting them.",
          "Keep copies of submitted documents and final terms where practical.",
        ],
      },
      {
        title: "Requirements do not equal approval",
        paragraphs: [
          "Meeting an initial checklist does not ensure a favorable decision. The provider may apply additional verification and assessment before presenting an offer. Likewise, a quick form does not prove that the service is a direct lender.",
          "If approved, compare the final amount, rate, term, payment schedule and charges with what was shown earlier. Do not continue when key conditions remain unavailable or when a payment is demanded merely to release supposed funds.",
          "Requirements can change between products operated by the same brand. Recheck the current application and contract for each request rather than reusing a checklist from an earlier visit or another applicant’s experience.",
          "If the provider does not explain a requested document, ask before submitting it.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loans-colombia.html",
      "/en/loan-with-id-only-colombia.html",
      "/en/verify-legitimate-loan-company.html",
    ],
  }),
  article({
    slug: "check-credit-history-free.html",
    classification: "C",
    legacyTitle: "Check Credit History Free Colombia 2026 | Step by Step",
    title: "How to Check Your Credit History for Free in Colombia",
    legacyDescription:
      "Check your credit history FREE in Colombia 2026: step-by-step to review Datacrédito, TransUnion without paying. Complete free guide.",
    description:
      "Use DataCrédito Experian’s documented free-history and data-rights channels to review your information and address possible inaccuracies.",
    legacyH1: "How to check your credit history for free",
    h1: "How to check your credit history for free",
    intro:
      "Review your information through the credit bureau’s official channels. This page explains the documented DataCrédito Experian route without promising results from unrelated paid services.",
    pairedSpanishPath: "/consultar-historial-crediticio-gratis.html",
    sources: sources(s.dataCreditoFreeHistory, s.dataCreditoHabeasData, s.dataCreditoPersonas),
    sections: [
      {
        title: "Start on the official channel",
        paragraphs: [
          "DataCrédito Experian publishes a free credit-history channel for individuals. Enter the service by navigating to the official domain yourself, check the address before providing personal information, and follow its current identity-verification process.",
          "The interface and verification steps can change. This guide does not reproduce credentials or claim that another website can provide the same official record. Do not share passwords or verification codes with someone offering to check the history for you.",
        ],
      },
      {
        title: "Review the information carefully",
        paragraphs: [
          "Look at the identity information, reported obligations and status shown in the record. Keep a note or permitted copy of anything you do not recognize. A report is a source of information; it is not, by itself, a promise that a particular lender will approve or reject an application.",
        ],
        bullets: [
          "Confirm that obligations belong to you.",
          "Compare balances and status with your own documents.",
          "Record the reporting entity connected with a disputed item.",
          "Use official contact and data-rights channels for a request.",
        ],
      },
      {
        title: "If information appears incorrect",
        paragraphs: [
          "DataCrédito publishes habeas-data channels for questions and requests concerning personal information. Describe the item precisely and keep the supporting documents and response records. Do not assume that paying an unknown intermediary can lawfully erase accurate information.",
          "If you are researching credit at the same time, separate correction of your record from a new application. Final eligibility remains the provider’s decision under the specific product conditions.",
          "Review the response to any data request and keep its reference number. If an item is accurate, the official history still helps you understand what a future provider may review; it does not support a promise that a third party can remove the information for payment.",
        ],
      },
    ],
    relatedPaths: [
      "/en/loan-with-bad-credit-datacredito.html",
      "/en/loan-without-credit-history.html",
      "/en/financial-consumer-rights-colombia.html",
    ],
  }),
  article({
    slug: "financial-consumer-rights-colombia.html",
    classification: "C",
    legacyTitle: "Financial Consumer Rights in Colombia",
    title: "Financial Consumer Rights in Colombia",
    legacyDescription:
      "Colombian law protects financial consumers with rights to information, fair treatment, complaints.",
    description:
      "Learn how clear information, written conditions, complaint records and the responsible authority matter when dealing with credit services in Colombia.",
    legacyH1: "Your rights as financial consumer",
    h1: "Financial consumer rights in Colombia",
    intro:
      "The applicable protection and complaint route depend on the entity and activity involved. Start by identifying the company, preserving documents and describing the issue precisely.",
    pairedSpanishPath: "/derechos-consumidor-financiero-colombia.html",
    sources: sources(
      s.sicFintechInstructions,
      s.sicDigitalCreditCourse,
      s.sfcSupervisedEntities,
      s.sicBancupoEnforcement,
      s.sicNanocredEnforcement,
    ),
    sections: [
      {
        title: "Clear information before acceptance",
        paragraphs: [
          "The approved SIC material on financing through technological channels emphasizes clear, written information about relevant interest and contractual conditions. Keep the offer, payment schedule, accepted contract and any message that explains a charge or change.",
          "A digital interface does not remove the need to understand who is contracting, the amount received, payment obligations, rate period, additional costs and consequences of late payment.",
        ],
      },
      {
        title: "Identify the entity and appropriate channel",
        paragraphs: [
          "Not every credit-related website is a supervised financial institution. The Superintendencia Financiera publishes information about supervised entities, while other activities may fall under different consumer or data-protection frameworks. Do not assume one authority applies universally.",
          "Send a written request to the company first when appropriate. Include dates, contract or application references, the disputed condition and the response requested. Keep delivery evidence and replies.",
        ],
      },
      {
        title: "Build a useful complaint record",
        bullets: [
          "Identify the legal entity and service involved.",
          "State the facts in chronological order.",
          "Attach only relevant documents and protect unnecessary personal data.",
          "Specify whether the issue concerns information, charges, data or collection.",
          "Check the competent authority for that entity and activity.",
        ],
        paragraphs: [
          "The cited enforcement actions are examples involving specific companies and facts. They should not be generalized into claims about every provider. Their practical lesson is to preserve written evidence and compare the actual conduct with the applicable information duties.",
          "When collection or data use is part of the problem, state that separately from a dispute about the amount owed. Clear categories, dates and requested outcomes make it easier for the company and any competent authority to understand the complaint.",
          "Do not send original documents when a secure copy or reference is sufficient for the stated procedure.",
        ],
      },
    ],
    relatedPaths: [
      "/en/verify-legitimate-loan-company.html",
      "/en/hidden-costs-online-loans.html",
      "/en/cant-pay-loan-what-to-do.html",
    ],
  }),
  article({
    slug: "hidden-costs-online-loans.html",
    classification: "C",
    legacyTitle: "Hidden Costs in Online Loans",
    title: "Additional Costs in Online Credit: What to Check",
    legacyDescription:
      "Identifying hidden costs: administrative fees, insurance, late payment penalties and early repayment fees.",
    description:
      "Compare the interest rate with every documented insurance, commission, service and late-payment charge before accepting online credit.",
    legacyH1: "Hidden costs and fees",
    h1: "Additional costs and fees in online credit",
    intro:
      "A rate alone may not describe the full payment obligation. Review every amount in the written offer and contract without assuming that a particular fee exists in every product.",
    pairedSpanishPath: "/costos-ocultos-creditos-online.html",
    sources: sources(
      s.sicFintechInstructions,
      s.sicDigitalCreditCourse,
      s.sicBancupoEnforcement,
      s.sicNanocredEnforcement,
    ),
    sections: [
      {
        title: "Separate interest from other charges",
        paragraphs: [
          "Identify the rate and the period in which it is expressed, then list any insurance, commission, platform service, collection amount or other concept that the documents actually include. Ask whether each item is mandatory, optional, recurring or charged once.",
          "Compare the net amount received with the payment schedule and expected total. A low advertised rate does not establish the complete cost if other mandatory amounts are omitted from the comparison.",
        ],
      },
      {
        title: "Use the final documents",
        paragraphs: [
          "The SIC material cited by the reviewed Spanish page addresses clear written information in technology-based financing. Save the final version accepted, not only a screenshot of an earlier calculator. If a figure changes, request a written explanation before continuing.",
        ],
        bullets: [
          "Amount requested and amount actually delivered.",
          "Number, amount and frequency of payments.",
          "Rate and its stated time period.",
          "Mandatory and optional services or insurance.",
          "Late-payment, collection and early-payment conditions.",
        ],
      },
      {
        title: "Compare like with like",
        paragraphs: [
          "Use the same amount and term, and convert rates to comparable periods before drawing a conclusion. Include only charges confirmed for each specific offer. The cited enforcement cases concern particular facts and do not prove that another company uses the same practices.",
          "If a cost remains unclear, pause and ask where it appears in the contract. The provider or lender involved is responsible for communicating the final conditions.",
          "Check when each charge is collected. A deduction before disbursement changes the amount actually received, while a recurring service can affect several payments. Record both effects instead of treating every charge as if it occurred at the same time.",
          "Ask for the currency and tax treatment of any amount that is not clearly labeled.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loan-interest-rates.html",
      "/en/online-loan-vs-bank.html",
      "/en/financial-consumer-rights-colombia.html",
    ],
  }),
  article({
    slug: "loan-with-bad-credit-datacredito.html",
    classification: "C",
    legacyTitle: "Loan With Bad Credit Datacrédito Colombia 2026 | Options",
    title: "Credit Options After a Negative DataCrédito Report",
    legacyDescription:
      "Bad credit in Datacrédito? Real loan options in Colombia 2026: credit bureaus, requirements and how to avoid financial scams.",
    description:
      "Understand how to review reported information, distinguish it from a provider’s credit decision, and avoid guaranteed-approval claims.",
    legacyH1: "Loans with negative credit report",
    h1: "Researching credit after a negative DataCrédito report",
    intro:
      "A credit report and a provider’s lending decision are related but not identical. No page can guarantee approval, and the first step is to understand the information recorded about you.",
    pairedSpanishPath: "/prestamo-reportado-datacredito.html",
    sources: sources(s.dataCreditoFreeHistory, s.dataCreditoHabeasData, s.dataCreditoPersonas),
    sections: [
      {
        title: "Review the record before applying again",
        paragraphs: [
          "Use DataCrédito Experian’s official free-history channel to inspect the information associated with you. Distinguish an accurate outstanding obligation from an item you do not recognize or believe is incorrect. Keep your supporting documents.",
          "For a possible inaccuracy, use the published habeas-data channels. Avoid services that promise to erase accurate information or guarantee a new loan in exchange for an advance payment.",
        ],
      },
      {
        title: "A report is not a universal decision rule",
        paragraphs: [
          "Each provider defines its product requirements and performs its own assessment. A website advertising credit for “reported” users may be a lender, an intermediary or only a lead-generation service. Identify its role before submitting data.",
          "Do not infer that the absence of a published minimum score means there is no assessment. Ask who makes the final decision and which written conditions apply if an offer is presented.",
        ],
      },
      {
        title: "Protect yourself while researching options",
        bullets: [
          "Do not pay an advance fee to unlock supposed approved funds.",
          "Verify the company name and official domain independently.",
          "Compare total payment, not only the installment or advertised rate.",
          "Do not use new debt to conceal an unaffordable payment problem.",
        ],
        paragraphs: [
          "If existing payments are already difficult, contact the creditor through documented channels and consider the guide on what to do when you cannot pay. A new obligation should only be considered after reviewing its effect on essential expenses.",
          "Researching several sites can also distribute personal data to multiple recipients. Limit applications to services whose identity, role and data practices you understand, and keep track of the permissions you granted.",
          "Compare any new offer with the existing payment problem rather than evaluating it in isolation.",
        ],
      },
    ],
    relatedPaths: [
      "/en/check-credit-history-free.html",
      "/en/loan-without-credit-history.html",
      "/en/cant-pay-loan-what-to-do.html",
    ],
  }),
  article({
    slug: "loans-for-retirees-colombia.html",
    classification: "C",
    legacyTitle: "Loans for Retirees in Colombia",
    title: "Credit for Pensioners in Colombia: What to Compare",
    legacyDescription:
      "Special loan options for retired people with pension as income proof. Generally favorable terms.",
    description:
      "Understand ordinary credit and payroll-deduction arrangements for pensioners without assuming favorable terms or universal eligibility.",
    legacyH1: "Loans for pensioners",
    h1: "Credit for pensioners in Colombia",
    intro:
      "Receiving a pension may be relevant to an application, but it does not guarantee approval or favorable conditions. Compare the specific product and how payments will be collected.",
    pairedSpanishPath: "/prestamos-para-pensionados-colombia.html",
    sources: sources(s.sfcLibranza, s.sfcRuneol, s.sicFintechInstructions),
    sections: [
      {
        title: "Identify the type of credit",
        paragraphs: [
          "Some products use ordinary payment methods, while a libranza arrangement involves deductions under its applicable authorization and process. Do not assume that every pensioner loan is a libranza or that a deduction automatically makes the product less expensive.",
          "Confirm the lender or provider, payment method, amount received, term, rate and all charges in the final documents. If an intermediary is involved, identify the entity that actually issues the credit.",
        ],
      },
      {
        title: "Questions for a payroll-deduction arrangement",
        bullets: [
          "Who is the creditor and who processes the deduction?",
          "What authorization is being granted and how can records be obtained?",
          "What happens if the pension payment or deduction changes?",
          "What are the total expected payments and optional services?",
        ],
        paragraphs: [
          "The official SFC materials listed below provide information about libranza rates, disbursements and RUNEOL. Use the current official publication when checking a concrete arrangement rather than relying on a generalized promise.",
        ],
      },
      {
        title: "Affordability still comes first",
        paragraphs: [
          "A regular pension does not remove household expenses or other obligations. Review the remaining monthly income after every deduction and preserve room for essential costs. Do not accept a higher amount merely because it is offered.",
          "Family members or caregivers should not pressure a pensioner to share credentials or accept unexplained documents. The person entering the contract should receive and understand the final conditions.",
          "Compare any deduction with existing obligations and the pension payment actually available each month. Ask for a schedule that shows the start, frequency and end of deductions, and preserve the authorization with the contract.",
          "If another person assists with the process, the applicant should still review the documents and retain control of identity and account credentials.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loan-interest-rates.html",
      "/en/hidden-costs-online-loans.html",
      "/en/verify-legitimate-loan-company.html",
    ],
  }),
  article({
    slug: "online-loan-interest-rates.html",
    classification: "C",
    legacyTitle: "Online Loan Interest Rates in Colombia",
    title: "How to Compare Online Credit Interest Rates in Colombia",
    legacyDescription:
      "Understanding interest rates, EA (effective annual rate) and total costs on online loans.",
    description:
      "Compare online credit rates using equivalent periods, the applicable credit category and every documented additional cost.",
    legacyH1: "Interest rates on online loans",
    h1: "How to compare interest rates on online credit",
    intro:
      "A rate comparison is meaningful only when the figures use equivalent periods and refer to the specific product and credit category being considered.",
    pairedSpanishPath: "/tasas-interes-prestamos-online.html",
    sources: sources(
      s.sfcIbcAugust2026,
      s.sfcRatesDashboard,
      s.sfcUsuryMethodology,
      s.sicFintechInstructions,
    ),
    sections: [
      {
        title: "Put rates on the same basis",
        paragraphs: [
          "Do not compare a monthly rate directly with an effective annual rate. Confirm the label, period and whether the figure is nominal or effective. If the documents do not explain a conversion, ask the provider for the comparable figure in writing.",
          "The applicable credit category also matters. Official IBC certifications distinguish modalities and periods, so a value for one category should not be treated as a universal reference for every product.",
        ],
      },
      {
        title: "Interest is not the entire payment",
        paragraphs: [
          "Review insurance, commissions, platform or service charges and late-payment terms only where the specific documents include them. Compare the amount actually received, the schedule and the expected total payments alongside the rate.",
        ],
        bullets: [
          "Same requested amount and term.",
          "Equivalent rate period and credit modality.",
          "Every mandatory charge documented for the offer.",
          "Payment frequency and consequences of delay.",
          "The final written contract rather than a promotional example.",
        ],
      },
      {
        title: "Use current official references carefully",
        paragraphs: [
          "The approved source set includes an August 2026 certification as a dated example and the SFC rates dashboard. Rates and certifications change. Recheck the official publication for the relevant period and category before making a current decision.",
          "A lower displayed rate does not automatically establish the most affordable option. The provider’s final documents determine the actual conditions.",
          "If one offer quotes only an installment, request the underlying rate, term and charges before comparing it with another. An installment can look lower because the repayment period is longer, not because the credit is less expensive overall.",
          "Record the date of every quoted rate because promotional and official reference figures can change.",
        ],
      },
    ],
    relatedPaths: [
      "/en/usury-rate-colombia.html",
      "/en/hidden-costs-online-loans.html",
      "/en/loan-offers.html",
    ],
  }),
  article({
    slug: "online-loan-vs-bank.html",
    classification: "C",
    legacyTitle: "Online Loans vs Traditional Banks",
    title: "Online Credit vs Bank Credit: Compare the Product, Not the Channel",
    legacyDescription:
      "Comparing online loans (faster, easier, higher rates) with traditional banks (lower rates, stricter).",
    description:
      "Compare written credit terms, provider identity, costs and process instead of assuming that online or bank credit is always faster, cheaper or easier.",
    legacyH1: "Online loans vs bank loans",
    h1: "Online credit vs bank credit",
    intro:
      "“Online” describes a channel and “bank” describes a type of entity. Neither label alone tells you which product costs less or fits your situation.",
    pairedSpanishPath: "/credito-online-vs-banco.html",
    sources: sources(s.sicFintechInstructions, s.sicDigitalCreditCourse, s.sfcCreditFaq),
    sections: [
      {
        title: "Compare concrete written offers",
        paragraphs: [
          "A bank can provide an entirely digital application, while a technology company may offer different products or act only as an intermediary. Compare the legal entity, product, amount delivered, rate period, term, payment schedule and total documented charges.",
          "Avoid stereotypes about speed or strictness. Verification, decision and funding depend on the provider, product and applicant. A streamlined interface does not guarantee a favorable outcome.",
        ],
      },
      {
        title: "What should be documented",
        paragraphs: [
          "The cited SIC material addresses clear written information in technology-based financing. Keep the offer and contract, and ask about any difference between an initial simulation and the final documents.",
        ],
        bullets: [
          "Who contracts and who makes the credit decision.",
          "Rate and the period in which it is expressed.",
          "Mandatory insurance, commissions and other costs.",
          "Payment dates, late-payment terms and complaint channels.",
          "Data permissions and any third parties receiving the application.",
        ],
      },
      {
        title: "Choose by affordability and clarity",
        paragraphs: [
          "The useful comparison is the one you can understand and repay without displacing essential expenses. A product with fewer application steps is not necessarily more affordable, and a lower rate may not capture every charge.",
          "If either option withholds the final terms or pressures you to accept immediately, pause. Compare the same amount and term and rely on the final written conditions.",
          "Also compare service and complaint access after acceptance. A digital process may be convenient, but the user should still know how to obtain account information, report a payment issue and preserve a copy of the agreement.",
          "Neither channel removes the need to verify the payment recipient and protect security codes.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loans-colombia.html",
      "/en/online-loan-interest-rates.html",
      "/en/hidden-costs-online-loans.html",
    ],
  }),
  article({
    slug: "usury-rate-colombia.html",
    classification: "C",
    legacyTitle: "Usury Rate in Colombia",
    title: "Usury Reference in Colombia: Category and Period Matter",
    legacyDescription:
      "Colombian law sets maximum interest rate (usury rate) that lenders cannot exceed. Updated monthly.",
    description:
      "Understand why Colombia’s usury reference depends on the applicable IBC credit category and period, and how to check the official certification.",
    legacyH1: "Maximum legal interest rate (usury)",
    h1: "Understanding the usury reference in Colombia",
    intro:
      "There is not one timeless percentage for every credit product. Identify the applicable credit modality and period before using an official IBC certification or deriving a usury reference.",
    pairedSpanishPath: "/tasa-de-usura-colombia.html",
    sources: sources(s.sfcIbcAugust2026, s.sfcRatesDashboard, s.sfcUsuryMethodology),
    sections: [
      {
        title: "IBC and the usury reference are not the same",
        paragraphs: [
          "The Superintendencia Financiera certifies Interés Bancario Corriente, or IBC, for defined credit modalities and periods. The reviewed source material explains the usury reference as 1.5 times the applicable IBC. The modality must be identified before performing that calculation.",
          "Do not take the consumption-and-ordinary-credit figure and apply it automatically to low-value, productive or other credit categories. The official dashboard shows that categories can have different IBC values.",
        ],
      },
      {
        title: "A dated example, not a current universal limit",
        paragraphs: [
          "For consumption and ordinary credit during August 2026, the approved certification states an IBC of 19.77% effective annual. Multiplying that dated category-specific figure by 1.5 gives 29.655% E.A., or 29.66% when shown to two decimals.",
          "That calculation is included only to explain the method. It is not a universal limit and should not be reused for another period or modality without checking the corresponding official publication.",
        ],
      },
      {
        title: "How to check a concrete contract",
        bullets: [
          "Identify the credit modality and relevant contract period.",
          "Open the corresponding official certification or dashboard entry.",
          "Ensure the compared rates use the same time period.",
          "Separate interest from insurance and other charges.",
          "Keep the contract, payment schedule and communications.",
        ],
        paragraphs: [
          "If the modality is unclear, request a written explanation before concluding that a rate is above or below a reference. For a current decision, always return to the current official source.",
          "The usury reference concerns interest and should not be used as a shortcut for evaluating every contract charge. Review the complete payment obligation separately and seek appropriate advice for a dispute involving a specific contract.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loan-interest-rates.html",
      "/en/hidden-costs-online-loans.html",
      "/en/financial-consumer-rights-colombia.html",
    ],
  }),
  article({
    slug: "verify-legitimate-loan-company.html",
    classification: "C",
    legacyTitle: "Verify if Loan Company is Legitimate",
    title: "How to Verify a Credit Company or Service in Colombia",
    legacyDescription:
      "Steps to verify: government registration, physical address, customer reviews, official website.",
    description:
      "Check a credit service’s legal identity, official domain, role, written terms and applicable supervision without relying on one signal alone.",
    legacyH1: "How to verify legitimate lenders",
    h1: "How to verify a credit company or service",
    intro:
      "Verification is a series of checks, not a single badge or search result. First establish who operates the service and whether it lends directly or connects users with third parties.",
    pairedSpanishPath: "/verificar-empresa-prestamos-legitima.html",
    sources: sources(s.sfcSupervisedEntities, s.sicFintechInstructions, s.sicDigitalCreditCourse),
    sections: [
      {
        title: "Match the identity across documents",
        paragraphs: [
          "Compare the company name, legal entity, domain, privacy notice, terms and final contract. A brand name can differ from a legal name, but the relationship should be explained. Navigate to the official domain independently when a link arrives through an unexpected message.",
          "Determine whether the service is a direct provider, broker, aggregator or lead generator. An intermediary should not be assumed to make the final lending decision.",
        ],
      },
      {
        title: "Check supervision without overgeneralizing",
        paragraphs: [
          "The Superintendencia Financiera publishes a directory of supervised entities. Absence from that directory does not, by itself, prove fraud, because not every company or activity belongs to the same supervisory framework. It does mean you should identify the applicable authority and business role carefully.",
        ],
        bullets: [
          "Check the exact legal name rather than only the brand.",
          "Review written rate, cost, term and complaint information.",
          "Confirm who receives personal data and applications.",
          "Keep evidence of the domain and documents consulted.",
        ],
      },
      {
        title: "Signals that require a pause",
        paragraphs: [
          "Guaranteed approval, advance transfers to release funds, pressure to act immediately, mismatched company names and informal-only communication are reasons to stop and investigate. Do not send passwords or one-time codes.",
          "Reviews and social profiles can provide context but are not proof on their own. Give more weight to consistent legal identity, official documents and verifiable channels.",
          "Repeat the checks at the point of acceptance. A legitimate company name does not validate a message sent from an unrelated account, and an impersonator may substitute different payment instructions after the initial contact.",
          "Verify changes through a separately obtained official contact channel before paying.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loan-scams-colombia.html",
      "/en/financial-consumer-rights-colombia.html",
      "/en/loan-offers.html",
    ],
  }),
  article({
    slug: "what-is-credit-study.html",
    classification: "C",
    legacyTitle: "What is a Credit Study",
    title: "What Is a Credit Study and What Can a Provider Review?",
    legacyDescription:
      "How lenders evaluate creditworthiness: payment history, income, debts, ability to repay.",
    description:
      "Understand the purpose of a credit study, the information a provider may assess and why submitting an application does not guarantee approval.",
    legacyH1: "Understanding credit studies",
    h1: "Understanding a credit study",
    intro:
      "A credit study is the provider’s assessment before deciding whether to present or approve a credit offer. Methods and required information vary by provider and product.",
    pairedSpanishPath: "/que-es-estudio-de-credito.html",
    sources: sources(
      s.sfcCreditFaq,
      s.dataCreditoFreeHistory,
      s.dataCreditoHabeasData,
      s.sicFintechInstructions,
    ),
    sections: [
      {
        title: "What the assessment is for",
        paragraphs: [
          "A provider may use verified application information and other data it is authorized to consult to evaluate the request and possible conditions. This can include identity, income or obligations, but no universal checklist applies to every product.",
          "An initial form or simulator is not necessarily the credit study itself. If an intermediary collects the application, another entity may perform the final assessment and issue any offer.",
        ],
      },
      {
        title: "Credit history and other information",
        paragraphs: [
          "Credit-history information may form part of an assessment, but a report does not dictate one universal outcome. DataCrédito Experian provides official channels for individuals to review information and exercise data rights when something appears inaccurate.",
        ],
        bullets: [
          "Read the authorization before allowing data consultation.",
          "Confirm which company makes the decision.",
          "Correct possible inaccuracies through official channels.",
          "Do not pay a third party for guaranteed approval or deletion promises.",
        ],
      },
      {
        title: "After the study",
        paragraphs: [
          "A provider may decline, request more information or present conditions that differ from an initial estimate. Review the final amount, rate, term, charges and payment schedule before accepting. A favorable decision is not an instruction to borrow the maximum offered.",
          "Keep the application and final documents. If you do not understand why information was requested or how it will be used, ask before continuing.",
          "A declined application should not lead to repeated submissions through unknown intermediaries. Review the information already supplied, the permissions granted and whether a different product would remain affordable before applying elsewhere.",
          "Request an explanation through the provider’s documented channel when one is available, but do not assume every decision can or must be changed.",
        ],
      },
    ],
    relatedPaths: [
      "/en/check-credit-history-free.html",
      "/en/loan-without-credit-history.html",
      "/en/online-loan-requirements-colombia.html",
    ],
  }),
  article({
    slug: "alternatives-to-online-loans.html",
    classification: "B",
    legacyTitle: "Alternatives to Online Loans",
    title: "Alternatives to Taking an Online Loan",
    legacyDescription:
      "Other options: traditional banks, credit unions, employer advances, family loans, payment plans.",
    description:
      "Consider payment arrangements, expense timing and other documented sources of funds before adding a new online credit obligation.",
    legacyH1: "Alternatives to online lending",
    h1: "Alternatives to taking an online loan",
    intro:
      "Before borrowing, define the expense, deadline and amount actually needed. Some situations can be addressed without creating a new high-pressure obligation.",
    pairedSpanishPath: "/alternativas-prestamos-online.html",
    sources: [],
    sections: [
      {
        title: "Start with the underlying expense",
        paragraphs: [
          "Ask whether the payment can be delayed, divided or renegotiated directly with the biller. A written payment arrangement may be easier to evaluate than taking separate credit to cover the same expense. Confirm every fee and consequence before agreeing.",
          "For a purchase rather than an emergency, consider waiting and saving part of the amount. Avoid moving an ordinary expense into debt merely because a digital application is convenient.",
        ],
      },
      {
        title: "Other sources still require clear terms",
        paragraphs: [
          "An employer advance, family arrangement, cooperative product or bank credit may be relevant in some circumstances, but none is universally available or automatically cheaper. Put repayment dates, deductions, costs and expectations in writing.",
        ],
        bullets: [
          "Compare the total amount to be repaid.",
          "Check whether payment is deducted automatically.",
          "Preserve essential monthly expenses.",
          "Avoid informal arrangements involving pressure or unclear collection terms.",
        ],
      },
      {
        title: "If credit remains necessary",
        paragraphs: [
          "Compare documented products using the same amount and term. Identify whether the website is a direct provider or intermediary, read the final contract and reject guaranteed-approval or advance-payment claims.",
          "A smaller requested amount or longer planning period can sometimes reduce immediate pressure, but a longer term may also change the total cost. Decide from the written conditions, not the speed of the application.",
        ],
      },
    ],
    relatedPaths: [
      "/en/cant-pay-loan-what-to-do.html",
      "/en/online-loan-vs-bank.html",
      "/en/loan-offers.html",
    ],
  }),
  article({
    slug: "cant-pay-loan-what-to-do.html",
    classification: "B",
    legacyTitle: "Can't Pay Loan - What to Do",
    title: "What to Do If You Cannot Pay a Loan",
    legacyDescription:
      "Steps: contact lender immediately, request payment plan restructuring, know your consumer rights.",
    description:
      "Practical steps for documenting a payment difficulty, contacting the creditor and evaluating written alternatives without taking impulsive new debt.",
    legacyH1: "What to do if you can't pay your loan",
    h1: "What to do if you cannot pay your loan",
    intro:
      "Act early, gather the contract and communicate through documented channels. This general guide does not promise that a creditor must offer a particular arrangement.",
    pairedSpanishPath: "/no-puedo-pagar-prestamo-que-hacer.html",
    sources: [],
    sections: [
      {
        title: "Understand the immediate situation",
        paragraphs: [
          "List the payment date, amount due, available funds and essential expenses. Read the contract sections on delay, collection and contact channels. Keep messages and payment records together so you can describe the issue accurately.",
          "Do not ignore communications, but verify that a person contacting you represents the creditor or authorized party before sharing information or making a transfer.",
        ],
      },
      {
        title: "Contact the creditor in writing",
        paragraphs: [
          "Explain when the difficulty began, what you can realistically pay and what written alternatives are available. Ask how any change affects the term, total cost, interest and status of the obligation. A lower immediate installment can still increase total payment.",
        ],
        bullets: [
          "Request confirmation of any arrangement in writing.",
          "Do not agree to an amount your budget cannot sustain.",
          "Keep proof of payments and communications.",
          "Use the correct complaint channel if information is unclear.",
        ],
      },
      {
        title: "Be careful with replacement debt",
        paragraphs: [
          "A new high-cost obligation can postpone rather than solve the problem. Compare the full effect before refinancing or borrowing elsewhere, and avoid any service promising guaranteed rescue in exchange for an advance fee.",
          "If collection involves threats, impersonation or demands through an unverified account, preserve evidence and seek the appropriate official assistance for the conduct involved.",
        ],
      },
    ],
    relatedPaths: [
      "/en/financial-consumer-rights-colombia.html",
      "/en/alternatives-to-online-loans.html",
      "/en/dangers-of-loan-sharks-colombia.html",
    ],
  }),
  article({
    slug: "dangers-of-loan-sharks-colombia.html",
    classification: "B",
    legacyTitle: "Dangers of Loan Sharks in Colombia",
    title: "Risks of Informal Gota a Gota Lending in Colombia",
    legacyDescription:
      "Illegal gota a gota lenders operate outside legal frameworks with abusive rates and collection practices.",
    description:
      "Understand the practical risks of informal gota a gota arrangements and safer steps when urgent cash needs create pressure.",
    legacyH1: "Risks of informal lenders (gota a gota)",
    h1: "Risks of informal lenders and gota a gota arrangements",
    intro:
      "Informal cash arrangements can involve unclear costs, frequent collection and serious pressure. Do not enter one without understanding that documentation and protections may be limited.",
    pairedSpanishPath: "/peligros-gota-gota-colombia.html",
    sources: [],
    sections: [
      {
        title: "Why the arrangement can be difficult to evaluate",
        paragraphs: [
          "Terms may be communicated verbally, payments may be collected frequently, and the total cost may be difficult to reconstruct. Without a clear contract, it can be hard to establish the amount received, balance, rate or consequences of delay.",
          "Pressure, access to personal contacts or threats are not acceptable substitutes for a documented collection process. Protect evidence and personal safety rather than confronting a collector alone.",
        ],
      },
      {
        title: "Before accepting urgent money",
        bullets: [
          "Calculate the total expected repayment, not only a daily amount.",
          "Do not hand over passwords, contact lists or account control.",
          "Consider a written payment arrangement for the original expense.",
          "Tell a trusted person if threats or coercion are occurring.",
        ],
        paragraphs: [
          "An online service is not automatically safe merely because it has a website. Verify its identity, role and written conditions using the same care applied to any credit option.",
        ],
      },
      {
        title: "If you are already affected",
        paragraphs: [
          "Keep a chronology of amounts, dates, messages and threats. Avoid deleting communications. Where there is immediate danger, prioritize emergency and law-enforcement assistance appropriate to your location.",
          "For a payment problem without immediate danger, review the documented creditor channel and consumer-rights information. Do not take another unexplained informal loan simply to meet the next collection.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loan-scams-colombia.html",
      "/en/alternatives-to-online-loans.html",
      "/en/financial-consumer-rights-colombia.html",
    ],
  }),
  article({
    slug: "loan-simulator-how-it-works.html",
    classification: "B",
    legacyTitle: "How Loan Simulators Work",
    title: "How Credit Simulators Work",
    legacyDescription:
      "Understanding loan simulation tools to calculate monthly payments before applying.",
    description:
      "Learn what a credit simulator can estimate, which inputs affect the result and why the final contract may differ from an illustration.",
    legacyH1: "Loan calculators and simulators",
    h1: "How credit calculators and simulators work",
    intro:
      "A simulator illustrates a possible payment schedule from entered assumptions. It is useful for comparison but is not approval or a final contractual offer.",
    pairedSpanishPath: "/simulador-credito-como-funciona.html",
    sources: [],
    sections: [
      {
        title: "The inputs determine the illustration",
        paragraphs: [
          "A calculator commonly uses an amount, term, payment frequency and interest rate. Some tools may include specified charges, while others show interest only. Read the labels and assumptions before comparing the result with another site.",
          "Small changes to term or rate can alter both the installment and total payment. A longer term may reduce an installment while increasing how long the obligation remains outstanding.",
        ],
      },
      {
        title: "What a simulator cannot promise",
        paragraphs: [
          "The result does not prove eligibility, approval, available amount or funding time. A provider may verify information and present different final conditions. An intermediary’s calculator may also cover products issued by third parties.",
        ],
        bullets: [
          "Check whether the rate period is monthly or annual.",
          "Identify which charges are included or excluded.",
          "Use the same amount and term across comparisons.",
          "Save the illustration only as a reference, not a contract.",
        ],
      },
      {
        title: "Compare the final offer",
        paragraphs: [
          "When documents are presented, compare the net amount, rate, payment dates, costs and expected total with the simulation. Ask about every difference before accepting.",
          "If the calculator omits necessary assumptions or uses a promotional figure without conditions, do not fill the gaps yourself. Use documented values from the provider involved.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loan-interest-rates.html",
      "/en/hidden-costs-online-loans.html",
      "/en/online-loans-colombia.html",
    ],
  }),
  article({
    slug: "loan-without-bank-account-colombia.html",
    classification: "B",
    legacyTitle: "Loan Without Bank Account Colombia 2026 | Options",
    title: "Researching Credit Without a Bank Account in Colombia",
    legacyDescription:
      "Loan without bank account Colombia 2026: real options with digital wallets (Nequi, Daviplata), requirements and alternatives. Updated guide.",
    description:
      "Questions to ask about disbursement and repayment when you do not have a traditional bank account, without claiming universal wallet availability.",
    legacyH1: "Loans without bank account",
    h1: "Researching credit without a bank account",
    intro:
      "A provider may require an account or another supported payment destination, but the accepted method varies. Confirm it directly instead of assuming every wallet or cash channel is available.",
    pairedSpanishPath: "/credito-sin-cuenta-bancaria-colombia.html",
    sources: [],
    sections: [
      {
        title: "Disbursement and repayment are separate questions",
        paragraphs: [
          "Ask where approved funds can be sent, who must own the destination and whether verification is required. Then confirm how payments are made, how long they take to register and what reference proves payment.",
          "Do not provide access credentials to a wallet or account. A provider may need identifying details, but it should not require your password or one-time security code.",
        ],
      },
      {
        title: "Check the complete cost of the payment method",
        paragraphs: [
          "A transfer, cash or wallet method may involve limits or charges outside the displayed credit installment. Ask which costs belong to the provider and which belong to the payment channel. Include confirmed mandatory costs in the affordability review.",
        ],
        bullets: [
          "Supported destination in the applicant’s own name.",
          "Payment instructions and posting time.",
          "Receipts and channels for correcting a missing payment.",
          "Fallback procedure if the destination cannot receive funds.",
        ],
      },
      {
        title: "Do not infer eligibility from the payment method",
        paragraphs: [
          "Support for a particular destination does not guarantee approval. Identity, assessment and final terms remain provider-specific. Likewise, a service collecting your contact details may be an intermediary rather than the lender.",
          "If a supposed representative asks for an advance transfer to activate a wallet or release funds, stop and verify the company through its official domain.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loan-requirements-colombia.html",
      "/en/verify-legitimate-loan-company.html",
      "/en/online-loan-scams-colombia.html",
    ],
  }),
  article({
    slug: "loans-for-self-employed-colombia.html",
    classification: "B",
    legacyTitle: "Loans for Self-Employed in Colombia",
    title: "Credit Research for Self-Employed Workers in Colombia",
    legacyDescription:
      "Requirements for freelancers and independent workers: tax returns, bank statements, income proof.",
    description:
      "How self-employed applicants can organize income information and compare provider-specific credit requirements without assuming a universal document list.",
    legacyH1: "Loans for self-employed workers",
    h1: "Credit research for self-employed workers",
    intro:
      "Irregular or independent income does not create one standard application process. Providers decide what evidence they accept and how they assess each request.",
    pairedSpanishPath: "/prestamos-para-independientes-colombia.html",
    sources: [],
    sections: [
      {
        title: "Describe income accurately",
        paragraphs: [
          "Organize records that show the source, timing and variability of income where available. Do not alter documents to fit an advertised requirement. Ask the provider which records are accepted for the specific product before uploading sensitive files.",
          "Separate business turnover from money available for personal repayments. Existing obligations, taxes, operating costs and seasonal changes can affect an affordable payment.",
        ],
      },
      {
        title: "Compare requirements and data handling",
        paragraphs: [
          "An application may request statements, tax-related records, invoices or other evidence, but none should be presented as universal here. Read the privacy notice and confirm whether an intermediary will send information to third parties.",
        ],
        bullets: [
          "Who evaluates the application?",
          "Which documents are mandatory for this product?",
          "How long will information be retained and shared?",
          "What final amount, term and costs are offered in writing?",
        ],
      },
      {
        title: "Plan for variable months",
        paragraphs: [
          "Evaluate the payment against a conservative income month, not only a recent high month. Preserve operating expenses and essential household costs. A longer term or automatic payment can create different risks when income timing varies.",
          "Meeting the document request does not guarantee approval. Reject services that promise a decision without assessment or demand money before supposed funds are released.",
        ],
      },
    ],
    relatedPaths: [
      "/en/online-loan-requirements-colombia.html",
      "/en/loan-simulator-how-it-works.html",
      "/en/loan-offers.html",
    ],
  }),
  article({
    slug: "online-loan-scams-colombia.html",
    classification: "B",
    legacyTitle: "Online Loan Scams in Colombia",
    title: "How to Recognize Online Credit Scams in Colombia",
    legacyDescription:
      "Warning signs: upfront fees, no verification, pressure tactics, too-good-to-be-true offers.",
    description:
      "Recognize advance-payment demands, impersonation, guaranteed approval and other warning signs while researching online credit in Colombia.",
    legacyH1: "Identifying and avoiding loan scams",
    h1: "Identifying and avoiding online credit scams",
    intro:
      "A polished website or familiar logo is not enough. Verify the operator, domain and written conditions before sharing personal information or sending money.",
    pairedSpanishPath: "/estafas-prestamos-online-colombia.html",
    sources: [],
    sections: [
      {
        title: "Common warning signs",
        paragraphs: [
          "Pause when a person guarantees approval, demands an advance transfer to release funds, pressures you to act immediately, or refuses to provide a contract and legal identity. Be cautious when names differ between the website, payment recipient and documents.",
          "Impersonators may copy a real company’s brand. Navigate to the official domain independently and use contact details published there rather than replying to the original message.",
        ],
      },
      {
        title: "Protect your information",
        bullets: [
          "Never share passwords or one-time verification codes.",
          "Read who controls and receives application data.",
          "Check links and domain spelling before uploading identity documents.",
          "Do not install remote-access software at a supposed lender’s request.",
          "Keep screenshots, messages and payment instructions as evidence.",
        ],
        paragraphs: [
          "A short application is not proof that no assessment occurs. It may be an intermediary form designed to collect contact information for third parties.",
        ],
      },
      {
        title: "If you suspect fraud",
        paragraphs: [
          "Stop further payments and communication that exposes more information. Preserve the chronology, account details, domains and messages. Contact the relevant payment provider and appropriate official channel for the conduct involved.",
          "Do not publish unnecessary identity or account information while seeking help. If a real company is being impersonated, notify it through its verified channel as well.",
        ],
      },
    ],
    relatedPaths: [
      "/en/verify-legitimate-loan-company.html",
      "/en/dangers-of-loan-sharks-colombia.html",
      "/en/financial-consumer-rights-colombia.html",
    ],
  }),
  article({
    slug: "small-amount-loans-colombia.html",
    classification: "B",
    legacyTitle: "Small Loans Colombia 2026 | From $50,000 COP",
    title: "Small-Amount Credit in Colombia: Cost and Affordability",
    legacyDescription:
      "Small loans from $50,000 in Colombia 2026: fast microcredits, compared rates and how to apply for small amounts safely.",
    description:
      "Evaluate small-amount credit by total cost, term and payment impact without relying on unsupported minimum amounts or speed claims.",
    legacyH1: "Small amount loans in Colombia",
    h1: "Small-amount credit in Colombia",
    intro:
      "A small principal does not automatically mean a small cost or low risk. Compare the complete written obligation and request only what your budget can support.",
    pairedSpanishPath: "/prestamos-pequenos-montos-colombia.html",
    sources: [],
    sections: [
      {
        title: "Do not judge cost from the principal alone",
        paragraphs: [
          "Review the rate period, term, payment frequency and every mandatory charge. A fixed charge can have a noticeable effect on a smaller amount, while a very short term can create a difficult payment date even when the total principal is limited.",
          "This page does not state a universal minimum amount. Available amounts and conditions belong to each provider and can change after assessment.",
        ],
      },
      {
        title: "Compare the same scenario",
        paragraphs: [
          "Use the same requested amount and term when reviewing alternatives. Compare the amount received with expected total payments and check how late-payment provisions would affect the obligation.",
        ],
        bullets: [
          "Net amount delivered.",
          "Rate and equivalent comparison period.",
          "Mandatory charges and optional services.",
          "Payment dates and accepted payment channels.",
          "Final contract and complaint information.",
        ],
      },
      {
        title: "Consider a non-credit alternative",
        paragraphs: [
          "For a narrow temporary expense, ask whether the bill can be delayed or divided before creating a separate obligation. Do not stack several small credits whose combined payments exceed the budget.",
          "If a service advertises guaranteed or immediate money, identify whether it is the direct provider and wait for the actual written offer. Never pay an advance amount merely to unlock supposed approved funds.",
        ],
      },
    ],
    relatedPaths: [
      "/en/alternatives-to-online-loans.html",
      "/en/hidden-costs-online-loans.html",
      "/en/loan-simulator-how-it-works.html",
    ],
  }),
] as const satisfies readonly EnglishArticle[];

export type EnglishArticleSlug = (typeof ENGLISH_ARTICLES)[number]["slug"];

export function getEnglishArticle(slug: string): EnglishArticle | undefined {
  return ENGLISH_ARTICLES.find((item) => item.slug === slug);
}

export function getEnglishArticleLabel(path: string): string {
  return ENGLISH_ARTICLES.find((item) => item.path === path)?.h1 ?? path;
}

export function getEnglishArticleWordCount(item: EnglishArticle): number {
  const text = [
    item.h1,
    item.intro,
    ENGLISH_ARTICLE_CONTEXT,
    ...item.sections.flatMap((section) => [
      section.title,
      ...section.paragraphs,
      ...(section.bullets ?? []),
    ]),
  ].join(" ");
  return text.match(/[A-Za-z0-9][A-Za-z0-9’'%-]*/g)?.length ?? 0;
}
