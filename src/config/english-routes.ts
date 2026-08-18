export const englishRoutes = {
  home: "/en/",
  offers: "/en/loan-offers.html",
  onlineLoans: "/en/online-loans-colombia.html",
  contact: "/en/contact.html",
  privacy: "/en/privacy-policy.html",
  terms: "/en/terms.html",
  sitemap: "/en/sitemap.html",
} as const;

export const englishPrimaryNavigation = [
  { label: "Loan information", href: englishRoutes.onlineLoans },
  { label: "Compare providers", href: englishRoutes.offers },
  { label: "Avoid scams", href: "/en/online-loan-scams-colombia.html" },
] as const;
