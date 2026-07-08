"use client";
import Titles from "./Titles";
import { useState } from "react";
import { useTheme } from "next-themes";
import SkillsCard from "./SkillsCard";
import { MotionScrollTransition } from "./MotionScrollTransition";
import { useTranslations } from "next-intl";

export default function Skills({ skills = [] }) {
  const [category, setCategory] = useState("Development");
  const { theme, setTheme } = useTheme();

  const t = useTranslations("skills");

  const developmentSkills = skills.filter((s) => s.category === "development");
  const designSkills = skills.filter((s) => s.category === "design");

  return (
    <>
      <section
        id="skills"
        className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-lightThemeLightToDark dark:bg-darkThemeLightToDark flex flex-col justify-center items-center"
      >
        <Titles>{t("title").toUpperCase()}</Titles>
        <MotionScrollTransition className="flex gap-6 font-madeOuterRegular font-medium mm:text-xl m:text-[22px] xs:text-2xl text-dark dark:text-white cursor-pointer mb-8">
          <button
            onClick={() => {
              setCategory("Development");
            }}
            className={`transition-all ${
              category === "Development"
                ? "text-lightBlue underline underline-offset-8"
                : "hover:text-lightBlue transition-all hover:underline hover:underline-offset-8"
            }`}
          >
            {t("development")}
          </button>
          <button
            onClick={() => {
              setCategory("Design");
            }}
            className={
              category === "Design"
                ? "text-lightBlue underline underline-offset-8"
                : "hover:text-lightBlue transition-all hover:underline hover:underline-offset-8"
            }
          >
            {t("design")}
          </button>
        </MotionScrollTransition>

        <div className="flex flex-wrap justify-center items-center gap-6 w-[70vw]">
          {category === "Development" ? (
            <>
              {developmentSkills.map((skill) => {
                const src =
                  theme === "dark" && skill.src_dark
                    ? skill.src_dark
                    : skill.src;
                return (
                  <SkillsCard
                    key={skill.name}
                    title={skill.name}
                    src={src}
                    alt={skill.name}
                  />
                );
              })}
            </>
          ) : null}
          {category === "Design" ? (
            <>
              {designSkills.map((skill) => {
                const src =
                  theme === "dark" && skill.src_dark
                    ? skill.src_dark
                    : skill.src;
                return (
                  <SkillsCard
                    key={skill.name}
                    title={skill.name}
                    src={src}
                    alt={skill.name}
                  />
                );
              })}
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
