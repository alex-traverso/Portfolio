import Card from "../Card";
import ServicesCard from "../ServicesCard";
import Titles from "../Titles";

export default function Services() {
  return (
    <>
      <div className='px-sectionSides pt-sectionTop pb-sectionBottom bg-darkGrey flex flex-col justify-center items-center'>
        <Titles>SERVICIOS</Titles>

        <div className='flex flex-wrap justify-center items-center gap-6 w-[70vw]'>
          <ServicesCard
            src='/html.svg'
            alt='HTML'
            title='HTML'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          />
          <Card
            src='/html.svg'
            alt='HTML'
            title='HTML'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
        </div>
      </div>
    </>
  );
}
