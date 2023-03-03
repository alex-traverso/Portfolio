import ServicesCard from "../ServicesCard";
import Titles from "../Titles";

export default function Services() {
  return (
    <>
      <div
        id='services'
        className='lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-lightestBg dark:bg-darkGrey flex flex-col justify-center items-center'
      >
        <div>
          <Titles>SERVICIOS</Titles>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-6 w-[70vw]'>
          <ServicesCard
            src='/uxui-icon.svg'
            alt='Diseño UX - UI'
            title='Diseño UX - UI'
            description='Desarrollo de interfaz y experiencia de usuario de la manera más óptima posible.'
          />
          <ServicesCard
            src='/design-icon.svg'
            alt='Diseño web y gráfico'
            title='Diseño web y gráfico'
            description='Diseños modernos y minimalistas para tus sitios web o identidad visual'
          />
          <ServicesCard
            src='/development-icon.svg'
            alt='Desarrollo de aplicaciones web'
            title='Desarrollo de aplicaciones web'
            description='Desarrollo de aplicaciones web con tecnologías como Javascript, React Js, Next Js.'
          />
        </div>
      </div>
    </>
  );
}
