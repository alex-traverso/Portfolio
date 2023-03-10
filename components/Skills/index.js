import Card from "../Card";
import Titles from "../Titles";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function Skills() {
  const [category, setCategory] = useState("Development");
  /*  const [development, setDevelopment] = useState(true);
  const [design, setDesign] = useState(false); */

  const { theme, setTheme } = useTheme();

  /* const toggleDevelopment = () => {
    setDevelopment(true);
    setDesign(false);
  };

  const toggleDesign = () => {
    setDesign(true);
    setDevelopment(false);
  }; */

  return (
    <>
      <div
        id='skills'
        className='lg:px-sectionSides mm:px-sectionSidesMobile pt-sectionTop pb-sectionBottom  bg:lightDarkBg dark:bg-dark flex flex-col justify-center items-center'
      >
        <Titles>HABILIDADES</Titles>
        <div className='flex gap-6 font-medium mm:text-xl m:text-[22px] xs:text-2xl text-dark dark:text-white cursor-pointer mb-6'>
          <button
            onClick={() => {
              setCategory("Development");
            }}
            className={
              category === "Development"
                ? "border-lightBlue border-b-2 text-lightBlue"
                : `transition-all hover:text-lightBlue hover:border-b-2 hover:border-lightBlue`
            }
          >
            Desarrollo Web
          </button>
          <button
            onClick={() => {
              setCategory("Design");
            }}
            className={
              category === "Design"
                ? "border-lightBlue border-b-2 text-lightBlue"
                : `transition-all hover:text-lightBlue hover:border-b-2 hover:border-lightBlue`
            }
          >
            Diseño
          </button>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-6 w-[70vw]'>
          {category === "Development" ? (
            <>
              <Card
                src='/DevelopmentIcons/html.svg'
                alt='HTML5'
                title='HTML5'
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
                src={
                  theme === "light"
                    ? "/DevelopmentIcons/nextLight.svg"
                    : "/DevelopmentIcons/nextDark.svg"
                }
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
          {category === "Design" ? (
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
