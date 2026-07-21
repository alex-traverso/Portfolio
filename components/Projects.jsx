import Titles from "./Titles";
import ProjectGallery from "./ProjectGallery";
import { useTranslations } from "next-intl";

export default function Projects({ projects }) {
  const t = useTranslations("projects");

  return (
    <div
      id="projects"
      // className="w-full bg-lightThemeLightToDark dark:bg-darkThemeLightToDark py-16 md:py-24"
      className="w-full bg-base py-16 md:py-24"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col justify-center items-center">
        <Titles>{t("title").toUpperCase()}</Titles>
        <ProjectGallery projects={projects} />
      </div>
    </div>
  );
}
