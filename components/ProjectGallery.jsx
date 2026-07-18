import Link from "next/link";
import Project from "./Project";
import Arrow from "./Icons/Arrow";
import { MotionScrollTransition } from "./MotionScrollTransition";
import { useTranslations } from "next-intl";

export default function ProjectGallery({ projects }) {
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-center mt-4 w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-4 w-full">
          {projects.map((project) => (
            <Project
              key={project.title}
              src={project.src}
              alt={project.alt}
              title={project.title}
              description={project.description}
              github={project.github}
              url={project.url}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
      <MotionScrollTransition className="w-full flex justify-start max-w-screen-xl mt-4">
        <Link
          href="https://github.com/alex-traverso"
          target="_blank"
          className="cursor-pointer lg:text-base lg:font-medium lg:px-5 smm:px-5 smm:py-2 mm:px-4 mm:py-2 mm:text-sm mm:font-medium text-black dark:text-white border-2 border-lightBlue rounded-full hover:bg-lightBlue transition-all tracking-wide flex items-center text-center"
        >
          <span className="whitespace-nowrap">{t("seeMore")}</span>
          <Arrow className="ml-2 h-5 fill-white" />
        </Link>
      </MotionScrollTransition>
    </div>
  );
}
