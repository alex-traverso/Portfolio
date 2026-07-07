"use client";

import Link from "next/link";
import Image from "next/image";
import ToggleTheme from "@/components/ToggleTheme";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function LegalHeader({ locale }) {
  return (
    <header className="w-full bg-light dark:bg-lightestGrey shadow-md">
      <div className="flex items-center justify-between py-4 md:px-10 px-7">
        <Link href={`/${locale}`} className="flex items-center cursor-pointer">
          <Image
            className="mr-1 pt-2"
            src="/logo.png"
            alt="Logo"
            height={45}
            width={45}
          />
        </Link>
        <div className="flex items-center gap-x-4">
          <ToggleTheme />
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
