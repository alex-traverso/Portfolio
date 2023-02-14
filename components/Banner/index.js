import Button from "../Button";

export default function Banner() {
  return (
    <>
      <div className='relative bg-slate-400 w-full h-[calc(100vh_-_5rem)] mt-20 flex items-center justify-start overflow-hidden'>
        <div className='absolute z-10 p-20 top-1/4 bg-black lg:px-sectionSides m:px-sectionSidesMobile w-full h-full bg-opacity-[0.3]'>
          <h1 className='text-white md:text-7xl  m:text-6xl text-left font-semibold mb-2'>
            ALEX TRAVERSO
          </h1>
          <h3 className='text-lightBlue font-semibold lg:text-3xl md:text-2x1 m:text-xl mb-5 tracking-wide'>
            Desarrollador web, Diseñador multimedia
          </h3>
          <Button>CONTACTO</Button>
        </div>

        <div className='absolute top-0 left-0 w-full object-cover'>
          {/* <video autoPlay loop muted className='h-full w-full block '>
            <source src='https://video.wixstatic.com/video/584eeb_7d69869f7df04c108b5dcf9ba9f64998/1080p/mp4/file.mp4' />
          </video> */}
          <video autoPlay loop muted className='h-full w-full block '>
            <source src='/video-banner.mp4' />
          </video>
        </div>
      </div>

      {/* <div className='flex relative flex-col h-[calc(100vh_-_5rem)] mt-20 p-20 bg-dark lg:px-sectionSides m:px-sectionSidesMobile'>
          
        </div> */}

      {/* <div className='flex relative flex-col h-[calc(100vh_-_5rem)] mt-20 p-20 bg-dark lg:px-sectionSides m:px-sectionSidesMobile'>
        <div className='absolute top-1/4 pl-0 py-20 pr-20 m:pr-0 m:py-10'>
          <h1 className='text-white md:text-7xl sm:text-center lg:text-left m:text-6xl font-semibold mb-2'>
            ALEX TRAVERSO
          </h1>
          <h3 className='text-lightBlue font-semibold lg:text-3xl md:text-2x1 m:text-xl mb-5 tracking-wide'>
            Desarrollador web, Diseñador multimedia
          </h3>
          <Button>CONTACTO</Button>
        </div>
        <video
          autoPlay
          loop
          className=' min-h-full min-w-full relative right-0'
        >
          <source src='https://video.wixstatic.com/video/584eeb_7d69869f7df04c108b5dcf9ba9f64998/1080p/mp4/file.mp4' />
        </video>
      </div> */}
    </>
  );
}
