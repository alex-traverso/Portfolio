import React, { useState } from "react";
import { Link } from "react-scroll";
//Iconos
import Menu from "../Icons/Menu/index";
import Close from "../Icons/Close/index";
//Imagen logo
import Image from "next/image";
import profilePic from "public/logo.png";

const Nav = () => {
  let Links = [
    { name: "Sobre Mí", link: "aboutMe" },
    { name: "Habilidades", link: "skills" },
    { name: "Servicios", link: "services" },
    { name: "Proyectos", link: "projects" },
    { name: "Contacto", link: "contact" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0 z-50'>
      <div className='md:flex items-center justify-between bg-lightestGrey py-4 md:px-10 px-7'>
        <div
          className='font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800'
        >
          <Link
            activeClass='active'
            className=' cursor-pointer'
            to='home'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <Image
              className='mr-1 pt-2'
              src={profilePic}
              alt='Logo'
              height={45}
            />
          </Link>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'
        >
          <div>
            {open ? (
              <Close width={30} height={30} stroke='#fff' strokeWidth={2} />
            ) : (
              <Menu
                className=''
                stroke='#fff'
                width={30}
                height={30}
                onClick={() => {
                  setOpen(!open);
                }}
              />
            )}
          </div>
        </div>

        <ul
          className={`m:flex m:flex-col m:items-end md:flex md:flex-row md:items-center md:pb-0 pb-12 absolute md:static bg-lightestGrey md:z-auto z-[-1] right-0 w-[60%] m:h-screen md:h-auto md:w-auto md:pl-0 pr-10 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className='md:ml-8 text-xl md:my-0 mt-8 hover:text-lightBlue transition-all tracking-wide cursor-pointer'
            >
              <Link
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                to={link.link}
                className='text-white hover:text-lightBlue duration-500'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
