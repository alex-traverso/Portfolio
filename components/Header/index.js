import { Link } from "react-scroll";
import Menu from "../Icons/Menu/index";
import Image from "next/image";
import profilePic from "public/logo.png";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <header className='fixed top-0 left-0 z-50 h-20 w-screen bg-darkGrey lg:px-12 m:px-10 lg:py-10 m:py-2 m:block lg:flex lg:flex-col lg:justify-center'>
      <div className='flex justify-between items-center flex-wrap'>
        <Link
          activeClass='active'
          className=' cursor-pointer'
          to='home'
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          <Image src={profilePic} alt='Logo' height={45} />
        </Link>

        <Menu
          className='lg:hidden block h-6 w-6 cursor-pointer'
          stroke='#fff'
          width={30}
          height={30}
          onClick={() => {
            setOpen(!open);
          }}
        />

        <nav
          className={`${
            open ? "block" : "hidden"
          } lg:flex lg:items-center lg:w-auto flex justify-end w-full slideInDown relative`}
        >
          <ul className='text-white lg:w-full lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-14 m:w-[65%] m:h-screen m:py-6 m:pr-4 m:flex m:flex-col m:items-end m:gap-3 m:shadow-md lg:font-medium m:bg-lightestGrey lg:bg-transparent lg:h-auto text-lg transition-all'>
            <li className='cursor-pointer'>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className='hover:text-lightBlue transition-all tracking-wide'
              >
                Home
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                className='hover:text-lightBlue transition-all tracking-wide'
                activeClass='active'
                to='skills'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Habilidades
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                className='hover:text-lightBlue transition-all tracking-wide'
                activeClass='active'
                to='services'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Servicios
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                className='hover:text-lightBlue transition-all tracking-wide'
                activeClass='active'
                to='aboutMe'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Sobre Mí
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                className='hover:text-lightBlue transition-all tracking-wide'
                activeClass='active'
                to='projects'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Proyectos
              </Link>
            </li>
            <li className='cursor-pointer'>
              <Link
                className='hover:text-lightBlue transition-all tracking-wide'
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
