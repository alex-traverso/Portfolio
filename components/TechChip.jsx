"use client";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const DISPLAY_NAME_OVERRIDES = {
  "React Js": "React",
  "Next Js": "Next.js",
};

export const displayTechName = (name) => DISPLAY_NAME_OVERRIDES[name] ?? name;

const SIZE_CLASSNAMES = {
  md: "text-sm px-4 py-2",
  sm: "text-xs px-2 py-1",
};

const ICON_SIZES = {
  md: 24,
  sm: 16,
};

export default function TechChip({ skill, size = "md" }) {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted
    ? theme === "system"
      ? systemTheme
      : theme
    : "light";
  const iconSrc =
    currentTheme === "dark" && skill.src_dark ? skill.src_dark : skill.src;
  const iconSize = ICON_SIZES[size];

  return (
    <span
      className={`group flex gap-x-2 justify-between items-center ${SIZE_CLASSNAMES[size]} rounded-full border border-borderSubtle bg-transparent text-textSecondary hover:border-accent hover:text-accent transition-colors cursor-default`}
    >
      <Image
        src={iconSrc}
        alt={skill.name}
        height={iconSize}
        width={iconSize}
        className="transition-all duration-200"
      />
      {displayTechName(skill.name)}
    </span>
  );
}
