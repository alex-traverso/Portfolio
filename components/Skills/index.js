import Card from "../Card";
import Titles from "../Titles";
import { useState } from "react";

export default function Skills() {
  const [development, setDevelopment] = useState(true);
  const [design, setDesign] = useState(false);

  const toggleDevelopment = () => {
    setDevelopment(true);
    setDesign(false);
  };

  const toggleDesign = () => {
    setDesign(true);
    setDevelopment(false);
  };

  return (
    <>
      <div
        id='skills'
        className='lg:px-sectionSides m:px-sectionSidesMobile pt-sectionTop pb-sectionBottom bg-dark flex flex-col justify-center items-center'
      >
        <Titles>HABILIDADES</Titles>
        <div className='flex gap-3 font-medium text-2xl text-white cursor-pointer mb-6'>
          <h3
            onClick={toggleDevelopment}
            className='transition-all hover:text-lightBlue hover:border-b-2 hover:border-lightBlue'
          >
            Desarrollo
          </h3>
          <h3
            onClick={toggleDesign}
            className='transition-all hover:text-lightBlue hover:border-b-2 hover:border-lightBlue'
          >
            Diseño
          </h3>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-6 w-[70vw]'>
          {development ? (
            <>
              <Card
                src='/DevelopmentIcons/html.svg'
                alt='HTML'
                title='HTML'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DevelopmentIcons/css.svg'
                alt='CSS'
                title='CSS'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DevelopmentIcons/javascript.svg'
                alt='Javascript'
                title='Javascript'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DevelopmentIcons/reactJs.svg'
                alt='React Js'
                title='React Js'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DevelopmentIcons/nextJs.svg'
                alt='Next Js'
                title='Next Js'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DevelopmentIcons/git.svg'
                alt='Git'
                title='Git'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DevelopmentIcons/firebase.svg'
                alt='Firebase'
                title='Firebase'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DevelopmentIcons/bootstrap.svg'
                alt='Bootstrap'
                title='Bootstrap'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DevelopmentIcons/tailwind.svg'
                alt='Talwind'
                title='Talwind'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
            </>
          ) : null}
          {design ? (
            <>
              <Card
                src='/DesignIcons/illustrator.svg'
                alt='Adobe Illustrator'
                title='Adobe Illustrator'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DesignIcons/photoshop.svg'
                alt='Adobe Photoshop'
                title='Adobe Photoshop'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DesignIcons/premiere.svg'
                alt='Adobe Premiere'
                title='Adobe Premiere'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
              <Card
                src='/DesignIcons/figma.svg'
                alt='Figma'
                title='Figma'
                description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore'
              ></Card>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
}
