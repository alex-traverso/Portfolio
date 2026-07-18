"use client";
import Titles from "./Titles";
import { useState } from "react";
import { MotionScrollTransition } from "./MotionScrollTransition";
import { useTranslations } from "next-intl";

const HIDDEN_SKILL_NAMES = ["HTML", "CSS"];
const DISPLAY_NAME_OVERRIDES = {
  "React Js": "React",
  "Next Js": "Next.js",
};
const displayName = (name) => DISPLAY_NAME_OVERRIDES[name] ?? name;

export default function Skills({ skills = [] }) {
  const [category, setCategory] = useState("Development");

  const t = useTranslations("skills");

  const developmentSkills = skills.filter((s) => s.category === "development");
  const designSkills = skills.filter((s) => s.category === "design");

  const disciplines = ["frontend", "backend", "devops"];

  const renderDisciplineList = (items) => (
    <p className="text-base leading-relaxed text-textSecondary">
      {items.map((skill, i) => (
        <span key={skill.name}>
          <span className="hover:text-accent transition-colors cursor-default">
            {displayName(skill.name)}
          </span>
          {i < items.length - 1 && (
            <span className="text-textTertiary"> · </span>
          )}
        </span>
      ))}
    </p>
  );

  return (
    <>
      <section id="skills" className="w-full bg-base py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col justify-center items-center">
          <Titles>{t("title").toUpperCase()}</Titles>
          <MotionScrollTransition className="flex gap-6 text-xl md:text-2xl font-semibold text-textPrimary cursor-pointer mb-8">
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

          <div className="w-full">
            {category === "Development" ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full">
                {disciplines.map((discipline) => {
                  const items = developmentSkills.filter(
                    (s) =>
                      s.discipline === discipline &&
                      !HIDDEN_SKILL_NAMES.includes(s.name),
                  );
                  if (items.length === 0) return null;
                  return (
                    <div
                      key={discipline}
                      className="flex flex-col gap-6 min-w-0"
                    >
                      <h3 className="text-xs tracking-widest uppercase font-medium text-textTertiary">
                        {t(discipline)}
                      </h3>
                      {renderDisciplineList(items)}
                    </div>
                  );
                })}
              </div>
            ) : null}
            {category === "Design" ? renderDisciplineList(designSkills) : null}
          </div>
        </div>
      </section>
    </>
  );
}
