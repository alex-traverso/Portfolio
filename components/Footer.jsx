"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const today = new Date();
  const locale = useLocale();
  const t = useTranslations("legal");

  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="lg:px-sectionSides mm:px-sectionSidesMobile bg-lightDarkBg dark:bg-dark py-6 flex flex-col items-center gap-3"
      >
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link
            href={`/${locale}/politica-de-privacidad`}
            className="text-black dark:text-zinc-300 hover:text-lightBlue dark:hover:text-lightBlue transition-colors mm:text-[0.8rem] m:text-[0.9rem]"
          >
            {t("privacyLink")}
          </Link>
          <Link
            href={`/${locale}/terminos-de-servicio`}
            className="text-black dark:text-zinc-300 hover:text-lightBlue dark:hover:text-lightBlue transition-colors mm:text-[0.8rem] m:text-[0.9rem]"
          >
            {t("termsLink")}
          </Link>
        </nav>
        <p className="text-black dark:text-zinc-300 text-center mm:text-[0.8rem] m:text-[0.9rem]">
          ©{today.getFullYear()} Alex Traverso. All rights reserved.
        </p>
      </motion.footer>
    </>
  );
}
