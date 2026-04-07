import Titles from "./Titles";
import ProjectGallery from "./ProjectGallery";
import { useTranslations } from "next-intl";

export default function Projects({ projects }) {
  const t = useTranslations("projects");

  return (
    <div
      id="projects"
      className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-lightThemeLightToDark dark:bg-darkThemeLightToDark flex flex-col justify-center items-center"
    >
      <Titles>{t("title").toUpperCase()}</Titles>
      <ProjectGallery projects={projects} />
    </div>
  );
}
