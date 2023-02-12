import Link from "next/link";

export default function Footer() {
  return (
    <>
      <div className='lg:px-sectionSides m:px-sectionSidesMobile bg-dark h-14 p-sectionTop xs:flex xs:flex-col xs:justify-center xs:items-center xs:gap-2 lg:flex lg:flex-row lg:justify-between lg:items-center lg:gap-0'>
        <div className='flex gap-4 text-white'>
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
        </div>
        <div className='w-max text-white'>
          <p className=' text-[0.9rem]'>
            © 2023 Alex Traverso. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
