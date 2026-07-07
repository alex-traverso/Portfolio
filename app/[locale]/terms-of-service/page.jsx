import LegalPage from "@/components/legal/LegalPage";
import { termsContent } from "@/components/legal/legalContent";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const c = termsContent[locale] ?? termsContent.es;
  return { title: c.title, description: c.description };
}

export default async function Page({ params }) {
  const { locale } = await params;
  const content = termsContent[locale] ?? termsContent.es;
  return <LegalPage content={content} locale={locale} />;
}
