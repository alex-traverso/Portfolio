import Image from "next/image";
import profile from "public/profile.png";
import Titles from "../Titles";
import Button from "../Button";

export default function AboutMe() {
  return (
    <>
      <div
        id="aboutMe"
        className="lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-lightestBg dark:bg-darkGrey md:flex md:justify-center h-auto md:items-center md:self-center md:flex-col mm:flex mm:justify-end mm:flex-col "
      >
        <Titles>SOBRE MÍ</Titles>
        <div className="flex lg:flex-row lg:items-start gap-16 transition-all mm:flex-col mm:justify-center mm:items-center mm:w-full">
          <div className=" rounded-lg mm:w-[280px] m:w-[300px] md:w-[400px] xs:w-[350px] flex items-center overflow-hidden">
            <Image
              className="object-cover w-full h-full object-top drop-shadow-md hover:scale-[1.02] duration-[0.3s]"
              src={profile}
              alt="Logo"
            />
          </div>
          <div className="text-black dark:text-white xl:w-[600px] md:w-[400px] xs:w-[350px] mm:w-[280px] m:w-[300px] ">
            <h2 className="font-medium lg:text-left xl:text-4xl mb-2  mm:text-center mm:text-3xl">
              Alex Traverso
            </h2>
            <div className="my-6 mm:text-center lg:text-left">
              <p>
                ¡Hola! Mi nombre es Alex Traverso y soy un Desarrollador Front
                End. Soy una persona apasionada por el mundo del desarrollo y
                tecnología, además de trabajar en equipo. Mis principales
                habilidades son:
                <br />
                <br />
                HTML5 | CSS | JAVASCRIPT | REACT JS | NEXT JS | GIT
                <br />
                <br />
                Aunque tengo conocimientos acerca de:
                <br />
                <br />
                REDUX | NODEJS | EXPRESS | MONGODB | MONGOOSE.
                <br />
                <br />
                Siempre estoy dispuesto a aprender cosas nuevas para
                desarrollarme profesionalmente y pertenecer a un equipo en el
                cual pueda colaborar con mis esfuerzos y adquirir experiencia.
              </p>
            </div>
            <div className=" lg:block mm:flex mm:justify-center">
              <Button
                href="/CV - Alex Traverso.pdf"
                target="_blank"
                rel="noreferrer"
              >
                DESCARGAR CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
