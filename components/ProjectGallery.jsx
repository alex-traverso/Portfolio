import Project from "./Project";
import Button from "./Button";
import Arrow from "./Icons/Arrow";
import { MotionScrollTransition } from "./MotionScrollTransition";
import { StaggerContainer } from "./MotionStagger";
import { useTranslations } from "next-intl";

export default function ProjectGallery({ projects }) {
  const t = useTranslations("projects");

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex justify-center mt-4 w-full">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 items-stretch justify-center gap-6 w-full">
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
        </StaggerContainer>
      </div>
      <MotionScrollTransition className="w-full flex justify-start mt-4">
        <Button
          variant="secondary"
          size="md"
          href="https://github.com/alex-traverso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="whitespace-nowrap">{t("seeMore")}</span>
          <Arrow className="ml-2 h-5" />
        </Button>
      </MotionScrollTransition>
    </div>
  );
}
