import Image from "next/image";
import profile from "public/profile.png";
import Titles from "../Titles";

export default function AboutMe() {
  return (
    <>
      <div className='px-sectionSides pt-sectionTop pb-sectionBottom bg-darkGrey flex justify-center h-auto items-center self-center flex-col'>
        <Titles>SOBRE MÍ</Titles>
        <div className='flex justify-between gap-16'>
          <div className='relative w-[450px] flex items-center'>
            <div className='absolute right-0 border-2 h-[340px] w-[400px] z-20 border-lightBlue'></div>

            <div className='relative'>
              <div className='absolute right-0 top-0 border-2 w-40 z-20 border-lightBlue'></div>
              <div className='absolute left-0 bottom-0 border-2 w-60  z-20 border-lightBlue'></div>
              <Image
                className=' w-[400px] h-[400px] object-cover object-top'
                src={profile}
                alt='Logo'
              />
            </div>
          </div>
          <div className='text-white w-[600px]'>
            <h2 className='font-medium text-4xl mb-2'>Alex Traverso</h2>
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
              Siempre estoy dispuesto a aprender cosas nuevas para desarrollarme
              profesionalmente y pertenecer a un equipo en el cual pueda
              colaborar con mis esfuerzos y adquirir experiencia.
            </p>
            {/* <p>
                Mi nombre es Alex Traverso, tengo 23 años y nací en Buenos
                Aires, Argentina. Cuando descubrí el mundo del desarrollo web me
                di cuenta que era algo que me gustaba demasiado por lo que
                decidí adentrarme al máximo. Actualmente estoy desarrollándome
                en lenguajes como Html, Css y Javascript. Además de esto tengo
                conocimientos en diseño gráfico y multimedia, en softwares como
                Adobe Illustrator, Photoshop, Figma entre otros.
              </p> */}
          </div>
        </div>
        {/* <div className='duration-400 text-white relative flex md:min-h-[286px] max-w-[346px] cursor-pointer flex-col items-center gap-4 rounded-xl border border-indigo-300/50 p-6 shadow-inner transition-all hover:-translate-y-2 hover:bg-indigo-300/50 dark:border-zinc-700/40 dark:shadow-zinc-700/40 dark:hover:bg-zinc-600/30 dark:hover:shadow-transparent'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia placeat
          velit dignissimos eligendi ipsam aliquid recusandae accusantium
          aperiam amet magnam, enim iste nam eaque tempora provident nemo
          nostrum a accusamus.
        </div> */}
      </div>
    </>
  );
}
