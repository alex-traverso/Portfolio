import { Link } from "react-scroll";

export default function Footer() {
  let Links = [
    { name: "Sobre Mí", link: "aboutMe" },
    { name: "Habilidades", link: "skills" },
    { name: "Servicios", link: "services" },
    { name: "Proyectos", link: "projects" },
    { name: "Contacto", link: "contact" },
  ];

  return (
    <>
      <div className='lg:px-sectionSides m:px-sectionSidesMobile bg-dark h-14 p-sectionTop xs:flex xs:flex-col xs:justify-center xs:items-center xs:gap-2 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-0'>
        <div className='w-auto flex gap-4'>
          {Links.map((link) => (
            <>
              <ul className='list-none'>
                <li key={link.name} className=' text-white'>
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
              </ul>
            </>
          ))}
        </div>
        {/* <div className='flex gap-4 text-white'>
          <Link className='hover:text-lightBlue transition-all' href='/'>
            Home
          </Link>
          <Link className='hover:text-lightBlue transition-all' href='/'>
            Sobre Mí
          </Link>
          <Link className='hover:text-lightBlue transition-all' href='/'>
            Proyectos
          </Link>
          <Link className='hover:text-lightBlue transition-all' href='/'>
            Contacto
          </Link>
        </div> */}
        <div className='w-max text-white'>
          <p className=' text-[0.9rem]'>
            © 2023 Alex Traverso. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
