import Typewriter from "typewriter-effect";
import { Link } from "react-scroll";

export default function Banner() {
  return (
    <>
      <div className='relative bg-dark w-full h-[calc(100vh_-_5rem)] mt-20 flex items-center justify-start overflow-hidden'>
        <div className='absolute z-10 flex flex-col justify-center items-start bg-black lg:px-sectionSides mm:px-sectionSidesMobile w-full h-full bg-opacity-[0.3]'>
          <h1 className='text-white md:text-7xl mm:text-5xl m:text-6xl text-left font-semibold mb-2'>
            ALEX TRAVERSO
          </h1>
          <h3 className='text-lightBlue font-semibold lg:text-3xl md:text-2x1 mm:text-xl mb-5 tracking-wide'>
            <Typewriter
              options={{
                strings: ["Desarrollador Web", "Diseñador Multimedia"],
                autoStart: true,
                loop: true,
                skipAddStyles: true,
                delay: 100,
              }}
            />
          </h3>
          {/*  <h3 className='text-lightBlue font-semibold lg:text-3xl md:text-2x1 mm:text-xl mb-5 tracking-wide'>
            Desarrollador web, Diseñador multimedia
          </h3> */}

          <Link
            activeClass='active'
            className='w-max font-semibold lg:text-lg lg:px-6 lg:py-2 smm:px-5 smm:py-2 mm:px-4 mm:py-1 mm:text-sm text-white border-2  border-lightBlue rounded-lg hover:bg-lightBlue transition-all tracking-widest cursor-pointer'
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
