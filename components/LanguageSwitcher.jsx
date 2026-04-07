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
      className="inline-flex items-center gap-0.5 rounded-lg bg-black/5 dark:bg-white/[0.08] p-1"
      aria-label="Selector de idioma"
    >
      {["es", "en"].map((lang, i) => (
        <Fragment key={lang}>
          {i === 1 && (
            <span
              key="divider"
              aria-hidden="true"
              className="w-px h-3.5 bg-black/10 dark:bg-white/10 mx-0.5"
            />
          )}
          <button
            onClick={() => switchLocale(lang)}
            aria-pressed={locale === lang}
            disabled={isPending}
            className={[
              "text-xs font-semibold tracking-wide px-3 py-1.5 rounded-md transition-all duration-150",
              locale === lang
                ? "bg-white dark:bg-white/15 text-gray-900 dark:text-white shadow-sm"
                : "bg-transparent text-gray-400 dark:text-gray-500 hover:bg-black/5 dark:hover:bg-white/5 hover:text-gray-600 dark:hover:text-gray-300",
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
