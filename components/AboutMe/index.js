import Image from "next/image";
import profile from "public/profile.png";
import Titles from "../Titles";
import Button from "../Button";

export default function AboutMe() {
  return (
    <>
      <div className='lg:px-sectionSides m:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-darkGrey flex justify-center h-auto items-center self-center flex-col'>
        <Titles>SOBRE MÍ</Titles>
        <div className='flex lg:flex-row lg:justify-between gap-16 transition-all m:flex-col m:justify-center m:items-center'>
          <div className='lg:w-[450px] xs:w-[350px] flex items-center'>
            <Image
              className=' lg:w-[400px] lg:h-[450px] object-cover object-top'
              src={profile}
              alt='Logo'
            />
          </div>
          <div className='text-white xl:w-[600px] lg:w-[400px] xs:w-[300px]'>
            <h2 className='font-medium lg:text-left xl:text-4xl mb-2  m:text-center m:text-3xl'>
              Alex Traverso
            </h2>
            <div className='my-6'>
              <p>
                ¡Hola! Mi nombre es Alex Traverso y soy un Desarrollador Front
                End. Soy una persona apasionada por el mundo del desarrollo y
                tecnología, además de trabajar en equipo. Mis principales
                habilidades son:
              </p>
              <br />
              <p>HTML5 | CSS | JAVASCRIPT | REACT JS | GIT</p>
              <br />
              <p>Aunque tengo conocimientos acerca de:</p>
              <br />
              <p>REDUX | NEXT JS | NODEJS | EXPRESS | MONGODB | MONGOOSE.</p>
              <br />
              <p>
                Siempre estoy dispuesto a aprender cosas nuevas para
                desarrollarme profesionalmente y pertenecer a un equipo en el
                cual pueda colaborar con mis esfuerzos y adquirir experiencia.
              </p>
            </div>
            <Button>DESCARGAR CV</Button>
          </div>
        </div>
      </div>
    </>
  );
}
