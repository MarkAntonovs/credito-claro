import { EnglishContentSection, EnglishPageLayout } from "@/components/layouts/english-page-layout";
import { englishRoutes } from "@/config/english-routes";

export interface EnglishUtilitySection {
  title: string;
  paragraphs: string[];
}

export function EnglishUtilityPage({
  eyebrow,
  title,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  sections: EnglishUtilitySection[];
}) {
  return (
    <EnglishPageLayout
      breadcrumbs={[{ label: "Home", href: englishRoutes.home }, { label: title }]}
      eyebrow={eyebrow}
      title={title}
      intro={intro}
      relatedLinks={[
        { label: "English HTML sitemap", href: englishRoutes.sitemap },
        { label: "Privacy policy", href: englishRoutes.privacy },
        { label: "Terms of use", href: englishRoutes.terms },
      ]}
    >
      {sections.map((section) => (
        <EnglishContentSection key={section.title} title={section.title}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </EnglishContentSection>
      ))}
    </EnglishPageLayout>
  );
}
