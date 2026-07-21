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
        className="w-full bg-surfaceAlt py-6"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col items-center gap-4">
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link
              href={`/${locale}/privacy-policy`}
              className="text-textSecondary hover:text-accent transition-colors text-sm"
            >
              {t("privacyLink")}
            </Link>
            <Link
              href={`/${locale}/terms-of-service`}
              className="text-textSecondary hover:text-accent transition-colors text-sm"
            >
              {t("termsLink")}
            </Link>
          </nav>
          <p className="text-textSecondary text-center text-sm">
            ©{today.getFullYear()} Alex Traverso. All rights reserved.
          </p>
        </div>
      </motion.footer>
    </>
  );
}
