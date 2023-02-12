import Link from "next/link";
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
        <Link href={"/"}>
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
          } lg:flex lg:items-center lg:w-auto w-full m:relative`}
        >
          <ul className='text-white lg:flex lg:flex-row lg:justify-between lg:gap-14 m:w-full m:h-[200px] m:py-4 m:pr-4 m:flex m:flex-col m:items-end m:gap-3 m:shadow-md lg:font-medium m:bg-lightestGrey lg:bg-transparent lg:h-auto mt-1 text-lg transition-all'>
            <li>
              <Link
                className='hover:text-lightBlue transition-all tracking-wide'
                href='#'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-lightBlue transition-all tracking-wide'
                href='#'
              >
                Sobre Mí
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-lightBlue transition-all tracking-wide'
                href='#'
              >
                Proyectos
              </Link>
            </li>
            <li>
              <Link
                className='hover:text-lightBlue transition-all tracking-wide'
                href='#'
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
