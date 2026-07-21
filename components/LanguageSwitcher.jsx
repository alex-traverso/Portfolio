"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useTransition, Fragment } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    startTransition(() => {
      router.push(newPath);
    });
  };

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-lg bg-surfaceAlt p-1"
      aria-label="Selector de idioma"
    >
      {["es", "en"].map((lang, i) => (
        <Fragment key={lang}>
          {i === 1 && (
            <span
              key="divider"
              aria-hidden="true"
              className="w-px h-3.5 bg-borderSubtle mx-0.5"
            />
          )}
          <button
            onClick={() => switchLocale(lang)}
            aria-pressed={locale === lang}
            disabled={isPending}
            className={[
              "text-xs font-semibold tracking-wide px-3 py-1.5 rounded-md transition-all duration-150",
              locale === lang
                ? "bg-surface text-textPrimary shadow-sm"
                : "bg-transparent text-textTertiary hover:bg-surface hover:text-textSecondary",
              isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer",
            ].join(" ")}
          >
            {lang.toUpperCase()}
          </button>
        </Fragment>
      ))}
    </div>
  );
}
