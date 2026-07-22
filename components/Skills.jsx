"use client";
import Titles from "./Titles";
import { useState, Fragment } from "react";
import { MotionScrollTransition } from "./MotionScrollTransition";
import { StaggerContainer, StaggerItem } from "./MotionStagger";
import { useTranslations } from "next-intl";
import TechChip from "./TechChip";

const HIDDEN_SKILL_NAMES = ["HTML", "CSS"];

const CATEGORY_DEVELOPMENT = "Development";
const CATEGORY_DESIGN = "Design";

const CATEGORIES = [
  { value: CATEGORY_DEVELOPMENT, labelKey: "development" },
  { value: CATEGORY_DESIGN, labelKey: "design" },
];

export default function Skills({ skills = [] }) {
  const [category, setCategory] = useState(CATEGORIES[0].value);

  const t = useTranslations("skills");

  const developmentSkills = skills.filter((s) => s.category === "development");
  const designSkills = skills.filter((s) => s.category === "design");

  const disciplines = ["frontend", "backend", "devops"];

  const renderChips = (items) => (
    <StaggerContainer className="flex flex-wrap gap-2 justify-center">
      {items.map((skill) => (
        <StaggerItem key={skill.name} as="span">
          <TechChip skill={skill} />
        </StaggerItem>
      ))}
    </StaggerContainer>
  );

  return (
    <>
      <section id="skills" className="w-full bg-base pt-24 md:pt-36">
        <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col justify-center items-center">
          <Titles>{t("title").toUpperCase()}</Titles>
          <MotionScrollTransition className="mb-8">
            <div className="inline-flex items-center gap-0.5 rounded-lg bg-surfaceAlt p-1">
              {CATEGORIES.map(({ value, labelKey }, i) => (
                <Fragment key={value}>
                  {i > 0 && (
                    <span
                      aria-hidden="true"
                      className="w-px h-3.5 bg-borderSubtle mx-0.5"
                    />
                  )}
                  <button
                    onClick={() => {
                      setCategory(value);
                    }}
                    aria-pressed={category === value}
                    className={`text-sm uppercase font-semibold px-4 py-2 rounded-md transition-all duration-150 ${
                      category === value
                        ? "bg-surface text-textPrimary shadow-sm"
                        : "bg-transparent text-textTertiary hover:bg-surface hover:text-textSecondary"
                    }`}
                  >
                    {t(labelKey)}
                  </button>
                </Fragment>
              ))}
            </div>
          </MotionScrollTransition>

          <div className="w-full">
            {category === CATEGORY_DEVELOPMENT ? (
              <div className="flex flex-col gap-8 w-full">
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
                      className="flex flex-col items-center w-full gap-3"
                    >
                      <h3 className="text-xs tracking-widest uppercase font-medium text-textTertiary">
                        {t(discipline)}
                      </h3>
                      {renderChips(items)}
                    </div>
                  );
                })}
              </div>
            ) : null}
            {category === CATEGORY_DESIGN ? renderChips(designSkills) : null}
          </div>
        </div>
      </section>
    </>
  );
}
