export type PageType =
  "commercial" | "pillar" | "article" | "provider" | "trust" | "legal" | "utility";

export interface Source {
  id: string;
  label: string;
  url: string;
  publisher?: string;
  checkedAt?: string;
}

export interface ContentAuthor {
  name: string;
  role: string;
}

export interface RelatedRoute {
  label: string;
  path: string;
}

export interface ArticleMetadata {
  pageType: "article";
  title: string;
  description: string;
  h1: string;
  intro: string;
  author: ContentAuthor;
  publishedAt?: string;
  reviewedAt?: string;
  sources: Source[];
  relatedRoutes: RelatedRoute[];
}
