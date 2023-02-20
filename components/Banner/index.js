import Button from "../Button";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <>
      <div className='relative bg-slate-800 w-full h-[calc(100vh_-_5rem)] mt-20 flex items-center justify-start overflow-hidden'>
        <div className='absolute z-10 flex flex-col justify-center items-start bg-black lg:px-sectionSides m:px-sectionSidesMobile w-full h-full bg-opacity-[0.3]'>
          <h1 className='text-white md:text-7xl  m:text-6xl text-left font-semibold mb-2'>
            ALEX TRAVERSO
          </h1>
          <h3 className='text-lightBlue font-semibold lg:text-3xl md:text-2x1 m:text-xl mb-5 tracking-wide'>
            Desarrollador web, Diseñador multimedia
          </h3>

          <Link
            activeClass='active'
            className='w-max font-semibold lg:text-lg lg:px-6 lg:py-2 sm:px-5 sm:py-2 m:px-4 m:py-1 m:text-sm text-white border-2  border-lightBlue rounded-lg hover:bg-lightBlue transition-all tracking-widest cursor-pointer'
            to='contact'
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            CONTACTO
          </Link>
        </div>

        <div className='absolute top-0 left-0 h-screen w-screen'>
          <video autoPlay loop muted className='h-full w-full object-cover'>
            <source src='/video-banner.mp4' />
          </video>
        </div>
      </div>
    </>
  );
}
