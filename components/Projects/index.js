import Titles from "../Titles";
import ProjectGallery from "../ProjectGallery";

export default function Projects() {
  return (
    <div className='px-sectionSides pt-sectionTop pb-sectionBottom bg-dark flex flex-col justify-center items-center'>
      <Titles>PROYECTOS</Titles>
      <ProjectGallery />
    </div>
  );
}
