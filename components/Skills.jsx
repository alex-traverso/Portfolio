"use client";
import Titles from "./Titles";
import { useState } from "react";
import { useTheme } from "next-themes";
import SkillsCard from "./SkillsCard";
import { MotionScrollTransition } from "./MotionScrollTransition";

export default function Skills() {
  const [category, setCategory] = useState("Development");
  const { theme, setTheme } = useTheme();

  const baseUrl = `https://ucyrznwsgzfevzoiddmn.supabase.co/storage/v1/object/public/portfolio-assets/`;

  const developmentSkills = [
    {
      src: `${baseUrl}development-icons/html.svg`,
      title: "HTML5",
      alt: "HTML5",
    },
    {
      src: `${baseUrl}development-icons/css.svg`,
      alt: "CSS",
      title: "CSS",
    },
    {
      src: `${baseUrl}development-icons/javascript.svg`,
      alt: "Javascript",
      title: "Javascript",
    },
    {
      src: `${baseUrl}development-icons/react-js.svg`,
      alt: "React Js",
      title: "React Js",
    },
    {
      src: {
        lightThemeSrc: `${baseUrl}development-icons/next-light.svg`,
        darkThemeSrc: `${baseUrl}development-icons/next-dark.svg`,
      },
      alt: "Next Js",
      title: "Next Js",
    },
    {
      src: `${baseUrl}development-icons/mongodb.svg`,
      alt: "MongoDB",
      title: "MongoDB",
    },

    {
      src: `${baseUrl}development-icons/firebase.svg`,
      alt: "Firebase",
      title: "Firebase",
    },

    { src: `${baseUrl}development-icons/git.svg`, alt: "Git", title: "Git" },

    {
      src: `${baseUrl}development-icons/bootstrap.svg`,
      alt: "Bootstrap",
      title: "Bootstrap",
    },
    {
      src: `${baseUrl}development-icons/tailwind.svg`,
      alt: "Talwind CSS",
      title: "Talwind CSS",
    },
  ];

  const designSkills = [
    {
      src: `${baseUrl}design-icons/illustrator.svg`,
      alt: "Adobe Illustrator",
      title: "Adobe Illustrator",
    },
    {
      src: `${baseUrl}design-icons/photoshop.svg`,
      alt: "Adobe Photoshop",
      title: "Adobe Photoshop",
    },
    {
      src: `${baseUrl}design-icons/premiere.svg`,
      alt: "Adobe Premiere",
      title: "Adobe Premiere",
    },
    {
      src: `${baseUrl}design-icons/figma.svg`,
      alt: "Figma",
      title: "Figma",
    },
  ];

  return (
    <>
      <section
        id="skills"
        className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-lightThemeLightToDark dark:bg-darkThemeLightToDark flex flex-col justify-center items-center"
      >
        <Titles>HABILIDADES</Titles>
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
            Desarrollo Web
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
            Diseño
          </button>
        </MotionScrollTransition>

        <div className="flex flex-wrap justify-center items-center gap-6 w-[70vw]">
          {category === "Development" ? (
            <>
              {developmentSkills.map((skill) => {
                const src =
                  typeof skill.src === "object"
                    ? theme === "light"
                      ? skill.src.lightThemeSrc
                      : skill.src.darkThemeSrc
                    : skill.src;
                return (
                  <SkillsCard
                    key={skill.title}
                    title={skill.title}
                    src={src}
                    alt={skill.alt}
                  />
                );
              })}
            </>
          ) : null}
          {category === "Design" ? (
            <>
              {designSkills.map((skill) => (
                <SkillsCard
                  key={skill.title}
                  title={skill.title}
                  src={skill.src}
                  alt={skill.alt}
                />
              ))}
            </>
          ) : null}
        </div>
      </section>
    </>
  );
}
