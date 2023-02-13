import Card from "../Card";
import Titles from "../Titles";

export default function Skills() {
  return (
    <>
      <div
        id='skills'
        className='lg:px-sectionSides m:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-dark flex flex-col justify-center items-center'
      >
        <Titles>HABILIDADES</Titles>

        <div className='flex flex-wrap justify-center items-center gap-6 w-[70vw]'>
          <Card
            src='/html.svg'
            alt='HTML'
            title='HTML'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
          <Card
            src='/css.svg'
            alt='CSS'
            title='CSS'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
          <Card
            src='/javascript.svg'
            alt='Javascript'
            title='Javascript'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
          <Card
            src='/reactJs.svg'
            alt='React Js'
            title='React Js'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
          <Card
            src='/nextJs.svg'
            alt='Next Js'
            title='Next Js'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
          <Card
            src='/git.svg'
            alt='Git'
            title='Git'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
          <Card
            src='/firebase.svg'
            alt='Firebase'
            title='Firebase'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
          <Card
            src='/bootstrap.svg'
            alt='Bootstrap'
            title='Bootstrap'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
          <Card
            src='/tailwind.svg'
            alt='Talwind'
            title='Talwind'
            description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
          ></Card>
        </div>
      </div>
    </>
  );
}
