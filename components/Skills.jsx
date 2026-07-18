"use client";
import Titles from "./Titles";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import SkillsCard from "./SkillsCard";
import { MotionScrollTransition } from "./MotionScrollTransition";
import { useTranslations } from "next-intl";

export default function Skills({ skills = [] }) {
  const [category, setCategory] = useState("Development");
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = useTranslations("skills");

  const developmentSkills = skills.filter((s) => s.category === "development");
  const designSkills = skills.filter((s) => s.category === "design");

  const disciplines = ["frontend", "backend", "devops"];

  const renderCard = (skill) => {
    const src =
      mounted && theme === "dark" && skill.src_dark ? skill.src_dark : skill.src;
    return (
      <SkillsCard
        key={skill.name}
        title={skill.name}
        src={src}
        alt={skill.name}
      />
    );
  };

  return (
    <>
      <section
        id="skills"
        className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-base flex flex-col justify-center items-center"
      >
        <Titles>{t("title").toUpperCase()}</Titles>
        <MotionScrollTransition className="flex gap-6 font-madeOuterRegular font-medium mm:text-xl m:text-[22px] xs:text-2xl text-textPrimary cursor-pointer mb-8">
          <button
            onClick={() => {
              setCategory("Development");
            }}
            className={`transition-all ${
              category === "Development"
                ? "text-accent underline underline-offset-8"
                : "hover:text-accent transition-all hover:underline hover:underline-offset-8"
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
                ? "text-accent underline underline-offset-8"
                : "hover:text-accent transition-all hover:underline hover:underline-offset-8"
            }
          >
            {t("design")}
          </button>
        </MotionScrollTransition>

        <div className="flex flex-col items-center gap-12 w-[70vw]">
          {category === "Development"
            ? disciplines.map((discipline) => {
                const items = developmentSkills.filter(
                  (s) => s.discipline === discipline,
                );
                if (items.length === 0) return null;
                return (
                  <div
                    key={discipline}
                    className="flex flex-col items-center gap-6 w-full rounded-3xl px-6 py-8 sm:px-8 border border-borderSubtle bg-surface"
                  >
                    <h3 className="font-madeOuterRegular font-medium uppercase tracking-wide text-textPrimary mm:text-lg xs:text-2xl">
                      {t(discipline)}
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-6">
                      {items.map(renderCard)}
                    </div>
                  </div>
                );
              })
            : null}
          {category === "Design" ? (
            <div className="w-full rounded-3xl px-6 py-8 sm:px-8 border border-borderSubtle bg-surface">
              <div className="flex flex-wrap justify-center items-center gap-6">
                {designSkills.map(renderCard)}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </>
  );
}
