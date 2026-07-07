import { Fragment } from "react";
import LegalHeader from "@/components/legal/LegalHeader";
import Footer from "@/components/Footer";
import {
  CONTACT_EMAIL,
  LAST_UPDATED_FORMATTED,
  LAST_UPDATED_LABEL,
} from "@/components/legal/legalContent";

// Reemplaza el marcador __EMAIL__ dentro de un párrafo por un enlace mailto.
function renderParagraph(text) {
  const parts = text.split("__EMAIL__");
  return parts.map((part, i) => (
    <Fragment key={i}>
      {part}
      {i < parts.length - 1 && (
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-lightBlue hover:underline break-words"
        >
          {CONTACT_EMAIL}
        </a>
      )}
    </Fragment>
  ));
}

export default function LegalPage({ content, locale }) {
  const dateLabel = LAST_UPDATED_LABEL[locale] ?? LAST_UPDATED_LABEL.es;
  const dateValue = LAST_UPDATED_FORMATTED[locale] ?? LAST_UPDATED_FORMATTED.es;

  return (
    <div className="min-h-screen bg-lightestBg dark:bg-dark text-darkGrey dark:text-lightGrey themeTransition flex flex-col">
      <LegalHeader locale={locale} />

      <main className="flex-1 lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-madeOuterRegular text-lightBlue text-3xl md:text-4xl font-bold mb-2">
            {content.heading}
          </h1>
          <p className="text-sm text-lightGrey mb-10">
            {dateLabel}: {dateValue}
          </p>

          {content.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-madeOuterRegular text-2xl md:text-3xl font-bold mt-10 mb-3">
                {section.heading}
              </h2>
              {section.paragraphs?.map((paragraph, j) => (
                <p key={j} className="leading-relaxed mb-4">
                  {renderParagraph(paragraph)}
                </p>
              ))}
              {section.list && (
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  {section.list.map((item, k) => (
                    <li key={k} className="leading-relaxed">
                      {renderParagraph(item)}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </main>

      <Footer />
    </div>
  );
}
