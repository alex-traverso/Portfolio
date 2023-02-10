import Image from "next/image";
import profile from "public/profile.png";
import Titles from "../Titles";
import Button from "../Button";

export default function AboutMe() {
  return (
    <>
      <div className='px-sectionSides pt-sectionTop pb-sectionBottom bg-darkGrey flex justify-center h-auto items-center self-center flex-col'>
        <Titles>SOBRE MÍ</Titles>
        <div className='flex justify-between gap-16 transition-all'>
          <div className='relative w-[450px] flex items-center'>
            <div className='absolute right-0 border-2 h-[360px] w-[400px] z-20 border-lightBlue'></div>

            <div className='relative'>
              <div className='absolute right-0 top-0 border-2 w-40 z-20 border-lightBlue'></div>
              <div className='absolute left-0 bottom-0 border-2 w-60  z-20 border-lightBlue'></div>
              <Image
                className=' w-[400px] h-[450px] object-cover object-top'
                src={profile}
                alt='Logo'
              />
            </div>
          </div>
          <div className='text-white w-[600px]'>
            <h2 className='font-medium text-4xl mb-2'>Alex Traverso</h2>
            <div className=' my-6'>
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
