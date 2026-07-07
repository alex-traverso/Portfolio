import LegalPage from "@/components/legal/LegalPage";
import { privacyContent } from "@/components/legal/legalContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const c = privacyContent[locale] ?? privacyContent.es;
  return { title: c.title, description: c.description };
}

export default async function Page({ params }) {
  const { locale } = await params;
  const content = privacyContent[locale] ?? privacyContent.es;
  return <LegalPage content={content} locale={locale} />;
}
