import Titles from "../Titles";
import ProjectGallery from "../ProjectGallery";

export default function Projects() {
  return (
    <div
      id='projects'
      className='lg:px-sectionSides m:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg:lightDarkBg dark:bg-dark flex flex-col justify-center items-center'
    >
      <Titles>PROYECTOS</Titles>
      <ProjectGallery />
    </div>
  );
}
